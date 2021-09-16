import { FC } from 'react';

import Styled from './option.styles';
import type { OptionProps } from './option.types';

const Option: FC<OptionProps> = ({
                                   value,
                                   onClick,
                                   style,
                                   isSelected,
  isDisabled,
                                   isRtl,
                                   children,
                                 }) => {
  return <Styled.Option
    type="button"
    data-value={value}
    onClick={onClick}
    style={style}
    disabled={isDisabled}
    $isSelected={isSelected}
    $isRtl={isRtl}
  >
    {children}
  </Styled.Option>;
};

export default Option;