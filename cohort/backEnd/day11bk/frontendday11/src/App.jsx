import React from "react";
import { RouterProvider } from "react-router";
import Approutes from "./Approutes";
import "./style.scss";
import { AuthProvider } from "./features/auth/auth.context.jsx";
import { PostContextProvider } from "./features/post/post.context.jsx";

const App = () => {
  return (
    <AuthProvider>
      <PostContextProvider>
        <Approutes />
      </PostContextProvider>
    </AuthProvider>
  );
};

export default App;
