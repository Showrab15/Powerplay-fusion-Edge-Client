
import { Navigate, useLocation } from "react-router";
import { BallTriangle } from  'react-loader-spinner'
import useAuthContext from "../hooks/useAuthContext";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuthContext();
    const location = useLocation();

    if(loading){
        return <div className="flex items-center justify-center h-screen">
            <BallTriangle
       
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
            </div>

    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;