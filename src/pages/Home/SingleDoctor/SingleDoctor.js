import React from 'react';
import rating from '../../../images/members/Star-Rating.png';
import mahboob from '../../../images/Dr.-Mahboob-Mustafa-Zaman.jpg';
import imran from '../../../images/Dr.-Md.-Imran-Hossain.jpg';
import kamrunnessa from '../../../images/Prof.-Dr.-Kamrunnessa.jpg';
import { Link, useParams } from 'react-router-dom';

const SingleDoctor = () => {

    const { id } = useParams();

    const doctors = [
        {
            id: 1,
            img: mahboob,
            name: 'Dr. Mahboob Mustafa Zaman',
            degree: 'MBBS, FCPS (Medicine), MRCP (UK)',
            specialist: 'Internal Medicine (All Diseases of Adults) Specialist',
            chember: 'BRB Hospital, Dhaka',
            rating: rating,
            points: '(3)'
        },
        {
            id: 2,
            img: imran,
            name: 'Dr. Md. Imran Hossain',
            degree: 'BDS (DU), MSS (Clinical) DU, MPH (USA), PGT (Orthodontic), PGT (OMS) BSMMU Research Fellow & Surgeon (STRC Project, Smile Train, USA), Advanced Implantology (Thailand), Invisalign (Thailand & India), Advance Training in Fixed Orthodontic Braces, Implantology & Laser Dentistry (India)',
            specialist: 'Dental Implant, Invisalign, Dental Braces, Smile Design, Oral Surgery & Tooth Whitening Specialist',
            chember: 'Dental View Orthodontics & Implant Center',
            rating: rating,
            points: '(7)'
        },
        {
            id: 3,
            img: kamrunnessa,
            name: 'Prof. Dr. Kamrunnessa',
            degree: 'MBBS, MCPS, FCPS (OBGYN), MPH (Epidemiology), FMAS (India), FART (India)',
            specialist: 'Gynecology, Infertility Specialist & Laparoscopic Surgeon',
            chember: 'BRB Hospital, Dhaka',
            rating: rating,
            points: '(11)'
        }
    ]

    const doctorDetails = doctors.filter(doctor => doctor.id == id);
    console.log(doctorDetails)

    return (
        <div className='container mx-auto px-72'>

            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/">Doctors</Link></p>
            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/">Doctors in Dhaka</Link></p>
            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/">Medicine Specialist in Dhaka</Link></p>

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
                    <p className='text-xl font-bold text-[#2a7fba]'>BRB Hospital, Dhaka</p>
                    <p>Address: 77/A, East Rajabazar, West Panthapath, Dhaka</p>
                    <p>Visiting Hour: 9am to 6pm (Closed: Friday)</p>
                    <p>Appointment: 10647</p>
                </div>
                <div className='flex justify-center pb-5'>
                    <button className='px-6 py-2 bg-[#2a7fba] rounded-md text-white text-xl font-medium hover:underline hover:bg-green-500'>Call Now</button>
                </div>
            </div>
            <p className='my-3 border text-lg font-bold text-center text-[#FF0000] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">ফ্রিতে কথা বলুন বিশেষজ্ঞ ডাক্তারের সাথে</Link></p>

            <div className='border'>
                <h1 className='text-2xl font-bold text-center py-3'>About Dr. Mahboob Mustafa Zaman</h1>
                <p className='text-lg text-center border-t px-3 py-4'>Dr. Mahboob Mustafa Zaman is a Medicine Specialist in Dhaka. His qualification is MBBS, FCPS (Medicine), MRCP (UK). He is a Consultant in the Department of Internal Medicine at BRB Hospital, Dhaka. He regularly provides treatment to his patients at BRB Hospital, Dhaka. Practicing hour of Dr. Mahboob Mustafa Zaman at BRB Hospital, Dhaka is 9am to 6pm (Closed: Friday).</p>
            </div>
            <p className='my-3 border text-2xl font-bold text-center py-3'>More Medicine Specialist in Dhaka</p>

            <p className='border text-lg text-center py-3 mb-3'>Updated on May 13, 2023</p>
        </div>
    );
};

export default SingleDoctor;