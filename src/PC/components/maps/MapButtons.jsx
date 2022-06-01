import React from 'react';
import WrapButton from "./buttons/WrapButton";
import ClouseButton from "./buttons/ClouseButton";

const MapButtons = ({clouse,to}) => {
    return (
        <div style={{
            display: 'grid',
            justifyItems: 'start',
            position: 'absolute'
        }}>
            {
                clouse
                    ?
                        <ClouseButton to={to}/>
                    :
                        <></>
            }
            {/* <WrapButton/> */}
        </div>
    );
};

export default MapButtons;