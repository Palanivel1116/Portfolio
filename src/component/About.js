import Tail from '../assets/tailwind.png';
import boot from '../assets/bootstrap.png';
import ja from '../assets/java.webp';
import spr from '../assets/spring.png';
import re from '../assets/react.webp';
import rea from '../assets/redux.png';
import javascript from '../assets/js.jpg';
import sql from '../assets/MySQL.png';
import orac from '../assets/oracle.png';

const About = () => {
  const skills = [
    { img: Tail, name: "Tailwind CSS", color: "bg-cyan-500/30" },
    { img: boot, name: "Bootstrap", color: "bg-purple-500/30" },
    { img: ja, name: "Java", color: "bg-orange-500/30" },
    { img: spr, name: "Spring Boot", color: "bg-green-500/30" },
    { img: javascript, name: "JavaScript", color: "bg-yellow-400/30" },
    { img: re, name: "React JS", color: "bg-sky-400/30" },
    { img: rea, name: "Redux", color: "bg-indigo-400/30" },
    { img: sql, name: "MySQL", color: "bg-teal-400/30" },
    { img: orac, name: "Oracle", color: "bg-red-400/30" },
  ];

  return (
    <div  id="about" className="px-6 py-8">
      <h1 className="text-white text-3xl px-10 py-4 font-bold">About 🖥️</h1>

      
      <div
        className="
          grid 
          grid-cols-3            
          md:grid-cols-4         
          lg:grid-cols-5         /* 🖥️ laptop → 5 columns */
          gap-6
          justify-items-center
          max-w-6xl mx-auto
        "
      >
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            img={skill.img}
            name={skill.name}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
};

/* ✅ Reusable Skill Card */
const SkillCard = ({ img, name, color }) => (
  <div className="relative group mt-4">
    <img
      src={img}
      alt={name}
      className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-lg transition-transform duration-500 group-hover:scale-110"
    />
    <span
      className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-base font-semibold
      opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out 
      bg-black/50 rounded-lg backdrop-blur-sm"
    >
      {name}
    </span>
    <span
      className={`absolute inset-0 rounded-lg ${color} scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 ease-out`}
    ></span>
  </div>
);

export default About;
