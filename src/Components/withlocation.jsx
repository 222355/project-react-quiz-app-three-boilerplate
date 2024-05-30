import { useLocation } from "react-router-dom";

function withlocation(Component) {
  return (props) => {
    const location = useLocation();
    return <Component {...props} location={location} />;
  };
}

export default withlocation;
