import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className="flex justify-center items-center">
            <span className="loading loading-ring loading-lg inline-block"></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='./login' state={{from: location}} replace></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;