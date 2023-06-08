import React from 'react';
import { Link } from 'react-router-dom';
// images
import moarraf from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Md.-Moarraf-Hossen.jpg';
import manzur from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Kazi-Manzur-Kader.jpg';
import parveen from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Parveen-Shahida-Akhter.jpg';
import shirin from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Shirin-Akter-Begum.jpg';
import qamruzzaman from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Qamruzzaman-Chowdhury.jpg';
import kamal from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-A.F.M.-Kamal-Uddin.jpg';
import swapan from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Swapan-Bandyopadhyay.jpg';
import mofazzel from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Md.-Mofazzel-Hossain.jpg';
import sabera from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Sabera-Khatun.jpg';
import asaduzzaman from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Asaduzzaman-Biddut.jpg';
import bhaskar from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Bhaskar-Chakraborty.jpg';
import kamrul from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-A.T.M.-Kamrul-Hasan.jpg';
import rafiqul from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Md.-Rafiqul-Islam-2.jpg';
import shariful from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-AMM-Shariful-Alam.jpg';
import swadesh from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Swadesh-Barman.jpg';
import zafor from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Zafor-Md.-Masud.jpg';
import tarit from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Tarit-Kumar-Samadder.jpg';
import rakib from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Rakib-Uddin-Ahmed.jpg';
import mostafa from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Mostafa-Aziz-Sumon.jpg';
import parvin from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Parvin-Akhter-Banu.jpg';
import yousuf from '../../../../../images/Specialist/Dhaka/Cancer/Brig.-Gen.-Prof.-Dr.-Md.-Yousuf-Ali.jpg';
import mehbub from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Md.-Mehbub-Ahsan.jpg';
import ferdous from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Ferdous-Shahriar-Sayed.jpg';
import zillur from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Zillur-Rahman-Bhuiyan.jpg';
import rehana from '../../../../../images/Specialist/Dhaka/Cancer/dr-female.jpg';
import golam from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Sk.-Golam-Mostofa.jpg';
import aliya from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Aliya-Shahnaz.jpg';
import masudul from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Muhammad-Masudul-Hasan-Arup.jpg';
import mushtaq from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Qazi-Mushtaq-Hussain.jpg';
import hafizur from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Md.-Hafizur-Rahman-Ansary.jpg';
import shaheen from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Md.-Shahin-Ferdous.jpg';
import hamidur from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-A.K.M-Hamidur-Rahman.jpg';
import rokaya from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Rokaya-Sultana-Ruma.jpg';
import rowshon from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Rowshon-Ara-Begum.jpg';
import sarwar from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Sarwar-Alam-1.jpg';
import arman from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Arman-Reza-Chowdhury.jpg';
import happy from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Happy-Haque.jpg';
import anisur from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-DR.-S-M.-Anisur-Rahman.jpg';
import shahida from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Shahida-Alam-Lima.jpg';
import arunangshu from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Arunangshu-Das.jpg';
import abdul from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Md.-Abdul-Ahsan-Didar.jpg';
import akram from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Syed-Muhammad-Akram-Hussain.jpg';
import biswajit from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Biswajit-Bhattacharjee.jpg';
import taslima from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Taslima-Nigar.jpg';
import khorshed from '../../../../../images/Specialist/Dhaka/Cancer/dr-male.jpg';
import rafiqul1 from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Muhammad-Rafiqul-Islam.jpg';
import kamruzzaman from '../../../../../images/Specialist/Dhaka/Cancer/';
import lubna from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Lubna-Mariam.jpg';
import nizamul from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Md.-Nizamul-Haque.jpg';
import ashim from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Ashim-Kumar-Sengupta.jpg';
import toufiq from '../../../../../images/Specialist/Dhaka/Cancer/dr-male.jpg';
import hosneara from '../../../../../images/Specialist/Dhaka/Cancer/dr-female.jpg';
import nahid from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Md.-Nahid-Hossen.jpg';
import nazrul from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Md.-Nazrul-Islam.jpg';
import ehteshamul from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Md.-Ehteshamul-Hoque.jpg';
import sadia from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Sadia-Sharmin.jpg';
import ferdousAra from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Ferdous-Ara-Begum.jpg';
import shaiful from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Shaiful-Hassan-Shameem.jpg';
import kamrun from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Kamrun-Nahar-Tania.jpg';
import shuvra from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Shuvra-Debnath.jpg';
import arifur from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Md.-Arifur-Rahman.jpg';
import salim from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Md.-Salim-Reza.jpg';
import mamunur from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Md.-Mamunur-Rashid-1.jpg';
import shakhawat from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Mirza-Md-Shakhawat-Hossain.jpg';
import johnny from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Md.-Shariful-Islam-Johnny.jpg';
import shamsun from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Shamsun-Nahar-1.jpg';
import arman1 from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Kazi-Abdullah-Arman.jpg';
import momtahena from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Sura-Jukrup-Momtahena.jpg';
import jalalur from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Md.-Shah-Jalalur-Rahman-Shahi.jpg';
import rubina from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Mosammat-Rubina-Sultana.jpg';
import samina from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Samina-Islam.jpg';
import nusrat from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Nusrat-Hoque.jpg';
import rezaul from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Md.-Rezaul-Sharif.jpg';
import meher from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Meher-Jabin.jpg';
import santanu from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Santanu-Chaudhuri.jpg';
import mamun from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Abdullah-Al-Mamun-Khan.jpg';
import sarwar1 from '../../../../../images/Specialist/Dhaka/Cancer/Lt.-Col.-Dr.-M.S.-Sarwar-Alam.jpg';
import muhammad from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Abdullah-Al-Mamun-Khan.jpg';
import yeaqub from '../../../../../images/Specialist/Dhaka/Cancer/Prof.-Dr.-Md.-Yeaqub-Ali.jpg';
import tania from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Tania-Sultana.jpg';
import siddiqua from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Asma-Siddiqua.jpg';
import tannima from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Tannima-Adhikary.jpg';
import samia from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Samia-Ahmed.jpg';
import fariah from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Fariah-Sharmeen.jpg';
import sarowat from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Sarowat-Sultana.jpg';
import mannan from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Md-Abdul-Mannan.jpg';
import jannatul from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Jannatul-Ferdause.jpg';
import foujia from '../../../../../images/Specialist/Dhaka/Cancer/Dr.-Foujia-Sharmin.jpg';
import aditi from '../../../../../images/Specialist/Dhaka/Cancer/Dr-.-Aditi-Paul-Chowdhury.jpg';

