import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <section>
            <Navbar />
            <div
                className="flex flex-col items-center justify-center text-center w-full h-[70vh] bg-cover bg-center relative">

                <div className="absolute inset-0 bg-white"></div>

                <div className="relative z-10 px-4">

                    <h1 className="text-5xl md:text-6xl font-extrabold text-[#ff2c2c]">
                        Welcome to Nepal Youth Club
                    </h1>

                    <p className="mt-6 text-lg text-black max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iusto perspiciatis eaque iste ex itaque temporibus voluptas libero quisquam eos, laboriosam aut expedita, beatae recusandae, assumenda laudantium facere impedit ratione?
                    </p>

                    <div className="flex gap-4 justify-center mt-8 text-white">
                        <span className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl font-semibold text-lg ">
                            Donate Now
                        </span>

                        <span className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl font-semibold text-lg ">
                            Learn More
                        </span>

                    </div>

                </div>

            </div>
            <Footer />
        </section>
    )
}

export default Home;