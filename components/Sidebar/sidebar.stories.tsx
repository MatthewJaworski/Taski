import { ClerkProvider } from '@clerk/nextjs';
import { Meta, StoryFn } from '@storybook/react';
import Sidebar, { SidebarProps } from './Sidebar';
import { mockSidebarProps } from './sidebar.mocks';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="bg-background container w-screen h-screen justify-center flex items-center">
        <Story />
      </div>
    ),]
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args: any) => (
  <ClerkProvider >
    <Sidebar {...args} />
  </ClerkProvider>
);

export const Base = Template.bind({});

Base.args = {
  ...mockSidebarProps.base,
} as SidebarProps;
