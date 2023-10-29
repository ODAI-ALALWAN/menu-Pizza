

import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
    <div className="grid h-screen grid-rows-[auto_[600px]_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-y-scroll">
        <main className="mx-auto max-w-3xl">
        <CartOverview/>
        <Outlet />
        </main>
      </div>
    </div>
  </>
  );
}

export default AppLayout;
