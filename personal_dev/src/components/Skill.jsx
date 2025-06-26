const Skill = () => {
  const skillspath = {
    HTML5: "src/assets/HTML5.png",
    CSS3: "src/assets/CSS3.png",
    C: "src/assets/C.png",
    Cpp: "src/assets/C++.png",
    Python: "src/assets/Python.png",
    JavaScript: "src/assets/javascript.png",
    Java : "src/assets/Java.png",
    MySQL: "src/assets/MySQL.png",
    MongoDB: "src/assets/MongoDB.png",
    Dart: "src/assets/Dart.png",
    React: "src/assets/React.png",
    TailwindCSS: "src/assets/Tailwind CSS.png",
    Streamlit: "src/assets/Streamlit.png",
    NodeJS: "src/assets/Node.js.png",
    ExpressJS: "src/assets/Express.png",
    Flutter: "src/assets/Flutter.png",
    ScikitLearn: "src/assets/scikit-learn.png",
    Flask: "src/assets/Flask.png",
    TensorFlow: "src/assets/TensorFlow.png",
    Git: "src/assets/Git.png",
    GitHub: "src/assets/GitHub.png",
    Docker: "src/assets/Docker.png",
    Kubernetes: "src/assets/Kubernetes.png",
    Linux: "src/assets/Linux.png",
    matplotlib: "src/assets/matplotlib.png",
    Pandas: "src/assets/Pandas.png",
    Numpy: "src/assets/Numpy.png",
    Npm: "src/assets/npm.png",
    Bootstrap: "src/assets/Bootstrap.png",
  };


  return (
    <>
      <div className="bg-[#537D5D] p-5 shadow-2xs place-items-center">
        <h2 className="text-center pt-4 font-extrabold text-[#D2D0A0] text-5xl text-shadow-lg/30 ">
          SKILLS
        </h2>
        <div className="grid grid-cols-10 gap-5 m-12 p-5 space-y-2">

          {Object.entries(skillspath).map(([skill, path]) => (
            <div key={skill} className=" p-4 place-items-center rounded-full  hover:shadow-2xl transition-shadow duration-300">
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
