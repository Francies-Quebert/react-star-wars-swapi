import { Link, NavLink, useParams, useSearchParams } from "react-router-dom"
import { List, ListTypes } from "../../slice/typing"

function NavBar({ isOpen, handleIsOpen }: { isOpen: boolean, handleIsOpen: () => void }) {
  const [searchParams] = useSearchParams()
  let { type: pageType } = useParams();
  const navLink: { name: string, link: string, type: List<ListTypes> }[] = [
    { name: 'People', link: '/star-war', type: 'people' },
    { name: 'Planets', link: '/star-war?type=planets', type: 'planets' },
    { name: 'Flims', link: '/star-war?type=films', type: 'films' },
    { name: 'Species', link: '/star-war?type=species', type: 'species' },
    { name: 'Vehicles', link: '/star-war?type=vehicles', type: 'vehicles' },
    { name: 'Starships', link: '/star-war?type=starships', type: 'starships' },
  ]


  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <h1 className='navbar__head'>Filters</h1>
      <div className="navbar__cont">
        {navLink.map(nl => {
          const type = searchParams.get('type') || pageType || 'people'
          return <div className="navbar__link" key={nl.name}>
            <Link
              onClick={handleIsOpen}
              className={type === nl.type ? 'active' : ''}
              to={nl.link}>
              {nl.name}
            </Link>
          </div>
        })}
      </div>
    </div>
  )
}

export default NavBar