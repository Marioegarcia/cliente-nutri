import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Checkbox,
  Row,
  Card,
  notification,
  Col,
  Radio,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import Logo from "../../../assets/img/png/clinica.png";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";

import { signUpApi } from "../../../api/user";

import "./RegisterForm.scss";

export default function RegisterForm() {
  const [data, setData] = useState({
    nombre: "",
    lastname: "",
    age: null,
    altura: null,
    peso: null,
    genero: "",
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    if (e.target.name === "privacyPolicy") {
      setData({
        ...data,
        [e.target.name]: e.target.checked,
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onFinish = async () => {
    const passwordVal = data.password;
    const repeatPasswordVal = data.repeatPassword;
    const privacyPolicyVal = data.privacyPolicy;

    if (!privacyPolicyVal) {
      notification["error"]({
        message: "Aceptar politica de privacidad",
      });
    } else {
      if (passwordVal !== repeatPasswordVal) {
        notification["error"]({
          message: "Las contraseñas tienen que ser iguales",
        });
      } else {
        const result = await signUpApi(data);
        console.log(result.ok);

        if (result.ok) {
          notification["error"]({
            message: result.message
          });
        } else {

          notification["success"]({
            message: result.message
          });
          resetForm();
          window.location.href = "/admin";
        }
      }
    }
  };

  const resetForm = () => {
    const data = document.getElementsByTagName("input");

    for (let i = 0; i < data.length; i++) {
      data[i].classList.remove("success");
      data[i].classList.remove("error");
    }

    setData({
      nombre: "",
      lastname: "",
      age: 0,
      altura: 0,
      peso: null,
      genero: "",
      email: "",
      password: "",
      repeatPassword: "",
      privacyPolicy: false,
    });
  };

  return (
    <Card className="form">
      <div className="form__logo">
        <img alt="logo" src={Logo} />
      </div>

      <Form
        className="register-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onChange={handleChange}
      >
        <Row gutter={[8, 0]}>
          <Col span={12}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Ingrese su nombre!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="nombre"
                name="nombre"
                placeholder="Nombre"
                className="register-form__input"
                value={data.nombre}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Ingrese apellidos!",
                },
              ]}
            >
              <Input
                prefix={<IdcardOutlined className="site-form-item-icon" />}
                type="lastname"
                name="lastname"
                placeholder="Apellidos"
                className="register-form__input"
                value={data.lastname}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 8]} className="row-desc">
          <Col span={8}>
            <Form.Item
              name="age"
              label="Age"
              rules={[
                {
                  type: "number",
                  min: 0,
                  max: 99,
                  message: "Edad no valida",
                },
              ]}
            >
              <InputNumber 
              name="age" 
              className="register-form__input" 
              defaultValue={data.age}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="altura"
              label="altura"
              rules={[
                {
                  type: "number",
                  min: 0,
                  max: 210,
                  message: "Altura no valida",
                },
              ]}
            >
              <InputNumber
                className="register-form__input"
                name="altura"
                placeholder="cm"
                defaultValue={data.altura}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="peso"
              label="Peso"
              rules={[
                {
                  type: "number",
                  min: 0,
                  max: 210,
                  message: "Peso no valido",
                },
              ]}
            >
              <InputNumber
                className="register-form__input"
                name="peso"
                placeholder="kg"
                defaultValue={data.peso}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="genero" label="Genero">
          <Radio.Group name="genero">
            <Radio.Button value="masculino">Masculino</Radio.Button>
            <Radio.Button value="femenino">Femenino</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "Correo no valido!",
            },
            {
              required: true,
              message: "Ingrese su correo!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            type="email"
            name="email"
            placeholder="Correo electronico"
            className="register-form__input"
            value={data.email}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Ingrese su contraseña!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            name="password"
            placeholder="Password"
            className="register-form__input"
            value={data.password}
          />
        </Form.Item>

        <Form.Item
          name="repeatPassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Por favor confirme su contraseña!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "Las contraseñas tienen que ser identicas !"
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            name="repeatPassword"
            placeholder="Repetir Contraseña"
            className="register-form__input"
            value={data.repeatPassword}
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="privacyPolicy" noStyle>
            <Checkbox name="privacyPolicy" checked={data.privacyPolicy}>
              {" "}
              He leído y acepto la política de privacidad.
            </Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="register-form-button"
          >
            Registrar
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

{
  /* <div>
      <Card title="Login" bordered={false} style={{ padding: "100px" }}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
					onFinish={onFinish}
					onChange={handleChange}
        >
          <Form.Item
            
            rules={[
              {
                required: true,
                message: "Por favor introduce tu email!",
              },
            ]}
          >
            <Input
							name="email"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="email"
            />
          </Form.Item>
          <Form.Item
            
            rules={[
              {
                required: true,
                message: "Introduce tu password Password!",
              },
            ]}
          >
            <Input
							name="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Recordar</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Olvidaste tu Contraseña?
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Iniciar sesion
            </Button>
            Or <a href="">Registrate!</a>
          </Form.Item>
        </Form>
      </Card>
    </div> */
}