const CancerDhaka = () => {

    const doctors = [
        {
            id: 1,
            img: moarraf,
            name: 'Prof. Dr. Md. Moarraf Hossen',
            degree: 'MBBS, DMRT (BSMMU), FCPS (Radiotherapy), Fellowship Training (India, Singapore)',
            specialist: 'Cancer Specialist & Radiation Oncologist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 2,
            img: manzur,
            name: 'Prof. Dr. Kazi Manzur Kader',
            degree: 'MBBS, DMRT, MSC, FACP, FRCP, Fellowship Training in Radiation Oncology (India), WHO Fellow Oncology (Bangkok)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 3,
            img: parveen,
            name: 'Prof. Dr. Parveen Shahida Akhter',
            degree: 'MBBS (SBMC), FCPS (Radiotherapy)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 4,
            img: shirin,
            name: 'Prof. Dr. Shirin Akter Begum',
            degree: 'MBBS, DGO, MCPS, MS (OBGYN)',
            specialist: 'Gynecology, Obstetrics, Gynecological Cancer Specialist & Surgeon',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 5,
            img: qamruzzaman,
            name: 'Prof. Dr. Qamruzzaman Chowdhury',
            degree: 'MBBS, FCPS (Radiation Oncology), DMRT (Radiotherapy)',
            specialist: 'Cancer & Radiotherapy Specialist',
            chember: 'Ahsania Mission Cancer & General Hospital'
        },
        {
            id: 6,
            img: kamal,
            name: 'Dr. A.F.M. Kamal Uddin',
            degree: 'MBBS, DTCD, MD (Radiotherapy), ICRETT Fellow (SG), IAEA Fellow (USA)',
            specialist: 'Cancer & Radiation Oncology Specialist',
            chember: 'United Hospital, Dhaka'
        },
        {
            id: 7,
            img: swapan,
            name: 'Prof. Dr. Swapan Bandyopadhyay',
            degree: 'MBBS, MD (Oncology), MPhil (Radiotherapy)',
            specialist: 'Cancer & Tumor Specialist',
            chember: 'Dhaka Medical College & Hospital'
        },
        {
            id: 8,
            img: mofazzel,
            name: 'Prof. Dr. Md. Mofazzel Hossain',
            degree: 'MBBS, FCPS (Medicine), FACP (USA), FRCP (Edin), FRCP (Glasg), Fellow (Medical Oncology)',
            specialist: 'Cancer Specialist & Medical Oncologist',
            chember: 'BRB Hospital, Dhaka'
        },
        {
            id: 9,
            img: sabera,
            name: 'Prof. Dr. Sabera Khatun',
            degree: 'MBBS (Dhaka), FCPS (OBGYN), FICS, Fellow in Gyne Oncology (UK & SG)',
            specialist: 'Gynecological Cancer Specialist & Surgeon',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 10,
            img: asaduzzaman,
            name: 'Dr. Asaduzzaman Biddut',
            degree: 'MBBS (SSMC), MD (Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 11,
            img: bhaskar,
            name: 'Dr. Bhaskar Chakraborty',
            degree: 'MBBS, FCPS (Radiotherapy)',
            specialist: 'Cancer Specialist',
            chember: 'Ahsania Mission Cancer & General Hospital'
        },
        {
            id: 12,
            img: kamrul,
            name: 'Dr. A.T.M. Kamrul Hasan',
            degree: 'MBBS, BCS (Health), MD (Medical Oncology)',
            specialist: 'Cancer Specialist & Medical Oncologist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 13,
            img: rafiqul1,
            name: 'Dr. Md. Rafiqul Islam',
            degree: 'MBBS, MD (Oncology)',
            specialist: 'Cancer Specialist & Oncologist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 14,
            img: shariful,
            name: 'Prof. Dr. AMM Shariful Alam',
            degree: 'MBBS, DIH (NIPSOM), FCPS (Radiotherapy), FICS (USA), Training in Clinical Oncology (Japan, Australia), Cancer Epidemiology (Jordan), Hospice & Palliative Care (UK)',
            specialist: 'Cancer, Pain & Palliative Care Specialist',
            chember: 'Ahsania Mission Cancer & General Hospital'
        },
        {
            id: 15,
            img: swadesh,
            name: 'Dr. Swadesh Barman',
            degree: 'MBBS, BCS (Health), FCPS (Medicine), MSc (Oncology)',
            specialist: 'Medicine & Cancer Specialist',
            chember: 'Kurmitola General Hospital, Dhaka'
        },
        {
            id: 16,
            img: zafor,
            name: 'Prof. Dr. Zafor Md. Masud',
            degree: 'MBBS, MPhil, FCPS, Medical Oncology Fellow (NCC, Singapore)',
            specialist: 'Cancer Specialist',
            chember: 'Bangladesh Medical College & Hospital'
        },
        {
            id: 17,
            img: tarit,
            name: 'Prof. Dr. Tarit Kumar Samadder',
            degree: 'MBBS, DMRT, TSF (JAPAN), ASCO (USA), ESMO (EU), AROI (INDIA)',
            specialist: 'Cancer & Tumor Specialist',
            chember: 'Sher-E-Bangla Medical College & Hospital'
        },
        {
            id: 18,
            img: rakib,
            name: 'Prof. Dr. Rakib Uddin Ahmed',
            degree: 'MBBS, MD (Radiotherapy)',
            specialist: 'Cancer & Radiation Oncology Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 19,
            img: mostafa,
            name: 'Dr. Mostafa Aziz Sumon',
            degree: 'MBBS, MCPS (Radiotherapy), MD (Radiation Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'Kurmitola General Hospital, Dhaka'
        },
        {
            id: 20,
            img: parvin,
            name: 'Dr. Parvin Akhter Banu',
            degree: 'MBBS, Board Certified in Radiation Oncology (Iran)',
            specialist: 'Cancer Specialist',
            chember: 'Labaid Cancer Hospital & Super Speciality Center'
        },
        {
            id: 21,
            img: yousuf,
            name: 'Brig. Gen. Prof. Dr. Md. Yousuf Ali',
            degree: 'MBBS, FCPS, MACR (USA), FRCH (UK), Training (India & Singapore)',
            specialist: 'Cancer Specialist',
            chember: 'Combined Military Hospital, Dhaka'
        },
        {
            id: 22,
            img: mehbub,
            name: 'Dr. Md. Mehbub Ahsan',
            degree: 'MBBS, BCS (Health), MCPS, FCPS (Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'Mymensingh Medical College & Hospital'
        },
        {
            id: 23,
            img: ferdous,
            name: 'Dr. Ferdous Shahriar Sayed',
            degree: 'MBBS, MD (Radiotherapy)',
            specialist: 'Cancer, Chemotherapy & Palliative Medicine Specialist',
            chember: 'Evercare Hospital, Dhaka'
        },
        {
            id: 24,
            img: zillur,
            name: 'Prof. Dr. Zillur Rahman Bhuiyan',
            degree: 'MBBS (DU), DIH (DU), M.Phil (Radiotherapy, BSMMU)',
            specialist: 'Cancer & Radiation Oncology Specialist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 25,
            img: rehana,
            name: 'Prof. Dr. Rehana Begum',
            degree: 'MBBS (Dhaka), LM, DGO (Ireland)',
            specialist: 'Breast Cancer Specialist',
            chember: 'Women Health Breast Cancer Project, UNDP'
        },
        {
            id: 26,
            img: golam,
            name: 'Prof. Dr. Sk. Golam Mostofa',
            degree: 'MBBS, FCPS (Oncology), GTC (Japan & France), Fellow, Radiation Oncology (Bankok), Highly Trained on Radiotherapy (America and Germany)',
            specialist: 'Cancer & Tumor Specialist',
            chember: 'Enam Medical College & Hospital'
        },
        {
            id: 27,
            img: aliya,
            name: 'Prof. Dr. Aliya Shahnaz',
            degree: 'MBBS, FCPS (Radiotherapy), Training (Germany, Singapore, India, Thailand)',
            specialist: 'Cancer Specialist',
            chember: 'Dhaka Medical College & Hospital'
        },
        {
            id: 28,
            img: masudul,
            name: 'Dr. Muhammad Masudul Hasan (Arup)',
            degree: 'MBBS, BCS (Health), FCPS (Radiotherapy), MD (Radiation Oncology)',
            specialist: 'Cancer Specialist & Radiation Oncologist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 29,
            img: mushtaq,
            name: 'Prof. Dr. Qazi Mushtaq Hussain',
            degree: 'MBBS, M. Phil (Oncology), Training (India)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 30,
            img: hafizur,
            name: 'Prof. Dr. Md. Hafizur Rahman Ansary',
            degree: 'MBBS, DIH, DMRT, FELLOW (WHO)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 31,
            img: shaheen,
            name: 'Dr. Md. Shaheen Ferdous',
            degree: 'MBBS (Dhaka), BCS (Health), MD (Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 32,
            img: hamidur,
            name: 'Prof. Dr. A.K.M Hamidur Rahman',
            degree: 'MBBS, DMRT, Fellow-IAEA (Korea)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 33,
            img: rokaya,
            name: 'Dr. Rokaya Sultana Ruma',
            degree: 'MBBS, MD (Clinical Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 34,
            img: rowshon,
            name: 'Dr. Rowshon Ara Begum',
            degree: 'MBBS, MPH, MPHIL (Radiotherapy), DMU, FCPS',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 35,
            img: sarwar,
            name: 'Prof. Dr. Sarwar Alam',
            degree: 'MBBS. DIH (NIPSOM), MPhil (Radiotherapy)',
            specialist: 'Cancer Specialist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 36,
            img: arman,
            name: 'Dr. Arman Reza Chowdhury',
            degree: 'MBBS, FCPS (Radiotherapy)',
            specialist: 'Cancer (Chemotherapy, Hormone Therapy. Immunotherapy) Specialist',
            chember: 'Evercare Hospital, Dhaka'
        },
        {
            id: 37,
            img: happy,
            name: 'Dr. Happy Haque',
            degree: 'MBBS, MPhil (Clinical Oncology), Trainer in Breast & Cervical Cancer from Georgetown University (USA)',
            specialist: 'Cancer Specialist',
            chember: 'Holy Family Red Crescent Medical College & Hospital'
        },
        {
            id: 38,
            img: anisur,
            name: 'Prof. Dr. S.M. Anisur Rahman',
            degree: 'MBBS, DIH, DMRT, WHO Fellow (Radiation Oncology)',
            specialist: 'Cancer Specialist & Radiation Oncologist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 39,
            img: shahida,
            name: 'Dr. Shahida Alam Lima',
            degree: 'MBBS, FCPS (Radiotherapy)',
            specialist: 'Cancer Specialist & Radiation Oncologist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 40,
            img: arunangshu,
            name: 'Dr. Arunangshu Das',
            degree: 'MBBS, BCS (Health), FCPS (Radiotherapy), Post Graduate Certificate in Palliative Medicine (Australia)',
            specialist: 'Cancer Specialist',
            chember: 'Square Hospital, Dhaka'
        },
        {
            id: 41,
            img: abdul,
            name: 'Dr. Md. Abdul Ahsan Didar',
            degree: 'MBBS, MPH (NIPSOM), MD (Oncology), BCCPM (Kerala)',
            specialist: 'Cancer & Palliative Care Specialist',
            chember: 'Shaheed Suhrawardy Medical College & Hospital'
        },
        {
            id: 42,
            img: akram,
            name: 'Prof. Syed Md. Akram Hussain',
            degree: 'MBBS, FCPS, FRCP (GLAS), FRCP (EDIN), FACP (USA), MRCR (UK)',
            specialist: 'Clinical Oncologist & Radiotherapist',
            chember: 'Square Hospital, Dhaka'
        },
        {
            id: 43,
            img: biswajit,
            name: 'Dr. Biswajit Bhattacharjee',
            degree: 'MBBS, MPhil (Radiotherapy)',
            specialist: 'Cancer (Chemotherapy, Radiotherapy. Immunotherapy) Specialist',
            chember: 'Evercare Hospital, Dhaka'
        },
        {
            id: 44,
            img: taslima,
            name: 'Dr. Taslima Nigar',
            degree: 'MBBS, FCPS (OBGYN)',
            specialist: 'Gynecology, Cancer Specialist & Surgeon',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 45,
            img: khorshed,
            name: 'Prof. Dr. Md. Khorshed Alam',
            degree: 'MBBS, MD, MCPS (OBGYN), DMRT, Fellow (WHO), Brachytherapy (India)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 46,
            img: rafiqul,
            name: 'Dr. Muhammad Rafiqul Islam',
            degree: 'MBBS (SSMC), MD (Medical Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 47,
            img: kamruzzaman,
            name: 'Dr. Kamruzzaman Rumman',
            degree: 'MBBS, FCPS (Radiotherapy), MD (Radiation Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 48,
            img: lubna,
            name: 'Dr. Lubna Mariam',
            degree: 'MBBS, FCPS (Radiotherapy), MPhil (Radiotherapy), Fellow (UICC)',
            specialist: 'Radiation Oncologist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 49,
            img: nizamul,
            name: 'Prof. Dr. Md. Nizamul Haque',
            degree: 'MBBS (DMC), MPhil (Oncology), FCPS (Radiotherapy)',
            specialist: 'Clinical Oncologist (Cancer specialist), Radiotherapy & Chemotherapy specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 50,
            img: ashim,
            name: 'Dr. Ashim Kumar Sengupta',
            degree: 'MBBS, PGT (Internal Medicine), MPhil (Radiotherapy)',
            specialist: 'Cancer Specialist',
            chember: 'United Hospital, Dhaka'
        },
        {
            id: 51,
            img: toufiq,
            name: 'Dr. Md. Toufiq Hasan Firoz',
            degree: 'MBBS (DMC), BCS (Health), MPhil (Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 52,
            img: hosneara,
            name: 'Dr. Hosneara Begum',
            degree: 'MBBS, MD (Radiation Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 53,
            img: nahid,
            name: 'Dr. Md. Nahid Hossen',
            degree: 'MBBS, BCS (Health), MD (Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 54,
            img: nazrul,
            name: 'Dr. Md. Nazrul Islam',
            degree: 'MBBS, FCPS, M.Phil, MD (Radiology)',
            specialist: 'Radiology Specialist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 55,
            img: ehteshamul,
            name: 'Prof. Dr. Md. Ehteshamul Hoque',
            degree: 'MBBS, BCS (Health), MPhil (Radiotherapy) BSMMU',
            specialist: 'Cancer Specialist',
            chember: 'Labaid Cancer Hospital & Super Speciality Center'
        },
        {
            id: 56,
            img: sadia,
            name: 'Dr. Sadia Sharmin',
            degree: 'MBBS, FCPS (Radiotherapy)',
            specialist: 'Cancer Specialist & Radiation Oncologist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 57,
            img: ferdousAra,
            name: 'Dr. Ferdous Ara Begum',
            degree: 'MBBS, DCH (Child Health), MD (Medical Oncology)',
            specialist: 'Cancer & Chemotherapy Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 58,
            img: shaiful,
            name: 'Dr. Shaiful Hassan Shameem',
            degree: 'MBBS (DMC), BCS (Health), MD (Radiation Oncology)',
            specialist: 'Cancer & Tumor Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 59,
            img: kamrun,
            name: 'Dr. Kamrun Nahar Tania',
            degree: 'MBBS, BCS (Health), MD (Radiation Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 60,
            img: shuvra,
            name: 'Dr. Shuvra Debnath',
            degree: 'MBBS, BCS (Health), MD (Radiation Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 61,
            img: arifur,
            name: 'Dr. Md. Arifur Rahman',
            degree: 'MBBS, FCPS (Radiotherapy)',
            specialist: 'Cancer Specialist',
            chember: 'Bangladesh Specialized Hospital'
        },
        {
            id: 62,
            img: salim,
            name: 'Dr. Md. Salim Reza',
            degree: 'MBBS, DMRT, FCPS (Radiotherapy)',
            specialist: 'Cancer Specialist',
            chember: 'Square Hospital, Dhaka'
        },
        {
            id: 63,
            img: mamunur,
            name: 'Dr. Md. Mamunur Rashid',
            degree: 'MBBS, MD (Radiation Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 64,
            img: shakhawat,
            name: 'Dr. Mirza Md. Shakhawat Hossain',
            degree: 'MBBS, FCPS (Radiotherapy)',
            specialist: 'Cancer Specialist & Radiation Oncologist',
            chember: 'Delta Hospital Limited'
        },
        {
            id: 65,
            img: johnny,
            name: 'Dr. Md. Shariful Islam Johnny',
            degree: 'MBBS, FCPS (Radiotherapy)',
            specialist: 'Cancer Specialist',
            chember: 'Ahsania Mission Cancer & General Hospital'
        },
        {
            id: 66,
            img: shamsun,
            name: 'Dr. Shamsun Nahar',
            degree: 'MBBS, FCPS (Radiotherapy)',
            specialist: 'Cancer, Breast Tumor & Breast Cancer Specialist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital'
        },
        {
            id: 67,
            img: arman1,
            name: 'Dr. Kazi Abdullah Arman',
            degree: 'MBBS, MD (Medical Oncology)',
            specialist: 'Cancer Specialist & Medical Oncologist',
            chember: 'Labaid Cancer Hospital & Super Speciality Center'
        },
        {
            id: 68,
            img: momtahena,
            name: 'Dr. Sura Jukrup Momtahena',
            degree: 'MBBS, FCPS (Radiotherapy), MCPS',
            specialist: 'Cancer Specialist',
            chember: 'Ahsania Mission Cancer & General Hospital'
        },
        {
            id: 69,
            img: jalalur,
            name: 'Dr. Md. Shah Jalalur Rahman Shahi',
            degree: 'MBBS (DMC), MCPS (Oncology), MPhil (Immunology)',
            specialist: 'Cancer Specialist',
            chember: 'Ahsania Mission Cancer & General Hospital'
        },
        {
            id: 70,
            img: rubina,
            name: 'Dr. Mosammat Rubina Sultana',
            degree: 'MBBS, FCPS (Radiotherapy)',
            specialist: 'Cancer Specialist',
            chember: 'Ahsania Mission Cancer & General Hospital'
        },
        {
            id: 71,
            img: samina,
            name: 'Dr. Samina Islam',
            degree: 'MBBS, MCPS (Radiotherapy), PGT (Oncology, India)',
            specialist: 'Cancer & Tumor Specialist',
            chember: 'Enam Medical College & Hospital'
        },
        {
            id: 72,
            img: nusrat,
            name: 'Dr. Nusrat Hoque',
            degree: 'MBBS, FCPS (Radiation Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'Ahsania Mission Cancer & General Hospital'
        },
        {
            id: 73,
            img: rezaul,
            name: 'Dr. Md. Rezaul Sharif',
            degree: 'MBBS, MPhil (Radiotherapy), Trained in Tata Memorial Hospital (India)',
            specialist: 'Cancer Specialist',
            chember: 'Delta Medical College & Hospital'
        },
        {
            id: 74,
            img: meher,
            name: 'Dr. Meher Jabin',
            degree: 'MBBS, FCPS (Radiotherapy)',
            specialist: 'Cancer Specialist',
            chember: 'Dhaka Medical College & Hospital'
        },
        {
            id: 75,
            img: santanu,
            name: 'Prof. Dr. Santanu Chaudhuri',
            degree: 'MBBS, DMRT, PGDHM, MD (TMH), DNB, MPHIL',
            specialist: 'Cancer Specialist',
            chember: 'United Hospital, Dhaka'
        },
        {
            id: 76,
            img: mamun,
            name: 'Dr. Abdullah Al Mamun Khan',
            degree: 'MBBS, MD (Oncology)',
            specialist: 'Cancer Specialist & Medical Oncologist',
            chember: 'Shaheed Suhrawardy Medical College & Hospital'
        },
        {
            id: 77,
            img: sarwar1,
            name: 'Lt. Col. Dr. M.S. Sarwar Alam',
            degree: 'MBBS, DMRT, FCPS (Radiotherapy)',
            specialist: 'Cancer Specialist',
            chember: 'Delta Medical College & Hospital'
        },
        {
            id: 78,
            img: muhammad,
            name: 'Dr. Muhammad Abdullah-Al-Noman',
            degree: 'MBBS, MD (Radiation Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 79,
            img: yeaqub,
            name: 'Prof. Dr. Md. Yeaqub Ali',
            degree: 'MBBS, FCPS (Radiotherapy), FRSH (London), IAEA, Fellowship (Radiotherapy)',
            specialist: 'Cancer & Tumor Specialist',
            chember: 'Enam Medical College & Hospital'
        },
        {
            id: 80,
            img: tania,
            name: 'Dr. Tania Sultana',
            degree: 'MBBS, FCPS (Radiotherapy)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 81,
            img: siddiqua,
            name: 'Dr. Asma Siddiqua',
            degree: 'MBBS, MPH (Nutrition), MCPS (Radiotherapy), FCPS (Radiotherapy)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 82,
            img: tannima,
            name: 'Dr. Tannima Adhikary',
            degree: 'MBBS, FCPS (Radiotherapy)',
            specialist: 'Cancer Specialist',
            chember: 'Dhaka Medical College & Hospital'
        },
        {
            id: 83,
            img: samia,
            name: 'Dr. Samia Ahmed',
            degree: 'MBBS, MPhil (Radiotherapy)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 84,
            img: fariah,
            name: 'Dr. Fariah Sharmeen',
            degree: 'MBBS, FCPS (Radiotherapy), Post Graduation Training (Medical Oncology)',
            specialist: 'Cancer (Radiotherapy & Brachytherapy) Specialist',
            chember: 'Square Hospital, Dhaka'
        },
        {
            id: 85,
            img: sarowat,
            name: 'Dr. Sarowat Sultana',
            degree: 'MBBS, BCS (Health), MCPS (Radiotherapy), FCPS (Radiotherapy), CCD (BIRDEM)',
            specialist: 'Cancer Specialist',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 86,
            img: mannan,
            name: 'Dr. Md. Abdul Mannan',
            degree: 'MBBS, MD (Radiation Oncology)',
            specialist: 'Cancer Specialist',
            chember: 'Labaid Cancer Hospital & Super Speciality Center'
        },
        {
            id: 87,
            img: jannatul,
            name: 'Dr. Jannatul Ferdause',
            degree: 'MBBS, FCPS (Radiotherapy)',
            specialist: 'Cancer Specialist',
            chember: 'Ahsania Mission Cancer & General Hospital'
        },
        {
            id: 88,
            img: foujia,
            name: 'Dr. Foujia Sharmin',
            degree: 'MBBS, FCPS (OBGYN), FCPS (Gynecological Oncology)',
            specialist: 'Gynecology, Obstetrics, Gynecological Cancer Specialist & Surgeon',
            chember: 'National Institute of Cancer Research & Hospital'
        },
        {
            id: 89,
            img: aditi,
            name: 'Dr . Aditi Paul Chowdhury',
            degree: 'MBBS, MD (ONCOLOGY)',
            specialist: 'Cancer Specialist',
            chember: 'Ahsania Mission Cancer & General Hospital'
        }
    ]

    return (
        <div className='container mx-auto px-72'>

            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/">Doctors</Link></p>
            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/dhaka-d">Doctors in Dhaka</Link></p>
            <p className='my-3 border text-3xl text-center text-black font-semibold py-3'>Cancer Specialist Doctor in Dhaka</p>
            <p className='text-lg text-center border px-4 py-4'>A cancer specialist or oncologist is a doctor who skilled in cancer treatment like breast cancer, liver cancer, lung <br /> cancer, skin cancer, etc. Here in this page you can find out & choose the best cancer specialist doctor in Dhaka <br /> with their chamber information & contact number.</p>
            <p className='my-3 border text-3xl text-center text-black font-semibold py-3'>List of the Best Cancer Specialist Doctor in Dhaka</p>

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
                                    <button className='px-5 py-2 bg-[#2a7fba] rounded-md text-white text-xl font-normal hover:underline hover:bg-green-500'><Link to={`/dhaka-cancer/${doctor.id}`}>See Details</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <p className='border text-lg text-center py-3 my-3'>Updated on December 11, 2022</p>
        </div>
    );
};

export default CancerDhaka;