import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomePage from '@/pages/welcome';
import LoginPage from '@/pages/login';
import SignupPage from '@/pages/signup';

const Router = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomePage} />

      <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginPage} />

      <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignupPage} />
    </Stack.Navigator>
  );
};

export default Router;
