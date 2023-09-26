import { Meta, StoryFn } from '@storybook/react';
import BaseTemplate, { BaseTemplateProps } from './BaseTemplate';
import { mockBaseTemplateProps } from './baseTemplate.mocks';

export default {
  title: 'Templates/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="bg-background p-6 text-white container w-screen h-screen justify-center flex items-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof BaseTemplate>;

const Template: StoryFn<typeof BaseTemplate> = (args: any) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBaseTemplateProps.base,
} as BaseTemplateProps;
