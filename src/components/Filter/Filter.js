import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { FilterContainer } from './Filter.styled';

export class Filter extends Component {
  render() {
    return (
      <FilterContainer>
        <p>Find contacts by name</p>
        <Formik
          initialValues={{
            search: '',
          }}
          onSubmit={(values, actions) => {
            console.log(values);
            //actions.resetForm();
          }}
        >
          <Form>
            <div className="container">
              <label htmlFor="search">Name</label>
              <Field
                id="search"
                name="search"
                placeholder="John Doe"
                value={this.props.inputValue}
                onChange={this.props.handleChange}
              />
            </div>
          </Form>
        </Formik>
      </FilterContainer>
    );
  }
}
