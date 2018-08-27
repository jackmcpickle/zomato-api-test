import styled from 'styled-components';
import Checkbox from 'rc-checkbox';
import {BLUE, LIGHT_BLUE, LIGHT_GREY, GHOST, GREY, WHITE} from './colours';
import Slider from 'rc-slider';
const Range = Slider.Range;

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
background-color: ${GHOST};

  ${Label} .rc-checkbox:focus &,
  ${Label}:hover & {
    background-color ${LIGHT_GREY};
  }

  ${Label} .rc-checkbox-checked ~ & {
    background-color: ${LIGHT_BLUE};
  }

  ${Label}:hover .rc-checkbox-checked:not([.rc-checkbox-disabled]) ~ &,
  ${Label} .rc-checkbox-checked:focus ~ & {
    background: ${BLUE};
  }

  ${Label} .rc-checkbox-disabled ~ & {
  background: ${GHOST};
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
    border: solid ${WHITE};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    display: none;
  }

  ${Label} .rc-checkbox-checked ~ &:after {
    display: block;
  }

  ${Label} .rc-checkbox-disabled ~ &:after {
    border-color: ${GREY};
  }
`;

export const StyledRange = styled(Range)`
  height: 40px;
`;