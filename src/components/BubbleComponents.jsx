const HeaderNavBar = () => {
    return (
        <header class="text-gray-600 body-font mt-20" >
            <div class="bg-[#5b4b45] flex flex-wrap flex-col md:flex-row items-center px-5 py-5 fixed top-0 left-0 right-0">
                <nav class="flex lg:w-2/5 flex-wrap items-center text-white text-sm md:text-base md:ml-auto">
                    <a class="mr-5 hover:text-[#e0de90] font-medium cursor-pointer" href="#">Home</a>
                    <a class="mr-5 hover:text-[#e0de90] font-medium cursor-pointer" href="#services">Services</a>
                    <a class="mr-5 hover:text-[#e0de90] font-medium cursor-pointer" href="#about_us">About us</a>
                    <a class="hover:text-[#e0de90] font-medium cursor-pointer" href="#contact">Contact</a>
                </nav>
                <a
                    class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <img src="/images/cafe-removebg-preview.png" class="w-32" alt=""></img>
                </a>
                <div class="lg:w-2/5 inline-flex lg:justify-end md:ml-3 lg:ml-0">
                    <button
                        class="hidden md:inline-flex items-center bg-transparent border-2 py-1 px-3 focus:outline-none hover:text-[#5b4b45] font-medium hover:bg-white rounded-lg text-white text-base mt-4 md:mt-0">
                        Buy now
                    </button>
                </div>
            </div>
        </header >
    )
}

