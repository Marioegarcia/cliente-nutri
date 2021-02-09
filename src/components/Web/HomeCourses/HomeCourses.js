import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";



import "./HomeCourses.scss";

export default function HomeCourses() {
  return (
    <Row className="how-my-courses-work">
    <Col lg={24} className="how-my-courses-work__title">
      <h2>Conoce el método de
nuestras consultas</h2>
      <h3>
     
       Consiste en apoyarte TODOS LOS DÍAS, donde quiera que estés.
      </h3>
    </Col>

    <Col lg={4} />
    <Col lg={16}>
      <Row className="row-cards">
        <Col md={8}>
          <CardInfo
            
            title="Registrate"
            description="El registro es muy importante para llevar el control y seguimiento de tu progreso"
          />
        </Col>
        <Col md={8}>
          <CardInfo
           
            title="Agenda tu cita"
            description="Hacemos consulta de Lunes a Domingo."
          />
        </Col>
        <Col md={8}>
          <CardInfo
            
            title="Haces tu pago"
            description="Fácil, directo en la página, por transferencia,
             depósito o directamente en el consultorio."
          />
        </Col>
      </Row>
      <Row className="row-cards">
        <Col md={8}>
          <CardInfo
            title="Recibirás un video tutorial"
            description="Para tomar tu peso y medidas fácilmente, solo aplica consultas online. "
          />
        </Col>
        <Col md={8}>
          <CardInfo
            title="Te damos acceso a la aplicación"
            description="Primero registrarás tus gustos, 
            padecimientos y estilo de vida. Luego, 
            verás tu plan, registrarás tus comidas, 
            verás recetas, premios y mucho más."
          />
        </Col>
        <Col md={8}>
          <CardInfo
            title="Aprendes a comer"
            description="Y te damos de alta! sabrás que comer y en que cantidades."
          />
        </Col>
      </Row>
    </Col>
    <Col lg={4} />
    <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link to="/courses">
          <Button>Mas informacion</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardInfo(props) {
  const {  title, description } = props;
  const { Meta } = Card;

  return (
    <Card bordered={false} className="how-my-courses-work__card">
      
      <Meta title={title} description={description} />
    </Card>
  );
}

// mesoterapia
// auriculoterapia
// antropometria
// activacion fisica