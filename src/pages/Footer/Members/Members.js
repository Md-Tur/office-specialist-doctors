import React from 'react';
import rating from '../../../images/members/Star-Rating.png';
import imran from '../../../images/members/Dr.-Md.-Imran-Hossain.jpg';
import ruly from '../../../images/members/Dr.-Ruly-Binte-Rahim.jpg';
import mizanur from '../../../images/members/Dr.-Md.-Mizanur-Rahman-1.jpg';
import shahriar from '../../../images/members/Dr.-Shahriar-Md.-Kabir-Hasan.jpg';
import shahinara from '../../../images/members/Dr-Shahinara-Islam-Marine.jpg';
import mamun from '../../../images/members/Dr.-M-A-Mamun.jpg';
import kibria from '../../../images/members/Dr.-smg-Kibria.jpg';
import kibria1 from '../../../images/members/Prof.-Dr.-SMG-Kibria.jpg';
import kibria2 from '../../../images/members/Prof.-Dr-S.M.G.-Kibria.jpg';
import sharmin from '../../../images/members/Dr.-Sharmin-Akter-Liza.jpg';
import asif from '../../../images/members/Dr.-Asif-Imran-Siddiqui.jpg';
import mallick from '../../../images/members/Dr-SK-Mallick.jpg';
import masudul from '../../../images/members/Dr.-Masudul-Hasan.jpg';
import siddiqur from '../../../images/members/Dr.-Siddiqur-Rahman.jpg';
import muhammad from '../../../images/members/Dr.-Muhammad-Moniruzzaman.jpg';
import sanjoy from '../../../images/members/Dr.-Sanjoy-Kumer-Das.jpg';
import aslam from '../../../images/members/Dr.-Aslam-Almehdi-1.jpg';
import bijoy from '../../../images/members/Dr.-Bijoy-Kumar-Dutta.jpg';
import abdullah from '../../../images/members/Dr.-Abdullah-Al-Mukit.jpg';
import asma from '../../../images/members/Dr.-Most.-Asma-Khatun.jpg';
import momin from '../../../images/members/Lt.-Col.-Dr.-Momin-Uddin-Kallol.jpg';
import sahbub from '../../../images/members/Asso.-Prof.-Dr.-Md.-Sahbub-Alam.jpg';
import khalekuzzaman from '../../../images/members/Dr.-ABM-Khalekuzzaman-Shipon.jpg';
import ruhul from '../../../images/members/Dr.-Md.jpg';
import beauty from '../../../images/members/Dr.-Beauty-Paul.jpg';
import salahuddin from '../../../images/members/Dr.-Salahuddin-Mohammed-Ali-Haider.jpg';
import kumrul from '../../../images/members/Prof.-Brig.-Gen.-Dr.-Kumrul-Hasan.jpg';
import dulal from '../../../images/members/Asst-Prof-Dr.-Dulal-Chandra-Das.jpg';

