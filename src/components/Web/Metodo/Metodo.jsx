import React from 'react'
import { Row, Col, Card, Button,Steps } from "antd";
import { Link } from "react-router-dom";

import "./Metodo.scss";



const { Step } = Steps;


export default function Metodo() {
    
    const paso1 = "Para ayudarte, es esencial comenzar por un buen análisis diagnóstico de tu situación actual. Haremos todo lo posible por conocer tu relación con la comida y cómo podríamos ayudarte. "
    const paso2 = "Según tus necesidades, prepararemos un planning alimenticio personalizado y estudiaremos consejos nutricionales específicos que nos ayudarán a generar hábitos de vida saludables y perdurables. Si fuera necesario, controlaremos la grasa corporal y el peso."
    const paso3 = "Para comprobar que el tratamiento está siendo efectivo, nos iremos viendo cada cierto tiempo. Escucharte será fundamental seguir adecuando el tratamiento a tus necesidades."

    return (
    <div id="metodo" className="how-my-courses-work" >
        <Row  className="how-my-courses-work">
            <Col  lg={24} className="how-my-courses-work__title">
            <h2 >¿CÓMO SERÁ TU TRATAMIENTO?</h2>
            <h3>
            
            Consiste en apoyarte TODOS LOS DÍAS, donde quiera que estés.
            </h3>
            </Col>

            <Col lg={4} />
            <Col lg={16}>
            <Steps direction="vertical" current={3} status="error">
                <Step title="Diagnóstico" description={paso1} />
                <Step title="Tratamiento" description={paso2} />
                <Step title="Seguimiento" description={paso3} />
            </Steps>

                {/* <Row className="row-cards">
                    <Col md={mdCol}>
                    <CardInfo
                        
                        title="1. Registrate"
                        description="El registro es muy importante para llevar el control y seguimiento de tu progreso"
                    />
                    </Col>
                    <Col md={mdCol}>
                    <CardInfo
                    
                        title="2. Agenda"
                        description="Agenda tu cita online o presencial, hacemos consulta de Lunes a Domingo."
                    />
                    </Col>
                    <Col md={mdCol}>
                    <CardInfo
                        
                        title="3. Pagas"
                        description="Fácil, directo en la página, por transferencia,
                        depósito o directamente en el consultorio."
                    />
                    </Col>
              
                    <Col md={mdCol}>
                    <CardInfo
                        title="4. Instrucciones"
                        description="Recibes un video para tomar tu peso y medidas fácilmente, solo aplica consultas online. "
                    />
                    </Col>
                    <Col md={mdCol}>
                    <CardInfo
                        title="5. Acceso "
                        description="Podras acceder a la app donde podras registrar tus gustos, 
                        padecimientos y estilo de vida. Luego, 
                        verás tu plan, registrarás tus comidas, 
                        verás recetas, premios y mucho más."
                    />
                    </Col>
                    <Col md={mdCol}>
                    <CardInfo
                        title="6. Aprendes "
                        description="Ademas de llevar tu control te daremos tips y recomendaciones para que 
                         aprendas a medir cantidades, porciones y mas!."
                    />
                    </Col>
                </Row> */}
            </Col>
            <Col lg={4} />
            <Col lg={4} />
            <Col lg={24} className="home-courses__more">
                <Link to="/courses">
                <Button>Mas informacion</Button>
                </Link>
            </Col>
        </Row>
    </div>
    )
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
