import { ChangeEvent } from 'react';
import { useMovieContext } from '../contexts/MovieContext';

const Navbar = () => {
    const { searchQuery, setSearchQuery } = useMovieContext();

    return (
        <nav className="flex items-center justify-between mb-3">
            <label className="text-2xl">Movie<span className="text-red-500">App</span></label>

            <form
                className='flex items-center justify-end bg-white rounded-[50px]'
                onSubmit={() => {}}
            >
                <input
                    type="text"
                    placeholder="Enter a search query"
                    value={searchQuery}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                    className='rounded-[50px] py-1 px-3 outline-none text-sm bg-transparent text-black'
                />
            </form>
        </nav>
    );
}

export default Navbar;