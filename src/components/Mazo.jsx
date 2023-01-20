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
                <div class="card-img-overlay bg-semi d-flex align-items-end justify-content-center">
                    <div class="card-header" id="headingOne">
                        <h5 className="card-title">{e.name}</h5>
                            <button type="button" class="btn btn-outline-info text-white" data-bs-toggle="collapse" data-bs-target={"#collapse"+e.id.toString()} aria-expanded="false" aria-controls={e.id.toString()}>
                            Expandir Información
                            </button>
                    </div>
                </div>
                <div id={"collapse"+e.id.toString()} class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div class="card-body">
                        <table class="table text-light mb-4">
                            <tbody>
                                <tr>
                                    <th scope="row">Nacimiento:</th>
                                    <td >{e.born}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Planeta:</th>
                                    <td >{e.homeworld}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Especie:</th>
                                    <td >{e.species}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Afiliación:</th>
                                    <td>
                                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-info'>{e.affiliations}</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Maestro:</th>
                                    <td>
                                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-info'>{e.masters}</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Aprendiz:</th>
                                    <td>
                                        <ul className='list-group'>
                                            <li className='list-group-item list-group-item-info'>{e.apprentices}</li>
                                        </ul>
                                    </td>
                                </tr>
                                <hr />
                                <hr />
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>)


            return (
            <div className="p-3 bg-mazo" >
                <div className="card-body">
                    <div className="p-4 text-white" >
                        <div className="card-body">
                            <div className="container px-5">
                                <div className="search">
                                    <div className="">
                                        <div className="m-3">
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