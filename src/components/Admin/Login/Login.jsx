import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col, notification ,Card} from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../../../assets/img/png/clinica.png";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";
import "./Login.scss";
import { signInApi } from "../../../api/user";



export default function Login() {
  
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const onFinish = async () => {
    
    const result = await signInApi(data);
    
    
    notification[result.respuesta]({
         message: result.message
    });

    if (result.conection) {
      const { accessToken, refreshToken } = result;
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);
      window.location.href = "/admin";
    }
    
  };

  return (
    <Row>
      <Col>
      <Card className="form">
      <div className="form__logo">
        <img alt="logo" src={Logo} />
      </div>
      <Form
        name="normal_login"
        className="form__login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onChange={handleChange}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            type="email"
            name="email"
            placeholder="Correo electronico"
            className="login-form__input"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            className="login-form__input"
            type="password"
            name="password"
            placeholder="Contraseña"
           
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordar</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Olvidaste tu contraseña?
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Login
          </Button>
          
        </Form.Item>
      </Form>
    </Card>
      </Col>
    </Row>
    
  );
}

