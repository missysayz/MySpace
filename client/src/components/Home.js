import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header, Image, Card, Button, Icon } from "semantic-ui-react";

class Home extends React.Component {
  state = { profiles: [], };

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
          <Header as='h3' textAlign='center'>
            My Space With React Context User Auth
          </Header>
          <br />
          <Card>
            <Image src={profile.avatar} />
            <Card.Content>
              <Card.Header>{profile.name}</Card.Header>
              <Card.Meta>{profile.dob}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button
                color='red'
                icon
                basic
              // onClick={() => downVote(profile.id)}
              >
                <Icon name='thumbs down' />
              </Button>
              <Button
                color='green'
                icon
                basic
              // onClick={() => upVote(profile.id)}
              >
                <Icon name='thumbs up' />
              </Button>
            </Card.Content>
          </Card>
          <Link to='/my-profiles'>
            <Button color='blue'>My Profiles</Button>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Header textAlign='center'>No More Profiles</Header>
          <Link to='/ProfileForm'>
            <Button color='blue'>
              Add New Profile
          </Button>
          </Link>
        </div>
      )
    }
  }
}

export default Home;
