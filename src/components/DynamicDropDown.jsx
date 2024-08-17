

// this is for the categories page. It will receive the dropdown elements from the api .../categories

import React, { useState } from 'react'

function DynamicDropdown(){
	const [countries, setCountries] = useState([]);
	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);
	return (

		<div className="container">
            <div className="card">
                <div className="card-body">
                	<div className="mb-3">
                		<select className="form-select" >
                			<option value="">Select</option>
                			{

                            }
                		</select>
                	</div>
                	<div className="mb-3">
                		<select className="form-select" >
                			<option value="">Select</option>
                			{
                				
                			}
                		</select>
                	</div>
                	<div className="mb-3">
                		<select className="form-select">
                			<option value="">Select</option>
                			{
                				
                			}
                		</select>
                	</div>
                </div>
            </div>
        </div>

	)

}

export default DynamicDropdown;