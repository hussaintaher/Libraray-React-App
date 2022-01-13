import React, { Component } from 'react'
import axios from 'axios'
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            books: [],
        }
    }

    componentDidMount() {
        this.handleStories();
    }

    handleStories = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then((res)=> {
                console.log(res.data)
                this.setState({books: res.data})
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.books.map((item,index) => (
                        <Accordion key={item.id} defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{item.title}</Accordion.Header>
                                <Accordion.Body>
                                {item.body}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    ))
                }
            </div>
        )
    }
}
