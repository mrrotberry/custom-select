import type { FC } from 'react';

import Styled from './caret.styles';
import type { CaretProps } from './caret.types';

const Caret: FC<CaretProps> = ({ dropdownIsOpen }) => (
  <Styled.Caret
    viewBox="8 8 16 16"
    width="1rem"
    height="1rem"
    $dropdownIsOpen={dropdownIsOpen}
  >
    <path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" />
  </Styled.Caret>
);

export default Caret;