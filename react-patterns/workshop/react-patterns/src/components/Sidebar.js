import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { DeploymentUnitOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const Sidebar = () => (
  <Sider width={200}>
    <Menu mode="inline" style={{ height: "100%" }}>
      <SubMenu icon={<DeploymentUnitOutlined />} title="PCC">
        <Item>
          01: Starting Point <Link to="/ppc/1" />
        </Item>
        <Item>
          02: Container and presentational component <Link to="/ppc/2" />
        </Item>
        <Item>
          03: Container and presentational component <Link to="/ppc/3" />
        </Item>
        <Item>
          PCC exercise <Link to="/ppc/exercise" />
        </Item>
      </SubMenu>
    </Menu>
  </Sider>
);

export default Sidebar;
