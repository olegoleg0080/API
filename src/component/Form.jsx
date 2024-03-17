import { Formik } from 'formik';
import React, { Component } from 'react'
import { FormBlock, SearchBtn, SearchField, SearchForm } from './Form.styled';

export default class Form extends Component {
  render() {
    return (
        <FormBlock>
            <h1>Contact Us</h1>
            <Formik
              initialValues={{ name: "", email: "" }}
              onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              <SearchForm>
                <SearchField name="name" type="text" />
                <SearchBtn type="submit">Submit</SearchBtn>
              </SearchForm>
            </Formik>
        </FormBlock>
    )
  }
}
