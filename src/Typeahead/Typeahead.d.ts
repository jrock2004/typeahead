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
  elementId: string;
  labelKey?: string;
  onChange: (item: OptionsType) => StyleOptionType;
  options: OptionsType;
  valueKey?: string;
};