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
        <div className="card border-primary mb-3 cardsize m-2 bg-dark" key={i}>
            <img src={e.image} className="card-img imgcard" alt="..."></img>

            <div id="accordion">
                <div class="card-img-overlay bg-semi d-flex align-items-end">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                        <h5 className="card-title">{e.name}</h5>
                            <button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Expandir Información
                            </button>
                        </h5>
                    </div>

                    
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div class="card-body">
                        <table class="table text-light">
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
                                                <input type="text" className="form-control" placeholder="Busca tu carta de starwars"
                                                    aria-label="Buscador de personaje" aria-describedby="basic-addon2"
                                                    onChange={inputSearch}></input>
                                                
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