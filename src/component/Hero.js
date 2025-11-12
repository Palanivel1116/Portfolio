import HeroImg from '../assets/Head.JPG'

const Hero = () => {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row px-5 py-32 justify-center items-center  bg-[#050a30]">
    
      <div className="w-1/2 text-white">
        <h1 className="text-4xl animate-bounce font-bold mb-4 font-hero-font">
          Hello , I'm Palanivel . P
        </h1>
        <p className="text-lg text-purple-300 leading-relaxed">
          I am a Computer Science and Engineering student with a keen interest in the IT sector.
          Specializing in web development, I strive to combine my technical knowledge with a passion
          for creating dynamic and responsive web applications.
        </p>
        <a
  href="/resume.pdf"
  download="Palanivel_Resume.pdf"
  className="mt-6 inline-block bg-pink-600  text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-purple-800 transition-all duration-300 shadow-lg"
>
  Download Resume
</a>

      </div>

      <div className="md:w-1/3   mb-10 md:mb-0 flex justify-center">
        <img className="w-2/3 md:w-2/3 rounded-2xl shadow-lg ml-0 md:ml-10 hover:scale-105" src={HeroImg} alt="Palanivel" />
      </div>
    </section>
  );
}

export default Hero;
