const testimonials = [
  {
    message: "“Booking services has never been easier. The professionals were punctual and did a fantastic job.”",
    name: "– Priya S., Delhi",
  },
  {
    message: "“Urban Services saved my weekend! The deep cleaning was thorough and stress-free.”",
    name: "– Arjun R., Mumbai",
  },
  {
    message: "“Excellent service! The AC technician arrived on time and fixed the issue in no time. Highly recommended.”",
    name: "– Kavita M., Bengaluru",
  },
  {
    message: "“I was amazed by how easy it was to book. The plumber was polite, quick, and cleaned up after the job.”",
    name: "– Rohan T., Pune",
  },
  {
    message: "“My house has never looked better! The sofa cleaning service was top-notch. Will book again.”",
    name: "– Sneha J., Hyderabad",
  },
  {
    message: "“From booking to completion, everything was seamless. Urban Services is now my go-to for home needs.”",
    name: "– Manish G., Chandigarh",
  },
];


const Feedback = () => {
    return (
        <>
            <section className="bg-white py-20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
                    <div className="grid gap-8 sm:grid-cols-2">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-lg shadow"
                            >
                                <p className="text-gray-700 mb-4">{testimonial.message}</p>
                                <span className="font-semibold text-indigo-600">{testimonial.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-indigo-600 text-white py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Get Started With Urban Services Today</h2>
                <p className="mb-6 text-lg">Trusted professionals. Fast bookings. Seamless experience.</p>
                <a
                    href="#services"
                    className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
                >
                    Book a Service
                </a>
            </section>
        </>
    );
};

export default Feedback;
