import React from "react";
import { Button,Avatar } from "antd";
import { MenuFoldOutlined,UserOutlined,PoweroffOutlined } from '@ant-design/icons';

import Logo from "../../../assets/img/png/clinica.png";
import { logout } from "../../../api/auth";

import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  const logoutUser = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={Logo}
          alt="NUTRICION CLINICA Y DEPORTIVA"
        />
        
      </div>
      <div className="menu-top__right">
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        <Button type="link" onClick={logoutUser}>
          <PoweroffOutlined twoToneColor="#eb2f96" />
        </Button>
      </div>
    </div>
  );
}
