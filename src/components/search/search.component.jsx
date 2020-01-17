import React from 'react';


export const Search = ({placeholder,handleSearchTxt}) =>(
    <input data-testid='search' type="text" name="search"
    className='form-control mr-sm-2'
     placeholder={placeholder} onChange={handleSearchTxt}
    />
)