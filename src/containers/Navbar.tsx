import { Box, Flex, Container, Avatar, IconButton, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import Image from 'next/image';
import { blackHeaderProps } from './Header';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { FaBell, FaSearch } from 'react-icons/fa'

const Navbar = ({ black }: blackHeaderProps) => {
  return (
    <Box 
      as="nav" 
      bg={black ? '#141414': ''} 
      pos="fixed" 
      left={0} 
      right={0} 
      top={0} 
      transition=".5s"
    >
      <Flex 
        py={4} 
        px="70px" 
        bgGradient="linear(to-b, #060606, transparent)" 
        justify="space-between" 
        align="center"
      >
        <Box>
          <Image src="/images/netflix-logo.png" width="92.5px" height="25px" />
        </Box>

        <Box>

          <Flex align="center">
            <InputGroup size="sm" variant="filled" mr={6}>
              <InputLeftElement children={<FaSearch />} />
              <Input />
            </InputGroup>
            <IconButton
              aria-label=""
              icon={<FaBell size="1.3rem" />} 
              variant="unstyled" 
              p={0} 
              size="xs" 
              mr={6}
            />
            <Avatar 
              src="https://occ-0-541-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRQhSlSTvyi6D55ytF8vXfBpYNZfzSmwaBhGkPVSSopsoiSltaUB0rLOmgso3825yQA1VVpN0CLm4Va9efA7FWo.png?r=1a0"
              size="sm" 
              mr={2}
            />
            <BsFillCaretDownFill size=".8rem" />
          </Flex>

        </Box>

      </Flex>
    </Box>
  )
}

export default Navbar;