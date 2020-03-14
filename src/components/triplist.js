import React, { Component, createRef } from "react";
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
  Card,
  Rail,
  Sticky,
  Placeholder,
  Ref,
  Item,
  Checkbox
} from "semantic-ui-react";

const options = [
  {
    key: "angular",
    text: "Angular",
    value: "angular",
    image: { avatar: true, src: faker.internet.avatar() }
  },
  { key: "css", text: "CSS", value: "css", image: faker.internet.avatar() },
  {
    key: "design",
    text: "Graphic Design",
    value: "design",
    image: faker.internet.avatar()
  },
  {
    key: "ember",
    text: "Ember",
    value: "ember",
    image: faker.internet.avatar()
  },
  { key: "html", text: "HTML", value: "html", image: faker.internet.avatar() },
  {
    key: "ia",
    text: "Information Architecture",
    value: "ia",
    image: faker.internet.avatar()
  },
  {
    key: "javascript",
    text: "Javascript",
    value: "javascript",
    image: faker.internet.avatar()
  },
  {
    key: "mech",
    text: "Mechanical Engineering",
    value: "mech",
    image: faker.internet.avatar()
  },
  { key: "meteor", text: "Meteor", value: "meteor", icon: "user" },
  { key: "node", text: "NodeJS", value: "node", icon: "user" },
  { key: "plumbing", text: "Plumbing", value: "plumbing", icon: "user" },
  { key: "python", text: "Python", value: "python", icon: "user" },
  { key: "rails", text: "Rails", value: "rails", icon: "user" },
  { key: "react", text: "React", value: "react", icon: "user" },
  { key: "repair", text: "Kitchen Repair", value: "repair", icon: "user" },
  { key: "ruby", text: "Ruby", value: "ruby", icon: "user" },
  { key: "ui", text: "UI Design", value: "ui", icon: "user" },
  { key: "ux", text: "User Experience", value: "ux", icon: "user" }
];

export default class triplist extends Component {
  contextRef = createRef();
  render() {
    return (
      <>
        <Divider horizontal style={{ marginTop: "6em" }}>
          <Header as="h3">
            <Icon name="eye" />
            Trips
          </Header>
        </Divider>
        <Grid stackable columns={2} centered>
          <Grid.Column width={4}>
            <Segment>
              <Divider horizontal>
                <Header as="h5">
                  <Icon name="filter" />
                  Filter Options
                </Header>
              </Divider>

              <Dropdown
                placeholder="Activities"
                fluid
                multiple
                selection
                options={options}
              />
              <Dropdown
                placeholder="Travel type"
                fluid
                multiple
                selection
                options={options}
                style={{ marginTop: "1em" }}
              />
              <Checkbox toggle style={{ marginTop: "1em" }}/>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment>
              <Item.Group divided>
                <Item>
                  <Item.Image
                    size="tiny"
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                  />

                  <Item.Content>
                    <Item.Header as="a">Header</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image
                    size="tiny"
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                  />

                  <Item.Content>
                    <Item.Header as="a">Header</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image
                    size="tiny"
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                  />

                  <Item.Content>
                    <Item.Header as="a">Header</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image
                    size="tiny"
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                  />

                  <Item.Content>
                    <Item.Header as="a">Header</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image
                    size="tiny"
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                  />

                  <Item.Content>
                    <Item.Header as="a">Header</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
