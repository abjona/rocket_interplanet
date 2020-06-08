import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "@/pages/welcome";



const Router = () => {

    const Stack = createStackNavigator();
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;