import { BsCart2 } from "react-icons/bs";

const NavbarEnd = () => {
  return (
    <div className="navbar-end">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="mr-5 group hover:text-orange-500"
        >
          <div className="indicator">
            <BsCart2 className="size-5" />
            <span className="badge badge-sm indicator-item bg-base-300 group-hover:text-orange-500">
              8
            </span>
          </div>
        </div>
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow border"
        >
          <div className="card-body">
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
            </div>
            <div className="card-actions">
              <button className="btn btn-primary btn-outline min-h-0 h-fit mx-auto py-2 rounded-full hover:!text-white">
                View cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarEnd;
