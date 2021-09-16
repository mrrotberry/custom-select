import styled, { css, keyframes } from 'styled-components';

import { CONSTANTS } from '../../select.models';

const openAnimation = keyframes`
  from {
    max-height: 0;
  }

  to {
    max-height: ${CONSTANTS.dropdownHeight}px;
  }
`;

const closeAnimation = keyframes`
  from {
    max-height: ${CONSTANTS.dropdownHeight}px;
  }

  to {
    max-height: 0;
  }
`;

const Wrapper = styled.div<{ $isOpen: boolean, $dropdownPosition: 'top' | 'bottom', }>(({
                                                                                          $isOpen,
                                                                                          $dropdownPosition,
                                                                                        }) => {
  const shift = CONSTANTS.selectHeight + CONSTANTS.dropdownGap;

  return css`
    position: absolute;
    ${$dropdownPosition === 'top' ? `bottom: ${shift}px` : `top: ${shift}px`};

    left: 0;
    right: 0;
    z-index: 10;

    animation: ${$isOpen ? openAnimation : closeAnimation} ${CONSTANTS.animationDurationMs}ms;

    overflow: hidden;

    transition: ${CONSTANTS.animationDurationMs}ms;
  `;
});

const Dropdown = styled.div`
  border: 1px solid #444;
  background-color: #fff;
`;

const SearchField = styled.input`
  width: 100%;
  height: ${CONSTANTS.optionHeight}px;

  padding: 0 0.5rem;

  border: none;
  border-bottom: 1px solid #444;
`;

const Options = styled.div``;

const EmptyOptionsText = styled.div`
  padding: 0.5rem;

  text-align: center;
  color: #888;

  user-select: none;
`;

const Styled = { Wrapper, Dropdown, SearchField, Options, EmptyOptionsText };

export default Styled;