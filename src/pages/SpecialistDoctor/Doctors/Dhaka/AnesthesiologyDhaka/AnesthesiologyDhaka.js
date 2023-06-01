import React from 'react';
import { Link } from 'react-router-dom';
// images
import jonaid from '../../../../../images/Specialist/Dhaka/Anesthesiology/Prof.-Dr.-Md.-Jonaid-Shafiq.jpg';
import moinul from '../../../../../images/Specialist/Dhaka/Anesthesiology/Prof.-Dr.-Moinul-Hossain.jpg';
import delwar from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-MHM-Delwar-Hossain.jpg';
import lutful from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Lutful-Aziz.jpg';
import asaduzzaman from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-A.K.M.-Asaduzzaman.jpg';
import mahbubul from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Md.-Mahbubul-Hasan.jpg';
import shah from '../../../../../images/Specialist/Dhaka/Anesthesiology/dr-male.jpg';
import rezaul from '../../../../../images/Specialist/Dhaka/Anesthesiology/Prof.-Dr.-Md.-Rezaul-Hoque.jpg';
import kamal from '../../../../../images/Specialist/Dhaka/Anesthesiology/Prof.-Dr.-Kamal-Ibrahim.jpg';
import tahmina from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Tahmina-Banu.jpg';
import azharul from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Md.-Azharul-Islam.jpg';
import chanchal from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Chanchal-Kumar-Devnath.jpg';
import hasina from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Hasina-Akhter.jpg';
import zulfiqar from '../../../../../images/Specialist/Dhaka/Anesthesiology/Prof.-Dr.-Md.-Zulfiqar-Hasan.jpg';
import rabeya from '../../../../../images/Specialist/Dhaka/Anesthesiology/dr-female.jpg';
import didarul from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Md.-Didarul-Alam.jpg';
import shukha from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Shukha-Ranjan-Das.jpg';
import akhtaruzzaman from '../../../../../images/Specialist/Dhaka/Anesthesiology/Prof.-Dr.-AKM-Akhtaruzzaman.jpg';
import iqbal from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Md.-Iqbal.jpg';
import bhabesh from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Bhabesh-Chandra-Mondal.jpg';
import shahidur from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-M-M-Shahidur-Rahman.jpg';
import mushfiqur from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Md.-Mushfiqur-Rahman.jpg';
import shahid from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Shahid-Ahmed-Chowdhury.jpg';
import wahiuddin from '../../../../../images/Specialist/Dhaka/Anesthesiology/Prof.-Dr.-Wahiuddin-Mahmood.jpg';
import ranadhir from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Ranadhir-Kumar-Kundu.jpg';
import mohammad from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Mohammad-Johirul-Islam.jpg';
import shyama from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Shyama-Prosad-Mitra.jpg';
import ashia from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Ashia-Ali.jpg';
import muhammad from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Shah-Muhammad-Ali.jpg';
import quamrul from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Md.-Quamrul-Islam.jpg';
import munshi from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Munshi-Kalamur-Rahman.jpg';
import istaque from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Istaque-Ahmed-Milton.jpg';
import nazmul from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Brig.-Gen.-Md.-Nazmul-Ahsan.jpg';
import rabiul from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Md.-Rabiul-Alam.jpg';
import moinulHoque from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Brig.-Gen.-Md.-Nazmul-Ahsan.jpg';
import jayed from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-M.M.-Jayed-Hossain-chowdhury.jpg';
import abu from '../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Abu-Naser-Muhammad-Badruddoza.jpg';

