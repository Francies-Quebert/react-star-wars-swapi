import React from 'react'
import { Link, redirect, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useGetStarWarQuery } from '../slice/starWarSlice';
import ErrorElement from '../component/ErrorElement';

function Details() {
    let { type, id } = useParams();
    const { isFetching, error, isLoading, data } = useGetStarWarQuery<any>({ id: id || '1', type: type ?? 'people' })
    const navigate = useNavigate();
    if (isFetching) return <div className='loading_comp'>The force of computation flows within...</div>

    if (error) return <ErrorElement redirectPath='/star-war' />
    return (
        <div className='d_cont'>
            <div className='btn-cont'>
                <button type='button' onClick={() => navigate(-1)} className='btn-primary'>
                    Go Back
                </button>
            </div>
            {data && Object.keys(data).map(val =>
                <div className='details'>
                    <div className='details__label'>
                        {val} :
                    </div>
                    <div className='details__value'>
                        {val ?
                            Array.isArray(data[val]) ?
                                <div>
                                    {data[val].length <= 0 ? 'Unknown' : data[val].map((val: string) => {
                                        const generatedPath = val.toLowerCase().replaceAll('https://swapi.dev/api/', '');
                                        return <div className='link' key={val}>
                                            <Link to={`/star-war/details/${generatedPath}`} className='link_val'>{val.toLowerCase()}</Link>
                                        </div>
                                    })}
                                </div> :
                                data[val]
                            : null}
                    </div>
                    <br />
                </div>
            )}
        </div >
    )
}

export default Details