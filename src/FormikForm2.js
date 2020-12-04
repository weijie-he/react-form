import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const errorMessage = errorName => {
    return <ErrorMessage name={errorName} component="div" className="invalid-feedback" />
};

export default () => (
    <div className="container">
        <h1>Formik with yup</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            <Form>
                <div className="form-group">
                    <Field
                        className="form-control"
                        type="text"
                        placeholder="firstName"
                        name={"firstName"}
                    />
                    {errorMessage("firstName")}
                </div>
                <div className="form-group">
                    <Field
                        className="form-control"
                        type="text"
                        placeholder="lastName"
                        name={"lastName"}
                    />
                    {errorMessage("lastName")}
                </div>
                <div className="form-group">
                    <Field
                        type="email"
                        name={"email"}
                        className="form-control"
                        placeholder="Email"
                    />
                    {errorMessage("email")}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </div>
            </Form>
        </Formik>
    </div>
);