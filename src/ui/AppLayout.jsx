

import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
    <Header />
    <div className='container' >
        {isLoading && <Loader />}
        <div className="overflow-y-scroll">
          <main className="">
          <CartOverview/>
          <Outlet />
          </main>
        </div>
    </div>
    </>

  );
}

export default AppLayout;
