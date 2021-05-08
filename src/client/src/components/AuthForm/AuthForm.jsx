import React from 'react';

import { FormActions } from './StyledComponents';
import { Button } from '../Foundation';

import {
	FormRoot,
	FormItem,
	Input,
	Label,
} from '../Form';

const AuthForm = ({
	className,
	onSubmitHandler,
}) => {
	const emailEl = React.createRef();
	const passwordEl = React.createRef();

	const submitClicked = e => {
		e.preventDefault();
		const email = emailEl.current.value;
		const password = passwordEl.current.value;
		onSubmitHandler({ email, password });
	};

	return (
		<FormRoot className={className} onSubmit={submitClicked}>
			<FormItem>
				<Label htmlFor="email">E-Mail</Label>
				<Input type="email" id="email" ref={emailEl} />
			</FormItem>
			<FormItem>
				<Label htmlFor="password">Contraseña</Label>
				<Input type="password" id="password" ref={passwordEl} />
			</FormItem>
			<FormActions>
				<Button withShadow type="submit">
					Iniciar Sesión
				</Button>
			</FormActions>
		</FormRoot>
	);
};

export default AuthForm;
