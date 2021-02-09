import React, { useState } from "react";
import { Form, InputNumber, Button,Row, Col, Card, List,DatePicker } from "antd";

import './Mediciones.scss';




export default function Mediciones(props) {
  const { user } = props;

  const data = [
    {
      nombre: "Peso",
      cantidad: user.peso,
    },
    {
      nombre: "Altura",
      cantidad: user.altura,
    },
    {
      nombre: "Perímetro de cadera",
      cantidad: 170,
    },
    {
      nombre: "Perímetro de la cintura",
      cantidad: 170,
    },
  ];

  return (
    <Row  gutter={[8, 8]}>
      <Col xs={24} sm={10} md={8} lg={10} xl={10}>
        <Card title="Datos Antropométricos">
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.nombre}</a>}
                />
                <div>{item.cantidad}</div>
              </List.Item>
            )}
          />
        </Card>
      </Col>
      <Col xs={24} sm={14} md={16} lg={14} xl={14}>
          <Card className="card"  title="Nueva medición de peso">
         
            <Form
            
            className="card__form"
            >
              <Form.Item style={{width: '100%'}}>
                <DatePicker style={{width: '100%'}} />
              </Form.Item>

              <Form.Item style={{width: '100%'}} >
                <InputNumber style={{width: '100%'}} step={0.1}  placeholder="Kilogramos" />
              </Form.Item>

              <Form.Item style={{width: '100%'}}>
                <Button type="primary" className="card__button" >Registrar</Button>
              </Form.Item>

            </Form>

          </Card>
      </Col>
    </Row>
  );
}
