import React from 'react';


export const Year = ({placeholder,handleYearTxt}) =>(
    //YEAR INPUT COMPONENT
    <input type="text" data-testid='year' name="year"
        className='form-control mr-sm-2'
            placeholder={placeholder} onChange={handleYearTxt}
    />
)