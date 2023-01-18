import React from "react";
import imagetitle from '../assets/imgtitle.jpg';

const Header = () => {
    return (
        <div className="card bg-dark">
            <img src={imagetitle} className="card-img imgtitle" alt="..."></img>
            <div className="">
                <div className="card-img-overlay bg-semi d-flex align-items-end ">
                    <div className="card-header text-white" >
                        <h2 className="card-title ">
                            StarWars Character Selector
                            
                        </h2>
                        <p>Powered by AKABAB API</p>
                        <i className="fas fa-jedi fa-lg icontitle"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;