const Members = () => {

    const doctors = [
        {
            id: 1,
            img: imran,
            name: 'Dr. Md. Imran Hossain',
            degree: 'BDS (DU), MSS (Clinical) DU, MPH (USA), PGT (Orthodontic), PGT (OMS) BSMMU Research Fellow & Surgeon (STRC Project, Smile Train, USA), Advanced Implantology (Thailand), Invisalign (Thailand & India), Advance Training in Fixed Orthodontic Braces, Implantology & Laser Dentistry (India)',
            specialist: 'Dental Implant, Invisalign, Dental Braces, Smile Design, Oral Surgery & Tooth Whitening Specialist',
            chember: 'Dental View Orthodontics & Implant Center',
            rating: rating,
            points: '(56)'
        },
        {
            id: 2,
            img: ruly,
            name: 'Dr. Ruly Binte Rahim',
            degree: 'MBBS, BCS (Health), FCPS (Obs & Gynae)',
            specialist: 'Gynecology, Obstetrics, Infertility Specialist & Surgeon',
            chember: 'Sylhet MAG Osmani Medical College & Hospital and Popular Medical Centre & Hospital, Subhanighat, Sylhet',
            rating: rating,
            points: '(12)'
        },
        {
            id: 3,
            img: mizanur,
            name: 'Dr. Md. Mizanur Rahman',
            degree: 'MBBS, MS (ORTHO), FACS (USA), AO Spine BASIC (India), Advance AO Spine Course (SG, MY) AO Trauma BASIC (Inida), AO Trauma Advance (BD), Arthroplasty BASIC (India)',
            specialist: 'Arthroplasty, Trauma & Spine Surgery Specialist',
            chember: 'Mugda Medical College & Hospital',
            rating: rating,
            points: '(36)'
        },
        {
            id: 4,
            img: shahriar,
            name: 'Dr. Shahriar Md. Kabir Hasan',
            degree: 'MBBS, BCS (Health), MS (Urology)',
            specialist: 'Kidney, Ureter, Bladder, Prostate, Male Genitalia, Male Infertility, Sexual Disease Specialist, Endoscopic & Laparoscopic Surgeon',
            chember: 'National Institute of Kidney Diseases & Urology',
            rating: rating,
            points: '(195)'
        },
        {
            id: 5,
            img: shahinara,
            name: 'Dr. Shahinara Islam Marine',
            degree: 'MBBS (AFMC), BCS (Health), MCPS (Obs & Gynae), FCPS (Obs & Gynae)',
            specialist: 'Gynecology, Obstetrics, Infertility Specialist & Surgeon',
            chember: 'Sylhet MAG Osmani Medical College & Hospital',
            rating: rating,
            points: '(13)'
        },
        {
            id: 6,
            img: mamun,
            name: 'Dr. M A Mamun',
            degree: 'MBBS, BCS (Health), MS (Orthopedics-NITOR) Member of AO Spine (Switzerland), Member of SICOT (Belgium)',
            specialist: 'Spine, Arthroscopic, Trauma and Orthopedic Surgeon',
            chember: 'National Institute of Traumatology & Orthopedic Rehabilitation',
            rating: rating,
            points: '(21)'
        },
        {
            id: 7,
            img: kibria,
            name: 'Prof. Dr. S.M.G. Kibria',
            degree: 'FRCS (England), FRCS (Glasgow), FRCS (Edinburgh), FRCS (General), MSc (Leeds), MBBS (DMC) General, Laparoscopic & Vascular Surgeon',
            specialist: 'Varicose Veins, Dialysis Fistula, Leg Gangrene, Poor Circulation, Peripheral Vascular Disease, Carotid Artery Surgery, Lymphedema, DVT, CVI, Aortic Aneurysm',
            chember: 'Lake View Clinic, Gulshan',
            rating: rating,
            points: '(28)'
        },
        {
            id: 8,
            img: kibria1,
            name: 'Prof. Dr. S.M.G. Kibria',
            degree: 'FRCS (England), FRCS (Glasgow), FRCS (Edinburgh), FRCS (General), MSc (Leeds), MBBS (DMC) General, Laparoscopic & Vascular Surgeon',
            specialist: 'Gallbladder, Laparoscopic Hernia Repair, Laparoscopic Appendectomy, Diagnostic Laparoscopy, Laparoscopic Adhesiolysis',
            chember: 'Lake View Clinic, Gulshan',
            rating: rating,
            points: '(20)'
        },
        {
            id: 9,
            img: kibria2,
            name: 'Prof. Dr. S.M.G. Kibria',
            degree: 'FRCS (England), FRCS (Glasgow), FRCS (Edinburgh), FRCS (General), MSc (Leeds), MBBS (DMC) General, Laparoscopic & Vascular Surgeon',
            specialist: 'Piles, Fistula, Fissure, Breast Cancer, Bowel Surgery, Stomach Surgery Specialist',
            chember: 'Lake View Clinic, Gulshan',
            rating: rating,
            points: '(18)'
        },
        {
            id: 10,
            img: sharmin,
            name: 'Asst. Prof. Dr. Sharmin Akter Liza',
            degree: 'MBBS, FCPS (OBGYN)',
            specialist: 'Gynecology, Infertility Specialist & Laparoscopic Surgeon',
            chember: 'Institute of Child and Mother Health (ICMH)',
            rating: rating,
            points: '(33)'
        },
        {
            id: 11,
            img: asif,
            name: 'Dr. Asif Imran Siddiqui',
            degree: 'MBBS (AFMC), DDV (Thailand) Fellowship Training in Laser & Cutaneous Surgery (Thailand)',
            specialist: 'Skin, Allergy, Hair, Nail, Sexual Diseases Specialist & Laser Surgeon',
            chember: 'Skinic Dermatology Centre, Mirpur',
            rating: rating,
            points: '(19)'
        },
        {
            id: 12,
            img: mallick,
            name: 'Dr. SK Mallick',
            degree: 'MBBS, MCPS (Medicine), MPH, MD (Cardiology), FIC Cardiology (Heart, Hypertension, Rheumatic Fever) & Medicine Specialist',
            specialist: 'Max Hospital & Diagnostic Ltd, Chittagong',
            chember: 'Senior Consultant (Ex), AFC Fortis Hospital & SP Cardiologist (Ex), United Hospital, Dhaka',
            rating: rating,
            points: '(20)'
        },
        {
            id: 13,
            img: masudul,
            name: 'Dr. Masudul Hasan',
            degree: 'MBBS, FCPS (EYE), DO (DU), MCPS (EYE)',
            specialist: 'Eye (Cornea & Interior segment) Specialist & Refractive Surgeon',
            chember: 'Vision Eye Hospital, Dhaka',
            rating: rating,
            points: '(4)'
        },
        {
            id: 14,
            img: siddiqur,
            name: 'Dr. Siddiqur Rahman',
            degree: 'MBBS, DO (DU), FCPS (EYE)',
            specialist: 'Eye Diseases (Glaucoma) Specialist & Refractive Surgeon',
            chember: 'Vision Eye Hospital, Dhaka',
            rating: rating,
            points: '(8)'
        },
        {
            id: 15,
            img: muhammad,
            name: 'Dr. Muhammad Moniruzzaman',
            degree: 'MBBS, FCPS, FACS, FSIO Fellow Sankar Foundation Eye Institute (India)',
            specialist: 'Eye Specialist, Vitreo-Retina Specialist & Surgeon',
            chember: 'Vision Eye Hospital, Dhaka',
            rating: rating,
            points: '(48)'
        },
        {
            id: 16,
            img: sanjoy,
            name: 'Dr. Sanjoy Kumer Das',
            degree: 'MBBS (Dhaka), BCS (Health), DLO (BSMMU)',
            specialist: 'ENT (Ear, Nose, Throat) Specialist & Head Neck Surgeon',
            chember: 'Sher-E-Bangla Medical College & Hospital',
            rating: rating,
            points: '(7)'
        },
        {
            id: 17,
            img: aslam,
            name: 'Assoc. Prof. Dr. Aslam Almehdi',
            degree: 'BDS, MS, PhD (Tokyo), FIAOO (UK), FICD (USA), Postdoc (Australia)',
            specialist: 'Oral, Dental, Periodontal Plastic & Maxillofacial Surgeon',
            chember: 'Delta Medical College & Hospital',
            rating: rating,
            points: '(26)'
        },
        {
            id: 18,
            img: bijoy,
            name: 'Dr. Bijoy Kumar Dutta',
            degree: 'MBBS, BCS (Health), MD (Psychiatry)',
            specialist: 'Mental Diseases, Autism, Drug Addiction, Sex Medicine Specialist & Psychologist',
            chember: 'Chittagong Medical College & Hospital',
            rating: rating,
            points: '(100)'
        },
        {
            id: 19,
            img: abdullah,
            name: 'Dr. Abdullah Al Mukit',
            degree: 'MBBS (DMC), BCS (Health), MD (Hepatology), MACP (USA)',
            specialist: 'Liver Specialist & Interventional Hepatologist',
            chember: 'Rajshahi Medical College & Hospital',
            rating: rating,
            points: '(22)'
        },
        {
            id: 20,
            img: asma,
            name: 'Dr. Asma Khatun Aurora',
            degree: 'MBBS, FCPS (Obstetrics & Gynaecology), BCS (Health), CMU (Ultrasound, BTEB) MS (Thesis, Dhaka Medical College Hospital), MRCOG (FP, London, United Kingdom)',
            specialist: 'Obstetrics & Gynaecology Specialist & Surgeon',
            chember: 'Dhaka Medical College & Hospital',
            rating: rating,
            points: '(80)'
        },
        {
            id: 21,
            img: momin,
            name: 'Lt. Col. Dr. Md. Momin Uddin Kallol',
            degree: 'MBBS (SSMC), FCPS (ENT), DLO, MCPS Fellow of International College of Surgeons (FICS), USA Fellow in Head Neck Cancer Surgery (Tata Memorial Cancer Hospital, Mumbai) Advanced Fellowship Training in Endoscopic Sinus Surgery (Bangalore, Pune, India)',
            specialist: 'ENT (Ear, Nose, Throat) Specialist & Head Neck Cancer Surgeon Super specialty in Thyroid, Tongue, Tonsil & Oral Cavity Cancer Surgery',
            chember: 'Combined Military Hospital, Dhaka',
            rating: rating,
            points: '(23)'
        },
        {
            id: 22,
            img: sahbub,
            name: 'Asso. Prof. Dr. Md. Sahbub Alam',
            degree: 'MBBS, FCPS (ENT), MS (ENT) Special Training on Micro Ear Surgery & Endoscopic Sinus Surgery, Training on VIMS & KKR Institute, India',
            specialist: 'ENT (Ear, Nose, Throat) Specialist & Head Neck Surgeon',
            chember: 'Sir Salimullah Medical College & Mitford Hospital',
            rating: rating,
            points: '(57)'
        },
        {
            id: 23,
            img: khalekuzzaman,
            name: 'Dr. ABM Khalekuzzaman Shipon',
            degree: 'MBBS, PGT (SKIN & VD), FRSH (London), Training (Dermato & Cosmetic Surgery)',
            specialist: 'Skin, Sexual Diseases, Allergy, Hair Specialist & Cosmetic Surgeon',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital',
            rating: rating,
            points: '(112)'
        },
        {
            id: 24,
            img: ruhul,
            name: 'Dr. Md. Ruhul Amin',
            degree: 'MBBS, BCS (Health), FCPS (Physical Medicine), FIPM (India), Fellow (TOBI USA)',
            specialist: 'Physical Medicine (Pain, Paralysis) & Rehabilitation Specialist',
            chember: 'Sir Salimullah Medical College & Mitford Hospital',
            rating: rating,
            points: '(25)'
        },
        {
            id: 25,
            img: beauty,
            name: 'Dr. Beauty Paul Nandy',
            degree: 'MBBS, DGO, MCPS (OBGYN)',
            specialist: 'Obstetrics, Gynecology Specialist & Surgeon',
            chember: 'Jemison Red Crescent Maternity Hospital, Chittagong',
            rating: rating,
            points: '(154)'
        },
        {
            id: 26,
            img: salahuddin,
            name: 'Dr. Salahuddin Mohammed Ali Haider',
            degree: 'MBBS, FCPS (Medicine), MD (Gastroenterology), Training (Endoscopy & Colonoscopy)',
            specialist: 'Gastroenterology & Liver Diseases Specialist',
            chember: 'Chittagong Medical College & Hospital',
            rating: rating,
            points: '(96)'
        },
        {
            id: 27,
            img: kumrul,
            name: 'Prof. Brig. Gen. Dr. Kumrul Hasan',
            degree: 'MBBS, MCPS, MPHIL (Psychiatry), MMEd, Fellow Child Psychiatry (Pakistan), MACP (USA), FRCP (UK)',
            specialist: 'Psychiatry, Brain, Drug Addiction, Sex Specialist & Neuro Psychiatrist',
            chember: 'Combined Military Hospital, Dhaka',
            rating: rating,
            points: '(82)'
        },
        {
            id: 28,
            img: dulal,
            name: 'Asst. Prof. Dr. Dulal Chandra Das',
            degree: 'MBBS, MD (Hepatology)',
            specialist: 'Liver, Gallbladder, Biliary, Pancreas & Gastroenterology Specialist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital',
            rating: rating,
            points: '(44)'
        }
    ]

    return (
        <div className='container mx-auto px-72 mb-5'>
            <h1 className='text-2xl font-bold text-center border py-3'>আমাদের মেম্বারশিপ নেয়া সন্মানিত ডাক্তারদের তালিকা</h1>
            <p className='text-lg text-center border px-3 py-4 my-3'>ডক্টর বাংলাদেশ ওয়েবসাইটের এর পক্ষ থেকে আপনাকে আন্তরিক শুভেচ্ছা ও অভিনন্দন। আপনি জেনে খুশি হবেন যে, এই ওয়েবসাইটটি গুগল সার্চে সবসময় প্রথম পেজে থাকে। প্রথম পেজে থাকার কারনে প্রতিদিন প্রচুর রোগী এই ওয়েবসাইটে ভিজিট করে। আপনি যদি আপনার রোগীর সংখ্যা এবং পরিচিতি বাড়াতে চান তাহলে আমাদের মেম্বারশিপ নিতে পারেন।<span className='text-[#008000]'> আমাদের মেম্বারশিপ নিলে আপনার প্রোফাইল লিস্টের সবার উপরে রাখা হবে। এতে আপনার রোগীর সংখ্যা এবং পরিচিতি বেড়ে যাবে।</span> <span className='text-[#FF0000]'>মেম্বারশিপ ফি (বার্ষিক) - ৫১০০ টাকা (১ম পজিশন), ৪০৮০ টাকা (২য় পজিশন) এবং ৩০৬০ টাকা (৩য় পজিশন)।</span> যোগাযোগ করতে কল করুন - <span className='text-[#2a7fba] hover:underline hover:cursor-pointer hover:text-black'>০১৭৫২১৮৮৯৮৮</span></p>
            <h1 className='text-2xl font-bold text-center border py-3'>নিচে আমাদের মেম্বারশিপ নেয়া সন্মানিত ডাক্তারদের তালিকা দেয়া হলো</h1>

            {
                doctors.map(doctor =>
                    <div key={doctor.id} className='mt-3 border p-4 flex justify-center mb-3'>
                        <div className='flex flex-col justify-center'>
                            <div className='flex justify-center'>
                                <img className='w-[150px] border border-[#2a7fba] p-[2px]' src={doctor.img} alt="doctor" />
                            </div>
                            <div className='flex flex-col text-center justify-center my-3'>
                                <p className='text-2xl font-bold text-[#2a7fba]'>{doctor.name}</p>
                                <p className='my-3 text-lg px-3'>{doctor.degree}</p>
                                <p className='text-lg font-bold text-red-600'>{doctor.specialist}</p>
                                <p className='my-3 text-lg'>{doctor.chember}</p>
                                <div className='flex gap-2 justify-center items-center'>
                                    <img className='h-7' src={doctor.rating} alt="rating" />
                                    <p>{doctor.points}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Members;