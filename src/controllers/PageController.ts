import { Request, Response, NextFunction } from 'express';

export default class PageController {
  
  private static blogPosts:any = {
    'contratar-agencia-marketing-digital': {
      title: '¿Cuándo una empresa debería contratar una agencia de marketing digital?',
      publishedAt: '29 Mayo 2025',
      excerpt: 'Descubre cuándo tu empresa necesita una agencia de marketing digital y cómo aprovecharla estratégicamente.',
      content: [
        '<p>Muchas empresas se hacen esta pregunta demasiado tarde, cuando ya han perdido oportunidades de crecimiento o han invertido en acciones de marketing sin resultados claros.</p>',
        '<p>Contratar una agencia de marketing digital no es solo una decisión operativa: es una decisión estratégica. Saber cuándo hacerlo puede marcar la diferencia entre crecer de forma sostenida o estancarse.</p>',
        '<p>En este artículo descubrirás los momentos clave en los que una empresa realmente necesita una agencia.</p>',
        '<h2>¿Qué hace una agencia de marketing digital?</h2>',
        '<p>Antes de entender el “cuándo”, es clave tener claro el “para qué”. Una agencia de marketing digital se encarga de diseñar y ejecutar estrategias orientadas a:</p>',
        '<ul><li>Generar visibilidad de marca</li><li>Atraer clientes potenciales (leads)</li><li>Posicionar la empresa en buscadores (SEO)</li><li>Optimizar la conversión</li><li>Escalar resultados de forma medible</li></ul>',
        '<figure class="blog-inline-image"><img src="/images/blog/logos/Image_fx%20(1).png" alt="Estrategia digital"></figure>',
        '<p>No se trata solo de publicar contenido, sino de construir un sistema de crecimiento basado en datos.</p>',
        '<h2>Señales claras de que tu empresa necesita una agencia de marketing digital</h2>',
        '<h3>1. Quieres crecer, pero no sabes cómo hacerlo en digital</h3>',
        '<p>Si ya tienes un producto o servicio validado, pero no logras escalar en canales digitales, necesitas una estrategia clara. Una agencia te ayuda a estructurar un plan enfocado en resultados reales.</p>',
        '<h3>2. Estás invirtiendo en marketing, pero no ves resultados</h3>',
        '<p>Si haces pauta, redes sociales o contenido sin métricas claras o sin retorno, el problema no es la inversión, sino la estrategia. Una agencia te permite:</p>',
        '<ul><li>Medir correctamente el rendimiento</li><li>Optimizar campañas</li><li>Enfocar la inversión en lo que sí funciona</li></ul>',
        '<h3>3. No tienes un equipo interno especializado</h3>',
        '<p>El marketing digital requiere múltiples perfiles:</p>',
        '<ul><li>Estratega</li><li>Copywriter</li><li>Diseñador</li><li>Especialista en pauta</li><li>Experto en SEO</li></ul>',
        '<figure class="blog-inline-image"><img src="/images/blog/logos/Image_fx%20(2).png" alt="Equipo digital"></figure>',
        '<p>Una agencia reúne todo este conocimiento sin que tengas que contratar cada perfil por separado.</p>',
        '<h3>4. Tu competencia está mejor posicionada</h3>',
        '<p>Si tus competidores aparecen en Google, tienen mayor presencia digital o captan más clientes online, estás perdiendo terreno. Hoy el marketing digital no es opcional cuando tu mercado ya está compitiendo ahí.</p>',
        '<h3>5. Necesitas generar leads de forma constante</h3>',
        '<p>Para empresas B2B o con ciclos de venta largos, depender solo de referidos no es sostenible. Una agencia puede ayudarte a construir un sistema que genere oportunidades de negocio de manera continua.</p>',
        '<h3>6. No tienes tiempo para gestionar el marketing</h3>',
        '<p>Muchos empresarios terminan haciendo marketing de forma improvisada, lo que afecta los resultados. Delegar en una agencia te permite enfocarte en el negocio mientras expertos gestionan el crecimiento.</p>',
        '<figure class="blog-inline-image"><img src="/images/blog/logos/Image_fx%20(3).png" alt="Marketing digital"></figure>',
        '<h2>¿Cuándo NO deberías contratar una agencia?</h2>',
        '<p>También es importante saber cuándo no es el momento adecuado:</p>',
        '<ul><li>Si tu negocio aún no está validado</li><li>Si no tienes presupuesto para sostener una estrategia continua</li><li>Si esperas resultados inmediatos sin proceso</li></ul>',
        '<p>El marketing digital funciona, pero requiere tiempo, consistencia y enfoque.</p>',
        '<h2>Beneficios de contratar una agencia en el momento adecuado</h2>',
        '<ul><li>Crecimiento estructurado y medible</li><li>Mejor uso del presupuesto</li><li>Acceso a conocimiento especializado</li><li>Estrategias basadas en datos, no en suposiciones</li><li>Escalabilidad del negocio</li></ul>',
        '<h2>Entonces, ¿cuál es el momento ideal?</h2>',
        '<p>El mejor momento para contratar una agencia de marketing digital es cuando:</p>',
        '<ul><li>Tu negocio ya tiene una base sólida</li><li>Buscas crecer de forma estratégica</li><li>Necesitas resultados medibles</li><li>Estás listo para invertir en crecimiento</li></ul>',
        '<p>No es una solución mágica, pero sí una de las decisiones más inteligentes cuando se toma en el momento correcto.</p>',
        '<p>No todas las empresas necesitan una agencia desde el inicio. Sin embargo, todas las empresas que buscan crecer de forma sostenida llegan, tarde o temprano, a ese punto. Identificar ese momento a tiempo puede ahorrarte dinero, acelerar resultados y posicionarte mejor en el mercado.</p>'
      ],
      footerText: 'MAKE THINGS HAPPEN, NO MATTER WHAT',
      meta_description: 'Descubre cuándo una empresa debe contratar una agencia de marketing digital y cómo elegir la adecuada.',
    },
    'regionalizacion': {
      title: 'Las 3 A’s de la regionalización',
      publishedAt: '29 Mayo 2023',
      excerpt: 'Asertividad, agilidad, adaptación.',
      content: [
        'La comunicación estratégica local da una serie de ventajas, clientes y colaboradores viven en el mismo país, se entiende el mismo contexto y hasta los encuentros requieren de menos logística, pero nosotros teníamos un sueño aún más grande, que nuestra Moodlogy llegará más lejos, pero para que nuestro marketing fuera regional debíamos estar preparados en tres escenarios, los que con el tiempo le llamamos las A de la regionalización.',
        'Asertividad, porque las estrategias pueden aguantar el papel pero hay que ser asertivos al aplicarlas, agilidad porque el mundo actual post pandemia no nos daría mucho tiempo para accionar y adaptación porque debíamos trascender de la publicidad tradicional a la efectiva y certera.',
      ],
      footerText: 'MAKE THINGS HAPPEN, NO MATTER WHAT',
      meta_description: 'Descubre las 3 A’s de la regionalización y cómo hacer tu marketing multinacional más efectivo.',
    },
    'nuevo-medio-digital': {
      title: 'El “nuevo” medio digital',
      publishedAt: '29 Abril 2023',
      excerpt: 'Hoy los influencers y creadores de contenido deciden cómo una marca puede ser más relevante.',
      content: [
        'Desde el momento en que la inversión de medios tradicionales pasó a medios alternativos (digitales), fue entrando un protagonista desconocido para muchos, los influencers y creadores de contenido, hoy ellos deciden cómo su potencial alcance puede ayudar a una marca para ser más relevante.',
        'Pero no todos están aún convencidos de su fortaleza y dudan del camino, aquí 5 tips para que la estrategia con influencers sea efectiva:',
        'No todo es seguidores. No todo son celebrities. Estudia al influencer más allá de lo que se ve en la red. Confía en la data. Mídelos.',
      ],
      footerText: 'MAKE THINGS HAPPEN, NO MATTER WHAT',
      meta_description: 'Entiende por qué el medio digital hoy es influenciadores y cómo sacarles partido en tu estrategia.',
    },
    'algoritmos-organico': {
      title: 'Los algoritmos en lo orgánico',
      publishedAt: '29 Abril 2023',
      excerpt: 'El contenido orgánico depende del algoritmo; aquí tienes consejos para competir bien.',
      content: [
        '¡No se preocupen, esta no es una entrada para desanimarse, todo lo contrario! Seguramente muchos content’s y Social Media Manager hemos visto cómo el contenido con más insight genera 8 likes y 200 de alcance, pero esto tiene su razón de ser: el algoritmo de FB e IG ha designado que contenido no pautado solo será visto en un 0.5% del total de comunidad. Seguro, much@s estarán diciendo ¿y ahora qué nos inventamos? Aquí unos consejos infalibles.',
        'Video con HashTag’s de gran alcance al subirlo. Los gif’s ya son historia. Copys de menos de 120 caracteres. Memes con sentido. Menciones a aliados.',
      ],
      footerText: 'MAKE THINGS HAPPEN, NO MATTER WHAT',
      meta_description: 'Consejos para mejorar el rendimiento orgánico frente a los algoritmos de redes sociales.',
    },
  };

