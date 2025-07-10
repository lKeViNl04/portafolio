export default function EducationSectionHome() {
  const education = [{
  title: "Analista de Sistemas",
  link: "https://davinci.edu.ar/",
  institution: "Da Vinci",
  dateRange: "2024/08/17 -- En Curso",
  description:
    "Desarrollando habilidades en programación backend y frontend, bases de datos y arquitectura de software.",
  },];
  return (
    <section id="education">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-8 py-10 items-start">
          <div className="sm:w-1/2">
            <h3 className="text-5xl font-bold text-white mb-4">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  title={edu.title}
                  link={edu.link}
                  institution={edu.institution}
                  dateRange={edu.dateRange}
                  description={edu.description}
                />
              ))}
            </div>
          </div>

          <div className="sm:w-1/2">
            <h3 className="text-5xl font-bold text-white mb-4">Experience</h3>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({title,link,institution,dateRange,description}) {
  return (
    <div className="bg-black/50 p-6 rounded-md shadow-lg">
      <h4 className="text-xl font-semibold text-white mb-1">
        {title}
        <a
          href={link}
          target="_blank"
          className="text-edu-turquoise hover:underline"
        >
          //{institution}
        </a>
      </h4>
      <h6 className="text-edu-turquoise py-2 font-medium">
        {dateRange}
      </h6>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
}
