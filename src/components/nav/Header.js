import React, { useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");
  const handleClick = (event) => {
    console.log("click", event);
    setCurrent(event.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
      <Menu.Item key="home" icon={<AppstoreOutlined />}>
        Home
      </Menu.Item>
      <SubMenu key="register" icon={<SettingOutlined />} title="Register">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Header;
