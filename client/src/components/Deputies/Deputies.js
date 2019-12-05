import React, { useMemo, useEffect, useRef, useLayoutEffect, useState } from 'react';
import style from './Deputies.module.sass';

import Deputy from "../Deputy/Deputy";

import connect from "react-redux/es/connect/connect";
import { getAllDeputies, getDeputyByName } from "../../actions/actionCreators/deputyCreators";
import useDebounce from "../Hooks/useDebounce";

function Deputies(props) {
    const { deputies, selectedDeputy } = props;
    const containerRef = useRef(null);
    const [inputValue, setInputValue] = useState('');


    useLayoutEffect(() => {
        window.scrollTo(0,0);
    }, [selectedDeputy]);

    const deputiesList = useMemo(() => (
        deputies.map( deputy => <Deputy {...deputy} key={deputy.id}/>)
    ), [deputies]);


    const debouncedSearchTerm = useDebounce(inputValue, 500);
    useEffect(() => {
        if(debouncedSearchTerm){
            props.getDeputyByName(debouncedSearchTerm);
        }else{
            props.getAllDeputies();
        }
    }, [debouncedSearchTerm]);


    return (
        <div className={style.container}>
            <div className={style.content} ref={containerRef}>
                <div className={style.findElement}>
                    <input type={"text"} placeholder={"Пошук"} onChange={(e) => setInputValue(e.target.value)}/>
                </div>
                <div className={style.list}>
                    {deputiesList}
                </div>
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
    getDeputyByName: (name) => dispatch(getDeputyByName(name)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Deputies);
