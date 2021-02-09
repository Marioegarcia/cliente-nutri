import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import useAuth from "../hooks/useAuth";
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";
import UserMenuSider from "../components/Admin/UserMenuSider";
import Registro from "../pages/Admin/Registro";
import LoginPage from "../pages/Admin/Login";


import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const { routes } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(true);
  const { Header, Content, Footer } = Layout;
  
  const {user, isLoading} = useAuth();


  if (!user && !isLoading) {
    return (
      <>
        <Route path="/admin/login" component={LoginPage} />
        
        <Redirect to="/admin/login" />

      </>
    );
  }
  if (user && !isLoading) {
    if (user.role === "USER_ROLE") {
      
      return (
        <Layout className="layout-all">
         <UserMenuSider data={user} />
        <Layout
          className="layout-admin"
          style={{ marginLeft:  "50px",padding: 0, minHeight: 360 }}
        >
          <Header className="layout-admin__header">
            <MenuTop
              
            />
          </Header>
          <Content className="layout-admin__content">
            <LoadRoutes routes={routes} />
          </Content>
          <Footer className="layout-admin__footer">
            NUTRICION CLINICA Y DEPORTIVA user
          </Footer>
        </Layout>
      </Layout>
      );
    }else{
      return (
      <Layout className="layout-all">
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout
          className="layout-admin"
          style={{ marginLeft:  "50px",padding: 0, minHeight: 360 }}
         
        >
          <Header className="layout-admin__header">
            <MenuTop
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
            />
          </Header>
          <Content className="layout-admin__content">
            <LoadRoutes routes={routes} />
          </Content>
          <Footer className="layout-admin__footer">
            NUTRICION CLINICA Y DEPORTIV
          </Footer>
        </Layout>
      </Layout>
    );
    }
    
  }

  return null;
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}


// <Layout>
//         <MenuSider menuCollapsed={menuCollapsed} />
//         <Layout
//           className="layout-admin"
//           style={{ marginLeft:  "50px" }}
//         >
//           <Header className="layout-admin__header">
//             <MenuTop
//               menuCollapsed={menuCollapsed}
//               setMenuCollapsed={setMenuCollapsed}
//             />
//           </Header>
//           <Content className="layout-admin__content">
//             <LoadRoutes routes={routes} />
//           </Content>
//           <Footer className="layout-admin__footer">
//             NUTRICION CLINICA Y DEPORTIVA
//           </Footer>
//         </Layout>
//       </Layout>