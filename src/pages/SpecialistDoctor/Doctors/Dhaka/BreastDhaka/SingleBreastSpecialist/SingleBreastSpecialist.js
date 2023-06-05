import React from 'react';
import { Link, useParams } from 'react-router-dom';
// images
import rating from '../../../../../../images/Specialist/Star-Rating.png';
import nasir from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Md.-Nasir-Uddin-Mahmud.jpg';
import samia from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Samia-Mubin.jpg';
import jesmen from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Jesmen-Nahar-Runi.jpg';
import bilkis from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Most.-Bilkis-Fatema.jpg';
import nasid from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Kazi-Nasid-Nazneen.jpg';
import nishat from '../../../../../../images/Specialist/Dhaka/Breast/Prof.-Dr.-Nishat-Begum.jpg';
import ayesha from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Ayesha-Rahman.jpg';
import nafisa from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Ali-Nafisa-1.jpg';
import shamima from '../../../../../../images/Specialist/Dhaka/Breast/Prof.-Dr.-Shamima-Jahan.jpg';
import nilufar from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Nilufar-Shabnam.jpg';
import leea from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Leea-Amin.jpg';
import subarna from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Subarna-Islam.jpg';
import sharmin from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Sharmin-Islam.jpg';
import mostafizur from '../../../../../../images/Specialist/Dhaka/Breast/Prof.-Dr.-Mohammed-Mostafizur-Rahman.jpg';
import tamanna from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Tamanna-Narmeen.jpg';
import sonia from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Sonia-Akter.jpg';
import abdus from '../../../../../../images/Specialist/Dhaka/Breast/Prof.-Dr.-Abdus-Salam-Arif.jpg';
import tanu from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Nasim-E-Tasnim-Tanu.jpg';
import farid from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-SK-Farid-Ahmed.jpg';
import farhana from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Farhana-Yesmin.jpg';
import mostaque from '../../../../../../images/Specialist/Dhaka/Breast/Prof.-Dr.-A.Z.M.-Mostaque-Hossain-Tuhin.jpg';
import shayda from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Shayda-Ali.jpg';
import enamul from '../../../../../../images/Specialist/Dhaka/Breast/Brig.-Gen.-Prof.-Dr.-Md.-Enamul-Kabir.jpg';
import nashir from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Mohammad-Nashir-Uddin.jpg';
import munny from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Munny-Momotaz.jpg';
import nabila from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Nabila-Khanduker.jpg';
import nasrin from '../../../../../../images/Specialist/Dhaka/Breast/Dr.-Shamima-Nasrin.jpg';

