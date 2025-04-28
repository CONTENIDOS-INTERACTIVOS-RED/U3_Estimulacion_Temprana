<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Evaluación y seguimiento del desarrollo infantil'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        .row.justify-content-center.align-items-center
          .col-lg-12.bg-color-12
            div.p-4
              p.mb-0 Según Amar (2004), el desarrollo infantil es un proceso dinámico que requiere no solo estrategias de estimulación adecuadas, sino también una evaluación constante que permita conocer el progreso de cada niño y realizar los ajustes necesarios en su aprendizaje. La observación, el análisis y el seguimiento continuo son herramientas claves para garantizar que cada niño reciba el apoyo adecuado, según sus necesidades y potencialidades.  
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12.bg-color-1.p-4
              p.mb-0 En este sentido, la evaluación y el seguimiento del desarrollo infantil no solo permiten valorar los avances, sino que también favorecen la toma de decisiones pedagógicas informadas, promoviendo una educación más inclusiva y efectiva.
        
        h5 Lo invitamos a adentrarse en este tema fundamental y a explorar cómo estos procesos contribuyen a potenciar el aprendizaje y el bienestar de los niños.
                

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Métodos y herramientas para evaluar el desarrollo infantil
    
    .bg-full-width.bg-color-6.mb-5
      .p-4.p-md-5
        .row.justify-content-end.align-items-center
          .col-lg-5.order-2
            figure
              img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")
          .col-lg-6.order-1
            p(data-aos="fade-left").mb-4.text-white Para conocer sobre esta temática, lo invitamos a escuchar el siguiente podcast.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Indicadores de avance en áreas cognitivas, motoras, lingüísticas y sociales
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8
        h5.mb-4 ¿Cómo se puede reconocer si un niño está avanzando adecuadamente en su desarrollo?
        p(data-aos="fade-left") El crecimiento infantil no es un proceso uniforme, sino un camino lleno de descubrimientos y aprendizajes que varían de un niño a otro. Para comprender su evolución, es fundamental contar con indicadores de avance en diferentes áreas del desarrollo. Estos indicadores permiten identificar fortalezas, dificultades y necesidades específicas, facilitando la implementación de estrategias de estimulación adecuadas
    
        .bg-color-7.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Cada área del desarrollo, cognitiva, motora, lingüística y social, desempeña un papel clave en la formación integral del niño. Por ello, es importante analizar cómo interactúan entre sí y qué señales indican que un niño está progresando de manera adecuada.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Desarrollo cognitivo
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Capacidad para resolver problemas sencillos y tomar decisiones básicas.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Reconocimiento de patrones, colores, formas y tamaños.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Desarrollo de la memoria y la atención sostenida en actividades.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Capacidad de clasificar y organizar objetos, según características específicas.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Comprensión de conceptos espaciales como "dentro", "fuera", "arriba" y "abajo".
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Desarrollo motor (fino y grueso)
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Coordinación en movimientos como saltar, correr y trepar (motricidad gruesa).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Precisión en el agarre de lápices, tijeras o pequeños objetos (motricidad fina).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Uso adecuado de ambas manos para actividades cotidianas.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Mejora el equilibrio y la coordinación corporal en actividades físicas.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Capacidad para realizar movimientos controlados y dirigidos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Desarrollo del lenguaje y la comunicación
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Comprensión y uso de palabras nuevas en diferentes contextos.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Producción de frases más complejas a medida que avanza en edad.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Uso del lenguaje para expresar necesidades, deseos y emociones.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Capacidad de seguir instrucciones y responder preguntas adecuadamente.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Desarrollo de habilidades narrativas y conversación con pares y adultos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Desarrollo social y emocional
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Interacción con otros niños y adultos de manera adecuada.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Expresión y regulación de emociones en diferentes situaciones.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Participación en juegos colaborativos y actividades grupales.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Desarrollo de empatía y comprensión de normas sociales.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Capacidad para resolver conflictos con estrategias adaptativas.

    .bg-full-width.bg-color-15.mb-5
      .px-4.px-md-5.pb-md-4.pb-lg-0
        .row.align-items-center.justify-content-center
          .col-md-6.col-lg-2.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/9.svg", data-aos="zoom-in").mx-auto
          .col-lg-10
            h2 Reflexionemos: 
            p.mb-0 El análisis de estos indicadores permite comprender mejor cómo está avanzando un niño en su desarrollo y qué áreas requieren un apoyo adicional. Es importante recordar que cada niño tiene su propio ritmo de aprendizaje, y la clave está en brindar oportunidades que favorezcan su crecimiento integral.
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Registro y análisis de progresos en la estimulación temprana
    
    p.mb-4 El seguimiento del desarrollo infantil es un proceso fundamental para evaluar la efectividad de las estrategias de estimulación temprana y realizar ajustes que favorezcan el aprendizaje. Un registro sistemático permite identificar avances, detectar posibles dificultades y adaptar las intervenciones pedagógicas a las necesidades individuales de cada niño.

    .bg-full-width.bg-color-1.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Registro y análisis de progresos en la estimulación temprana
            p.mb-4(data-aos="fade-right") En el PDF Registro y análisis de progresos en la estimulación temprana, se exploran diferentes métodos de documentación, como listas de verificación, registros anecdóticos, escalas de desarrollo y portafolios de aprendizaje, proporcionando herramientas prácticas para evaluar el impacto de la estimulación en el aula y en el hogar. A través de este análisis, se busca fortalecer la toma de decisiones pedagógicas y fomentar un trabajo colaborativo entre docentes y familias, garantizando un acompañamiento efectivo en el proceso de desarrollo infantil.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Registro y análisis de progresos en la estimulación temprana.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/10.png', alt='')

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Estrategias de retroalimentación para mejorar la intervención educativa

    .row.mb-5.justify-content-center
      .col-lg-10
        p ¿Cómo influye la retroalimentación en el proceso de aprendizaje y desarrollo infantil?
        .bg-color-16.text-center.p-4
          p.mb-0 ¿Cómo influye la retroalimentación en el proceso de aprendizaje y desarrollo infantil?

        div.bg-color-4.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-left").order-2.p-4
              p.mb-0 El aprendizaje es un proceso dinámico en el que cada experiencia deja una huella en el desarrollo del niño. Sin embargo, para que este proceso sea realmente significativo, es necesario contar con estrategias de retroalimentación que permitan ajustar, fortalecer y mejorar la intervención educativa. La retroalimentación no solo beneficia a los niños, sino que también orienta a docentes y familias en la toma de decisiones pedagógicas (Cedeño y Moya, 2019).
            .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema2/11.svg')
       
        p Cuando la retroalimentación es clara, oportuna y específica, se convierte en un puente entre la evaluación y la mejora del aprendizaje. Pero, ¿qué estrategias pueden potenciar este proceso en la estimulación temprana?

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Retroalimentación descriptiva y específica
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Proporciona información detallada sobre los logros y aspectos por mejorar.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Evita juicios generales como "lo hiciste bien" y en su lugar ofrece observaciones concretas, como "logras encajar las piezas del rompecabezas porque identificaste los colores y las formas".
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Favorece la comprensión del proceso de aprendizaje y motiva al niño a seguir explorando nuevas estrategias.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Uso de estrategias visuales y manipulativas
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Utilizar pictogramas, gráficos y tableros de progreso facilita la comprensión de los avances.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Incorporar recursos sensoriales como fichas de colores o tarjetas de logros hace que la retroalimentación sea más atractiva y significativa.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Permite que los niños participen activamente en la autoevaluación y reconocimiento de sus logros.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Espacios de diálogo con la familia
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Mantener una comunicación constante con las familias ayuda a alinear estrategias de estimulación en casa y en el aula.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Ofrecer recomendaciones concretas sobre cómo reforzar ciertos aprendizajes en el hogar.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Involucrar a los padres en la identificación de avances y dificultades permite una intervención más efectiva.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Reforzamiento positivo y motivación
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Destacar los avances, por pequeños que sean, refuerza la confianza y motivación del niño.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Utilizar frases alentadoras y reconocer el esfuerzo más allá del resultado final.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-10
                  p.mb-0 Fomentar el gusto por el aprendizaje a través de desafíos progresivos y alcanzables.

    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.pb-md-4.pb-lg-0
        .row.align-items-center.justify-content-center
          .col-md-6.col-lg-2.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/16.svg", data-aos="zoom-in").mx-auto
          .col-lg-10.text-white
            h2 Reflexionemos: 
            p.mb-0 Según Jauli (2010), la retroalimentación es una herramienta poderosa que permite transformar la enseñanza y mejorar los procesos de aprendizaje en la primera infancia. No se trata solo de corregir errores, sino de guiar al niño en su desarrollo, fomentar su confianza y potenciar su curiosidad.

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Estrategias de intervención ante dificultades detectadas
    
    p.mb-4 Cada niño tiene un ritmo de desarrollo único, y en ocasiones pueden surgir dificultades en áreas como el lenguaje, la motricidad, la socialización o la regulación emocional. Detectar estos desafíos a tiempo y aplicar estrategias de intervención adecuadas es clave para prevenir rezagos y fortalecer el aprendizaje.

    .bg-full-width.bg-color-1.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Estrategias de intervención ante dificultades detectadas 
            p.mb-4(data-aos="fade-right") En el PDF <b>Estrategias de intervención ante dificultades detectadas</b>, se presentan enfoques prácticos para la identificación y abordaje de estas situaciones, destacando la importancia de la observación, la personalización de las estrategias y el trabajo colaborativo con la familia y otros profesionales. A través de metodologías basadas en la adaptación de actividades, el uso del juego como herramienta de aprendizaje y el monitoreo continuo de progresos, se busca garantizar un acompañamiento efectivo que potencie el desarrollo integral del niño y le brinde herramientas para superar sus desafíos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estrategias de intervención ante dificultades detectadas .
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/17.png', alt='')
    
    #t_2_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.6] Elaboración de informes y comunicación con las familias
    
    p.mb-4 La comunicación efectiva entre docentes y familias es clave para garantizar un acompañamiento adecuado en el desarrollo infantil. Más allá de la observación y evaluación del progreso de los niños, es fundamental que la información recopilada se traduzca en estrategias claras y accesibles para los cuidadores.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Elaboración de informes y comunicación con las familias 
            p.mb-4(data-aos="fade-right") En el PDF <b>Elaboración de informes y comunicación con las familias</b>, se presentan herramientas para estructurar informes de manera clara y objetiva, facilitando la comprensión de los avances, áreas de oportunidad y recomendaciones personalizadas. Además, se destacan estrategias para fortalecer el diálogo con las familias, promoviendo un trabajo colaborativo que potencie el aprendizaje y el bienestar de los niños en el aula y en el hogar.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Elaboración de informes y comunicación con las familias .
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/113159" target="_blank" rel="noopener noreferrer") Serrano, P. (2019). La integración sensorial en el desarrollo y aprendizaje infantil: ( ed.). Narcea Ediciones. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/113132 " target="_blank" rel="noopener noreferrer") Stamm, J. (2018). Neurociencia infantil: el desarrollo de la mente y el poder del cerebro de 0 a 6 años: ( ed.). Narcea Ediciones.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revista.unibe.edu.py/index.php/rcei/article/view/181/0 " target="_blank" rel="noopener noreferrer") Pacheco, C., Sánchez, B. A., & Elías, R. (2018). Abordajes en la evaluación del desarrollo infantil temprano. Revista Científica Estudios e Investigaciones, 7(1), 200-216.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dominiodelasciencias.com/ojs/index.php/es/article/view/2081 " target="_blank" rel="noopener noreferrer") Campuzano-López, J. G., Mero-Ponce, J. K., Zambrano-Zambrano, J. R., & Quiroz-Parrales, L. A. (2021). La retroalimentación como estrategia para mejorar el proceso de enseñanza-aprendizaje en los estudiantes. Dominio de las Ciencias, 7(4), 57-69.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://scielo.isciii.es/scielo.php?pid=S1139-76322009000100005&script=sci_arttext " target="_blank" rel="noopener noreferrer") Álvarez Gómez, M. J., Soria Aznar, J., & Galbe Sánchez-Ventura, J. (2009). Importancia de la vigilancia del desarrollo psicomotor por el pediatra de Atención Primaria: revisión del tema y experiencia de seguimiento en una consulta en Navarra. Pediatría Atención Primaria, 11(41), 65-87. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blogs.iadb.org/desarrollo-infantil/es/3-propuestas-desarrollo-infantil/ " target="_blank" rel="noopener noreferrer") 3 propuestas para medir el desarrollo infantil - Primeros Pasos. (s.f.-c). Primeros Pasos. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blogs.worldbank.org/es/education/hacerlo-bien-midiendolo-bien-nuevas-herramientas-globales-para-medir-el-desarrollo " target="_blank" rel="noopener noreferrer") Hacerlo bien midiéndolo bien: Nuevas herramientas globales para medir el desarrollo infantil en los años preescolares. (s.f.). Blogs del Banco Mundial. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=uPN3Jmaeefw " target="_blank" rel="noopener noreferrer") Chelo Sáiz. (2018, 5 de noviembre). Curso_UBUAbierta_Tema_2 [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=aKJ9B0htetM" target="_blank" rel="noopener noreferrer") UtopíasEducativas. (2016, 6 de junio). 2016_A1_5_Atencion_diversidad_programa_cognitiva [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
