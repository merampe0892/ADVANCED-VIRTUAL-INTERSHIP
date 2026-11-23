export default function Navbar() {
  return (
      <nav className=" max-w-267.5 ">
        <div className="max-w-[1070px] mx-auto px-8 flex items-center justify-between">
          <figure className="">
            <img className="w-44" src="../../logo.png" alt="logo" />
          </figure>
          <ul className="flex gap-4">
            <li className="">Login</li>
            <li className="">About</li>
            <li className="">Contact</li>
            <li className="">Help</li>
          </ul>
        </div>
      </nav>
  );
}
