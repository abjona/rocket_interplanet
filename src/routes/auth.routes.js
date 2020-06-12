import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomePage from "@/pages/welcome";
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import HomeAdminPage from "@/pages/admin/home";
import RocketAdminPage from "@/pages/admin/rockets";
import HomeUserPage from "@/pages/user/home";
import CompaniesPage from "@/pages/user/companies";

const Router = () => {

    const Stack = createStackNavigator();
    
    return (
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

                <Stack.Screen 
                    options={{ headerShown: false }} 
                    name="SignUp" 
                    component={SignupPage} 
                />
    
            </Stack.Navigator>
    )
}

export default Router;