const SingleBreastSpecialist = () => {

    const { id } = useParams();

    const doctors = [
        {
            id: 1,
            img: nasir,
            name: 'Lt. Col. Dr. Md. Nasir Uddin (Mahmud)',
            degree: 'MBBS, FCPS (Surgery - Gold Medalist), FACS (USA), FMAS (India) Post Fellowship Training in Surgical Oncology (NICRH), Advance Training in Oncoplastic Breast Surgery (BSOS)',
            specialist: 'Breast Surgeon & Oncoplastic Breast Surgeon',
            chember: 'Border Guard Hospital, Dhaka',
            rating: rating,
            points: '(1)',
            address: 'House # 06, Road # 04, Dhanmondi, Dhaka - 1205',
            visiting: '4pm to 7pm (Closed: Friday)',
            appointment: '10606',
            about: 'Lt. Col. Dr. Md. Nasir Uddin (Mahmud) is a one of the best Breast Surgeon & Oncoplastic Breast Surgeon in Dhaka. His qualification is MBBS, FCPS (Surgery - Gold Medalist), FACS (USA), FMAS (India), Post Fellowship Training in Surgical Oncology (NICRH), Advance Training in Oncoplastic Breast Surgery (BSOS). He is an Associate Professor & Head in the Department of Surgery at Border Guard Hospital, Dhaka. He regularly provides treatment to his patients at'
        },
        {
            id: 2,
            img: samia,
            name: 'Prof. Dr. Samia Mubin',
            degree: 'MBBS (DMC), FCPS (Surgery), MRCS (UK)',
            specialist: 'General, Laparoscopic & Breast Cancer Specialist Surgeon',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital',
            rating: rating,
            points: '(156)',
            address: '32, Bir Uttam Shafiullah Sarak (Green Road), Dhanmondi, Dhaka',
            visiting: '3pm to 5pm (Sat, Sun, Tue & Thu)',
            appointment: '+8801714991475',
            about: 'Prof. Dr. Samia Mubin is a General Surgeon in Dhaka. Her qualification is MBBS (DMC), FCPS (Surgery), MRCS (UK). She is a Professor in the Department of Surgery at Bangabandhu Sheikh Mujib Medical University Hospital. She regularly provides treatment to her patients at'
        },
        {
            id: 3,
            img: jesmen,
            name: 'Dr. Jesmen Nahar Runi',
            degree: 'MBBS, BCS (Health), MCPS (Surgery), FCPS (Surgery)',
            specialist: 'General, Breast & Colorectal Surgeon',
            chember: 'Dhaka Medical College & Hospital',
            rating: rating,
            points: '(98)',
            address: '1/1 B, Kallyanpur, Dhaka',
            visiting: '6pm to 8.30pm (Sun, Tues & Thursday)',
            appointment: '+8801703725590',
            about: 'Dr. Jesmen Nahar Runi is a General Surgeon in Dhaka. Her qualification is MBBS, BCS (Health), MCPS (Surgery), FCPS (Surgery). She is a Consultant in the Department of Surgery at Dhaka Medical College & Hospital. She regularly provides treatment to her patients at Ibn Sina Medical College Hospital, Kallyanpur. Practicing hour of Dr. Jesmen Nahar Runi at'
        },
        {
            id: 4,
            img: bilkis,
            name: 'Dr. Bilkis Fatema',
            degree: 'MBBS, BCS (Health), MCPS (Surgery), FCPS (Surgery), MS (Colorectal Surgery)',
            specialist: 'General, Colorectal, Piles & Breast Surgeon',
            chember: 'Dhaka Medical College & Hospital',
            rating: rating,
            points: '(88)',
            address: '# 06, Road # 04, Dhanmondi, Dhaka - 1205',
            visiting: '6pm to 9pm (Sun, Tue & Thu)',
            appointment: '10606',
            about: 'Dr. Bilkis Fatema is a Female Colorectal Surgeon in Dhaka. Her qualification is MBBS, BCS (Health), MCPS (Surgery), FCPS (Surgery), MS (Colorectal Surgery). She is a Assistant Professor in the Department of Colorectal Surgery at Dhaka Medical College & Hospital. She regularly provides treatment to her patients at Labaid Specialized Hospital, Dhanmondi. Practicing hour of Dr. Bilkis Fatema at'
        },
        {
            id: 5,
            img: nasid,
            name: 'Dr. Kazi Nasid Naznin',
            degree: 'MBBS, FCPS (Surgery), MS (Colorectal Surgery)',
            specialist: 'General, Breast & Colorectal Surgeon',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital',
            rating: rating,
            points: '(57)',
            address: 'Plot # 31, Block # D, Section # 11, Mirpur, Dhaka – 1216',
            visiting: '8pm to 10pm (Closed: Friday)',
            appointment: '+8801992346632',
            about: 'Dr. Kazi Nasid Naznin is a Female Colorectal Surgeon in Dhaka. Her qualification is MBBS, FCPS (Surgery), MS (Colorectal Surgery). She is a Assistant Professor in the Department of Surgery at Bangabandhu Sheikh Mujib Medical University Hospital. She regularly provides treatment to her patients at'
        },
        {
            id: 6,
            img: nishat,
            name: 'Prof. Dr. Nishat Begum',
            degree: 'MBBS, FCPS (Surgery), Training in Breast & Colorectal Surgery, Fellowship in Breast Cancer (India)',
            specialist: 'General, Breast & Colorectal Specialist Surgeon',
            chember: 'Dhaka Medical College & Hospital',
            rating: rating,
            points: '(53)',
            address: '32, Bir Uttam Shafiullah Sarak (Green Road), Dhanmondi, Dhaka',
            visiting: '11am to 2pm (Sun, Tue & Thu)',
            appointment: '+8801912463111',
            about: 'Prof. Dr. Nishat Begum is a General Surgeon in Dhaka. Her qualification is MBBS, FCPS (Surgery). She is a Former Professor in the Department of Surgery at Dhaka Medical College & Hospital. She regularly provides treatment to her patients at Green Life Hospital, Dhaka. Practicing hour of Prof. Dr. Nishat Begum at'
        },
        {
            id: 7,
            img: ayesha,
            name: 'Dr. Ayesha Rahman',
            degree: 'MBBS, BCS (Health), MCPS (Surgery), FCPS (Surgery)',
            specialist: 'General, Colorectal & Breast Surgeon',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital',
            rating: rating,
            points: '(33)',
            address: 'Unit 02, House # 02, Block # A, Section # 10, Mirpur, Dhaka',
            visiting: '4pm to 8pm (Closed: Wednesday & Friday)',
            appointment: '+8809613787807',
            about: 'Dr. Ayesha Rahman is a General Surgeon in Dhaka. Her qualification is MBBS, BCS (Health), MCPS (Surgery), FCPS (Surgery). She is a Consultant in the Department of Surgery at Bangabandhu Sheikh Mujib Medical University Hospital. She regularly provides treatment to her patients at Popular Diagnostic Center, Mirpur. Practicing hour of Dr. Ayesha Rahman at'
        },
        {
            id: 8,
            img: nafisa,
            name: 'Dr. Ali Nafisa',
            degree: 'MBBS (RMC), FCPS (Surgery), Trained in Oncoplastic Breast Surgery (UK & India)',
            specialist: 'General & Oncoplastic Breast Surgeon',
            chember: 'Anwer Khan Modern Medical College & Hospital',
            rating: rating,
            points: '(41)',
            address: '77/A, East Rajabazar, West Panthapath, Dhaka',
            visiting: '6pm to 7pm (Closed: Friday)',
            appointment: '+8801910734568',
            about: 'Dr. Ali Nafisa is a Oncoplastic Breast Surgeon in Dhaka. Her qualification is MBBS (RMC), FCPS (Surgery). She is a Associate Professor in the Department of Surgery at Anwer Khan Modern Medical College & Hospital. She regularly provides treatment to her patients at BRB Hospital, Dhaka. Practicing hour of Dr. Ali Nafisa at'
        },
        {
            id: 9,
            img: shamima,
            name: 'Prof. Dr. Shamima Jahan',
            degree: 'MBBS, FCPS (Surgery), Training (Colorectal & Breast Surgery)',
            specialist: 'General, Laparoscopic, Breast & Colorectal Surgeon',
            chember: 'Dhaka National Medical College & Hospital',
            rating: rating,
            points: '(32)',
            address: '30, Anjuman Mofidul Islam Road, Kakrail, Dhaka – 1000',
            visiting: '5pm to 8pm (Closed: Mon & Friday)',
            appointment: '+8801810000116',
            about: 'Prof. Dr. Shamima Jahan is a General Surgeon in Dhaka. Her qualification is MBBS, FCPS (Surgery), Training (Colorectal & Breast Surgery). She is a Professor & Head in the Department of Surgery at Dhaka National Medical College & Hospital. She regularly provides treatment to her patients at Islami Bank Central Hospital, Kakrail. Practicing hour of Prof. Dr. Shamima Jahan at'
        },
        {
            id: 10,
            img: nilufar,
            name: 'Dr. Nilufar Shabnam',
            degree: 'MBBS, FCPS (Surgery), MRCS (Edinburgh), MRCPS (Glasgow), CCD (BIRDEM)',
            specialist: 'General, Breast & Colorectal Surgeon',
            chember: 'Birdem General Hospital & Ibrahim Medical College',
            rating: rating,
            points: '(10)',
            address: 'Plot # Umo, Block # Rossoi, Satmosjid Road, Dhaka',
            visiting: '5pm to 7pm (Sun, Mon, Thu & Friday)',
            appointment: '+8801550020885',
            about: 'Dr. Nilufar Shabnam is a Breast Surgeon in Dhaka. Her qualification is MBBS, FCPS (Surgery), MRCS (Edinburgh), MRCPS (Glasgow), CCD (BIRDEM). She is a Registrar in the Department of Surgery at Birdem General Hospital & Ibrahim Medical College. She regularly provides treatment to her patients at'
        },
        {
            id: 11,
            img: leea,
            name: 'Dr. Leea Amin',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'General, Laparoscopic, Breast, Cancer & Colorectal Surgeon',
            chember: 'Eastern Medical College & Hospital',
            rating: rating,
            points: '(24)',
            address: 'House # 25, Road # 7, Sector # 4, Uttara, Dhaka (Unit 02)',
            visiting: '4pm to 6pm (Sat, Sun & Mon)',
            appointment: '+8809613787805',
            about: 'Dr. Leea Amin is a Breast Cancer Surgeon in Dhaka. Her qualification is MBBS, FCPS (Surgery). She is a Associate Professor in the Department of Surgery at Eastern Medical College & Hospital. She regularly provides treatment to her patients at Popular Diagnostic Center, Uttara. Practicing hour of Dr. Leea Amin at'
        },
        {
            id: 12,
            img: subarna,
            name: 'Dr. Subarna Islam',
            degree: 'MBBS, FCPS (Surgery), PGT (Cosmetic Surgery)',
            specialist: 'Breast & Cosmetic Surgeon',
            chember: 'American Super Specialty Hospital Limited',
            rating: rating,
            points: '(16)',
            address: 'House # 52, Garib-E-Newaz Avenue, Sector # 13, Uttara, Dhaka',
            visiting: '10.30am to 12.30pm (Sun, Tues, Thurs), 6pm to 8pm (Sat & Wed)',
            appointment: '+8809610009612',
            about: 'Dr. Subarna Islam is a Breast Surgeon in Dhaka. Her qualification is MBBS, FCPS (Surgery), PGT (Cosmetic Surgery). She is a Consultant in the Department of Surgery at American Super Specialty Hospital Limited. She regularly provides treatment to her patients at Ibn Sina Diagnostic Center, Uttara. Practicing hour of Dr. Subarna Islam at'
        },
        {
            id: 13,
            img: sharmin,
            name: 'Dr. Sharmin Islam',
            degree: 'MBBS, FCPS (Surgery), Advanced Training in Breast Surgery (AIIMS, Delhi, India)',
            specialist: 'General, Laparoscopic, Breast & Colorectal Surgeon',
            chember: 'Dhaka Medical College & Hospital',
            rating: rating,
            points: '(6)',
            address: '152/2/G, Green Road, Panthapath, Dhaka - 1205',
            visiting: '6pm to 8pm (Saturday & Tuesday)',
            appointment: '+8801611216232',
            about: 'Dr. Sharmin Islam is a General Surgeon in Dhaka. Her qualification is MBBS, FCPS (Surgery). She is a Consultant in the Department of Surgery at Dhaka Medical College & Hospital. She regularly provides treatment to her patients at Health and Hope Hospital. Practicing hour of Dr. Sharmin Islam at'
        },
        {
            id: 14,
            img: mostafizur,
            name: 'Prof. Dr. Mohammed Mostafizur Rahman',
            degree: 'MBBS (DMC), FRCS (Edinburgh)',
            specialist: 'Breast, Colorectal, Endocrine & Laparoscopic Surgery Specialist',
            chember: 'Bangabandhu Sheikh Mujib Medical University Hospital',
            rating: rating,
            points: '(9)',
            address: 'House # 17, Road # 08, Dhanmondi R/A, Dhaka – 1205',
            visiting: '6pm to 9pm (Closed: Friday)',
            appointment: '+8801713001346',
            about: 'Prof. Dr. Mohammed Mostafizur Rahman is a General Surgeon in Dhaka. His qualification is MBBS (DMC), FRCS (Edinburgh). He is a Professor in the Department of Surgery at Bangabandhu Sheikh Mujib Medical University Hospital. He regularly provides treatment to his patients at Anwer Khan Modern Medical College Hospital. Practicing hour of Prof. Dr. Mohammed Mostafizur Rahman at'
        },
        {
            id: 15,
            img: tamanna,
            name: 'Dr. Tamanna Narmeen',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'General, Breast & Laparoscopic Surgeon',
            chember: 'Birdem General Hospital & Ibrahim Medical College',
            rating: rating,
            points: '(9)',
            address: '1/A, Segun Bagicha Road, Dhaka – 1000',
            visiting: '3pm to 6pm (Closed: Friday)',
            appointment: '+8801921876704',
            about: 'Dr. Tamanna Narmeen is a General Surgeon in Dhaka. Her qualification is MBBS, FCPS (Surgery). She is a Associate Professor in the Department of Pediatric Surgery at Birdem General Hospital & Ibrahim Medical College. She regularly provides treatment to her patients at'
        },
        {
            id: 16,
            img: sonia,
            name: 'Dr. Sonia Akter',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'General, Laparoscopic, Breast & Colorectal Surgeon',
            chember: 'Enam Medical College & Hospital',
            rating: rating,
            points: '(6)',
            address: '9/3 Parboti Nagar, Thana Road, Savar, Dhaka',
            visiting: '8am to 2.30pm (Closed: Friday)',
            appointment: '+8801716358146',
            about: 'Dr. Sonia Akter is a General Surgeon in Dhaka. Her qualification is MBBS, FCPS (Surgery). She is a Associate Professor in the Department of Surgery at Enam Medical College & Hospital. She regularly provides treatment to her patients at Enam Medical College & Hospital. Practicing hour of Dr. Sonia Akter at'
        },
        {
            id: 17,
            img: abdus,
            name: 'Prof. Dr. Abdus Salam Arif',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'General, Laparoscopic & Breast Surgeon',
            chember: 'Dhaka Medical College & Hospital',
            rating: rating,
            points: '(10)',
            address: 'House # 17, Road # 08, Dhanmondi R/A, Dhaka – 1205',
            visiting: '9am to 2pm & 7pm to 9pm (Closed: Friday)',
            appointment: '+88029670295',
            about: 'Prof. Dr. Abdus Salam Arif is a General Surgeon in Dhaka. His qualification is MBBS, FCPS (Surgery). He is a Professor in the Department of Surgery at Dhaka Medical College & Hospital. He regularly provides treatment to his patients at Anwer Khan Modern Medical College Hospital. Practicing hour of Prof. Dr. Abdus Salam Arif at'
        },
        {
            id: 18,
            img: tanu,
            name: 'Dr. Nasim-E-Tasnim Tanu',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'General, Colorectal & Breast Surgeon',
            chember: 'Shaheed Tajuddin Ahmad Medical College & Hospital',
            rating: rating,
            points: '(4)',
            address: '1/24/B, Kamalapur Manda Road, South Mugdapara, Dhaka',
            visiting: '7pm to 9.30pm (Sat, Mon, Tue & Thu)',
            appointment: '+8801724008677',
            about: 'Dr. Nasim-E-Tasnim Tanu is a General Surgeon in Dhaka. Her qualification is MBBS, FCPS (Surgery). She is a Assistant Professor in the Department of Surgery at Shaheed Tajuddin Ahmad Medical College & Hospital. She regularly provides treatment to her patients at'
        },
        {
            id: 19,
            img: farid,
            name: 'Dr. SK Farid Ahmed',
            degree: 'MBBS, FRCS (RCPSG)',
            specialist: 'Oncoplastic & Reconstructive Breast Surgeon',
            chember: 'Wycombe General Hospital, Buckinghamshire Healthcare NHS Trust, UK',
            rating: rating,
            points: '(11)',
            address: '55 Satmasjid Road, Zigatola Bus Stand, Dhanmondi',
            visiting: '3pm to 6pm (Closed: Friday)',
            appointment: '+8801752694019',
            about: 'Dr. SK Farid Ahmed obtained his MBBS degree from Mymensingh medical college in 1992, then arrived in UK for postgraduate higher study and training in Surgery. He is working as an onoplastic breast surgeon at Buckinghamshire Hospitals NHS Trust in UK for the last 26 years. Prior to that, he has worked in various hospitals in Edinburgh, Borders, Yorkshire and Sunderland in various specialty for surgical training. He obtained his Surgical Fellowship (FRCS) from the Royal College of physicians and surgeons of Glasgow in 2000. He carries out various Onco-plastic procedure such as skin sparing mastectomy, implant and acellular dermal matrix, LD reconstruction with or without implants, various therapeutic mammoplasties, augmentation/Reduction / symmetrisation procedures, breast conserving surgery with or without wire localisation as well as radio frequency seed localisation technique. He works in number one unit in whole of UK as it has performed highest number of cases with one step nucleic acid amplification (OSNA) to stage axilla. He is a core member of breast MDT at BHNHST and also TOPS (Thames Valley Onco-plastic Surgery). He has published various papers and research (https://www.researchgate.net/profile/Skfarid_Ahmed/publications) out comes and presented once at EBCC (SNB and OSNA). He is one of the faculty member of breast surgery courses run by the Royal College of surgeons of England. He is a co-investigator for POSNOC trial in the UK. He is also a co-investigator for LORIS trial which is looking at low risk DCIS to avoid surgery. Teaching and training is his passion and working in Oxford deanery (HETV) as Tutor and a member of School of Surgery for a number of years. He is also a member of RCSEng professional affairs board, South Central. He was the Deputy Chair of one of branches of practice of British medical association and Chair of Strategy, Policy and procedure and active engagement with GMC, Health Education England, NHS employers and Academy of medical Royal colleges. He regularly provides treatment to his patients at'
        },
        {
            id: 20,
            img: farhana,
            name: 'Dr. Farhana Yesmin',
            degree: 'MBBS, BCS (Health), FCPS (Surgery)',
            specialist: 'Breast, Colorectal, Laparoscopic & General Surgeon',
            chember: 'Dhaka Dental College & Hospital',
            rating: rating,
            points: '(8)',
            address: 'House # 48, Road # 9/A, Dhanmondi, Dhaka - 1209',
            visiting: '4.30pm to 7.30pm (Closed: Wed, Thu & Friday)',
            appointment: '+8809610010615',
            about: 'Dr. Farhana Yesmin is a General Surgeon in Dhaka. Her qualification is MBBS, BCS (Health), FCPS (Surgery). She is a Assistant Professor in the Department of Surgery at Dhaka Dental College & Hospital. She regularly provides treatment to her patients at Ibn Sina Diagnostic Center, Dhanmondi. Practicing hour of Dr. Farhana Yesmin at'
        },
        {
            id: 21,
            img: mostaque,
            name: 'Prof. Dr. A.Z.M. Mostaque Hossain Tuhin',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'General, Laparoscopic & Breast Surgeon',
            chember: 'Dhaka Medical College & Hospital',
            rating: rating,
            points: '(7)',
            address: 'House # 17, Road # 08, Dhanmondi R/A, Dhaka – 1205',
            visiting: '7pm to 9pm (Closed: Friday)',
            appointment: '+8801715049580',
            about: 'Prof. Dr. A.Z.M. Mostaque Hossain Tuhin is a General Surgeon in Dhaka. His qualification is MBBS, FCPS (Surgery). He is a Professor & Head in the Department of Surgery at Dhaka Medical College & Hospital. He regularly provides treatment to his patients at Anwer Khan Modern Medical College Hospital. Practicing hour of Prof. Dr. A.Z.M. Mostaque Hossain Tuhin at'
        },
        {
            id: 22,
            img: shayda,
            name: 'Dr. Shayda Ali',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'Breast, Colorectal, General & Laparoscopic Surgery Specialist',
            chember: 'Delta Medical College & Hospital',
            rating: rating,
            points: '(5)',
            address: '26/2, Principal Abul Kashem Road, Mirpur-1, Dhaka - 1216',
            visiting: '8.30am to 2pm (Closed: Friday)',
            appointment: '+8801301254924',
            about: 'Dr. Shayda Ali is a General Surgeon in Dhaka. Her qualification is MBBS, FCPS (Surgery). She is a Assistant Professor in the Department of Surgery at Delta Medical College & Hospital. She regularly provides treatment to her patients at Delta Hospital, Mirpur. Practicing hour of Dr. Shayda Ali at'
        },
        {
            id: 23,
            img: enamul,
            name: 'Brig. Gen. Prof. Dr. Md. Enamul Kabir',
            degree: 'MBBS, FCPS (Surgery), FACS (USA), FICS (USA), Diploma in Burns & Plastic Surgery (China), Post Fellowship Training in Plastic, Burns, Aesthetic Plastic (Cosmetic) & Breast Surgery from Second Military Medical University (SMMU), China',
            specialist: 'Plastic, Burn, Aesthetic Plastic (Cosmetic) & Breast Surgeon',
            chember: 'Marks Medical College & Hospital',
            rating: rating,
            points: '(5)',
            address: 'House # 02, Block # A, Mirpur 10, Dhaka (Unit 02)',
            visiting: '10am to 1pm (Closed: Fri & Sat)',
            appointment: '+8809666787878',
            about: 'Brig. Gen. Prof. Dr. Md. Enamul Kabir is a Plastic Surgeon in Dhaka. His qualification is MBBS, FCPS (Surgery), FACS (USA), FICS (USA), Diploma in Burns & Plastic Surgery (China). He is a Professor in the Department of Surgery & Plastic Surgery at Marks Medical College & Hospital. He regularly provides treatment to his patients at Popular Diagnostic Center, Mirpur. Practicing hour of Brig. Gen. Prof. Dr. Md. Enamul Kabir at'
        },
        {
            id: 24,
            img: nashir,
            name: 'Dr. Mohammad Nashir Uddin',
            degree: 'MBBS, FCPS (Surgery), MS (Plastic Surgery), FACS (USA)',
            specialist: 'Burn, Plastic & Breast Surgery Specialist',
            chember: 'Dhaka Medical College & Hospital',
            rating: rating,
            points: '(2)',
            address: 'Cha - 80/3, Progati Sarani, Uttar Badda, Dhaka',
            visiting: '4pm to 8pm (Closed: Friday)',
            appointment: '+8801711-837187',
            about: 'Dr. Mohammad Nashir Uddin is a Plastic Surgeon in Dhaka. His qualification is MBBS, FCPS (Surgery), MS (Plastic Surgery), FACS (USA). He is a Associate Professor in the Department of Burn & Plastic Surgery at Dhaka Medical College & Hospital. He regularly provides treatment to his patients at AMZ Hospital, Badda. Practicing hour of Dr. Mohammad Nashir Uddin at'
        },
        {
            id: 25,
            img: munny,
            name: 'Dr. Munny Momotaz',
            degree: 'MBBS, FCPS (Surgery), MS (Plastic Surgery)',
            specialist: 'General, Breast, Plastic, Reconstructive & Cosmetic Surgery Specialist',
            chember: 'Tairunnessa Memorial Medical College & Hospital',
            rating: rating,
            points: '(3)',
            address: 'Hosaf Tower, 6/9 Outer Circular Road, Malibagh, Dhaka',
            visiting: '6pm to 8pm (Sun, Mon, Tue & Thu)',
            appointment: '+8801790118855',
            about: 'Dr. Munny Momotaz is a Plastic Surgeon in Dhaka. Her qualification is MBBS, FCPS (Surgery), MS (Plastic Surgery). She is a Associate Professor in the Department of Plastic Surgery at Tairunnessa Memorial Medical College & Hospital. She regularly provides treatment to her patients at Medinova Medical Services, Malibagh. Practicing hour of Dr. Munny Momotaz at'
        },
        {
            id: 26,
            img: nabila,
            name: 'Dr. Nabila Khanduker',
            degree: 'MBBS, FCPS (Surgery)',
            specialist: 'General, Laparoscopic & Breast Cancer Surgeon',
            chember: 'Green Life Medical College & Hospital',
            rating: rating,
            points: '(9)',
            address: '32, Bir Uttam Shafiullah Sarak (Green Road), Dhanmondi, Dhaka',
            visiting: '6pm to 8pm (Saturday & Monday)',
            appointment: '+8801868504100',
            about: 'Dr. Nabila Khanduker is a General Surgeon in Dhaka. Her qualification is MBBS, FCPS (Surgery). She is a Associate Professor in the Department of Surgery at Green Life Medical College & Hospital. She regularly provides treatment to her patients at Green Life Hospital, Dhaka. Practicing hour of Dr. Nabila Khanduker at'
        },
        {
            id: 27,
            img: nasrin,
            name: 'Dr. Shamima Nasrin',
            degree: 'MBBS (DMC) FCPS (Surgery), FMAS (India), Advance Training in Breast & Laser Piles Surgery',
            specialist: 'General, Breast & Colorectal Surgeon',
            chember: 'Anwer Khan Modern Medical College Hospital',
            rating: rating,
            points: '(6)',
            address: 'House # 17, Road # 08, Dhanmondi R/A, Dhaka – 1205',
            visiting: '7pm to 9pm (Sat, Mon, Tue & Wed)',
            appointment: '+8801819167948',
            about: 'Dr. Shamima Nasrin is a General Surgeon in Dhaka. Her qualification is MBBS (DMC) FCPS (Surgery), FMAS (India). She is a Assistant Professor in the Department of Surgery at Anwer Khan Modern Medical College Hospital. She regularly provides treatment to her patients at Anwer Khan Modern Medical College Hospital. Practicing hour of Dr. Shamima Nasrin at'
        }
    ]

    const doctorDetails = doctors.filter(doctor => doctor.id == id);

    return (
        <div className='container mx-auto px-72'>

            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/">Doctors</Link></p>
            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/dhaka-d">Doctors in Dhaka</Link></p>
            <p className='my-3 border text-lg text-center text-[#2a7fba] py-3 hover:underline hover:cursor-pointer'><Link to="/breast-d">Breast Surgeon in Dhaka</Link></p>

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

            <p className='border text-lg text-center py-3 my-3'>Updated on June 2, 2023</p>
        </div>
    );
};

export default SingleBreastSpecialist;