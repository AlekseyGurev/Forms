import { ChangeEvent } from 'react';
import {
  LabelContainer,
  InputContainer,
  InputField,
  LabelText,
  DescriptionText,
  ErrorText,
  LabelRequired,
} from './Input.styles';

interface IInputProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  description?: string;
  error?: string;
  radius?: number;
  sizeinput?: sizeInput;
  disabled?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type sizeInput = 'xs' | 'sm';

export const Input = ({
  label,
  type,
  placeholder,
  name,
  description,
  error,
  radius = 10,
  sizeinput: sizeinput = 'xs',
  disabled = false,
  required = false,
  icon,
  onChange,
  value,
}: IInputProps) => {
  return (
    <>
      <LabelContainer>
        <LabelText sizeinput={sizeinput}>
          {label}
          {required && <LabelRequired sizeinput={sizeinput}>*</LabelRequired>}
        </LabelText>
        {description && <DescriptionText>{description}</DescriptionText>}
        <InputContainer type={type} name={name} radius={radius} error={error}>
          {icon}
          <InputField
            onChange={onChange}
            radius={radius}
            type={type}
            name={name}
            placeholder={placeholder}
            sizeinput={sizeinput}
            disabled={disabled}
            required={required}
            error={error}
            value={value}
          />
        </InputContainer>
        {error && <ErrorText sizeinput={sizeinput}>{error}</ErrorText>}
      </LabelContainer>
    </>
  );
};
