import React, { useState, useEffect } from "react";
import { AuthContainer, Input, SubmitButton } from "../components/component";
import { MdEmail } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Data {
  email : string,
  password : string
}

const SignIn = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Data>({
    email: "",
    password: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:9000/auth/signin`, data, {
      withCredentials: true,
    });
    if (res.data.message == "user login") {
      navigate("/");
    }
  };

  useEffect(() => {
    if (document.cookie.includes("token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <AuthContainer>
        <h1 className="text-3xl">Sign in</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            icon={<MdEmail />}
            handleInput={handleInput}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            icon={<IoLockClosed />}
            handleInput={handleInput}
          />
          <SubmitButton value="Sign in" />
          <p className="mt-5 text-center">
            <Link to="/signup">Don't have an account ? Sign up</Link>
          </p>
        </form>
      </AuthContainer>
    </>
  );
};

export default SignIn;
