import React, { useEffect, useState } from 'react';

const Data = () => {
    const [capsules, setCapsules] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCapsules(data));
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-orange-400 m-4'>Capsules</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
                {
                    capsules.map((capsule, status, capsule_id, missions) =>
                        <div className="card w-96 bg-blue-400 text-primary-content m-4">
                            <div className="card-body">
                                <h2 className="card-title">{capsule.status}</h2>
                                <p>{capsule.capsule_id}</p>
                                <p>{capsule.details}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn">Details</button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Data;