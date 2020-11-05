import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
const SearchBar = ({keyword,setKeyword}) => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="City" />
        </Col>
        <Col>
          <Form.Control placeholder="Country" />
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBar