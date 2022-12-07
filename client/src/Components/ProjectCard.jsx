import React, {useState} from 'react';
import {Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

export default function ProjectCard(props){
    const side = {
        0: "right",
        1: "left"
    }
    const checkVW = {
        true: "90vw",
        false: "60vw"
    }
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => {
        isExpanded ? setIsExpanded(false) : setIsExpanded(true);
    }

    if (!isExpanded) {
        return(
            <Card
                id={props.Project.id}
                className={side[props.type]+"-project"}
                style={{width: checkVW[isExpanded]}}>
                <Card.Header className="project-header">
                    <h1>{props.Project.title}</h1>
                </Card.Header>
                <Card.Body className="project-body">
                    <div className="project-body-left">
                        <Card.Img className="project-img" src={props.Project.imgurl} alt={props.Project.name + "image"}/>
                    </div>
                    <div className="project-body-right">
                        <h3>{props.Project.short}</h3>
                        <div className='technologies'>
                            <h5>Technologies:</h5>
                            {props.Project.technologies.map((tech, i) => {
                                return(
                                    <Card.Text>{tech}</Card.Text>
                                )
                            })}
                        </div>
                        <Button onClick={toggleExpanded}>Show more details!</Button>
                    </div>
                </Card.Body>
            </Card>
        )
    } else {
        return(
            <Card
                id={props.Project.id}
                className={side[props.type]+"-project"}
                style={{width: checkVW[isExpanded]}}>
                <Card.Header className="project-header">
                    <h1>{props.Project.title}</h1>
                </Card.Header>
                <Card.Body className="project-body-vert">
                    <div className="project-body-top">
                        <Card.Img className="project-img-big" src={props.Project.imgurl} alt={props.Project.name + "image"}/>
                    </div>
                    <div className="project-body-bottom">
                        <div className="project-body-bottom-upper">
                            <h5 className="project-description">{props.Project.description}</h5>
                            <ListGroup className="project-links">
                                <ListGroupItem>
                                    <Card.Link className="project-github-link" href={props.Project.giturl}>
                                        <Card.Img className="project-logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github logo"></Card.Img>
                                        <Card.Text>Github link</Card.Text>
                                    </Card.Link>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Card.Link className="project-github-link" href={props.Project.projecturl}>
                                        <Card.Text>Project link</Card.Text>
                                    </Card.Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                        <div className="project-body-bottom-lower">
                            <div className='technologies-hoz'>
                                <Card.Text>Technologies:</Card.Text>
                                {props.Project.technologies.map((tech, i) => {
                                    if (i < props.Project.technologies.length-1) {
                                        return(
                                            <Card.Text className="one-tech">{tech},</Card.Text>
                                        )
                                    } else {
                                        return(
                                            <Card.Text className="one-tech">{tech}</Card.Text>
                                        )
                                    }
                                })}
                            </div>
                            <Button onClick={toggleExpanded}>Show less details!</Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}
