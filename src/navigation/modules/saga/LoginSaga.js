import { Alert, AsyncStorage } from 'react-native';
import _ from 'lodash';
import { put, takeEvery } from 'redux-saga/effects';
import * as ActionTypes from '../actions/types';
import ames247 from '../../utils/axios';
import NavigationService from '../../../../NavigationService';

const TITLE_MESSAGE = 'AMES ENGLISH';

function* checkLogin(action) {
  console.log("TCL: function*checkLogin -> action", action)
  const putModel = { type: '' };
  const alertModal = { title: 'AMES ENGLISH', message: '' };
  try {
    if (action.username.length === 0) {
      Alert.alert(TITLE_MESSAGE, 'Tên đăng nhập không được để trống');
      yield put({ type: ActionTypes.AUTH_LOGIN_FAIL });
      return;
    }
    if (action.password.length === 0) {
      Alert.alert(TITLE_MESSAGE, 'Mật khẩu không được để trống');
      yield put({ type: ActionTypes.AUTH_LOGIN_FAIL });
      return;
    }

    const response = yield ames247.post('/login-ames-app', {
      UserName: action.username,
      Password: action.password,
    });
    console.log("TCL: function*checkLogin -> response", response)

    if (response.data.message === 'OK') {
      const { users } = response.data;
      users.loginMyAi = JSON.parse(users.loginMyAi);
      users.loginMyAmes = JSON.parse(users.loginMyAmes);
      const myAiResponse = _.cloneDeep(users.loginMyAi);
      const myAmesResponse = _.cloneDeep(users.loginMyAmes);
      if (myAiResponse.message === 'OK') {
        Alert.alert(TITLE_MESSAGE, 'Thông tin đăng nhập không chính xác');
        AsyncStorage.removeItem('loginUser');
        yield put({ type: ActionTypes.AUTH_LOGIN_FAIL });
        const { navigatorNamed } = NavigationService;
        const ref = NavigationService.getNavigator(navigatorNamed.MyNavigator);
        // navigationService.navigate("QuestionScreen", { selectedAssignment });
        ref._navigation.navigate('STACK');
        console.log("TCL: function*checkLogin -> NavigationService", NavigationService)
        return;
      }
    }
  } catch (error) {
    console.log("TCL: function*checkLogin -> error", error);
  }
}

export default function* sagas() {
  yield takeEvery(ActionTypes.AUTH_LOGIN, checkLogin);
}
