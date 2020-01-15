import React from 'react';


export const Search = ({placeholder, handleChange}) =>(
    <input type="search"
    className="search" placeholder={placeholder} onChange={handleChange}
    
    />
)