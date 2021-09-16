import styled, { css } from 'styled-components';

import { CONSTANTS } from '../../select.models';

const Caret = styled.svg<{ $dropdownIsOpen: boolean }>(({ $dropdownIsOpen }) => css`
  margin-left: auto;

  transform: rotate(${!$dropdownIsOpen ? '0deg' : '180deg'});

  transition: transform ${CONSTANTS.animationDurationMs}ms;
`);

const Styled = { Caret };

export default Styled;