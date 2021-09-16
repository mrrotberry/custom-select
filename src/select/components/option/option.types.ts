import type { CSSProperties, MouseEvent } from 'react';

import type { SelectProps } from '../../select.types';

export interface OptionProps {
  value: SelectProps['value'];
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  isSelected: boolean;
  isDisabled?: boolean;
  isRtl: NonNullable<SelectProps['isRtl']>;
  style?: CSSProperties;
}