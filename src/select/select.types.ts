import type { ReactText } from 'react';

export interface Option {
  value: string;
  label: ReactText;
  isDisabled?: boolean;
}

type BasePros = {
  name: string;
  id?: string;

  options?: Option[];
  value?: unknown;
  onChange: () => void;
  onBlur: () => void;

  placeholder?: string;

  fillingIsCorrected?: boolean;

  isReadOnly?: boolean;

  isSearchable?: boolean;
  searchFieldPlaceholder?: string;
  emptyOptionsText?: string;

  isRtl?: boolean;
};

type SingleProps = {
  mode?: 'single';
  value?: Option['value'];
  onChange: (value?: Option['value']) => void;
};

type MultiProps = {
  mode: 'multi';
  value?: Option['value'][];
  onChange: (value?: Option['value'][]) => void;
}

export type SelectProps = BasePros & (SingleProps | MultiProps)