  // Renderizar la página principal (Home)
  static home(req: Request, res: Response) {
    res.render('home', { title: 'Agencia Digital Creativa - MOOD', page: 'home', meta_description: 'Mood: La agencia de comunicación que revoluciona el marketing. Especialistas en ATL, Digital, PR y BTL, ofrecemos soluciones para potenciar tu marca.', title_heading: 'Agencia Digital Creativa', pageImage: 'images/Mood-thumbnail.webp', pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl, pageType: 'video.mp4', locale: 'es_PE', imageWidth: '1200', imageHeight: '630', pageVideo: 'videos/video.mp4'});
  }

  // Renderizar la página ADN Mood
  static adnMood(req: Request, res: Response) {
    res.render('adn_mood', { title: 'Conóce nuestro ADN - MOOD', page: 'adn_mood', meta_description: 'Conóce la historia y cultura de nuestra agencia de comunicaciones mood con presencia en Panamá, Colombia y Perú. servicios de mktg digital, ATL y BTL.', title_heading: 'Conócenos', pageImage: 'images/Mood-thumbnail.webp', pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl, pageType: 'website', locale: 'es_PE', imageWidth: '1200', imageHeight: '630'});
  }

  // Renderizar la página Mood Print
  static moodPrint(req: Request, res: Response) {
    res.render('mood_print', { title: 'Servicios - MOOD', page: 'mood_print', meta_description: 'Descubre el poder de Mood: expertos en servicios de social media marketing, ecommerce, performance marketing, influencer marketing y más.', title_heading: 'Servicios', pageImage: 'images/Mood-thumbnail.webp', pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl, pageType: 'website', locale: 'es_PE', imageWidth: '1200', imageHeight: '630'});
  }

