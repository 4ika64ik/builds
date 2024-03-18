import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {Link} from "react-router-dom";

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                О нас
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                Программы
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
                Отзывы
            </HashLink>
            <Link to="/form" className="px-4 font-extrabold text-gray-500 hover:text-blue-900" >
                Наши контакты
            </Link>

        </>
    )
}

export default NavLinks;
