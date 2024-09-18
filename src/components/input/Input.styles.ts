import styled from 'styled-components';
import { sizeInput as sizeinput } from './Input';

export const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 12px;
`;

export const LabelRequired = styled.span<{ sizeinput: sizeinput }>`
  color: #ff0000;
  position: absolute;
  top: -5px;
  right: ${(props) => (props.sizeinput === 'sm' ? -7 * 2 : -7)}px;
`;

export const LabelText = styled.span<{
  sizeinput: sizeinput;
}>`
  align-self: start;
  position: relative;
  font-size: ${(props) => (props.sizeinput === 'sm' ? 14 * 2 : 14)}px;
`;

export const DescriptionText = styled.span`
  align-self: start;
  font-size: 8px;
`;

export const ErrorText = styled.span<{
  sizeinput: sizeinput;
}>`
  align-self: start;
  font-size: ${(props) => (props.sizeinput === 'sm' ? 13 * 2 : 13)}px;
  color: #ff0000;
`;

export const InputContainer = styled.div<{
  radius: number;
  error: string | undefined;
  name: string;
  type: string;
}>`
  display: flex;
  align-items: center;
  padding-left: ${(props) => (props.name === 'nick' ? '8px' : '0px')};
  border-color: ${(props) => props.error && '#ff0000'};
  width: ${(props) => props.type === 'radio' && '50px'};
  padding: ${(props) => props.type === 'radio' && '5px'};
  border: ${(props) =>
    props.error ? '1px solid rgb(255, 0, 0)' : '1px solid rgb(173, 171, 169)'};
  border-radius: ${(props) => props.radius}px;

  :focus {
    border: 2px solid rgb(26, 109, 177);
  }
`;

export const InputField = styled.input<{
  radius: number;
  sizeinput: sizeinput;
  error: string | undefined;
  name: string;
}>`
  width: 100%;
  padding: ${(props) => (props.name === 'nick' ? '8px 8px 8px 0' : '8px 8px')};
  font-size: ${(props) => (props.sizeinput === 'sm' ? 13 * 2 : 13)}px;
  line-height: 23px;
  border: none;
  border-radius: ${(props) => props.radius}px;
  color: ${(props) => props.error && '#ff0000'};
  outline: none;
`;
