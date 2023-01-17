import React from 'react';
import Mazo from './Mazo';
import { useState, useEffect } from "react";
//import { render } from 'react-dom';

const MiApi = () => {
    const [info, setInfo] = useState("");
    useEffect(() => {
        starwarsfetch();
    }, []);
    const starwarsfetch = async () => {
        const url = 'https://swapi.dev/api/people';
        const response = await fetch(url)
        const data = await response.json()
        const result = data.results
        console.log(result)
    }
      
    const starwarsinfo = Object.keys(info).length
        //setInfo([...starwarsinfo])
        
    const starwarsState = useState(info)
    console.log(info)
    //console.log(starwarsState)
    return (
        <div className='text-center bg-dark'>
            <div className='text-white '>
                <h1>Hola</h1>
                <div>

                </div>
                { <Mazo
                    list= {info}
                /> }
            </div>
        </div>
    )
}

export default MiApi