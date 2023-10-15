import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { getUserByClerkID } from '@/lib/auth';
import { db } from '@/lib/db';
import { TTagKeys } from '@/types/tag';

const getProjects = async () => {
  const { id } = await getUserByClerkID();
  const projects = await db.project.findMany({
    where: {
      userId: id,
    },
    select: {
      id: true,
      tags: {
        select: {
          name: true,
        },
      },
      name: true,
      description: true,
    },
  });

  return projects;
};

const Overview = async () => {
  const projets = await getProjects();

  return (
    <div className="grid w-full grid-cols-auto-fit place-items-center items-center justify-center gap-6">
      {projets.map((project) => {
        const { id, name, description } = project;
        const tagNames = project.tags.map((tag) => tag.name) as TTagKeys[];
        return (
          <ProjectCard
            key={id}
            name={name}
            description={description}
            tags={tagNames}
          />
        );
      })}
    </div>
  );
};

export default Overview;
