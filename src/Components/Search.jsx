import React from 'react';

const Search = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-blue-600 text-center m-4'>Search Form</h1>

            <form>
                <input type="text" placeholder="Search Here by status" className="input input-bordered input-accent w-full max-w-xs ml-36 m-4" /> <br />
                <input type="text" placeholder="Search Here by Original-Launch" className="input input-bordered input-accent w-full max-w-xs ml-36 m-4" /> <br />
                <input type="text" placeholder="Search Here by Type" className="input input-bordered input-accent w-full max-w-xs ml-36 m-4" /> <br />
                <input className='btn btn-error ml-36 m-4' type="submit" value="Search" />
            </form>

        </div>
    );
};

export default Search;