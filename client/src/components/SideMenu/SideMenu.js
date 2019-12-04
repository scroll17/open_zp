import React, { useMemo } from 'react';
import style from './SideMenu.module.sass';

import { Link, useLocation } from "react-router-dom";

import { SideMenuTextAndLinks } from '../../utils/textAndLinksForPages/textAndLinksForPages';
import { URL } from "../../constants";

function SideMenu() {

    const location = useLocation();

    const showSections = useMemo(() => {
        return SideMenuTextAndLinks.map( item => {
            const { to, iType, text } = item;
            return (
                <Link to={to} key={iType}>
                    <i className={iType}/>
                    <span>{text}</span>
                </Link>
            )
        })
    }, [location]);

    return (
        <div className={style.sideMenu}>
            <div>
                {showSections}
            </div>
            <Link to={URL.ABOUT} className={style.about}>
                Про проект
            </Link>
        </div>
    )
}

export default SideMenu;