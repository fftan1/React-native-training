import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

// Components
import Component1 from '../../components/component1';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Stylesheets
import styles from './styles';
import { HeaderBackButton } from 'react-navigation';

// Variables


export default class Screen1 extends React.Component {
  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: 'Screen 1',
  //     headerLeft: (
  //       <HeaderBackButton onPress={() => navigation.navigate('HOME_SC')}>
  //         <Icon name="keyboard-backspace" color="#000" />
  //       </HeaderBackButton>
  //     )
  //   }
  // }

  render = () => {
    return (
      <View style={styles.container}>
        <Text>Screen 1</Text>
      </View>
    );
  }
}
