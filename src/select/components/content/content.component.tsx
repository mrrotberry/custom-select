import { FC, useMemo } from 'react';

import Styled from './content.styles';
import type { ContentProps } from './content.types';

const Content: FC<ContentProps> = ({ options, value, handlePillClick, placeholder }) => {
  const content = useMemo(
    () => {
      if (typeof value === 'string') {
        return options.find((option) => option.value === value)?.label;
      }

      if (Array.isArray(value)) {
        return value.map((selectedValue) => {
          return options.find((option) => option.value === selectedValue);
        }).map((option) => (
          <Styled.Pill
            key={option?.value as string}
          >
            {option?.label}

            <Styled.DeleteButton
              data-value={option?.value as string}
              onClick={handlePillClick}
            >
              <svg viewBox="0 0 12 12" width="12" height="12">
                <line x1="1" y1="11"
                      x2="11" y2="1"
                      stroke="#fff"
                      strokeWidth="2" />
                <line x1="1" y1="1"
                      x2="11" y2="11"
                      stroke="#fff"
                      strokeWidth="2" />
              </svg>
            </Styled.DeleteButton>
          </Styled.Pill>
        ));
      }
    },
    [options, value],
  );

  return content ? (
    <Styled.Content>{content}</Styled.Content>
  ) : (
    <Styled.Placeholder>{placeholder}</Styled.Placeholder>
  );
};

export default Content;