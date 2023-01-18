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
                'https://akabab.github.io/starwars-api/api/all.json'
            );
            const info = fetch.data

            setData([...info])
        };
        starwarsfetch();
    }, []);


    return (
        <div className='text-center bg-dark'>
            <div className='text-white '>
                <h1>Hola</h1>
                <div>
                  
                </div>
                {<Mazo
                    list= {data}
                        /> }
            </div>
        </div>
    )
}

export default MiApi