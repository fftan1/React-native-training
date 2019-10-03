import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
// Components


// Stylesheets
import styles from './styles';

// Variables

const info = [
  { username: '123', password: '123' },
  { username: 'abc', password: 'abc' },
  { username: 'xyz', password: 'xyz' },
]

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.refPassword = React.createRef();
    this.state = {
      username: '',
      password: '',
    }
  }

  onSubmitUsername = () => {
    Keyboard.dismiss;
    this.refPassword.current.focus();
  }

  onSubmitLogin = () => {
    const { username, password } = this.state;
    if (info.findIndex(x => x.username === username) > -1 && info.findIndex(x => x.password === password) > -1) {

      this.props.navigation.navigate('tab');
    } else {
      alert('sai');
    }
  }

  // onLogin = () => {
  //   const { }
  // }

  render = () => {

    return (

      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>

            <View style={styles.containerLogo}>
              <Text style={styles.textLogo}>LOGIN</Text>
            </View>

            <View style={styles.containerForm}>
              <TextInput
                style={styles.input}
                placeholder="Enter username"
                placeholderTextColor="#bbbbbb"
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(text) => this.setState({ username: text })}
                value={this.state.username}
                onSubmitEditing={() => this.onSubmitUsername()}
              />
              <TextInput
                style={styles.input}
                ref={this.refPassword}
                placeholder="Enter password"
                placeholderTextColor="#bbbbbb"
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(text) => this.setState({ password: text })}
                value={this.state.password}
                onSubmitEditing={() => this.onSubmitLogin()}
              />
              <TouchableOpacity onPress={() => this.onSubmitLogin()} style={styles.btnLogin}>
                <Text style={styles.txtLogin}>Login</Text>
              </TouchableOpacity>
            </View>



          </View >

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

// const mapStateToProps = (dispatch) => ({
//   loading: state.authReducer.loginReducer.loading,
// })