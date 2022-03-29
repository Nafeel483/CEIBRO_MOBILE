// import { NavigationActions } from 'react-navigation';

// const config = {};
// export function setNavigator(nav) {
//   if (nav) {
//     config.navigator = nav;
//   }
// }
// export function navigate(routeName) {
//   // console.log("Yes", config.navigator)
//   if (config.navigator && routeName) {
//     let action = NavigationActions.navigate({ routeName });
//     config.navigator.dispatch(action);
//   }
// }
// export function navigateWithParams(routeName, params) {
//   if (config.navigator && routeName) {
//     let action = NavigationActions.navigate({ routeName, params });
//     config.navigator.dispatch(action);
//   }
// }
// export function goBack() {
//   if (config.navigator) {
//     let action = NavigationActions.back({});
//     config.navigator.dispatch(action);
//   }
// }

// import { NavigationActions } from 'react-navigation';
import { CommonActions } from '@react-navigation/native';


// import { DrawerActions } from 'react-navigation-drawer';

let _navigator;
const config = {};
export function setNavigator(nav) {
  if (nav) {
    config.navigator = nav;
  }
}

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    navigation.dispatch(
        CommonActions.navigate({
            routeName,
            params,
        })
    );
}

function back() {
    navigation.dispatch(CommonActions.back());
}

// function openDrawer() {
//     _navigator.dispatch(
//         DrawerActions.toggleDrawer()
//     )
// }

// add other navigation functions that you need and export them

export {
    navigate,
    back,
    setTopLevelNavigator,
};
