import { getUserByClerkID } from '@/lib/auth';
import { db } from '@/lib/db';
import {
  IprojectRequestBody,
  TDatabaseProject,
  TProjectKeys,
} from '@/types/project';
import { NextResponse } from 'next/server';

export async function POST(req: Request): Promise<NextResponse> {
  const { data } = await req.json();
  const { id } = await getUserByClerkID();
  const projectData: IprojectRequestBody = data;
  const dbRequestBody: TDatabaseProject = {
    name: projectData.name,
    description: projectData.description,
    tags: [],
  };
  for (const [key, value] of Object.entries(projectData)) {
    if (value === 'on') {
      dbRequestBody.tags.push(key as TProjectKeys);
    }
  }
  await db.project.create({
    data: {
      name: dbRequestBody.name,
      description: dbRequestBody.description,
      userId: id,
      tags: {
        create: dbRequestBody.tags.map((tag) => ({ name: tag })),
      },
    },
  });

  return NextResponse.json({ data: dbRequestBody });
}
