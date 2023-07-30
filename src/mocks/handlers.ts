import { rest } from 'msw';
import { IPeople } from '../typing';
import { ListResponse } from '../slice/typing';


const people: ListResponse<Pick<IPeople, 'name' | 'hair_color' | 'gender' | 'skin_color' | 'height' | 'birth_year' | 'url'>> = {
    "count": 82,
    "next": "https://swapi.dev/api/people/?page=2",
    "previous": null,
    "results": [
        {
            "name": "Luke Skywalker",
            "height": "172",
            "hair_color": "blond",
            "skin_color": "fair",
            "birth_year": "19BBY",
            "gender": "male",
            "url": "https://swapi.dev/api/people/1/"
        },
    ]
}

export const handlers = [
    rest.get('https://swapi.dev/api/:type', (req, res, ctx) => {
        const pageNo = req.url.searchParams.get('page')
        const type = req.params.type
        if (type == 'people') {
            return res(
                ctx.json(
                    people
                ))
        }
    }),
    // rest.get('https://swapi.dev/api/:type/:id', (req, res, ctx) => {
    //     const type = req.params.type
    //     const id = req.params.id
    //     console.log('mocking data',type,id)
    //     if (type == 'people' && id == '1') {
    //         return res(
    //             ctx.json(
    //                 people.results
    //             ))
    //     }
    // })
]