const FirstHeroSection = () => {
    return (
        <section class="bg-[#fedfdd] w-full">
            <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-1/2 flex justify-center items-center mb-10 order-2 md:order-1">
                    <div class="text-center px-5 sm:px-5 md:px-14 lg:px-28 md:pt-8">
                        <h1 class="font-satisfy text-4xl pb-3">Bubble Tea</h1>
                        <p class="font-raleway text-xs md:text-sm leading-6">Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                            Ea eius numquam dolor recusandae ipsum
                            quibusdam, voluptatibus facilis dolores maiores perferendis.</p>
                    </div>
                </div>
                <div class="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-5 order-1 md:order-2">
                    <div class="px-8 md:px-16 lg:px-32 py-5 md:py-0">
                        <img src="./images/Boba_Tea-removebg-preview.png" class="" alt=""></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

const SecondHeroSection = () => {
    return (
        <section id="services" class="flex flex-col items-center font-raleway text-xl w-full py-5 px-6 md:px-0">
            <h1 class="text-center font-bold">Do you want to try our flavors?</h1>
            <div class="flex flex-wrap md:flex-row w-full">
                <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src="./images/bubble1.png" class="w-32 h-32" alt=""></img>
                    <p class="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src="./images/bubble2.png" class="w-32 h-32" alt=""></img>
                    <p class="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src="./images/bubble3.png" class="w-32 h-32" alt=""></img>
                    <p class="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src="./images/bubble4.png" class="w-32 h-32" alt=""></img>
                    <p class="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src="./images/bubble7.png" class="w-32 h-32" alt=""></img>
                    <p class="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="flex flex-col items-center p-5 md:p-0 lg:p-5 text-sm w-full md:w-1/2 lg:w-1/6">
                    <img src="./images/bubble6.png" class="w-32 h-32" alt=""></img>
                    <p class="text-center">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </section>
    )
}

const ThirdHeroSection = () => {
    return (
        <section id="about_us" class="flex flex-col md:flex-row w-full font-raleway">
            <div class="bg-[#ffaed5] flex flex-col md:flex-row w-full md:w-1/2">
                <div class="flex flex-col justify-center md:justify-start items-center md:items-start pt-10 md:pt-6 lg:pt-10 px-16 md:px-6 lg:px-16">
                    <h1 class="font-medium text-2xl mb-3 text-center md:text-start">Lorem ipsum dolor sit amet consectetur.
                    </h1>
                    <p class="text-center pb-5 md:pb-0 lg:pb-5 text-lg">Lorem ipsum</p>
                    <button
                        class="bg-[#e0de90] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-3 px-5 md:my-4 lg:my-0 rounded-lg font-bold">Order
                        now</button>
                </div>
                <div class="flex flex-col items-center md:justify-end md:items-end">
                    <img src="./images/bubble8.png" class="w-1/2 md:w-full lg:w-4/5 md:pr-5 pt-6 md:pt-20" alt=""></img>
                </div>
            </div>
            <div class="bg-[#e0de90] flex flex-col md:flex-row w-full md:w-1/2">
                <div class="flex flex-col justify-center md:justify-start items-center md:items-start pt-10 md:pt-6 lg:pt-10 px-16 md:px-6 lg:px-16">
                    <h1 class="font-medium text-2xl mb-3 text-center md:text-start">Lorem ipsum dolor sit amet consectetur.
                    </h1>
                    <p class="text-center pb-5 md:pb-0 lg:pb-5 text-lg">Lorem, ipsum</p>
                    <button
                        class="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-3 px-5 md:my-4 lg:my-0 rounded-lg font-bold">Order
                        now</button>
                </div>
                <div class="flex flex-col items-center md:justify-end md:items-end">
                    <img src="./images/bubble9.png" class="w-1/2 md:w-full lg:w-4/5 md:pr-5 pt-6 md:pt-20" alt=""></img>
                </div>
            </div>
        </section>
    )
}

const FourthHeroSection = () => {
    return (
        <section class="flex flex-col font-raleway w-full">
            <div class="flex flex-row pt-6 pb-2 justify-center items-center text-black font-bold hover:text-[#5b4b45]">
                <h1 class="px-2 md:px-8">Flavors</h1>
                <h1 class="px-2 md:px-8">Places</h1>
                <h1 class="px-2 md:px-8">Prices</h1>
            </div>
            <div class="flex flex-col lg:flex-row px-14 py-5">
                <div class="w-full lg:w-1/5 flex flex-col px-3 pb-3 md:pb-0">
                    <div class="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
                        <img src="./images/bubbletaro.jfif" class="w-40 md:w-56 lg:w-40" alt=""></img>
                        <div class="pt-4 w-full">
                            <p class="text-center font-bold">Lorem, ipsum dolor.</p>
                            <h1 class="my-3 text-green-800 text-center"><strong>$123</strong></h1>
                            <center>
                                <button
                                    class="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">Buy
                                    now</button>
                            </center>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/5 flex flex-col px-3 pb-3 md:pb-0">
                    <div class="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
                        <img src="./images/bubble matcha.jfif" class="w-40 md:w-56 lg:w-40" alt=""></img>
                        <div class="pt-4 w-full">
                            <p class="text-center font-bold">Lorem, ipsum dolor.</p>
                            <h1 class="my-3 text-green-800 text-center"><strong>$123</strong></h1>
                            <center>
                                <button
                                    class="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">Buy
                                    now</button>
                            </center>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/5 flex flex-col px-3 pb-3 md:pb-0">
                    <div class="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
                        <img src="./images/bubble caramel.jfif" class="w-40 md:w-56 lg:w-40" alt=""></img>
                        <div class="pt-4 w-full">
                            <p class="text-center font-bold">Lorem, ipsum dolor.</p>
                            <h1 class="my-3 text-green-800 text-center"><strong>$123</strong></h1>
                            <center>
                                <button
                                    class="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">Buy
                                    now</button>
                            </center>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/5 flex flex-col px-3 pb-3 md:pb-0">
                    <div class="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
                        <img src="./images/bubbletaro.jfif" class="w-40 md:w-56 lg:w-40" alt=""></img>
                        <div class="pt-4 w-full">
                            <p class="text-center font-bold">Lorem, ipsum dolor.</p>
                            <h1 class="my-3 text-green-800 text-center"><strong>$123</strong></h1>
                            <center>
                                <button
                                    class="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">Buy
                                    now</button>
                            </center>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/5 flex flex-col px-3 pb-3 md:pb-">
                    <div class="bg-white border border-gray-200 flex flex-col justify-center items-center py-5 px-5">
                        <img src="./images/bubblefresa.jfif" class="w-40 md:w-56 lg:w-40" alt=""></img>
                        <div class="pt-4 w-full">
                            <p class="text-center font-bold">Lorem, ipsum dolor.</p>
                            <h1 class="my-3 text-green-800 text-center"><strong>$123</strong></h1>
                            <center>
                                <button
                                    class="bg-[#ffaed5] text-[#5b4b45] hover:bg-black hover:bg-opacity-30 py-2 px-3 rounded-lg font-bold">Buy
                                    now</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const FifthHeroSection = () => {
    return (
        <section id="contact" class="font-raleway flex flex-row bg-[#e0de90] w-full">
            <div class="hidden md:block">
                <img src="./images/tarobubbletea-removebg-preview.png" alt=""></img>
            </div>
            <div class="flex flex-col justify-center items-center py-10 md:py-0">
                <h1 class="font-bold text-[#5b4b45] text-2xl">Join in and get 15% off!</h1>
                <p class="text-center text-sm md:text-lg lg:text-xl pb-4 pt-4 text-[#5b4b45]">Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit.
                    Cumque, exercitationem.</p>
                <form class="flex flex-col md:flex-row items-center justify-center">
                    <input type="text" class="py-2 px-5 border border-2 border-[#5b4b45] rounded-lg"
                        placeholder="Email address" />
                    <button
                        class="py-2 px-5 ml-1 mt-3 md:mt-0 rounded-lg bg-[#5b4b45] hover:bg-black hover:bg-opacity-30 text-white font-bold">Subscribe</button>
                </form>
            </div>
            <div class="hidden md:block">
                <img src="./images/coffeebubbletea-removebg-preview.png" alt=""></img>
            </div>
        </section>
    )
}

const Footer = () => {
    return (
        <footer
            class="bg-[#5b4b45] text-white flex flex-row justify-center md:justify-between items-center py-6 md:py-12 px-28 md:px-8 lg:px-28 w-full">
            <div class="flex flex-col justify-center items-center">
                <img src="./images/cafe-removebg-preview.png" class="w-32" alt=""></img>
                    <div class="flex flex-row">
                        <i class="fa-brands fa-facebook text-white text-2xl p-5"></i>
                        <i class="fa-brands fa-instagram text-white text-2xl p-5"></i>
                        <i class="fa-brands fa-whatsapp text-white text-2xl p-5"></i>
                    </div>
            </div>
            <div class="flex flex-col hidden md:block">
                <h1 class="font-bold text-lg">Follow us</h1>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>

            <div class="flex flex-col hidden md:block">
                <h1 class="font-bold text-lg">Contact Info</h1>
                <p>contactinfo@gmail.com</p>
                <p>+503 87989898</p>
                <p>1234 street name, city, country</p>
            </div>
            <div class="flex flex-col hidden md:block">
                <h1 class="font-bold text-lg">Navigation</h1>
                <p>Home</p>
                <p>Services</p>
                <p>About us</p>
            </div>
        </footer>
    )
}

export { HeaderNavBar, FirstHeroSection, SecondHeroSection, ThirdHeroSection, FourthHeroSection, FifthHeroSection, Footer };