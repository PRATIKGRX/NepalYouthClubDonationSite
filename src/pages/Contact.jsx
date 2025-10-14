import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [activeTab, setActiveTab] = useState("contact");

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted:", formData);
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitted(false), 5000);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section>
            <Navbar />
            <div className="max-w-screen flex flex-col items-center bg-white text-white mt-5">
           
            {/* Header */}
            <div className="text-center mb-12 max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-extrabold text-[#ff2c2c]">
                    Contact Us
                </h1>
                <p className="mt-6 text-lg text-black">
                    Have questions or feedback? We'd love to hear from you.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8 border-b border-[#ff2c2c]">
                <button
                    onClick={() => setActiveTab("contact")}
                    className={`px-6 py-3 font-medium ${activeTab === "contact"
                        ? "text-[#ff2c2c] border-b-2 border-[#ff2c2c]"
                        : "text-gray-400 hover:text-[#ff2c2c]"
                        }`}
                >
                    Contact Form
                </button>
                <button
                    onClick={() => setActiveTab("faq")}
                    className={`px-6 py-3 font-medium ${activeTab === "faq"
                        ? "text-[#ff2c2c] border-b-2 border-[#ff2c2c]"
                        : "text-gray-400 hover:text-[#ff2c2c]"
                        }`}
                >
                    FAQs
                </button>
            </div>

            {/* Card */}
            <div className="w-full max-w-6xl bg-[#f01e2c] rounded-2xl shadow-2xl overflow-hidden md:flex">
                {/* Left Info */}
                <div className="md:w-1/3 bg-[#ff2c2c] p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

                    <div className="space-y-6 text-gray-200">
                        <div className="flex items-start gap-4">
                            <FiMail className="h-6 w-6 mt-1 text-white" />
                            <div>
                                <h3 className="font-semibold">Email Us</h3>
                                <p>contact@nepalyouthclub.com</p>
                                <p>support@nepalyouthclub.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FiPhone className="h-6 w-6 mt-1 text-white" />
                            <div>
                                <h3 className="font-semibold">Call Us</h3>
                                <p>+977 9876543210</p>
                                <p>Sun-Fri: 9AM-5PM</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FiMapPin className="h-6 w-6 mt-1 text-white" />
                            <div>
                                <h3 className="font-semibold">Visit Us</h3>
                                <p>Kathmandu, Nepal</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="md:w-2/3 p-8">
                    {activeTab === "contact" ? (
                        <>
                            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                            {submitted && (
                                <div className="bg-[#ee6b6e] border border-green-300 text-green-800 rounded-lg p-4 mb-6 flex items-center gap-2">
                                    <FiCheckCircle className="h-5 w-5 text-green-600" />
                                    Thanks for your message! We'll get back to you soon.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 rounded-lg bg-white border ${errors.name ? "border-red-500" : "border-white"
                                            } focus:ring-2 focus:ring-cyan-400 focus:outline-none`}
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 rounded-lg bg-white border ${errors.email ? "border-red-500" : "border-white"
                                            } focus:ring-2 focus:ring-cyan-400 focus:outline-none`}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 rounded-lg bg-white border ${errors.message ? "border-red-500" : "border-white"
                                            } focus:ring-2 focus:ring-cyan-400 focus:outline-none`}
                                    ></textarea>
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#ff2c2c]"
                                >
                                    <FiSend className="h-5 w-5" />
                                    Send Message
                                </button>
                            </form>
                        </>
                    ) : (
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6 text-gray-300">
                                <div>
                                    <h3 className="font-semibold text-white">
                                        How do I join tournaments?
                                    </h3>
                                    <p>
                                        Create an account, browse tournaments, and click “Join” to
                                        register. You’ll get match details via email and dashboard.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">
                                        What payment methods are supported?
                                    </h3>
                                    <p>
                                        We accept eSewa, Khalti, FonePay, and international cards.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">
                                        Can I watch matches live?
                                    </h3>
                                    <p>
                                        Yes! All tournaments have live-stream options linked on the
                                        match card.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">
                                        Do you provide refunds?
                                    </h3>
                                    <p>
                                        Refunds are available if the tournament gets canceled or
                                        technical issues prevent matches from happening.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <Footer />
        </section>
    );
};

export default Contact;
