

import { Navigate, useLocation } from "react-router";
import useAdmin from "../hooks/useAdmin";
import useAuthContext from "../hooks/useAuthContext";
import { BallTriangle } from  'react-loader-spinner'


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuthContext()
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return  <div className="flex items-center justify-center h-screen">
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

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;