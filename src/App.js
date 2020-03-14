import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderMenu from "./components/header";
import MainMap from "./components/mainmap";
import "./App.css";
import Logo from "./assets/img/logo.png";

import Tripkinds from "./components/tripkinds";

import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import Triplist from "./components/triplist";
import Trip from "./components/trip";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.setState(state => ({
      visible: !state.visible
    }));
    console.log(this.state.visible);
  }

  render() {
    return (
      <>
        <Router>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              vertical
              width="thin"
              visible={this.state.visible}
              animation="push"
              width="thin"
            >
              <Menu.Item as={Link} to="/">
                <Icon name="home" />
                Home
              </Menu.Item>
              <Menu.Item as={Link} to="/tripkinds">
                <Icon name="road" />
                Trips
              </Menu.Item>
              <Menu.Item as={Link} to="/places">
                <Icon name="map marker alternate" />
                Places
              </Menu.Item>
              <Menu.Item as={Link} to="/suggests">
                <Icon name="map signs" />
                Suggests
              </Menu.Item>
              <Menu.Item as={Link} to="/wiki">
                <Icon name="wikipedia w" />
                Wiki
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
              <Segment basic>
                <HeaderMenu handleMenuClick={this.handleMenuClick} />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Router>
      </>
    );
  }
}
export default App;
