import './LoginForm.css';

import {useState} from "react";

export default function LoginForm() {

    const [showPass, setShowPass] = useState(false);

    return (
        <div className="bg-img">
            <div className="content">
                <header>
                    <h2>Haufe Group</h2>
                    <hr/>
                    <h3>Login form</h3>

                </header>
                <form action="#" className='mb-sm-3'>
                    <div className="field">
                        <span className="fa fa-user"></span>
                        <input type="text" required placeholder="Email"/>
                    </div>
                    <div className="field space mb-sm-3">
                        <span className="fa fa-lock"></span>
                        <input type={showPass ? 'text' : 'password'} className="pass-key" required
                               placeholder="Password"/>
                        <span className="show"
                              onClick={() => setShowPass(!showPass)}>{showPass ? 'Hide' : 'Show'}</span>
                    </div>

                    <div>
                        <input type="submit" className='btn btn-primary btn-lg w-100' value="LOGIN"/>
                    </div>
                </form>
                <hr/>
                <div className="signup mb-sm-1">Don't have account?
                    <a href="#">Signup Now</a>
                </div>
                <div className="text-center">
                    <a href="#" className='link-light'>Forgot Password?</a>
                </div>
            </div>
        </div>
    );
}