  // Renderizar la página What’s Your Mood
  static whatsYourMood(req: Request, res: Response) {
    res.render('whatsyourmood', { title: 'Blog, agencia creativa digital - MOOD', page: 'whatsyourmood', meta_description: 'Explora nuestro blog y descubre temas fascinantes como marketing, digital planning, inteligencia artificial, ecommerce, entre otros.', title_heading: 'Blog', pageImage: 'images/Mood-thumbnail.webp', pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl, pageType: 'website', locale: 'es_PE', imageWidth: '1200', imageHeight: '630'});
  }

  static whatsYourMoodPost(req: Request, res: Response) {
    const { slug } = req.params;
    const post = PageController.blogPosts[slug];

    if (!post) {
      return res.redirect('/whatsyourmood');
    }

    res.render('whatsyourmood-post', {
      title: `${post.title} - MOOD`,
      page: 'whatsyourmood-post',
      meta_description: post.meta_description,
      title_heading: post.title,
      pageImage: 'images/Mood-thumbnail.webp',
      pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
      pageType: 'website',
      locale: 'es_PE',
      imageWidth: '1200',
      imageHeight: '630',
      publishedAt: post.publishedAt,
      excerpt: post.excerpt,
      content: post.content,
      footerText: post.footerText,
    });
  }

  // Renderizar el formulario de contacto
  static contactForm(req: Request, res: Response) {
    res.render('contact', { title: 'Contáctanos - MOOD', page: 'contact', meta_description: 'Contáctanos a Mood, estamos aquí para ayudarte. Completa nuestro formulario de contacto y permítenos brindarte soluciones con nuestra agencia creativa', title_heading: 'Contáctanos', pageImage: 'images/Mood-thumbnail.webp', pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl, pageType: 'website', locale: 'es_PE', imageWidth: '1200', imageHeight: '630'});
  }
  
  // Renderizar la página de éxito
  static success(req: Request, res: Response) {
    res.render('success', { title: '¡Gracias por tu mensaje!', page: 'success' });
  }
  
}

