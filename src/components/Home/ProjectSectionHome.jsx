import { useTranslation } from "react-i18next";
export default function ProjectSectionHome() {
  const { t } = useTranslation();

  const cardsData = [
    {
      img: "imgs/Chabell.webp",
      title: "Chabell",
      lenguajes: ["PHP", "Laravel","Blade", "MySQL", "CSS","Bootstrap"],
      link: "https://github.com/lKeViNl04/Chabell",
    },
    {
      img: "imgs/Yenny.webp",
      title: "Yenny-Elateneo",
      lenguajes: ["React", "JavaScript","TailwindCSS", "SQLite", "Python","Flask"],
      link: "https://github.com/lKeViNl04/YENNY",
    },
    {
      img: "imgs/Pokevici.webp",
      title: "Pokevici",
      lenguajes: ["Java", "MySQL", "Swing with FlatLaf"],
      link: "https://github.com/lKeViNl04/TP_ProgAvanz",
    },
    {
      img: "imgs/Yenny_app.webp",
      title: "Yenny(App)",
      lenguajes: ["Java", "Supabase(PostgreSQL)", "Kotlin"],
      link: "https://github.com/lKeViNl04/Mobile-YennyElAteneo",
    },
    {
      img: "imgs/Thegreatdream.webp",
      title: "The Great Dream",
      lenguajes: ["Java","Spring Boot", "Angular", "TypeScript","TailwindCSS","MySQL"],
      link: "https://github.com/lKeViNl04/TheGreatDreamFrontend",
    }
  ];

  return (
    <section
      id="project"
      className="bg-[url('/portafolio/imgs/bg-project.webp')] bg-cover bg-no-repeat bg-center"
    >
      <div className="min-h-screen bg-black/50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start">
            <h1 className="text-5xl font-bold text-white">{t("projects.title")}</h1>
            <div className="max-w-7xl px-4 pt-8 flex flex-col items-center ">
              <div className="pt-10 flex flex-wrap gap-6 justify-center">
                {cardsData.map((card, index) => (
                  <CardProject
                    key={index}
                    img={card.img}
                    title={card.title}
                    lenguajes={card.lenguajes}
                    link={card.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardProject({ img, title, lenguajes, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col overflow-hidden"
    >
      <div className="relative flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-center" />

        <div className="group relative m-0 flex h-50 sm:max-w-lg rounded-xl shadow-xl ring-gray-900/5">
          <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-90">
            <img
              src={`${import.meta.env.BASE_URL + img}`}
              alt={title}
              className="block h-full w-full transform scale-100 object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute bottom-0 z-20 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
            <h1 className="text-2xl font-bold font-serif text-white shadow-xl">
              {title}
            </h1>
            <div className="flex flex-wrap gap-1">
              {lenguajes.map((lenguaje, index) => (
                <span
                  key={index}
                  className="bg-black/80 text-white text-xs px-2 py-0.5 rounded-full shadow"
                >
                  {lenguaje}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
