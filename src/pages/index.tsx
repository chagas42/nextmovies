import { useEffect, useState } from "react";
import { Tmdb } from "../api/tmdb";
import { CategoryProps, FeaturedProps } from '../utils/@types';
import { Box } from '@chakra-ui/react';
import { MovieRow } from '../components/MovieRow'; 
import { FeaturedMovie } from "../components/FeaturedData";

const Index = () => {

  const [ movieList, setMovieList ] = useState<CategoryProps[]>([]);
  const [ featuredData, setFeaturedData ] = useState<FeaturedProps | any>();
  
  async function getList (){
    //pegando a lista total
    let list = await Tmdb.getHomeList(); 
    setMovieList(list)

    //pegando o filme destaque
    let originals = list.filter(i => i.slug === 'originals'); 
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1)); 
    let chosen = originals[0].items.results[randomChosen]; 
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv'); 
    setFeaturedData(chosenInfo)
  }; 

  useEffect(() => {
    getList(); 
  }, []); 

  if(!movieList) 
    return null; 

  return (
    <div>
      {featuredData &&
        <FeaturedMovie {...featuredData}/>
      }      
      <Box as="section">
        {movieList.map((item, key) => (
          <MovieRow
            key={key}
            {...item}      
          />
        ))}
      </Box>
    </div>

  )
}

export default Index;