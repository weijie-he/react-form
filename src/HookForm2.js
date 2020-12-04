import React from 'react';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

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

const errorMessage = error => {
    return <div className="invalid-feedback">{error}</div>;
};

export default () => {
    const { register, handleSubmit, errors } = useForm({
        // react-hook-form 默认是表单提交时校验，但也可以改成onBlur时校验
        mode: 'onBlur',
        // 老版本的 react-hook-form 内置了对于yup的集成，但新版本需要引入 yupResolver
        resolver: yupResolver(SignupSchema)
    });
    const onSubmit = data => {
        alert(JSON.stringify(data));
    };

    return (
        <div className="container">
            <h1>React Hook Form with Yup </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="firstName"
                        name={"firstName"}
                        ref={register}
                    />
                    {errors.firstName && errorMessage(errors.firstName.message)}
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="firstName"
                        name={"lastName"}
                        ref={register}
                    />
                    {errors.lastName && errorMessage(errors.lastName.message)}
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name={"email" }
                        ref={register}
                    />
                    {errors.email && errorMessage(errors.email.message)}
                </div>
                <div className="form-group">
                    <input className="btn btn-primary" type="submit" />
                </div>
            </form>
        </div>
    )
};