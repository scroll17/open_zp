import React, { useEffect, useMemo } from 'react';
import style from './StanOfDeputies.module.sass';


import connect from "react-redux/es/connect/connect";
import { getStanOfDeputies } from "../../actions/actionCreators/deputyCreators";


function StanOfDeputies(props) {
    const { stanOfDeputies } = props;

    useEffect(() => {
        props.getStanOfDeputies();
    }, []);

    const listStanOfDeputies = useMemo(() => {
        return stanOfDeputies.map( deputyInfo => {
           const {
               id,
               fio,
               description,
               faction,
               commission,
               constituency,
               link
           } = deputyInfo;

           return(
               <div key={id} className={style.item}>
                   <span>
                       <span>ПIБ: </span>
                       {fio}
                   </span>
                   <span>
                       <span>Опис: </span>
                       {description}
                   </span>
                   <span>
                       <span>Фракція: </span>
                       {faction}
                   </span>
                   <span>
                       <span>Комісія: </span>
                       {commission}
                   </span>
                   <span>
                       <span>Округ: </span>
                       {constituency}
                   </span>
                   <a href={link} target={"blank"}>Посилання</a>
               </div>
           )
        });
    }, [stanOfDeputies]);

    return (
        <div className={style.container}>
            {listStanOfDeputies}
        </div>
    )
}

const mapStateToProps = (state) => ({
    stanOfDeputies: state.deputyReducer.stanOfDeputies,
});
const mapDispatchToProps = dispatch => ({
    getStanOfDeputies: () => dispatch(getStanOfDeputies()),
});
export default connect(mapStateToProps, mapDispatchToProps)(StanOfDeputies);
