interface TmdbProps {
    getHomeList: () => {}; 
    getMovieList: () => {}; 
}
const getData = async (endpoint:string) => {
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/${endpoint}`); 
    const json = await req.json(); 

    return json; 
};

export const Tmdb =  {
    getHomeList: async () => {
        return [
            {
                slug: 'originals', 
                title: 'Originais do Netflix', 
                items: await getData(`discover/tv?with_network=213&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`) 
            }, 
            {
                slug: 'trending', 
                title: 'Recomendados para Você', 
                items: await getData(`trending/all/week?language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            },
            {
                slug: 'toprated', 
                title: 'Em Alta', 
                items: await getData(`movie/top_rated?language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            },
            {
                slug: 'action', 
                title: 'Ação', 
                items: await getData(`discover/movie?with_genres=28&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            },
            {
                slug: 'comedy', 
                title: 'Comédia', 
                items: await getData(`discover/movie?with_genres=35&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            },
            {
                slug: 'horror', 
                title: 'Terror', 
                items: await getData(`discover/movie?with_genres=27&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            },
            {
                slug: 'romance', 
                title: 'Romance', 
                items: await getData(`discover/movie?with_genres=10749&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            },
            {
                slug: 'documentary', 
                title: 'Documentários', 
                items: await getData(`discover/movie?with_genres=99&language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            }
        ]
    }, 
    getMovieInfo: async (movieId:number, type:string) => {
        let infoDefault = {}; 

        if(movieId){
            switch(type) {
                case 'movie':
                    infoDefault = await getData(`movie/${movieId}?language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
                break; 
                case 'tv': 
                    infoDefault = await getData(`tv/${movieId}?language=pt-BR&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
                break; 
                default:
                    infoDefault = {}
                break; 
            }
        }
        
        return infoDefault; 
    }
}; 

