import { BiMenu } from "react-icons/bi";
type Props = {
    categories: string[]
}

const NavbarStart = ({categories}:Props) => {
  return (
    <div className="navbar-start">
      <a className="hidden md:flex btn btn-ghost text-xl">Mini-Ecommerce</a>
      <div className="dropdown md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <BiMenu className="size-5"/>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {categories?.map((cat: string) => (
            <li>
              <a href="">{cat}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarStart;
