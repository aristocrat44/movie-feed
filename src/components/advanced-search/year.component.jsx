import React from 'react';


export const Year = ({handleYearTxt}) =>(
    <input type="text" name="year"
    className='form-control mr-sm-2'
     placeholder='Year e.g. 2005' onChange={handleYearTxt}
    />
)