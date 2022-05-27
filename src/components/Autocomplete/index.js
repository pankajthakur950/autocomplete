import React, { useState, useEffect } from 'react';

import classes from './Autocomplete.module.scss';
import {FaSearch} from 'react-icons/fa';
import Suggestions from './Suggestions';
import axios from 'axios';

function Autocomplete() {
    const [suggestions, setSuggestions] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(()=>{

        const debounceFn = setTimeout(()=>{
            
            const getUsers = async () =>{
                // if(apiCallLimit === 0){
                //     alert("Reached maximum limit to call Githun API...wait for sometime to try again.");
                //     return;
                // }
                const response = await axios.get(`https://api.github.com/search/users?q=${searchText}`);
                setSuggestions(response.data.items);
            }
            searchText ? getUsers() : setSuggestions([]);
        }, 200);

        return ()=>{
            clearTimeout(debounceFn);
        };
        
    },[searchText])

    const onSearchSubmit = (e)=>{
        e.preventDefault();
    };
    return (
        <div className={classes['autocomplete']}>
            <div className={classes.container}>
                <h1>Search For Github Users</h1>
                <form onSubmit={onSearchSubmit}>
                    <input type="text" className={classes.search} value={searchText} onChange={e => setSearchText(e.target.value)}/>
                    <button><FaSearch/></button>
                    {suggestions && <Suggestions suggestions={suggestions}/>}
                </form>
            </div>
        </div>
    );
}

export default Autocomplete