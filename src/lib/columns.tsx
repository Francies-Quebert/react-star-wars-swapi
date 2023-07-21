import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListTypes } from '../slice/typing'


export const getColumns = (type: List<ListTypes>) => {
    switch (type) {
        case 'people':
            return getPeopleColumns('people')
        case 'planets':
            return getPlanetsColumns('planets')
        case 'films':
            return getFlimsColumns('films')
        case 'species':
            return getSpeciesColumns('species')
        case 'starships':
            return getStarshipsColumns('starships')
        case 'vehicles':
            return getVehiclesColumns('vehicles')
        default:
            return getPeopleColumns('people')
    }

}

export const getPeopleColumns = (type: 'people') => {
    return [{
        name: 'Name',
        dataIndex: 'name'
    }, {
        name: 'Gender',
        dataIndex: 'gender'
    }, {
        name: 'Hair Color',
        dataIndex: 'hair_color',
        width: '150px'
    }, {
        name: 'Skin Color',
        dataIndex: 'skin_color',
        width: '150px'
    }, {
        name: 'Height',
        dataIndex: 'height'
    }, {
        name: 'Birth Year',
        dataIndex: 'birth_year'
    },
    {
        name: 'View More',
        render: (data: any) => {
            let val = data.url.replaceAll(`https://swapi.dev/api/${type}`, '').replaceAll('/', '')
            return <Link className='table_view_more' to={`/star-war/details/${type}/${val}`}>View More</Link>
        }
    }]
}

export const getPlanetsColumns = (type: 'planets') => {
    return [{
        name: 'Name',
        dataIndex: 'name'
    }, {
        name: 'Climate',
        dataIndex: 'climate'
    }, {
        name: 'Gravity',
        dataIndex: 'gravity',
        width: '150px'
    }, {
        name: 'Terrain',
        dataIndex: 'terrain',
        width: '150px'
    }, {
        name: 'Diameter (kilometers)',
        dataIndex: 'diameter'
    }, {
        name: 'Population',
        dataIndex: 'population'
    },
    {
        name: 'View More',
        render: (data: any) => {
            let val = data.url.replaceAll(`https://swapi.dev/api/${type}`, '').replaceAll('/', '')
            return <Link className='table_view_more' to={`/star-war/details/${type}/${val}`}>View More</Link>
        }
    }]
}


export const getSpeciesColumns = (type: 'species') => {
    return [{
        name: 'Name',
        dataIndex: 'name'
    }, {
        name: 'Classification',
        dataIndex: 'classification'
    }, {
        name: 'Designation',
        dataIndex: 'designation',
        width: '150px'
    }, {
        name: 'Average Height (cm)',
        dataIndex: 'average_height',
        width: '150px'
    }, {
        name: 'Average Lifespan (years)',
        dataIndex: 'average_lifespan'
    }, {
        name: 'Language',
        dataIndex: 'language'
    },
    {
        name: 'View More',
        render: (data: any) => {
            let val = data.url.replaceAll(`https://swapi.dev/api/${type}`, '').replaceAll('/', '')
            return <Link className='table_view_more' to={`/star-war/details/${type}/${val}`}>View More</Link>
        }
    }]
}


export const getFlimsColumns = (type: 'films') => {
    return [{
        name: 'Name',
        dataIndex: 'title'
    }, {
        name: 'Director',
        dataIndex: 'director'
    }, {
        name: 'Producer',
        dataIndex: 'producer',
        width: '150px'
    }, {
        name: 'Release Date',
        dataIndex: 'release_date',
        width: '150px'
    },
    {
        name: 'View More',
        render: (data: any) => {
            let val = data.url.replaceAll(`https://swapi.dev/api/${type}`, '').replaceAll('/', '')
            return <Link className='table_view_more' to={`/star-war/details/${type}/${val}`}>View More</Link>
        }
    }]
}


export const getStarshipsColumns = (type: 'starships') => {
    return [{
        name: 'Name',
        dataIndex: 'name'
    }, {
        name: 'Model',
        dataIndex: 'model'
    }, {
        name: 'Manufacturer',
        dataIndex: 'manufacturer',
        width: '150px'
    }, {
        name: 'Passengers',
        dataIndex: 'passengers',
        width: '150px'
    }, {
        name: 'Class',
        dataIndex: 'starship_class',
        width: '150px'
    }, 
    {
        name: 'View More',
        render: (data: any) => {
            let val = data.url.replaceAll(`https://swapi.dev/api/${type}`, '').replaceAll('/', '')
            return <Link className='table_view_more' to={`/star-war/details/${type}/${val}`}>View More</Link>
        }
    }]
}

export const getVehiclesColumns = (type: 'vehicles') => {
    return [{
        name: 'Name',
        dataIndex: 'name'
    }, {
        name: 'Model',
        dataIndex: 'model'
    }, {
        name: 'Manufacturer',
        dataIndex: 'manufacturer',
        width: '150px'
    }, {
        name: 'Passengers',
        dataIndex: 'passengers',
        width: '150px'
    }, {
        name: 'Class',
        dataIndex: 'vehicle_class',
        width: '150px'
    }, 
    {
        name: 'View More',
        render: (data: any) => {
            let val = data.url.replaceAll(`https://swapi.dev/api/${type}`, '').replaceAll('/', '')
            return <Link className='table_view_more' to={`/star-war/details/${type}/${val}`}>View More</Link>
        }
    }]
}

