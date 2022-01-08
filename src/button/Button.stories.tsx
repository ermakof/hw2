import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// @ts-ignore
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
// @ts-ignore
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
// @ts-ignore
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
// @ts-ignore
Small.args = {
  size: 'small',
  label: 'Button',
};
