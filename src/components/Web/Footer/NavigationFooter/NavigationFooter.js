import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer">
      <Col>
        <h3>Navegación</h3>
      </Col>
      <Col md={12}>
        <RenderListLeft />
      </Col>
      <Col md={12}>
        <RenderListRight />
      </Col>
    </Row>
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a href="#">
         
        </a>
      </li>
      <li>
        <a href="#">
         
        </a>
      </li>
      <li>
        <a href="#">
         
        </a>
      </li>
      <li>
        <a href="#">
         
        </a>
      </li>
    </ul>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="#">
         
        </a>
      </li>
      <li>
        <a href="#">
         
        </a>
      </li>
      <li>
        <a href="#">
         
        </a>
      </li>
      <li>
        <a href="#">
         
        </a>
      </li>
    </ul>
  );
}
