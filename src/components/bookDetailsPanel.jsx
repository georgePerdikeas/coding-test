import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import '../css/bookDetailsPanel.css';

export default (props) => {
    return (
        <Card className="text-center">
            <Card.Body>
                {/* Book title */}
                <Card.Title>{props.book.book_title}</Card.Title>
                {/* Book authors, publication location & year */}
                <ListGroup variant="flush">
                    {props.book.book_author.map((bookAuthor, index) => <ListGroup.Item key={index}>Author : {bookAuthor}</ListGroup.Item>)}
                    <ListGroup.Item><span>Published : {`${props.book.book_publication_city}, ${props.book.book_publication_country}, ${props.book.book_publication_year}`}</span></ListGroup.Item>
                </ListGroup>
            </Card.Body>
            {/* Book pages count */}
            <Card.Footer className="text-muted">{props.book.book_pages} page{props.book.book_pages !== 1? "s" : ""}</Card.Footer>
        </Card>
    );
}