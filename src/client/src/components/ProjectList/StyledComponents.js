import theme from '../../theme';
import styled from 'styled-components';

const Root = styled.div`
    width: 25rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
`;

const TableRoot = styled.table`
    margin: 1rem;
    width: 20rem;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
    border: 1px solid ${theme.colors.sagimaYellow};
    font-size: ${theme.fontSizes.h1};
    background: ${theme.colors.sagimaYellow};
    width: 100%;
`;

const DataLink = styled.a`
    text-decoration: none;
    color: ${theme.colors.black};

    :hover {
        cursor: pointer;
        color: ${theme.colors.sagimaYellow};
    }
`;

const TableData = styled.td`
    font-size: ${theme.fontSizes.h3};
`;

export {
    Root,
    TableData,
    TableRoot,
    TableRow,
    TableHeader,
    DataLink,
};