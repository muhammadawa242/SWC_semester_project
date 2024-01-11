import React from "react";
import register_hook from "../hooks/register.jsx";

import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import "./style.css";
import SideImg from "../assets/card2.jpg";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log( await register_hook(data));
  };

  return (
    //id="signin" removed
    <div className="register-section">
      <div className="Auth">
        <img src={SideImg} alt="" />

        <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h4">Sign Up</Typography>
          <p>Explore new Features !</p>

          <div className="formgroup">
            <TextField
              {...register("name", {
                required: "Name Field Required",
                maxLength: { value: 15, message: "Maximum 15 Characters" },
              })}
              type="text"
              label="Name"
              color="success"
              variant="outlined"
            />
            <Typography color="error" variant="span">
              {errors?.name && errors.name.message}
            </Typography>

            <TextField
              {...register("email", { required: "Email Field Required" })}
              type="email"
              label="Email"
              color="success"
              variant="outlined"
            />
            <Typography color="error" variant="span">
              {errors?.email && errors.email.message}
            </Typography>

            <TextField
              {...register("psw", {
                required: "Password Field Required",
                maxLength: { value: 15, message: "Maximum 15 Characters" },
                minLength: { value: 4, message: "Minimum 4 Characters" },
              })}
              type="password"
              label="Password"
              color="success"
              variant="outlined"
            />
            <Typography color="error" variant="span">
              {errors?.psw && errors.psw.message}
            </Typography>

            <FormControlLabel
              control={<Checkbox color="success" />}
              label="Remember Me"
            />
            <Button type="submit" variant="contained">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
