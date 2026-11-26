export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="max-w-[1070px] mx-auto px-6 py-4 flex items-center justify-between">
        <figure className="w-40">
          <img src="../../logo.png" alt="logo" />
        </figure>
        <ul className="flex gap-4">
          <li>Login</li>
          <li>About</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </div>
    </nav>
  );
}
