import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '../../../../components/input/Input';
import { Button } from '../../../../components';
import { IconAt } from '@tabler/icons-react';
import { RadioContainer } from './Singup.styles';

interface SignUpFormValues {
  email: string;
  password: string;
  name: string;
  nick: string;
  repeatPassword: string;
  sex: string;
}

export const Signup = ({
  submitForm,
}: {
  submitForm: (
    event: FormEvent<HTMLFormElement>,
    formValue: SignUpFormValues
  ) => void;
}) => {
  const [formValue, setFormValue] = useState<SignUpFormValues>({
    name: '',
    email: '',
    password: '',
    nick: '',
    repeatPassword: '',
    sex: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <form
      onSubmit={(event) => {
        submitForm(event, formValue);
      }}
    >
      <Input
        label="Name"
        name="name"
        type="text"
        placeholder="enter name"
        onChange={handleChange}
      />
      <Input
        label="Nick"
        name="nick"
        type="text"
        placeholder="enter nick"
        icon={<IconAt size="0.8rem" />}
        onChange={handleChange}
      ></Input>
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="enter email"
        required={true}
        onChange={handleChange}
      />
      <RadioContainer>
        <Input
          label="Male"
          name="sex"
          value="male"
          type="radio"
          onChange={handleChange}
        />
        <Input
          label="Female"
          name="sex"
          value="female"
          type="radio"
          onChange={handleChange}
        />
      </RadioContainer>
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="enter password"
        required={true}
        onChange={handleChange}
      />
      <Input
        label="Repeat Password"
        name="repeatPassword"
        type="password"
        placeholder="Re-enter password"
        required={true}
        onChange={handleChange}
      />
      <Button disabled={false} type="submit" title="Register" />
    </form>
  );
};
