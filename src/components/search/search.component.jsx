import React from 'react';


export const Search = ({handleSearchTxt}) =>(
    <input type="text" name="search"
    className='form-control mr-sm-2'
     placeholder='Title' onChange={handleSearchTxt}
    />
)