import './LoginForm.css';
import {useState} from "react";
import {Link} from 'react-router-dom';

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
                    <div className="field space mb-sm-5">
                        <span className="fa fa-lock"></span>
                        <input type={showPass ? 'text' : 'password'} className="pass-key" required
                               placeholder="Password"/>
                        <span className="show"
                              onClick={() => setShowPass(!showPass)}>{showPass ? 'Hide' : 'Show'}</span>
                    </div>

                    <div>
                        <Link to='/home' className='btn btn-primary btn-lg w-100'>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
