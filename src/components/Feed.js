import React from 'react'
import {Stack, Box, Typography} from '@mui/material'
import {Sidebar} from '../components'

const Feed = ()=>(
  <Stack sx={{flexDirection:{sx:'column', md:'row'}}}>
    <Box sx={{borderRight:'1px solid #3d3d3d', height:{sx:'auto', md:'92vh'}, px:{sx:0, md:2}}}>
      <Sidebar/>
      <Typography className='copyright' sx={{color:'#ffffff', mt:'1.5'}}>@copyright 2024 Youtube Clone</Typography>
    </Box>
  </Stack>
)


export default Feed