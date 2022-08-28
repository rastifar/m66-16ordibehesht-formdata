import {NavLink, Outlet, Link} from 'react-router-dom'
import { Navbar } from '../components/Navbar';
export default function Welcome() {
  return (
    <main style={{ padding: "1rem 0" }}>
       <Navbar/>
      <Outlet />
    </main>
  );
}
