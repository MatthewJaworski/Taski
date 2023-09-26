import { Meta, StoryFn } from '@storybook/react';
import NewProject, { NewProjectProps } from './NewProject';
import { mockNewProjectProps } from './newProject.mocks';

export default {
  title: 'Components/NewProject',
  component: NewProject,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="bg-background p-6 text-white container w-screen h-screen justify-center flex flex-col items-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof NewProject>;

const Template: StoryFn<typeof NewProject> = (args: any) => (
  <NewProject {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockNewProjectProps.base,
} as NewProjectProps;
