import React, { useContext } from 'react';
import styled from 'styled-components';

import AuthContext from '../../context/auth-context';

import AuthForm from '../../components/AuthForm';
import theme from '../../theme';

const AuthRoot = styled.div`
	background-color: ${theme.colors.white};
	height: calc(100vh - (${theme.heights.breakLine} + ${theme.heights.navbar}));
`;

const Section = styled.section`
	background-color: ${theme.colors.white};
	padding-top: 10rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const AuthIndex = () => {
	const contextType = useContext(AuthContext);

	const submitHandler = async ({ email, password }) => {
		if (email.trim().length === 0 || password.trim().length === 0) {
			return;
		}

		let requestBody = {
			query: `
                query LoginUser($email: String!, $password: String!){
                    login(email: $email, password: $password) {
                        userId
                        token
                        tokenExpiration
                    }
                }
            `,
			variables: {
				email,
				password,
			},
		};

		try {
			const url = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080';
			const response = await fetch(`${url}/graphql`, {
				method: 'POST',
				body: JSON.stringify(requestBody),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.status !== 200 && response.status !== 201) {
				throw new Error('Failed');
			}
			const { data, errors } = await response.json();
			if (errors) {
				throw new Error(errors[0].message);
			}
			const { token, userId, tokenExpiration } = data.login;
			if (token) {
				contextType.login(token, userId, tokenExpiration);
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<AuthRoot>
			<Section>
				<AuthForm onSubmitHandler={submitHandler} />
			</Section>
		</AuthRoot>
	);
};

export default AuthIndex;
