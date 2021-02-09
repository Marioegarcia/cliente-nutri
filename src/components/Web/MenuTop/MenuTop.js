import React, { useState } from "react";
import { Row, Col, Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import SocialLinks from "../SocialLinks";

import logo from "../../../assets/img/png/clinica.png";

import "./MenuTop.scss";

export default function MenuTop() {
  const [menuData, setMenuData] = useState([]);
  const { menuCollapsed, setMenuCollapsed } = false;

  // useEffect(() => {
  //   getMenuApi().then(response => {
  //     const arrayMenu = [];
  //     response.menu.forEach(item => {
  //       item.active && arrayMenu.push(item);
  //     });
  //     setMenuData(arrayMenu);
  //   });
  // }, []);

  return (
    <>
      <Row justify="center" className="menu-top-web">
        <Col lg={4} md={20}  xs={20} className="menu-top-web-col">
          <div className="menu-top-web__logo">
            <a  href="#home">
              <img
                
                src={logo}
                alt="nutricion clinica y deportiva"
              />
            </a>
          </div>
        </Col>
       
        <Col lg={20} md={4} xs={4}>
          <Menu
            className="menu-top-web"
            defaultSelectedKeys={"/"}
            mode="horizontal"
            overflowedIndicator={<MenuOutlined />}
            expandIcon={() => setMenuCollapsed(!menuCollapsed)}
          >
            <Menu.Item key="/">
              <a href="#home">HOME</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#metodo">METODO</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#nutricion">NUTRICION</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#equipo">NUESTRO EQUIPO</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#contacto">CONTACTO</a>
            </Menu.Item>

            <Menu.Item>
              <a href="/admin">LOGIN</a>
            </Menu.Item>
          </Menu>
        </Col>
        
        
      </Row>
    </>
  );
}
