import { Field, Form } from "formik";
import styled from "styled-components";

export const FormBlock = styled.div`
    margin: 0 auto;
    width: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SearchForm = styled(Form)`
    width: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const SearchField = styled(Field)`
    padding: 0;
    width: 200px;
    height: 40px;
`;

export const SearchBtn = styled.button`
    width: 200px;
    height: 40px;
    background-color: #00fb0d;
`;
