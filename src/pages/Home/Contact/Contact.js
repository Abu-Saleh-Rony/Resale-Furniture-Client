import React from 'react';
import login from '../../../assests/login.jpg'
const Contact = () => {
    return (
        <div>
            <h2 className="text-4xl mb-6 font-bold text-center leading-tight lg:text-5xl">Contact Us</h2>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-3 bg-purple-900 text-gray-100">

                <div className="flex flex-col justify-between ">
                    <div className="space-y-2">

                        <img src={login} alt="" />
                    </div>
                    <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <div className='mt-0'>
                    <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div>
                            <label for="name" className="text-sm">Full name</label>
                            <input id="name" type="text" placeholder="" className="w-full p-3 rounded " />
                        </div>
                        <div>
                            <label for="email" className="text-sm">Email</label>
                            <input id="email" type="email" className="w-full p-3 rounded " />
                        </div>
                        <div>
                            <label for="message" className="text-sm">Message</label>
                            <textarea id="message" rows="3" className="w-full p-3 rounded"></textarea>
                        </div>
                        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-orange-500 text-gray-900">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;