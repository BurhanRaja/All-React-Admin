import React from 'react'
import { SiPrestashop } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { links } from '../assets/dummyData'

const Sidebar = () => {

    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            <Link to='/'>
                <div className="web-title flex items-center p-3 m-2 text-xl mb-6">
                    <div className="text-3xl">
                        <SiPrestashop />
                    </div>
                    <span className='ml-4 font-bold hover:cursor-pointer'>Admin</span>
                </div>
            </Link>

            {links.map((item) => {
                return <div className="nav-title" key={item.title}>
                    <p className='text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase'>{item.title}</p>
                    {item.links.map((linkName) => {
                        return <Link to={`/${linkName.name}`}>
                            <div className="nav-item p-3 mx-3 my-2 rounded-xl hover:bg-light-gray hover:cursor-pointer flex items-center">
                                {linkName.icon}
                                <span className='ml-3 capitalize'>
                                    {linkName.name}
                                </span>
                            </div>
                        </Link>
                    })}
                </div>
            })}

        </div>
    )
}

export default Sidebar
