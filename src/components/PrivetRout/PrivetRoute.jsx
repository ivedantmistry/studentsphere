import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {userC} = useContext(AuthContext);

    if (userC) {
        return children;
    }

    return (
        <Navigate to="/login/login" />
    );
};

export default PrivetRoute;