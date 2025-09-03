import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./Language";
import NavLink from "./NavLink";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="fixed top-0 left-0 w-full flex py-4 px-4 sm:px-10 min-h-[70px] tracking-wide z-50 shadow-md bg-black/20 hover:bg-black/40">
            <nav className="flex flex-wrap items-center justify-center gap-5 w-full  ">
                {/*Language*/}
                <LanguageToggle i18n={i18n} changeLanguage={changeLanguage} />
                {/*Links*/}
                <div
                    id="collapseMenu"
                    className={`${isMenuOpen ? "block" : "hidden"
                        } max-lg:fixed max-lg:bg-black/80  max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 lg:!block`}
                >
                    <ul className="lg:flex gap-x-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-transparent max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                        <NavLink to="#home">{t("nav.home")}</NavLink>
                        <NavLink to="#about">{t("nav.about")}</NavLink>
                        <NavLink to="#project">{t("nav.project")}</NavLink>
                        <NavLink to="#education">{t("nav.education")}</NavLink>
                    </ul>
                </div>

                <div className="flex max-lg:ml-auto items-center space-x-4 relative w-12 h-12">
                    <button
                        id="toggleOpen"
                        onClick={handleToggleMenu}
                        className={`lg:hidden absolute inset-0 transition-all duration-300 ${isMenuOpen
                            ? "opacity-0 scale-90 pointer-events-none"
                            : "opacity-100 scale-100"
                            }`}
                    >
                        <svg className="w-12 h-12 fill-white hover:fill-accent-green">
                            <use href={`${import.meta.env.BASE_URL}icons/sprite.svg#BurguerMenu`} />
                        </svg>
                    </button>
                    <button
                        id="toggleClose"
                        onClick={handleToggleMenu}
                        className={`lg:hidden absolute right-0 top-0 transition-all duration-300 z-60 ${isMenuOpen
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-90 pointer-events-none"
                            }`}
                    >
                        <svg className="w-8 h-8 fill-red-600">
                            <use href={`${import.meta.env.BASE_URL}icons/sprite.svg#Equis`} />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}
