import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList167677Navigator from '../features/NotificationList167677/navigator';
import Settings167676Navigator from '../features/Settings167676/navigator';
import Settings167668Navigator from '../features/Settings167668/navigator';
import UserProfile167666Navigator from '../features/UserProfile167666/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList167677: { screen: NotificationList167677Navigator },
Settings167676: { screen: Settings167676Navigator },
Settings167668: { screen: Settings167668Navigator },
UserProfile167666: { screen: UserProfile167666Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
