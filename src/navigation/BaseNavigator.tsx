import React from "react";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { useSelector } from "react-redux";

const BaseNavigator = () => {
    const loading = false;
    const authData = useSelector(state => state.auth.data);

    const authenticated = authData !== undefined && Object.keys(authData).length > 0;

    if (loading) return null;

    if(!authenticated) return <AuthNavigator />;
    return <AppNavigator />;
};

export default BaseNavigator;
