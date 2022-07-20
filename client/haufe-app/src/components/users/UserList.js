import './User.scss'
import axios from "axios";
import {Component} from "react";
import Header from "../header/Header";
import {Link} from "react-router-dom";

const api = axios.create({
    baseURL: 'http://localhost:5000/api/user'
});
export default class UserList extends Component {

    state = {
        users: []
    }

    constructor(data) {
        super(data);
    }

    componentDidMount() {
        api.get('/list')
            .then(response => {
                this.setState({
                    users: response.data
                });
            });
    }

    async deleteByEmail(email) {
        if (window.confirm(`Are you sure you want to remove user with email ${email}?`)) {
            await axios.delete(`http://localhost:5000/api/user/delete/${email}`);
            document.getElementById(email).remove();
            console.log(`Successfully removed user with email: %s`, email);
        } else {
            return false;
        }
    }

    render() {
        const userLength = this.state.users.length;

        return (
            <main>
                <Header/>

                <section className='container'>

                    <section>
                        <div>
                            <h3>User list</h3>
                        </div>
                        <hr/>
                        <div className='btn-toolbar mb-sm-2 '>
                            <Link to='/user/add' title='Add dummy data' className='btn btn-lg btn-primary'>
                                <i className='fas fa-plus'></i>&nbsp;Add user
                            </Link>
                        </div>
                    </section>
                    {userLength > 0 ? (
                        <table className='table table-bordered table-striped table-hover shadow-lg '>
                            <thead className='table-dark'>
                            <tr>
                                <th>#</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody className='table-success'>
                            {this.state.users.map((user, index) => {
                                return (<tr key={index} id={user.email}>
                                    <td>{index + 1}</td>
                                    <td>{user.fName}</td>
                                    <td>{user.lName}</td>
                                    <td>{user.email}</td>
                                    <td className='text-center'>
                                        <button type='button'
                                                className='btn btn-danger'
                                                title={`Delete ${user.lName} ${user.fName}`}
                                                onClick={async () => await this.deleteByEmail(user.email)}
                                        >
                                            <i className='fas fa-trash'></i>
                                        </button>
                                    </td>
                                </tr>);
                            })}
                            </tbody>

                        </table>
                    ) : (
                        <div className='text-center mt-sm-5 shadow-lg bg-info rounded-3 p-sm-3'>
                            <h1 className='text-danger'>Please add at least one user in order to render the table!</h1>
                        </div>
                    )}
                </section>
            </main>
        );
    }
}