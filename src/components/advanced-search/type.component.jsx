import React from 'react';


export const Type = ({placeholder, handleTypeTxt}) =>(
    //TYPE INPUT COMPONENT
    <input type="text" data-testid='type' name="type"
        className='form-control mr-sm-2'
            placeholder={placeholder} onChange={handleTypeTxt}
    />
)