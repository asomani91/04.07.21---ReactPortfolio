import React, { useState } from 'react'
import ProjectInfo from './ProjectInfo'
import projectImg1 from '../images/project1.png'
import projectImg2 from '../images/project3.png'
import projectImg3 from '../images/project2.png'
export default function Project() {
    const [state, setState] = useState({
        Projects: [{
            id: 1,
            img: projectImg1,
            project_name: "Password generator"
        },
        {
            id: 2,
            img: projectImg2,
            project_name: "LOTR Quiz"
        },
        {
            id: 3,
            img: projectImg3,
            project_name: "Work day scheduler"
        }
        ]
    })
    return (
        <div className="container">
            <div className="row">
                {
                    state.Projects.map(project => {
                        return <ProjectInfo key={project.id} project={project} />
                    })
                }
            </div>
        </div>
    )
}
