
import React from 'react';
import { BsDot } from 'react-icons/bs';
import { FaRupeeSign } from 'react-icons/fa';
import { earningData } from '../assets/dummyData';
import { Button, Stacked } from '../components';
import LCharts from '../components/Charts/LChart';

const ECommerce = () => {

    return (
        <div className='mt-8'>
            <div className="flex flex-wrap lg:flex-nowrap justify-start p-2">
                <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 p-8 w-full lg:w-80 h-44 rounded-xl bg-no-repeat bg-cover bg-center">
                    <div className="flex items-center justify-between">
                        <div className='text-gray-500'>
                            <p className='text-base font-bold'>Earnings</p>
                            <p className='text-2xl text-black'>₹3,96,000</p>
                        </div>
                        <div className="">
                            <Button name={<FaRupeeSign />} btnStyle="bg-blue-700 text-gray-100 rounded-full p-5 text-xl" />
                        </div>
                    </div>
                    <div className="download-btn mt-4">
                        <Button name='Download' btnStyle="bg-blue-700 text-gray-100 rounded-lg px-4 py-3" />
                    </div>
                </div>
                <div className='flex flex-wrap gap-1 justify-center items-center ml-1 mt-4'>
                    {earningData.map((item, index) => {
                        return <div key={index} className="bg-white md:w-56 h-44 dark:bg-secondary-dark-bg p-4 rounded-lg">
                            <button className='p-4 rounded-full mb-2 text-2xl' style={{ backgroundColor: `${item.iconBg}`, color: `${item.iconColor}` }}>
                                {item.icon}
                            </button>
                            <p className='mb-2'>
                                <span className={`mr-1 font-bold text-xl`}>{item.amount}</span>
                                {/* <div className='text-red-600 text-green-600'></div> */}
                                <span className={`text-sm text-${item.pcColor} ml-1 `}>{item.percentage}</span>
                            </p>
                            <p>{item.title}</p>
                        </div>
                    })}
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                <div className='dark:bg-secondary-dark-bg dark:text-white w-780 p-3 rounded-lg bg-white'>
                    <div className="flex justify-between">
                        <p className='text-2xl'>Revenue Updates</p>
                        <div className="flex items-center">
                            <div className="expense text-gray-500 flex items-center text-xl">
                                <BsDot />
                                <span>Expense</span>
                            </div>
                            <div className="budget text-green-500 flex items-center text-xl">
                                <BsDot />
                                <span>Budget</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-5 p-8">
                        <div className=''>
                            <div className="budget">
                                <p>
                                    <span className='text-3xl font-semibold'>₹ 1,23,456</span>
                                    <span className='bg-green-500 text-white rounded-full p-1 ml-3'>23%</span>
                                </p>
                                <p className='mt-2 text-lg text-gray-500 font-semibold'>Budget</p>
                            </div>
                            <div className="expense mt-8">
                                <p>
                                    <span className='text-3xl font-semibold'>₹ 50,690</span>
                                </p>
                                <p className='mt-2 text-lg text-gray-500 font-semibold'>Expenses</p>
                            </div>
                            <LCharts />
                        </div>
                        <Stacked />
                    </div>
                </div>

                <div className=" rounded-2xl md:w-400 p-4 m-3">
                    <div className="flex justify-between items-center ">
                        <p className="font-semibold text-white text-2xl">Earnings</p>

                        <div>
                            <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
                            <p className="text-gray-200">Monthly revenue</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ECommerce
