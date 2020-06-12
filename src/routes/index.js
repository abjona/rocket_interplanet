import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import { useAuth } from "@/contexts/auth";

import AuthRoutes from "./auth.routes";
import UserRoutes from "./user.routes";
import AdminRoutes from "./admin.routes";

const Routes = () => {
    const { signed, type, loading } = useAuth();

    if (loading) {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "#212244",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )
    }

    return !signed ? <AuthRoutes /> : type == 'admin' ? <AdminRoutes /> : <UserRoutes />
}

export default Routes;