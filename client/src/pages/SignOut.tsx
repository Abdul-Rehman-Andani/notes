import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  const signout = async () => {
    const res = await axios.get(`http://localhost:9000/auth/signout`, {
      withCredentials: true,
    });
  
  
    if(res.data.message == "user signout"){
        navigate("/signin");
    }
  };

  useEffect(() => {
    if (!document.cookie.includes("token")) {
      navigate("/signin");
    } else {
      signout();
    }
  }, []);
  return <></>;
};

export default SignOut;
