import styled from 'styled-components';

export const ButtonContainer = styled.button<{ disabled: boolean }>`
  padding: 14px;
  border-radius: 16px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  width: 200px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: ${(props) => (props.disabled ? 1 : 0.7)};
    border: ${(props) => props.disabled && 'none'};
  }
  &:active {
    opacity: ${(props) => (props.disabled ? 1 : 0.5)};
  }
`;
