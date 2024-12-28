const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          Deluxe is
        </h1>
        <div className="stats bg-yellow-600 shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Comfort
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Deluxe Store is an exclusive, top leading supplier of Office, Home,
        Cafeteria, Bar and Restaurant Furniture, Safe Box, Metal Cabinets,
        Vertical Blinds, Mattresses, Carpets, and many more. Deluxe Furniture
        also manufactures Kitchen Cabinets, Beds, Wardrobes, and different
        Office Furniture.
      </p>
    </>
  );
};
export default About;
