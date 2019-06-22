import React from "react";
import axios from "axios";
import { Link, } from 'react-router-dom';
import { Card, Divider, Image, Header, Button, Icon } from "semantic-ui-react";

class MyProfiles extends React.Component {
  state = { profiles: [] };

  componentDidMount() {
    axios
      .get("/api/my_profiles")
      .then(res => this.setState({ profiles: res.data }));
  }

  unfollow = (id) => {
    const { profiles, } = this.state;
    this.setState({ profiles: profiles.filter(p => p.id !== id) })
  }


  render() {
    const { profiles, id } = this.state;

    return (
      <div>
        <br />
        <Header as='h1' textAlign='center'>Your Profiles</Header>
        <br />
        <Card.Group itemsPerRow={4}>
          {profiles.map(profile =>
            <Card key={profile.id} {...id}>
              <Image src={profile.avatar} />
              <Card.Content>
                <Card.Header floated='left' >
                  {profile.name}
                </Card.Header>
                <Divider />
                <Button color="red" icon animated floated='right' basic onClick={() => this.unfollow(profile.id)}>
                  <Button.Content visible>
                    Unfollow
                </Button.Content>
                  <Button.Content hidden>
                    <Icon name="thumbs down" />
                  </Button.Content>
                </Button>
                <Link to={`/profiles/${profile.id}`}>
                  <Button color="blue" icon animated floated='left' basic>
                    <Button.Content visible>
                      View
                </Button.Content>
                    <Button.Content hidden>
                      <Icon name="eye" />
                    </Button.Content>
                  </Button>
                </Link>
              </Card.Content>
            </Card>
          )}
        </Card.Group>
      </div>
    )
  }
}



export default MyProfiles;
