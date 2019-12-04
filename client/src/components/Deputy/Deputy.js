import React from 'react';
import style from './Deputy.module.sass';

import connect from "react-redux/es/connect/connect";
import { getDeputyById } from "../../actions/actionCreators/deputyCreators";

function Deputy(props) {
    const { id, fio, photo, citizenship, maritalStatus, link, allInformation } = props;

    if(allInformation){
        return (
            <div className={style.details}>
                <img src={photo} alt={fio} />
                <span>{fio}</span>
                { citizenship && <span>{citizenship}</span> }
                { maritalStatus && <span>{maritalStatus}</span> }
                <a href={link} target={"_blank"}>Посилання</a>
            </div>
        )
    } else {
        return (
            <div className={style.data} onClick={() => props.getDeputyById(id)}>
                <img src={photo} alt={fio} />
                <span>{fio}</span>
            </div>
        )
    }
}

Deputy.defaultProps = {
    allInformation: false
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = dispatch => ({
    getDeputyById: (id) => dispatch(getDeputyById(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Deputy);
