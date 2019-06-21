import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Segment, Header, Button, Icon, Image, } from 'semantic-ui-react';


class Profile extends React.Component {
  state = { profiles: {}, friends: [], activeItem: 'dob' };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/profiles/${id}`)
      .then(res => this.setState({ profiles: res.data, }))
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  render() {
    const { profiles: { name, dob, avatar }, } = this.state;
    return (
      <div>
        <br />
        <Link to="/my_profiles">
          <Button
            basic
            color='blue'
            animated
          >
            <Button.Content visible>
              Back to My profiless
        </Button.Content>
            <Button.Content hidden>
              <Icon name='left arrow' />
            </Button.Content>
          </Button>
        </Link>
        <br />
        <Image
          size='small-medium'
          circular
          centered
          src={avatar} />
        <br />
        <div>

          <Segment basic textAlign='center'>
            <Header as='h3'>
              {name}
            </Header>
          </Segment>

          <Segment basic textAlign='center'>
            Date of birth: {dob}
          </Segment>
        </div>
      </div>
    )
  }
}

export default Profile;