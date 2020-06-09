import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomePage from "@/pages/welcome";
import LoginPage from "@/pages/login";



const Router = () => {

    const Stack = createStackNavigator();
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    options={{ headerShown: false }} 
                    name="Welcome" 
                    component={WelcomePage} 
                />

                <Stack.Screen 
                    options={{ headerShown: false }} 
                    name="Login" 
                    component={LoginPage} 
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;