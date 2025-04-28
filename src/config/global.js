export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Estrategias y prácticas de estimulación temprana',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estrategias de estimulación en el aula',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'La estimulación temprana en entornos educativos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Diseño de estrategias, según las necesidades del desarrollo infantil',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Actividades basadas en el juego como herramienta de aprendizaje',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Diseño de ambientes de aprendizaje estimulantes',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Adaptaciones y flexibilización de estrategias para la inclusión',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Estrategias de intervención ',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo:
              'Rol del docente y la familia en la implementación de estrategias',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Evaluación y seguimiento del desarrollo infantil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Métodos y herramientas para evaluar el desarrollo infantil',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Indicadores de avance en áreas cognitivas, motoras, lingüísticas y sociales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Registro y análisis de progresos en la estimulación temprana',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Estrategias de retroalimentación para mejorar la intervención educativa',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Estrategias de intervención ante dificultades detectadas',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Elaboración de informes y comunicación con las familias',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Innovaciones y tendencias en estimulación temprana',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Nuevas tecnologías aplicadas a la estimulación temprana',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estrategias basadas en neurociencia y desarrollo infantil',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Metodologías emergentes en la educación inicial',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Recursos interactivos y digitales para potenciar el aprendizaje',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Enfoques interdisciplinarios en la estimulación temprana',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo:
              'Ética y buenas prácticas en el uso de tecnología para la estimulación temprana',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo:
              'Casos de éxito y buenas prácticas en estimulación temprana',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Vidal Lucena, M. (Coord.). (2007). Estimulación temprana de 0 a 6 años: desarrollo de capacidades, valoración y programas de intervención: 2a parte: desarrollo de capacidades e intervención temprana: ( ed.). Editorial CEPE. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/153534 ',
    },
    {
      referencia:
        'Tablada Martínez, G. & Acosta Luis, D. (2020). El período de adaptación de los niños al sistema educativo: estrategias metodológicas para su adecuada inclusión: ( ed.). Editorial Tecnocientífica Americana. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/174262',
    },
    {
      referencia:
        'Sarlé, P. M. (2013). Lo importante es jugar… Cómo entra el juego en la escuela: ( ed.). Homo Sapiens Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67090 ',
    },
    {
      referencia:
        'Miño, E. R. R., Cevallos, S. D. P., González, G. L. L., & Villacis, C. M. V. (2019). Estimulación temprana es sinónimo de un mejor desarrollo infantil. RECIAMUC, 3(1), 164-180. ',
      link: 'https://reciamuc.com/index.php/RECIAMUC/article/view/228 ',
    },
    {
      referencia:
        'Cortés, A., & García, G. (2017). Estrategias pedagógicas que favorecen el aprendizaje de niñas y niños de 0 a 6 años de edad en Villavicencio-Colombia. Revista Interamericana De Investigación Educación Y Pedagogía RIIEP, 10(1), 125-143. ',
      link:
        'https://revistas.usantotomas.edu.co/index.php/riiep/article/view/4746 ',
    },
    {
      referencia:
        'Machuca, J. M. C., Romero, M. E. L., Espinoza, L. E. R., & Calva, S. W. G. (2024). Juego Simbólico un Proceso Dinámico para Potenciar las Habilidades Socioemocionales y Artísticas en los Niños de Educación Inicial. Ciencia Latina Revista Científica Multidisciplinar, 8(5), 1989-2004. ',
      link: 'https://ciencialatina.org/index.php/cienciala/article/view/13670 ',
    },
    {
      referencia:
        'Amar Amar, J. J. (2004). Desarrollo infantil y construcción del mundo social: ( ed.). Universidad del Norte. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/70788 ',
    },
    {
      referencia:
        'Jauli, I. & Reig, E. (2010). Retroalimentación positiva: (1 ed.). LID Editorial España. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/271193 ',
    },
    {
      referencia:
        'Batatina, S., & de la Paz, M. (2000). Evaluación en la educación inicial como proceso constitutivo a la condición del niño. ',
      link: 'https://rieoei.org/RIE/article/view/2229 ',
    },
    {
      referencia:
        'Huepp Ramos, F. L., & Fornaris Méndez, M. (2021). La estimulación temprana para el desarrollo infantil. EduSol, 21(77), 66-79. ',
      link:
        'http://scielo.sld.cu/scielo.php?pid=S1729-80912021000400066&script=sci_arttext ',
    },
    {
      referencia:
        'Cano, G. I. (2014). Estimulación temprana en el desarrollo infantil. Quetzaltenango: Campus de Quetzaltenango. ',
      link:
        'https://www.redalyc.org/journal/4757/475769312006/475769312006.pdf ',
    },
    {
      referencia:
        'Cedeño Romero, E. L., & Moya Martínez, M. E. (2019). La retroalimentación como estrategia de mejoramiento del proceso formativo de los educandos. Atlante Cuadernos de Educación y Desarrollo, (agosto). ',
      link:
        'https://www.eumed.net/rev/atlante/2019/08/retroalimentacion-educandos.html ',
    },
    {
      referencia:
        'Galindo C. J. A. (2014). Educación y nuevas tecnologías: (1 ed.). Universidad de La Salle - Ediciones Unisalle. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/222018 ',
    },
    {
      referencia:
        'Guangatal, N., & Israel, B. (2023). Tecnologías de la Información y la Comunicación como herramienta en la estimulación temprana (Bachelor´s thesis, Ambato: Universidad Tecnològica Indoamèrica). ',
      link: 'https://repositorio.uti.edu.ec/handle/123456789/5175',
    },
    {
      referencia:
        'Campos, A. (2010). Neuroeducación: uniendo las neurociencias y la educación en la búsqueda del desarrollo humano. La educación. Revista digital, 143, 1-14. ',
      link:
        'https://alicia.concytec.gob.pe/vufind/Record/UUPN_e1e77b3e8bed7cced1bc62a3b9ed8cd6/Details ',
    },
    {
      referencia:
        'Vargas-Tipula, W. G., Zavala-Cáceres, E. M., & Zuñiga-Aparicio, P. (2024). Estrategias para el aprendizaje desde la neurociencia: Revisión sistemática. Revista Arbitrada Interdisciplinaria Koinonía, 9, 97-114. ',
      link:
        'https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S2542-30882024000300097 ',
    },
    {
      referencia:
        'García, S. C. P. (2019). Aprendiendo desde la emoción. Infancias imágenes, 18(2), 285-294. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7136690',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente de aprendizaje',
      significado:
        'Espacio físico, social y emocional diseñado para favorecer el desarrollo y la adquisición de conocimientos en los niños.',
    },
    {
      termino: 'Atención temprana',
      significado:
        'Conjunto de intervenciones dirigidas a niños en sus primeros años de vida para potenciar su desarrollo y prevenir dificultades.',
    },
    {
      termino: 'Cognición',
      significado:
        'Conjunto de procesos mentales como la percepción, memoria, pensamiento y resolución de problemas, fundamentales en el aprendizaje infantil.',
    },
    {
      termino: 'Desarrollo infantil',
      significado:
        'Proceso de cambios físicos, cognitivos, emocionales y sociales que ocurren en la infancia y determinan el crecimiento del niño.',
    },
    {
      termino: 'Estrategia didáctica',
      significado:
        'Método o conjunto de técnicas utilizadas por los docentes para facilitar el aprendizaje y estimular el desarrollo infantil.',
    },
    {
      termino: 'Evaluación del desarrollo',
      significado:
        'Proceso de observación y análisis para identificar avances, dificultades y necesidades en el crecimiento de los niños.',
    },
    {
      termino: 'Habilidades motoras',
      significado:
        'Capacidades relacionadas con el movimiento y el control del cuerpo, incluyendo la motricidad gruesa y fina.',
    },
    {
      termino: 'Inclusión educativa',
      significado:
        'Principio que garantiza la participación y el aprendizaje de todos los niños, independientemente de sus capacidades o condiciones.',
    },
    {
      termino: 'Juego pedagógico',
      significado:
        'Actividad lúdica estructurada con fines educativos, utilizada como estrategia para el desarrollo de diversas habilidades en la infancia.',
    },
    {
      termino: 'Lenguaje infantil',
      significado:
        'Conjunto de habilidades comunicativas que los niños desarrollan en sus primeros años, esenciales para la interacción y el aprendizaje.',
    },
    {
      termino: 'Neurociencia aplicada',
      significado:
        'Estudio del funcionamiento del cerebro y su relación con los procesos de aprendizaje y desarrollo en la primera infancia.',
    },
    {
      termino: 'Plasticidad cerebral',
      significado:
        'Capacidad del cerebro para adaptarse y cambiar a partir de la experiencia y la estimulación en los primeros años de vida.',
    },
    {
      termino: 'Psicomotricidad',
      significado:
        'Relación entre las funciones cognitivas, emocionales y motoras que influyen en el desarrollo y control del movimiento en los niños.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'Proceso mediante el cual se brindan observaciones y sugerencias para mejorar el aprendizaje y el desarrollo infantil.',
    },
    {
      termino: 'Tecnología educativa',
      significado:
        'Uso de herramientas digitales e innovaciones tecnológicas para mejorar los procesos de enseñanza y aprendizaje en la educación infantil.',
    },
  ],
}
