import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";

import Login from "../../../components/Admin/Login";
import { getAccessTokenApi } from "../../../api/auth";

import './LoginPage.scss'
import RegisterForm from "../../../components/Admin/RegisterForm";




export default function LoginPage() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  
  
  if (getAccessTokenApi()) {
    return <Redirect to="/admin" />;
  }
 
     return (
    
    <Layout className='container'>
      <Content className='container__content'  >
        <Tabs className="container__tab" defaultActiveKey="1" centered>
          <TabPane tab="LOGIN" key="1">
            <Login />
          </TabPane>
          <TabPane tab="REGISTRO" key="2">
            <RegisterForm/>
          </TabPane>
        
        </Tabs>
         
      </Content>
      
    </Layout>
       
            
  );
  
  
    
  
 
}
