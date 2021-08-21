import Select, { StylesConfig } from 'react-select';

import { StyleOptionType, TypeaheadProps } from './Typeahead.d';

export const Typeahead = ({
  elementId,
  labelKey = 'label',
  onChange,
  options,
  valueKey = 'value',
}: TypeaheadProps): JSX.Element => {
  const selectStyles: StylesConfig<StyleOptionType, boolean> = {
    indicatorSeparator: () => ({
      display: 'none',
    }),
    control: (provided) => ({
      ...provided,
      fontSize: '0.9375rem',
      minWidth: '250px',
    }),
    menuList: (provided) => ({
      ...provided,
      fontSize: '0.9375rem',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#696c74',
    }),
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

  return (
    <Select
      styles={selectStyles}
      inputId={elementId}
      getOptionLabel={(option) => getOption(labelKey, option)}
      getOptionValue={(option) => getOption(valueKey, option)}
      onChange={onChange}
      options={options}
    />
  );
};
