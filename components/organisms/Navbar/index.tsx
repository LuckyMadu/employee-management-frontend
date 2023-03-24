import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mb-20 py-4" data-theme="night">
      <div className="navbar-start">
        <Link href="/" className="text-xl text-white font-semibold">
          | Employee Manager |
        </Link>
      </div>
      <div className="navbar-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
      </div>
      <div className="navbar-end">
        <Link href="/employee/add" className="btn mr-10">
          Add Employee
        </Link>
      </div>
    </div>
  );
};
