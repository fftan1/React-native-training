import { NavigationActions } from 'react-navigation';

let _navigator;

const navigateAction = NavigationActions.navigate({
  routeName: 'Test 1',
  params: {},
  action: NavigationActions.navigate({routeName: 'SubTest1'}),
});

this.props.navigation.dispatch(navigateAction);

function setTopLevelNavigator(navigatorRef){
  _navigator = navigatorRef;
}

function navigate(routeName, params){
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

export default {
  navigate,
  setTopLevelNavigator,
}