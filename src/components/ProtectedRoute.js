import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute(props) {
    const user = useSelector(state => state.user);
    console.log(user)
   if(user.username)
    return props.children

    return <Navigate to={"/login"}/>
}

export default ProtectedRoute;