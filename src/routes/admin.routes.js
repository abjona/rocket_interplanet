import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeAdminPage from '@/pages/admin/home';
import RocketAdminPage from '@/pages/admin/rockets';

const Router = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="HomeAdmin" component={HomeAdminPage} />

      <Stack.Screen
        options={{ headerShown: false }}
        name="RocketAdmin"
        component={RocketAdminPage}
      />
    </Stack.Navigator>
  );
};

export default Router;
