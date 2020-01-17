import React from 'react';


export const Type = ({handleTypeTxt}) =>(
    <input type="text" name="type"
    className='form-control mr-sm-2'
     placeholder='Type e.g. Movie, Series' onChange={handleTypeTxt}
    />
)