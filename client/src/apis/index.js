export const login = async (values) => {
  const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  return await loggedInResponse.json();
};

export const register = async (values) => {
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
  return await savedUserResponse.json();
};

export const getPosts = async (token) => {
  const response = await fetch("http://localhost:3001/posts", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return await response.json();
};

export const getStories = async (token) => {
  const response = await fetch("http://localhost:3001/posts/stories", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return await response.json();
};

export const createPost = async (token, formData) => {
  const response = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  return await response.json();
};

export const postComment = async (token, postId, reqData) => {
  const response = await fetch(`http://localhost:3001/posts/${postId}/comment`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqData),
  });
  return await response.json();
};

export const createVideoPost = async (token, formData) => {
  const response = await fetch(`http://localhost:3001/posts/video`, {
    method: "POST",
    headers: {Authorization: `Bearer ${token}`},
    body: formData,
  });
  return await response.json();
};