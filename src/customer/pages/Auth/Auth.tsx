import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import { Button } from "@mui/material";

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex justify-center h-[90vh] items-center ">
      <div className="max-w-md h-[85vh] rounded-md shadow-lg">
        <img
          className="w-full rounded-t-md "
          src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="mt-8 px-10">
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <div className="flex items-center gap-1 justify-center mt-5">
            <p>{isLogin && "Don't"} have Account</p>
            <Button
              size="small"
              onClick={() => setIsLogin(!isLogin)}
              variant="text"
              color="primary"
            >
              {isLogin ? "Create Account" : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
