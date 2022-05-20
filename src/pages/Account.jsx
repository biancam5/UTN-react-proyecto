import React from 'react';
import SavedShows from '../components/SavedShows';
//No llegue   a hacer la vista del account asi que redirige a Home al hacer click, sin embargo si esta hecha la lógica de Account en SavedMovies
const Account = () => {
  return (
    <>
  
      <SavedShows />
    </>
  );
};

export default Account;

