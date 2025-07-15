export default function AboutSectionHome() {
  const skillGroups = [
    {
      name: "Frontend",
      skills: ["Html5", "Css", "Bootstrap5", "Tailwind", "React"],
    },
    {
      name: "Backend",
      skills: ["Php", "Laravel", "Python", "Java", "MySQL"],
    },
    {
      name: "Tools",
      skills: ["VSCode", "IntelliJ IDEA"],
    },
    {
      name: "Soft skills",
      skills: ["Communication", "Teamwork", "Creativity"],
    },
  ];
  return (
    <section id="about" className="py-5">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="sm:w-1/2 px-4">
            <h2 className="text-5xl font-bold text-white mb-4">About me</h2>
            <p className="text-xl text-muted mb-6">
              I'm a web developer in training and a Systems Analyst student,
              passionate about technology and software development. I have
              experience in:
            </p>
            {skillGroups.map((group) => (
              <div key={group.name} className="mb-4">
                <h3 className="text-accent-green font-semibold mb-2">
                  {group.name}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <SkillBadge>{skill}</SkillBadge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="sm:w-1/2 px-4 mb-8 sm:mb-0 flex justify-center">
            <div className="overflow-hidden w-full">
              <img
                src={`${import.meta.env.BASE_URL}imgs/Caricatura.webp`}
                alt="Caricatura"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBadge({ children }) {
  return (
    <span className="font-bold text-white border-2 border-accent-green rounded-md px-2 py-1 inline-block">
      {children}
    </span>
  );
}
