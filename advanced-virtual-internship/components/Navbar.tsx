export default function Navbar() {
  return (
    <div className="h-20">
      <nav className="flex items-center justify-between mx-auto px-4 py-2">
        <figure className="">
          <img className="w-48" src="../../logo.png" alt="logo" />
        </figure>
        <ul className="flex items-center gap-4">
          <li className="">Login</li>
          <li className="">About</li>
          <li className="">Contact</li>
          <li className="">Help</li>
        </ul>
      </nav>
    </div>
  );
}
