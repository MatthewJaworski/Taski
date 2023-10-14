import { Meta, StoryFn } from '@storybook/react';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import { mockProjectCardProps } from './projectCard.mocks';

export default {
  title: 'Templates/ProjectCard',
  component: ProjectCard,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="bg-background p-6 text-white container w-screen h-screen justify-center flex items-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof ProjectCard>;

const Template: StoryFn<typeof ProjectCard> = (args: any) => (
  <ProjectCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockProjectCardProps.base,
} as ProjectCardProps;

export const withoutTags = Template.bind({});

withoutTags.args = {
  ...mockProjectCardProps.alternateBase,
} as ProjectCardProps;