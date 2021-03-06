import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen50105504Navigator from '../features/BlankScreen50105504/navigator';
import Maps105483Navigator from '../features/Maps105483/navigator';
import Add-Item105482Navigator from '../features/Add-Item105482/navigator';
import Maps105478Navigator from '../features/Maps105478/navigator';
import UserProfile105474Navigator from '../features/UserProfile105474/navigator';
import BlankScreen0105451Navigator from '../features/BlankScreen0105451/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen50105504: { screen: BlankScreen50105504Navigator },
Maps105483: { screen: Maps105483Navigator },
Add-Item105482: { screen: Add-Item105482Navigator },
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
