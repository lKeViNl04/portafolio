export default function LanguageToggle({ i18n, changeLanguage }) {
    const languages = [
        { code: "es", iconId: "Spanish" },
        { code: "en", iconId: "English" },
    ];

    const currentLanguage =
        languages.find((l) => l.code === i18n.language) || languages[0];

    const toggleLanguage = () => {
        const nextLanguage =
            currentLanguage.code === "en" ? "es" : "en";
        changeLanguage(nextLanguage);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center justify-center"
        >
            <svg className="w-7 h-7">
                <use
                    href={`${import.meta.env.BASE_URL}icons/sprite.svg#${currentLanguage.iconId}`}
                />
            </svg>
        </button>
    );
}