const Skill = () => {
const skillspath = {
  HTML5: "/assets/HTML5.png",
  CSS3: "/assets/CSS3.png",
  C: "/assets/C.png",
  Cpp: "/assets/C++.png",
  Python: "/assets/Python.png",
  JavaScript: "/assets/JavaScript.png",
  Java: "/assets/Java.png",
  MySQL: "/assets/MySQL.png",
  MongoDB: "/assets/MongoDB.png",
  Dart: "/assets/Dart.png",
  React: "/assets/React.png",
  Tailwind: "/assets/Tailwind CSS.png",
  Streamlit: "/assets/Streamlit.png",
  NodeJS: "/assets/Node.js.png",
  ExpressJS: "/assets/Express.png",
  Flutter: "/assets/Flutter.png",
  ScikitLearn: "/assets/scikit-learn.png",
  Flask: "/assets/Flask.png",
  TensorFlow: "/assets/TensorFlow.png",
  Git: "/assets/Git.png",
  GitHub: "/assets/GitHub.png",
  Docker: "/assets/Docker.png",
  Kubernetes: "/assets/Kubernetes.png",
  Linux: "/assets/Linux.png",
  matplotlib: "/assets/Matplotlib.png",
  Pandas: "/assets/Pandas.png",
  Numpy: "/assets/NumPy.png",
  Npm: "/assets/NPM.png",
  Bootstrap: "/assets/Bootstrap.png",
};


  return (
    <>
      <div className="bg-[#537D5D] p-5 shadow-2xs place-items-center">
        <h2 className="text-center pt-4 font-extrabold text-[#D2D0A0] text-5xl text-shadow-lg/30 ">
          SKILLS
        </h2>
        <div className="grid grid-cols-10 gap-5 m-12 p-5 space-y-2">

          {Object.entries(skillspath).map(([skill, path]) => (
            <div key={skill} className=" p-4 place-items-center   rounded-full  hover:shadow-2xl transition-shadow duration-300">
              <img src={path} alt={skill} />
              <p className="text-[#D2D0A0]  font-bold text-center text-3xl font-mono  ">{skill}</p>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};

export default Skill;
