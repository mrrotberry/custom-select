import styled, { css } from 'styled-components';

import { CONSTANTS } from '../../select.models';

const Option = styled.button<{ $isSelected: boolean; $isRtl: boolean }>(({ $isSelected, $isRtl }) => css`
  display: block;

  width: 100%;
  height: ${CONSTANTS.optionHeight}px;

  padding: 0.5rem;

  border: none;
  background-color: ${!$isSelected ? '#fff' : '#4a99d5'};

  text-align: ${!$isRtl ? 'left' : 'right'};
  color: ${!$isSelected ? '#000' : '#fff'};

  user-select: none;
  appearance: none;
  cursor: pointer;
  transition: background-color 0.25s, color 0.25s;

  &:hover {
    background-color: #4a99d5;
    color: #fff;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #444;
  }

  &[disabled] {
    background-color: #919191;
    color: #000;
    cursor: not-allowed;
  }
`);

const Styled = { Option };

export default Styled;