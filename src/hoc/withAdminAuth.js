import { useAdminAuth } from "./../cusptomHooks";

const WithAdminAuth = (props) => useAdminAuth(props) && props.children;

export default WithAdminAuth;
