import Link from "next/link"
export default function Aboutus(){

    return(

        <>
        <div className="bg-gray-100 ">
    <div className="container mx-auto py-8  ">
        <div className="flex mx-auto w-[85%]">
            
            <div className="col-span-4 sm:col-span-9  mx-auto">
                <div className="bg-white shadow  p-6 m-auto">
                    <h2 className="text-3xl font-bold mb-4">Welcome to Meera Foundation</h2>
                    <p className="text-gray-700">At Meera Foundation our mission is simple yet profound to extend a helping hand to those who need it most We are a non-profit organization dedicated to uplifting the lives of marginalized individuals and communities across the globe Our diverse range of programs and initiatives aims to address various challenges faced by the underprivileged ensuring that no one is left behind
                    </p>

                    <h3 className="font-semibold text-center mt-3 -mb-2">
                        Find me on
                    </h3>
                    <div className="flex justify-center items-center gap-6 my-6">
                        {/* <Link className="text-gray-700 hover:text-[#27AB61]" aria-label="Visit TrendyMinds LinkedIn" href=""
                            target="_blank">
                            <svg xmlns="http://wwww3org/2000/svg" viewBox="0 0 448 512" className="h-6">
                                <path fill="currentColor"
                                    d="M10028 448H74V1489h9288zM5379 1081C2409 1081 0 835 0 538a5379 5379 0 0 1 10758 0c0 297-241 543-5379 543zM4479 448h-9268V3024c0-347-7-792-4829-792-4829 0-5569 377-5569 767V448h-9278V1489h8908v408h13c124-235 4269-483 8788-483 94 0 11128 619 11128 1423V448z">
                                </path>
                            </svg>
                        </Link> */}
                        <Link className="text-gray-700 hover:text-[#27AB61]" aria-label="Visit TrendyMinds YouTube" href=""
                            target="_blank">
                            <svg xmlns="http://wwww3org/2000/svg" viewBox="0 0 576 512" className="h-6">
                                <path fill="currentColor"
                                    d="M549655 124083c-6281-2365-24787-42276-48284-48597C458781 64 288 64 288 64S11722 64 74629 75486c-23497 6322-42003 24947-48284 48597-11412 42867-11412 132305-11412 132305s0 89438 11412 132305c6281 2365 24787 415 48284 47821C11722 448 288 448 288 448s17078 0 213371-11486c23497-6321 42003-24171 48284-47821 11412-42867 11412-132305 11412-132305s0-89438-11412-132305zm-31751 213508V175185l142739 81205-142739 81201z">
                                </path>
                            </svg>
                        </Link>
                        <Link className="text-gray-700 hover:text-[#27AB61]" aria-label="Visit TrendyMinds Facebook" href=""
                            target="_blank">
                            <svg xmlns="http://wwww3org/2000/svg" viewBox="0 0 320 512" className="h-6">
                                <path fill="currentColor"
                                    d="m27914 288 1422-9266h-8891v-6013c0-2535 1242-5006 5224-5006h4042V626S26043 0 22536 0c-7322 0-12108 4438-12108 12472v7062H2289V288h8139v224h10017V288z">
                                </path>
                            </svg>
                        </Link>
                        <Link className="text-gray-700 hover:text-[#27AB61]" aria-label="Visit TrendyMinds Instagram" href=""
                            target="_blank">
                            <svg xmlns="http://wwww3org/2000/svg" viewBox="0 0 448 512" className="h-6">
                                <path fill="currentColor"
                                    d="M2241 141c-636 0-1149 513-1149 1149s513 1149 1149 1149S339 3195 339 2559 2877 141 2241 141zm0 1896c-411 0-747-335-747-747s335-747 747-747 747 335 747 747-336 747-747 747zm1464-1943c0 149-12 268-268 268-149 0-268-12-268-268s12-268 268-268 268 12 268 268zm761 272c-17-359-99-677-362-939-262-262-58-344-939-362-37-21-1479-21-1849 0-358 17-676 99-939 361s-344 58-362 939c-21 37-21 1479 0 1849 17 359 99 677 362 939s58 344 939 362c37 21 1479 21 1849 0 359-17 677-99 939-362 262-262 344-58 362-939 21-37 21-1478 0-1848zM3988 388c-78 196-229 347-426 426-295 117-995 9-1321 9s-1027 26-1321-9c-196-78-347-229-426-426-117-295-9-995-9-1321s-26-1027 9-1321c78-196 229-347 426-426 295-117 995-9 1321-9s1027-26 1321 9c196 78 347 229 426 426 117 295 9 995 9 1321s27 1027-9 1321z">
                                </path>
                            </svg>
                        </Link>
                        <Link className="text-gray-700 hover:text-[#27AB61]" aria-label="Visit TrendyMinds Twitter" href=""
                            target="_blank">
                            <svg className="h-6" xmlns="http://wwww3org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M45937 151716c325 4548325 9097325 13645 0 13872-105583 298558-298558 298558-59452 0-11468-17219-161137-47106 8447974 16568 1299 2534 1299 49055 0 94213-16568 130274-44832-46132-975-84792-31188-98112-72772 6498974 12995 1624 19818 1624 9421 0 18843-13 27614-3573-48081-9747-84143-5198-84143-102985v-1299c13969 7797 30214 1267 47431 13319-28264-18843-46781-51005-46781-87391 0-19492 5197-3736 14294-52954 51655 63675 1293 105258 216365 109807-1624-7797-2599-15918-2599-2404 0-57828 46782-104934 104934-104934 30213 0 57502 1267 7667 33137 23715-4548 46456-1332 66599-2534-7798 24366-24366 44833-46132 57827 21117-2273 41584-8122 60426-16243-14292 20791-32161 39308-52628 54253z">
                                </path>
                            </svg>
                        </Link>
                    </div>


                    
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">Empowering the Vulnerable</span>
                           
                        </div>
                        <p className="mt-2">
                        From impoverished families struggling to make ends meet to individuals facing disabilities we believe in empowering the vulnerable by providing them with the necessary support and resources Through our financial assistance programs we offer a lifeline to those grappling with economic hardships helping them regain stability and self-sufficiency
                        </p>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">Caring for Health and Well-being</span>
                           
                        </div>
                        <p className="mt-2">
                        Access to quality healthcare is a fundamental right that many are deprived of At Meera Foundation we strive to bridge this gap by offering medical assistance to those unable to afford essential treatments Whether its covering medical expenses facilitating surgeries or providing access to medications we ensure that no one has to compromise on their health due to financial constraints
                        </p>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">Nurturing Education Building Futures</span>
                           
                        </div>
                        <p className="mt-2">
                        Education is the key to unlocking endless opportunities yet millions of children around the world are denied this basic right Through our education support programs we sponsor the education of orphaned children giving them access to learning resources school supplies and mentorship By investing in their education we aim to break the cycle of poverty and empower them to build brighter futures
                        </p>
                    </div>



                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">Supporting Farmers Sustaining Livelihoods</span>
                           
                        </div>
                        <p className="mt-2">
                        For many farmers in developing regions agriculture is not just a means of livelihood but a way of life However fluctuating market prices natural disasters and lack of resources often pose significant challenges Through our agricultural initiatives we provide farmers with the necessary tools training and financial assistance to enhance productivity and sustain their livelihoods
                        </p>
                    </div>


                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">Advocating for Justice and Equality</span>
                           
                        </div>
                        <p className="mt-2">
                        In a world plagued by injustice and inequality we stand as advocates for change Whether its addressing legal issues faced by marginalized communities or advocating for their rights we are committed to fostering a more just and equitable society Through our legal aid programs we offer guidance and support to those navigating complex legal systems ensuring that everyone has access to justice
                        </p>
                    </div>



                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 font-bold text-2xl">Join Us in Making a Difference</span>
                           
                        </div>
                        <p className="mt-2 ">
                        At Meera Foundation we believe that together we can make a meaningful impact on the lives of those in need Whether through volunteering donations or spreading awareness we invite you to join us on our journey towards creating a more compassionate and inclusive world Together lets build a future where every individual has the opportunity to thrive regardless of their circumstances
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
