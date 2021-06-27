import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';

export interface blackHeaderProps {
  black: boolean; 
}


const Header = ({ black }: blackHeaderProps) => {
  return (
    <Box as="header">
      <Navbar black={black} />
    </Box>
  )
}

export default Header;