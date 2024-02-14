import { useState } from "react";
import HomePage from "./pages/homepage/HomePage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import SavedPost from "./pages/savedpost/SavedPost";
import CreatePost from "./pages/createpost/CreatePost";
import DeletePost from "./pages/deletepost/DeletePost";
import UpdatePost from "./pages/updatepost/UpdatePost";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/createpost" element={<CreatePost/>} />
      <Route path="/savedpost" element={<SavedPost/>} />
      <Route path="/deletepost" element={<DeletePost/>} />
      <Route path="/edit" element={<UpdatePost/>} />


    </Routes>
  );
}

export default App;
