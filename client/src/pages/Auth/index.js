import React, { useContext } from 'react';
import styled from 'styled-components';

import AuthContext from '../../context/auth-context';

import { H1 } from '../../components/Foundation'
import AuthForm from '../../components/AuthForm';

const Section = styled.section`
    height: calc(100vh - 5rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const AuthIndex = () => {
    const contextType = useContext(AuthContext);

    const submitHandler = async ({ email, password, isLogin }) => {

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
            const response = await fetch('/graphql', {
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
        }
        catch (err) {
            console.log(err);
        }
    };
    return (
        <Section>
            <H1>Iniciar Sesión</H1>
            <AuthForm onSubmitHandler={submitHandler} />
        </Section >
    );
};

export default AuthIndex;