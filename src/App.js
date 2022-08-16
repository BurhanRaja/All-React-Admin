import { ChakraProvider, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Sidebar } from './components';
import { useStateContext } from './context/StateContext';
import { Area, Bar, Calendar, ColorMapping, ColorPicker, Customers, ECommerce, Editor, Employees, Financial, Kanban, Line, Orders, Pie, Pyramid, Stacked } from './pages';

import './App.css';

function App() {

  const { activeMenu } = useStateContext()

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
              <Sidebar />
            </div>
          ) : (
            <div className='hidden dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed navbar md:static bg-main-bg dark:bg-main-dark-bg w-full'>
              <Navbar />
            </div>
          
          <div>
            <Routes>
              {/* Home */}
              <Route path='/' element={<ECommerce />} />
              <Route path='/ecommerce' element={<ECommerce />} />

              {/* Pages */}
              <Route path='/orders' element={<Orders />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customers />} />

              {/* Apps */}
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/color-picker' element={<ColorPicker />} />

              {/* Charts */}
              <Route path='/line' element={<Line />} />
              <Route path='/Area' element={<Area />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/financial' element={<Financial />} />
              <Route path='/color-mapping' element={<ColorMapping />} />
              <Route path='/pyramid' element={<Pyramid />} />
              <Route path='/stacked' element={<Stacked />} />
            </Routes>
          </div>
          </div>
        </div>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
