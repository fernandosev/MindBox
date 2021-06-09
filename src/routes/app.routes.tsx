import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '~/screen/Home';
import Login from '~/screen/Login';

const Stack = createStackNavigator();

function StackScreens() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="screen">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const AppRoutes: React.FC = () => {
  return <StackScreens />;
};

export default AppRoutes;
