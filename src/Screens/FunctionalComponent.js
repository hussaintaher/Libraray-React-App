import React, {useState, useEffect} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


export default function FunctionalComponent() {
    
    const [books, setBooks] = useState([])

    useEffect(()=> {
        handleStories();
    }, [])

    const handleStories = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((res)=> {
            console.log(res.data)
            setBooks(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            {
            books.map((item,index) => (
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
