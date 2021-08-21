import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typeahead } from '.';
import TypeaheadAsyncDoc from './docs/Typeahead-async.mdx';

const standardOptions = [
  {
    id: '1',
    label: 'Manicure',
  },
  {
    id: '2',
    label: 'Pedicure',
  },
  {
    id: '3',
    label: 'Waxing',
  },
];

const filterOptions = (value: string) => {
  if (standardOptions) {
    return standardOptions.filter((i) =>
      i.label.toLowerCase().includes(value.toLowerCase())
    );
  } else {
    return [];
  }
};

const promiseOptions = (inputValue: string) => {
  if (inputValue.length > 2) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterOptions(inputValue));
      }, 1000);
    });
  } else {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([]);
      }, 3000);
    });
  }
};

export default {
  title: 'Async Typeahead',
  component: Typeahead,
  args: {
    elementId: 'searchElement',
    labelKey: 'label',
    options: standardOptions,
    placeholder: 'Search for a service...',
    searchFunction: promiseOptions,
    valueKey: 'id',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

const Template: ComponentStory<typeof Typeahead> = (args) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label
        htmlFor="searchElement"
        style={{
          marginRight: '1.4375rem',
          color: '#696c74',
          fontSize: '0.6875rem',
          textTransform: 'uppercase',
        }}
      >
        Search
      </label>
      <Typeahead {...args} />
    </div>
  );
};

export const ApiSearch = Template.bind({});
