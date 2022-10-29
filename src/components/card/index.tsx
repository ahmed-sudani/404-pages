import React from "react";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  children: React.ReactNode;
}

const Card = ({ title, children }: Props) => (
  <div className=" shadow-lg p-4 rounded-lg flex flex-col gap-2 bg-white z-10">
    <div className="flex justify-between items-center">
      <div className="font-bold">{title}</div>
      <div className="bg-gray-200 rounded py-1 px-3" title="code">
        <Link to={`/${title}`}>{"</>"}</Link>
      </div>
    </div>
    <hr />
    {children}
  </div>
);

export default Card;
