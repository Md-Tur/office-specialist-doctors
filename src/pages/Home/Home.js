import React from 'react';
import { Link } from 'react-router-dom';
import mahboob from '../../images/Dr.-Mahboob-Mustafa-Zaman.jpg';
import imran from '../../images/Dr.-Md.-Imran-Hossain.jpg';
import kamrunnessa from '../../images/Prof.-Dr.-Kamrunnessa.jpg';
import snigdha from '../../images/Dr.-Snigdha-Sarker-Chini.jpg';
import fahad from '../../images/Dr.-Md.-Fahad-Bin-Alauddin.jpg';
import harun from '../../images/Dr.-Mohammad-Harun-Or-Rashid.jpg';
import nusrat from '../../images/Dr.-Ummul-Nusrat-Jahan.jpg';
import farzana from '../../images/Dr.-Farzana-Ahmed.jpg';
import ayesha from '../../images/Dr.-Ayesha-Hasina.jpg';
import ariful from '../../images/icon.png';
import aditi from '../../images/Dr-.-Aditi-Paul-Chowdhury.jpg';
import tanbir from '../../images/Dr.-Tanbir-Ahmad.jpg';

const Home = () => {

    const doctors = [
        {
            id: 1,
            img: mahboob,
            name: 'Dr. Mahboob Mustafa Zaman',
            degree: 'MBBS, FCPS (Medicine), MRCP (UK)',
            specialist: 'Internal Medicine (All Diseases of Adults) Specialist',
            chember: 'BRB Hospital, Dhaka'
        },
        {
            id: 2,
            img: imran,
            name: 'Dr. Md. Imran Hossain',
            degree: 'BDS (DU), MSS (Clinical) DU, MPH (USA), PGT (Orthodontic), PGT (OMS) BSMMU Research Fellow & Surgeon (STRC Project, Smile Train, USA), Advanced Implantology (Thailand), Invisalign (Thailand & India), Advance Training in Fixed Orthodontic Braces, Implantology & Laser Dentistry (India)',
            specialist: 'Dental Implant, Invisalign, Dental Braces, Smile Design, Oral Surgery & Tooth Whitening Specialist',
            chember: 'Dental View Orthodontics & Implant Center'
        },
        {
            id: 3,
            img: kamrunnessa,
            name: 'Prof. Dr. Kamrunnessa',
            degree: 'MBBS, MCPS, FCPS (OBGYN), MPH (Epidemiology), FMAS (India), FART (India)',
            specialist: 'Gynecology, Infertility Specialist & Laparoscopic Surgeon',
            chember: 'BRB Hospital, Dhaka'
        },
        {
            id: 4,
            img: snigdha,
            name: 'Dr. Snigdha Sarker (Chini)',
            degree: 'MBBS, MD (Neurology)',
            specialist: 'Neurology (Brain, Stroke, Nerve, Headache, Migraine) Specialist',
            chember: 'International Medical College & Hospital, Gazipur'
        },
        {
            id: 5,
            img: fahad,
            name: 'Dr. Md. Fahad-Bin-Alauddin',
            degree: 'MBBS (DU), MD (Psychiatry-BSMMU)',
            specialist: 'Psychiatry (Mental Diseases, Brain Disorder, Drug Addiction) Specialist',
            chember: 'International Medical College & Hospital, Gazipur'
        },
        {
            id: 6,
            img: harun,
            name: 'Dr. Mohammad Harun-Or-Rashid',
            degree: 'MBBS (DMC), BCS (Health) FCPS (Surgery), MS (Colorectal Surgery), MRCS (Edin), FACS (USA)',
            specialist: 'Colorectal (Piles, Colon, Rectum, Anus) & Laparoscopic Surgeon',
            chember: 'Dhaka Medical College & Hospital'
        },
        {
            id: 7,
            img: nusrat,
            name: 'Dr. Ummul Nusrat Jahan',
            degree: 'MBBS, FCPS (OBGYN), MRCOG (UK)',
            specialist: 'Highly Trained in Infertility & Laparoscopic Surgery (India) Gynecology, Obstetrics, Infertility Specialist & Laparoscopic Surgeon',
            chember: 'BRB Hospital, Dhaka'
        },
        {
            id: 8,
            img: farzana,
            name: 'Dr. Farzana Ahmed',
            degree: 'MBBS, FCPS (Pediatrics), FCPS (Neonatology), FRCP (Edinburgh)',
            specialist: 'Newborn Adolescent, & Child Diseases Specialist',
            chember: 'Marks Medical College & Hospital'
        },
        {
            id: 9,
            img: ayesha,
            name: 'Dr. Ayesha Hasina',
            degree: 'MBBS, MCPS, FCPS (Pediatrics), MD (Neonatology)',
            specialist: 'Newborn & Child Diseases Specialist',
            chember: 'BRB Hospital, Dhaka'
        },
        {
            id: 10,
            img: ariful,
            name: 'Dr. Md. Ariful Islam',
            degree: 'MBBS, D-CARD (Cardiology)',
            specialist: 'Cardiology Specialist',
            chember: 'Rajshahi Medical College & Hospital'
        },
        {
            id: 11,
            img: aditi,
            name: 'Dr . Aditi Paul Chowdhury',
            degree: 'MBBS, MD (ONCOLOGY)',
            specialist: 'Cancer Specialist',
            chember: 'Ahsania Mission Cancer & General Hospital'
        },
        {
            id: 12,
            img: tanbir,
            name: 'Dr. Tanbir Ahmad',
            degree: 'BHMS (Homeopathy, Dhaka University) MSS in CSW (ISWR, Dhaka University) PGT (Psychotherapy, BSMMU), MPhil (ISWR, Dhaka University)',
            specialist: 'Sexual Diseases, Autism, Psychological Disease, Asthma & Any Kind of Chronic Disease Specialist',
            chember: 'Bangladesh Homeopathy Health Center, Uttara, Dhaka'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Specialist Doctors List in Bangladesh</p>

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
                                    <button className='px-5 py-2 bg-[#2a7fba] rounded-md text-white text-xl font-normal hover:underline hover:bg-green-500'><Link to={`/doctor-details/${doctor.id}`}>See Details</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* speciality */}
            <div className='border'>
                <p className='flex justify-center py-2 text-black p-4 text-3xl font-medium'>Specialty Wise Doctors List</p>
                <div className='border-t px-10 py-5'>
                    <div className='flex justify-between gap-3 text-white text-center text-lg font-medium'>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/dhaka-d'>Dhaka</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/chittagong-d'>Chittagong</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/rajshahi-d'>Rajshahi</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/sylhet-d'>Sylhet</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/rangpur-d'>Rangpur</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/khulna-d'>Khulna</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/barisal-d'>Barisal</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/mymensingh-d'>Mymensingh</Link></p>
                    </div>
                    <div className='mt-2 flex justify-center gap-4 text-white text-center text-lg font-medium'>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/pabna-d'>Pabna</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/bogra-d'>Bogra</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/comilla-d'>Comilla</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/narayanganj-d'>Narayanganj</Link></p>
                    </div>
                </div>
            </div>

            {/* hospitals */}
            <div className='my-3 border'>
                <p className='flex justify-center py-2 text-black p-4 text-3xl font-medium'>Hospital Wise Doctors List</p>
                <div className='border-t px-10 py-5'>
                    <div className='flex justify-between gap-3 text-white text-center text-lg font-medium'>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/dhaka-h'>Dhaka</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/chittagong-h'>Chittagong</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/rajshahi-h'>Rajshahi</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/sylhet-h'>Sylhet</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/rangpur-h'>Rangpur</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/khulna-h'>Khulna</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/barisal-h'>Barisal</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/mymensingh-h'>Mymensingh</Link></p>
                    </div>
                    <div className='mt-2 flex justify-center gap-4 text-white text-center text-lg font-medium'>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/pabna-h'>Pabna</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/bogra-h'>Bogra</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/comilla-h'>Comilla</Link></p>
                        <p className='bg-[#2a7fba] px-3 py-2 rounded-md hover:underline hover:bg-green-500 hover:cursor-pointer'><Link to='/narayanganj-h'>Narayanganj</Link></p>
                    </div>
                </div>
            </div>

            <div className='border my-3 px-5 py-3 text-center text-lg'>
                <p>Doctor Bangladesh is the most trusted and the largest doctor directory in Bangladesh that will connect you to top-notch doctors and hospitals to identify and make the right healthcare choices. You can search for the best doctors, read about them, view photographs of the doctors and the places at which the doctor’s chamber is located. Our services are FREE and by using our services your hospital bill does not increase!</p>
            </div>
        </div>
    );
};

export default Home;