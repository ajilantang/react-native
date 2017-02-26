import React, { Component } from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';
import styles from './style';
import profile from './profile';


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.profile}
            source={require('./img/ajilantang.jpg')}
        />
        <Text style={styles.batch}>
          {profile.batch}
        </Text>
        <Text style={styles.name}>
          {profile.name}
        </Text>
      </View>
    );
  }
}


export default App;
