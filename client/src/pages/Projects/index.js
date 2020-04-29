import React from 'react';
import styled from 'styled-components';

import { H1 } from '../../components/Foundation'
import ProjectList from '../../components/ProjectList';
import projectListMock from './projectListMock';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 10rem;
    width: 40%;
`;

const Projects = ({ className }) => (
    <Root className={className}>
        <H1>Proyectos - ASI</H1>
        <ProjectList projects={projectListMock} />
    </Root>
);

export default Projects;