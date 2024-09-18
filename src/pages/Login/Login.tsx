import React, { useState } from 'react';
import { Signin, Signup } from '../../features';
import { Button } from '../../components';
import { ContainerButton } from './Logo.styles';

interface IDataForm {
  email: string;
  password: string;
}

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  function submitForm(
    event: React.FormEvent<HTMLFormElement>,
    dataForm: IDataForm
  ) {
    event.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isLogin
      ? console.log('SignIn ###:', dataForm)
      : console.log('SignUp ###:', dataForm);
  }
  return (
    <>
      <ContainerButton>
        <Button
          title="Signin"
          disabled={isLogin}
          onClick={() => setIsLogin(true)}
          type="button"
        />
        <Button
          title="Signup"
          onClick={() => setIsLogin(false)}
          disabled={!isLogin}
          type="button"
        />
      </ContainerButton>
      {isLogin ? (
        <Signin submitForm={submitForm} />
      ) : (
        <Signup submitForm={submitForm} />
      )}
    </>
  );
};
