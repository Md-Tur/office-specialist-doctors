import React from 'react';
import { Link } from 'react-router-dom';

const Comilla = () => {

    const specialists = [
        {
            id: 1,
            speciality: 'Cancer Specialist in Comilla',
            link: '/cancer-c'
        },
        {
            id: 2,
            speciality: 'Cardiac Surgery Specialist in Comilla',
            link: '/cardiac-c'
        },
        {
            id: 3,
            speciality: 'Cardiology Specialist in Comilla',
            link: '/cardiology-c'
        },
        {
            id: 4,
            speciality: 'Chest & Asthma Specialist in Comilla',
            link: '/chest-c'
        },
        {
            id: 5,
            speciality: 'Child Specialist in Comilla',
            link: '/child-c'
        },
        {
            id: 6,
            speciality: 'Colorectal Surgery Specialist in Comilla',
            link: '/colorectal-c'
        },
        {
            id: 7,
            speciality: 'Dental Specialist in Comilla',
            link: '/dental-c'
        },
        {
            id: 8,
            speciality: 'Diabetes & Hormone Specialist in Comilla',
            link: '/diabetes-c'
        },
        {
            id: 9,
            speciality: 'ENT Specialist in Comilla',
            link: '/ent-c'
        },
        {
            id: 10,
            speciality: 'Eye Specialist in Comilla',
            link: '/eye-c'
        },
        {
            id: 11,
            speciality: 'Gastroenterology Specialist in Comilla',
            link: '/gastroenterology-c'
        },
        {
            id: 12,
            speciality: 'General Surgery Specialist in Comilla',
            link: '/general-c'
        },
        {
            id: 13,
            speciality: 'Gynecology & Obstetrics Specialist in Comilla',
            link: '/gynecology-c'
        },
        {
            id: 14,
            speciality: 'Hematology (Blood) Specialist in Comilla',
            link: '/hematology-c'
        },
        {
            id: 15,
            speciality: 'Infertility Specialist in Comilla',
            link: '/infertility-c'
        },
        {
            id: 16,
            speciality: 'Kidney Specialist in Comilla',
            link: '/kidney-c'
        },
        {
            id: 17,
            speciality: 'Laparoscopic Surgery Specialist in Comilla',
            link: '/laparoscopic-c'
        },
        {
            id: 18,
            speciality: 'Liver Specialist in Comilla',
            link: '/liver-c'
        },
        {
            id: 19,
            speciality: 'Medicine Specialist in Comilla',
            link: '/medicine-c'
        },
        {
            id: 20,
            speciality: 'Neurology Specialist in Comilla',
            link: '/neurology-c'
        },
        {
            id: 21,
            speciality: 'Neuromedicine Specialist in Comilla',
            link: '/neuromedicine-c'
        },
        {
            id: 22,
            speciality: 'Neurosurgery Specialist in Comilla',
            link: '/neurosurgery-c'
        },
        {
            id: 23,
            speciality: 'Orthopedic Specialist in Comilla',
            link: '/orthopedic-c'
        },
        {
            id: 24,
            speciality: 'Pediatric Surgery Specialist in Comilla',
            link: '/pediatric-c'
        },
        {
            id: 25,
            speciality: 'Physical Medicine Specialist in Comilla',
            link: '/physical-c'
        },
        {
            id: 26,
            speciality: 'Plastic Surgery Specialist in Comilla',
            link: '/plastic-surgery-c'
        },
        {
            id: 27,
            speciality: 'Psychiatry (Mental) Specialist in Comilla',
            link: '/psychiatry-c'
        },
        {
            id: 28,
            speciality: 'Rheumatology Specialist in Comilla',
            link: '/rheumatology-c'
        },
        {
            id: 29,
            speciality: 'Sex Specialist in Comilla',
            link: '/sex-c'
        },
        {
            id: 30,
            speciality: 'Skin Specialist in Comilla',
            link: '/skin-c'
        },
        {
            id: 31,
            speciality: 'Urology Specialist in Comilla',
            link: '/urology-c'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Specialist Doctors List in Comilla</p>
            {
                specialists.map(specialist =>
                    <p key={specialist.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{specialist.speciality}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on December 12, 2022</p>
        </div>
    );
};

export default Comilla;