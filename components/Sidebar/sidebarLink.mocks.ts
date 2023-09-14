import { SidebarLinkProps } from './SidebarLink';
import { ArrowLeft } from 'react-feather';
const base: SidebarLinkProps = {
  Icon:ArrowLeft,
  text:"Left arrow",
  href:"/",
  iconSize:30,
  className: '',
};

const alternateBase: SidebarLinkProps = {
  Icon:ArrowLeft,
  text:"Left arrow",
  href:"/",
};

export const mockSidebarLinkProps = {
  base,
  alternateBase,
};
