import React, { useState } from 'react';
import { CategoryProps } from '../utils/@types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export const MovieRow = ({ ...item }: CategoryProps) => {

const [ scrollX, setScrollX ] = useState(0);
const width = item.items.results?.length * 250;
console.log();

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }; 
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = item.items.results?.length * 250;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }; 
  return (
    <div className="movieRow">
        <h2>{item.title}</h2>
        {scrollX !== 0 &&
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <FaChevronLeft size="2rem"/>
            </div>
        }
        {scrollX < window.innerHeight &&
            <div className="movieRow--right" onClick={handleRightArrow}>
                <FaChevronRight size="2rem" />
            </div>
        }

        <div className="movieRow--listarea">
            <div className="movieRow--list" style={{
                marginLeft:scrollX, 
                width: width
            }} >
                {item.items.results?.length > 0 && item.items.results?.map((item, key)=>(
                    <div key={key} className="movieRow--item">
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_name} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  ) ;
}
