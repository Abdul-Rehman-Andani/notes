import React, { useEffect, useState } from "react";
import { AuthContainer, Input, SubmitButton } from "../components/component";
import { MdEmail } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Data {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Data>({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:9000/auth/signup`, data, {
      withCredentials: true,
    });
    if (res.data.message == "user created") {
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
        <h1 className="text-3xl">Sign up</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Username"
            icon={<FaUser />}
            handleInput={handleInput}
          />
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
          <SubmitButton value="Sign up" />
          <p className="mt-5 text-center">
            <Link to="/signin">Already have an account ? Sign in</Link>
          </p>
        </form>
      </AuthContainer>
    </>
  );
};

export default SignUp;
