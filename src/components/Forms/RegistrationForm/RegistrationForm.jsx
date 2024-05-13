import { Form, useForm } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io';
import {
  CloseButton,
  FormBtn,
  FormDescription,
  FormInput,
  FormOverlay,
  FormTitle,
} from './RegistrationForm.style';

const RegistrationForm = () => {
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

        <FormTitle>Registration</FormTitle>
        <FormDescription>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </FormDescription>

        <FormInput type="name" placeholder="Name" {...register('name')} />
        <FormInput type="email" placeholder="Email" {...register('email')} />
        <FormInput
          type="password"
          placeholder="Password"
          {...register('password')}
        />

        <FormBtn type="submit">Sign Up</FormBtn>
      </Form>
    </FormOverlay>
  );
};

export default RegistrationForm;
