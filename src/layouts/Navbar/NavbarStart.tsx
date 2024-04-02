import { BiMenu } from "react-icons/bi";
import { v4 } from "uuid";
type Props = {
  categories: string[],
  setSelected: (category: string | null) => void
}

const NavbarStart = ({categories, setSelected}:Props) => {
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
            <li key={v4()}>
              <a role="button" onClick={() => { setSelected(cat) }}>{cat}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarStart;
