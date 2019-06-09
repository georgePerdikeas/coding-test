import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../css/bookSearchForm.css';
import { PAGE_BOOK_LIST_BS_COLUMNS } from '../utils/constants';

export default (props) => {

    function onSearch(event) {
        event.preventDefault();
        const termToSearchFor = event.target.searchTerm.value;
        props.onSearchTerm(termToSearchFor);
    }

    return (
        <Row className="justify-content-md-center">
            <Col xs={PAGE_BOOK_LIST_BS_COLUMNS}>
                <Form onSubmit={onSearch} id="bookSearchFormContainer">
                    <Form.Row>
                        <Col>
                            <Form.Control type="text" name="searchTerm" placeholder="Enter search term" />
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit">Search</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Col>
        </Row>
    );
}

