import React, { useEffect, useState, useRef } from 'react';
import Card from './Card'; 
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ContainerCard = ({Nombre}) => {
    const [data, setData] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime?q=${Nombre}`)
        .then(response => response.json())
        .then(data => {
            console.dir(data); 
            setData(data.data); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <div className='max-w-screen-lg mx-auto p-5 relative '>
            <h3 className='text-xl md:text-2xl font-bold text-gray-900 dark:text-white'>{Nombre}</h3>
            <hr className='border-2 border-gray-200 dark:border-zinc-700 my-4'></hr>
            <button onClick={scrollLeft} className='absolute left-0 top-1/2 -translate-y-1/2 text-black dark:text-white hover:scale-125 transition-all duration-300 text-xl md:text-2xl rounded-full p-1 z-100 border-2 border-black dark:border-white backdrop-blur-sm'>
                <FaArrowLeft />
            </button>
            <div className='flex gap-4 overflow-x-auto h-full w-[95%] p-9 mx-auto' ref={scrollRef}>
                <div className='flex space-x-4'>
                    {data.map(anime => (
                        <Card 
                        key={anime.mal_id}
                        name={anime.title} 
                        url={anime.url}
                        image_url={anime.images.jpg.image_url} 
                        capitulo={anime.episodes}
                        score={anime.score}
                        />
                    ))}
                </div>
            </div>
            <button onClick={scrollRight} className='absolute right-0 top-1/2 -translate-y-1/2 text-black dark:text-white border-2 border-black dark:border-white backdrop-blur-sm hover:scale-125 transition-all duration-300 text-xl md:text-2xl rounded-full p-1 z-10'>
                <FaArrowRight />
            </button>
        </div>
    );
}

export default ContainerCard;
