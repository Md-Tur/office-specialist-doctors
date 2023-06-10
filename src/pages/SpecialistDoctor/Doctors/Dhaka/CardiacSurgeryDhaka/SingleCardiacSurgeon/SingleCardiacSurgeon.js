import React from 'react';
import { Link, useParams } from 'react-router-dom';
// images
import rating from '../../../../../../images/Specialist/Star-Rating.png';
import moarraf from '../../../../../../images/Specialist/Dhaka/Cardiac-Surgeon/Prof.-Dr.-Md.-Moarraf-Hossen.jpg';

const SingleCardiacSurgeon = () => {

    const { id } = useParams();

    const doctors = [
        {
            id: 1,
            img: moarraf,
            name: 'Prof. Dr. Md. Moarraf Hossen',
            degree: 'MBBS, DMRT (BSMMU), FCPS (Radiotherapy), Fellowship Training (India, Singapore)',
            specialist: 'Cancer Specialist & Radiation Oncologist',
            chember: 'National Institute of Cancer Research & Hospital',
            rating: rating,
            points: '(64)',
            address: 'Plot # 81, Block # E, Bashundhara R/A, Dhaka',
            visiting: '9am to 5pm (Sat to Thu)',
            appointment: '10678',
            about: 'Prof. Dr. Md. Moarraf Hossen is a Oncologist in Dhaka. His qualification is MBBS, DMRT (BSMMU), FCPS (Radiotherapy), Fellowship Training (India, Singapore). He is a Former Director Cum Professor in the Department of Radiotherapy at National Institute of Cancer Research & Hospital. He regularly provides treatment to his patients at'
        }
    ]

    const doctorDetails = doctors.filter(doctor => doctor.id == id);

    return (
        <div className='container mx-auto px-72'>

            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/">Doctors</Link></p>
            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/dhaka-d">Doctors in Dhaka</Link></p>
            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/cardiac-surgery-d">Cardiothoracic Surgeon in Dhaka</Link></p>

            <div className='mt-3 border p-4 flex justify-center mb-3'>
                <div className='flex flex-col justify-center'>
                    <div className='flex justify-center'>
                        <img className='w-[150px] border border-[#2a7fba] p-[2px]' src={doctorDetails[0].img} alt="doctor" />
                    </div>
                    <div className='flex flex-col text-center justify-center my-3'>
                        <p className='text-2xl font-bold text-[#2a7fba]'>{doctorDetails[0].name}</p>
                        <p className='my-3 text-lg px-3'>{doctorDetails[0].degree}</p>
                        <p className='text-lg font-bold text-red-600'>{doctorDetails[0].specialist}</p>
                        <p className='my-3 text-lg'>{doctorDetails[0].chember}</p>
                        <div className='flex gap-2 justify-center items-center'>
                            <img className='h-7' src={doctorDetails[0].rating} alt="rating" />
                            <p>{doctorDetails[0].points}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border'>
                <h1 className='text-2xl font-bold text-center py-3'>Chamber & Appointment</h1>
                <div className='text-xl text-center border-t py-4'>
                    <p className='text-xl font-bold text-[#2a7fba]'>{doctorDetails[0].chember}</p>
                    <p>Address: {doctorDetails[0].address}</p>
                    <p>Visiting Hour: {doctorDetails[0].visiting}</p>
                    <p>Appointment: {doctorDetails[0].appointment}</p>
                </div>
                <div className='flex justify-center pb-5'>
                    <button className='px-6 py-2 bg-[#2a7fba] rounded-md text-white text-xl font-medium hover:underline hover:bg-green-500'>Call Now</button>
                </div>
            </div>
            <p className='my-3 border text-lg font-bold text-center text-[#FF0000] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">ফ্রিতে কথা বলুন বিশেষজ্ঞ ডাক্তারের সাথে</Link></p>

            <div className='border'>
                <h1 className='text-2xl font-bold text-center py-3'>About {doctorDetails[0].name}</h1>
                <div className='text-lg text-center border-t px-4 py-4'>
                    <p>{doctorDetails[0].about}</p>
                    <p>{doctorDetails[0].chember} is {doctorDetails[0].visiting}</p>
                </div>
            </div>

            <p className='border text-lg text-center py-3 my-3'>Updated on May 31, 2023</p>
        </div>
    );
};

export default SingleCardiacSurgeon;