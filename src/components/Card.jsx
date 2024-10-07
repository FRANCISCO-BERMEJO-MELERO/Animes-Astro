import React from 'react';

const Card = ({ name, url, image_url, capitulo, score }) => {
  
  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  };
    return (
        <div className='bg-white dark:bg-zinc-700 shadow-xl rounded-lg w-64 h-96 p-3 transition-all duration-300 hover:scale-110 hover:rotate-3 '>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={image_url} alt={name} className='mt-2 rounded-lg h-48 w-full'/>
            </a>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{truncateText(name, 100)}</h3>
            <p className='text-xs text-gray-600 dark:text-gray-300'>{capitulo ? `${capitulo} episodios` : 'En emision'}</p>
            <p className='text-xs text-gray-600 dark:text-gray-300'><span className='font-bold text-yellow-500'>{score}</span> / 10</p>
        </div>
    );
}

export default Card;
