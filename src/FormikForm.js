import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";

// Error Component
const errorMessage = errorName => {
  return <ErrorMessage name={errorName} component="div" className="invalid-feedback"/> 
};

var array1 = []
for (var i=0;i<10;i++){
  array1.push(i)
}

var initialValues = {}
for (i in array1){
    initialValues["username"+i]=""
    initialValues["mobilenumber"+i]=""
    initialValues["email"+i]=""
    initialValues["password"+i]=""
    initialValues["url"+i]=""
    initialValues["genderOptions"+i]=""
    initialValues["DateofBirth"+i]=""
    initialValues["SubscribetoNewsletter"+i]=""
}

const validateUserName = value => {
  let error;
  if (!value) {
    error = required;
  } else if (value.length > 12) {
    error = maxLength;
  }
  return error;
};

const validateEmail = value => {
  let error;
  if (!value) {
    error = required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

const validateMobileNumber = value => {
  let error;
  if (value.length > 12) {
    error = maxLength;
  }
  return error;
};

const validatePassword = value => {
  let error;
  if (!value) {
    error = required;
  }
  return error;
};

const validateDateOfBirth = value => {

  let error;
  if (!value) {
    error = required;
  } else if (
    !/(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/i.test(
      value
    )
  ) {
    error = "Please use the following format MM/DD/YYYY";
  }
  return error;
};

export default () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, isValidating }) => (
        <div className="container">
          <div className="col-sm-12">
            <h3>Formik</h3>
          </div>
          <div className="col-sm-12">
            <Form>
           {/* 渲染 10 次 */}
           { array1.map(i =>{return(     
               <>           
                <div className="form-group">
                    <Field
                    className="form-control"
                    type="text"
                    placeholder="Username"
                    name={"Username"+i}
                    validate={validateUserName}
                    />
                    {errorMessage("Username"+i)}
                </div>
                <div className="form-group">
                    <Field
                    type="email"
                    name={"email"+i}
                    className="form-control"
                    placeholder="Email"
                    validate={validateEmail}
                    />
                    {errorMessage("email"+i)}                
                </div>
                <div className="form-group">
                    <Field
                    className="form-control"
                    type="tel"
                    placeholder="Mobile number"
                    name={"mobilenumber"+i}
                    validate={validateMobileNumber}
                    />
                    {errorMessage("mobilenumber"+i)}                                
                </div>
                <div className="form-group">
                    <Field
                    className="form-control"
                    type="url"
                    placeholder="Website"
                    name="Website"
                    />
                </div>
                <div className="form-group">
                    <Field
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    name={"password"+i}
                    validate={validatePassword}
                    />
                    {errorMessage("password"+i)}                                
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <br />
                    <div className="form-check form-check-inline">
                    <Field
                        className="form-check-input"
                        type="radio"
                        name={"genderOptions"+i}
                        value="Male"
                        id="inlineRadio1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                        Male
                    </label>
                    </div>
                    <div className="form-check form-check-inline">
                    <Field
                        className="form-check-input"
                        type="radio"
                        name={"genderOptions"+i}
                        value="Female"
                        id="inlineRadio2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                        Female
                    </label>
                    </div>
                    <div className="form-check form-check-inline">
                    <Field
                        className="form-check-input"
                        type="radio"
                        name={"genderOptions"+i}
                        value=" Non-binary"
                        id="inlineRadio3"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3">
                        Non-binary
                    </label>
                    </div>
                </div>
                <div className="form-group">
                    <Field
                    className="form-control"
                    type="datetime"
                    placeholder="Date of Birth"
                    name={"DateofBirth"+i}
                    validate={validateDateOfBirth}
                    />
                    {errorMessage("DateofBirth"+i)}                                
                </div>
                <div className="form-group">
                    <Field
                    component="textarea"
                    className="form-control"
                    name={"About"+i}
                    />
                </div>
                <div className="form-group">
                    <Field
                    type="checkbox"
                    placeholder="Subscribe to Newsletter"
                    name={"SubscribetoNewsletter"+i}
                    id="customCheck1"
                    />
                    <label htmlFor="customCheck1"> Subscribe to Newsletter</label>
                </div>
              </>
              )})}
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                    Submit
                    </button>
                </div>              
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}