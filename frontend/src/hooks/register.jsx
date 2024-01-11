import { useState } from "react";

// const [pageType, setPageType] = useState("register");

const register_hook = async (values) => {
    // this allows us to send form info with image
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }

    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();

    // if (savedUser) {
    //   setPageType("login");
    // }
    return savedUser;
  };

export default register_hook;