import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';



function Header() {
  return (
    <>
    <header className="flex items-center justify-between border-b border-stone-200 bg-red-400 px-4 py-6 uppercase sm:px-6 h-10">
      <Link to="/" className="tracking-widest">
        Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
    </>
  );
}

export default Header;
