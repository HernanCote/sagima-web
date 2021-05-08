import React from 'react';
import sagimaLogo from '../../static/sagima/sagima.png';

import { H1, P } from '../Foundation';

import {
    LogoImage,
    Root,
    Content,
} from './StyledComponents';

const EmptyState = ({
    className,
}) => (
        <Root>
            <LogoImage src={sagimaLogo} alt="sagima logo" />
            <Content>
                <H1>Estamos en proceso de creación</H1>
                <P>Para mayor información escribir a <b>contacto@sagima.com.co</b></P>
            </Content>
        </Root>
    );

export default EmptyState;