import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeUserPage from "@/pages/user/home";
import CompaniesPage from "@/pages/user/companies";

const Router = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="HomeUser"
                component={HomeUserPage}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="Companies"
                component={CompaniesPage}
            />

        </Stack.Navigator>
    )
}

export default Router;