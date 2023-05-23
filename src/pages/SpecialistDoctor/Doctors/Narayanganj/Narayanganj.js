import React from 'react';
import { Link } from 'react-router-dom';

const Narayanganj = () => {

    const specialists = [
        {
            id: 1,
            speciality: 'Cancer Specialist in Narayanganj',
            link: '/cancer-n'
        },
        {
            id: 2,
            speciality: 'Cardiac Surgery Specialist in Narayanganj',
            link: '/cardiac-n'
        },
        {
            id: 3,
            speciality: 'Cardiology Specialist in Narayanganj',
            link: '/cardiology-n'
        },
        {
            id: 4,
            speciality: 'Chest & Asthma Specialist in Narayanganj',
            link: '/chest-n'
        },
        {
            id: 5,
            speciality: 'Child Specialist in Narayanganj',
            link: '/child-n'
        },
        {
            id: 6,
            speciality: 'Colorectal Surgery Specialist in Narayanganj',
            link: '/colorectal-n'
        },
        {
            id: 7,
            speciality: 'Dental Specialist in Narayanganj',
            link: '/dental-n'
        },
        {
            id: 8,
            speciality: 'Diabetes & Hormone Specialist in Narayanganj',
            link: '/diabetes-n'
        },
        {
            id: 9,
            speciality: 'ENT Specialist in Narayanganj',
            link: '/ent-n'
        },
        {
            id: 9,
            speciality: 'ENT Specialist in Narayanganj',
            link: '/ent-n'
        },
        {
            id: 10,
            speciality: 'Eye Specialist in Narayanganj',
            link: '/eye-n'
        },
        {
            id: 11,
            speciality: 'Gastroenterology Specialist in Narayanganj',
            link: '/gastroenterology-n'
        },
        {
            id: 12,
            speciality: 'General Surgery Specialist in Narayanganj',
            link: '/general-n'
        },
        {
            id: 13,
            speciality: 'Gynecology & Obstetrics Specialist in Narayanganj',
            link: '/gynecology-n'
        },
        {
            id: 14,
            speciality: 'Hematology (Blood) Specialist in Narayanganj',
            link: '/hematology-n'
        },
        {
            id: 15,
            speciality: 'Infertility Specialist in Narayanganj',
            link: '/infertility-n'
        },
        {
            id: 16,
            speciality: 'Kidney Specialist in Narayanganj',
            link: '/kidney-n'
        },
        {
            id: 17,
            speciality: 'Laparoscopic Surgery Specialist in Narayanganj',
            link: '/laparoscopic-n'
        },
        {
            id: 18,
            speciality: 'Liver Specialist in Narayanganj',
            link: '/liver-n'
        },
        {
            id: 19,
            speciality: 'Medicine Specialist in Narayanganj',
            link: '/medicine-n'
        },
        {
            id: 20,
            speciality: 'Neurology Specialist in Narayanganj',
            link: '/neurology-n'
        },
        {
            id: 21,
            speciality: 'Neuromedicine Specialist in Narayanganj',
            link: '/neuromedicine-n'
        },
        {
            id: 22,
            speciality: 'Neurosurgery Specialist in Narayanganj',
            link: '/neurosurgery-n'
        },
        {
            id: 23,
            speciality: 'Orthopedic Specialist in Narayanganj',
            link: '/orthopedic-n'
        },
        {
            id: 24,
            speciality: 'Pediatric Surgery Specialist in Narayanganj',
            link: '/pediatric-n'
        },
        {
            id: 25,
            speciality: 'Physical Medicine Specialist in Narayanganj',
            link: '/physical-n'
        },
        {
            id: 26,
            speciality: 'Plastic Surgery Specialist in Narayanganj',
            link: '/plastic-surgery-n'
        },
        {
            id: 27,
            speciality: 'Psychiatry (Mental) Specialist in Narayanganj',
            link: '/psychiatry-n'
        },
        {
            id: 28,
            speciality: 'Rheumatology Specialist in Narayanganj',
            link: '/rheumatology-n'
        },
        {
            id: 29,
            speciality: 'Sex Specialist in Narayanganj',
            link: '/sex-n'
        },
        {
            id: 30,
            speciality: 'Skin Specialist in Narayanganj',
            link: '/skin-n'
        },
        {
            id: 31,
            speciality: 'Urology Specialist in Narayanganj',
            link: '/urology-n'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Specialist Doctors List in Narayanganj</p>
            {
                specialists.map(specialist =>
                    <p key={specialist.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{specialist.speciality}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on December 12, 2022</p>
        </div>
    );
};

export default Narayanganj;