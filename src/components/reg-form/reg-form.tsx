import { useForm } from "react-hook-form";

type FormData = {
    login: string,
    password: string,
    email: string
  };

function AuthForm() {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <form className="auth-form">
        <label className="auth-form__label">
            <input className="auth-form__input" type="text" {...register("login", { required: true, minLength: 3 })}/>
            {errors.login && "Заполните поле"}
        </label>
        <label className="auth-form__label">
            <input className="auth-form__input" type="text" {...register("email", { required: true, minLength: 3 })}/>
            {errors.login && "Заполните поле"}
        </label>
        <label className="auth-form__label">
            <input className="auth-form__input" type="password" {...register("password", { required: true})}/>
            {errors.password && "Заполните поле"}
        </label>
        <label className="auth-form__label">
            <input className="auth-form__input" type="password" {...register("password", { required: true})}/>
            {errors.password && "Заполните поле"}
        </label>
        <button className="auth-form__btn" type="submit">Войти</button>
        <label className="auth-form__label">
            <input className="auth-form__checkbox" type="checkbox" />
            <span>Капча</span>
        </label>
    </form>

  );
}

export default AuthForm;