import { useAuth } from "./../cusptomHooks";

const WithAuth = (props) => useAuth(props) && props.children;
export default WithAuth;
