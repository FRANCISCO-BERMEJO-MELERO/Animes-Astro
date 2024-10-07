import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {

    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () =>{
        setDarkTheme(!darkTheme);
        if(darkTheme){
            document.body.classList.add('dark');
        }else{
            document.body.classList.remove('dark');
        }
    }
    return (
        <nav className='w-full h-16 flex justify-center backdrop-blur-sm border-b border-slate-500/50 dark:border-zinc-700 '>
            <ul className='flex justify-between items-center max-w-xl mx-auto w-full'>
                <li>
                    <p className='text-black dark:text-white text-2xl font-bold'>Animes <span className='text-red-500'>Astro</span>🎥</p>
                </li>
                <li>
                    <button onClick={toggleTheme} className='text-black dark:text-white text-xl border border-slate-500/50 dark:border-zinc-700 rounded-md p-2 hover:bg-zinc-500/50 dark:hover:bg-zinc-700'>
                        {darkTheme ? <FaSun /> : <FaMoon />}
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
