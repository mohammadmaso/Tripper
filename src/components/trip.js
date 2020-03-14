import React, { Component } from "react";
import TripMap from "./tripMap";
//image
import hikingIcon from "../assets/img/icon/hiking.png";

import {
  Label,
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
  Card,
  Rail,
  Sticky,
  Placeholder,
  Ref,
  Item,
  Checkbox,
  Message,
  GridRow
} from "semantic-ui-react";

export default class trip extends Component {
  render() {
    return (
      <>
        <Divider horizontal style={{ marginTop: "6em" }}>
          <Header as="h3">
            <Icon name="eye" />
            Trip Details
          </Header>
        </Divider>

        <Grid centered columns={1}>
          <Grid.Column tablet={10} computer={10} mobile={16}>
            <TripMap/>
            <Header
              as="h2"
              subheader="Date : 2018/7/4  | 10 days"
              content="Hormuz icland walking"
              dividing
            />
            <Message>
              <Message.Header style={{ marginBottom: "0.7em" }}>
                What kinds of activity they use?
              </Message.Header>
              <Grid divided padded textAlign="left" columns="10">
                <Grid.Row>
                  <Grid.Column textAlign="center">
                    <Image size="large" src={hikingIcon} /> 24 km
                  </Grid.Column>
                  <Grid.Column>
                    <Image size="large" src={hikingIcon} /> 26 km
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Message>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              size="small"
              floated="left"
            />
            <p>
              Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex
              eam alia facete scriptorem, est autem aliquip detraxit at. Usu
              ocurreret referrentur at, cu epicurei appellantur vix. Cum ea
              laoreet recteque electram, eos choro alterum definiebas in. Vim
              dolorum definiebas an. Mei ex natum rebum iisque.
            </p>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/image.png"
              size="small"
              floated="right"
            />
            <p>
              Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
              definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne,
              his te phaedrum referrentur consectetuer. Id vix fabulas oporteat,
              ei quo vide phaedrum, vim vivendum maiestatis in.
            </p>
            <p>
              Eu quo homero blandit intellegebat. Incorrupte consequuntur mei
              id. Mei ut facer dolores adolescens, no illum aperiri quo, usu
              odio brute at. Qui te porro electram, ea dico facete utroque quo.
              Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur
              at. Quodsi convenire mnesarchum eu per, quas minimum postulant per
              id.
            </p>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
