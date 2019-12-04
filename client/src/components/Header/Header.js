import React from 'react';
import style from './Header.module.sass';

import { Link } from "react-router-dom";
import { URL } from "../../constants";

function Header() {

    return (
        <div className={style.header}>
            <div className={style.logo}>
                <Link to={URL.HOME}>
                    <h1>З</h1>
                </Link>
            </div>
            <div className={style.name}>
                Запорiжжя
            </div>
        </div>
    )
}

export default Header;