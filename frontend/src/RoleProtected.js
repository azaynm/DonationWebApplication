import { Navigate } from "react-router-dom";
const RoleProtected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return children;
};
export default RoleProtected;