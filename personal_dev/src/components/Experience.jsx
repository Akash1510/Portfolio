import { Link } from "react-router-dom";

const Experience = () => {
  const experiences = [
    {
      title: "Artificial Intelligence Intern",
      organization: "Edunet Foundation, Bangalore",
      duration: "November 2024 - December 2024",
      description: [
        "Contributed to AI/ML projects under the TechSaksham Initiative by AICTE, Microsoft, and SAP.",
        "Worked on real-world datasets to build ML models for education and healthcare applications.",
        "Explored concepts such as Supervised Learning, NLP, Data Preprocessing, and Model Evaluation.",
        "Created Jupyter Notebook pipelines and visualizations to communicate insights clearly.",
        "Collaborated with mentors to present findings and improve model accuracy and performance.",
        "Completed hands-on labs on Responsible AI, Cloud AI Services, and Ethics in AI.",
      ],
    },
    {
      title: "AI Project Lead – UST D3Code Hackathon (2nd Place, India)",
      organization: "Savitribai Phule Pune University",
      duration: "October 2024 – November 2024",
      description: [
        "Led a 4-member team to secure 2nd place in the UST D3Code Hackathon 2024 (India regionals) among 15,000+ global participants.",
        "Developed 'AgroAI' — a mobile app that detects crop diseases using CNN-based image classification and provides real-time treatment advice.",
        "Built with Flutter and TensorFlow, featuring multilingual UI and integration with agricultural knowledge bases.",
        "Received recognition from industry experts for usability, scalability, and potential impact in sustainable agriculture.",
      ],
    },
  ];

  const links = {
    AgroAI: "https://drive.google.com/file/d/1fG_DY08oEQFGIycjJtdS847u2Y-Lly5b",
    USTD3Code:
      "https://www.ust.com/en/who-we-are/ust-newsroom/ust-announces-the-global-winners-of-d3code-hackathon-2024",
  };

  return (
    <div className="flex flex-col items-center bg-[#D2D0A0] py-10">
      {/* Timeline divider */}
      <div className="w-1 bg-green-700 h-35 rounded-full mb-5"></div>

      {/* Experience Heading */}
      <h1 className="text-5xl font-extrabold  text-[#537d5d] text-shadow-lg/30  mb-10">
        EXPERIENCE
      </h1>

      {/* Experience Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 max-w-6xl w-full">
        {experiences.map((item, index) => (
          <div
            key={index}
            className="bg-[#537d5d] rounded-lg p-6 shadow-md text-[#D2D0A0]"
          
          >
            <h2 className="text-3xl font-bold">{item.title}</h2>
            <p className="text-lg mt-1">{item.organization}</p>
            <p className="text-md mb-2">{item.duration}</p>
            <p className="font-semibold">Learnings:</p>
            <ul className="list-disc list-inside pl-4">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* render Links Now */}

            {item.title.includes("UST D3Code Hackathon") && (
              <ul className="list-disc list-inside pl-5 pt-2">
                <p className="font-semibold">Links:</p>
                {Object.entries(links).map(([content, path]) => (
                  <li key={path}>
                    <Link
                      className="underline text-blue-950 font-semibold"
                      rel="noopener noreferrer"
                      to={path}
                      target="_blank"
                    >
                      {content}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Divider */}
      <div className="w-1 bg-green-700 h-20 rounded-full my-10"></div>

      {/* Education Section (Placeholder) */}
      <h1 className="text-5xl font-extrabold text-shadow-lg/30  text-[#537d5d] mb-10">
        EDUCATION
      </h1>

      {/* You should create a separate education array here if needed */}
      {/* Example below can be replaced with actual education data */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 max-w-6xl w-full">
        <div className="bg-[#537d5d] rounded-lg p-6 shadow-lg text-[#D2D0A0]">
          <h2 className="text-3xl font-bold">
            Bachelor of Computer Engineering
          </h2>
          <p className="text-lg mt-1">JSPM's BSIOTR,WAGHOLI PUNE</p>
          <p className="text-lg mt-1">
            Under Savitribai Phule Pune University,Pune
          </p>

          <p className="text-md mb-2">2022 - 2026</p>
          <p className="font-semibold">Focus Areas:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Data Structures And Algorithms</li>
            <li>Web Development & DataBase Management System</li>
            <li>Artificial Intelligence And Data Science</li>
            <li> Operating System & Computer Networks</li>
          </ul>
        </div>
        <div className="bg-[#537d5d] rounded-lg p-6 shadow-lg text-[#D2D0A0]">
          <h2 className="text-3xl font-bold">
            Higher Secondary Certificate Edcucation & SSC
          </h2>
          <p className="text-lg mt-1">Amrita Vidyalayam,Pune</p>
          <p className="text-md mb-2">2019 - 2021 - 84.17% </p>
          <p className="text-lg mt-1">Subodh Vidyalaya,Pune</p>
          <p className="text-md mb-2">2018 - 2019 - 91.40% </p>
          <p className="font-semibold">Focus Areas:</p>
          <ul className="list-disc list-inside pl-4">
            <li>Physics</li>
            <li>Chemsitry</li>
            <li>MathMatics (Algebra & Statistics & Integrals)</li>
            <li>Information Technology</li>
          </ul>
        </div>
      </section>
      <div className="w-1 bg-green-700 h-35 rounded-full mb-5"></div>
    </div>
  );
};

export default Experience;
