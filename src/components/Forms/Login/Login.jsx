import { useForm } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io';
import {
  CloseButton,
  FormBtn,
  FormDescription,
  FormInput,
  FormOverlay,
  FormTitle,
  Form,
} from '../RegistrationForm/RegistrationForm.style';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormOverlay>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CloseButton>
          <IoMdClose />
        </CloseButton>

        <FormTitle>Log In</FormTitle>
        
        <FormDescription>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </FormDescription>

        <FormInput
         type="email" 
         placeholder="Email" 
         {...register('email')} />

        <FormInput
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        <FormBtn type="submit">Log In</FormBtn>
      </Form>
    </FormOverlay>
  );
};

export default LoginForm;
