import CreateUser from '../features/user/CreateUser';

import pizza1 from '../Photo/pizza-1.jpg'
import pizza9 from '../Photo/pizza-9.jpg'
import pizza6 from '../Photo/pizza-6.jpg'
import pizza14 from '../Photo/pizza-14.jpg'
import { useSelector } from 'react-redux';

import Button from './Button';

function Home() {
  const userName = useSelector( (state) => state.user.username )

  return (
    <>
    <div className='flex justify-center items-center' >
      <div className='contrast-50 brightness-50 z-0' >
      <img src={pizza1} alt={pizza1} />
      <img src={pizza9} alt={pizza9} /> 
      </div>
      <div className='contrast-50 brightness-50 z-0'>
      <img src={pizza6} alt={pizza6} /> 
      <img src={pizza14} alt={pizza14} /> 
      </div>
      <div className="my-10 px-4 text-center sm:my-16 z-10 absolute inset-20 sm:absolute top-[10%] ">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl sm:text-xs text-slate-50 ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

        {userName === '' ?  ( <CreateUser /> ) 
        : (
          <Button to='/menu' type='primary'> Continue ordering , {userName} </Button>
        ) }
       </div>
    
      </div>




    
    
    </>

  );
}

export default Home;
