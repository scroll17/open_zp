import React, { Component } from 'react';
import style from "./MainPage.module.sass"

import connect from "react-redux/es/connect/connect";
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import SwitchRouters from "../../components/Route/SwitchRouters";

class MainPage extends Component{

    render() {
        return (
            <div className={style.container}>
                <Header />
                <div className={style.content}>
                    <div className={style.spacer}/>
                    <SideMenu />
                    <div className={style.pageContent}>
                        <SwitchRouters />
                    </div>
                    <div className={style.spacer}/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({

});
export default connect(mapStateToProps)(MainPage);
