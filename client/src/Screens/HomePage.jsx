import React from 'react';
import Profile from "../Components/Profile";
import ProjectContainer from "../Components/ProjectContainer";
import {Container} from "react-bootstrap";

export default function HomePage() {
    return(
        <div className="homepage">
            <Profile/>
            <ProjectContainer/>
        </div>
    )
}