type Props = {
    categories: string[]
}

const NavbarCenter = ({categories}:Props) => {
    return ( 
        <div className="navbar-center">
        <a className="flex md:hidden btn btn-ghost text-xl">Mini-Ecommerce</a>
        <ul className="hidden md:flex menu menu-horizontal px-1">
          {categories?.map((cat: string) => (
            <li>
              <a href="">{cat}</a>
            </li>
          ))}
        </ul>
      </div>
     );
}
 
export default NavbarCenter;