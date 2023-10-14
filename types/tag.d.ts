import { text } from '@/constants/en';
import { TKeyName } from './utility';
import { type } from 'os';
const {
  newProject: { tags },
} = text;

export type TTags = typeof tags;
export type TTag = TKeyName<TTags>;
export type TTagKeys = keyof TTags;