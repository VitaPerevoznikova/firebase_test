import { useForm } from 'react-hook-form';
import { RegisterBtn, RegisterDescription, RegisterForm, RegisterInput, RegisterTitle } from './RegistrationForm.style';

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <RegisterForm onSubmit={handleSubmit(onSubmit)}>

      <RegisterTitle>Registration</RegisterTitle>
      <RegisterDescription>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </RegisterDescription>

      <RegisterInput type="name" placeholder="Name" {...register('name')} />
      <RegisterInput type="email" placeholder="Email" {...register('email')} />
      <RegisterInput type="password" placeholder="Password" {...register('password')} />

      <RegisterBtn type="submit">Sign Up</RegisterBtn>

    </RegisterForm>
  );
};

export default RegistrationForm;
