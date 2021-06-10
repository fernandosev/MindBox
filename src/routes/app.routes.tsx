import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '~/screen/Home';
import Meeting from '~/screen/Meeting';
import Login from '~/screen/Login';
import Register from '~/screen/Register';
import ForgotPassword from '~/screen/ForgotPassword';
import RoomDetails from '~/screen/RoomDetails';
import { useAppSelector } from '~/store/hooks';

import DrawerComponent from '~/components/Drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AuthScreens() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

function DrawerScreens() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => (
        <DrawerComponent
          activeItemIndex={props.state.index}
          navigation={props.navigation}
        />
      )}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Meeting" component={Meeting} />
      <Stack.Screen name="RoomDetails" component={RoomDetails} />
    </Drawer.Navigator>
  );
}

const AppRoutes: React.FC = () => {
  const token = useAppSelector(store => store.login.token);

  if (!token) return <AuthScreens />;
  else return <DrawerScreens />;
};

export default AppRoutes;
