import React from 'react';
import { Link } from 'react-router-dom';

const Chittagong = () => {

    const specialists = [
        {
            id: 1,
            speciality: 'Anesthesiology Specialist in Chittagong',
            link: '/anesthesiology-ch'
        },
        {
            id: 2,
            speciality: 'Breast Specialist in Chittagong',
            link: '/breast-ch'
        },
        {
            id: 3,
            speciality: 'Cancer Specialist in Chittagong',
            link: '/cancer-ch'
        },
        {
            id: 4,
            speciality: 'Cardiac Surgery Specialist in Chittagong',
            link: '/cardiac-surgery-ch'
        },
        {
            id: 5,
            speciality: 'Cardiology Specialist in Chittagong',
            link: '/cardiology-ch'
        },
        {
            id: 6,
            speciality: 'Chest & Asthma Specialist in Chittagong',
            link: '/chest-ch'
        },
        {
            id: 7,
            speciality: 'Child Specialist in Chittagong',
            link: '/child-ch'
        },
        {
            id: 8,
            speciality: 'Dental Specialist in Chittagong',
            link: '/dental-ch'
        },
        {
            id: 9,
            speciality: 'Endocrinology Specialist in Chittagong',
            link: '/endocrinology-ch'
        },
        {
            id: 10,
            speciality: 'ENT Specialist in Chittagong',
            link: '/ent-ch'
        },
        {
            id: 11,
            speciality: 'Gastroenterology Specialist in Chittagong',
            link: '/gastroenterology-ch'
        },
        {
            id: 12,
            speciality: 'General Surgery Specialist in Chittagong',
            link: '/general-ch'
        },
        {
            id: 13,
            speciality: 'Gynecology & Obstetrics Specialist in Chittagong',
            link: '/gynecology-ch'
        },
        {
            id: 14,
            speciality: 'Hematology Specialist in Chittagong',
            link: '/hematology-ch'
        },
        {
            id: 15,
            speciality: 'Homeopathic Doctor in Chittagong',
            link: '/homeopathic-ch'
        },
        {
            id: 16,
            speciality: 'Infertility Specialist in Chittagong',
            link: '/infertility-ch'
        },
        {
            id: 17,
            speciality: 'Kidney Specialist in Chittagong',
            link: '/kidney-ch'
        },
        {
            id: 18,
            speciality: 'Laparoscopic Surgery Specialist in Chittagong',
            link: '/laparoscopic-ch'
        },
        {
            id: 19,
            speciality: 'Liver Specialist in Chittagong',
            link: '/liver-ch'
        },
        {
            id: 20,
            speciality: 'Medicine Specialist in Chittagong',
            link: '/medicine-ch'
        },
        {
            id: 21,
            speciality: 'Neurology Specialist in Chittagong',
            link: '/neurology-ch'
        },
        {
            id: 22,
            speciality: 'Neuromedicine Specialist in Chittagong',
            link: '/neuromedicine-ch'
        },
        {
            id: 23,
            speciality: 'Neurosurgery Specialist in Chittagong',
            link: '/neurosurgery-ch'
        },
        {
            id: 24,
            speciality: 'Nutritionist in Chittagong',
            link: '/nutritionist-ch'
        },
        {
            id: 25,
            speciality: 'Orthopedic Specialist in Chittagong',
            link: '/orthopedic-ch'
        },
        {
            id: 26,
            speciality: 'Pediatric Surgery Specialist in Chittagong',
            link: '/pediatric-ch'
        },
        {
            id: 27,
            speciality: 'Physical Medicine Specialist in Chittagong',
            link: '/physical-ch'
        },
        {
            id: 28,
            speciality: 'Plastic Surgery Specialist in Chittagong',
            link: '/plastic-surgery-ch'
        },
        {
            id: 29,
            speciality: 'Psychiatry (Mental) Specialist in Chittagong',
            link: '/psychiatry-ch'
        },
        {
            id: 30,
            speciality: 'Rheumatology Specialist in Chittagong',
            link: '/rheumatology-ch'
        },
        {
            id: 31,
            speciality: 'Sex Specialist in Chittagong',
            link: '/sex-ch'
        },
        {
            id: 32,
            speciality: 'Skin Specialist in Chittagong',
            link: '/skin-ch'
        },
        {
            id: 33,
            speciality: 'Urology Specialist in Chittagong',
            link: '/urology-ch'
        },
        {
            id: 34,
            speciality: 'Vascular Surgery Specialist in Chittagong',
            link: '/vascular-ch'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Specialist Doctors List in Chittagong</p>
            {
                specialists.map(specialist =>
                    <p key={specialist.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{specialist.speciality}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on May 8, 2023</p>
        </div>
    );
};

export default Chittagong;