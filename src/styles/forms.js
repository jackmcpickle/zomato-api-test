import styled from 'styled-components';
import Checkbox from 'rc-checkbox';

export const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 1rem;
  line-height: 20px;
`;

export const HiddenCheckBox = styled(Checkbox)`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const StyledCheckBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #e6e6e6;

  ${Label} .rc-checkbox:focus &,
  ${Label}:hover & {
    background-color: #ccc;
  }

  ${Label} .rc-checkbox-checked ~ & {
    background-color: #2aa1c0;
  }

  ${Label}:hover .rc-checkbox:not([.rc-checkbox-disabled]):checked ~ &,
  ${Label} .rc-checkbox-checked:focus ~ & {
    background: #0e647d;
  }

  ${Label} .rc-checkbox-disabled ~ & {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
  }

  &:after {
    content: '';
    position: absolute;
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    display: none;
  }

  ${Label} .rc-checkbox-checked ~ &:after {
    display: block;
  }

  ${Label} .rc-checkbox-disabled ~ &:after {
    border-color: #7b7b7b;
  }
`;
