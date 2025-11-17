import food from '../assets/swiggy.png';
import herds from '../assets/Online.jpg';

const Project = () => {
  return (
    <section id="projects" className="py-4 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12">Projects👨🏻‍💻</h1>

        <div className="flex flex-wrap justify-center gap-10">

          <a
            href="https://github.com/Palanivel1116/Online-Herbels-Shopping"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-[45%] relative group overflow-hidden rounded-2xl shadow-lg block"
          >
            <img
              src={herds}
              alt="Online Herbs Shopping"
              className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center 
                            bg-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <h5 className="text-2xl font-bold mb-3 bg-transparent text-white">Online Herbs Shopping</h5>
              <p className="text-white text-lg px-6 bg-transparent">
I created an Online Herbs Shopping website using HTML, CSS, and JavaScript to provide a simple and elegant way to explore and purchase herbal products. The website includes a clean layout, product cards, and responsive design for different devices. Through this project, I improved my front-end development skills and learned how to design attractive user interfaces with interactive features and smooth animations.
              </p>
            </div>
          </a>
          <a
            href="https://github.com/Palanivel1116/React-Work"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-[45%] relative group overflow-hidden rounded-2xl shadow-lg block"
          >
            <img
              src={food}
              alt="Online Food Delivery"
              className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center 
                            bg-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <h5 className="text-2xl font-bold mb-3 bg-transparent text-white">Online Food Delivery</h5>
              <p className="text-white bg-transparent text-lg px-6">
                I have completed a project called "Food Delivery Website" where I used React, JavaScript, HTML, and CSS to develop a responsive and interactive platform. The website allows users to explore various food items, add them to the cart, and view dynamic updates in real-time. Through this project, I gained hands-on experience with React components, state management, and responsive web design, enhancing both functionality and user experience across different devices.
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Project;
