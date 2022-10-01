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
            <h1 className='text-3xl text-center font-bold text-green-400 m-4'>Capsules</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
                {
                    capsules.map((capsule, status, capsule_id, missions, capsule_serial) =>
                        <div className="card w-96 bg-blue-400 text-primary-content m-4">
                            <div className="card-body">
                                <h2 className="card-title">Status: {capsule.status}</h2>
                                <p>Serial: {capsule.capsule_serial}</p>
                                <p>Id: {capsule.capsule_id}</p>
                                <p>Description: {capsule.details}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-success">Details</button>
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