import { useTranslation } from "react-i18next";
export default function HeroeSectionHome() {
  const { t } = useTranslation();

  const contactItems = [
    {
      href: "tel:+541161759977",
      icon: "Phone",
      label: "+54 11 6175-9977",
    },
    {
      href: "mailto:Flores.kevin2972@gmail.com",
      icon: "EmailAddress",
      label: "Flores.kevin2972@gmail.com",
    },
    {
      href: null,
      icon: "MapPin",
      label: "Balvanera, CABA, Argentina",
    },
  ];

  const icons = [
    {
      href: "https://www.linkedin.com/in/kevin-flores-153132320/",
      icon: "LinkedIn"
    },
    {
      href: "https://github.com/lKeViNl04",
      icon: "Github"
    }
  ]

  return (
    <section
      id="home"
      className="bg-[url('/portafolio/imgs/bg-home.webp')] bg-cover bg-no-repeat bg-center"
    >
      <div className="bg-black/50">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center min-h-screen pt-5">
            <div className="sm:w-1/2 flex justify-center mb-6 sm:mb-0">
              <figure className="flex justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}imgs/KevinFloresHeroe.webp`}
                  alt="Foto_Kevin_Flores"
                  className="rounded-full border-30 border-black/20 lg:max-w-full h-auto lg:h-110"
                />
                <figcaption className="sr-only">Kevin Flores</figcaption>
              </figure>
            </div>

            <div className="sm:w-1/2 text-center sm:text-left pb-4">
              <a
                href={`${import.meta.env.BASE_URL}pdf/${t("hero.downloadCV")}`}
                download
                className="inline-block bg-green-700 text-black font-bold px-4 py-2 rounded-xl shadow hover:bg-accent-green transition mb-4"
              >
                {t("hero.download")}
              </a>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                Kevin Flores
              </h1>
              <h2 className="text-2xl text-accent-green font-bold mb-4">
                {t("hero.role")}
              </h2>
              <address className="not-italic">
                <ul className="list-none space-y-2 mb-4">
                  {contactItems.map(({ href, icon, label }, i) => (
                    <li key={i}>
                      {href ? (
                        <a
                          href={href}
                          className="text-white hover:text-accent-green inline-flex items-center gap-2 transition-colors duration-300"
                        >
                          <svg className="w-5 h-5 fill-current">
                            <use href={`${import.meta.env.BASE_URL}icons/sprite.svg#${icon}`} />
                          </svg>
                          {label}
                        </a>
                      ) : (
                        <span className="text-white hover:text-accent-green inline-flex items-center gap-2 transition-colors duration-300">
                          <svg className="w-5 h-5 fill-current">
                            <use href={`${import.meta.env.BASE_URL}icons/sprite.svg#${icon}`} />
                          </svg>
                          {label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <ul className="flex justify-center sm:justify-start gap-4">
                  {icons.map(({ href, icon }, i) => (
                    <li key={i}>
                      <a
                        target="_blank"
                        href={href}
                        className="text-white hover:text-accent-green"
                      >
                        <svg className="w-8 h-10 fill-current ">
                          <use
                            href={`${import.meta.env.BASE_URL
                              }icons/sprite.svg#${icon}`}
                          />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
