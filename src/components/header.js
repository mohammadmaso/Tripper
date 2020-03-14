import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Logo from "../assets/img/logo.png";
import PropTypes from "prop-types";
import faker from "faker";

import Tripkinds from "./tripkinds";
import Triplist from "./triplist";
import Trip from "./trip";

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Icon,
  MenuItem,
  Search,
  Input,
  Sidebar,
  Responsive
} from "semantic-ui-react";
import triplist from "./triplist";

const trigger = (
  <span>
    <Image avatar src={faker.internet.avatar()} /> {faker.name.findName()}
  </span>
);

const options = [
  { key: "user", text: "Account", icon: "user" },
  { key: "settings", text: "Settings", icon: "settings" },
  { key: "plan", text: "Plan a trip", icon: "add" },
  { key: "upload", text: "Upload a trip", icon: "upload" },
  { key: "sign-out", text: "Sign Out", icon: "sign out" }
];

class HeaderMenu extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Responsive as={Segment} minWidth={1068}>
            <Menu fixed="top">
              <Container>
                <Menu.Item as="a" onClick={this.props.handleMenuClick}>
                  <Icon link name="bars" size="large" />
                </Menu.Item>
                <Menu.Item header>
                  <Image
                    size="mini"
                    src={Logo}
                    style={{ marginRight: "1.5em" }}
                  />
                  Tripper
                </Menu.Item>
                <Menu.Item as={Link} to="/">
                  <Icon name="home" />
                  خانه
                </Menu.Item>
                <Menu.Item as={Link} to="/tripkinds">
                  <Icon name="road" />
                  سفرها
                </Menu.Item>
                <Menu.Item as={Link} to="/trip">
                  <Icon name="map marker alternate" />
                  Places
                </Menu.Item>
                <Menu.Item as={Link} to="/triplist">
                  <Icon name="map signs" />
                  Suggests
                </Menu.Item>
                <Menu.Item as="a">
                  <Icon name="wikipedia w" />
                  Wiki
                </Menu.Item>

                <Menu.Item>
                  <Input icon placeholder="Search...">
                    <input />
                    <Icon name="search" />
                  </Input>
                </Menu.Item>

                <MenuItem position="right">
                  <Dropdown
                    trigger={trigger}
                    options={options}
                    pointing="top right"
                    icon="caret down"
                  />
                </MenuItem>
              </Container>
            </Menu>
          </Responsive>
          <Responsive as={Segment} maxWidth={1068}>
            <Menu fixed="top">
              <Container>
                <Menu.Item as="a" onClick={this.props.handleMenuClick}>
                  <Icon link name="bars" size="large" />
                </Menu.Item>
                <Menu.Item header>
                  <Image
                    size="mini"
                    src={Logo}
                    style={{ marginRight: "1.5em" }}
                  />
                  Tripper
                </Menu.Item>

                <MenuItem position="right">
                  <Dropdown
                    trigger={trigger}
                    options={options}
                    pointing="top right"
                    icon="caret down"
                  />
                </MenuItem>
              </Container>
            </Menu>
          </Responsive>
          <Switch>
            <Route path="/tripkinds">
              <Tripkinds />
            </Route>
            <Route path="/triplist">
              <Triplist />
            </Route>
            <Route path="/trip">
              <Trip/>
            </Route>
            <Route path="/">
              <Segment></Segment>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default HeaderMenu;
