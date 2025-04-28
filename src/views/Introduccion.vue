<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") En la primera infancia, la estimulación temprana desempeña un papel fundamental en el desarrollo integral de los niños, dado que contribuye a potenciar sus habilidades cognitivas, motoras, lingüísticas y socioemocionales. En este contexto, el diseño y la implementación de estrategias efectivas en el aula, resultan esenciales para favorecer aprendizajes significativos y garantizar un acompañamiento adecuado en esta etapa crucial del crecimiento.
    
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta unidad tiene como propósito brindar herramientas teórico-prácticas para la planificación, aplicación y evaluación de estrategias de estimulación temprana en entornos educativos. A lo largo del estudio, se explorarán enfoques basados en el juego, metodologías inclusivas y el uso de innovaciones tecnológicas, promoviendo así experiencias de aprendizaje enriquecedoras y adaptadas a las necesidades de cada niño.
        p(data-aos="fade-left") Al finalizar la unidad, se espera que el estudiante sea capaz de diseñar, implementar y evaluar estrategias de estimulación temprana en el aula, integrando herramientas innovadoras y tendencias actuales. 
        p(data-aos="fade-left") Para ello, se abordarán tres ejes temáticos principales:


    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Las estrategias de estimulación en el aula.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/intro/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold La evaluación y el seguimiento del desarrollo infantil. 
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/intro/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold Las innovaciones y tendencias en el campo.
    
    .bg-full-width.bg-h85-6
      .px-4.px-md-5.py-4
        div 
          .row.align-items-center
            .col-lg-4
              img(src="@/assets/curso/intro/6.svg", data-aos="zoom-in").mx-auto
            .col-lg-8.text-white
              p.mt-lg-5.mb-0 Se invita a participar activamente en las actividades propuestas, reflexionar sobre la práctica pedagógica y aplicar los conocimientos adquiridos en escenarios educativos reales o simulados. El compromiso con el proceso de aprendizaje permitirá fortalecer las competencias necesarias para impactar positivamente en el desarrollo de la primera infancia.

</template>
