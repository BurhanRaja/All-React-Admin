import React from 'react'
import { SiPrestashop } from 'react-icons/si'
import { Link, NavLink } from 'react-router-dom'
import { links } from '../assets/dummyData'
import { useStateContext } from '../context/StateContext'

const Sidebar = () => {
    const { activeMenu } = useStateContext()

    const selectedItem = 'flex items-center nav-item p-3 mx-3 my-2 rounded-xl hover:cursor-pointer text-white bg-blue-700 '
    const normalItem = 'flex items-center nav-item p-3 mx-3 my-2 rounded-xl hover:bg-light-gray hover:cursor-pointer dark:text-gray-200 dark:hover:text-black'

    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {activeMenu && (<>
                <Link to='/'>
                    <div className="web-title flex items-center p-3 m-2 text-xl mb-6">
                        <div className="text-3xl">
                            <SiPrestashop />
                        </div>
                        <span className='ml-4 font-bold hover:cursor-pointer'>Admin</span>
                    </div>
                </Link>

                <div className="mt-10">
                    {links.map((item) => {
                        return <div className="nav-title" key={item.title}>
                            <p className='text-gray-400 dark:text-gray-400 m-3 uppercase'>{item.title}</p>
                            {item.links.map((linkName) => {
                                return <div key={linkName.name}>
                                <NavLink to={`/${linkName.name}`} className={({ isActive }) => isActive ? selectedItem : normalItem}>
                                        {linkName.icon}
                                        <span className='ml-3 capitalize'>
                                            {linkName.name}
                                        </span>
                                </NavLink>
                                </div>
                            })}
                        </div>
                    })}
                </div>
            </>
            )}

        </div>
    )
}

export default Sidebar
