import { text } from '@/constants/en';
import { capitalize } from '@/lib/capitalize';
import { TTagKeys } from '@/types/tag';
import { Box } from 'react-feather';
import Button from '../Button/Button';

export interface ProjectCardProps {
  name: string;
  description: string;
  tags: TTagKeys[];
}

const {
  projectCard: { button },
} = text;

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tags,
}) => {
  return (
    <div className="flex max-w-sm flex-col bg-black/20 p-4 shadow-lg">
      <Box className="mb-4" />
      <h3 className="mb-2 truncate text-xl font-bold">{name}</h3>
      <div className="mb-4 overflow-hidden">
        {tags.map((tag) => {
          return (
            <span key={tag} className="color mr-2 rounded bg-secondary p-1 text-sm text-black">
              {capitalize(tag)}
            </span>
          );
        })}
      </div>
      <p className="mb-4 truncate text-base">{description}</p>
      <Button className="w-full" intent="primary" size="small">
        {button.open}
      </Button>
    </div>
  );
};
export default ProjectCard;
