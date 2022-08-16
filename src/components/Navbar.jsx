import { Avatar, Tooltip, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { BsChatLeft } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdOutlineMenu } from 'react-icons/md'
import { RiArrowDropDownLine } from 'react-icons/ri'
import avatar from '../assets/avatar.jpg'

const Navbar = () => {

    const avatarName = 'Kent Dodds'

    return (
        <div className='flex justify-between items-center p-2 md:ml-6 md:mr-6 relative'>
            <div className="menu-btn">
                <Tooltip hasArrow label='Menu' placement='bottom'>
                    <button className='text-2xl font-bold p-3 hover:bg-light-gray' style={{ color: 'blue', borderRadius: '50%' }}>
                        <MdOutlineMenu />
                    </button>
                </Tooltip>
            </div>
            <div className="flex">
                <Tooltip hasArrow label='Cart' placement='bottom'>
                    <button className='mx-1 p-3 text-xl rounded-full hover:bg-light-gray' style={{ color: 'blue' }}>
                        <FiShoppingCart />
                    </button>
                </Tooltip>

                <Tooltip hasArrow label='Chat' placement='bottom'>
                    <button className='mx-1 p-3 text-xl rounded-full hover:bg-light-gray' style={{ color: 'blue' }}>
                        <BsChatLeft />
                    </button>
                </Tooltip>

                <Tooltip hasArrow label='Notification' placement='bottom'>
                    <button className='mx-1 p-3 text-xl rounded-full hover:bg-light-gray' style={{ color: 'blue' }}>
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
