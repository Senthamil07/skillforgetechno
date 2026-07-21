import React from "react";

const IconifyIcon: React.FC<{ icon: string }> = ({ icon }) => {
  return React.createElement("iconify-icon", { icon });
};

const SmallForgeLogo: React.FC = () => (
  <div className="flex items-center justify-center w-full h-full bg-zinc-950 text-amber-400 rounded-lg select-none">
    <span className="font-sans font-black text-[12px] tracking-tight uppercase">S<span className="text-white">F</span></span>
  </div>
);

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="relative py-12 sm:py-20 lg:py-24 bg-[#fafafc] border-y border-zinc-200 overflow-hidden">
      {/* Decorative subtle ambient glows */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-amber-200/4 rounded-full blur-3xl pointer-events-none" />

      <style>{`
        .skill-section {
          width: 100%;
          min-height: 420px;
          background: #ffffff;
          border: 1px solid #e4e4e7;
          border-radius: 24px;
          padding: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
          position: relative;
          font-family: 'Poppins', sans-serif;
          box-shadow: 0 4px 25px rgba(0,0,0,0.015);
        }

        .content {
          flex: 1;
          max-width: 440px;
          text-align: left;
          z-index: 10;
        }

        .content h2 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 12px;
          color: #0b1020;
          letter-spacing: -0.02em;
          line-height: 1.25;
        }

        .content p {
          font-size: 16px;
          color: #4b5563;
          max-width: 410px;
          line-height: 1.6;
          font-weight: 300;
        }

        .skills-loop {
          width: 330px;
          height: 330px;
          overflow: hidden;
          display: flex;
          gap: 18px;
          padding: 20px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 35px rgba(0,0,0,0.08);
          z-index: 10;
          border: 1px solid #f3f4f6;
        }

        .column {
          display: flex;
          flex-direction: column;
          animation: loopUp 22s linear infinite;
        }

        .column img {
          width: 52px;
          height: 52px;
          padding: 12px;
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          object-fit: contain;
          transition: transform 0.2s ease;
          margin-bottom: 18px;
        }

        .column img:hover {
          transform: scale(1.1);
        }

        .column.down {
          animation-name: loopDown;
        }

        @keyframes loopUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }

        @keyframes loopDown {
          from {
            transform: translateY(-50%);
          }
          to {
            transform: translateY(0);
          }
        }

        .skills-loop:hover .column {
          animation-play-state: paused;
        }

        @media (max-width: 991px) {
          .skill-section {
            flex-direction: column;
            gap: 40px;
            padding: 30px;
            align-items: flex-start;
          }

          .content {
            max-width: 100%;
          }

          .skills-loop {
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .skill-section {
            padding: 24px;
          }
          .content h2 {
            font-size: 26px;
          }
          .skills-loop {
            width: 100%;
            max-width: 330px;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="skill-section">
          
          {/* Left Block: Narrative Content */}
          <div className="content">
            <h2>Choose your path</h2>
            <p>Learn career-ready skills in Python, TypeScript, SQL, R, Java, C++, AWS Cloud, DevOps, and CCNA Networking.</p>
          </div>

          {/* Right Block: Clean Loop Track replacing original cards */}
          <div className="skills-loop">
            <div className="column up">
              <img src="https://skillicons.dev/icons?i=python" alt="Python" />
              <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" />
              <img src="https://skillicons.dev/icons?i=r" alt="R" />
              <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
              <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
              <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
              <img src="https://skillicons.dev/icons?i=c" alt="C" />
              <img src="https://skillicons.dev/icons?i=cpp" alt="C++" />
              {/* duplicate for smooth loop */}
              <img src="https://skillicons.dev/icons?i=python" alt="Python" />
              <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" />
              <img src="https://skillicons.dev/icons?i=r" alt="R" />
              <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
              <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
              <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
              <img src="https://skillicons.dev/icons?i=c" alt="C" />
              <img src="https://skillicons.dev/icons?i=cpp" alt="C++" />
            </div>

            <div className="column down">
              <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" />
              <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" />
              <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" />
              <img src="https://skillicons.dev/icons?i=postgres" alt="PostgreSQL" />
              <img src="https://skillicons.dev/icons?i=express" alt="Express" />
              <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" />
              <img src="https://skillicons.dev/icons?i=git" alt="Git" />
              <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
              {/* duplicate for smooth loop */}
              <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" />
              <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" />
              <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" />
              <img src="https://skillicons.dev/icons?i=postgres" alt="PostgreSQL" />
              <img src="https://skillicons.dev/icons?i=express" alt="Express" />
              <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" />
              <img src="https://skillicons.dev/icons?i=git" alt="Git" />
              <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
            </div>

            <div className="column up">
              <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" />
              <img src="https://skillicons.dev/icons?i=tensorflow" alt="Tensorflow" />
              <img src="https://skillicons.dev/icons?i=pandas" alt="Pandas" />
              <img src="https://skillicons.dev/icons?i=numpy" alt="NumPy" />
              <img src="https://skillicons.dev/icons?i=react" alt="React" />
              <img src="https://skillicons.dev/icons?i=pytorch" alt="PyTorch" />
              <img src="https://skillicons.dev/icons?i=sass" alt="Sass" />
              <img src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap" />
              {/* duplicate for smooth loop */}
              <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" />
              <img src="https://skillicons.dev/icons?i=tensorflow" alt="Tensorflow" />
              <img src="https://skillicons.dev/icons?i=pandas" alt="Pandas" />
              <img src="https://skillicons.dev/icons?i=numpy" alt="NumPy" />
              <img src="https://skillicons.dev/icons?i=react" alt="React" />
              <img src="https://skillicons.dev/icons?i=pytorch" alt="PyTorch" />
              <img src="https://skillicons.dev/icons?i=sass" alt="Sass" />
              <img src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap" />
            </div>

            <div className="column down">
              <img src="https://skillicons.dev/icons?i=aws" alt="AWS" />
              <img src="https://skillicons.dev/icons?i=docker" alt="Docker" />
              <img src="https://skillicons.dev/icons?i=kubernetes" alt="Kubernetes" />
              <img src="https://skillicons.dev/icons?i=linux" alt="Linux" />
              <img src="https://skillicons.dev/icons?i=gcp" alt="GCP" />
              <img src="https://skillicons.dev/icons?i=azure" alt="Azure" />
              <img src="https://skillicons.dev/icons?i=jenkins" alt="Jenkins" />
              <img src="https://skillicons.dev/icons?i=nginx" alt="Nginx" />
              {/* duplicate for smooth loop */}
              <img src="https://skillicons.dev/icons?i=aws" alt="AWS" />
              <img src="https://skillicons.dev/icons?i=docker" alt="Docker" />
              <img src="https://skillicons.dev/icons?i=kubernetes" alt="Kubernetes" />
              <img src="https://skillicons.dev/icons?i=linux" alt="Linux" />
              <img src="https://skillicons.dev/icons?i=gcp" alt="GCP" />
              <img src="https://skillicons.dev/icons?i=azure" alt="Azure" />
              <img src="https://skillicons.dev/icons?i=jenkins" alt="Jenkins" />
              <img src="https://skillicons.dev/icons?i=nginx" alt="Nginx" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
