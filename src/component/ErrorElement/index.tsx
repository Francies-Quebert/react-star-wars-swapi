import React from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

type Props = {
    redirectPath?: string
}
function ErrorElement({ redirectPath }: Props) {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    return (
        <div>
            <div className='p-2'>
                The virtual pathways falter...
            </div>
            <div>
                <div>
                    <button
                        onClick={() => {
                            if (redirectPath) return navigate(redirectPath)
                            setSearchParams({ type: searchParams.get('type') ?? 'people', page: '1' })
                        }}
                        type='button'
                        className='btn-primary'>
                        Go back</button>
                </div>
            </div>
        </div>
    )
}

export default ErrorElement