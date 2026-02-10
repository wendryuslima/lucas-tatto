export type Language = "es" | "pt" | "en";

export const translations = {
  es: {
    header: {
      navItems: [
        { label: "Comenzar", href: "#home" },
        { label: "Historia", href: "#historia" },
        { label: "Galería", href: "#galeria" },
        { label: "Testimonios", href: "#depoimentos" },
        { label: "Contacto", href: "#contato" },
      ],
      menuLabel: "Abrir menú",
      languageLabel: "Idioma",
      languageOptions: {
        es: "Español",
        pt: "Portugués",
        en: "Inglés",
      },
      languageFlags: {
        es: "Bandera de España",
        pt: "Bandera de Brasil",
        en: "Bandera de Estados Unidos",
      },
    },
    hero: {
      title: "Lucas Tattoo",
      tagline:
        "Diseños únicos, creados especialmente para ti, con atención total al impacto visual y la durabilidad. ",
      tagline2: "Tatuajes que mantienen su fuerza con el paso del tiempo.",
      ctaLabel: "Iniciar proyecto",
      imageAlt: "Estudio de tatuajes",
    },
    about: {
      historyTitle: "Mi historia",
      historyParagraphs: [
        "Nacido el 15 de febrero de 1997, en Santo André, São Paulo, como la mayoría de los niños brasileños, soñaba con ser futbolista. Sin embargo, la vida tenía otros planes para mí: el arte.",
        "Desde muy pequeño destaqué en la escuela por mi creatividad en el dibujo. Vengo de una familia humilde y crecí en una generación sin celulares ni videojuegos, donde el dibujo se convirtió en mi principal pasatiempo durante toda mi infancia y adolescencia.",
        "En 2016, el tatuaje llegó definitivamente a mi vida. Un amigo tatuador, al ver mis dibujos, me ofreció clases de tatuaje y, en menos de tres meses, ya estaba tatuando. Dejé mi trabajo en un supermercado y me dediqué por completo a la tatuagem, sumergiéndome de lleno en el arte.",
        "Comencé mi carrera con tatuajes fine line, destacándome por trazos finos y precisos. Con el paso de los años, desarrollé la técnica y la madurez artística necesarias para el estilo que trabajo actualmente: realismo en negro y gris, piezas de gran formato y cierres completos.",
        "Con más de cinco años de experiencia dedicados exclusivamente a este tipo de arte, me considero un especialista en cierres y estoy preparado para ofrecerte un trabajo sólido, profesional y personalizado.",
      ],
      spainTitle: "¿Por qué elegí España?",
      spainParagraphs: [
        "Este año cumplo 10 años en el mundo del tatuaje y elegí que este también fuera el momento de hacer realidad un sueño antiguo: salir de Brasil por primera vez para tatuar en el extranjero.",
        "Barcelona no fue una elección aleatoria ni una decisión tomada a la ligera. Fue una elección que nació desde el corazón.",
        "En 2025, tuve el placer de pasar mis vacaciones durante el verano europeo y conocer varias ciudades. Entre todas ellas, Barcelona fue la que más me marcó. La vibra de la ciudad, la energía de sus calles y la calidez de su gente me tocaron de una forma especial. Fue allí donde sentí que debía regresar, no como turista, sino como tatuador.",
        "Durante ese viaje conocí a Digo, un tatuador brasileño propietario de un estudio ubicado cerca de la Sagrada Familia. La conexión fue inmediata. Fue él quien me invitó a trabajar en su estudio y me brindó la oportunidad de tatuar en Barcelona. Todo ocurrió de manera natural, como si las cosas estuvieran alineadas para suceder en ese momento.",
        "Elegí Barcelona para marcar un hito tan importante en mi carrera: mi primera Eurotour, celebrando 10 años de dedicación al tatuaje.",
        "Estoy viviendo un sueño. Cada tatuaje realizado aquí será hecho con entrega total, no solo por el aspecto económico, sino por la experiencia, el aprendizaje y la oportunidad de ejercer lo que amo en un lugar donde realmente me sentí en casa.",
        "Espero cumplir plenamente las expectativas de cada persona que confió en mí. Pueden estar seguros de que cada trabajo es realizado con alma y corazón.",
      ],
      spainFlagAlt: "Bandera de España",
    },
    works: {
      title: "Mis trabajos",
      items: [
        "Tatuaje realista en brazo",
        "Retrato en tinta negra",
        "Manga de tatuaje en progreso",
        "Diseño geométrico minimalista",
        "Detalle de sombreado realista",
        "Tatuaje de línea fina",
        "Tatuaje floral en antebrazo",
        "Composición en negro y gris",
        "Tatuaje de estilo ornamental",
        "Detalle de textura y contraste",
        "Tatuaje botánico en negro y gris",
        "Composición con sombras suaves",
        "Tatuaje ornamental delicado",
        "Contraste de luces y sombras",
        "Detalle realista en primer plano",
      ],
    },
    depoiments: {
      title: "Testimonios",
      starsLabel: "Calificación cinco estrellas",
      items: [
        {
          name: "Diego Santos",
          description:
            "Tatuaje increíble, el trazo y la calidad fueron fuera de lo común. El próximo paso es cerrar la espalda.",
        },
        {
          name: "Victor Sanches",
          description:
            "Lucas es un profesional increíble, ya quería hacérmela desde hace tiempo. Un tatuaje brutal, la calidad del tipo es impecable.",
        },
        {
          name: "Victoria Periera",
          description:
            "Me cerré la espalda y quedó increíble. Me cerraría el cuerpo entero, lo recomiendo mucho.",
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "Ponte en contacto",
      studioLabel: "Estudio",
      address: "Carrer del Rosselló, 218, Eixample, 08008 Barcelona, España",
      emailLabel: "Correo electrónico",
      rightTitle: "¿Estás listo para tu próximo tatuaje?",
      rightDescription:
        "Creemos juntos una obra de arte única que cuente tu historia. Contáctanos y agenda una consulta.",
      buttonLabel: "Solicitar una cotización",
    },
    stats: {
      items: [
        { number: "+10", label: "Años de experiencia" },
        { number: "+1500", label: "Clientes atendidos" },
        { number: "+2000", label: "Tatuajes realizados" },
        { number: "100%", label: "Satisfacción garantizada" },
      ],
      closing:
        "Entregamos más que tatuajes: son marcas que cuentan una historia",
    },
    footer: {
      rights: "Reservados todos los derechos",
      backToTop: "Volver al inicio",
    },
    whatsapp: {
      ariaLabel: "Abrir conversación en WhatsApp",
    },
  },
  pt: {
    header: {
      navItems: [
        { label: "Início", href: "#home" },
        { label: "História", href: "#historia" },
        { label: "Galeria", href: "#galeria" },
        { label: "Depoimentos", href: "#depoimentos" },
        { label: "Contato", href: "#contato" },
      ],
      menuLabel: "Abrir menu",
      languageLabel: "Idioma",
      languageOptions: {
        es: "Espanhol",
        pt: "Português",
        en: "Inglês",
      },
      languageFlags: {
        es: "Bandeira da Espanha",
        pt: "Bandeira do Brasil",
        en: "Bandeira dos Estados Unidos",
      },
    },
    hero: {
      title: "Lucas Tattoo",
      tagline: "Histórias únicas transformadas em arte que vive na pele.",
      tagline2: "Tatuagens que mantêm sua força com o passar do tempo.",
      ctaLabel: "Agendar agora",
      imageAlt: "Estúdio de tatuagem",
    },
    about: {
      historyTitle: "Minha história",
      historyParagraphs: [
        "Este ano completo 10 anos no mundo da tatuagem e decidi que este também fosse o momento de realizar um sonho antigo: sair do Brasil pela primeira vez para tatuar no exterior.",
        "Barcelona não foi uma escolha aleatória nem uma decisão tomada de forma leviana. Foi uma escolha que nasceu do coração.",
        "Em 2025, tive o prazer de passar minhas férias durante o verão europeu e conhecer várias cidades. Entre todas elas, Barcelona foi a que mais me marcou. A vibração da cidade, a energia das suas ruas e o calor da sua gente me tocaram de um jeito especial. Foi ali que senti que precisava voltar, não como turista, mas como tatuador.",
        "Durante essa viagem conheci o Digo, um tatuador brasileiro proprietário de um estúdio localizado perto da Sagrada Família. A conexão foi imediata. Foi ele quem me convidou a trabalhar no estúdio e me deu a oportunidade de tatuar em Barcelona. Tudo aconteceu de forma natural, como se as coisas estivessem alinhadas para acontecer naquele momento.",
        "Escolhi Barcelona para marcar um marco tão importante na minha carreira: minha primeira Eurotour, celebrando 10 anos de dedicação à tatuagem.",
        "Estou vivendo um sonho. Cada tatuagem feita aqui será realizada com entrega total, não apenas pelo aspecto financeiro, mas pela experiência, o aprendizado e a oportunidade de exercer o que amo em um lugar onde realmente me senti em casa.",
        "Espero cumprir plenamente as expectativas de cada pessoa que confiou em mim. Podem ter certeza de que cada trabalho é feito com alma e coração.",
      ],
      spainTitle: "Por que escolhi a Espanha?",
      spainParagraphs: [
        "Este ano completo 10 anos no mundo da tatuagem e decidi que este também fosse o momento de realizar um sonho antigo: sair do Brasil pela primeira vez para tatuar no exterior.",
        "Barcelona não foi uma escolha aleatória nem uma decisão tomada de forma leviana. Foi uma escolha que nasceu do coração.",
        "Em 2025, tive o prazer de passar minhas férias durante o verão europeu e conhecer várias cidades. Entre todas elas, Barcelona foi a que mais me marcou. A vibração da cidade, a energia das suas ruas e o calor da sua gente me tocaram de um jeito especial. Foi ali que senti que precisava voltar, não como turista, mas como tatuador.",
        "Durante essa viagem conheci o Digo, um tatuador brasileiro proprietário de um estúdio localizado perto da Sagrada Família. A conexão foi imediata. Foi ele quem me convidou a trabalhar no estúdio e me deu a oportunidade de tatuar em Barcelona. Tudo aconteceu de forma natural, como se as coisas estivessem alinhadas para acontecer naquele momento.",
        "Escolhi Barcelona para marcar um marco tão importante na minha carreira: minha primeira Eurotour, celebrando 10 anos de dedicação à tatuagem.",
        "Estou vivendo um sonho. Cada tatuagem feita aqui será realizada com entrega total, não apenas pelo aspecto financeiro, mas pela experiência, o aprendizado e a oportunidade de exercer o que amo em um lugar onde realmente me senti em casa.",
        "Espero cumprir plenamente as expectativas de cada pessoa que confiou em mim. Podem ter certeza de que cada trabalho é feito com alma e coração.",
      ],
      spainFlagAlt: "Bandeira da Espanha",
    },
    works: {
      title: "Meus trabalhos",
      items: [
        "Tatuagem realista no braço",
        "Retrato em tinta preta",
        "Manga de tatuagem em progresso",
        "Design geométrico minimalista",
        "Detalhe de sombreamento realista",
        "Tatuagem de linha fina",
        "Tatuagem floral no antebraço",
        "Composição em preto e cinza",
        "Tatuagem de estilo ornamental",
        "Detalhe de textura e contraste",
        "Tatuagem botânica em preto e cinza",
        "Composição com sombras suaves",
        "Tatuagem ornamental delicada",
        "Contraste de luz e sombra",
        "Detalhe realista em primeiro plano",
      ],
    },
    depoiments: {
      title: "Depoimentos",
      starsLabel: "Avaliação cinco estrelas",
      items: [
        {
          name: "Diego Santos",
          description:
            "Tatuagem foda demais, traço e qualidade foram fora do comum. Próximo passo é fechar as costas.",
        },
        {
          name: "Victor Sanches",
          description:
            "Lucas é um profissional incrível, já queria ter feito há um bom tempo. Tatuagem monstra demais, a qualidade do cara é impecável.",
        },
        {
          name: "Victoria Periera",
          description:
            "Fechei as costas e ficou incrível. Fecharia o corpo todo, recomendo muito.",
        },
      ],
    },
    contact: {
      title: "Contato",
      subtitle: "Entre em contato",
      studioLabel: "Estúdio",
      address: "Carrer del Rosselló, 218, Eixample, 08008 Barcelona, Espanha",
      emailLabel: "E-mail",
      rightTitle: "Você está pronto para sua próxima tatuagem?",
      rightDescription:
        "Vamos criar juntos uma obra de arte única que conte a sua história. Entre em contato e agende uma consulta.",
      buttonLabel: "Solicitar um orçamento",
    },
    stats: {
      items: [
        { number: "+10", label: "Anos de experiência" },
        { number: "+3000", label: "Clientes atendidos" },
        { number: "+5000", label: "Tatuagens realizadas" },
        { number: "100%", label: "Satisfação garantida" },
      ],
      closing:
        "Entregamos mais do que tatuagens: são marcas que contam uma história",
    },
    footer: {
      rights: "Todos os direitos reservados",
      backToTop: "Voltar para o topo",
    },
    whatsapp: {
      ariaLabel: "Abrir conversa no WhatsApp",
    },
  },
  en: {
    header: {
      navItems: [
        { label: "Home", href: "#home" },
        { label: "Story", href: "#historia" },
        { label: "Gallery", href: "#galeria" },
        { label: "Testimonials", href: "#depoimentos" },
        { label: "Contact", href: "#contato" },
      ],
      menuLabel: "Open menu",
      languageLabel: "Language",
      languageOptions: {
        es: "Spanish",
        pt: "Portuguese",
        en: "English",
      },
      languageFlags: {
        es: "Spain flag",
        pt: "Brazil flag",
        en: "United States flag",
      },
    },
    hero: {
      title: "Lucas Tattoo",
      tagline: "Unique stories transformed into art that lives on the skin.",
      tagline2: "Tattoos that keep their strength over time.",
      ctaLabel: "Schedule now",
      imageAlt: "Tattoo studio",
    },
    about: {
      historyTitle: "My story",
      historyParagraphs: [
        "This year I celebrate 10 years in the tattoo world and chose this as the moment to make an old dream come true: leaving Brazil for the first time to tattoo abroad.",
        "Barcelona wasn't a random choice or a decision made lightly. It was a choice born from the heart.",
        "In 2025, I had the pleasure of spending my vacation during the European summer and visiting several cities. Among all of them, Barcelona was the one that left the biggest mark on me. The vibe of the city, the energy of its streets, and the warmth of its people touched me in a special way. It was there that I felt I had to return, not as a tourist, but as a tattoo artist.",
        "During that trip I met Digo, a Brazilian tattoo artist who owns a studio near the Sagrada Família. The connection was immediate. He was the one who invited me to work in his studio and gave me the opportunity to tattoo in Barcelona. Everything happened naturally, as if things were aligned to happen at that moment.",
        "I chose Barcelona to mark such an important milestone in my career: my first Eurotour, celebrating 10 years of dedication to tattooing.",
        "I am living a dream. Every tattoo done here will be made with total dedication, not only for the financial aspect, but for the experience, the learning, and the opportunity to do what I love in a place where I truly felt at home.",
        "I hope to fully meet the expectations of everyone who trusted me. You can be sure that every piece is done with soul and heart.",
      ],
      spainTitle: "Why did I choose Spain?",
      spainParagraphs: [
        "This year I celebrate 10 years in the tattoo world and chose this as the moment to make an old dream come true: leaving Brazil for the first time to tattoo abroad.",
        "Barcelona wasn't a random choice or a decision made lightly. It was a choice born from the heart.",
        "In 2025, I had the pleasure of spending my vacation during the European summer and visiting several cities. Among all of them, Barcelona was the one that left the biggest mark on me. The vibe of the city, the energy of its streets, and the warmth of its people touched me in a special way. It was there that I felt I had to return, not as a tourist, but as a tattoo artist.",
        "During that trip I met Digo, a Brazilian tattoo artist who owns a studio near the Sagrada Família. The connection was immediate. He was the one who invited me to work in his studio and gave me the opportunity to tattoo in Barcelona. Everything happened naturally, as if things were aligned to happen at that moment.",
        "I chose Barcelona to mark such an important milestone in my career: my first Eurotour, celebrating 10 years of dedication to tattooing.",
        "I am living a dream. Every tattoo done here will be made with total dedication, not only for the financial aspect, but for the experience, the learning, and the opportunity to do what I love in a place where I truly felt at home.",
        "I hope to fully meet the expectations of everyone who trusted me. You can be sure that every piece is done with soul and heart.",
      ],
      spainFlagAlt: "Spain flag",
    },
    works: {
      title: "My work",
      items: [
        "Realistic arm tattoo",
        "Black ink portrait",
        "Tattoo sleeve in progress",
        "Minimalist geometric design",
        "Realistic shading detail",
        "Fine line tattoo",
        "Floral tattoo on forearm",
        "Black and gray composition",
        "Ornamental style tattoo",
        "Texture and contrast detail",
        "Botanical tattoo in black and gray",
        "Composition with soft shading",
        "Delicate ornamental tattoo",
        "Light and shadow contrast",
        "Realistic close-up detail",
      ],
    },
    depoiments: {
      title: "Testimonials",
      starsLabel: "Five-star rating",
      items: [
        {
          name: "Diego Santos",
          description:
            "Incredible tattoo, the linework and quality were out of the ordinary. The next step is finishing my back.",
        },
        {
          name: "Victor Sanches",
          description:
            "Lucas is an incredible professional; I'd wanted it for a long time. An amazing tattoo — his quality is impeccable.",
        },
        {
          name: "Victoria Periera",
          description:
            "I finished my back and it turned out incredible. I'd cover my whole body; I highly recommend him.",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Get in touch",
      studioLabel: "Studio",
      address: "Carrer del Rosselló, 218, Eixample, 08008 Barcelona, Spain",
      emailLabel: "Email",
      rightTitle: "Are you ready for your next tattoo?",
      rightDescription:
        "Let's create together a unique work of art that tells your story. Get in touch and schedule a consultation.",
      buttonLabel: "Request a quote",
    },
    stats: {
      items: [
        { number: "+10", label: "Years of experience" },
        { number: "+3000", label: "Clients served" },
        { number: "+5000", label: "Tattoos completed" },
        { number: "100%", label: "Guaranteed satisfaction" },
      ],
      closing: "We deliver more than tattoos: they're marks that tell a story",
    },
    footer: {
      rights: "All rights reserved",
      backToTop: "Back to top",
    },
    whatsapp: {
      ariaLabel: "Open WhatsApp chat",
    },
  },
} as const;
