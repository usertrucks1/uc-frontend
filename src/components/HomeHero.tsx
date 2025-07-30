const HomeHero = () => {
  return (
    <section className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Home Services, Delivered
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Book trusted professionals for cleaning, repairs, grooming, and more – at your doorstep.
        </p>
        <a
          href="#services"
          className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition-all duration-1000 ease-in-out"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default HomeHero;
