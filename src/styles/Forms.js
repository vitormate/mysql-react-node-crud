import styled from "styled-components";

export const FormContainer = styled.form`
    width: 100%;
    justify-content: space-evenly;
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    /* background-color: #FFF; */
    padding: 20px;
    /* box-shadow: 0px 0px 5px #CCC; */
    border-radius: 5px;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

export const Label = styled.label`
    color: #195275;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    padding: 10px;
    background-color: #3FB4BA;
    width: 150px;
    height: 40px;
    font-size: 20px;
    font-family: 'Poppins';
    cursor: pointer;
    border: none;
    color: white;
`;