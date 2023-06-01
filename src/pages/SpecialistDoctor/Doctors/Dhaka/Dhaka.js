import React from 'react';
import { Link } from 'react-router-dom';

const Dhaka = () => {

    const specialists = [
        {
            id: 1,
            speciality: 'Anesthesiology Specialist in Dhaka',
            link: '/anesthesiology-d'
        },
        {
            id: 2,
            speciality: 'Breast Specialist in Dhaka',
            link: '/breast-d'
        },
        {
            id: 3,
            speciality: 'Cancer Specialist in Dhaka',
            link: '/cancer-d'
        },
        {
            id: 4,
            speciality: 'Cancer Surgery Specialist in Dhaka',
            link: '/cancer-surgery-d'
        },
        {
            id: 5,
            speciality: 'Cardiac Surgery Specialist in Dhaka',
            link: '/cardiac-surgery-d'
        },
        {
            id: 6,
            speciality: 'Cardiology Specialist in Dhaka',
            link: '/cardiology-d'
        },
        {
            id: 7,
            speciality: 'Chest & Asthma Specialist in Dhaka',
            link: '/chest-d'
        },
        {
            id: 8,
            speciality: 'Child Specialist in Dhaka',
            link: '/child-d'
        },
        {
            id: 9,
            speciality: 'Child Cardiology Specialist in Dhaka',
            link: '/child-cardiology-d'
        },
        {
            id: 10,
            speciality: 'Child Neurology Specialist in Dhaka',
            link: '/child-neurology-d'
        },
        {
            id: 11,
            speciality: 'Colorectal Surgery Specialist in Dhaka',
            link: '/colorectal-surgery-d'
        },
        {
            id: 12,
            speciality: 'Colorectal Surgery (Female) Specialist in Dhaka',
            link: '/colorectal-surgery-female-d'
        },
        {
            id: 13,
            speciality: 'Dental Specialist in Dhaka',
            link: '/dental-d'
        },
        {
            id: 14,
            speciality: 'Diabetes & Hormone Specialist in Dhaka',
            link: '/diabetes-d'
        },
        {
            id: 15,
            speciality: 'Dietitian/Nutritionist in Dhaka',
            link: '/nutritionist-d'
        },
        {
            id: 16,
            speciality: 'ENT Specialist in Dhaka',
            link: '/ent-d'
        },
        {
            id: 17,
            speciality: 'Eye Specialist in Dhaka',
            link: '/eye-d'
        },
        {
            id: 18,
            speciality: 'Gastroenterology Specialist in Dhaka',
            link: '/gastroenterology-d'
        },
        {
            id: 19,
            speciality: 'General Surgery Specialist in Dhaka',
            link: '/general-d'
        },
        {
            id: 20,
            speciality: 'Gynecology & Obstetrics Specialist in Dhaka',
            link: '/gynecology-d'
        },
        {
            id: 21,
            speciality: 'Hematology (Blood) Specialist in Dhaka',
            link: '/hematology-d'
        },
        {
            id: 22,
            speciality: 'Hepatobiliary Surgery Specialist in Dhaka',
            link: '/hepatobiliary-d'
        },
        {
            id: 23,
            speciality: 'Homeopathy Doctor in Dhaka',
            link: '/homeopathy-d'
        },
        {
            id: 24,
            speciality: 'Infertility Specialist in Dhaka',
            link: '/infertility-d'
        },
        {
            id: 25,
            speciality: 'Kidney Specialist in Dhaka',
            link: '/kidney-d'
        },
        {
            id: 26,
            speciality: 'Laparoscopic Surgery Specialist in Dhaka',
            link: '/laparoscopic-d'
        },
        {
            id: 27,
            speciality: 'Liver Specialist in Dhaka',
            link: '/liver-d'
        },
        {
            id: 28,
            speciality: 'Medicine Specialist in Dhaka',
            link: '/medicine-d'
        },
        {
            id: 29,
            speciality: 'Neurology Specialist in Dhaka',
            link: '/neurology-d'
        },
        {
            id: 30,
            speciality: 'Neuromedicine Specialist in Dhaka',
            link: '/neuromedicine-d'
        },
        {
            id: 31,
            speciality: 'Neurosurgery Specialist in Dhaka',
            link: '/neurosurgery-d'
        },
        {
            id: 32,
            speciality: 'Normal Delivery Specialist in Dhaka',
            link: '/delivery-d'
        },
        {
            id: 33,
            speciality: 'Orthopedic Specialist in Dhaka',
            link: '/orthopedic-d'
        },
        {
            id: 34,
            speciality: 'Pediatric Orthopedic Surgeon in Dhaka',
            link: '/pediatric-d'
        },
        {
            id: 35,
            speciality: 'Pediatric Surgery Specialist in Dhaka',
            link: '/pediatric-surgery-d'
        },
        {
            id: 36,
            speciality: 'Physical Medicine Specialist in Dhaka',
            link: '/physical-d'
        },
        {
            id: 37,
            speciality: 'Physiotherapy Specialist in Dhaka',
            link: '/physiotherapy-d'
        },
        {
            id: 38,
            speciality: 'Plastic Surgery Specialist in Dhaka',
            link: '/plastic-surgery-d'
        },
        {
            id: 39,
            speciality: 'Psychiatry (Mental) Specialist in Dhaka',
            link: '/psychiatry-d'
        },
        {
            id: 40,
            speciality: 'Rheumatology Specialist in Dhaka',
            link: '/rheumatology-d'
        },
        {
            id: 41,
            speciality: 'Sex Specialist in Dhaka',
            link: '/sex-d'
        },
        {
            id: 42,
            speciality: 'Skin Specialist in Dhaka',
            link: '/skin-d'
        },
        {
            id: 43,
            speciality: 'Urology Specialist in Dhaka',
            link: '/urology-d'
        },
        {
            id: 44,
            speciality: 'Vascular Surgery Specialist in Dhaka',
            link: '/vascular-d'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Specialist Doctors List in Dhaka</p>
            {
                specialists.map(specialist =>
                    <p key={specialist.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to={specialist.link}>{specialist.speciality}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on January 12, 2023</p>
        </div>
    );
};

export default Dhaka;