import React, { useState } from "react";
export default function Skills() {
  const [height, setHeight] = useState(120);
  const [width, setWidth] = useState(120);
  return (
    <div name="Skills" className=" bg-slate-100">
      <h2 class="mb-14 pt-14 text-4xl tracking-tight font-extrabold text-center text-gray-900">
        My Skillset
      </h2>
      <div className="flex flex-wrap gap-x-[4rem] justify-center items-center py-14">
        <img
          src={`${require(`../../assets/icons/react.png`)}`}
          width={height}
          height={height}
          alt="tech-icon"
        />
        <img
          src={`${require(`../../assets/icons/node.png`)}`}
          width={height}
          height={height}
          alt="tech-icon"
        />
        <img
          src={`${require(`../../assets/icons/git.png`)}`}
          width={height}
          height={height}
          alt="tech-icon"
        />
        <img
          src={`${require(`../../assets/icons/github.png`)}`}
          width={height}
          height={height}
          alt="tech-icon"
        />
        <img
          src={`${require(`../../assets/icons/sql.png`)}`}
          width={height}
          height={height}
          alt="tech-icon"
        />
        <img
          src={`${require(`../../assets/icons/mongodb.png`)}`}
          width={240}
          height={height}
          alt="tech-icon"
        />
      </div>
    </div>
  );
}
