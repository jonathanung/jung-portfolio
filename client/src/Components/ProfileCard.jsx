import {Card} from "react-bootstrap";
import React from "react";

export default function ProfileCard() {
    return (
        <Card
            id="profile-card"
            style={{ width: '60vw' }}>
            <Card.Header
                className="profile-header"
                style={{ width: '60vw' }}>
                <h1>Jonathan Ung</h1>
            </Card.Header>
            <Card.Img className="profile-img" src="https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png" alt="Profile"/>
            <Card.Body className="profile-body">
                <Card.Text className='profile-text'><h4>
                    Jonathan is consistently interested in the refinement and improvement of his craft; he is always hungry to develop his skills further and will put in the effort to do so through self-investment. As someone who believes in consistent and frequent learning, he is capable of quickly learning and refining new skills and creating and developing a mental web of the structure within a concept.
                </h4></Card.Text>
            </Card.Body>
        </Card>
    )
}