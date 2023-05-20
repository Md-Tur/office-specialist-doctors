import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div className='container mx-auto px-72 mb-5'>
            <p className='border text-center py-2 text-2xl font-semibold'>পেমেন্ট করুন</p>
            <p className='my-3 border text-center text-lg py-4'>বিকাশের মাধ্যমে আমাদের ফি প্রদান করার জন্য দয়া করে নিচের লিঙ্কে প্রবেশ করুন, টাকার পরিমান উল্লেখ করুন এবং <br /> রেফারেন্সে অবশ্যই আপনার নাম দিন। ফি – ৫১০ টাকা এবং মেম্বারশিপ ফি – ৫১০০ টাকা।</p>
            <div className='flex justify-center'>
                <button className='px-6 py-3 my-2 rounded-md bg-[#D12053] text-lg text-white hover:bg-green-500 hover:underline'>
                    <Link target='-blank' to="https://shop.bkash.com/doctor-bangladesh01531327643/paymentlink/default-payment">পেমেন্ট করুন</Link></button>
            </div>
            <p className='my-3 border text-lg text-center py-4'>পেমেন্ট করার কিছুক্ষণের মধ্যেই আপনাকে আমাদের ওয়েবসাইটে যোগ করা হবে।</p>
            <p className='border text-lg text-center py-3'>Updated on October 11, 2022</p>
        </div>
    );
};

export default Payment;