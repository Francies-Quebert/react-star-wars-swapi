interface ListResponse<T> {
    "count": number,
    "next": null | string,
    "previous": null | string,
    "results": T[]
}


type ListTypes = 'people' | 'planets' | 'films' | 'species' | 'vehicles' | 'starships' 

type List<T extends string> = T | Omit<string, T>
export {
    ListResponse,
    ListTypes,
    List
}