const AnesthesiologyDhaka = () => {

    const doctors = [
        {
            id: 1,
            img: jonaid,
            name: 'Prof. Dr. Jonaid Shafiq',
            degree: 'MBBS (DMC), PhD (Anesthesiology, Japan)',
            specialist: 'Anesthesiology, Pain Management & Critical Care Medicine Specialist',
            chember: 'Japan Bangladesh Friendship Hospital'
        },
        {
            id: 2,
            img: moinul,
            name: 'Prof. Dr. Moinul Hossain',
            degree: 'MBBS, FCPS (Anesthesiology), Training (Japan)',
            specialist: 'Pain Management Specialist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 3,
            img: delwar,
            name: 'Brig. Gen. Prof. Dr. MHM Delwar Hossain',
            degree: 'MBBS, DA, MCPS, FCPS (Anesthesiology)',
            specialist: 'Pain Management, ICU, CCU Specialist & Anesthesiologist',
            chember: 'Combined Military Hospital, Dhaka'
        },
        {
            id: 4,
            img: lutful,
            name: 'Dr. Lutful Aziz',
            degree: 'MBBS, FCPS (Anesthesiology), PhD (Japan)',
            specialist: 'Anesthesia, Pain Management, & Critical Care Medicine Specialist',
            chember: 'Evercare Hospital, Dhaka'
        },
        {
            id: 5,
            img: asaduzzaman,
            name: 'Dr. A.K.M. Asaduzzaman',
            degree: 'MBBS, DA (DU), FIPM (India), Fellowship in Pain Management (India)',
            specialist: 'Interventional Pain Specialist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 6,
            img: mahbubul,
            name: 'Prof. Dr. Md. Mahbubul Hasan Monir',
            degree: 'MBBS, FCPS (Anesthesiology)',
            specialist: 'Pain Medicine Specialist & Anesthesiologist',
            chember: 'Birdem General Hospital & Ibrahim Medical College'
        },
        {
            id: 7,
            img: shah,
            name: 'Prof. Dr. Md. Shah Alam',
            degree: 'MBBS, DA, FCPS (Anesthesiology)',
            specialist: 'Anesthesiology, Pain Management & ICU Specialist',
            chember: 'Ibn Sina Medical College & Hospital'
        },
        {
            id: 8,
            img: rezaul,
            name: 'Prof. Dr. Md. Rezaul Hoque',
            degree: 'MBBS, DA, MD, FCPS',
            specialist: 'Pain Management Specialist & Anesthesiologist',
            chember: 'Enam Medical College & Hospital'
        },
        {
            id: 9,
            img: kamal,
            name: 'Prof. Dr. Kamal Ibrahim',
            degree: 'MBBS, FCPS (Anesthesiology), FICS (USA)',
            specialist: 'Anesthesiology Specialist',
            chember: 'Bangladesh Medical College & Hospital'
        },
        {
            id: 10,
            img: tahmina,
            name: 'Dr. Tahmina Banu',
            degree: 'MBBS, DA, MD',
            specialist: 'Anesthesiology, Neuroanesthesiology & ICU Specialist',
            chember: 'Square Hospital, Dhaka'
        },
        {
            id: 11,
            img: azharul,
            name: 'Dr. Md. Azharul Islam',
            degree: 'MBBS, FCPS (Anesthesiology)',
            specialist: 'Anesthesiology, Pain Management & ICU Specialist',
            chember: 'Evercare Hospital, Dhaka'
        },
        {
            id: 12,
            img: chanchal,
            name: 'Dr. Chanchal Kumar Devnath',
            degree: 'MBBS, DA, FCPS (Anesthesiology)',
            specialist: 'Pain Management, ICU & Anesthesiology Specialist',
            chember: 'BRB Hospital, Dhaka'
        },
        {
            id: 13,
            img: hasina,
            name: 'Dr. Hasina Akhter',
            degree: 'MBBS, FCPS (Anesthesiology)',
            specialist: 'Anesthesia, Pain Management, & Critical Care Medicine Specialist',
            chember: 'Evercare Hospital, Dhaka'
        },
        {
            id: 14,
            img: zulfiqar,
            name: 'Prof. Dr. Md. Zulfiqar Hasan',
            degree: 'MBBS, MD (Anesthesiology)',
            specialist: 'Anesthesiology, Pain Management & ICU Specialist',
            chember: 'Square Hospital, Dhaka'
        },
        {
            id: 15,
            img: rabeya,
            name: 'Dr. Rabeya Begum',
            degree: 'MBBS, DA, MCPS',
            specialist: 'Anesthesiology Specialist',
            chember: 'Dhaka Medical College & Hospital'
        },
        {
            id: 16,
            img: didarul,
            name: 'Dr. Md. Didarul Alam',
            degree: 'MBBS, MCPS (Anesthesiology)',
            specialist: 'Anesthesiology, Pain Management & ICU Specialist',
            chember: 'Asgar Ali Hospital, Dhaka'
        },
        {
            id: 17,
            img: shukha,
            name: 'Dr. Shukha Ranjan Das',
            degree: 'MBBS (DU), BCS (Health), DA (BSMMU), FCPS (Anesthesiology), FIPM (India)',
            specialist: 'Interventional Pain Medicine Specialist',
            chember: 'Dhaka Medical College & Hospital'
        },
        {
            id: 18,
            img: akhtaruzzaman,
            name: 'Prof. Dr. AKM Akhtaruzzaman',
            degree: 'MBBS, DA, MD, Fellow, Pain Medicine (Japan)',
            specialist: 'Pain Medicine Specialist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 19,
            img: iqbal,
            name: 'Dr. Md. Iqbal',
            degree: 'MBBS, MCPS (Anesthesiology), DA (DU)',
            specialist: 'Cardiac & Pediatric Cardiac Anesthesiology Specialist',
            chember: 'Bangladesh Specialized Hospital'
        },
        {
            id: 20,
            img: bhabesh,
            name: 'Dr. Bhabesh Chandra Mondal',
            degree: 'MBBS, DA, FCPS',
            specialist: 'Cardiac Anesthesiology Specialist',
            chember: 'Square Hospital, Dhaka'
        },
        {
            id: 21,
            img: shahidur,
            name: 'Dr. M M Shahidur Rahman',
            degree: 'MBBS, FCPS (Anesthesiology), MCPS, DA',
            specialist: 'Cardiac Anesthesiologist',
            chember: 'Bangladesh Specialized Hospital'
        },
        {
            id: 22,
            img: mushfiqur,
            name: 'Dr. Mushfiqur Rahman',
            degree: 'MBBS, FCPS (Anesthesiology)',
            specialist: 'Anesthesiologist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 23,
            img: shahid,
            name: 'Dr. Shahid Ahmed Chowdhury',
            degree: 'MBBS, DA, FCPS',
            specialist: 'Cardiac Anesthesiology & Cardiac Critical Care Specialist',
            chember: 'United Hospital, Dhaka'
        },
        {
            id: 24,
            img: wahiuddin,
            name: 'Prof. Dr. Wahiuddin Mahmood',
            degree: 'MBBS, DA, FCPS',
            specialist: 'Anesthesiology, Critical Care Management & ICU Specialist',
            chember: 'Square Hospital, Dhaka'
        },
        {
            id: 25,
            img: ranadhir,
            name: 'Dr. Ranadhir Kumar Kundu',
            degree: 'MBBS, MD',
            specialist: 'Cardiac Anesthesiology, Neuroanesthesiology & Neuro ICU Specialist',
            chember: 'Square Hospital, Dhaka'
        },
        {
            id: 26,
            img: mohammad,
            name: 'Dr. Mohammad Johirul Islam',
            degree: 'MBBS (DNMC), DA (DMC), FCPS (Anesthesiology)',
            specialist: 'Cardiac Anesthesiology Specialist',
            chember: 'Asgar Ali Hospital, Dhaka'
        },
        {
            id: 27,
            img: shyama,
            name: 'Dr. Shyama Prosad Mitra',
            degree: 'MBBS, DA, FCPS (Anesthesiology)',
            specialist: 'Anesthesiology, Pain Management & Critical Care Specialist',
            chember: 'Evercare Hospital, Dhaka'
        },
        {
            id: 28,
            img: ashia,
            name: 'Dr. Ashia Ali',
            degree: 'MBBS, Diploma (Anesthesia) FCPS (Anesthesia), FIPM (India)',
            specialist: 'Anesthesiology & Pain Management Specialist',
            chember: 'United Hospital, Dhaka'
        },
        {
            id: 29,
            img: muhammad,
            name: 'Dr. Shah Muhammad Ali',
            degree: 'MBBS, DA, FCPS',
            specialist: 'Anesthesiology, Pain Management & Critical Care Specialist',
            chember: 'Square Hospital, Dhaka'
        },
        {
            id: 30,
            img: quamrul,
            name: 'Dr. Md. Quamrul Islam',
            degree: 'MBBS, MD',
            specialist: 'Anesthesiology, Pain Management & Critical Care Specialist',
            chember: 'Square Hospital, Dhaka'
        },
        {
            id: 31,
            img: munshi,
            name: 'Dr. Munshi Kalamur Rahman',
            degree: 'MBBS, MD (Anesthesiology)',
            specialist: 'Anesthesiology, Pain Management & Critical Care Specialist',
            chember: 'National Institute of Diseases of the Chest & Hospital'
        },
        {
            id: 32,
            img: istaque,
            name: 'Dr. Istaque Ahmed Milton',
            degree: 'MBBS, FCPS, DA',
            specialist: 'Anesthesiology, Pain Management & Critical Care Specialist',
            chember: 'Square Hospital, Dhaka'
        },
        {
            id: 33,
            img: nazmul,
            name: 'Dr. Brig. Gen. Md. Nazmul Ahsan',
            degree: 'MBBS, MD (Anesthesia)',
            specialist: 'Cardiac Anesthesiology & Pain Management Specialist',
            chember: 'United Hospital, Dhaka'
        },
        {
            id: 34,
            img: rabiul,
            name: 'Dr. Md. Rabiul Alam',
            degree: 'MBBS, FCPS (Anesthesiology)',
            specialist: 'Anesthesiology & Pain Medicine Specialist',
            chember: 'Evercare Hospital, Dhaka'
        },
        {
            id: 35,
            img: moinulHoque,
            name: 'Brig. Gen. Dr. Moinul Hoque Chowdhury',
            degree: 'MBBS, FCPS (Anesthesiology)',
            specialist: 'Anesthesiology, Pain Management & Critical Care Medicine Specialist',
            chember: 'Evercare Hospital, Dhaka'
        },
        {
            id: 36,
            img: jayed,
            name: 'Dr. M.M. Jayed Hossain Chowdhury',
            degree: 'MBBS, DA, FCPS',
            specialist: 'Anesthesiology, Critical Care Management & ICU Specialist',
            chember: 'Square Hospital, Dhaka'
        },
        {
            id: 37,
            img: abu,
            name: 'Dr. Abu Naser Muhammad Badruddoza',
            degree: 'MBBS, FCPS (Anesthesiology)',
            specialist: 'Anesthesia, Pain Management, & Critical Care Medicine Specialist',
            chember: 'Evercare Hospital, Dhaka'
        }
    ]

    return (
        <div className='container mx-auto px-72'>

            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/">Doctors</Link></p>
            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/dhaka-d">Doctors in Dhaka</Link></p>
            <p className='my-3 border text-3xl text-center text-black font-semibold py-3'>Pain Management Specialist Doctor in Dhaka</p>
            <p className='text-lg text-center border px-4 py-4'>An anesthesiologist or pain management specialist is a doctor who gives a patient medication so they do not <br /> feel pain when they are undergoing surgery. Here in this page you can find out & choose the best pain <br /> management specialist doctor in Dhaka with their chamber information & contact number.</p>
            <p className='my-3 border text-3xl text-center text-black font-semibold py-3'>List of the Best Pain Management Specialist Doctor in Dhaka</p>

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
            <p className='border text-lg text-center py-3 my-3'>Updated on April 30, 2023</p>
        </div>
    );
};

export default AnesthesiologyDhaka;