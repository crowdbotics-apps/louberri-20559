import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps105478Navigator from '../features/Maps105478/navigator';
import UserProfile105474Navigator from '../features/UserProfile105474/navigator';
import BlankScreen0105451Navigator from '../features/BlankScreen0105451/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps105478: { screen: Maps105478Navigator },
UserProfile105474: { screen: UserProfile105474Navigator },
BlankScreen0105451: { screen: BlankScreen0105451Navigator },

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
