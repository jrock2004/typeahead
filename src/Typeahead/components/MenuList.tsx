import { components } from 'react-select';

import { ResultsLabel } from './ResultsLabel';

export const MenuList = (props: any) => {
  const length: number = props.children.length;

  return (
    <components.MenuList {...props}>
      {!props.isLoading && length > 0 && <ResultsLabel length={length} />}
      {props.children}
    </components.MenuList>
  );
};
