import './User.scss'
import {Component} from "react";
import axios from "axios";
import Header from "../header/Header";
import {Link} from "react-router-dom";

const api = axios.create({
    baseURL: 'http://localhost:5000/api/user'
});

export default class UserForm extends Component {

    constructor(data) {
        super(data);
    }

    handleSubmit(event) {
        event.preventDefault();

        try {
            const elements = event.target.elements;
            let user = {
                fName: elements.fName.value,
                lName: elements.lName.value,
                email: elements.email.value,
                password: elements.password.value
            };

            const config = {
                headers: {
                    'content-type': 'application/json'
                }
            }

            api.post('/save', JSON.stringify(user), config)
                .then(response => {
                    console.log(`User has been successfully saved! Response: `, response)
                    if (!window.confirm(`User has been successfully saved! Would you like to add another one?`)) {
                        window.location.pathname = 'user/list';
                    } else {
                        event.target.reset();
                        user = undefined;
                    }
                })
                .catch(err => {
                    console.error(`Cannot save user! Error: `, err);
                });
        } catch (e) {
            console.error(`Cannot handleSubmit! Error: `, e);
        }
    }


    render() {
        return (
            <main>
                <Header/>
                <section className='container shadow-lg p-4 rounded-5'>
                    <div className='mb-sm-3'>
                        <h3>User form</h3>
                    </div>
                    <hr/>
                    <form onSubmit={this.handleSubmit}>
                        <div className='mb-sm-3'>
                            <label htmlFor='fName' className='form-label'>First name:</label>
                            <input type="text" className='form-control' id='fName' name='fName' placeholder='First name'
                                   required/>
                        </div>

                        <div className='mb-sm-3'>
                            <label htmlFor="lName" className='form-label'>Last name:</label>
                            <input type="text" id='lName' name='lName' className='form-control' placeholder='Last name'
                                   required/>
                        </div>

                        <div className='mb-sm-3'>
                            <label htmlFor="email" className='form-label'>Email:</label>
                            <input type="email" id='email' name='email' className='form-control' placeholder='Email'
                                   required/>
                        </div>

                        <div className='mb-sm-3'>
                            <label htmlFor="password" className='form-label'>Password:</label>
                            <input type="password" id='password' name='password' className='form-control'
                                   placeholder='Password' required
                                   minLength='6'/>
                        </div>

                        <hr/>
                        <div className='btn-toolbar d-flex justify-content-between mt-sm-3'>
                            <Link to='/user/list' className='btn btn-primary'>Back</Link>
                            <button type='submit' className='btn btn-primary'>Save</button>
                        </div>
                    </form>
                </section>
            </main>

        );
    }
}