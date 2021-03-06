import Select, { StylesConfig } from 'react-select';
import AsyncSelect from 'react-select/async';

import styles from './Typeahead.module.css';
import { StyleOptionType, TypeaheadProps } from './Typeahead.d';
import { MenuList } from './components/MenuList';

export const Typeahead = ({
  defaultValue,
  elementId,
  hasError,
  isDisabled = false,
  labelKey = 'label',
  loadingText = 'Loading...',
  noResultsText = 'No results',
  onChange,
  options,
  placeholder = 'Select...',
  searchFunction,
  valueKey = 'value',
}: TypeaheadProps): JSX.Element => {
  const selectStyles: StylesConfig<StyleOptionType, boolean> = {
    indicatorSeparator: () => ({
      display: 'none',
    }),
    control: (provided) =>
      hasError
        ? {
            ...provided,
            borderColor: '#e00000',
            fontSize: '0.9375rem',
            minWidth: '250px',
          }
        : {
            ...provided,
            fontSize: '0.9375rem',
            minWidth: '250px',
          },
    loadingMessage: (provided) => ({
      ...provided,
      color: '#2d2d2d',
      textTransform: 'uppercase',
    }),
    menuList: (provided) => ({
      ...provided,
      fontSize: '0.8125rem',
    }),
    noOptionsMessage: (provided) => ({
      ...provided,
      color: '#2d2d2d',
      textTransform: 'uppercase',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#696c74',
    }),
  };

  const asyncCustomStyles = {
    ...selectStyles,
    dropdownIndicator: () => {
      return {
        display: 'none',
      };
    },
  };

  /**
   * Helps react-select know which option it should use for its look ups
   *
   * @param {string} label - the name of the property in the option to map to
   * @param {OverrideOptionType} option
   *
   * @returns {string} - the value of the label in the option
   */
  const getOption = (label: string, option: StyleOptionType): string => {
    const value = option[label];

    return value ? value.toString() : 'label';
  };

  if (typeof searchFunction !== 'undefined') {
    return (
      <AsyncSelect
        styles={asyncCustomStyles}
        inputId={elementId}
        components={{ MenuList }}
        getOptionLabel={(option) => getOption(labelKey, option)}
        getOptionValue={(option) => getOption(valueKey, option)}
        isDisabled={isDisabled}
        loadOptions={searchFunction}
        loadingMessage={() => loadingText}
        noOptionsMessage={() => noResultsText}
        openMenuOnClick={false}
        placeholder={placeholder}
      />
    );
  } else {
    return (
      <Select
        styles={selectStyles}
        className={hasError && styles.typeaheadError}
        aria-labelledby={elementId}
        aria-errormessage={`${elementId}-help-text`}
        aria-valid={!hasError}
        inputId={elementId}
        components={{ MenuList }}
        defaultValue={defaultValue}
        getOptionLabel={(option) => getOption(labelKey, option)}
        getOptionValue={(option) => getOption(valueKey, option)}
        isDisabled={isDisabled}
        loadingMessage={() => loadingText}
        noOptionsMessage={() => noResultsText}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
      />
    );
  }
};
