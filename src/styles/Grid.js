import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    /* background-color: #fff; */
    padding: 20px;
    /* box-shadow: 0px 0px 5px #ccc; */
    border-radius: 5px;
    max-width: 1280px;
    /* margin: 20px auto; */
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    color: #195275;
    font-size: 23px;
    font-weight: 400;
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

export const Td = styled.td`
    color: #195275;
    padding-top: 15px;
    text-align: ${(props) => (props.alighCenter ? "center" : "start")};

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;