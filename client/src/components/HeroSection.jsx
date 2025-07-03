import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { Calendar1Icon, ClockIcon, ArrowRight} from 'lucide-react'

const HeroSection = () => {

    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16
        lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>

            <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold
            max-w-110'>Wicked</h1>

            <div className='flex items-center gap-4 text-gray-300'>
                <span>Musical</span>
                <div className='flex items-center gap-1'>
                    <Calendar1Icon className='w-4.5 h-4.5'/>Now Playing
                </div>
                <div className='flex items-center gap-1'>
                    <ClockIcon className='w-4.5 h-4.5'/>2h 45m
                </div>
            </div>
            <p className='max-w-md text-gray-300'></p>
            <button onClick={()=>navigate('/movies')}className='flex items-enter gap-1 px-6 py-3 text-sm bg-primary
            hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
                Explore Shows
                <ArrowRight className='w-5 h-5'/>
            </button>
        </div>
    )
}

export default HeroSection