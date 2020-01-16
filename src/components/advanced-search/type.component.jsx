import React from 'react';


export const Type = ({handleTypeTxt}) =>(
    <input type="text" name="type"
     placeholder='type e.g. movie, series' onChange={handleTypeTxt}
    />
)