import React from "react";
import LoginForm from "./components/login/LoginForm";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./components/errors/NotFound";
import Home from "./components/home/Home";
import UserList from "./components/users/UserList";
import UserForm from "./components/users/UserForm";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Navigate replace to={'/login'}/>}/>
                <Route exact path='/login' element={<LoginForm/>}/>
                <Route exact path='/home' element={<Home/>}/>
                <Route exact path='/user/add' element={<UserForm/>}/>
                <Route exact path='/user/list' element={<UserList/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
