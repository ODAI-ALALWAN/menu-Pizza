

import Header from './Header';
import Loader from './Loader';

import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
    <div className="grid grid-rows-[auto_[600px]_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-y-scroll">
        <main className="mx-auto max-w-3xl">
        <Outlet />
        </main>
      </div>
    </div>
  </>
  );
}

export default AppLayout;
