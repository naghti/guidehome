import React from 'react';
import state from "../state/state";

const ChangeCountry = () => {
    let countrys = [
        {
            name: 'Томск',
            center: {
                lat: 56.491098,
                lng: 84.962755,
            }
        },
        {
            name: 'Калининград',
            center: {
                lat: 54.710954198759794,
                lng: 20.495882358147977,
            }
        }
    ]
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
            {
                countrys.map(country => (
                    <>
                        <button
                            className="btn btn-primary col-8"
                            type="submit"
                            onClick={() => state.changeCenter(country.center.lat,country.center.lng)}
                            style={{margin:10}}
                        >{country.name}</button>
                    </>
                ))
            }
        </div>
    );
};

export default ChangeCountry;