import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";

export const SigninModal = ({ setIsOpen }) => {

    // This effect will run when the modal is open and rendered
    useEffect(() => {
        const form = document.getElementById('emailForm');
        if (form) {
            const handleFormSubmit = (event) => {
                event.preventDefault(); // Prevent default form submission

                const name = document.getElementById('nameInput').value;
                const comment = document.getElementById('commentInput').value;
                const email = document.getElementById('emailInput').value;

                // Validation
                if (!email.includes('@')) {
                    alert('Please enter a valid email address.');
                    return;
                }

                // Create a mailto link
                const subject = encodeURIComponent('Subscription Request: LogKeeper Early Access');
                const body = encodeURIComponent(`Name: ${name}\nComment: ${comment}\nEmail: ${email}`);
                const mailtoLink = `mailto:info@logkeeper.io?subject=${subject}&body=${body}`;

                // Redirect to mailto link
                window.location.href = mailtoLink;
            };

            // Attach event listener
            form.addEventListener('submit', handleFormSubmit);

            // Cleanup event listener when component unmounts
            return () => {
                form.removeEventListener('submit', handleFormSubmit);
            };
        }
    }, []); // Empty dependency array ensures this runs when the modal is first rendered

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, zIndex: 50 }}
                animate={{ opacity: 1, zIndex: 50 }}
                transition={{ duration: 0.1 }}
                exit={{ opacity: 0 }}
            >
                <div
                    className="fixed inset-0 bg-bgDarkTransparentDarker flex justify-center items-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative w-full sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex relative">
                            <div className="w-1/2 hidden lg:inline">
                                <h2 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-primaryText">
                                    We're not live yet.
                                </h2>
                                <h2 className="text-5xl font-bold tracking-normal text-secondaryColor">
                                    Sign-in will be available once we launch soon!
                                </h2>

                                <ul className="mb-6 text-primaryText mt-12">
                                    <li className="mb-4 flex">
                                        <CheckArrowIcon />
                                        <span>Real-time logs data visualization</span>
                                    </li>
                                    <li className="mb-4 flex">
                                        <CheckArrowIcon />
                                        <span>Scalable log data management</span>
                                    </li>
                                    <li className="mb-4 flex">
                                        <CheckArrowIcon />
                                        <span>Instant alerts and notifications</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0">
                                <div className="flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                                    <div className="text-white mr-2 text-8xl">
                                        <TailcastLogo />
                                    </div>
                                    <div className="text-white font-['Inter'] font-bold text-3xl">
                                        LogKeeper
                                    </div>
                                </div>

                                <h3 className="mb-7 text-2xl text-primaryText font-bold leading-snug text-center">
                                    Join a New Wave of Innovators in Log Management
                                </h3>
                                <form id="emailForm" method="post">
                                    <div className="flex flex-wrap -m-2">
                                        <div className="w-full sm:w-4/5 p-2 mx-auto">
                                            <input
                                                className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                                                id="nameInput"
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="w-full sm:w-4/5 p-2 mx-auto">
                                            <input
                                                className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                                                id="commentInput"
                                                type="text"
                                                name="comment"
                                                placeholder="Your Comment"
                                            />
                                        </div>
                                        <div className="w-full sm:w-4/5 p-2 mx-auto">
                                            <input
                                                className="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                                                id="emailInput"
                                                type="text"
                                                name="mail"
                                                placeholder="Your email address"
                                            />
                                        </div>
                                        <div className="w-full sm:w-4/5 p-2 mt-4 mx-auto">
                                            <input
                                                className="py-4 px-6 w-full text-primaryText font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-primaryColor hover:bg-[#7274f3] transition ease-in-out duration-200"
                                                type="submit"
                                                value="Join now"
                                                aria-label="Join now"
                                                id="sendEmailButton"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div
                                className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition"
                                onClick={() => setIsOpen(false)}
                            >
                                <CloseIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
