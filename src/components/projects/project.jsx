import React from 'react'
import projects from "./projectinfo.jsx";

const Card = ({ name, description, github }) => {
    return (
        <div className='max-w-md  p-6 bg-white border border-gray-200 rounded-lg shadow '>
            <div className='text-center mb-4 text-2xl font-bold text-gray-900'>
                {name}
            </div>
            <div className='text-center font-semimedium mb-5 text-gray-700 '>
                {description}
            </div>
            <div className='items-center flex justify-center'>
                <a href={`${github}`} className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Github
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

        </div>
    )
}


export default function Project() {
    return (
        <div name="Projects" className='bg-slate-100'>

        <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-[70%] '>
            <h2 class="mb-14 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">MY WORKS</h2>

            <div className='flex flex-wrap gap-14 justify-center '>
                {projects.map((project, ind) => (
                    <Card
                        name={project.name}
                        description={project.description}
                        github={project.github}
                        key={ind}
                    />
                ))}
            </div>
        </div>
        </div>
    )
}
