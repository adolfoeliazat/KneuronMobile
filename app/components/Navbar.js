import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
import { logoutUser } from '../actions/login';
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { logoutUser } = this.props;
    return (
      <View style={styles.container}>
        <Footer >
          <FooterTab>
            <Button onPress={Actions.home}>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button onPress={logoutUser}>
              <Icon active name="navigate" />
            </Button>
            <Button onPress={Actions.profile} >
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}
const styles = {
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
}

export default connect(null, { logoutUser })(NavBar);
