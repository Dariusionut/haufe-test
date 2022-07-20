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

    render() {

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
                    <table className='table table-bordered table-striped table-hover shadow-lg '>
                        <thead className='table-dark'>
                        <tr>
                            <th>#</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody className='table-success'>
                        {this.state.users.map((user, index) => {
                            return (<tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.fName}</td>
                                <td>{user.lName}</td>
                                <td>{user.email}</td>
                            </tr>);
                        })}
                        </tbody>

                    </table>
                </section>
            </main>
        );
    }
}