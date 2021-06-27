import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Header from './Header';

const Layout = ({ children }: any) => {

  const [ blackHeader, setBlackHeader ] = useState<boolean>(false); 

  const scrollListener = () => {
    if(window.scrollY > 900){
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  }; 

  useEffect(() => {

    window.addEventListener('scroll', scrollListener); 

    return () => {
      window.removeEventListener('scroll', scrollListener); 
    }

  }, [])
  return (
    <Box>
      <Header black={blackHeader}/>
      {children}
    </Box>
  )
}

export default Layout;