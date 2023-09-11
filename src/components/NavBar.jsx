import { Link } from "wouter";

export default function NavBar() {
  return (
    <header>
      <nav>
        <h2>ReservaHotel.com</h2>
        <ul>
          <li>
            <Link href="/">Hoteles</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
