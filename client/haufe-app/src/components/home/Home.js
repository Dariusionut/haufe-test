import React from "react";
import './Home.scss'
import Header from "../header/Header";

export default function Home() {

    return (
        <div>
            <Header/>
            <div className='container'>
                <div className='alert alert-primary text-center'>
                    <h1>Home page</h1>
                </div>
            </div>
        </div>
    );
}