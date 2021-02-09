import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/png/deportiva.jpg";
import RegisterForm from "../../../components/Admin/RegisterForm";
import { getAccessTokenApi } from "../../../api/auth";

import './Registro.scss'

export default function Registro() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  
  return (
    
    <Layout className='container'>
      <Content className='container__content'>
          <RegisterForm />
      </Content>
      
    </Layout>
       
            
  );
}