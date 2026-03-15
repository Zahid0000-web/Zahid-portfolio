import React from 'react';

const About = () => {
  const tags = ["Student", "Passion for tech", "Learner", "Linux Enthusiast", "Aspiring Full Stack Developer"];
  
  const timeline = [
    { year: "2021", event: "Started exploring electronics & tech." },
    { year: "2022", event: "Discovered coding & web development." },
    { year: "2023", event: "Built a few small projects." },
    { year: "2024", event: "comlete my projects as a full stack developer." }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12 text-center font-sans">
      
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 inline-block border-b-4 border-blue-600 pb-1">
          Who Am I
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          I'm <span className="font-semibold text-gray-900">Muhammad Zahid</span> based in Pakistan, 
          a student at <span className="text-blue-600 font-bold">The Islamia University of Bahawalpur</span>, an IT technician. 
          I’m currently learning web development and looking forward to becoming a full stack developer.
        </p>
      </div>

      {/* Tags Section */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 ">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-4 py-2 border border-gray-400 rounded-lg hover:md:shadow-xl text-gray-800 text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 inline-block border-b-4 border-blue-600 pb-1">
          Timeline
        </h3>
        <div className="space-y-6 text-left">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              <span className="text-blue-600 font-bold text-lg min-w-[60px]">
                {item.year}
              </span>
              <p className="text-gray-700 text-lg">
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;