import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col,Avatar } from "antd";

import MenuTop from "../components/Web/MenuTop";
import Footer from "../components/Web/Footer";

import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { routes } = props;

  

  return (
    <>
    
      <Row justify="center" align="middle">
      
        <Col lg={4}></Col>
        <Col  lg={16}  className="menu">
        
          <MenuTop /> 
          
        </Col>
        <Col lg={4}></Col>
        
      </Row>
      <LoadRoutes routes={routes} />
     
      <Footer />
    </>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
        
      ))}
    </Switch>
  );
}
