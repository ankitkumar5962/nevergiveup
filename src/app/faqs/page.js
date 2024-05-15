import Link from "next/link"
export default function FAQs(){

    return(


        <>
        
        <div className="bg-gray-100 ">
    <div className="container mx-auto py-8  ">
        <div className="flex mx-auto w-[85%]">
            
            <div className="col-span-4 sm:col-span-9  mx-auto">
                <div className="bg-white shadow  p-6 m-auto">
                    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions (FAQs) - Meera Foundation</h2>
                    {/* <p className="text-gray-700">At Meera Foundation, our mission is simple yet profound: to extend a helping hand to those who need it most. We are a non-profit organization dedicated to uplifting the lives of marginalized individuals and communities across the globe. Our diverse range of programs and initiatives aims to address various challenges faced by the underprivileged, ensuring that no one is left behind.
                    </p> */}

                    <h3 className="font-semibold text-center mt-3 -mb-2">
                        Find me on
                    </h3>
                    <div className="flex justify-center items-center gap-6 my-6">
                        {/* <Link className="text-gray-700 hover:text-[#27AB61]" aria-label="Visit TrendyMinds LinkedIn" href=""
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                                <path fill="currentColor"
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                </path>
                            </svg>
                        </Link> */}
                        <Link className="text-gray-700 hover:text-[#27AB61]" aria-label="Visit TrendyMinds YouTube" href=""
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6">
                                <path fill="currentColor"
                                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                </path>
                            </svg>
                        </Link>
                        <Link className="text-gray-700 hover:text-[#27AB61]" aria-label="Visit TrendyMinds Facebook" href=""
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                                <path fill="currentColor"
                                    d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                </path>
                            </svg>
                        </Link>
                        <Link className="text-gray-700 hover:text-[#27AB61]" aria-label="Visit TrendyMinds Instagram" href=""
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                                <path fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                </path>
                            </svg>
                        </Link>
                        <Link className="text-gray-700 hover:text-[#27AB61]" aria-label="Visit TrendyMinds Twitter" href=""
                            target="_blank">
                            <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                </path>
                            </svg>
                        </Link>
                    </div>


                    
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">What is Meera Foundation all about?</span>
                           
                        </div>
                        <p className="mt-2">
                        Meera Foundation is a beacon of hope and compassion, dedicated to uplifting the lives of the underprivileged and marginalized members of society. Through our various initiatives, we provide financial assistance to the poor, support for medical issues and health challenges, aid to struggling farmers, promote awareness for clean and sustainable environment, advocate for the rights of disabled individuals, and nurture the well-being of children.
                        </p>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">How can I get involved with Meera Foundation?</span>
                           
                        </div>
                        <p className="mt-2">
                        There are numerous ways to get involved with Meera Foundation! You can make a donation, volunteer your time and skills, organize fundraising events, or simply spread awareness about our cause. Every contribution, no matter how big or small, makes a meaningful difference in the lives of those we serve.
                        </p>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">How does Meera Foundation ensure transparency and accountability?</span>
                           
                        </div>
                        <p className="mt-2">
                        Transparency and accountability are integral to the ethos of Meera Foundation. We maintain detailed records of all donations and expenditures, which are regularly audited to ensure compliance with legal and ethical standards. Additionally, we provide our stakeholders with regular updates and reports on the impact of our programs, fostering trust and confidence in our organization.
                        </p>
                    </div>



                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">How does Meera Foundation protect the privacy of its beneficiaries?</span>
                           
                        </div>
                        <p className="mt-2">
                        Meera Foundation takes the privacy and confidentiality of its beneficiaries very seriously. We adhere to strict confidentiality protocols to safeguard sensitive information, such as medical records and personal details. Our beneficiaries can trust that their privacy will be respected and protected at all times.
                        </p>
                    </div>


                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">Can I designate my donation to a specific cause or program?</span>
                           
                        </div>
                        <p className="mt-2">
                        Yes, absolutely! At Meera Foundation, we understand that donors may have specific causes or programs close to their hearts. You can designate your donation to a particular cause, such as medical assistance, education support, environmental conservation, or any other area of our work that resonates with you.
                        </p>
                    </div>



                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">How does Meera Foundation measure its impact?</span>
                           
                        </div>
                        <p className="mt-2 ">
                        Measuring impact is essential to ensuring that our programs are effective and responsive to the needs of our beneficiaries. We employ various metrics and evaluation methods to assess the outcomes of our initiatives, including feedback from beneficiaries, quantitative data analysis, and case studies. This allows us to continually improve and refine our approach to maximize our impact.
                        </p>
                    </div>



                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">How can I request assistance from Meera Foundation?</span>
                           
                        </div>
                        <p className="mt-2 ">
                        If you or someone you know is in need of assistance, you can reach out to Meera Foundation through our website or contact information provided. Our team will carefully review each request and strive to provide support to those who need it most, in line with our mission and available resources.
                        </p>
                    </div>


                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">How can I stay updated on Meera Foundation's work?</span>
                           
                        </div>
                        <p className="mt-2 ">
                        To stay updated on Meera Foundation's latest news, events, and initiatives, you can subscribe to our newsletter, follow us on social media platforms, or visit our website regularly. We also encourage you to engage with us and share your thoughts, feedback, and ideas for how we can continue to make a positive impact in the community.<br></br>
                        At Meera Foundation, we believe that together, we can create a brighter and more equitable future for all. Thank you for your support and commitment to our cause.<br></br>
                        For further inquiries, please don't hesitate to contact us at <Link href={"/contactus"} className="font-bold text-[19px] text-[#27AB61]">Contact Us</Link>.
                        </p>
                    </div>



                </div>
            </div>
        </div>
    </div>
</div>
        
        
        </>
    )
}