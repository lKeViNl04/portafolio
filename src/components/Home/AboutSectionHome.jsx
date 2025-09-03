import { useTranslation } from "react-i18next";
export default function AboutSectionHome() {
  const { t } = useTranslation();

  const skillGroups = [
    { name: "Frontend", key: "Frontend" },
    { name: "Backend", key: "Backend" },
    { name: "Database", key: "Database" },
    { name: "Tools", key: "Tools" },
    { name: "Soft skills", key: "SoftSkills" }
  ];

  return (
    <section id="about" className="py-5">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="sm:w-1/2 px-4">
            <h2 className="text-5xl font-bold text-white mb-4">{t("about.title")}</h2>
            <p className="text-xl text-muted mb-6">{t("about.description")}</p>
            {skillGroups.map((group) => (
              <div key={group.key} className="mb-4">
                <h3 className="text-accent-green font-semibold mb-2">
                  {t(`about.skillGroups.${group.key}`, { returnObjects: true }).name || group.name}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {t(`about.skillGroups.${group.key}`, { returnObjects: true }).map((skill) => (
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
