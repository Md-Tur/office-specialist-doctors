import React from 'react';
import { Link } from 'react-router-dom';

const Barisal = () => {

    const doctors = [
        {
            id: 1,
            specialist: 'Anesthesiology Specialist in Barisal',
            link: '/anesthesiologyB'
        },
        {
            id: 2,
            specialist: 'Cancer Specialist in Barisal',
            link: '/cancerB'
        },
        {
            id: 3,
            specialist: 'Cardiac Surgery Specialist in Barisal',
            link: '/cardiacB'
        },
        {
            id: 4,
            specialist: 'Cardiology Specialist in Barisal',
            link: '/cardiologyB'
        },
        {
            id: 5,
            specialist: 'Chest & Asthma Specialist in Barisal',
            link: '/chestAsthmaB'
        },
        {
            id: 6,
            specialist: 'Child Specialist in Barisal',
            link: '/childB'
        },
        {
            id: 7,
            specialist: 'Colorectal Surgery Specialist in Barisal',
            link: '/colorectalB'
        },
        {
            id: 8,
            specialist: 'Dental Specialist in Barisal',
            link: '/dentalB'
        },
        {
            id: 9,
            specialist: 'Diabetes & Hormone Specialist in Barisal',
            link: '/diabetesB'
        },
        {
            id: 10,
            specialist: 'ENT Specialist in Barisal',
            link: '/entB'
        },
        {
            id: 11,
            specialist: 'Eye Specialist in Barisal',
            link: '/eyeB'
        },
        {
            id: 12,
            specialist: 'Gastroenterology Specialist in Barisal',
            link: '/gastroenterologyB'
        },
        {
            id: 13,
            specialist: 'General Surgery Specialist in Barisal',
            link: '/generalB'
        },
        {
            id: 14,
            specialist: 'Gynecology & Obstetrics Specialist in Barisal',
            link: '/gynecologyB'
        },
        {
            id: 15,
            specialist: 'Hematology Blood Specialist in Barisal',
            link: '/hematologyB'
        },
        {
            id: 16,
            specialist: 'Infertility Specialist in Barisal',
            link: '/infertilityB'
        },
        {
            id: 17,
            specialist: 'Kidney Specialist in Barisal',
            link: '/kidneyB'
        },
        {
            id: 18,
            specialist: 'Laparoscopic Surgery Specialist in Barisal',
            link: '/laparoscopicB'
        },
        {
            id: 19,
            specialist: 'Liver Specialist in Barisal',
            link: '/liverB'
        },
        {
            id: 20,
            specialist: 'Medicine Specialist in Barisal',
            link: '/medicineB'
        },
        {
            id: 21,
            specialist: 'Neurology Specialist in Barisal',
            link: '/meurologyB'
        },
        {
            id: 22,
            specialist: 'Neuromedicine Specialist in Barisal',
            link: '/neuromedicineB'
        },
        {
            id: 23,
            specialist: 'Neurosurgery Specialist in Barisal',
            link: '/neurosurgeryB'
        },
        {
            id: 24,
            specialist: 'Orthopedic Specialist in Barisal',
            link: '/orthopedicB'
        },
        {
            id: 25,
            specialist: 'Pediatric Surgery Specialist in Barisal',
            link: '/pediatricB'
        },
        {
            id: 26,
            specialist: 'Physical Medicine Specialist in Barisal',
            link: '/physicalB'
        },
        {
            id: 27,
            specialist: 'Plastic Surgery Specialist in Barisal',
            link: '/plasticB'
        },
        {
            id: 28,
            specialist: 'Psychiatry (Mental) Specialist in Barisal',
            link: '/psychiatryB'
        },
        {
            id: 29,
            specialist: 'Rheumatology Specialist in Barisal',
            link: '/rheumatologyB'
        },
        {
            id: 30,
            specialist: 'Sex Specialist in Barisal',
            link: '/sexB'
        },
        {
            id: 31,
            specialist: 'Skin Specialist in Barisal',
            link: '/skinB'
        },
        {
            id: 32,
            specialist: 'Urology Specialist in Barisal',
            link: '/urologyB'
        },
        {
            id: 33,
            specialist: 'Vascular Surgery Specialist in Barisal',
            link: '/vascularB'
        }
    ]

    return (
        <div className='container mx-auto px-72'>
            <p className='flex justify-center border py-2 px-[5px] my-3 text-black p-4 text-3xl font-bold'>Specialist Doctors List in Barisal</p>
            {
                doctors.map(doctor =>
                    <p key={doctor.id} className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/hotline">{doctor.specialist}</Link></p>
                )
            }
            <p className='border text-lg text-center py-3 mb-3'>Updated on December 12, 2022</p>
        </div>
    );
};

export default Barisal;