import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import DataList from './DataList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [dataListDefault, setdataListDefault] = useState();
  const [dataList, setdataList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setdataList(data) 
         setdataListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = dataListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setdataList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Search for Your Next Vacation</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      
      <DataList dataList={dataList}/>
    </>
   );
}
export default SearchPage