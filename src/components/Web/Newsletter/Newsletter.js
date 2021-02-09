import React, { useState } from "react";
import { Form,  Input, Button, notification } from "antd";
import { suscribeNewsletterApi } from "../../../api/newsletter";

import "./Newsletter.scss";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const onSubmit = e => {
   
    console.log(e);
  };

  return (
    <div className="newsletter">
      <h3>Newsletter</h3>
      <Form onSubmit={onSubmit}>
        <Form.Item>
          <Input
            
            placeholder="Correo electronico"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            ¡Me suscribo!
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
