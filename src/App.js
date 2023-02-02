import React from "react";
import './App.css'
import UseStateHook from "./React-Hooks/useStateHook/UseStateHook";
import UseEffectHook from "./React-Hooks/useEffectHook/useEffectHook";
import UseContextHook from "./React-Hooks/useContextHook/useContextHook";
import UseMemoHook from "./React-Hooks/useMemoHook/useMemoHook";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseCallbackHook from './React-Hooks/useCallbackHook/useCallbackHook';
import Main from './React-Hooks/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/useStateHook" element={<UseStateHook />} />
        <Route path="/useEffectHook" element={<UseEffectHook />} />
        <Route path="/useContextHook" element={<UseContextHook />} />
        <Route path="/useMemoHook" element={<UseMemoHook />} />
        <Route path="/useCallbackHook" element={<UseCallbackHook />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
