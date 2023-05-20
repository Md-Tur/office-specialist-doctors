import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div className='container mx-auto px-72 mb-5'>
            <p className='border text-center py-2 text-2xl font-bold mb-3'>Privacy Policy</p>
            <div className='border'>
                <h1 className='text-2xl font-bold text-center py-3'>Introduction</h1>
                <p className='text-lg text-center border-t py-4'>This privacy policy outlines the types of personal information that is received and collected and how it is used. This Privacy Policy is reviewed and revised from time to time. Your use of this site, in any and all forms, constitutes an acceptance of this privacy policy.</p>
            </div>
            <div className='border my-3'>
                <h1 className='text-2xl font-bold text-center py-3'>What Information We Collect</h1>
                <p className='text-lg text-center border-t px-3 py-4'>We use log files like many other websites. The information in the log files include: Internet Protocol addresses (IP), Types of browser, Internet Service Provider (ISP), Date and time stamp, Referring and exit pages, Number of clicks. All of this information is not linked to anything that is personally identifiable.</p>
            </div>
            <div className='border'>
                <h1 className='text-2xl font-bold text-center py-3'>Cookies</h1>
                <p className='text-lg text-center border-t px-3 py-4'>We use cookies to store information about visitor preferences and to record user-specific information on visits and pages the user views so as to provide a custom experience. In regard to third-party advertisers, this site has no access or control over these cookies. You should review the respective privacy policies on any and all third-party ad servers for more information regarding their practices and how to opt-out. Google, a third party vendor, uses the DART cookie to serve ads on this website. Users may opt out of the use of the DART cookie by visiting sp <Link to="https://policies.google.com/technologies/ads" target='-blank' className='text-blue-500 hover:underline hover:cursor-pointer'> Google’s Content Network Privacy Policy.</Link></p>
            </div>
            <div className='border my-3'>
                <h1 className='text-2xl font-bold text-center py-3'>Google Analytics</h1>
                <p className='text-lg text-center border-t px-3 py-4'>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network. You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on.</p>
            </div>
            <div className='border'>
                <h1 className='text-2xl font-bold text-center py-3'>Third Party Links</h1>
                <p className='text-lg text-center border-t px-3 py-4'>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit.</p>
            </div>
            <div className='border my-3'>
                <h1 className='text-2xl font-bold text-center py-3'>Contact Us</h1>
                <p className='text-lg text-center border-t py-4'>If you have any questions about this Privacy Policy, please contact us via <Link to="/contact" className='text-blue-500 hover:underline hover:cursor-pointer'>contact form.</Link></p>
            </div>
            <p className='border text-lg text-center py-3'>Updated on October 11, 2022</p>
        </div>
    );
};

export default Privacy;