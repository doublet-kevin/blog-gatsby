import * as React from "react";
import {Link} from "gatsby"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header>
            <nav className="flex w-full max-w-7xl m-auto items-center justify-between">
                <div className="hidden gap-8 items-center text-stone-300 lg:flex">
                    <img src="https://picsum.photos/800" alt="logo" className="rounded-full w-16 h-16"/>
                    <Link to="/404" className="uppercase hover:text-white">Nous découvrir</Link>
                    <Link to="/404" className="uppercase hover:text-white">Nos solutions</Link>
                    <Link to="/404" className="uppercase hover:text-white">Nous rejoindre</Link>
                    <Link to="/404" className="uppercase hover:text-white">Nous contacter</Link>
                </div>
                <div className="flex gap-4">
                    <img src="https://picsum.photos/800" alt="logo" className="rounded-full w-8 h-8"/>
                    <img src="https://picsum.photos/800" alt="logo" className="rounded-full w-8 h-8"/>
                    <img src="https://picsum.photos/800" alt="logo" className="rounded-full w-8 h-8"/>
                    <img src="https://picsum.photos/800" alt="logo" className="rounded-full w-8 h-8"/>
                </div>
            </nav>
        </header>
    )
}