import React from 'react';
import { Link, useParams } from 'react-router-dom';
// images
import rating from '../../../../../../images/Specialist/Star-Rating.png';
import jonaid from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Prof.-Dr.-Md.-Jonaid-Shafiq.jpg';
import moinul from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Prof.-Dr.-Moinul-Hossain.jpg';
import delwar from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-MHM-Delwar-Hossain.jpg';
import lutful from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Lutful-Aziz.jpg';
import asaduzzaman from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-A.K.M.-Asaduzzaman.jpg';
import mahbubul from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Md.-Mahbubul-Hasan.jpg';
import shah from '../../../../../../images/Specialist/Dhaka/Anesthesiology/dr-male.jpg';
import rezaul from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Prof.-Dr.-Md.-Rezaul-Hoque.jpg';
import kamal from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Prof.-Dr.-Kamal-Ibrahim.jpg';
import tahmina from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Tahmina-Banu.jpg';
import azharul from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Md.-Azharul-Islam.jpg';
import chanchal from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Chanchal-Kumar-Devnath.jpg';
import hasina from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Hasina-Akhter.jpg';
import zulfiqar from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Prof.-Dr.-Md.-Zulfiqar-Hasan.jpg';
import rabeya from '../../../../../../images/Specialist/Dhaka/Anesthesiology/dr-female.jpg';
import didarul from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Md.-Didarul-Alam.jpg';
import shukha from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Shukha-Ranjan-Das.jpg';
import akhtaruzzaman from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Prof.-Dr.-AKM-Akhtaruzzaman.jpg';
import iqbal from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Md.-Iqbal.jpg';
import bhabesh from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Bhabesh-Chandra-Mondal.jpg';
import shahidur from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-M-M-Shahidur-Rahman.jpg';
import mushfiqur from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Md.-Mushfiqur-Rahman.jpg';
import shahid from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Shahid-Ahmed-Chowdhury.jpg';
import wahiuddin from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Prof.-Dr.-Wahiuddin-Mahmood.jpg';
import ranadhir from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Ranadhir-Kumar-Kundu.jpg';
import mohammad from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Mohammad-Johirul-Islam.jpg';
import shyama from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Shyama-Prosad-Mitra.jpg';
import ashia from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Ashia-Ali.jpg';
import muhammad from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Shah-Muhammad-Ali.jpg';
import quamrul from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Md.-Quamrul-Islam.jpg';
import munshi from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Munshi-Kalamur-Rahman.jpg';
import istaque from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Istaque-Ahmed-Milton.jpg';
import nazmul from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Brig.-Gen.-Md.-Nazmul-Ahsan.jpg';
import rabiul from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Md.-Rabiul-Alam.jpg';
import moinulHoque from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Brig.-Gen.-Md.-Nazmul-Ahsan.jpg';
import jayed from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-M.M.-Jayed-Hossain-chowdhury.jpg';
import abu from '../../../../../../images/Specialist/Dhaka/Anesthesiology/Dr.-Abu-Naser-Muhammad-Badruddoza.jpg';

