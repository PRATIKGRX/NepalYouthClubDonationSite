const Contact = () => {
  return (
    <main>
      <section className="px-12 py-15">
        <p className="text-[36px] font-medium mb-6">Get in Touch with Us</p>
        <div className="grid grid-cols-2 gap-6">
          <div className="border border-[#FF201A] rounded-[5px] px-5 py-2 flex flex-col gap-5">
            <p className="text-[32px] font-medium">Message Us</p>
            <input
              type="text"
              placeholder="Your Name"
              className="text-[20px] py-3 px-5 border border-[#8C8484] rounded-[10px] focus:outline-1 focus:outline-[#FF201A] "
            />
            <input
              type="email"
              className="text-[20px] py-3 px-5 border border-[#8C8484] rounded-[10px] focus:outline-1 focus:outline-[#FF201A]"
              placeholder="Your Email"
            />
            <textarea
              name=""
              className="text-[20px] py-3 px-5 border border-[#8C8484] rounded-[10px] focus:outline-1 focus:outline-[#FF201A] resize-none h-50"
              placeholder="Your Message"
              id=""
            ></textarea>
            <div>
              <button className="bg-[#DC241F] text-white text-[22px] px-4 py-2 rounded-[5px]">
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div>

        </div>
      </section>
      <section className="px-12 py-15">
        <p className="text-[36px] font-medium">OUR LOCATION</p>
      </section>
    </main>
  );
};

export default Contact;
