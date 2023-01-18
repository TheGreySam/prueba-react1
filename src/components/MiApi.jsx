import React from 'react';
import Mazo from './Mazo';
import { useState, useEffect } from "react";
import axios from 'axios';
//import { render } from 'react-dom';

const MiApi = () => {
    const [data, setData] = useState("");
    useEffect(() => {
        const starwarsfetch = async () => {
            const fetch = await axios(
                'https://swapi.dev/api/people'
            );
            const info = fetch.data.results
            setData([...info])
            //const infoID = Object.keys(info).length
            //console.log(infoID)
        };
        starwarsfetch();
    }, []);

    /* const starwarsfetch = async () => {
        const url = 'https://swapi.dev/api/people';
        const response = await fetch(url)
        const data = await response.json()
        const result = data.results
        console.log(data)
        console.log(result)
    } */

    return (
        <div className='text-center bg-dark'>
            <div className='text-white '>
                <h1>Hola</h1>
                <div>
                    <ul>
                        {/*data.hits.map(e => (
                            <li key={e.objectID}>
                                <a href={e.url}>{e.title}</a>
                            </li>
                        ))*/}
                    </ul>
                </div>
                {<Mazo
                    list= {data}
                        /> }
            </div>
        </div>
    )
}

export default MiApi