const SingleAnesthesiologist = () => {

    const { id } = useParams();

    const doctors = [
        {
            id: 1,
            img: jonaid,
            name: 'Prof. Dr. Jonaid Shafiq',
            degree: 'MBBS (DMC), PhD (Anesthesiology, Japan)',
            specialist: 'Anesthesiology, Pain Management & Critical Care Medicine Specialist',
            chember: 'Japan Bangladesh Friendship Hospital',
            rating: rating,
            points: '(28)',
            address: '55 Satmasjid Road, Zigatola Bus Stand, Dhanmondi',
            visiting: '5pm to 9pm (Closed: Thursday & Friday)',
            appointment: '+88029672277',
            about: 'Prof. Dr. Jonaid Shafiq is a Pain Specialist in Dhaka. His qualification is MBBS (DMC), PhD (Anesthesiology, Japan). He is a Professor & Chief Consultant in the Department of Anesthesiology at Japan Bangladesh Friendship Hospital. He regularly provides treatment to his patients at Japan Bangladesh Friendship Hospital. Practicing hour of Prof. Dr. Jonaid Shafiq at'
        },
        {
            id: 2,
            img: moinul,
            name: 'Prof. Dr. Moinul Hossain',
            degree: 'MBBS, FCPS (Anesthesiology), Training (Japan)',
            specialist: 'Pain Management Specialist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital',
            rating: rating,
            points: '(26)',
            address: 'House # 16, Road # 2, Dhanmondi R/A, Dhaka - 1205',
            visiting: '8pm to 10pm (Sun, Mon, Tue & Thu)',
            appointment: '+8809613787801',
            about: 'Prof. Dr. Moinul Hossain is a Pain Management Specialist in Dhaka. His qualification is MBBS, FCPS (Anesthesiology), Training (Japan). He is a Professor in the Department of Anesthesiology at Bangabandhu Sheikh Mujib Medical University Hospital. He regularly provides treatment to his patients at Popular Diagnostic Center, Dhanmondi. Practicing hour of Prof. Dr. Moinul Hossain at'
        },
        {
            id: 3,
            img: delwar,
            name: 'Brig. Gen. Prof. Dr. MHM Delwar Hossain',
            degree: 'MBBS, DA, MCPS, FCPS (Anesthesiology)',
            specialist: 'Pain Management, ICU, CCU Specialist & Anesthesiologist',
            chember: 'Combined Military Hospital, Dhaka',
            rating: rating,
            points: '(3)',
            address: 'House # 48, Road # 9/A, Dhanmondi, Dhaka - 1209',
            visiting: '5pm to 6.30pm (Closed: Friday)',
            appointment: '+8809610010615',
            about: 'Brig. Gen. Prof. Dr. MHM Delwar Hossain is a Anesthesiologist in Dhaka. His qualification is MBBS, DA, MCPS, FCPS (Anesthesiology). He is a Former Professor in the Department of Anesthesiology at Combined Military Hospital, Dhaka. He regularly provides treatment to his patients at Ibn Sina Diagnostic Center, Dhanmondi. Practicing hour of Brig. Gen. Prof. Dr. MHM Delwar Hossain at'
        },
        {
            id: 4,
            img: lutful,
            name: 'Dr. Lutful Aziz',
            degree: 'MBBS, FCPS (Anesthesiology), PhD (Japan)',
            specialist: 'Anesthesia, Pain Management, & Critical Care Medicine Specialist',
            chember: 'Evercare Hospital, Dhaka',
            rating: rating,
            points: '(4)',
            address: 'Plot # 81, Block # E, Bashundhara R/A, Dhaka',
            visiting: '9am to 5pm (Closed: Friday)',
            appointment: '10678',
            about: 'Dr. Lutful Aziz is a Anesthesiologist in Dhaka. His qualification is MBBS, FCPS (Anesthesiology), PhD (Japan). He is a Senior Consultant in the Department of Anesthesiology at Evercare Hospital, Dhaka. He regularly provides treatment to his patients at Evercare Hospital, Dhaka. Practicing hour of Dr. Lutful Aziz at'
        },
        {
            id: 5,
            img: asaduzzaman,
            name: 'Dr. A.K.M. Asaduzzaman',
            degree: 'MBBS, DA (DU), FIPM (India), Fellowship in Pain Management (India)',
            specialist: 'Interventional Pain Specialist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital',
            rating: rating,
            points: '(6)',
            address: '1/8, Block-E, Lalmatia, Satmosjid Road, Mohammadpur, Dhaka – 1207',
            visiting: '9am to 12pm (Sat, Tue & Thu)',
            appointment: '+8801558220134',
            about: 'Dr. A.K.M. Asaduzzaman is a Pain Specialist in Dhaka. His qualification is MBBS, DA (DU), FIPM (India), Fellowship in Pain Management (India). He is a Consultant in the Department of Anesthesiology at Bangabandhu Sheikh Mujib Medical University Hospital. He regularly provides treatment to his patients at City Hospital Limited, Dhaka. Practicing hour of Dr. A.K.M. Asaduzzaman at'
        },
        {
            id: 6,
            img: mahbubul,
            name: 'Prof. Dr. Md. Mahbubul Hasan Monir',
            degree: 'MBBS, FCPS (Anesthesiology)',
            specialist: 'Pain Medicine Specialist & Anesthesiologist',
            chember: 'Birdem General Hospital & Ibrahim Medical College',
            rating: rating,
            points: '(4)',
            address: 'C-287/2-3 Khilgaon Bishwa Road, Khilgaon, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '+8809606063030',
            about: 'Prof. Dr. Md. Mahbubul Hasan Monir is a Anesthesiologist in Dhaka. His qualification is MBBS, FCPS (Anesthesiology). He is a Professor in the Department of Anesthesiology at Birdem General Hospital & Ibrahim Medical College. He regularly provides treatment to his patients at Khidmah Hospital, Dhaka. Practicing hour of Prof. Dr. Md. Mahbubul Hasan Monir at'
        },
        {
            id: 7,
            img: shah,
            name: 'Prof. Dr. Md. Shah Alam',
            degree: 'MBBS, DA, FCPS (Anesthesiology)',
            specialist: 'Anesthesiology, Pain Management & ICU Specialist',
            chember: 'Ibn Sina Medical College & Hospital',
            rating: rating,
            points: '(2)',
            address: '1/1 B, Kallyanpur, Dhaka',
            visiting: '9am to 1pm (Closed: Friday)',
            appointment: '+8801703725590',
            about: 'Prof. Dr. Md. Shah Alam is a Anesthesiologist in Dhaka. His qualification is MBBS, DA, FCPS (Anesthesiology). He is a Professor in the Department of Anesthesiology at Ibn Sina Medical College & Hospital. He regularly provides treatment to his patients at Ibn Sina Medical College Hospital, Kallyanpur. Practicing hour of Prof. Dr. Md. Shah Alam at'
        },
        {
            id: 8,
            img: rezaul,
            name: 'Prof. Dr. Md. Rezaul Hoque',
            degree: 'MBBS, DA, MD, FCPS',
            specialist: 'Pain Management Specialist & Anesthesiologist',
            chember: 'Enam Medical College & Hospital',
            rating: rating,
            points: '(5)',
            address: 'Unit # 01, House # 11, Shantinagar, Motijheel, Dhaka',
            visiting: '8pm to 9pm (Closed: Friday)',
            appointment: '+8809613787803',
            about: 'Prof. Dr. Md. Rezaul Hoque is a Pain Specialist in Dhaka. His qualification is MBBS, DA, MD, FCPS. He is a Professor in the Department of Anesthesiology at Enam Medical College & Hospital. He regularly provides treatment to his patients at Popular Diagnostic Center, Shantinagar. Practicing hour of Prof. Dr. Md. Rezaul Hoque at'
        },
        {
            id: 9,
            img: kamal,
            name: 'Prof. Dr. Kamal Ibrahim',
            degree: 'MBBS, FCPS (Anesthesiology), FICS (USA)',
            specialist: 'Anesthesiology Specialist',
            chember: 'Bangladesh Medical College & Hospital',
            rating: rating,
            points: '(2)',
            address: '21, Mirpur Road, Shyamoli, Dhaka – 1207, Bangladesh',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '+8809666700100',
            about: 'Prof. Dr. Kamal Ibrahim is a Anesthesiologist in Dhaka. His qualification is MBBS, FCPS (Anesthesiology), FICS (USA). He is working as a Anesthesiology Specialist doctor at Bangladesh Medical College & Hospital. He regularly provides treatment to his patients at Bangladesh Specialized Hospital. Practicing hour of Prof. Dr. Kamal Ibrahim at'
        },
        {
            id: 10,
            img: tahmina,
            name: 'Dr. Tahmina Banu',
            degree: 'MBBS, DA, MD',
            specialist: 'Anesthesiology, Neuroanesthesiology & ICU Specialist',
            chember: 'Square Hospital, Dhaka',
            rating: rating,
            points: '(4)',
            address: '8/F, Kazi Nuruzzaman Road, West Panthapath, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '10616',
            about: 'Dr. Tahmina Banu is a Anesthesiologist in Dhaka. Her qualification is MBBS, DA, MD. She is a Consultant in the Department of Anesthesiology at Square Hospital, Dhaka. She regularly provides treatment to her patients at Square Hospital, Dhaka. Practicing hour of Dr. Tahmina Banu at'
        },
        {
            id: 11,
            img: azharul,
            name: 'Dr. Md. Azharul Islam',
            degree: 'MBBS, FCPS (Anesthesiology)',
            specialist: 'Anesthesiology, Pain Management & ICU Specialist',
            chember: 'Evercare Hospital, Dhaka',
            rating: rating,
            points: '(1)',
            address: 'Plot # 81, Block # E, Bashundhara R/A, Dhaka',
            visiting: '9am to 5pm (Closed: Friday)',
            appointment: '10678',
            about: 'Dr. Md. Azharul Islam is a Anesthesiologist in Dhaka. His qualification is MBBS, FCPS (Anesthesiology). He is a Senior Consultant in the Department of Anesthesiology at Evercare Hospital, Dhaka. He regularly provides treatment to his patients at Evercare Hospital, Dhaka. Practicing hour of Dr. Md. Azharul Islam at'
        },
        {
            id: 12,
            img: chanchal,
            name: 'Dr. Chanchal Kumar Devnath',
            degree: 'MBBS, DA, FCPS (Anesthesiology)',
            specialist: 'Pain Management, ICU & Anesthesiology Specialist',
            chember: 'BRB Hospital, Dhaka',
            rating: rating,
            points: '(1)',
            address: '77/A, East Rajabazar, West Panthapath, Dhaka',
            visiting: '9am to 6pm (Closed: Friday)',
            appointment: '+8801777764800',
            about: 'Dr. Chanchal Kumar Devnath is a Anesthesiologist in Dhaka. His qualification is MBBS, DA, FCPS (Anesthesiology). He is working as a Pain Management, ICU & Anesthesiology Specialist doctor in BRB Hospital, Dhaka. He regularly provides treatment to his patients at BRB Hospital, Dhaka. Practicing hour of Dr. Chanchal Kumar Devnath at'
        },
        {
            id: 13,
            img: hasina,
            name: 'Dr. Hasina Akhter',
            degree: 'MBBS, FCPS (Anesthesiology)',
            specialist: 'Anesthesia, Pain Management, & Critical Care Medicine Specialist',
            chember: 'Evercare Hospital, Dhaka',
            rating: rating,
            points: '(1)',
            address: 'Plot # 81, Block # E, Bashundhara R/A, Dhaka',
            visiting: '9am to 5pm (Closed: Friday)',
            appointment: '10678',
            about: 'Dr. Hasina Akhter is a Anesthesiologist in Dhaka. Her qualification is MBBS, FCPS (Anesthesiology). She is a Consultant in the Department of Anaesthesia at Evercare Hospital, Dhaka. She regularly provides treatment to her patients at Evercare Hospital, Dhaka. Practicing hour of Dr. Hasina Akhter at'
        },
        {
            id: 14,
            img: zulfiqar,
            name: 'Prof. Dr. Md. Zulfiqar Hasan',
            degree: 'MBBS, MD (Anesthesiology)',
            specialist: 'Anesthesiology, Pain Management & ICU Specialist',
            chember: 'Square Hospital, Dhaka',
            rating: rating,
            points: '(3)',
            address: '8/F, Kazi Nuruzzaman Road, West Panthapath, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '10616',
            about: 'Prof. Dr. Md. Zulfiqar Hasan is a Anesthesiologist in Dhaka. His qualification is MBBS, MD (Anesthesiology). He is a Senior Consultant in the Department of Anesthesiology at Square Hospital, Dhaka. He regularly provides treatment to his patients at Square Hospital, Dhaka. Practicing hour of Prof. Dr. Md. Zulfiqar Hasan at'
        },
        {
            id: 15,
            img: rabeya,
            name: 'Dr. Rabeya Begum',
            degree: 'MBBS, DA, MCPS',
            specialist: 'Anesthesiology Specialist',
            chember: 'Dhaka Medical College & Hospital',
            rating: rating,
            points: '(1)',
            address: 'C-287/2-3 Khilgaon Bishwa Road, Khilgaon, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '+8809606063030',
            about: 'Dr. Rabeya Begum is a Anesthesiologist in Dhaka. Her qualification is MBBS, DA, MCPS. She is working as a Anesthesiology Specialist doctor in Dhaka Medical College & Hospital. She regularly provides treatment to her patients at Khidmah Hospital, Dhaka. Practicing hour of Dr. Rabeya Begum at'
        },
        {
            id: 16,
            img: didarul,
            name: 'Dr. Md. Didarul Alam',
            degree: 'MBBS, MCPS (Anesthesiology)',
            specialist: 'Anesthesiology, Pain Management & ICU Specialist',
            chember: 'Asgar Ali Hospital, Dhaka',
            rating: rating,
            points: '(1)',
            address: '111/1/A, Distillery Road, Gandaria, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '+8801787683333',
            about: 'Dr. Md. Didarul Alam is a Anesthesiologist in Dhaka. His qualification is MBBS, MCPS (Anesthesiology). He is a Associate Consultant in the Department of Anesthesiology at Asgar Ali Hospital, Dhaka. He regularly provides treatment to his patients at Asgar Ali Hospital, Dhaka. Practicing hour of Dr. Md. Didarul Alam at'
        },
        {
            id: 17,
            img: shukha,
            name: 'Dr. Shukha Ranjan Das',
            degree: 'MBBS (DU), BCS (Health), DA (BSMMU), FCPS (Anesthesiology), FIPM (India)',
            specialist: 'Interventional Pain Medicine Specialist',
            chember: 'Dhaka Medical College & Hospital',
            rating: rating,
            points: '(3)',
            address: 'House # 16, Road # 2, Dhanmondi R/A, Dhaka - 1205',
            visiting: '6pm to 9pm (Mon & Friday)',
            appointment: '+8809613787801',
            about: 'Dr. Shukha Ranjan Das is a Pain Management Specialist in Dhaka. His qualification is MBBS (DU), BCS (Health), DA (BSMMU), FCPS (Anesthesiology), FIPM (India). He is a Consultant in the Department of Pain Management at Dhaka Medical College & Hospital. He regularly provides treatment to his patients at Popular Diagnostic Center, Dhanmondi. Practicing hour of Dr. Shukha Ranjan Das at'
        },
        {
            id: 18,
            img: akhtaruzzaman,
            name: 'Prof. Dr. AKM Akhtaruzzaman',
            degree: 'MBBS, DA, MD, Fellow, Pain Medicine (Japan)',
            specialist: 'Pain Medicine Specialist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital',
            rating: rating,
            points: '(3)',
            address: 'Level 05, Rupayan Prime House (02), Road 07, Green Road , Dhanmondi R/A, Dhaka',
            visiting: '4pm to 9pm (Closed: Friday)',
            appointment: '+8801785853632',
            about: 'Prof. Dr. AKM Akhtaruzzaman is a Pain Specialist in Dhaka. His qualification is MBBS, DA, MD, Fellow, Pain Medicine (Japan). He is a Professor (Anesthesia) in the Department of Anaesthesia, Analgesia and Intensive Care Medicine at Bangabandhu Sheikh Mujib Medical University Hospital. He regularly provides treatment to his patients at Dhaka Pain Management Centre. Practicing hour of Prof. Dr. AKM Akhtaruzzaman at'
        },
        {
            id: 19,
            img: iqbal,
            name: 'Dr. Md. Iqbal',
            degree: 'MBBS, MCPS (Anesthesiology), DA (DU)',
            specialist: 'Cardiac & Pediatric Cardiac Anesthesiology Specialist',
            chember: 'Bangladesh Specialized Hospital',
            rating: rating,
            points: '(1)',
            address: '21, Mirpur Road, Shyamoli, Dhaka – 1207, Bangladesh',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '+8809666700100',
            about: 'Dr. Md. Iqbal is a Anesthesiologist in Dhaka. His qualification is MBBS, MCPS (Anesthesiology), DA (DU). He is working as a Cardiac & Pediatric Cardiac Anesthesiology Specialist doctor at Bangladesh Specialized Hospital. He regularly provides treatment to his patients at Bangladesh Specialized Hospital. Practicing hour of Dr. Md. Iqbal at'
        },
        {
            id: 20,
            img: bhabesh,
            name: 'Dr. Bhabesh Chandra Mondal',
            degree: 'MBBS, DA, FCPS',
            specialist: 'Cardiac Anesthesiology Specialist',
            chember: 'Square Hospital, Dhaka',
            rating: rating,
            points: '(1)',
            address: '8/F, Kazi Nuruzzaman Road, West Panthapath, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '10616',
            about: 'Dr. Bhabesh Chandra Mondal is a Anesthesiologist in Dhaka. His qualification is MBBS, DA, FCPS. He is working as a Cardiac Anesthesiology Specialist doctor in Square Hospital, Dhaka. He regularly provides treatment to his patients at Square Hospital, Dhaka. Practicing hour of Dr. Bhabesh Chandra Mondal at'
        },
        {
            id: 21,
            img: shahidur,
            name: 'Dr. M M Shahidur Rahman',
            degree: 'MBBS, FCPS (Anesthesiology), MCPS, DA',
            specialist: 'Cardiac Anesthesiologist',
            chember: 'Bangladesh Specialized Hospital',
            rating: rating,
            points: '(1)',
            address: '21, Mirpur Road, Shyamoli, Dhaka – 1207, Bangladesh',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '+8809666700100',
            about: 'Dr. M M Shahidur Rahman is a Anesthesiologist in Dhaka. His qualification is MBBS, FCPS (Anesthesiology), MCPS, DA. He is working as a Cardiac Anesthesiologist doctor at Bangladesh Specialized Hospital. He regularly provides treatment to his patients at Bangladesh Specialized Hospital. Practicing hour of Dr. M M Shahidur Rahman at'
        },
        {
            id: 22,
            img: mushfiqur,
            name: 'Dr. Mushfiqur Rahman',
            degree: 'MBBS, FCPS (Anesthesiology)',
            specialist: 'Anesthesiologist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital',
            rating: rating,
            points: '(1)',
            address: 'C-287/2-3 Khilgaon Bishwa Road, Khilgaon, Dhaka1',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '+8809606063030',
            about: 'Dr. Mushfiqur Rahman is a Anesthesiologist in Dhaka. His qualification is MBBS, FCPS (Anesthesiology). He is a Assistant Professor in the Department of Anesthesiology at Bangabandhu Sheikh Mujib Medical University Hospital. He regularly provides treatment to his patients at Khidmah Hospital, Dhaka. Practicing hour of Dr. Mushfiqur Rahman at'
        },
        {
            id: 23,
            img: shahid,
            name: 'Dr. Shahid Ahmed Chowdhury',
            degree: 'MBBS, DA, FCPS',
            specialist: 'Cardiac Anesthesiology & Cardiac Critical Care Specialist',
            chember: 'United Hospital, Dhaka',
            rating: rating,
            points: '(1)',
            address: 'Plot # 15, Road # 71, Gulshan, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '10666',
            about: 'Dr. Shahid Ahmed Chowdhury is a Cardiac Anesthesiologist in Dhaka. His qualification is MBBS, DA, FCPS. He is a Senior Consultant in the Department of Anesthesiology at United Hospital, Dhaka. He regularly provides treatment to his patients at United Hospital, Dhaka. Practicing hour of Dr. Shahid Ahmed Chowdhury at'
        },
        {
            id: 24,
            img: wahiuddin,
            name: 'Prof. Dr. Wahiuddin Mahmood',
            degree: 'MBBS, DA, FCPS',
            specialist: 'Anesthesiology, Critical Care Management & ICU Specialist',
            chember: 'Square Hospital, Dhaka',
            rating: rating,
            points: '(2)',
            address: '8/F, Kazi Nuruzzaman Road, West Panthapath, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '10616',
            about: 'Prof. Dr. Wahiuddin Mahmood is a Anesthesiologist in Dhaka. His qualification is MBBS, DA, FCPS. He is a Consultant in the Department of Anesthesiology at Square Hospital, Dhaka. He regularly provides treatment to his patients at Square Hospital, Dhaka. Practicing hour of Prof. Dr. Wahiuddin Mahmood at'
        },
        {
            id: 25,
            img: ranadhir,
            name: 'Dr. Ranadhir Kumar Kundu',
            degree: 'MBBS, MD',
            specialist: 'Cardiac Anesthesiology, Neuroanesthesiology & Neuro ICU Specialist',
            chember: 'Square Hospital, Dhaka',
            rating: rating,
            points: '(1)',
            address: '8/F, Kazi Nuruzzaman Road, West Panthapath, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '10616',
            about: 'Dr. Ranadhir Kumar Kundu is a Anesthesiologist in Dhaka. His qualification is MBBS, MD. He is a Consultant in the Department of Anesthesiology at Square Hospital, Dhaka. He regularly provides treatment to his patients at Square Hospital, Dhaka. Practicing hour of Dr. Ranadhir Kumar Kundu at'
        },
        {
            id: 26,
            img: mohammad,
            name: 'Dr. Mohammad Johirul Islam',
            degree: 'MBBS (DNMC), DA (DMC), FCPS (Anesthesiology)',
            specialist: 'Cardiac Anesthesiology Specialist',
            chember: 'Asgar Ali Hospital, Dhaka',
            rating: rating,
            points: '(0)',
            address: '111/1/A, Distillery Road, Gandaria, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '+8801787683333',
            about: 'Dr. Mohammad Johirul Islam is a Anesthesiologist in Dhaka. His qualification is MBBS (DNMC), DA (DMC), FCPS (Anesthesiology). He is a Consultant in the Department of Anesthesiology at Asgar Ali Hospital, Dhaka. He regularly provides treatment to his patients at Asgar Ali Hospital, Dhaka. Practicing hour of Dr. Mohammad Johirul Islam at'
        },
        {
            id: 27,
            img: shyama,
            name: 'Dr. Shyama Prosad Mitra',
            degree: 'MBBS, DA, FCPS (Anesthesiology)',
            specialist: 'Anesthesiology, Pain Management & Critical Care Specialist',
            chember: 'Evercare Hospital, Dhaka',
            rating: rating,
            points: '(1)',
            address: 'Plot # 81, Block # E, Bashundhara R/A, Dhaka',
            visiting: '9am to 5pm (Closed: Friday)',
            appointment: '10678',
            about: 'Dr. Shyama Prosad Mitra is a Anesthesiologist in Dhaka. His qualification is MBBS, DA, FCPS (Anesthesiology). He is a Consultant in the Department of Anesthesiology at Evercare Hospital, Dhaka. He regularly provides treatment to his patients at Evercare Hospital, Dhaka. Practicing hour of Dr. Shyama Prosad Mitra at'
        },
        {
            id: 28,
            img: ashia,
            name: 'Dr. Ashia Ali',
            degree: 'MBBS, Diploma (Anesthesia) FCPS (Anesthesia), FIPM (India)',
            specialist: 'Anesthesiology & Pain Management Specialist',
            chember: 'United Hospital, Dhaka',
            rating: rating,
            points: '(2)',
            address: 'Plot # 15, Road # 71, Gulshan, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '10666',
            about: 'Dr. Ashia Ali is a Anesthesiologist in Dhaka. Her qualification is MBBS, Diploma (Anesthesia) FCPS (Anesthesia), FIPM (India). She is a Consultant in the Department of Anesthesiology at United Hospital, Dhaka. She regularly provides treatment to her patients at United Hospital, Dhaka. Practicing hour of Dr. Ashia Ali at'
        },
        {
            id: 29,
            img: muhammad,
            name: 'Dr. Shah Muhammad Ali',
            degree: 'MBBS, DA, FCPS',
            specialist: 'Anesthesiology, Pain Management & Critical Care Specialist',
            chember: 'Square Hospital, Dhaka',
            rating: rating,
            points: '(1)',
            address: '8/F, Kazi Nuruzzaman Road, West Panthapath, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '10616',
            about: 'Dr. Shah Muhammad Ali is a Anesthesiologist in Dhaka. His qualification is MBBS, DA, FCPS. He is a Senior Consultant in the Department of Anesthesiology at Square Hospital, Dhaka. He regularly provides treatment to his patients at Square Hospital, Dhaka. Practicing hour of Dr. Shah Muhammad Ali at'
        },
        {
            id: 30,
            img: quamrul,
            name: 'Dr. Md. Quamrul Islam',
            degree: 'MBBS, MD',
            specialist: 'Anesthesiology, Pain Management & Critical Care Specialist',
            chember: 'Square Hospital, Dhaka',
            rating: rating,
            points: '(3)',
            address: '8/F, Kazi Nuruzzaman Road, West Panthapath, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '10616',
            about: 'Dr. Md. Quamrul Islam is a Anesthesiologist in Dhaka. His qualification is MBBS, MD. He is a Consultant in the Department of Anesthesiology at Square Hospital, Dhaka. He regularly provides treatment to his patients at Square Hospital, Dhaka. Practicing hour of Dr. Md. Quamrul Islam at'
        },
        {
            id: 31,
            img: munshi,
            name: 'Dr. Munshi Kalamur Rahman',
            degree: 'MBBS, MD (Anesthesiology)',
            specialist: 'Anesthesiology, Pain Management & Critical Care Specialist',
            chember: 'National Institute of Diseases of the Chest & Hospital',
            rating: rating,
            points: '(0)',
            address: 'Plot # 15, Road # 71, Gulshan, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '10666',
            about: 'Dr. Munshi Kalamur Rahman is a Anesthesiologist in Dhaka. His qualification is MBBS, MD (Anesthesiology). He is a Assistant Professor in the Department of Anesthesiology at National Institute of Diseases of the Chest & Hospital. He regularly provides treatment to his patients at United Hospital, Dhaka. Practicing hour of Dr. Munshi Kalamur Rahman at'
        },
        {
            id: 32,
            img: istaque,
            name: 'Dr. Istaque Ahmed Milton',
            degree: 'MBBS, FCPS, DA',
            specialist: 'Anesthesiology, Pain Management & Critical Care Specialist',
            chember: 'Square Hospital, Dhaka',
            rating: rating,
            points: '(1)',
            address: '8/F, Kazi Nuruzzaman Road, West Panthapath, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '10616',
            about: 'Dr. Istaque Ahmed Milton is a Anesthesiologist in Dhaka. His qualification is MBBS, FCPS, DA. He is a Consultant in the Department of Anesthesiology at Square Hospital, Dhaka. He regularly provides treatment to his patients at Square Hospital, Dhaka. Practicing hour of Dr. Istaque Ahmed Milton at'
        },
        {
            id: 33,
            img: nazmul,
            name: 'Dr. Brig. Gen. Md. Nazmul Ahsan',
            degree: 'MBBS, MD (Anesthesia)',
            specialist: 'Cardiac Anesthesiology & Pain Management Specialist',
            chember: 'United Hospital, Dhaka',
            rating: rating,
            points: '(0)',
            address: 'Plot # 15, Road # 71, Gulshan, Dhaka',
            visiting: 'Unknown. Please call to know visiting hour',
            appointment: '10666',
            about: 'Dr. Brig. Gen. Md. Nazmul Ahsan is a Anesthesiologist in Dhaka. His qualification is MBBS, MD (Anesthesia). He is a Senior Consultant in the Department of Anesthesiology at United Hospital, Dhaka. He regularly provides treatment to his patients at United Hospital, Dhaka. Practicing hour of Dr. Brig. Gen. Md. Nazmul Ahsan at'
        },
        {
            id: 34,
            img: rabiul,
            name: 'Dr. Md. Rabiul Alam',
            degree: 'MBBS, FCPS (Anesthesiology)',
            specialist: 'Anesthesiology & Pain Medicine Specialist',
            chember: 'Evercare Hospital, Dhaka',
            rating: rating,
            points: '(0)',
            address: 'Plot # 81, Block # E, Bashundhara R/A, Dhaka',
            visiting: '9am to 5pm (Closed: Friday)',
            appointment: '10678',
            about: 'Dr. Md. Rabiul Alam is a Anesthesiologist in Dhaka. His qualification is MBBS, FCPS (Anesthesiology). He is a Senior Consultant in the Department of Anaesthesia at Evercare Hospital, Dhaka. He regularly provides treatment to his patients at Evercare Hospital, Dhaka. Practicing hour of Dr. Md. Rabiul Alam at'
        },
        {
            id: 35,
            img: moinulHoque,
            name: 'Brig. Gen. Dr. Moinul Hoque Chowdhury',
            degree: 'MBBS, FCPS (Anesthesiology)',
            specialist: 'Anesthesiology, Pain Management & Critical Care Medicine Specialist',
            chember: 'Evercare Hospital, Dhaka',
            rating: rating,
            points: '(2)',
            address: 'Plot # 81, Block # E, Bashundhara R/A, Dhaka',
            visiting: '9am to 5pm (Closed: Friday)',
            appointment: '10678',
            about: 'Brig. Gen. Dr. Moinul Hoque Chowdhury is a Anesthesiologist in Dhaka. His qualification is MBBS, FCPS (Anesthesiology). He is a Senior Consultant in the Department of Anaesthesia at Evercare Hospital, Dhaka. He regularly provides treatment to his patients at Evercare Hospital, Dhaka. Practicing hour of Brig. Gen. Dr. Moinul Hoque Chowdhury at'
        },
        {
            id: 36,
            img: jayed,
            name: 'Dr. M.M. Jayed Hossain Chowdhury',
            degree: 'MBBS, DA, FCPS',
            specialist: 'Anesthesiology, Critical Care Management & ICU Specialist',
            chember: 'Square Hospital, Dhaka',
            rating: rating,
            points: '(1)',
            address: '8/F, Kazi Nuruzzaman Road, West Panthapath, Dhaka',
            visiting: '9am to 5pm (Only Friday)',
            appointment: '10616',
            about: 'Dr. M.M. Jayed Hossain Chowdhury is a Anesthesiologist in Dhaka. His qualification is MBBS, DA, FCPS. He is a Associate Consultant in the Department of Anesthesiology at Square Hospital, Dhaka. He regularly provides treatment to his patients at Square Hospital, Dhaka. Practicing hour of Dr. M.M. Jayed Hossain Chowdhury at'
        },
        {
            id: 37,
            img: abu,
            name: 'Dr. Abu Naser Muhammad Badruddoza',
            degree: 'MBBS, FCPS (Anesthesiology)',
            specialist: 'Anesthesia, Pain Management, & Critical Care Medicine Specialist',
            chember: 'Evercare Hospital, Dhaka',
            rating: rating,
            points: '(1)',
            address: 'Plot # 81, Block # E, Bashundhara R/A, Dhaka',
            visiting: '9am to 5pm (Closed: Friday)',
            appointment: '10678',
            about: 'Dr. Abu Naser Muhammad Badruddoza is a Anesthesiologist in Dhaka. His qualification is MBBS, FCPS (Anesthesiology). He is a Consultant in the Department of Anaesthesia at Evercare Hospital, Dhaka. He regularly provides treatment to his patients at Evercare Hospital, Dhaka. Practicing hour of Dr. Abu Naser Muhammad Badruddoza at'
        }
    ]

    const doctorDetails = doctors.filter(doctor => doctor.id == id);

    return (
        <div className='container mx-auto px-72'>

            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/">Doctors</Link></p>
            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/dhaka-d">Doctors in Dhaka</Link></p>
            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/anesthesiology-d">Pain Specialist in Dhaka</Link></p>

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

            <p className='border text-lg text-center py-3 my-3'>Updated on October 15, 2022</p>
        </div>
    );
};

export default SingleAnesthesiologist;