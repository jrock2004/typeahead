import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typeahead } from '.';

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

export default {
  title: 'Typeahead',
  component: Typeahead,
  args: {
    elementId: 'selectElement',
    labelKey: 'label',
    options: standardOptions,
    placeholder: 'Select a service...',
    valueKey: 'id',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
} as ComponentMeta<typeof Typeahead>;

const Template: ComponentStory<typeof Typeahead> = (args) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label
        htmlFor="selectElement"
        style={{
          marginRight: '1.4375rem',
          color: '#696c74',
          fontSize: '0.6875rem',
          textTransform: 'uppercase',
        }}
      >
        Service
      </label>
      <Typeahead {...args} />
    </div>
  );
};

export const Default = Template.bind({});
