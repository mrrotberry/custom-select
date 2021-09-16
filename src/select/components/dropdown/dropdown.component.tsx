import { ChangeEvent, FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AutoSizer, Dimensions, List } from 'react-virtualized';

import Option from '../option';

import { CONSTANTS } from '../../select.models';

import Styled from './dropdown.styles';
import type { DropdownProps } from './dropdown.types';

const Dropdown: FC<DropdownProps> = ({
                                       isOpen,
                                       options,
                                       value,
                                       handleOptionClick,
                                       selectClientRect,
                                       isSearchable,
                                       searchFieldPlaceholder,
                                       emptyOptionsText,
                                       isRtl,
                                     }) => {
  const [needRender, setNeedRender] = useState(isOpen);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    if (isOpen) {
      setNeedRender(true);
    }
  }, [isOpen]);

  const animationEndHandler = useCallback(() => {
    if (!isOpen) {
      if (searchString) {
        setSearchString('');
      }

      setNeedRender(false);
    }
  }, [isOpen, searchString]);

  const handleChangeSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  }, []);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = useMemo(() => {
    if (!searchString) return options;

    return options.filter((option) => {
      const clearOptionLabel = `${option.label}`.trim().toLowerCase();
      const clearSearchString = searchString.trim().toLocaleLowerCase();

      return clearOptionLabel.includes(clearSearchString);
    });
  }, [options, searchString]);

  useEffect(() => {
    if (needRender) {
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, CONSTANTS.animationDurationMs);
    }
  }, [needRender, searchInputRef]);

  const dropdownPosition = useMemo(() => {
    const dropdownHeight = selectClientRect.bottom + CONSTANTS.dropdownHeight;

    if (dropdownHeight > window.innerHeight && dropdownHeight > selectClientRect.top) {
      return 'top';
    }

    return 'bottom';
  }, [selectClientRect]);

  const noItemsMessageIsShow = useMemo(() => {
    return options.length === 0 || (searchString.length !== 0 && filteredOptions.length === 0);
  }, [options, searchString, filteredOptions]);

  const virtualListHeight = useMemo(() => {
    return filteredOptions.length > CONSTANTS.minOptionsLengthForSearchable
      ? `${CONSTANTS.dropdownHeight}px`
      : `${filteredOptions.length * CONSTANTS.optionHeight}px`;
  }, [filteredOptions]);

  const getOptionIsSelected = useCallback((currentOptionValue) => {
    if (typeof value === 'string') {
      return value === currentOptionValue;
    }

    if (Array.isArray(value)) {
      return value.includes(currentOptionValue)
    }

    return false;
  }, [value]);

  return needRender ? (
    <Styled.Wrapper
      $isOpen={isOpen}
      onAnimationEnd={animationEndHandler}
      $dropdownPosition={dropdownPosition}
    >
      <Styled.Dropdown
        aria-expanded="true"
      >
        {options.length >= CONSTANTS.minOptionsLengthForSearchable && isSearchable && (
          <Styled.SearchField
            type="text"
            value={searchString}
            onChange={handleChangeSearch}
            placeholder={searchFieldPlaceholder}
            autoComplete="off"
            ref={searchInputRef}
          />
        )}

        <Styled.Options
          role="list"
        >
          {noItemsMessageIsShow && (
            <Styled.EmptyOptionsText>{emptyOptionsText}</Styled.EmptyOptionsText>
          )}

          {options.length >= CONSTANTS.minOptionsLengthForSearchable ? (
            <AutoSizer
              style={{
                height: virtualListHeight,
                transition: `height ${CONSTANTS.animationDurationMs}ms`,
              }}
            >
              {({ width, height }: Dimensions) => (
                <List
                  scrollToIndex={
                    value
                      ? filteredOptions.findIndex((option) => option.value === value)
                      : 0
                  }
                  height={height}
                  width={width}
                  scrollToAlignment="start"
                  rowCount={filteredOptions.length}
                  rowHeight={CONSTANTS.optionHeight}
                  rowRenderer={({ index, style, key }) => (
                    <Option
                      key={key}
                      value={filteredOptions[index].value}
                      onClick={handleOptionClick}
                      isSelected={getOptionIsSelected(filteredOptions[index].value)}
                      isDisabled={filteredOptions[index].isDisabled}
                      isRtl={isRtl}
                      style={style}
                    >
                      {filteredOptions[index].label}
                    </Option>
                  )}
                  style={{
                    height: `${filteredOptions.length !== 0 ? CONSTANTS.dropdownHeight : 0}px`,
                  }}
                />
              )}
            </AutoSizer>
          ) : options.map((option) => (
            <Option
              key={option.value}
              value={option.value}
              onClick={handleOptionClick}
              isSelected={getOptionIsSelected(option.value)}
              isDisabled={option.isDisabled}
              isRtl={isRtl}
            >
              {option.label}
            </Option>
          ))}
        </Styled.Options>

      </Styled.Dropdown>
    </Styled.Wrapper>
  ) : null;
};

export default Dropdown;