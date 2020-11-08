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
          01: Starting Point <Link to="/ssc/1" />
        </Item>
        <Item>
          02: Container and presentational component <Link to="/ssc/2" />
        </Item>
        <Item>
          03: Container and presentational component <Link to="/ssc/3" />
        </Item>
        <Item>
          PCC exercise <Link to="/ssc/exercise" />
        </Item>
      </SubMenu>
      <SubMenu icon={<DeploymentUnitOutlined />} title="HoC">
        <Item>
          01: Starting Point <Link to="/hoc/1" />
        </Item>
        <Item>
          02: withData HoC <Link to="/hoc/2" />
        </Item>
        <Item>
          03: Configurable withData HoC <Link to="/hoc/3" />
        </Item>
        <Item>
          04: HοC composition <Link to="/hoc/4" />
        </Item>
        <Item>
          HoC exercise <Link to="/hoc/exercise" />
        </Item>
      </SubMenu>
    </Menu>
  </Sider>
);

export default Sidebar;
