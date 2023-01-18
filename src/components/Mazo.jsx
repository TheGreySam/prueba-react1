import React from 'react';
import { useState } from "react";

const Mazo = ({list}) => {

    const stararray = list
    const [search, setSearch] = useState('');
    const inputSearch = (e) => {
        setSearch(e.target.value)
    }
    console.log(stararray)
    const starcard = Object.values(stararray).map((e, i) =>
        <div className="card text-bg-dark cardsize" key={e.id}>
            <img src="https://pixy.org/src/487/thumbs350/4870083.jpg" className="card-img" alt="..."></img>
            <div className="card-img-overlay">
                <p className="card-title">Nombre:
                <span>
                    <h2>{e.name}</h2>
                    </span>
                    </p>
                <p className="card-text">Nacimiento: 
                <span>
                    <h3>{e.born}</h3>
                    </span></p>
                <p className="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
        </div>)
    //console.log(stararray[0] )
     /*const starinfo = stararray.filter((e) => {
        return (
            search.toLowerCase() === '' ? e : e.name.toLowerCase().includes(search)
        )
    }).map((e) => {
        return (
            <li className="list-group-item" key={e.id}>{e.name}</li>
        )
    })*/
    
    return (
        <div className="p-3 " >
            
            <div className="card-body">
                <div className='col'>
                    <h5 className="card-title p-3">Listado de colaboradores</h5>
                    {/*<p>{stararray.name}</p>*/}
                </div>
                <div className="p-4 bg-dark text-white" >

            <div className="card-body">

                <div className="container px-5">
                    <div className="search">
                        <div className="">
                            <div className="">
                                <h3 className="card-title">
                                    Listado de colaboradores
                                </h3>
                            </div>
                            <div className="col align-self-end">
                                <div className="input-group px-5">
                                    <input type="text" className="form-control" placeholder="Busca un colaborador" 
                                    aria-label="Buscador de colaboradores" aria-describedby="basic-addon2"
                                    onChange={inputSearch}></input>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">Buscar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        {/* <div className="card text-bg-dark">
            <img src="https://pixy.org/src/487/thumbs350/4870083.jpg" className="card-img" alt="..."></img>
            <div className="card-img-overlay">
                <h5 className="card-title">info</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
        </div> */}
        <ul className="list-group lista">
                 
                 {starcard}
                     
                 </ul>    
                

            </div>
        </div>
        
    )
}

export default Mazo;