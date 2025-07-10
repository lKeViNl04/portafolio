export default function HeroeSectionHome() {
  return (
    <section id="home" className="bg-[url('../imgs/bg-home-1.png')] bg-cover bg-no-repeat bg-center">
      <div className="bg-black/50">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center min-h-screen pt-5">
            <div className="sm:w-1/2 flex justify-center mb-6 sm:mb-0">
              <figure className="flex justify-center">
                <img
                  src="/imgs/Prueba.png"
                  alt="Foto_Kevin Flores"
                  className="rounded-full border-40 border-black/20 max-w-full h-auto"
                />
                <figcaption className="sr-only">Kevin Flores</figcaption>
              </figure>
            </div>

            <div className="sm:w-1/2 text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                Kevin Flores
              </h1>
              <h2 className="text-2xl text-accent-green font-bold mb-4">
                Desarrollador Junior
              </h2>
              <address className="not-italic">
                <ul className="list-none space-y-2 mb-4">
                  <li>
                    <a
                      href="mailto:Flores.kevin2972@gmail.com"
                      className="text-white hover:text-accent-green inline-flex items-center gap-2 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 fill-current ">
                        <use href="/icons/sprite.svg#EmailAddress" />
                      </svg>
                      Flores.kevin2972@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+541161759977"
                      className="text-white hover:text-accent-green inline-flex items-center gap-2"
                    >
                      <svg className="w-5 h-5 fill-current ">
                        <use href="/icons/sprite.svg#Phone" />
                      </svg>
                      +54 11 6175-9977
                    </a>
                  </li>
                  <li className="inline-flex items-center gap-2 text-white hover:text-accent-green">
                    <svg className="w-5 h-5 fill-current ">
                      <use href="/icons/sprite.svg#MapPin" />
                    </svg>
                    <span>Ciudad Autónoma de Buenos Aires, Argentina</span>
                  </li>
                </ul>
                <ul className="flex justify-center sm:justify-start gap-4">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/kevin-flores-153132320/"
                      className="text-white hover:text-accent-green"
                    >
                      <svg className="w-8 h-10 fill-current ">
                        <use href="/icons/sprite.svg#LinkedIn" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://github.com/lKeViNl04"
                      className="text-white hover:text-accent-green"
                    >
                      <svg className="w-8 h-10 fill-current ">
                        <use href="/icons/sprite.svg#Github" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
