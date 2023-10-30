

import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
    <div className='container grid h-screen grid-rows-[auto_auto_1fr] ' >
        {isLoading && <Loader />}
        <Header />
        <CartOverview/>
        <div className='overflow-y-scroll' >
          <main className="mx-auto max-w-3xl">
          <Outlet />
          </main>
        </div>
    </div>
    </>

  );
}

export default AppLayout;
