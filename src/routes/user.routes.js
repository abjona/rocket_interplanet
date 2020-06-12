import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeUserPage from "@/pages/user/home";
import CompaniesPage from "@/pages/user/companies";
import RocketsPage from "@/pages/user/rockets";

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

            <Stack.Screen
                options={{ headerShown: false }}
                name="Rockets"
                component={RocketsPage}
            />

        </Stack.Navigator>
    )
}

export default Router;