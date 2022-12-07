import React from 'react';
import ProfileCard from "./ProfileCard";
import Links from "./Links"
import {Container} from "react-bootstrap";

export default function Profile() {
    return (
        <div className="profile">
            <ProfileCard/>
            <Links/>
        </div>
    )
}