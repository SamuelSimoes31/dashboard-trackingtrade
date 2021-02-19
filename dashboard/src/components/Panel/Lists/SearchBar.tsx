import React from 'react';
import { Input } from './SearchBarStyle';

const SearchBar = ( {setSearch}: {setSearch(str: string): void} ) => {
  return (
    <Input type="text" placeholder="Pesquise" onChange={e => setSearch(e.target.value)} defaultValue={'sousa'}/>
  );
}

export default SearchBar;
