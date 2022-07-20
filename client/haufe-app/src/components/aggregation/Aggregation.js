import {Component} from "react";
import Header from "../header/Header";
import axios from "axios";
import Moment from "react-moment";


export default class Aggregation extends Component {

    state = {
        aggregation: undefined
    }

    constructor(data) {
        super(data);
    }

    async componentDidMount() {
        const aggr = (await axios.get('http://localhost:5000/api/db/aggregationTime')).data[0].fullDate;
        console.log(aggr);
        this.setState({
            aggregation: aggr
        });
    }


    render() {

        return (
            <main>
                <Header/>
                <section className='container text-center'>
                    <div className='alert alert-info' role='alert'>
                        <h1> The aggregation time is:&nbsp;&nbsp;
                            <Moment format='DD-MM-yyyy hh:mm:ss'>
                                {this.state.aggregation}
                            </Moment>
                        </h1>
                    </div>
                </section>
            </main>
        )
    }
}