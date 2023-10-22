import { Formik, Field, Form } from 'formik';
import { FilterContainer } from './Filter.styled';

export const Filter = ({ inputValue, handleChange }) => {
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
              value={inputValue}
              onChange={handleChange}
            />
          </div>
        </Form>
      </Formik>
    </FilterContainer>
  );
};
