import { NextPage } from 'next';
import React, { ReactElement, ReactNode } from 'react';

export interface IMenuTitleProps {
  title: string;
  svg?: ReactElement<React.SVGProps<SVGSVGElement>>;
}

const MenuTitle: NextPage<IMenuTitleProps> = ({ title, svg }) => {
  return (
    <div className="dark:hover:text-white hover:font-semibold cursor-pointer">
      <div className="inline-flex space-x-1.5">
        <div>{svg}</div>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default MenuTitle;
