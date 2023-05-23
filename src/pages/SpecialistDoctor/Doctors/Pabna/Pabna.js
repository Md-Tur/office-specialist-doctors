import React from 'react';
import { Link } from 'react-router-dom';

const Pabna = () => {

    const specialists = [
        {
            id: 1,
            speciality: 'Anesthesiology Specialist in Pabna',
            link: '/anesthesiology-pb'
        },
        {
            id: 2,
            speciality: 'Cancer Specialist in Pabna',
            link: '/cancer-pb'
        },
        {
            id: 3,
            speciality: 'Cardiac Surgery Specialist in Pabna',
            link: '/cardiac-pb'
        },
        {
            id: 4,
            speciality: 'Cardiology Specialist in Pabna',
            link: '/cardiology-pb'
        },
        {
            id: 5,
            speciality: 'Chest & Asthma Specialist in Pabna',
            link: '/chest-pb'
        },
        {
            id: 6,
            speciality: 'Child Specialist in Pabna',
            link: '/child-pb'
        },
        {
            id: 7,
            speciality: 'Colorectal Surgery Specialist in Pabna',
            link: '/colorectal-pb'
        },
        {
            id: 8,
            speciality: 'Dental Specialist in Pabna',
            link: '/dental-pb'
        },
        {
            id: 9,
            speciality: 'Diabetes & Hormone Specialist in Pabna',
            link: '/diabetes-pb'
        },
        {
            id: 9,
            speciality: 'ENT Specialist in Pabna',
            link: '/ent-pb'
        },
        {
            id: 10,
            speciality: 'Eye Specialist in Pabna',
            link: '/eye-pb'
        },
        {
            id: 11,
            speciality: 'Gastroenterology Specialist in Pabna',
            link: '/gastroenterology-pb'
        },
        {
            id: 12,
            speciality: 'General Surgery Specialist in Pabna',
            link: '/general-pb'
        },
        {
            id: 13,
            speciality: 'Gynecology & Obstetrics Specialist in Pabna',
            link: '/gynecology-pb'
        },
        {
            id: 14,
            speciality: 'Hematology (Blood) Specialist in Pabna',
            link: '/hematology-pb'
        },
        {
            id: 15,
            speciality: 'Infertility Specialist in Pabna',
            link: '/infertility-pb'
        },
        {
            id: 16,
            speciality: 'Kidney Specialist in Pabna',
            link: '/kidney-pb'
        },
        {
            id: 17,
            speciality: 'Laparoscopic Surgery Specialist in Pabna',
            link: '/laparoscopic-pb'
        },
        {
            id: 18,
            speciality: 'Liver Specialist in Pabna',
            link: '/liver-pb'
        },
        {
            id: 19,
            speciality: 'Medicine Specialist in Pabna',
            link: '/medicine-pb'
        },
        {
            id: 20,
            speciality: 'Neurology Specialist in Pabna',
            link: '/neurology-pb'
        },
        {
            id: 21,
            speciality: 'Neuromedicine Specialist in Pabna',
            link: '/neuromedicine-pb'
        },
        {
            id: 22,
            speciality: 'Neurosurgery Specialist in Pabna',
            link: '/neurosurgery-pb'
        },
        {
            id: 23,
            speciality: 'Orthopedic Specialist in Pabna',
            link: '/orthopedic-pb'
        },
        {
            id: 24,
            speciality: 'Pediatric Surgery Specialist in Pabna',
            link: '/pediatric-pb'
        },
        {
            id: 25,
            speciality: 'Physical Medicine Specialist in Pabna',
            link: '/physical-pb'
        },
        {
            id: 26,
            speciality: 'Plastic Surgery Specialist in Pabna',
            link: '/plastic-surgery-pb'
        },
        {
            id: 27,
            speciality: 'Psychiatry (Mental) Specialist in Pabna',
            link: '/psychiatry-pb'
        },
        {
            id: 28,
            speciality: 'Rheumatology Specialist in Pabna',
            link: '/rheumatology-pb'
        },
        {
            id: 29,
            speciality: 'Sex Specialist in Pabna',
            link: '/sex-pb'
        },
        {
            id: 30,
            speciality: 'Skin Specialist in Pabna',
            link: '/skin-pb'
        },
        {
            id: 31,
            speciality: 'Urology Specialist in Pabna',
            link: '/urology-pb'
        },
        {
            id: 31,
            speciality: 'Vascular Surgery Specialist in Pabna',
            link: '/vascular-pb'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Specialist Doctors List in Pabna</p>
            {
                specialists.map(specialist =>
                    <p key={specialist.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{specialist.speciality}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on December 12, 2022</p>
        </div>
    );
};

export default Pabna;