import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {PAGE_BOOK_LIST_BS_COLUMNS} from '../utils/constants';
import BookDetailsPanel from './bookDetailsPanel';

export default (props)  => {
    const bookPanels = props.books.map(book => (
        <Row key={book.id} className="justify-content-md-center">
            <Col xs={PAGE_BOOK_LIST_BS_COLUMNS}>
                <BookDetailsPanel book={book}/>
            </Col>
        </Row>
    ));
    return (
        <div>
            {bookPanels}
        </div>
    );
}