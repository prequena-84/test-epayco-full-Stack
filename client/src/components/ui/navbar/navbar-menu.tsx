'use client'

import React, { useEffect, useState } from "react";
import Link from 'next/link'

import type { INavBar, IMenu  } from "@/types/html.interfaces";

const NavBar: React.FC<INavBar> = ( {titleBrand="Menu", titleNavbar = "Menu"} ) => {

    const [ menu, setMenu ] = useState<IMenu[]>([]);

    useEffect( () => {
        fetch("/config-nav-bar.json")
        .then( resp => resp.json() )
        .then( data => setMenu(data) ) 
        .catch( err => console.error(err) );
    },[]);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    {titleBrand}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                            {titleNavbar}
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {menu.map(( item, index ) => (
                                <li key={`li-${index}`} className="nav-item dropdown">
                                    <button
                                        key={`btn-${index}`}
                                        className="nav-link dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {item.menu}
                                    </button>
                                    <ul className="dropdown-menu">
                                        {item.submenu.map(( subItem, index ) => (
                                            <li key={`li-${index}`}>
                                                <Link href={ subItem.link } className="dropdown-item">
                                                    {subItem.label}
                                                </Link>  
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                             ))}
                        </ul>
                        <form className="d-flex mt-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">
                                Buscar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;