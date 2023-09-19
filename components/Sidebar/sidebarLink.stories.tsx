import { Meta, StoryFn } from '@storybook/react';
import SidebarLink, { SidebarLinkProps } from './SidebarLink';
import { mockSidebarLinkProps } from './sidebarLink.mocks';

export default {
  title: 'Components/SidebarLink',
  component: SidebarLink,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="bg-background p-6 text-white container w-screen h-screen justify-center flex items-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof SidebarLink>;

const Template: StoryFn<typeof SidebarLink> = (args: any) => (
  <SidebarLink {...args} />
);

const Multiple: StoryFn<typeof SidebarLink> = (args: any) => (
  <ul>
    <SidebarLink {...args} />
    <SidebarLink {...args} />
    <SidebarLink {...args} />
  </ul>
);

export const Base = Template.bind({});

Base.args = {
  ...mockSidebarLinkProps.base,
} as SidebarLinkProps;

export const MultipleLinks = Multiple.bind({});

MultipleLinks.args = {
  ...mockSidebarLinkProps.alternateBase,
} as SidebarLinkProps;
