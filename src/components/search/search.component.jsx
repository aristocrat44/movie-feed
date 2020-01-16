import React from 'react';


export const Search = ({handleSearchTxt}) =>(
    <input type="text" name="search"
     placeholder='quick search movies' onChange={handleSearchTxt}
    />
)