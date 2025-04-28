<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Innovaciones y tendencias en estimulación temprana'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-13.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La estimulación temprana es un campo en constante evolución, donde la investigación y la innovación permiten mejorar las estrategias para potenciar el desarrollo infantil. En este espacio, se explorarán las últimas tendencias e innovaciones en estimulación temprana, desde nuevas metodologías y enfoques pedagógicos hasta el uso de tecnologías y recursos emergentes que transforman la manera de acompañar a la primera infancia.
    
    p.mb-5 Le invitamos a adentrarse en este apasionante recorrido, descubriendo herramientas y estrategias que pueden marcar la diferencia en la educación y el desarrollo integral de los niños. <b>¡Comencemos!</b>

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Nuevas tecnologías aplicadas a la estimulación temprana

    p.mb-4 El uso de la tecnología en la educación infantil ha transformado las estrategias de estimulación temprana, ofreciendo nuevas oportunidades para potenciar el desarrollo cognitivo, motor y socioemocional de los niños. Cuando se implementan de manera adecuada, las herramientas digitales pueden complementar las metodologías tradicionales y enriquecer la experiencia de aprendizaje.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Nuevas tecnologías aplicadas a la estimulación temprana 
            p.mb-4(data-aos="fade-right") En el PDF <b>Nuevas tecnologías aplicadas a la estimulación temprana</b>, se exploran recursos innovadores como aplicaciones interactivas, realidad aumentada, robótica educativa y dispositivos adaptativos, destacando su impacto en la primera infancia. Además, se abordan consideraciones clave para un uso equilibrado y supervisado de la tecnología, garantizando que favorezca el desarrollo infantil sin reemplazar la exploración física y la interacción social.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Nuevas tecnologías aplicadas a la estimulación temprana .
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/2.png', alt='')
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Estrategias basadas en neurociencia y desarrollo infantil

    p.mb-4 ¿Cómo contribuye la neurociencia a mejorar las estrategias de estimulación temprana?

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tema 1
              p Según Campos (2010), la neurociencia ha transformado la comprensión del desarrollo infantil al aportar conocimientos fundamentales sobre cómo el cerebro aprende y se adapta a los estímulos del entorno. Durante los primeros años de vida, la plasticidad neuronal alcanza su punto más alto, lo que convierte a esta etapa en un periodo crucial para el aprendizaje y el desarrollo. En este sentido, la estimulación temprana debe basarse en principios neurocientíficos que favorezcan el fortalecimiento de habilidades cognitivas, emocionales y motoras, asegurando así un crecimiento integral y armónico.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tema 2
              p Las estrategias basadas en neurociencia buscan optimizar los procesos de aprendizaje mediante enfoques que respeten el ritmo natural de maduración del niño, favoreciendo conexiones neuronales sólidas y promoviendo un desarrollo integral (Vargas et al., 2024).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tema 3
              p La neurociencia ha evidenciado que los primeros años de vida representan una etapa fundamental para el desarrollo infantil, porque el cerebro establece conexiones sinápticas que influirán en el aprendizaje y el comportamiento a lo largo de la vida. En este contexto, la estimulación temprana basada en principios neurocientíficos, permite potenciar habilidades cognitivas, motoras, emocionales y lingüísticas, de manera efectiva.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tema 4
              p Uno de los aspectos claves en este proceso es la experiencia temprana, dado que la interacción con el entorno, el juego y el afecto fortalecen los circuitos neuronales. Las experiencias sensoriales enriquecidas y el vínculo con los cuidadores, contribuyen a la consolidación de aprendizajes y al desarrollo socioemocional del niño.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tema 5
              p Asimismo, la emoción desempeña un papel central en el aprendizaje, debido a que influye en la liberación de neurotransmisores como la dopamina y la oxitocina, los cuales facilitan la memoria, la motivación y la adquisición de conocimientos. En este sentido, estrategias como el juego, la narración de historias y la música, generan un ambiente positivo que favorece el desarrollo integral (García, 2019).
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/30.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Por otro lado, el movimiento está estrechamente vinculado con el desarrollo cerebral. Actividades como gatear, correr, saltar y manipular objetos fortalecen la coordinación, la percepción espacial y la resolución de problemas. Estimular tanto la motricidad gruesa como la fina contribuye a la maduración de habilidades necesarias para la escritura, la lectura y el pensamiento lógico.
    
    p.mb-4 Para aplicar estos principios en la estimulación temprana, se recomienda implementar estrategias como:
    
    .bg-full-width-1.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Estimulación multisensorial
                p.text-center Mediante experiencias que involucren los cinco sentidos para mejorar la retención de información y la atención.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Juego libre y exploración
                p.text-center Promoviendo la curiosidad y el pensamiento crítico.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Uso del ritmo y la repetición
                p.text-center A través de canciones y patrones rítmicos que refuercen las conexiones neuronales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Vinculación afectiva
                p.text-center Fortaleciendo el desarrollo del lenguaje y la comunicación mediante la interacción positiva con los adultos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Respeto por el sueño y el descanso
                p.text-center Asegurando que los niños cuenten con ambientes propicios para la recuperación neuronal y la consolidación del aprendizaje.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/8.png', alt='')

    .bg-full-width.bg-color-15.mb-5
      .px-4.px-md-5.pb-md-4.pb-lg-0
        .row.align-items-center.justify-content-center
          .col-md-6.col-lg-2.mb-3.mb-lg-0.order-lg-2
            img(src="@/assets/curso/tema3/13.svg", data-aos="zoom-in").mx-auto
          .col-lg-10.order-lg-1
            h2 Reflexionemos: 
            p.mb-0 Comprender cómo funciona el cerebro infantil permite diseñar estrategias de estimulación más efectivas y adaptadas a sus necesidades. No se trata solo de exponer a los niños a múltiples estímulos, sino de crear experiencias significativas que fomenten su desarrollo de manera armónica y equilibrada.
      
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Metodologías emergentes en la educación inicial
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/14.svg", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        h5 ¿Cómo han evolucionado las metodologías en la educación inicial para responder a las necesidades del desarrollo infantil?
        p(data-aos="fade-left") La educación inicial ha experimentado una transformación significativa en los últimos años, incorporando enfoques innovadores que buscan responder de manera más efectiva a las necesidades del desarrollo infantil. La neurociencia, la pedagogía activa y las tecnologías emergentes han influido en la manera en que se diseñan las experiencias de aprendizaje para los niños en sus primeros años de vida
    
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las metodologías emergentes priorizan el aprendizaje a través del juego, la exploración y la experimentación, promoviendo un desarrollo integral que no solo abarca el ámbito cognitivo, sino también el emocional, social y motor. A continuación, se presentan algunas de las metodologías más relevantes en la estimulación temprana.
    
    p.mb-4 El desarrollo infantil se potencia mediante enfoques pedagógicos que respetan los ritmos individuales y promueven el aprendizaje activo. A continuación, se presentan algunas de las metodologías más innovadoras en la educación inicial, fundamentadas en la exploración, la autonomía y la interacción con el entorno.

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Aprendizaje basado en el juego") El juego constituye una herramienta esencial para el desarrollo cognitivo, social y emocional en la primera infancia. A través del juego simbólico, sensorial y cooperativo, los niños exploran el mundo, desarrollan la creatividad y fortalecen la resolución de problemas. Su integración en el proceso educativo permite un aprendizaje significativo y adaptado a las necesidades individuales.
          p(numero="2" titulo="Enfoque Reggio Emilia") Esta metodología considera al niño como un sujeto activo en su proceso de aprendizaje, impulsando la experimentación y la creatividad. Los ambientes de aprendizaje se diseñan como un "tercer maestro", ofreciendo materiales abiertos que invitan a la exploración. Además, se destaca la documentación pedagógica, donde se registran los procesos de aprendizaje mediante fotografías, dibujos y relatos, facilitando la reflexión y la construcción de conocimientos.
          p(numero="3" titulo="Pedagogía Montessori") Basada en la autonomía y el aprendizaje autodirigido, esta pedagogía permite que los niños exploren su entorno a su propio ritmo, utilizando materiales diseñados para fomentar la independencia y la autodisciplina. Los espacios están organizados para propiciar la concentración y la experimentación sensorial, respetando los períodos sensibles del aprendizaje y estableciendo un equilibrio entre la libertad y los límites.
    
    .row.align-items-center.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/17.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="4" titulo="Filosofía Pikler") Este enfoque enfatiza el movimiento libre y el respeto por los tiempos individuales del desarrollo motor y emocional. Se promueve la autonomía desde una edad temprana, evitando intervenciones innecesarias y permitiendo que los niños exploren su entorno de manera natural. Además, se refuerzan los vínculos afectivos sólidos mediante la creación de un ambiente seguro y predecible.
          p(numero="5" titulo="Enfoque Waldorf") Caracterizado por una enseñanza holística, este modelo pedagógico integra el arte, la música, la narración de cuentos y el contacto con la naturaleza como ejes del aprendizaje. Se prioriza el desarrollo de la creatividad y la imaginación antes de la instrucción académica tradicional, respetando el ritmo de cada niño y fomentando un aprendizaje vivencial. Los materiales utilizados son naturales y favorecen el juego imaginativo.
          p(numero="6" titulo="Aprendizaje Basado en Proyectos (ABP).") Este enfoque permite que los niños participen en investigaciones y proyectos significativos que estimulan su curiosidad y motivación. La integración de diversas áreas del conocimiento fortalece el pensamiento crítico, la resolución de problemas y el trabajo colaborativo. Además, el ABP potencia el desarrollo del lenguaje y la comunicación, promoviendo la expresión de ideas y la reflexión sobre las experiencias vividas.
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.pb-md-4.pb-lg-0
        .row.align-items-center.justify-content-center
          .col-md-6.col-lg-2.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/18.svg", data-aos="zoom-in").mx-auto
          .col-lg-10.text-white
            h2 Reflexionemos: 
            p.mb-0 Las metodologías emergentes en la educación inicial han demostrado ser estrategias efectivas para potenciar el aprendizaje y el desarrollo infantil. No se trata de aplicar un único enfoque, sino de adaptar y combinar diferentes metodologías, según las necesidades de cada niño y el contexto educativo.
    
    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Recursos interactivos y digitales para potenciar el aprendizaje
    
    p.mb-4 El avance de la tecnología ha transformado la manera en que los niños aprenden y exploran el mundo, brindando nuevas oportunidades para enriquecer la estimulación temprana. Los recursos digitales pueden complementar las estrategias pedagógicas tradicionales, ofreciendo experiencias de aprendizaje más interactivas, inmersivas y personalizadas.

    .bg-full-width.bg-color-1.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Recursos interactivos y digitales para potenciar el aprendizaje 
            p.mb-4(data-aos="fade-right") En el PDF <b>Recursos interactivos y digitales para potenciar el aprendizaje</b>, se analizan diversas herramientas tecnológicas como aplicaciones educativas, cuentos interactivos, realidad aumentada, robótica y plataformas en línea, destacando su impacto en el desarrollo infantil. Además, se presentan estrategias para un uso equilibrado y supervisado de estos recursos, asegurando que contribuyan al aprendizaje sin reemplazar la exploración física y la interacción social esenciales en la primera infancia.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Recursos interactivos y digitales para potenciar el aprendizaje .
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/19.png', alt='')
    
    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Enfoques interdisciplinarios en la estimulación temprana

    p.mb-4 El desarrollo infantil es un proceso complejo que requiere la intervención de múltiples disciplinas para garantizar un crecimiento integral y equilibrado en los niños. La estimulación temprana, cuando se aborda desde un enfoque interdisciplinario, permite combinar conocimientos y metodologías de diferentes áreas, logrando estrategias más efectivas y ajustadas a las necesidades individuales de cada niño.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Enfoques interdisciplinarios en la estimulación temprana 
            p.mb-4(data-aos="fade-right") En el PDF <b>Enfoques interdisciplinarios en la estimulación temprana</b>, se exploran las contribuciones de especialistas como docentes, psicólogos, fonoaudiólogos, terapeutas ocupacionales y neurocientíficos, resaltando la importancia de su trabajo conjunto para potenciar el desarrollo cognitivo, motor, lingüístico y socioemocional. A través de este análisis, se destacan los beneficios de una colaboración estructurada, que no solo mejora la detección temprana de dificultades, sino que también fortalece la comunicación entre profesionales y familias para optimizar los procesos de aprendizaje en la primera infancia.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Enfoques interdisciplinarios en la estimulación temprana .
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/20.png', alt='')
    
    #t_3_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.6] Ética y buenas prácticas en el uso de tecnología para la estimulación temprana
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/21.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        h5.mb-4(data-aos="fade-left") ¿Cuál es el impacto que tiene la tecnología en el desarrollo infantil?
    
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La tecnología ha revolucionado la forma en que los niños aprenden y se relacionan con su entorno. En el contexto de la estimulación temprana, su uso adecuado puede potenciar el desarrollo cognitivo, motor y socioemocional. Sin embargo, también plantea desafíos éticos y pedagógicos que deben abordarse con responsabilidad. La clave está en encontrar un equilibrio entre la incorporación de herramientas tecnológicas y el respeto por las necesidades naturales del desarrollo infantil.
        p El uso de tecnología en la primera infancia, debe regirse por principios que garanticen el bienestar y la seguridad del niño:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/23.png")
            .col-lg-7
              h5 Uso moderado y supervisado
              p La tecnología debe complementar la interacción humana, no reemplazarla. Es fundamental establecer límites en el tiempo de exposición y supervisar los contenidos a los que acceden los niños.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/24.png")
            .col-lg-7
              h5 Contenido de calidad y basado en evidencia
              p Las aplicaciones y recursos digitales deben estar diseñados con base en principios pedagógicos y adaptados al desarrollo infantil. No toda tecnología es beneficiosa; es importante seleccionar herramientas validadas por expertos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/25.png")
            .col-lg-7
              h5 Privacidad y protección de datos
              p Los niños son particularmente vulnerables en entornos digitales. Es fundamental que las plataformas educativas cumplan con normativas de protección de datos y no expongan información personal.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/26.png")
            .col-lg-7
              h5 Interacción activa y no pasiva
              p La tecnología debe fomentar la exploración, el juego y la creatividad, evitando el consumo pasivo de contenidos. Las herramientas digitales más efectivas, son aquellas que promueven la interacción y la resolución de problemas.
    
    p.mb-4 Para que la tecnología sea una aliada en la estimulación temprana, es necesario aplicarla de manera adecuada en el aula y en el hogar. A continuación, se presentan algunas buenas prácticas:

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/27.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Selección adecuada de recursos digitales") 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 Optar por aplicaciones interactivas que estimulan el desarrollo del lenguaje, la motricidad y la cognición.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 Priorizar herramientas que fomenten la creatividad y el aprendizaje basado en el juego.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 Evitar contenidos con publicidad o que fomenten el consumo excesivo de pantallas.
          div(numero="2" titulo="Uso del tiempo de pantalla de manera consciente") 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 Seguir las recomendaciones de organismos como la OMS y la AAP, que sugieren evitar pantallas en menores de 2 años y limitar su uso en niños de 2 a 5 años a un máximo de una hora al día.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 Priorizar el uso de la tecnología para el aprendizaje activo, en lugar de la simple visualización de videos.
          div(numero="3" titulo="Integración con experiencias sensoriales y sociales") 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 La tecnología no debe sustituir la exploración del mundo real. Se recomienda complementar con actividades sensoriales, motrices y sociales.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 Las experiencias de aprendizaje deben combinar herramientas digitales con actividades físicas y manipulativas.
          div(numero="4" titulo="Rol del docente y la familia en el uso responsable de la tecnología") 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 El docente debe actuar como mediador, guiando el uso de la tecnología y asegurando que su aplicación responda a objetivos educativos claros.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-10
                p.mb-0 Las familias deben recibir orientación sobre cómo seleccionar y supervisar el contenido tecnológico que consumen sus hijos.
    
    .bg-full-width.bg-color-15.mb-5
      .px-4.px-md-5.pb-md-4.pb-lg-0
        .row.align-items-center.justify-content-center
          .col-md-6.col-lg-2.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/28.svg", data-aos="zoom-in").mx-auto
          .col-lg-10
            h2 Reflexionemos: 
            p.mb-0 La tecnología, cuando se emplea con criterio y responsabilidad, puede ser una herramienta poderosa para la estimulación temprana. Sin embargo, su uso debe estar alineado con principios éticos y buenas prácticas que prioricen el desarrollo integral del niño. Más allá de la fascinación por los dispositivos digitales, lo realmente valioso es cómo estos pueden potenciar la creatividad, el aprendizaje y la interacción con el entorno.
    
    #t_3_7.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.7] Casos de éxito y buenas prácticas en estimulación temprana
    
    p.mb-4 La estimulación temprana es un campo en constante evolución, donde la aplicación de estrategias efectivas ha demostrado un impacto positivo en el desarrollo infantil. Analizar experiencias exitosas permite identificar buenas prácticas que pueden ser replicadas y adaptadas en diferentes contextos educativos y familiares.

    .bg-full-width.bg-color-1.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Casos de éxito y buenas prácticas en estimulación temprana 
            p.mb-4(data-aos="fade-right") En el PDF <b>Casos de éxito y buenas prácticas en estimulación temprana</b>, se presentan iniciativas de distintos países que han logrado fortalecer el aprendizaje infantil a través de enfoques innovadores como la lectura interactiva, el juego estructurado y la estimulación multisensorial. A partir de estos casos, se destacan los elementos clave que contribuyen a una educación inicial de calidad, promoviendo estrategias adaptadas a las necesidades individuales de cada niño y garantizando un aprendizaje significativo desde la primera infancia.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Casos de éxito y buenas prácticas en estimulación temprana .
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/29.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/228162 " target="_blank" rel="noopener noreferrer") Vásquez Pereyra, Y. Y. & Valverde Zavaleta, S. A. (Dir.). (2022). Retroalimentación y logros del aprendizaje en estudiantes de educación inicial, La Esperanza – 2021: ( ed.). D - Universidad César Vallejo. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/147946 " target="_blank" rel="noopener noreferrer") Gullo, J. (2020). Tecnología y educación: experiencias y miradas para la implementación de las nuevas tecnologías en el aula: (2 ed.). Editorial Maipue. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://goo.su/i2d3" target="_blank" rel="noopener noreferrer") Díaz-Cabriales, A., Flores Corral, D., Villa Martínez, S., Profesor, E. N., & Carrillo, C. A. (2019). Estrategias de intervención psicoeducativa; neurociencia y zona de desarrollo próximo. Obtenido de https://www. antiguo. conisen. mx/memorias2019/memorias/1 P, 649. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.unal.edu.co/index.php/morfolia/article/view/52874" target="_blank" rel="noopener noreferrer") Torres, J. S. S., Córdoba, W. J. D., Cerón, L. F. Z., Amézquita, C. A. N., & Bastidas, T. O. Z. (2015). Correlación funcional del sistema límbico con la emoción, el aprendizaje y la memoria. Morfolia, 7(2), 29.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://atentio.es/uso-de-nuevas-tecnologias-en-atencion-temprana/" target="_blank" rel="noopener noreferrer") USO DE NUEVAS TECNOLOGÍAS EN ATENCIÓN TEMPRANA - Atentio. (s.f.). Atentio
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://yuyitos.com/tecnologia-en-la-estimulacion-temprana/ " target="_blank" rel="noopener noreferrer") Tecnología en la Estimulación Temprana – Yuyitos. (s.f.). Yuyitos – La mejor guardería. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=-KvcBlS6VzU" target="_blank" rel="noopener noreferrer") Diego Neurociencias. (2021, 16 de diciembre). 16. Pruebas de Tamizaje o Cribado en la Evaluación Infantil [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=s5sxwPzN8-Q " target="_blank" rel="noopener noreferrer") Arza, S.M. (2016, 22 de septiembre). Educación Ciencia y Tecnología [Video]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el principal objetivo de la estimulación temprana en entornos educativos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Preparar a los niños para la educación secundaria.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Potenciar el desarrollo integral a través de experiencias significativas.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Asegurar que los niños aprendan a leer y escribir antes de los cinco años.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Reducir el tiempo de juego en el aula para enfocarse en el aprendizaje académico.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes estrategias es clave en la estimulación temprana para niños con necesidades educativas especiales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Implementar metodologías estandarizadas sin adaptaciones.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Utilizar únicamente materiales digitales en el aula.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Adaptar actividades y recursos a las necesidades individuales. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Limitar la participación de los niños en actividades grupales.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué método se considera fundamental para evaluar el desarrollo infantil?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La observación sistemática en diferentes contextos. ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'La comparación del niño con el promedio de su grupo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La aplicación de pruebas estandarizadas sin ajustes.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'La evaluación únicamente a través de exámenes escritos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál es un beneficio de integrar la tecnología en la estimulación temprana?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reemplazar completamente la enseñanza tradicional.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Aislar a los niños de las interacciones sociales para mejorar su concentración.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Ofrecer experiencias interactivas que refuercen el aprendizaje multisensorial. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Reducir la necesidad de la presencia del docente en el proceso de enseñanza.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué caracteriza a un enfoque interdisciplinario en la estimulación temprana?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La exclusión de la familia en el proceso educativo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La integración de diferentes áreas del conocimiento para abordar el desarrollo infantil. ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'La aplicación de un único método de enseñanza en todas las áreas del desarrollo.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'La especialización exclusiva de un solo profesional en todas las áreas del aprendizaje.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
