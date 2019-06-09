import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { PAGE_BOOK_LIST_BS_COLUMNS } from '../utils/constants';
import '../css/paginationControls.css';

export default (props) => {
    return (
        <Row className="justify-content-md-center">
            <Col xs={PAGE_BOOK_LIST_BS_COLUMNS}>
                <div id="paginationControlsContainer">
                    <DropdownButton id="dropdown-basic-button" title={`Items per page : ${props.itemsPerPage}`}>
                        {[2, 4, 8].map((itemsPerPage, index) => <Dropdown.Item key={index} onClick={() => props.onItemsPerPageChanged(itemsPerPage)}>{itemsPerPage}</Dropdown.Item>)}
                    </DropdownButton>
                    <Button onClick={props.onButtonPreviousPressed} variant="primary" disabled={props.page <= 1}>
                        Previous
                    </Button>
                    <span>Page {props.page} of {props.pagesCount}</span>
                    <Button onClick={props.onButtonNextPressed} variant="primary" disabled={props.page >= props.pagesCount}>
                        Next
                    </Button>
                </div>
            </Col>
        </Row>
    );
}