import styled, { css } from 'styled-components';

import { CONSTANTS } from './select.models';

const Wrapper = styled.div`
  position: relative;

  font-family: sans-serif;
`;

const Select = styled.div<{
  $isReadOnly: boolean;
  $isRtl: boolean;
}>(({ $isReadOnly, $isRtl }) => css`
  display: flex;
  align-items: center;
  justify-content: ${!$isRtl ? 'flex-start' : 'flex-end'};

  width: 100%;
  height: ${CONSTANTS.selectHeight}px;

  padding: 0.5rem;

  border: 1px solid ${!$isReadOnly ? '#444' : '#ccc'};

  background-color: ${!$isReadOnly ? '#fff' : '#ccc'};

  text-align: ${!$isRtl ? 'left' : 'right'};

  appearance: none;
  cursor: ${!$isReadOnly ? 'pointer' : 'not-allowed'};
  transition: border-color ${CONSTANTS.animationDurationMs}ms;

  &[aria-invalid="true"] {
    border-color: red;
  }

  &[aria-invalid="false"] {
    border-color: green;
  }
`);

const Styled = {
  Wrapper,
  Select,
};

export default Styled;