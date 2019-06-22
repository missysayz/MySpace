import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header, Image, Card, Button, Icon, Container } from "semantic-ui-react";

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

  follow = (id) => {
    const { profiles, } = this.state;
    axios.put(`/api/profiles/${id}`)
      .then(() => this.setState({ profiles: profiles.filter(p => p.id !== id) }));

  }

  unfollow = (id) => {
    const { profiles, } = this.state;
    this.setState({ profiles: profiles.filter(p => p.id !== id) })
  }



  // renderProfiles = () => {
  //   return (
  //     this.state.profiles.map(profile => <li>{profile.name}</li>)
  //   )
  // }

  render() {
    const profile = this.sample();
    if (profile) {
      return (
        <Container>
          <br />
          <Header as='h3' textAlign='center'>
            My Space Profiles with React Context User Auth
          </Header>
          <br />
          <Card
            centered
            key={profile.id}>
            <Image src={profile.avatar} />
            <Card.Content>
              <Card.Header>
                {profile.name}
              </Card.Header>
              <Card.Meta>
                {profile.dob}
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button color='green' icon animated floated='left' basic
                onClick={() => this.follow(profile.id)}>
                <Button.Content visible>Follow</Button.Content>
                <Button.Content hidden>
                  <Icon name='thumbs up' />
                </Button.Content>
              </Button>
              <Button color="red" icon floated='right' animated basic
                onClick={() => this.unfollow(profile.id)}>
                <Button.Content visible textAlign='center'>Skip</Button.Content>
                <Button.Content hidden>
                  <Icon name="thumbs down" />
                </Button.Content>
              </Button>
            </Card.Content>
          </Card>
          <br />
          <br />
          <br />
          <Link to='/myProfiles'>
            <Button color='green'>My Profiles</Button>
          </Link>
        </Container>
      )
    } else {
      return (
        <div>
          <Header textAlign='center'>You have have 0 Profiles</Header>
          <Link to='/MyProfileForm'>
            <Button color='green'>
              Add New Profile
          </Button>
          </Link>
        </div>
      )
    }
  }
}

export default Home;
