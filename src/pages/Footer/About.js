import React from 'react';
import ratan from '../../images/ratan.jpg';

const About = () => {
    return (
        <div className='container mx-auto px-72 mb-5'>
            <p className='border text-center py-2 text-2xl font-semibold'>আমার সম্পর্কে জানুন</p>
            <div className='border p-4 flex flex-col my-3'>
                <div className='flex justify-center'>
                    <img className='w-[220px] border border-[#2a7fba] p-[2px]' src={ratan} alt="ratan" />
                </div>
                <p className='my-3 text-lg text-center'>আমার নাম রতন। আমি এই ওয়েবসাইটটি তৈরি করেছি। ওয়েবসাইটটি তৈরির শুরু থেকে আজ পর্যন্ত যা কিছু দেখছেন সব <br /> কিছু আমার নিজের হাতে করা। বর্তমানে, আমি একটি সরকারি প্রাথমিক বিদ্যালয়ে সহকারী শিক্ষক হিসেবে কর্মরত আছি।<br /> পাশাপাশি এই ওয়েবসাইটটি চালাচ্ছি।</p>
            </div>
            <div className='border'>
                <h1 className='text-2xl font-semibold text-center py-3'>কেনো এই ওয়েবসাইটটি তৈরি করেছি</h1>
                <p className='text-lg text-center border-t py-4'>নিজের মেয়ের জন্য যখন একজন ডাক্তারের নাম্বার খুঁজে পাইনি তখন মনে হয়েছিলো আমার মতো হয়তো অনেকেই <br /> আছে যারা জরুরী প্রয়োজনে ভালো একজন ডাক্তারের বা হাসপাতালের নাম্বার খুঁজে পাচ্ছেনা। ঠিক তখনই আমার মনে হয়<br /> এমন একটি ওয়েবসাইট থাকা উচিৎ যেখানে সহজেই ডাক্তার বা হাসপাতালের সঠিক তথ্য খুঁজে পাওয়া যাবে। তাই আমি এই<br /> ওয়েবসাইটটি তৈরি করার সিদ্ধান্ত নেই এবং বানিয়ে ফেলি।</p>
            </div>
            <p className='my-3 border text-xl font-bold text-center py-5'>আমি সবসময় চেষ্টা করি সঠিক তথ্য প্রদান করার। তবে অনেকসময় ভুল-ভ্রান্তি হয়ে যায়। চেষ্টা করবেন<br /> ভুল-ভ্রান্তিগুলোকে ক্ষমার দৃষ্টিতে দেখার এবং পারলে সঠিক তথ্য দিয়ে সহয়তা করবেন।</p>
            <p className='border text-lg text-center py-3'>Updated on January 22, 2023</p>
        </div>
    );
};

export default About;