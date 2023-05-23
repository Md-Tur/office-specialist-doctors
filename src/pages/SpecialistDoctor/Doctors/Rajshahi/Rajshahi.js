import React from 'react';
import { Link } from 'react-router-dom';

const Rajshahi = () => {

    const specialists = [
        {
            id: 1,
            speciality: 'Anesthesiology Specialist in Rajshahi',
            link: '/anesthesiology-r'
        },
        {
            id: 2,
            speciality: 'Cancer Specialist in Rajshahi',
            link: '/cancer-r'
        },
        {
            id: 3,
            speciality: 'Cardiac Surgery Specialist in Rajshahi',
            link: '/cardiac-r'
        },
        {
            id: 4,
            speciality: 'Cardiology Specialist in Rajshahi',
            link: '/cardiology-r'
        },
        {
            id: 5,
            speciality: 'Chest & Asthma Specialist in Rajshahi',
            link: '/chest-r'
        },
        {
            id: 6,
            speciality: 'Child Specialist in Rajshahi',
            link: '/child-r'
        },
        {
            id: 7,
            speciality: 'Colorectal Surgery Specialist in Rajshahi',
            link: '/colorectal-r'
        },
        {
            id: 8,
            speciality: 'Dental Specialist in Rajshahi',
            link: '/dental-r'
        },
        {
            id: 9,
            speciality: 'Diabetes & Hormone Specialist in Rajshahi',
            link: '/diabetes-r'
        },
        {
            id: 9,
            speciality: 'ENT Specialist in Rajshahi',
            link: '/ent-r'
        },
        {
            id: 10,
            speciality: 'Eye Specialist in Rajshahi',
            link: '/eye-r'
        },
        {
            id: 11,
            speciality: 'Gastroenterology Specialist in Rajshahi',
            link: '/gastroenterology-r'
        },
        {
            id: 12,
            speciality: 'General Surgery Specialist in Rajshahi',
            link: '/general-r'
        },
        {
            id: 13,
            speciality: 'Gynecology & Obstetrics Specialist in Rajshahi',
            link: '/gynecology-r'
        },
        {
            id: 14,
            speciality: 'Hematology (Blood) Specialist in Rajshahi',
            link: '/hematology-r'
        },
        {
            id: 15,
            speciality: 'Infertility Specialist in Rajshahi',
            link: '/infertility-r'
        },
        {
            id: 16,
            speciality: 'Kidney Specialist in Rajshahi',
            link: '/kidney-r'
        },
        {
            id: 17,
            speciality: 'Laparoscopic Surgery Specialist in Rajshahi',
            link: '/laparoscopic-r'
        },
        {
            id: 18,
            speciality: 'Liver Specialist in Rajshahi',
            link: '/liver-r'
        },
        {
            id: 19,
            speciality: 'Medicine Specialist in Rajshahi',
            link: '/medicine-r'
        },
        {
            id: 20,
            speciality: 'Neurology Specialist in Rajshahi',
            link: '/neurology-r'
        },
        {
            id: 21,
            speciality: 'Neuromedicine Specialist in Rajshahi',
            link: '/neuromedicine-r'
        },
        {
            id: 22,
            speciality: 'Neurosurgery Specialist in Rajshahi',
            link: '/neurosurgery-r'
        },
        {
            id: 23,
            speciality: 'Orthopedic Specialist in Rajshahi',
            link: '/orthopedic-r'
        },
        {
            id: 24,
            speciality: 'Pediatric Surgery Specialist in Rajshahi',
            link: '/pediatric-r'
        },
        {
            id: 25,
            speciality: 'Physical Medicine Specialist in Rajshahi',
            link: '/physical-r'
        },
        {
            id: 26,
            speciality: 'Plastic Surgery Specialist in Rajshahi',
            link: '/plastic-surgery-r'
        },
        {
            id: 27,
            speciality: 'Psychiatry (Mental) Specialist in Rajshahi',
            link: '/psychiatry-r'
        },
        {
            id: 28,
            speciality: 'Rheumatology Specialist in Rajshahi',
            link: '/rheumatology-r'
        },
        {
            id: 29,
            speciality: 'Sex Specialist in Rajshahi',
            link: '/sex-r'
        },
        {
            id: 30,
            speciality: 'Skin Specialist in Rajshahi',
            link: '/skin-r'
        },
        {
            id: 31,
            speciality: 'Urology Specialist in Rajshahi',
            link: '/urology-r'
        },
        {
            id: 31,
            speciality: 'Vascular Surgery Specialist in Rajshahi',
            link: '/vascular-r'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Specialist Doctors List in Rajshahi</p>
            {
                specialists.map(specialist =>
                    <p key={specialist.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{specialist.speciality}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on December 12, 2022</p>
        </div>
    );
};

export default Rajshahi;