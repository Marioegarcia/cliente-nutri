import React, { useState, useEffect } from "react";
import { Col, Form, Input, Button, Row,InputNumber } from "antd";


import { getUserApi, updateUserApi } from "../../../api/user";
import './EditPaciente.scss';

export default function EditPaciente(props) {
  
  const {setVisible ,user,data} = props;
  const [userData, setUserData] = useState({
    id: data, 
    nombre: user.nombre,
    lastname: user.lastname,
    email: user.email,
    role: user.role,
    age: user.age,
    altura:user.altura,
    peso: user.peso,

  });
  
  
 
  
  
  
  const onFinish =  () => {
    let userUpdate = userData;
   
    updateUserApi(userUpdate);
    setVisible(false);
    window.location.href = window.location.href;
   
  };

  return (
    <div>
      <EditForm
       userData={userData}
       setUserData={setUserData}
       onFinish={onFinish}
      />
    </div>
  );
}





function EditForm(props) {
  const { userData, setUserData, onFinish } = props;
  
  let h = 8;
  let v = 8;
  let span = 12;
  

  return (
    <div>
      <Form onFinish={onFinish} >
        <Row gutter={[8, 8]}>
          <Col span={span}>
            <Form.Item
              initialValue={ userData.nombre}
              name="nombre"
              type="text"
              value={ userData.nombre}
              onChange={(e) => setUserData({ ...userData, nombre: e.target.value })}
              rules={[{ required: true }]}
            >
              <Input placeholder="Nombre"   />
            </Form.Item>
          </Col>
          <Col span={span}>
            <Form.Item
              name="lastname"
              type="text"
              initialValue={ userData.lastname}
              value={userData.lastname}
              onChange={(e) => setUserData({ ...userData, lastname: e.target.value })}
              rules={[{ required: true }]}
            >
              <Input placeholder="Apellidos"   />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[v,h]}>
          <Col span={8}>
            <Form.Item 
            name="age" 
            type="text"
            initialValue={ userData.age}
            value={userData.age}
            onChange={(e) => setUserData({ ...userData, age: e.target.value })}
            >
              <InputNumber placeholder="Edad" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item 
            name="altura" 
            type="text" 
            initialValue={ userData.altura}
            value={userData.altura}
            onChange={(e) => setUserData({ ...userData, altura: e.target.value })}>
              <InputNumber
                placeholder="Altura"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
          <Form.Item 
          name="peso" 
          type="text"
          initialValue={ userData.peso}
          value={userData.peso}
          onChange={(e) => setUserData({ ...userData, peso: e.target.value })}
          >
          <InputNumber placeholder="Peso"/>
        </Form.Item>
          </Col>
        </Row>

        

        <Form.Item 
        name="email" 
        type="email"
        initialValue={ userData.email}
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        rules={[{ required: true }]}
        >
          <Input
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Actualizar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
  
}