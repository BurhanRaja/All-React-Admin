import { ChakraProvider, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { BrowserRouter, Routes } from 'react-router-dom';

import './App.css';

function App() {

  const activeMenu = false

  return (
    <ChakraProvider>
      <div>
        <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <Tooltip hasArrow label='Settings' placement='top' bg='gray.600' >
              <button type='button' className='text-3xl p-3 text-white' style={{ background: 'blue', borderRadius: '50%' }} >
                <FiSettings />
              </button>
            </Tooltip>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              Sidebar
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              {/* Sidebar */}
            </div>
          )}
          <div className={`dark:bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              
            </Routes>
          </div>
        </div>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
