import React from 'react';


export const Year = ({handleYearTxt}) =>(
    <input type="text" name="year"
     placeholder='year e.g. 2005' onChange={handleYearTxt}
    />
)