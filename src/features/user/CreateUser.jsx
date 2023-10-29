import { useState } from 'react';
import Button from '../../ui/Button';

import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { updateName } from './userNameSlice';



function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  function handleSubmit(e) {
    e.preventDefault();

    if(!username) return

    dispatch(updateName(username))
    navigate('/menu')

  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-red-100 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-full rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
