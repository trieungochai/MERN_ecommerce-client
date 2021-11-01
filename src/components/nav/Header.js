import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  UserAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");
  const handleClick = (event) => {
    console.log("click", event);
    setCurrent(event.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<AppstoreOutlined />}>
        Home
      </Menu.Item>

      <Menu.Item
        key="register"
        icon={<UserAddOutlined />}
        className="float-right"
      >
        Register
      </Menu.Item>

      <Menu.Item key="login" icon={<UserOutlined />} className="float-right">
        Login
      </Menu.Item>

      <SubMenu key="username" icon={<SettingOutlined />} title="Username">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Header;
