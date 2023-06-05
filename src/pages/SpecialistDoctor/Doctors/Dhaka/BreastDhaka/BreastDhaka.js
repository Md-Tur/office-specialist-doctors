import React from 'react';
import { Link } from 'react-router-dom';
// images
import nasir from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Md.-Nasir-Uddin-Mahmud.jpg';
import samia from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Samia-Mubin.jpg';
import jesmen from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Jesmen-Nahar-Runi.jpg';
import bilkis from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Most.-Bilkis-Fatema.jpg';
import nasid from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Kazi-Nasid-Nazneen.jpg';
import nishat from '../../../../../images/Specialist/Dhaka/Breast/Prof.-Dr.-Nishat-Begum.jpg';
import ayesha from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Ayesha-Rahman.jpg';
import nafisa from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Ali-Nafisa-1.jpg';
import shamima from '../../../../../images/Specialist/Dhaka/Breast/Prof.-Dr.-Shamima-Jahan.jpg';
import nilufar from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Nilufar-Shabnam.jpg';
import leea from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Leea-Amin.jpg';
import subarna from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Subarna-Islam.jpg';
import sharmin from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Sharmin-Islam.jpg';
import mostafizur from '../../../../../images/Specialist/Dhaka/Breast/Prof.-Dr.-Mohammed-Mostafizur-Rahman.jpg';
import tamanna from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Tamanna-Narmeen.jpg';
import sonia from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Sonia-Akter.jpg';
import abdus from '../../../../../images/Specialist/Dhaka/Breast/Prof.-Dr.-Abdus-Salam-Arif.jpg';
import tanu from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Nasim-E-Tasnim-Tanu.jpg';
import farid from '../../../../../images/Specialist/Dhaka/Breast/Dr.-SK-Farid-Ahmed.jpg';
import farhana from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Farhana-Yesmin.jpg';
import mostaque from '../../../../../images/Specialist/Dhaka/Breast/Prof.-Dr.-A.Z.M.-Mostaque-Hossain-Tuhin.jpg';
import shayda from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Shayda-Ali.jpg';
import enamul from '../../../../../images/Specialist/Dhaka/Breast/Brig.-Gen.-Prof.-Dr.-Md.-Enamul-Kabir.jpg';
import nashir from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Mohammad-Nashir-Uddin.jpg';
import munny from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Munny-Momotaz.jpg';
import nabila from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Nabila-Khanduker.jpg';
import nasrin from '../../../../../images/Specialist/Dhaka/Breast/Dr.-Shamima-Nasrin.jpg';

