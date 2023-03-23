export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mb-20" data-theme="night">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Employee Manager</a>
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
        <a className="btn">Add Employee</a>
      </div>
    </div>
  );
};
