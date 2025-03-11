// 设置默认语言
let currentLang = localStorage.getItem('language') || 'en';

// 页面加载时根据语言设置文本
window.onload = function() {
    setLanguage(currentLang);
}

// 切换语言
function changeLanguage(language) {
    currentLang = language;
    localStorage.setItem('language', language);
    setLanguage(language);
}

// 设置页面文本
function setLanguage(language) {
    const texts = {
        en: {
            title: "Welcome to [Nu Heritage] — The Wonderful Intersection of Board Games and Culture",
            subheading: "Passing Down Nüshu Culture, Igniting Creativity and Thought",
            intro: "Here, we seamlessly blend the ancient Nüshu script with modern board game creativity, creating cultural experiences that are both full of wisdom and fun. Through our board games, you will embark on a journey to explore the ancient Nüshu culture and the wisdom of women.",
            "our-story-heading": "Our Story",
            "our-story": "Nüshu, a unique female script that originated in ancient China, carries profound historical and cultural significance. It is a distinctive form of communication and cultural transmission among women, embodying endless wisdom and strength. We are dedicated to bringing this ancient culture into the modern world through creative board games, enabling more people to understand and experience this precious heritage.",
            goal: "Our goal is not just to create board games but to convey the core cultural values through every game, every card, and every symbol, merging tradition and modernity, culture and creativity, allowing Nüshu culture to thrive today.",
            "nvshu-heading": "Cultural Background",
            "shu-desc": "Nüshu, as an ancient and unique form of writing, originated in the Xiangxi region of China. It is not only a tool for female communication but also a cultural symbol used by women to express their thoughts and convey information in specific historical contexts. Through our board games, we help players understand the origins and evolution of this unique culture and how it impacts the cultural identity of contemporary women.",
            "nvshu-desc": "In our games, you will see creative designs that combine true historical stories, the symbol system, and traditional styles. Every game is a tribute to and exploration of traditional culture.",
        },
        zh: {
            title: "欢迎来到[女书传承   ] —— 桌游与文化的精彩交汇",
            subheading: "传承女书文化，点燃创意与思考",
            intro: "在这里，我们将古老的女书与现代桌游创意无缝融合，创造出既充满智慧又充满乐趣的文化体验。通过我们的桌游，您将踏上一段探索古老女书文化与女性智慧的旅程。",
            "our-story-heading": "我们的故事",
            "our-story": "女书，源于中国古代的独特女性文字，承载着深厚的历史与文化意义。它是女性之间的一种独特沟通形式，是文化传递的象征，展现着无尽的智慧与力量。我们致力于通过创意桌游，将这一古老的文化带入现代世界，让更多人了解并体验这一珍贵的文化遗产。",
            goal: "我们的目标不仅仅是创造桌游，而是通过每一款游戏、每一张卡片、每一个符号，传递核心的文化价值，融合传统与现代、文化与创意，让女书文化在今天得以传承与繁荣。",
            "nvshu-heading": "文化背景",
            "shu-desc": "女书，作为一种古老而独特的文字，起源于中国的湘西地区。它不仅是女性之间沟通的工具，也是一种文化符号，女性用它来表达思想并在特定历史背景下传递信息。通过我们的桌游，我们帮助玩家了解这一独特文化的起源与发展，以及它对当代女性文化认同的影响。",
            "nvshu-desc": "在我们的游戏中，您将看到将真实历史故事、符号体系与传统风格相结合的创意设计。每一款游戏都是对传统文化的致敬与探索。",
        },
        ja: {
            title: "[女遺文化] へようこそ — ボードゲームと文化の素晴らしい交差点",
            subheading: "女書文化を伝え、創造力と思考を刺激",
            intro: "ここでは、古代の女書と現代のボードゲーム創造性をシームレスに融合させ、知恵と楽しさに満ちた文化体験を生み出しています。私たちのボードゲームを通じて、古代の女書文化と女性の知恵を探求する旅に出ましょう。",
            "our-story-heading": "私たちの物語",
            "our-story": "女書は、中国の古代に起源を持つユニークな女性の文字で、深い歴史的および文化的意義を持っています。女性同士のコミュニケーションと文化伝承の独特な形態であり、無限の知恵と力を体現しています。私たちは、この古代文化を創造的なボードゲームを通じて現代に伝えることに取り組んでおり、より多くの人々にこの貴重な遺産を理解し、体験してもらうことを目指しています。",
            goal: "私たちの目標は、単にボードゲームを作ることではなく、ゲームごとに、カードごとに、シンボルごとに、文化の核心的な価値を伝えることです。伝統と現代、文化と創造が融合し、女書文化が今日も繁栄するようにします。",
            "nvshu-heading": "文化的背景",
            "shu-desc": "女書は、中国の湘西地域で起源を持つ、古代でユニークな書き方です。これは、女性同士のコミュニケーションツールであるだけでなく、女性が特定の歴史的文脈で自分の思いを表現し、情報を伝えるための文化的シンボルでもあります。私たちのボードゲームを通じて、このユニークな文化の起源と進化を理解し、現代女性の文化的アイデンティティに与える影響を知ることができます。",
            "nvshu-desc": "私たちのゲームでは、実際の歴史的物語、シンボル体系、伝統的なスタイルを組み合わせた創造的なデザインを見ることができます。すべてのゲームは、伝統文化への賛辞と探求です。",
        }
    };

    // 根据选择的语言更新页面内容
    for (const [key, value] of Object.entries(texts[language])) {
        document.getElementById(key).textContent = value;
    }

    // 修改其他与语言相关的元素（例如按钮）
    document.querySelectorAll(`button`).forEach((btn) => {
        const btnText = btn.innerText;
        if (btnText === "English") {
            btn.innerText = "English";
        } else if (btnText === "中文") {
            btn.innerText = "中文";
        } else {
            btn.innerText = "日本語";
        }
    });
}
