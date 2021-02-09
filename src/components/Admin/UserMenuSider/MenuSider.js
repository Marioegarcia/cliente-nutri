import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

import "./MenuSider.scss";

function MenuSider(props) {
  
  const { data, location } = props;
  console.log(data.id);
  const { Sider } = Layout;

  return (
    <Sider breakpoint="lg" collapsedWidth="0px" className="admin-sider">
      <div className="logo" />
      <Menu
        className="admin-sider__menu"
        mode="inline"
        defaultSelectedKeys={["/admin/users"]}
      >
        <Menu.Item key="/admin" icon={<PieChartOutlined />} >
          <Link to="/admin">
            <span className="nac-text">Home</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="/admin/dieta/:id" icon={<PieChartOutlined />}>
          <Link to={`/admin/dieta/${data.id}`}>
            <span className="nac-text">Dieta</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/categorias" icon={<PieChartOutlined />}>
          <Link to="/admin/categorias">
           
            <span className="nac-text">Resultados</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/courses" icon={<PieChartOutlined />}>
          <Link to="/admin/courses">
            <span className="nac-text">Historia clinica</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/blog" icon={<PieChartOutlined />}>
          <Link to="/admin/blog">
            <span className="nac-text">Recomendaciones</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
    // <Sider
    // breakpoint="xs"
    // collapsedWidth="80"
    // className="admin-sider"
    // collapsed={menuCollapsed}
    // onBreakpoint={broken => {
    //   console.log(broken);
    // }}
    // onCollapse={(collapsed, type) => {
    //   console.log(collapsed, type);
    // }}
    // >
    //   <Menu
    //     theme="dark"
    //     mode="inline"
    //     // defaultSelectedKeys={[location.pathname]}
    //     defaultSelectedKeys={["/admin/users"]}
    //   >
    //     {/* <Menu.Item key="/admin">
    //       <Link to="/admin">
    //         <Icon type="home" />
    //         <span className="nav-text">Home</span>
    //       </Link>
    //     </Menu.Item> */}

    //     <Menu.Item key="/admin/users" icon={<PieChartOutlined />}>
    //       <Link to="/admin/users">

    //         <span className="nac-text">Usuarios</span>
    //       </Link>
    //     </Menu.Item>
    //     <Menu.Item key="/admin/menu" icon={<PieChartOutlined />}>
    //       <Link to="/admin/menu">

    //         <span className="nac-text">Menú</span>
    //       </Link>
    //     </Menu.Item>
    //     <Menu.Item key="/admin/courses" icon={<PieChartOutlined />} >
    //       <Link to="/admin/courses">

    //         <span className="nac-text">Cursos</span>
    //       </Link>
    //     </Menu.Item>
    //     <Menu.Item key="/admin/blog" icon={<PieChartOutlined />} >
    //       <Link to="/admin/blog">

    //         <span className="nac-text">Blog</span>
    //       </Link>
    //     </Menu.Item>
    //   </Menu>
    // </Sider>
  );
}

export default withRouter(MenuSider);
