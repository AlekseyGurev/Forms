import { ButtonContainer } from './Button.styles';

export interface IButtonProps {
  title: string;
  type: 'submit' | 'button';
  onClick?: () => void;
  disabled: boolean;
}

export const Button = ({ type, title, onClick, disabled }: IButtonProps) => {
  return (
    <ButtonContainer disabled={disabled} onClick={onClick} type={type}>
      {title}
    </ButtonContainer>
  );
};
