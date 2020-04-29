import styled from 'styled-components';

const Root = styled.div`
    padding-top: 10rem;
    width: 40rem;
    margin: 0 auto;
`;

const LogoImage = styled.img`
    width: 100%;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export {
    LogoImage,
    Root,
    Content,
};