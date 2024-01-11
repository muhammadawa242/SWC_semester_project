import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import "./Signin.css";
import SideImg from "../assets/card2.jpg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="register-section">
      <div className="Auth">
        <img id="Img" src={SideImg} alt="" />

        <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h4">Sign In</Typography>
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
              Sign In
            </Button>

            <div id="button2">
              <Button
                id="signup-button"
                component={Link}
                to="/register"
                variant="contained"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
