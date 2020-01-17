import React from 'react';


export const Type = ({placeholder, handleTypeTxt}) =>(
    <input type="text" data-testid='type' name="type"
    className='form-control mr-sm-2'
     placeholder={placeholder} onChange={handleTypeTxt}
    />
)