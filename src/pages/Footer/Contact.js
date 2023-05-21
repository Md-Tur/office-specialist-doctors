import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='container mx-auto px-72 mb-5'>
            <p className='border text-center py-2 text-2xl font-semibold'>যোগাযোগ করুন</p>
            <p className='my-3 border text-center text-lg py-4'>আপনি যদি একজন বিশেষজ্ঞ ডাক্তার হয়ে থাকেন এবং এই ওয়েবসাইটে যুক্ত হতে চান তাহলে আপনার বিস্তারিত তথ্য<br /> নিচের লিঙ্কে ক্লিক করে পাঠিয়ে দিন। আপনার তথ্য ১২ ঘণ্টার মধ্যে এই ওয়েবসাইটে যুক্ত করা হবে এবং আপনাকে<br /> ইমেইলের মাধ্যমে জানানো হবে।<span className='text-[#FF0000]'> ৫১০ টাকা</span> ফি প্রযোজ্য (এককালীন)।</p>
            <p className='my-3 border text-lg font-bold text-center text-[#FF0000] py-3 hover:underline'><Link target='-blank' to="https://docs.google.com/forms/d/e/1FAIpQLSd7OAhzJO8TnBKM189BUpd6hd78lfx9AWeSMcSBFwFW_Y7ARA/viewform?usp=send_form">এখানে ক্লিক করুন</Link></p>
            <p className='my-3 border text-lg font-bold text-center text-[#008000] py-3 hover:underline hover:cursor-pointer'><Link to="/members">লিস্টের সবার উপরে আপনার প্রোফাইল রাখতে চাইলে ক্লিক করুন</Link></p>
            <p className='my-3 border text-lg text-center py-5'>আমার সাথে যোগাযোগ করতে অথবা তথ্য সম্পাদন করতে বা মুছে ফেলতে চাইলে আমাকে ইমেইল করতে পারেন।<br /> আপনার যে কোন ইমেইল খুব গুরুত্বের সাথে গ্রহণ করা হবে এবং ২৪ ঘণ্টার মধ্যে ব্যবস্থা নেয়া হবে।</p>
            <p className='my-3 border text-lg font-bold text-center text-[#FF0000] py-3 hover:underline'>contact@ratanmia.com</p>
            <p className='border text-lg text-center py-3'>Updated on March 27, 2023</p>
        </div>
    );
};

export default Contact;