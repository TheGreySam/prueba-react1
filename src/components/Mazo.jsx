import React from 'react';
import { useState } from "react";

const Mazo = ({ list }) => {

    const stararray = list
    const [search, setSearch] = useState('');
    const inputSearch = (e) => {
        setSearch(e.target.value)
    }
    //console.log(stararray)
    const starcard = Object.values(stararray).filter((e) => {
        return (
            search.toLowerCase() === '' ? e : e.name.toLowerCase().includes(search)
        )
    }).map((e, i) =>
        <div className="card border-primary mb-3 cardsize m-2" key={i}>
            <img src={e.image} className="card-img imgcard" alt="..."></img>
            <div className="card-img-overlay bg-semi d-flex align-items-end">

                <div className='card-body text-light'>
                    <h5 className="card-title">{e.name}</h5>
                    <p>
                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Expandir Información
                        </a>
                        
                    </p>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                        <table class="table table-borderless text-light">
                            <tbody>
                                <tr>
                                    <th scope="row">Nacimiento:</th>
                                    <td className="text-primary" >{e.born}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Planeta:</th>
                                    <td className="text-primary" >{e.homeworld}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Especie:</th>
                                    <td className="text-primary" >{e.species}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Afiliación:</th>
                                    <td className="text-primary" >{e.affiliations}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Maestro:</th>
                                    <td className="text-primary" >{e.masters}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Aprendiz:</th>
                                    <td className="text-primary" >{e.apprentices}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    
                </div>
                


            </div>
        </div>)


    return (
        <div className="p-3 " >
            <div className="card-body">
                <div className="p-4 bg-dark text-white" >
                    <div className="card-body">
                        <div className="container px-5">
                            <div className="search">
                                <div className="">
                                    <div className="">
                                        <h3 className="card-title">
                                            Encuentra tu personaje de Starwars
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

                <ul className="d-flex flex-wrap">
                    {starcard}
                </ul>
            </div>
        </div>
    )
}

export default Mazo;