import {Component} from "react";
import Header from "../header/Header";
import axios from "axios";
import Moment from "react-moment";


export default class Aggregation extends Component {

    state = {
        aggregation: undefined,
        resetAggr: undefined
    }

    constructor(data) {
        super(data);
    }

    async componentDidMount() {

        this.setState({
            aggregation: await this.getData(),
            resetAggr: async () => this.setState({aggregation: await this.getData()})
        })

    }

    async getData() {
        return (await axios.get('http://localhost:5000/api/db/aggregationTime')).data[0].fullDate;
    }


    render() {

        return (
            <main>
                <Header/>
                <section className='container'>
                    {this.state.aggregation !== undefined ? (


                        <div className='alert alert-info text-center'>
                            <button type='button'
                                    className='btn btn-lg btn-primary float-start '
                                    onClick={this.state.resetAggr}
                            >Reset
                            </button>
                            <h1> The aggregation time is:&nbsp;&nbsp;
                                <Moment format='DD-MM-yyyy hh:mm:ss'>
                                    {this.state.aggregation}
                                </Moment>
                            </h1>
                        </div>
                    ) : (
                        <div className='alert alert-danger'>
                            <h1>The aggregation cannot be displayed!</h1>
                        </div>
                    )}
                </section>
            </main>
        )
    }
}