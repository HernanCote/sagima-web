import React from 'react';
import styled from 'styled-components';

import { H1 } from '../../components/Foundation';
import ProjectList from '../../components/ProjectList';
import projectListMock from './projectListMock';

import Footer from '../../components/Footer';

import theme from '../../theme';

const PortfolioRoot = styled.div`
	background-color: ${theme.colors.white};
	height: calc(100vh - (${theme.heights.breakLine} + ${theme.heights.footer} + ${theme.heights.navbar}));
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	margin-top: 10rem;
	width: 40%;
`;

const Projects = ({
  className, //
}) => (
  <PortfolioRoot className={className}>
    <Content>
      <H1>Proyectos - ASI</H1>
      <ProjectList projects={projectListMock} />
    </Content>
    <Footer />
  </PortfolioRoot>
);

export default Projects;
