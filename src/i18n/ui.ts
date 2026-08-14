/**
 * Diccionarios de traducciones ES/EN
 * Estructura organizada por sección para facilitar mantenimiento
 */

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es' as const;

export type Language = keyof typeof languages;

export const ui = {
  es: {
    // Nav
    'nav.brand': 'PARASIEMPREMX',

    // Hero
    'hero.subtitle': 'wedding experiences',
    'hero.scroll': 'Scroll',

    // ¿Qué es?
    'quees.title': '¿Qué es para siempre?',
    'quees.p1': 'En Para Siempre MX creemos que una boda no comienza el día del "sí, acepto". Comienza desde el instante en que dos personas deciden construir una vida juntas.',
    'quees.p2': 'Cada decisión, cada emoción, cada detalle y cada momento vivido durante la planeación forman parte de una historia que merece disfrutarse con la misma intensidad que el gran día.',
    'quees.p3': 'Estamos aquí para acompañar ese camino, para convertir la incertidumbre en tranquilidad, el estrés en ilusión y los pendientes en la libertad de vivir cada instante.',
    'quees.p4': 'Porque cuando llegue el momento de caminar hacia el altar, queremos que lo único que importe sea mirarse a los ojos y disfrutar el inicio de su para siempre.',

    // Journey
    'journey.title': 'your wedding journey',
    'journey.tag': 'WEDDING & EVENT PLANNING',
    'journey.col1': 'Cada boda comienza con una visión, y nuestro proceso de planificación está diseñado para transformar esa visión en una celebración impecablemente organizada. Nuestro enfoque combina planificación estratégica, diseño creativo y coordinación minuciosa para garantizar que cada elemento funcione en perfecta armonía.',
    'journey.col2': 'El proceso suele comenzar con una reunión inicial donde hablamos sobre tus ideas, prioridades e inspiración. A partir de ahí, desarrollamos un plan personalizado que describe las etapas clave de la planificación, incluyendo la selección del lugar, el desarrollo del concepto, la búsqueda de proveedores, la elaboración del presupuesto y la gestión del cronograma.',
    'journey.col3': 'Durante los meses previos a tu boda, te brindamos apoyo constante para que tomes decisiones con confianza y disfrutes de un proceso tranquilo y sin estrés. Nuestro objetivo es que te concentres en la emoción de tu celebración mientras nosotros nos encargamos de los detalles.',

    // Design
    'design.p1': 'El diseño de tu boda aporta personalidad, emoción y ambiente a cada momento de la celebración. Desde la paleta de colores y los arreglos florales hasta la papelería, la decoración de las mesas y el diseño de iluminación, cada elemento contribuye a una narrativa visual coherente.',
    'design.p2': 'Juntos, desarrollamos un concepto creativo que refleja vuestro estilo único como pareja. La inspiración puede provenir de la naturaleza, los viajes, la arquitectura o los recuerdos personales, y estas ideas se transforman en una estética refinada para todo el evento.',
    'design.p3': 'Mediante paneles de inspiración, propuestas de diseño y la colaboración con proveedores creativos, nos aseguramos de que cada detalle visual sea intencional y armonioso, creando así un ambiente inolvidable tanto para vosotros como para sus invitados.',

    // Memories
    'memories.top': 'Cuidamos los momentos que algún día se convertirán en sus',
    'memories.bottom': 'sus Recuerdos Favoritos.',

    // Vision
    'vision.title': 'Our Vision',
    'vision.p1': 'Queremos formar parte de las historias que las personas recordarán con una sonrisa incluso muchos años después.',
    'vision.p2': 'Ser ese apoyo que les permitió vivir su boda con tranquilidad, emoción y la certeza de que cada detalle fue pensado con amor.',
    'vision.p3': 'Porque las bodas terminan al final del día, pero los recuerdos permanecen para siempre.',

    // Purpose
    'purpose.title': 'Our Purpose',
    'purpose.text': 'Crear espacios donde el amor pueda vivirse sin preocupaciones, acompañando a cada pareja para que disfrute plenamente el camino hacia uno de los días más importantes de su historia.',

    // Mission
    'mission.title': 'Our Mission',
    'mission.p1': 'Acompañar a cada pareja con sensibilidad, organización y dedicación para que la planeación de su boda sea tan inolvidable como el día en que celebren su amor.',
    'mission.p2': 'Nos encargamos de los detalles para que ellos puedan concentrarse en crear recuerdos, compartir emociones y vivir cada instante con quienes más aman.',

    // Promesa
    'promesa.title': 'Nuestra promesa',
    'promesa.p1': 'Queremos que, cuando termine su boda, las parejas no recuerden el estrés de organizarla.',
    'promesa.p2': 'Queremos que recuerden las lágrimas durante la ceremonia, las risas con su familia, el primer baile, los abrazos inesperados y esa sensación de haber vivido uno de los días más felices de sus vidas.',
    'promesa.p3': 'De los detalles nos ocupamos nosotros.',
    'promesa.p4': 'De vivir el momento, ellos.',

    // Manifiesto
    'manifiesto.title': 'MANIFIESTO',
    'manifiesto.col1.l1': 'Creemos en los nervios antes de caminar al altar.',
    'manifiesto.col1.l2': 'En las manos que se buscan sin decir una palabra.',
    'manifiesto.col1.l3': 'En las lágrimas que aparecen cuando alguien pronuncia un discurso.',
    'manifiesto.col1.l4': 'En las miradas que dicen "te elegiría una y otra vez".',
    'manifiesto.col1.l5': 'Creemos que una boda nunca se trata únicamente de flores, mesas o decoración.',
    'manifiesto.col2.l1': 'Se trata de personas.',
    'manifiesto.col2.l2': 'De familias que se unen.',
    'manifiesto.col2.l3': 'De amigos que celebran.',
    'manifiesto.col2.l4': 'De promesas que nacen.',
    'manifiesto.col2.l5': 'De recuerdos que permanecerán toda la vida.',
    'manifiesto.col2.l6': 'Por eso hacemos mucho más que planear bodas.',
    'manifiesto.col2.l7': 'Acompañamos historias.',
    'manifiesto.col2.l8': 'Cuidamos momentos.',
    'manifiesto.col2.l9': 'Y protegemos cada detalle para que ustedes solo tengan una misión:',
    'manifiesto.col2.l10': 'Vivir el inicio de su para siempre.',

    // Contact
    'contact.eyebrow': 'Hablemos',
    'contact.title': 'Comencemos su historia.',
    'contact.subtitle': 'Cuéntanos cómo se conocieron. Estamos aquí para acompañarlos.',
    'contact.email': 'Escríbenos',
    'contact.whatsapp': 'WhatsApp',
    'contact.instagram': '@parasiempremx',

    // Footer
    'footer.tag': 'Wedding experiences · México',
    'footer.credits': '© Para Siempre MX',
  },

  en: {
    // Nav
    'nav.brand': 'PARASIEMPREMX',

    // Hero
    'hero.subtitle': 'wedding experiences',
    'hero.scroll': 'Scroll',

    // What is?
    'quees.title': 'What is forever?',
    'quees.p1': 'At Para Siempre MX we believe a wedding doesn\'t start on the day of the "I do". It begins the moment two people decide to build a life together.',
    'quees.p2': 'Every decision, every emotion, every detail and every moment lived during the planning is part of a story that deserves to be enjoyed with the same intensity as the big day.',
    'quees.p3': 'We are here to accompany that journey, to turn uncertainty into peace, stress into excitement and pending tasks into the freedom to live every moment.',
    'quees.p4': 'Because when the moment to walk down the aisle arrives, we want the only thing that matters to be looking into each other\'s eyes and enjoying the beginning of their forever.',

    // Journey
    'journey.title': 'your wedding journey',
    'journey.tag': 'WEDDING & EVENT PLANNING',
    'journey.col1': 'Every wedding begins with a vision, and our planning process is designed to transform that vision into an impeccably organized celebration. Our approach combines strategic planning, creative design and meticulous coordination to ensure every element works in perfect harmony.',
    'journey.col2': 'The process usually begins with an initial meeting where we discuss your ideas, priorities and inspiration. From there, we develop a personalized plan that describes the key stages of planning, including venue selection, concept development, vendor sourcing, budget preparation and timeline management.',
    'journey.col3': 'During the months leading up to your wedding, we provide constant support so you can make decisions with confidence and enjoy a stress-free process. Our goal is for you to focus on the excitement of your celebration while we take care of the details.',

    // Design
    'design.p1': 'The design of your wedding brings personality, emotion and atmosphere to every moment of the celebration. From the color palette and floral arrangements to stationery, table decoration and lighting design, every element contributes to a coherent visual narrative.',
    'design.p2': 'Together, we develop a creative concept that reflects your unique style as a couple. Inspiration can come from nature, travel, architecture or personal memories, and these ideas transform into a refined aesthetic for the entire event.',
    'design.p3': 'Through inspiration panels, design proposals and collaboration with creative vendors, we ensure that every visual detail is intentional and harmonious, creating an unforgettable atmosphere for both you and your guests.',

    // Memories
    'memories.top': 'We take care of the moments that will one day become their',
    'memories.bottom': 'their Favorite Memories.',

    // Vision
    'vision.title': 'Our Vision',
    'vision.p1': 'We want to be part of the stories that people will remember with a smile even many years later.',
    'vision.p2': 'To be the support that allowed them to live their wedding with peace, emotion and the certainty that every detail was thought of with love.',
    'vision.p3': 'Because weddings end at the end of the day, but memories remain forever.',

    // Purpose
    'purpose.title': 'Our Purpose',
    'purpose.text': 'To create spaces where love can be lived without worries, accompanying each couple so they can fully enjoy the journey to one of the most important days of their story.',

    // Mission
    'mission.title': 'Our Mission',
    'mission.p1': 'To accompany each couple with sensitivity, organization and dedication so that planning their wedding is as unforgettable as the day they celebrate their love.',
    'mission.p2': 'We take care of the details so they can focus on creating memories, sharing emotions and living every moment with those they love most.',

    // Promesa
    'promesa.title': 'Our Promise',
    'promesa.p1': 'We want that, when their wedding ends, couples don\'t remember the stress of organizing it.',
    'promesa.p2': 'We want them to remember the tears during the ceremony, the laughs with their family, the first dance, the unexpected hugs and that feeling of having lived one of the happiest days of their lives.',
    'promesa.p3': 'We take care of the details.',
    'promesa.p4': 'They live the moment.',

    // Manifesto
    'manifiesto.title': 'MANIFESTO',
    'manifiesto.col1.l1': 'We believe in the nerves before walking down the aisle.',
    'manifiesto.col1.l2': 'In the hands that search for each other without saying a word.',
    'manifiesto.col1.l3': 'In the tears that appear when someone gives a speech.',
    'manifiesto.col1.l4': 'In the glances that say "I would choose you again and again".',
    'manifiesto.col1.l5': 'We believe that a wedding is never only about flowers, tables or decoration.',
    'manifiesto.col2.l1': 'It\'s about people.',
    'manifiesto.col2.l2': 'About families that unite.',
    'manifiesto.col2.l3': 'About friends who celebrate.',
    'manifiesto.col2.l4': 'About promises that are born.',
    'manifiesto.col2.l5': 'About memories that will last a lifetime.',
    'manifiesto.col2.l6': 'That\'s why we do much more than plan weddings.',
    'manifiesto.col2.l7': 'We accompany stories.',
    'manifiesto.col2.l8': 'We take care of moments.',
    'manifiesto.col2.l9': 'And we protect every detail so you only have one mission:',
    'manifiesto.col2.l10': 'Live the beginning of your forever.',

    // Contact
    'contact.eyebrow': 'Let\'s talk',
    'contact.title': 'Let\'s begin your story.',
    'contact.subtitle': 'Tell us how you met. We\'re here to accompany you.',
    'contact.email': 'Email us',
    'contact.whatsapp': 'WhatsApp',
    'contact.instagram': '@parasiempremx',

    // Footer
    'footer.tag': 'Wedding experiences · Mexico',
    'footer.credits': '© Para Siempre MX',
  },
} as const;

export type UIKey = keyof typeof ui.es;