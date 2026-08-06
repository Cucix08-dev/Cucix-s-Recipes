const translate = document.querySelectorAll(".translate");

const page = window.location.pathname.split("/").pop();
let languagesTranslations;

if (page === "" || page === "index" || page === "index.html") {
    languagesTranslations = {
        "language-ITA": [
            "Le ricette del Cucix",
            "Ricette fai da te, testate personalmente, con indicazione delle marche, dei prezzi degli ingredienti e tanti dettagli utili. Ogni ricetta include consigli pratici, varianti e trucchi per ottenere sempre il risultato migliore.",
            "PANINI",
            "PRIMI",
            "SECONDI",
            "BEVANDE ALCOLICHE"
        ],

        "language-ENG": [
            "Cucix's Recipes",
            "DIY recipes personally tested, with recommended brands, ingredient prices, technical notes, and practical tips. Each recipe includes advice, variations, and small secrets to help you achieve perfect results every time.",
            "SANDWICHES",
            "FIRST COURSE",
            "SECOND COURSE",
            "ALCOHOLIC DRINKS"
        ],

        "language-JAP": [
            "クチックスのレシピ",
            "筆者が実際に試した手作りレシピ。おすすめのブランド、材料の価格、技術的なポイント、そして役立つアドバイスを詳しく紹介します。各レシピには、コツやアレンジ方法、小さな裏技も添えて、いつでも完璧な仕上がりを目指せます。",
            "パニーニ",
            "第一の料理",
            "第二の料理",
            "アルコール飲料"
        ]
    };
}

else if (page === "panini" || page === "panini.html") {
    languagesTranslations = {
        "language-ITA": [
            "Panini",
            "Panini tra cui: Hotdog, Hamburber, Tramezzi fatti personalmente e Toast."
        ],

        "language-ENG": [
            "Sandwiches",
            "Sandwiches including hot dogs, hamburgers, homemade tramezzini, and toasted sandwiches."
        ],

        "language-JAP": [
            "パニーニ / サンドイッチ",
            "ホットドッグ、ハンバーガー、自家製トラメッツィーニ、トーストなどのパニーニがあります。"
        ]
    };
}

else if (page === "bevandeAlcoliche" || page === "bevandeAlcoliche.html") {
    languagesTranslations = {
        "language-ITA": [
            "Bevande alcoliche",
            "Bevande alcoliche come l'Aperol Spritz."
        ],

        "language-ENG": [
            "Alcoholic Drinks",
            "Alcoholic drinks such as Aperol Spritz."
        ],

        "language-JAP": [
            "アルコール飲料",
            "アペロール・スプリッツなどのアルコール飲料。"
        ]
    };
}

if (!languagesTranslations) {
    console.error("languagesTranslations is undefined for page:", page);
} else {
    Object.keys(languagesTranslations).forEach(id => {
        const el = document.getElementById(id);

        el.addEventListener("click", () => {
            Object.keys(languagesTranslations).forEach(otherId => {
                const otherEl = document.getElementById(otherId);
                otherEl.classList.remove("selected");
                otherEl.classList.add("not-selected");
            });

            el.classList.remove("not-selected");
            el.classList.add("selected");

            const texts = languagesTranslations[id];

            translate.forEach((element, index) => {
                element.innerHTML = texts[index];
            });
        });
    });
}



document.addEventListener("DOMContentLoaded", () => {
    const waves = document.querySelectorAll(".wave-animation-element");

    function animateSequential(index = 0) {
        waves[index].classList.remove("wave-animation-confirmed");
        void waves[index].offsetWidth;
        waves[index].classList.add("wave-animation-confirmed");

        const nextIndex = (index + 1) % waves.length;

        setTimeout(() => animateSequential(nextIndex), 500);
    }

    animateSequential();
});
