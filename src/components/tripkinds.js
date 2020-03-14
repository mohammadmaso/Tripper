import React, { Component } from "react";
//images
import adventure from "../assets/img/TripKinds/adventure.jpg";
import art from "../assets/img/TripKinds/art.jpg";
import cities from "../assets/img/TripKinds/cities.jpg";
import food from "../assets/img/TripKinds/food.jpg";
import hiking from "../assets/img/TripKinds/hiking.jpg";
import iceland from "../assets/img/TripKinds/iceland.jpg";
import road from "../assets/img/TripKinds/road.jpg";
import ruins from "../assets/img/TripKinds/ruins .jpg";
import wildlife from "../assets/img/TripKinds/wildlife.jpg";
import family from "../assets/img/TripKinds/family.jpg";
//--
import faker from "faker";

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
  Card
} from "semantic-ui-react";

const items = [
  {
    header: "Adventure",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
    href: "google.com",
    image: adventure
  },
  {
    header: "Wildlife & nature",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    href: "#card-example-link-card",
    image: wildlife
  },
  {
    header: "Cities",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    image: cities,
    href: "#"
  },
  {
    header: "Road Trip",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    href: "#card-example-link-card",
    image: road
  },
  {
    header: "Ruins & Temples",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
    href: "google.com",
    image: ruins
  },
  {
    header: "Hicking",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    href: "#card-example-link-card",
    image: hiking
  },
  {
    header: "Food & drink",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    image: food,
    href: "#"
  },
  {
    header: "Art & culture",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    href: "#card-example-link-card",
    image: art
  },
  {
    header: "Coasts & iclands",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
    href: "google.com",
    image: iceland
  },
  {
    header: "Family",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
    href: "#card-example-link-card",
    image: family
  }
];

export default class Tripkinds extends Component {
  render() {
    return (
      <>
        <Divider horizontal style={{ marginTop: "6em" }}>
          <Header as="h3">
            <Icon name="eye" />
            Trip Types
          </Header>
        </Divider>

        <Card.Group style={{ marginTop: "3em" }} centered items={items} />
      </>
    );
  }
}
