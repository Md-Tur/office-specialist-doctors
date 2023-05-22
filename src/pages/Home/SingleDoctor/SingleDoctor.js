import React from 'react';
import { Link, useParams } from 'react-router-dom';
import rating from '../../../images/members/Star-Rating.png';
import mahboob from '../../../images/Dr.-Mahboob-Mustafa-Zaman.jpg';
import imran from '../../../images/Dr.-Md.-Imran-Hossain.jpg';
import kamrunnessa from '../../../images/Prof.-Dr.-Kamrunnessa.jpg';
import snigdha from '../../../images/Dr.-Snigdha-Sarker-Chini.jpg';
import fahad from '../../../images/Dr.-Md.-Fahad-Bin-Alauddin.jpg';
import harun from '../../../images/Dr.-Mohammad-Harun-Or-Rashid.jpg';
import nusrat from '../../../images/Dr.-Ummul-Nusrat-Jahan.jpg';
import farzana from '../../../images/Dr.-Farzana-Ahmed.jpg';
import ayesha from '../../../images/Dr.-Ayesha-Hasina.jpg';
import ariful from '../../../images/icon.png';
import aditi from '../../../images/Dr-.-Aditi-Paul-Chowdhury.jpg';
import tanbir from '../../../images/Dr.-Tanbir-Ahmad.jpg';

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
            points: '(4)',
            address: '77/A, East Rajabazar, West Panthapath, Dhaka',
            visiting: '9am to 6pm (Closed: Friday)',
            appointment: '10647',
            about: 'Dr. Mahboob Mustafa Zaman is a Medicine Specialist in Dhaka. His qualification is MBBS, FCPS (Medicine), MRCP (UK). He is a Consultant in the Department of Internal Medicine at BRB Hospital, Dhaka. He regularly provides treatment to his patients at BRB Hospital, Dhaka. Practicing hour of Dr. Mahboob Mustafa Zaman at'
        },
        {
            id: 2,
            img: imran,
            name: 'Dr. Md. Imran Hossain',
            degree: 'BDS (DU), MSS (Clinical) DU, MPH (USA), PGT (Orthodontic), PGT (OMS) BSMMU Research Fellow & Surgeon (STRC Project, Smile Train, USA), Advanced Implantology (Thailand), Invisalign (Thailand & India), Advance Training in Fixed Orthodontic Braces, Implantology & Laser Dentistry (India)',
            specialist: 'Dental Implant, Invisalign, Dental Braces, Smile Design, Oral Surgery & Tooth Whitening Specialist',
            chember: 'Dental View Orthodontics & Implant Center',
            rating: rating,
            points: '(58)',
            address: 'House No # 67/C, Road # 11, Block # E, Banani, Dhaka-1213',
            visiting: '10am to 9.30pm (Everyday)',
            appointment: '+8801789280929',
            about: 'Dr. Md. Imran Hossain is a one of the best Dentist in Dhaka. His qualification is BDS (DU), MSS (Clinical) DU, MPH (USA), PGT (Orthodontic), PGT (OMS) BSMMU, Research Fellow & Surgeon (STRC Project, Smile Train, USA), Advanced Implantology (Thailand), Invisalign (Thailand & India), Advance Training in Fixed Orthodontic Braces, Implantology & Laser Dentistry (India). He is a Chief Consultant at Dental View Orthodontics & Implant Center. He is an expert in Dental Implant, Invisalign, Dental Braces, Smile Design, Oral Surgery and Tooth Whitening. He regularly provides treatment to his patients at'
        },
        {
            id: 3,
            img: kamrunnessa,
            name: 'Prof. Dr. Kamrunnessa',
            degree: 'MBBS, MCPS, FCPS (OBGYN), MPH (Epidemiology), FMAS (India), FART (India)',
            specialist: 'Gynecology, Infertility Specialist & Laparoscopic Surgeon',
            chember: 'BRB Hospital, Dhaka',
            rating: rating,
            points: '(7)',
            address: '77/A, East Rajabazar, West Panthapath, Dhaka',
            visiting: '10am to 2pm (Closed: Wed & Friday)',
            appointment: '10647',
            about: 'Prof. Dr. Kamrunnessa is a Gynecologist in Dhaka. Her qualification is MBBS, MCPS, FCPS (OBGYN), MPH (Epidemiology), FMAS (India), FART (India). She is a Senior Consultant in the Department of Gynecology & Obstetrics at BRB Hospital, Dhaka. She regularly provides treatment to her patients at BRB Hospital, Dhaka. Practicing hour of Prof. Dr. Kamrunnessa at'
        },
        {
            id: 4,
            img: snigdha,
            name: 'Dr. Snigdha Sarker (Chini)',
            degree: 'MBBS, MD (Neurology)',
            specialist: 'Neurology (Brain, Stroke, Nerve, Headache, Migraine) Specialist',
            chember: 'International Medical College & Hospital, Gazipur',
            rating: rating,
            points: '(5)',
            address: 'Kha- 48/A, Bot Tala, Sardar Market, Khilkhet, Dhaka',
            visiting: '5pm to 8pm (Monday & Wednesday)',
            appointment: '+8801910020092',
            about: 'Dr. Snigdha Sarker (Chini) is a Neurologist in Dhaka. Her qualification is MBBS, MD (Neurology). She is a Assistant Professor in the Department of Neurology at International Medical College & Hospital, Gazipur. She regularly provides treatment to her patients at Lakecity Medical Limited. Practicing hour of Dr. Snigdha Sarker (Chini) at'
        },
        {
            id: 5,
            img: fahad,
            name: 'Dr. Md. Fahad-Bin-Alauddin',
            degree: 'MBBS (DU), MD (Psychiatry-BSMMU)',
            specialist: 'Psychiatry (Mental Diseases, Brain Disorder, Drug Addiction) Specialist',
            chember: 'International Medical College & Hospital, Gazipur',
            rating: rating,
            points: '(6)',
            address: '12, Kazi Nazrul Islam Avenue, Farmgate, Tejgaon, Dhaka - 1215',
            visiting: '4pm to 6.30pm (Closed: Friday)',
            appointment: '+8801756173765',
            about: 'Dr. Md. Fahad-Bin-Alauddin is a Psychiatrist in Dhaka. His qualification is MBBS (DU), MD (Psychiatry-BSMMU). He is a Assistant Professor in the Department of Psychiatry at International Medical College & Hospital, Gazipur. He regularly provides treatment to his patients at Al-Raji Hospital, Farmgate. Practicing hour of Dr. Md. Fahad-Bin-Alauddin at'
        },
        {
            id: 6,
            img: harun,
            name: 'Dr. Mohammad Harun-Or-Rashid',
            degree: 'MBBS (DMC), BCS (Health) FCPS (Surgery), MS (Colorectal Surgery), MRCS (Edin), FACS (USA)',
            specialist: 'Colorectal (Piles, Colon, Rectum, Anus) & Laparoscopic Surgeon',
            chember: 'Dhaka Medical College & Hospital',
            rating: rating,
            points: '(3)',
            address: '77/A, East Rajabazar, West Panthapath, Dhaka',
            visiting: '6pm to 9pm (Closed: Friday)',
            appointment: '10647',
            about: 'Dr. Mohammad Harun-Or-Rashid is a Colorectal Surgeon in Dhaka. His qualification is MBBS (DMC), BCS (Health) FCPS (Surgery), MS (Colorectal Surgery), MRCS (Edin), FACS (USA). He is a Consultant in the Department of Surgery at Dhaka Medical College & Hospital. He regularly provides treatment to his patients at BRB Hospital, Dhaka. Practicing hour of Dr. Mohammad Harun-Or-Rashid at'
        },
        {
            id: 7,
            img: nusrat,
            name: 'Dr. Ummul Nusrat Jahan',
            degree: 'MBBS, FCPS (OBGYN), MRCOG (UK)',
            specialist: 'Highly Trained in Infertility & Laparoscopic Surgery (India) Gynecology, Obstetrics, Infertility Specialist & Laparoscopic Surgeon',
            chember: 'BRB Hospital, Dhaka',
            rating: rating,
            points: '(8)',
            address: '77/A, East Rajabazar, West Panthapath, Dhaka',
            visiting: '9am to 6pm (Closed: Friday)',
            appointment: '10647',
            about: 'Dr. Ummul Nusrat Jahan is a Gynecologist in Dhaka. Her qualification is MBBS, FCPS (OBGYN), MRCOG (UK). She is a Consultant in the Department of Obstetrics & Gynecology at BRB Hospital, Dhaka. She regularly provides treatment to her patients at BRB Hospital, Dhaka. Practicing hour of Dr. Ummul Nusrat Jahan at'
        },
        {
            id: 8,
            img: farzana,
            name: 'Dr. Farzana Ahmed',
            degree: 'MBBS, FCPS (Pediatrics), FCPS (Neonatology), FRCP (Edinburgh)',
            specialist: 'Newborn Adolescent, & Child Diseases Specialist',
            chember: 'Marks Medical College & Hospital',
            rating: rating,
            points: '(2)',
            address: '77/A, East Rajabazar, West Panthapath, Dhaka',
            visiting: '5pm to 9pm (Closed: Friday)',
            appointment: '10647',
            about: 'Dr. Farzana Ahmed is a Child Specialist in Dhaka. Her qualification is MBBS, FCPS (Pediatrics), FCPS (Neonatology), FRCP (Edinburgh). She is a Associate Professor in the Department of Pediatrics at Marks Medical College & Hospital. She regularly provides treatment to her patients at BRB Hospital, Dhaka. Practicing hour of Dr. Farzana Ahmed at'
        },
        {
            id: 9,
            img: ayesha,
            name: 'Dr. Ayesha Hasina',
            degree: 'MBBS, MCPS, FCPS (Pediatrics), MD (Neonatology)',
            specialist: 'Newborn & Child Diseases Specialist',
            chember: 'BRB Hospital, Dhaka',
            rating: rating,
            points: '(2)',
            address: '77/A, East Rajabazar, West Panthapath, Dhaka',
            visiting: '9am to 6pm (Closed: Friday)',
            appointment: '10647',
            about: 'Dr. Ayesha Hasina is a Child Specialist in Dhaka. Her qualification is MBBS, MCPS, FCPS (Pediatrics), MD (Neonatology). She is a Consultant in the Department of Pediatrics & Neonatology at BRB Hospital, Dhaka. She regularly provides treatment to her patients at BRB Hospital, Dhaka. Practicing hour of Dr. Ayesha Hasina at'
        },
        {
            id: 10,
            img: ariful,
            name: 'Dr. Md. Ariful Islam',
            degree: 'MBBS, D-CARD (Cardiology)',
            specialist: 'Cardiology Specialist',
            chember: 'Rajshahi Medical College & Hospital',
            rating: rating,
            points: '(2)',
            address: 'Mehedi Plaza, Greater Road, Laxmipur Mor, Rajshahi',
            visiting: '3pm to 9pm (Closed: Friday)',
            appointment: '+8801997383940',
            about: 'Dr. Md. Ariful Islam is a Cardiologist in Rajshahi. His qualification is MBBS, D-CARD (Cardiology). He is working as a Cardiology Specialist doctor in Rajshahi Medical College & Hospital. He regularly provides treatment to his patients at Rajshahi Central Hospital. Practicing hour of Dr. Md. Ariful Islam at'
        },
        {
            id: 11,
            img: aditi,
            name: 'Dr . Aditi Paul Chowdhury',
            degree: 'MBBS, MD (ONCOLOGY)',
            specialist: 'Cancer Specialist',
            chember: 'Ahsania Mission Cancer & General Hospital',
            rating: rating,
            points: '(2)',
            address: 'Plot # 03, Embankment Drive Way, Sector # 10, Uttara, Dhaka',
            visiting: '9am to 5pm (Closed: Friday)',
            appointment: '+880255092197',
            about: 'Dr . Aditi Paul Chowdhury is a Cancer Specialist in Dhaka. Her qualification is MBBS, MD (ONCOLOGY). She is a Cancer Specialist in the Department of Oncology at Ahsania Mission Cancer & General Hospital. She regularly provides treatment to her patients at Ahsania Mission Cancer & General Hospital. Practicing hour of Dr . Aditi Paul Chowdhury at'
        },
        {
            id: 12,
            img: tanbir,
            name: 'Dr. Tanbir Ahmad',
            degree: 'BHMS (Homeopathy, Dhaka University) MSS in CSW (ISWR, Dhaka University) PGT (Psychotherapy, BSMMU), MPhil (ISWR, Dhaka University)',
            specialist: 'Sexual Diseases, Autism, Psychological Disease, Asthma & Any Kind of Chronic Disease Specialist',
            chember: 'Bangladesh Homeopathy Health Center, Uttara, Dhaka',
            rating: rating,
            points: '(1)',
            address: 'House #15 (Lift-2), Sonargaon Janapath, Sector#7 (House Building), Uttara, Dhaka',
            visiting: '11am to 9pm (Closed: Friday)',
            appointment: '+8801774098019',
            about: 'Dr Tanbir Ahmad is one of the best graduate Homeopathic Doctor in Dhaka. He BHMS degree from the Government Homeopathic Medical College and Hospital under the University of Dhaka. He obtained MSS in CSW from ISWR, University of Dhaka. He has achieved PGT in psychotherapy from BSMMU. He is in MPhil at the University of Dhaka He is the Principal at Gaibandha Homeopathic Medical College Hospital. He regularly provides treatment to his patients at Bangladesh Homeopathy Health Center. Practicing hour of Dr. Tanbir Ahmad at'
        }
    ]

    const doctorDetails = doctors.filter(doctor => doctor.id == id);

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

            <p className='border text-lg text-center py-3 my-3'>Updated on May 13, 2023</p>
        </div>
    );
};

export default SingleDoctor;