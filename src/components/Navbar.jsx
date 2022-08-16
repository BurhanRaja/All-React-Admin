import { Avatar, Tooltip, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { BsChatLeft } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineMenu } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';
import avatar from '../assets/avatar.jpg';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {

    const avatarName = 'Kent Dodds'

    const { activeMenu, setActiveMenu } = useStateContext()

    return (
        <div className='flex justify-between items-center p-2 md:ml-6 md:mr-6 relative'>
            <div className="menu-btn">
                <Tooltip hasArrow label='Menu' placement='bottom'>
                    <button className='text-2xl font-bold p-3 hover:bg-light-gray' style={{ color: 'blue', borderRadius: '50%' }} onClick={() => setActiveMenu(!activeMenu)}>
                        <MdOutlineMenu />
                    </button>
                </Tooltip>
            </div>
            <div className="flex">
                <Tooltip hasArrow label='Cart' placement='bottom'>
                    <button className='relative mx-1 p-3 text-xl rounded-full hover:bg-light-gray' style={{ color: 'blue' }}>
                        <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 bg-yellow-400"></span>
                        <FiShoppingCart />
                    </button>
                </Tooltip>

                <Tooltip hasArrow label='Chat' placement='bottom'>
                    <button className='relative mx-1 p-3 text-xl rounded-full hover:bg-light-gray' style={{ color: 'blue' }}>
                        <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 bg-yellow-400"></span>
                        <BsChatLeft />
                    </button>
                </Tooltip>

                <Tooltip hasArrow label='Notification' placement='bottom'>
                    <button className='relative mx-1 p-3 text-xl rounded-full hover:bg-light-gray' style={{ color: 'blue' }}>
                        <span className="absolute inline-flex rounded-full h-2 w-2 right-3 top-3 bg-yellow-400"></span>
                        <IoMdNotificationsOutline />
                    </button>
                </Tooltip>

                <Tooltip hasArrow label='Profile' placement='bottom'>
                    <div className="profile flex items-center p-1 hover:bg-light-gray hover:cursor-pointer rounded-lg">
                        <div className="avatar-btn">
                            <WrapItem>
                                <Avatar size='sm' name={avatarName} src={avatar} />{' '}
                            </WrapItem>
                        </div>
                        <div className="name-tag ml-1">
                            <span>Hi, <b className='text-gray-500'>{avatarName}</b></span>
                        </div>
                        <div className="dropDown text-lg">
                            <RiArrowDropDownLine />
                        </div>
                    </div>
                </Tooltip>
            </div>
        </div>
    )
}

export default Navbar
