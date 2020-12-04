# formik vs react-hook-form

## 一、技术对比

[npmtrends对比](https://www.npmtrends.com/formik-vs-react-hook-form)

![](https://i.loli.net/2020/12/01/xzlyRc3WOXLtoIu.png)

formik 用的人更多，可能因为出的早，知名度更高。

此外，在 https://bundlephobia.com/ 上可以查看库的依赖项。

Formik具有7个依赖项，React Hook Form没有依赖。库具有的依存关系越少越好。

## 二、性能对比

 A big difference between the two is that React Hook Form is designed to make use of uncontrolled components to avoid unnecessary re-rendering caused by user inputs.

Formik中，用户每输入一个字符都会重新渲染一次；而React Hook Form会等用户在整个输入框输入完后再重新渲染。

React Hook Form 胜

## 三、代码对比

使用下来，感觉主要有2点区别：

1. Formik 提供了 \<Field>\<ErrorMessage> 等组件以供使用。React Hook Form 用的则是原生的 html标签，通过ref属性来进行校验。
2. Formik 的代码不够简洁。一是对于每个表单项的检验都需要单独写一个函数；二是必须要设定initialValues。

## 四、与Yup集成

Formik 与 Yup 的集成非常方便，可以直接通过validationSchema属性来指定。

```react
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});
...
	<Formik
         validationSchema={SignupSchema}
            ...
        >
```

而且之前 Formik 中对于每个表单项，都需要编写单独的函数来校验，现在不需要了，代码简洁了许多。

react-hook-form 与 Yup 集成，则需要添加新的依赖[@hookform/resolvers](https://github.com/react-hook-form/resolvers )

```react
import { yupResolver } from '@hookform/resolvers/yup';
    const { register, handleSubmit, errors } = useForm({
        // react-hook-form 默认是表单提交时校验，但也可以改成onBlur时校验
        mode: 'onBlur',
        // 老版本的 react-hook-form 内置了对于yup的集成，但新版本需要引入 yupResolver
        resolver: yupResolver(SignupSchema)
    });
...
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
```

原本 react-hook-form 需要先判断 errors 的 type，才能正确显示报错信息。现在不需要了，代码简洁了一些。

但是每个表单项都需要写``ref={register}``,比较冗余，不能像Formik 那样在 form上指定。

## 五、其他

React Hook Form 有个 builder，可以自动生成代码，帮助小白快速上手。

 https://react-hook-form.com/form-builder/

## 六、总结

![](https://i.loli.net/2020/12/01/BLZXID1Cr82M95p.png)

React Hook Form is the winner.This by no means makes Formik a bad solution, and if you need a form solution that is still compatible with class components, Formik is the way to go since React Hook Form only supports functional components.

Unfortunately during development I realised that I cannot use react-hook-forms in some complex forms because there are some missing features (ie. arrays of arrays, dependencies between fields, not that good support of typescript ...). I would recommend you to use react-hook-forms if you need large and simple forms, otherwise use Formik.

React Hook Form 更轻量、性能更好、接口也更简单，而 Formik 功能更强大一点。