
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-10 my-12">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">Omowaye Emmanuel</h1>
        <p className="text-lg text-gray-600">Full Stack Software Engineer</p>
        <div className="flex justify-center gap-6 mt-4 text-gray-700">
          <a href="https://www.linkedin.com/in/sturdy-me-433aab322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600 transition" />
          </a>
          <a href="https://github.com/Sturdyme" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl hover:text-gray-900 transition" />
          </a>
          <a href="https://johndoe.dev" target="_blank" rel="noreferrer">
            <FaGlobe className="text-2xl hover:text-green-600 transition" />
          </a>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Full Stack Software Engineer with 3+ years of experience designing,
          developing, and deploying scalable web applications. Skilled in React,
          Node.js, and cloud technologies, with a passion for crafting seamless
          user experiences and optimizing backend performance. Strong
          collaborator who bridges the gap between design and functionality.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
          <span>React / Next.js</span>
          <span>Redux / Tailwind CSS</span>
          <span>Node.js / Express.js</span>
          <span>REST APIs / GraphQL</span>
          <span>MongoDB / PostgreSQL</span>
          <span>AWS / Docker</span>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Projects</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Task Manager App</h3>
            <p className="text-gray-700">
              Built a full-stack task management platform with authentication &
              role-based access. Designed REST APIs reducing query response time
              by 40%.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">E-Commerce Platform</h3>
            <p className="text-gray-700">
              Developed a responsive shopping site handling 5,000+ concurrent
              users. Integrated Stripe for secure payments and optimized checkout
              flow.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Portfolio Website</h3>
            <p className="text-gray-700">
              Designed a personal developer portfolio with animated project
              showcases. Achieved 95+ Lighthouse performance score.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Work Experience</h2>
        <div className="mb-5">
          <h3 className="text-lg font-bold text-gray-900">
            Full Stack Developer – ABC Tech Solutions
          </h3>
          <p className="text-sm text-gray-500">Jan 2022 – Present</p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Designed and deployed full-stack applications with React and Node.js.</li>
            <li>Reduced API response latency by 30% through query optimization.</li>
            <li>
              Collaborated with cross-functional teams to deliver 12+ production projects.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">
            Frontend Developer Intern – XYZ Innovations
          </h3>
          <p className="text-sm text-gray-500">Jun 2021 – Dec 2021</p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Developed reusable React components and UI modules.</li>
            <li>Improved user engagement by 20% with optimized UI/UX.</li>
            <li>Wrote unit tests with Jest, increasing code coverage to 85%.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">Education</h2>
        <p className="text-gray-700">
          B.Sc. in Computer Science – University of Ibadan (2018 – 2022)
        </p>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          Certifications & Achievements
        </h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Appclick Practitioner (2025)</li>
          <li>Winner – Hackathon 2025 (Voyager Flight Booking App)</li>
          <li>Open-source Contributor – React & Node.js libraries</li>
        </ul>
      </section>
    </section>
  );
};

export default Resume;
