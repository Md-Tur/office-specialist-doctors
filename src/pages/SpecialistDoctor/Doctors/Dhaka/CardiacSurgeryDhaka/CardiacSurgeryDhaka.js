import React from 'react';
import { Link } from 'react-router-dom';
// images
import moarraf from '../../../../../images/Specialist/Dhaka/Cardiac-Surgeon/Prof.-Dr.-Md.-Moarraf-Hossen.jpg';

const CardiacSurgeryDhaka = () => {

    const doctors = [
        {
            id: 1,
            img: moarraf,
            name: 'Prof. Dr. Md. Moarraf Hossen',
            degree: 'MBBS, DMRT (BSMMU), FCPS (Radiotherapy), Fellowship Training (India, Singapore)',
            specialist: 'Cancer Specialist & Radiation Oncologist',
            chember: 'National Institute of Cancer Research & Hospital'
        }
    ]

    return (
        <div className='container mx-auto px-72'>

            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/">Doctors</Link></p>
            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/dhaka-d">Doctors in Dhaka</Link></p>
            <p className='my-3 border text-3xl text-center text-black font-semibold py-3'>Cardiovascular & Thoracic Surgeon in Dhaka</p>
            <p className='text-lg text-center border px-4 py-4'>A Cardiovascular & Thoracic is a medical doctor who specializes in surgery of the heart, lungs, esophagus, & <br />other organs in the chest. Here in this page you can find out & choose the best cardiovascular surgeon & thoracic <br />surgeon in Dhaka with their chamber information & contact number.</p>
            <p className='my-3 border text-3xl text-center text-black font-semibold py-3'>List of the Best Cardiovascular & Thoracic Surgeon in Dhaka</p>

            {
                doctors.map(doctor =>
                    <div key={doctor.id} className='border p-4 flex justify-center mb-3'>
                        <div className='flex flex-col justify-center'>
                            <div className='flex justify-center'>
                                <img className='w-[150px] border border-[#2a7fba] p-[2px]' src={doctor.img} alt={doctor.name} />
                            </div>
                            <div className='flex flex-col text-center justify-center my-3'>
                                <p className='text-2xl font-bold text-[#2a7fba]'>{doctor.name}</p>
                                <p className='my-3 text-lg px-3'>{doctor.degree}</p>
                                <p className='text-lg font-bold text-red-600'>{doctor.specialist}</p>
                                <p className='my-3 text-lg'>{doctor.chember}</p>
                                <div>
                                    <button className='px-5 py-2 bg-[#2a7fba] rounded-md text-white text-xl font-normal hover:underline hover:bg-green-500'><Link to={`/dhaka-cardiacSurgeon/${doctor.id}`}>See Details</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <p className='border text-lg text-center py-3 my-3'>Updated on December 11, 2022</p>
        </div>
    );
};

export default CardiacSurgeryDhaka;