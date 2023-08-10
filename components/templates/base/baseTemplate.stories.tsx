import { Meta, StoryFn } from '@storybook/react';
import BaseTemplate from './BaseTemplate';
import { BaseTemplateProps } from './BaseTemplate';
import { mockBaseTemplateProps } from './baseTemplate.mocks';

export default {
  title: 'Templates/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
} as Meta<typeof BaseTemplate>;

const Template: StoryFn<typeof BaseTemplate> = (args: any) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBaseTemplateProps.base,
} as BaseTemplateProps;
