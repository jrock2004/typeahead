import { OptionsType } from 'react-select';

export interface OverrideOptionType extends OptionsType {
  [k: string]: string | number | null;
}

export type StyleOptionType = {
  label?: string;
  value?: string;
  [k: string]: string | number | null;
};

export type TypeaheadProps = {
  defaultValue?: OptionsType | OptionsType[] | null | undefined;
  elementId: string;
  isDisabled?: boolean;
  labelKey?: string;
  onChange: (item: OptionsType) => StyleOptionType;
  options: OptionsType;
  placeholder?: string;
  searchFunction(
    inputValue: string,
    callback: (options: OptionsType<OptionType>) => void
  ): void;
  valueKey?: string;
};
