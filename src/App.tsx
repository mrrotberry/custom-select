import { FC, useCallback, useMemo } from 'react';
import { Controller, FieldErrors, FieldNamesMarkedBoolean, FieldValues, get, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import styled from 'styled-components';

import Select from './select';

import GlobalStyles from './global-styles';

const Wrapper = styled.div`
  width: 100%;

  margin: 3rem;
`;

interface FormData {
  singleSelect: string;
  multiSelect: string[];
}

const getFillingIsCorrected = (
  name: string,
  touched: FieldNamesMarkedBoolean<FieldValues>,
  errors: FieldErrors,
): boolean | undefined => (get(touched, name) || get(errors, name) ? !get(errors, name) : undefined);


const App: FC = () => {
  const { control, handleSubmit, formState } = useForm<FormData>({
    mode: 'all',
    criteriaMode: 'all',
    shouldUnregister: true,
  });

  const sendData = useCallback((formData: FormData) => {
    console.log(formData);
  }, []);

  const optionsForSingle = useMemo(() => Array.from({ length: 400 }, (_, i) => (
    {
      value: `test-value-${i + 1}`,
      label: `test label ${i + 1}`,
      isDisabled: Math.random() > 0.5,
    }
  )), []);

  const optionsForMulti = useMemo(() => Array.from({ length: 3 }, (_, i) => (
    {
      value: `test-value-${i + 1}`,
      label: `test label ${i + 1}`,
      isDisabled: Math.random() > 0.5,
    }
  )), []);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(sendData)}>
        <textarea cols={30} rows={10} />

        <div>
          <Controller
            name="singleSelect"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Required field',
              },
            }}
            render={({ field: { name, value, onChange, onBlur } }) => (
              <Select
                name={name}
                options={optionsForSingle}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="Please, select"
                fillingIsCorrected={
                  getFillingIsCorrected(
                    'singleSelect',
                    formState.touchedFields,
                    formState.errors,
                  )
                }
                isReadOnly={false}
                isSearchable
              />
            )}
          />

          <ErrorMessage
            name="singleSelect"
            errors={formState.errors}
            render={({ message }) => <div>{message}</div>}
          />
        </div>

        <div>
          <Controller
            name="multiSelect"
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Required field',
              },
            }}
            render={({ field: { name, value, onChange, onBlur } }) => (
              <Select
                name={name}
                mode="multi"
                options={optionsForMulti}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="Please, select few items"
                fillingIsCorrected={
                  getFillingIsCorrected(
                    'multiSelect',
                    formState.touchedFields,
                    formState.errors,
                  )
                }
                isReadOnly={false}
                isSearchable
              />
            )}
          />

          <ErrorMessage
            name="multiSelect"
            errors={formState.errors}
            render={({ message }) => <div>{message}</div>}
          />
        </div>

        <button type="submit">Submit</button>

      </form>

      <GlobalStyles />
    </Wrapper>
  );
};

export default App;