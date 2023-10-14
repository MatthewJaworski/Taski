import { ProjectCardProps } from './ProjectCard';

const base: ProjectCardProps = {
  name: 'Sample Project',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, nec aliquam nisl nunc nec nisl.',
  tags: [
    'backend',
    'frontend',
  ],
};

const alternateBase: ProjectCardProps = {
  name: 'Sample Project',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  tags: [],
};

export const mockProjectCardProps = {
  base,
  alternateBase,
};
