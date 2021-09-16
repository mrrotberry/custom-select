import { FC, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

import { Caret, Content, Dropdown } from './components';

import Styled from './select.styles';
import type { SelectProps } from './select.types';

const Select: FC<SelectProps> = ({
                                   id,
                                   name,

                                   mode = 'single',
                                   value,
                                   options = [],
                                   onChange,
                                   onBlur,

                                   placeholder = 'Please, select',

                                   fillingIsCorrected,

                                   isReadOnly = false,

                                   isSearchable = false,
                                   searchFieldPlaceholder = 'Please, type a search string',
                                   emptyOptionsText = 'No options',

                                   isRtl = false,
                                 }) => {
  const selectWrapperRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const [dropdownIsOpen, setDropdownOpen] = useState(false);
  const multiValuesRef = useRef<string[]>([]);

  // Close dropdown on  Escape press and outside click
  useEffect(() => {
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
      }
    };

    const handleClickOutside = (event: Event) => {
      if (selectWrapperRef.current && !selectWrapperRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapePress, true);
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('keydown', handleEscapePress, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [selectWrapperRef]);

  const handleOpen = useCallback(() => {
    !isReadOnly && setDropdownOpen((prevState) => !prevState);
  }, [isReadOnly]);

  const handleOptionClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    onBlur();

    const newValue = event.currentTarget.getAttribute('data-value') as string;

    if (mode === 'single') {
      if (newValue !== value) {
        onChange(newValue);
      } else {
        onChange(undefined);
      }

      setDropdownOpen(false);
    }

    if (mode === 'multi') {
      let newMultiValues: string[];

      if (multiValuesRef.current.includes(newValue)) {
        newMultiValues = multiValuesRef.current.filter((_value) => _value !== newValue);
      } else {
        newMultiValues = [...multiValuesRef.current, newValue];
      }

      multiValuesRef.current = newMultiValues;

      onChange(newMultiValues);
    }
  }, [value]);

  return (
    <Styled.Wrapper
      ref={selectWrapperRef}
    >
      <Styled.Select
        id={id}
        role="button"
        ref={selectRef}
        data-name={name}
        onClick={handleOpen}
        aria-invalid={typeof fillingIsCorrected === 'boolean' ? !fillingIsCorrected : undefined}
        $isReadOnly={isReadOnly}
        $isRtl={isRtl}
      >
        <Content options={options} value={value} handlePillClick={handleOptionClick} placeholder={placeholder} />

        <Caret dropdownIsOpen={dropdownIsOpen} />
      </Styled.Select>

      {selectRef.current && (
        <Dropdown
          isOpen={dropdownIsOpen}
          options={options}
          value={value}
          handleOptionClick={handleOptionClick}
          selectClientRect={selectRef.current.getBoundingClientRect()}
          isSearchable={isSearchable}
          searchFieldPlaceholder={searchFieldPlaceholder}
          emptyOptionsText={emptyOptionsText}
          isRtl={isRtl}
        />
      )}
    </Styled.Wrapper>
  );
};

export default Select;