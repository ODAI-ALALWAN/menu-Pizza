import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import CartOverview from '../features/cart/CartOverview';


function Header() {
  return (
    <>
    <CartOverview/>
    <header className="flex items-center justify-between border-b border-stone-200 bg-red-400 px-2 py-2 uppercase sm:px-6 h-10">
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
