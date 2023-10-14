'use client';
import { UserButton } from '@clerk/nextjs';
import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Book,
  Globe,
  Plus,
  Settings,
} from 'react-feather';
import SidebarLink from './SidebarLink';
export interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [isOpen, setIsOpen] = useState(true);
  const classes = isOpen
    ? ' max-w-[300px] justify-between bg-black/20 shadow-lg  px-6 py-10'
    : 'max-w-[0px]  justify-center items-center';
  const sidebarLinks = [
    { icon: Globe, text: 'Overview', href: '/overview' },
    { icon: Book, text: 'Tasks', href: '/tasks' },
    { icon: Bell, text: 'Notifications', href: '/notifications' },
    { icon: Settings, text: 'Settings', href: '/settings' },
  ];
  return (
    <div
      className={`flex h-screen max-w-[300pxpx]  flex-col text-white   duration-200 ease-out ${classes}`}
    >
      {isOpen ? (
        <>
          <div>
            <h1 className="mb-10 text-2xl font-bold text-primary">Taski</h1>
            <SidebarLink Icon={Plus} text="New Project" href="/new-project" />
            <p className="mt-10 font-bold">Menu</p>
            <ul className="flex flex-col items-center justify-center gap-5">
              {sidebarLinks.map(({ icon: Icon, text, href }, i) => (
                <SidebarLink key={i} Icon={Icon} text={text} href={href} />
              ))}
            </ul>
            <div
              onClick={() => setIsOpen(false)}
              className="mt-5 flex items-center justify-center"
            >
              <ArrowLeft className="cursor-pointer" size={30} />
            </div>
          </div>
          <div className="text-white">
            <p className="mb-3 mt-10 font-bold">Profile</p>
            <UserButton
              appearance={{
                elements: {
                  userButtonOuterIdentifier: 'text-white font-bold',
                  userButtonBox: 'flex flex-row-reverse',
                },
              }}
              showName={true}
            />
          </div>
        </>
      ) : (
        <ArrowRight
          className="relative z-10 ml-6 cursor-pointer"
          size={30}
          onClick={() => setIsOpen(true)}
        />
      )}
    </div>
  );
};
export default Sidebar;
