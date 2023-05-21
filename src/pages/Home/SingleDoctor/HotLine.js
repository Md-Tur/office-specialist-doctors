import React from 'react';
import sheba from '../../../images/singleDoctors/free-seba.jpg';

const HotLine = () => {
    return (
        <div className='container mx-auto px-72'>
            <h1 className='border text-2xl font-bold text-center py-3'>ফ্রি চিকিৎসার হটলাইন ১৬২৬৩</h1>
            <div className='border my-3'>
                <p className='text-lg text-center px-4 py-4'>স্বাস্থ্য বাতায়ন গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয় পরিচালিত একটি সেবা। এই স্বাস্থ্য বাতায়নের হেল্পলাইন ১৬২৬৩ এ কল করে আপনি স্বাস্থ্য সংক্রান্ত যেকোন বিষয়ে সরাসরি ডাক্তারের পরামর্শ নিতে পারেন। এই হেল্পলাইন দিনরাত ২৪ ঘন্টা আপনার সেবায় নিয়োজিত। এছাড়া স্বাস্থ্য বাতায়ন থেকে আপনি সরকারী হাসপাতাল, ডাক্তারের তথ্য কিংবা স্বাস্থ্যসেবা বিষয়ক অন্যান্য যেকোন তথ্য এবং ফোন নাম্বার পেতে পারেন।</p>
                <div className='flex justify-center pb-5'>
                    <button className='px-6 py-2 bg-[#2a7fba] rounded-md text-white text-xl font-medium hover:underline hover:bg-green-500'>কল করুন</button>
                </div>
            </div>

            <div className='flex justify-center items-center border p-4'>
                <img className='w-full' src={sheba} alt="free sheba" />
            </div>

            <div className='border my-3'>
                <h1 className='text-2xl font-bold text-center py-3'>কিভাবে ডাক্তারের সাথে কথা বলবেন</h1>
                <p className='text-lg text-center border-t px-4 py-4'>১৬২৬৩ ডায়াল করার পর, আপনার স্বাস্থ্য বিষয়ে পরামর্শের জন্য সরাসরি ডাক্তারের সাথে কথা বলতে 0 (শূন্য) চাপুন। আপনি যদি আপনার নিকটস্থ সরকারী হাসপাতাল, ডাক্তারের তথ্য কিংবা স্বাস্থ্যসেবা বিষয়ে কোন কিছু জানতে চান, তাহলে ১ চাপুন। আপনি যদি সরকারী-বেসরকারী অ্যাম্বুলেন্সের তথ্য জানতে চান, তাহলে ২ চাপুন। স্বাস্থ্য বাতায়ন কোন বানিজ্যিক সেবা নয় এবং এতে ফোন করতে মোবাইল ফোনের স্বাভাবিক বিলের অতিরিক্ত বিল হয়না।</p>
            </div>

            <p className='border text-lg text-center py-3 mb-3'>Updated on April 21, 2023</p>
        </div>
    );
};

export default HotLine;