const BreastDhaka = () => {

    const doctors = [
        {
            id: 1,
            img: nasir,
            name: 'Lt. Col. Dr. Md. Nasir Uddin (Mahmud)',
            degree: 'MBBS, FCPS (Surgery - Gold Medalist), FACS (USA), FMAS (India) Post Fellowship Training in Surgical Oncology (NICRH), Advance Training in Oncoplastic Breast Surgery (BSOS)',
            specialist: 'Breast Surgeon & Oncoplastic Breast Surgeon',
            chember: 'Border Guard Hospital, Dhaka'
        },
        {
            id: 2,
            img: samia,
            name: 'Prof. Dr. Samia Mubin',
            degree: 'MBBS (DMC), FCPS (Surgery), MRCS (UK)',
            specialist: 'General, Laparoscopic & Breast Cancer Specialist Surgeon',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 3,
            img: jesmen,
            name: 'Dr. Jesmen Nahar Runi',
            degree: 'MBBS, BCS (Health), MCPS (Surgery), FCPS (Surgery)',
            specialist: 'General, Breast & Colorectal Surgeon',
            chember: 'Dhaka Medical College & Hospital'
        },
        {
            id: 4,
            img: bilkis,
            name: 'Dr. Bilkis Fatema',
            degree: 'MBBS, BCS (Health), MCPS (Surgery), FCPS (Surgery), MS (Colorectal Surgery)',
            specialist: 'General, Colorectal, Piles & Breast Surgeon',
            chember: 'Dhaka Medical College & Hospital'
        },
        {
            id: 5,
            img: nasid,
            name: 'Dr. Kazi Nasid Naznin',
            degree: 'MBBS, FCPS (Surgery), MS (Colorectal Surgery)',
            specialist: 'General, Breast & Colorectal Surgeon',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 6,
            img: nishat,
            name: 'Prof. Dr. Nishat Begum',
            degree: 'MBBS, FCPS (Surgery), Training in Breast & Colorectal Surgery, Fellowship in Breast Cancer (India)',
            specialist: 'General, Breast & Colorectal Specialist Surgeon',
            chember: 'Dhaka Medical College & Hospital'
        },
        {
            id: 7,
            img: ayesha,
            name: 'Dr. Ayesha Rahman',
            degree: 'MBBS, BCS (Health), MCPS (Surgery), FCPS (Surgery)',
            specialist: 'General, Colorectal & Breast Surgeon',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 8,
            img: nafisa,
            name: 'Dr. Ali Nafisa',
            degree: 'MBBS (RMC), FCPS (Surgery), Trained in Oncoplastic Breast Surgery (UK & India)',
            specialist: 'General & Oncoplastic Breast Surgeon',
            chember: 'Anwer Khan Modern Medical College & Hospital'
        },
        {
            id: 9,
            img: shamima,
            name: 'Prof. Dr. Shamima Jahan',
            degree: 'MBBS, FCPS (Surgery), Training (Colorectal & Breast Surgery)',
            specialist: 'General, Laparoscopic, Breast & Colorectal Surgeon',
            chember: 'Dhaka National Medical College & Hospital'
        },
        {
            id: 10,
            img: nilufar,
            name: 'Dr. Nilufar Shabnam',
            degree: 'MBBS, FCPS (Surgery), MRCS (Edinburgh), MRCPS (Glasgow), CCD (BIRDEM)',
            specialist: 'General, Breast & Colorectal Surgeon',
            chember: 'Birdem General Hospital & Ibrahim Medical College'
        },
        {
            id: 11,
            img: leea,
            name: 'Dr. Leea Amin',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'General, Laparoscopic, Breast, Cancer & Colorectal Surgeon',
            chember: 'Eastern Medical College & Hospital'
        },
        {
            id: 12,
            img: subarna,
            name: 'Dr. Subarna Islam',
            degree: 'MBBS, FCPS (Surgery), PGT (Cosmetic Surgery)',
            specialist: 'Breast & Cosmetic Surgeon',
            chember: 'American Super Specialty Hospital Limited'
        },
        {
            id: 13,
            img: sharmin,
            name: 'Dr. Sharmin Islam',
            degree: 'MBBS, FCPS (Surgery), Advanced Training in Breast Surgery (AIIMS, Delhi, India)',
            specialist: 'General, Laparoscopic, Breast & Colorectal Surgeon',
            chember: 'Dhaka Medical College & Hospital'
        },
        {
            id: 14,
            img: mostafizur,
            name: 'Prof. Dr. Mohammed Mostafizur Rahman',
            degree: 'MBBS (DMC), FRCS (Edinburgh)',
            specialist: 'Breast, Colorectal, Endocrine & Laparoscopic Surgery Specialist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 15,
            img: tamanna,
            name: 'Dr. Tamanna Narmeen',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'General, Breast & Laparoscopic Surgeon',
            chember: 'Birdem General Hospital & Ibrahim Medical College'
        },
        {
            id: 16,
            img: sonia,
            name: 'Dr. Sonia Akter',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'General, Laparoscopic, Breast & Colorectal Surgeon',
            chember: 'Enam Medical College & Hospital'
        },
        {
            id: 17,
            img: abdus,
            name: 'Prof. Dr. Abdus Salam Arif',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'General, Laparoscopic & Breast Surgeon',
            chember: 'Dhaka Medical College & Hospital'
        },
        {
            id: 18,
            img: tanu,
            name: 'Dr. Nasim-E-Tasnim Tanu',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'General, Colorectal & Breast Surgeon',
            chember: 'Shaheed Tajuddin Ahmad Medical College & Hospital'
        },
        {
            id: 19,
            img: farid,
            name: 'Dr. SK Farid Ahmed',
            degree: 'MBBS, FRCS (RCPSG)',
            specialist: 'Oncoplastic & Reconstructive Breast Surgeon',
            chember: 'Wycombe General Hospital, Buckinghamshire Healthcare NHS Trust, UK'
        },
        {
            id: 20,
            img: farhana,
            name: 'Dr. Farhana Yesmin',
            degree: 'MBBS, BCS (Health), FCPS (Surgery)',
            specialist: 'Breast, Colorectal, Laparoscopic & General Surgeon',
            chember: 'Dhaka Dental College & Hospital'
        },
        {
            id: 21,
            img: mostaque,
            name: 'Prof. Dr. A.Z.M. Mostaque Hossain Tuhin',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'General, Laparoscopic & Breast Surgeon',
            chember: 'Dhaka Medical College & Hospital'
        },
        {
            id: 22,
            img: shayda,
            name: 'Dr. Shayda Ali',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'Breast, Colorectal, General & Laparoscopic Surgery Specialist',
            chember: 'Delta Medical College & Hospital'
        },
        {
            id: 23,
            img: enamul,
            name: 'Brig. Gen. Prof. Dr. Md. Enamul Kabir',
            degree: 'MBBS, FCPS (Surgery), FACS (USA), FICS (USA), Diploma in Burns & Plastic Surgery (China), Post Fellowship Training in Plastic, Burns, Aesthetic Plastic (Cosmetic) & Breast Surgery from Second Military Medical University (SMMU), China',
            specialist: 'Plastic, Burn, Aesthetic Plastic (Cosmetic) & Breast Surgeon',
            chember: 'Marks Medical College & Hospital'
        },
        {
            id: 24,
            img: nashir,
            name: 'Dr. Mohammad Nashir Uddin',
            degree: 'MBBS, FCPS (Surgery), MS (Plastic Surgery), FACS (USA)',
            specialist: 'Burn, Plastic & Breast Surgery Specialist',
            chember: 'Dhaka Medical College & Hospital'
        },
        {
            id: 25,
            img: munny,
            name: 'Dr. Munny Momotaz',
            degree: 'MBBS, FCPS (Surgery), MS (Plastic Surgery)',
            specialist: 'General, Breast, Plastic, Reconstructive & Cosmetic Surgery Specialist',
            chember: 'Tairunnessa Memorial Medical College & Hospital'
        },
        {
            id: 26,
            img: nabila,
            name: 'Dr. Nabila Khanduker',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'General, Laparoscopic & Breast Cancer Surgeon',
            chember: 'Green Life Medical College & Hospital'
        },
        {
            id: 27,
            img: nasrin,
            name: 'Dr. Shamima Nasrin',
            degree: 'MBBS (DMC) FCPS (Surgery), FMAS (India), Advance Training in Breast & Laser Piles Surgery',
            specialist: 'General, Breast & Colorectal Surgeon',
            chember: 'Anwer Khan Modern Medical College Hospital'
        }
    ]

    return (
        <div className='container mx-auto px-72'>

            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/">Doctors</Link></p>
            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/dhaka-d">Doctors in Dhaka</Link></p>
            <p className='my-3 border text-3xl text-center text-black font-semibold py-3'>Breast Surgeon in Dhaka</p>
            <p className='text-lg text-center border px-4 py-4'>Breast Surgeon is usually a general surgeon who is especially skilled in breast operation. A breast surgeon <br /> perform breast tumor operation, breast tumor, breast cancer operation, etc. Here in this page you can find out & <br /> choose the best male or female breast specialist doctor in Dhaka with their chamber information & contact <br />number.</p>
            <p className='my-3 border text-3xl text-center text-black font-semibold py-3'>List of the Best Breast Surgery Specialist Doctor in Dhaka</p>

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
                                    <button className='px-5 py-2 bg-[#2a7fba] rounded-md text-white text-xl font-normal hover:underline hover:bg-green-500'><Link to={`/dhaka-breast/${doctor.id}`}>See Details</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <p className='border text-lg text-center py-3 my-3'>Updated on May 30, 2023</p>
        </div>
    );
};

export default BreastDhaka;