import { useState } from "react";

export default function useToken() {
  const getToken = (token) => {
    return sessionStorage.getItem("token");
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", userToken);
    setToken(userToken);
  };

  const deleteToken = () => {
    sessionStorage.setItem("token", null);
    setToken(null);
  };

  return {
    setToken: saveToken,
    unsetToken: deleteToken,
    token,
  };
}
