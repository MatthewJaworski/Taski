'use client';
import { text } from '@/constants/en';
import { KEY_TAGS } from '@/constants/tags';
import { createNewProject } from '@/lib/api';
import { IprojectRequestBody, TProjectKeys } from '@/types/project';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Loader from '../Loader/Loader';

export interface NewProjectProps {}

const NewProject: React.FC<NewProjectProps> = () => {
  const {
    newProject: { addButton, title, placeholders },
  } = text;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const requestBody: Partial<IprojectRequestBody> = {};
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        requestBody[key as TProjectKeys] = value;
      }
    });
    setIsLoading(true);
    await createNewProject(requestBody);
    router.refresh();
    router.push('/overview');
  };

  return (
    <>
      <h1 className="max-w-lg text-5xl font-semibold">{title}</h1>
      <form className="mt-12 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <Input
            required
            id="name"
            name="Name"
            placeholder={placeholders.name}
            type="text"
            title="Name"
          />
          <Input
            id="description"
            name="Description"
            placeholder={placeholders.description}
            type="text"
            title="Description"
          />
        </div>
        <div className="mt-6">
          <p className="mb-1 text-sm font-semibold">Tags</p>
          <div className="grid grid-cols-2 gap-4">
            {KEY_TAGS.map((tag) => {
              return (
                <Input
                  key={tag.key}
                  id={tag.key}
                  name={tag.name}
                  labelPosition="right"
                  type="checkbox"
                  title={tag.name}
                />
              );
            })}
          </div>
        </div>
        {isLoading ? (
          <Loader wrapperClass="flex justify-center items-center " />
        ) : (
          <Button type="submit" intent="secondary" className="mt-7 w-full">
            {addButton}
          </Button>
        )}
      </form>
    </>
  );
};
export default NewProject;
