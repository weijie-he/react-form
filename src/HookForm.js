import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';

// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";

// Error Component
const errorMessage = error => {
  return <div className="invalid-feedback">{error}</div>;
};

var array1 = []
for (var i=0;i<10;i++){
  array1.push(i)
}

export default () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log("data:",data);

  console.log("watch:",watch("Username"))// watch input value by passing the name of it
  console.log("errors:",errors)
  console.log("ss")
  return (
    <div className="container">
      <div className="col-sm-12">
        <h3>React Hook Form</h3>
      </div>
      <div className="col-sm-12">
        <form onSubmit={handleSubmit(onSubmit)}>
           {/* 渲染 10 次 */}
          { array1.map(i =>{return(
          <>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name={"Username"+i}
                // 为每个检验项自定义报错信息
                ref={register({ required: {value:true,message:"用户名不能为空"}, maxLength: {value:20,message:"用户名不能超过20个字符"} })}
              />
              {errors["Username"+i] &&
                errors["Username"+i].type === "required" &&
                errorMessage(errors["Username"+i].message)}
              {errors["Username"+i] &&
                errors["Username"+i].type === "maxLength" &&
                errorMessage(errors["Username"+i].message)}
            </div>

            <div className="form-group">
            <input
              className="form-control"
              type="tel"
              placeholder="Mobile number"
              name={"MobileNumber"+i}
              ref={register({ maxLength: 12 })}
            />
            {errors["MobileNumber"+i] &&
              errors["MobileNumber"+i].type === "maxLength" &&
              errorMessage(maxLength)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              name={"Email"+i}
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors["Email"+i] &&
              errors["Email"+i].type === "required" &&
              errorMessage(required)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="url"
              placeholder="Website"
              name={"Website"+i}
              ref={register}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Password"
              name={"Password"+i}
              ref={register({ required: true })}
            />
            {errors["Password"+i] &&
              errors["Password"+i].type === "required" &&
              errorMessage(required)}
          </div>
          <div className="form-group">
            <label>Gender</label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name={"genderOptions"+i}
                value="Male"
                id="inlineRadio1"
                ref={register}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name={"genderOptions"+i}
                value="Female"
                id="inlineRadio2"
                ref={register}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name={"genderOptions"+i}
                value=" Non-binary"
                id="inlineRadio3"
                ref={register}
              />
              <label className="form-check-label" htmlFor="inlineRadio3">
                Non-binary
              </label>
            </div>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="datetime"
              placeholder="Date of Birth"
              name={"DateofBirth"+i}
              ref={register({
                pattern: /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/i
              })}
            />
            {errors["DateofBirth"+i] &&
              errorMessage("Please use the following format MM/DD/YYYY")}
          </div>
          <div className="form-group">
            <textarea className="form-control" name="About" ref={register} />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              placeholder="Subscribe to Newsletter"
              name={"Subscribe to Newsletter"+i}
              id="customCheck1"
              ref={register}
            />
            <label htmlFor="customCheck1"> Subscribe to Newsletter</label>
          </div>
          </>
          )})
          }
          <div className="form-group">
            <input className="btn btn-primary" type="submit" />
          </div>          
        </form>
      </div>
    </div>
  );
}