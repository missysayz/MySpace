import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header, Image, Card, Button, Icon } from "semantic-ui-react";

class Home extends React.Component {
  state = { profiles: [] };

  componentDidMount() {
    axios
      .get("/api/profiles")
      .then(res => this.setState({ profiles: res.data }));
  }

  sample = () => {
    const { profiles } = this.state;

    if (profiles.length) {
      const index = Math.floor(Math.random() * profiles.length);
      return profiles[index];
    } else {
      return null;
    }
  };

  render() {
    const profile = this.sample();
    if (profile) {
      return (
        <div>
          <br />
          <Header as='h1'> My Space with React Context</Header>
          <br />
          <Card key={profile.id}>
            <Image src={profile.avatar} />
            <Card.Content>
              <Card.Header>{profile.name}</Card.Header>
              <Card.Description>{profile.dob}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button color='red' icon basic>
                <Icon name='thumbs down' />
              </Button>
              <Button color='green' icon basic>
                <Icon name='thumbs up' />
              </Button>
            </Card.Content>
          </Card>
          <Link to='/my_profiles'>
            <Button color='blue'>My profiles</Button>
          </Link>
        </div>
      );
    } else {
      return <Header textAlign='center'>No More Profiles</Header>;
    }
  }
}

export default Home;
