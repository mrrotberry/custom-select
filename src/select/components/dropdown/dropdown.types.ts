import type { MouseEvent } from 'react';

import type { SelectProps } from '../../select.types';

export interface DropdownProps {
  isOpen: boolean;
  options: NonNullable<SelectProps['options']>;
  value: SelectProps['value'];
  handleOptionClick: (event: MouseEvent<HTMLButtonElement>) => void;
  selectClientRect: DOMRect;
  isSearchable?: NonNullable<SelectProps['isSearchable']>;
  searchFieldPlaceholder: NonNullable<SelectProps['searchFieldPlaceholder']>;
  emptyOptionsText: NonNullable<SelectProps['emptyOptionsText']>;
  isRtl: NonNullable<SelectProps['isRtl']>;
}