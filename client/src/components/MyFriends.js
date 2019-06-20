import React from "react";
import axios from "axios";
import { Card, Divider, Image } from "semantic-ui-react";

class MyFriends extends React.Component {
  state = { friends: [] };

  componentDidMount() {
    axios
      .get("/profiles/:profile_id/friends")
      .then(res => this.setState({ friends: res.data }));
  }

  render() {
    const { profiles } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        {profiles.map(profile => (
          <Card key={profile.id}>
            <Image src={profile.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>{profile.name}</Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    );
  }
}

export default MyFriends;
