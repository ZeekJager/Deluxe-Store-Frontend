const Contact = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h2 className="text-4xl font-bold leading-none tracking-tight sm:text-4xl">
          Contact Us
        </h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7068015347786!2d38.7683594!3d8.9991035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85ad7d744585%3A0x2d715402b371aa40!2sDeluxe%20Furniture%20%7C%20Gazebo%20Area%20%7C!5e0!3m2!1sen!2set!4v1735403931942!5m2!1sen!2set"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="mt-4">
              <span className="font-bold">Address:</span> <br /> Old Airport
              Minaye Building <br /> Next to the Golf Club, <br />
              Addis Ababa, Ethiopia
            </p>
            <br />
            <p>
              <span className="font-bold">Phone:</span> +251 911 111 111
            </p>
            <br />
            <p>
              <span className="font-bold">Email: </span>
              info@deluxefurniture-et.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
