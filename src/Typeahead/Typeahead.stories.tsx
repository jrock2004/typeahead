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

const ErrorTemplate: ComponentStory<typeof Typeahead> = (args) => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
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
      <span
        className="selectElement-help-text"
        style={{
          color: '#e00000',
          display: 'block',
          fontSize: '0.9375rem',
          margin: '0.5625rem 0 0 3.5625rem',
        }}
      >
        Please select a service before saving
      </span>
    </div>
  );
};

export const Default = Template.bind({});

export const WithSetValue = Template.bind({});
WithSetValue.args = {
  defaultValue: standardOptions[1],
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};

export const DisabledWithValue = Template.bind({});
DisabledWithValue.args = {
  defaultValue: standardOptions[1],
  isDisabled: true,
};

export const ErrorState = ErrorTemplate.bind({});
ErrorState.args = {
  hasError: true,
};
