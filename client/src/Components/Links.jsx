import {Card, CardImg, ListGroup, ListGroupItem} from "react-bootstrap";
import React from "react";

export default function Links() {
    return (
        <div className="profile-links">
            <Card
                id = "links-card"
                bg = "info"
                text = "white"
                style={{ width : '20vw' }}>
                <Card.Header>
                    <Card.Title>Jonathan's Links</Card.Title>
                </Card.Header>
                <Card.Body>
                    <ListGroup className="links-list-group">
                        <ListGroupItem className="links-list-item">
                            <Card.Link className="links-list-item-url" href="https://github.com/jonathanung">
                                <CardImg className="links-list-item-img" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github logo"></CardImg>
                            </Card.Link>
                        </ListGroupItem>
                        <ListGroupItem className="links-list-item">
                            <Card.Link className="links-list-item-url" href="https://www.linkedin.com/in/jonathan-ung-1193a2238/">
                                <CardImg className="links-list-item-img" src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="linkedin logo"></CardImg>
                            </Card.Link>
                        </ListGroupItem>
                        <ListGroupItem className="links-list-item">
                            <Card.Text className="contact">Contact me: jonathan.keith.ung@gmail.com</Card.Text>
                        </ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}