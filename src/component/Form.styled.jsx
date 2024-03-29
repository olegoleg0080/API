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

export const List = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 30px;
padding: 50px 0 ;
  
`;

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
`;

export const Item = styled.li`
  width: calc((100% - 4*30px) / 5)
`;