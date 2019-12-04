import React, { useMemo, useEffect, useRef, useLayoutEffect } from 'react';
import style from './Deputies.module.sass';

import Deputy from "../Deputy/Deputy";

import connect from "react-redux/es/connect/connect";
import { getAllDeputies } from "../../actions/actionCreators/deputyCreators";

function Deputies(props) {
    const { deputies, selectedDeputy } = props;
    const containerRef = useRef(null);

    useEffect(() => {
        props.getAllDeputies();
    }, []);

    const deputiesList = useMemo(() => (
        deputies.map( deputy => <Deputy {...deputy} key={deputy.id}/>)
    ), [deputies]);

    useLayoutEffect(() => {
        window.scrollTo(0,0);
    }, [selectedDeputy]);

    return (
        <div className={style.container}>
            <div className={style.list} ref={containerRef}>
                {deputiesList}
            </div>
            {
                selectedDeputy &&
                <div className={style.details}>
                    <Deputy {...selectedDeputy} allInformation={true}/>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    deputies: state.deputyReducer.deputies,
    selectedDeputy: state.deputyReducer.selectedDeputy,
});
const mapDispatchToProps = dispatch => ({
    getAllDeputies: () => dispatch(getAllDeputies()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Deputies);
