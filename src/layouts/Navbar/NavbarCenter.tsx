import { NavLink } from "react-router-dom";
import { v4 } from "uuid";

type Props = {
  categories: string[],
  setSelected: (category: string | null) => void
}

const NavbarCenter = ({categories, setSelected}:Props) => {
    return ( 
        <div className="navbar-center">
        <a className="flex md:hidden btn btn-ghost text-xl">Mini-Ecommerce</a>
        <ul className="hidden md:flex menu menu-horizontal px-1">
          {categories?.map((cat: string) => (
            <li key={v4()}>
              <NavLink to={"/"} role="button" onClick={()=>{setSelected(cat)}}>{cat}</NavLink>
            </li>
          ))}
        </ul>
      </div>
     );
}
 
export default NavbarCenter;