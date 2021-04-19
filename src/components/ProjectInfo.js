import React from 'react'
export default function ProjectInfo(props) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="project-info">
                <h3>{props.project.project_name}</h3>
                <img src={props.project.img} alt="image" />
            </div>
        </div>
    )
}
