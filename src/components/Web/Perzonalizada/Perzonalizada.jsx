import React from "react";
import { List, Card, Row, Col } from "antd";

import fondo from './../../../assets/img/jpg/close-up-nut.jpg'

import "./Perzonalizada.scss";

const data = [
  {
    title: "Nutrición clínica",
    description:"La Nutrición es clave en la prevención de enfermedades, pero también lo es en la curación de las mismas, ya sea como factor principal o secundario. En este gran grupo encontramos las enfermedades digestivas y las patologías.",
  },
  {
    title: "Nutrición deportiva",
    description:
      "La alimentación y la actividad física son dos factores que todo ser humano debería cuidar. Ambos, de la mano, nos llevan a tener una vida saludable y libre de enfermedades crónicas que asoman a gran parte de los enfermos hospitalarios.",
  },
  {
    title: "Nutrición adaptada",
    description:
      "Si has entrado en este apartado, queremos decirte que tu peso no es lo importante. Cuando caminas, no se rompen los adoquines ni nada de eso. Por contra, es posible que haya alguna camisa que no te cierra y que eso te moleste. ¿Ves? Lo que te importa es tu volumen corporal y no el peso.",
  },
  {
    title: "Nutrición vegetariana y vegana",
    description:
      "En el mundo de la nutrición existe mucha controversia en relación a la adopción de una dieta vegetariana y vegana. Aunque los estudios avalan que las dietas vegetarianas y veganas son totalmente saludables e incluso reducen la aparición de enfermedades degenerativas como Parkinson o Alzheimer, hay personal sanitario que se posiciona en contra.",
  },
];

export default function Perzonalizada() {
  return (
    <div id="#nutricion" className="nutricion">
      <Row justify="center" className="nutricion">
        <Col lg={24} className="nutricion__title">
          <h2>Nutrición Personalizada</h2>
         
        </Col>

       
        <Col lg={24} md={24} >
          <Row className="row-cards">
            <Col md={12} sm={24} >
              <CardInfo
                title={data[0].title}
                description={data[0].description}
              />
            </Col>
            <Col md={12} sm={24}>
                <CardInfo
                   title={data[1].title}
                   description={data[1].description}   
                />
            </Col>
            <Col md={12} sm={24} >
              <CardInfo
                title={data[2].title}
                description={data[2].description}
                
              />
            </Col>
            <Col md={12} sm={24}>
                <CardInfo
                title={data[3].title}
                description={data[3].description} 
                
                />
            </Col>
          </Row>
          
        </Col>
        
      </Row>
    </div>
  );
}

function CardInfo(props) {
    const {  title, description } = props;
    const { Meta } = Card;
  
    return (
      <Card className="nutricion__card"
      hoverable
        
      >
        
        <Meta title={title} description={description}  />
      </Card>
    );
  }