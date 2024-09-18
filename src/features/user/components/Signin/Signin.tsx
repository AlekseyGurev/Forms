import { useState, FormEvent, ChangeEvent } from 'react';
import { Input, Button } from '../../../../components';

interface SignInFormValues {
  email: string;
  password: string;
}

export const Signin = ({
  submitForm,
}: {
  submitForm: (
    event: FormEvent<HTMLFormElement>,
    formValue: SignInFormValues
  ) => void;
}) => {
  const [formValue, setFormValue] = useState<SignInFormValues>({
    email: '',
    password: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(event) => {
        submitForm(event, formValue);
      }}
    >
      <Input
        label="email"
        name="email"
        type="email"
        radius={5}
        placeholder="enter email"
        sizeinput="xs"
        required={true}
        onChange={handleChange}
      />
      <Input
        label="password"
        name="password"
        type="password"
        placeholder="enter password"
        sizeinput="xs"
        required={true}
        onChange={handleChange}
      />
      <Button disabled={false} type="submit" title="LogIn" />
    </form>
  );
};
