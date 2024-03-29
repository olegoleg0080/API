import { Formik } from "formik";
import { FormBlock, SearchBtn, SearchField, SearchForm } from "./Form.styled";

export const Form = ({ onSubm }) => {
    return (
        <FormBlock>
            <h1>Contact Us</h1>
            <Formik
                initialValues={{ name: "", email: "" }}
                onSubmit={(values, { resetForm }) => {
                    // console.log(this.props);
                    onSubm(values.query.toLowerCase().replaceAll(" ", ""));
                    resetForm();
                }}
            >
                <SearchForm>
                    <SearchField name="query" type="text" />
                    <SearchBtn type="submit">Submit</SearchBtn>
                </SearchForm>
            </Formik>
        </FormBlock>
    );
};
