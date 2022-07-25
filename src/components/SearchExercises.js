import React, {useEffect , useState} from 'react';
import {Box , Button , Stack , TextField, Typography} from '@mui/material';


const SearchExercises = () => {
  const [Search , setSearch] = useState('');

  const handleSearch = async () => {
    if(Search){
      
    }
  }

  return (
    <Stack alignItems="center" mt="20px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px' , xs:'30px'}}}
      mb='50px' textAlign='center '>
        Awesome Exercises You <br /> 
        Should Know
      </Typography>
      <Box position='relative' mb='72px'>     
      <TextField
          height="76px"
          sx={{ input: { fontWeight: '700',border:'none', borderRadius: '40px' }, width: { lg: '1170px', sm:'500px' ,xs: '250px' }, backgroundColor :'#fff',borderRadius: '40px' }}
          value={Search}
          onChange={(e) =>setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className='Search-btn'
        sx={{
          bgcolor:'#ff2625',
          color: '#fff',
          textTransform:'none',
          width:{lg: '173px', xs: '80px' }, height: '56px',position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px'}}}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises
