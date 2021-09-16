import type { MouseEvent } from 'react';

import type { SelectProps } from '../../select.types';

export interface ContentProps {
  options: NonNullable<SelectProps['options']>;
  value: SelectProps['value'];
  handlePillClick: (event: MouseEvent<HTMLButtonElement>) => void;
  placeholder: NonNullable<SelectProps['placeholder']>;
}