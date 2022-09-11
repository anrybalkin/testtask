import React, {useEffect, useState} from 'react';
import ComponentRadioBTN from './ComponentRadioBTN';

const ComponentRadioGroup = (props) => {
    const [positions,
        setPositions] = useState([]);
    useEffect(() => {
        if(positions.length==0)
        {
            fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions").then(response => {
            return response.json()
        }).then(data => {
            if (data.success) {
                setPositions(data.positions)
            }
        })
        }
    })
    if(positions.length>0)
    {
        return (
            <fieldset id={props.id} className={"registration_fieldset"}>
                {positions.map(el=>{
                    return <ComponentRadioBTN key={el.id} reqired={true} text={el.name} name={props.name} value={el.id}></ComponentRadioBTN>
                })}
                <span className={"input_error hide"}></span>
            </fieldset>
        );
       
    }
    else
    {
        return <div> loading</div>
    }
}

export default ComponentRadioGroup;