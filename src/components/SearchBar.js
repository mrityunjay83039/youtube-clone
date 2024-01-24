import React from 'react'
import { useState } from 'react'
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = () => (
    <Paper 
    component="form"
    onSubmit={()=>{}}
    sx={{borderRadius:20,
         border:'1px solid #e3e3e3',
         pl:2,
         boxShadow:'none',
         mr: {sm:5}
        }}>
        <input type='text' className='search-bar' placeholder='Search...'
    
        />
        <IconButton type='submit'
        sx={{p:'10px', color:'red'}}>
            <Search/>
        </IconButton>
    </Paper>
)


export default SearchBar