import {React, useState, useEffect} from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import {Container} from "react-bootstrap";

export default function ProjectContainer() {
    const [projects, setProjects] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/projects')
            .then(res => {
                console.log(res);
                setProjects(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [])
    return(
        <div className="projects">
            {projects.map((Project, i) => {
                console.log(Project)
                return (
                    <ProjectCard key={i} type={i % 2} Project={Project}/>
                )
            })}
        </div>
    )
}