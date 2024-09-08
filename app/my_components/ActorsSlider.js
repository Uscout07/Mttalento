import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

  const ActorSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const actors = [
      {
        name: 'SANTIAGO TORRES',
        FECHADENACIMIENTO: '17 DE OCTUBRE DEL 2003',
        RANGODEEDAD: '18-23 AÑOS',
        ALTURA: '1.61 m',
        IDIOMAS: 'INGLÉS- ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'Chueco/ Martin/ Disney Plus/ 2022',
          'Papas por encargo/ Esteban/ Disney Plus/ 2021',
          'Juego de las llaves/Lucas/ Amazon Prime/2020'
        ],
        instagram: 'https://www.instagram.com/soy_santiagotorres/',
        tiktok: 'https://www.tiktok.com/@soy_santiagotorres',
        image: './Actors/1.png',
      },
      {
        name: 'INTI DEUS',
        FECHADENACIMIENTO: '26 DE SEPTIEMBRE DE 2011',
        RANGODEEDAD: '10-13 AÑOS',
        ALTURA: '1.50m',
        IDIOMAS: 'INGLÉS',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'Los Reyes de Oriente / Santos niño / Netflix / 2023',
          '¿Alguien ha visto a María / Niño de la calle / Pablo Ramírez / 2019',
          'El Obispo Rojo / Niño Campesino / Francesco Taboada / 2023',
          'Coolie/ Gabriel/Arvin Chen/2024'
        ],
        instagram: 'https://www.instagram.com/inti_deus/',
        tiktok: '',
        image: './Actors/2.png',
      },
      {
        name: 'ALEXANDER TAVIZON',
        FECHADENACIMIENTO: '19 DE JUNIO DEL 2008',
        RANGODEEDAD: '14-16 AÑOS',
        ALTURA: '1.69 m',
        IDIOMAS: 'ESPAÑOL-INGLÉS',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'El/Niñero/Santiago / Netflix / 2023',
          'Mi querida Herencia/Max/Juan Osorio/ Televisa/2019-2020',
          'Doña Flor y sus dos maridos/Diego/Televisa/ 2019',
          'Sale el sol/Alexander/Televisa/2018'
        ],
        instagram: 'https://www.instagram.com/alexandertavizon/',
        tiktok: 'https://www.tiktok.com/@alex_tavizon',
        image: './Actors/3.png',
      },
      {
        name: 'MIGUEL VALVERDE',
        FECHADENACIMIENTO: '24 de marzo del 2013',
        RANGODEEDAD: '7-10 AÑOS',
        ALTURA: '1.27 m',
        IDIOMAS: 'ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'Fiesta en La Madriguera / 2023 (Tochtli - Protagonista)',
          'Cortometraje: Todo está en los detalles / 2023 (Anton - Protagonista)'
        ],
        instagram: 'https://www.instagram.com/miguelvalverdeuribe/',
        tiktok: '',
        image: './Actors/4.png',
      },
      {
        name: 'ANTHONY GIULIETTI',
        FECHADENACIMIENTO: '25 DE OCTUBRE DE 2015',
        RANGODEEDAD: '6-8 AÑOS',
        IDIOMAS: 'ESPAÑOL',
        NACIONALIDAD: 'ARGENTINA (Acento Neutro)',
        PROYECTOSRECIENTES: [
          'El niñero/Leo/Netflix/2023',
          'At Midnight/Sebas/Jonah Feingold/2022',
          'Amor es Amor/Niño Rob Schneider/2022',
          'Silent Night/6 year Kid/John Woo/2022'
        ],
        instagram: 'https://www.instagram.com/giuliettianthony/',
        tiktok: '',
        image: './Actors/5.png',
      },
      {
        name: 'EMANUEL LATTANZIO',
        FECHADENACIMIENTO: '24 DE FEBRERO DEL 2002',
        RANGODEEDAD: '18-23 AÑOS',
        ALTURA: '1.81 m',
        IDIOMAS: 'INGLÉS-ESPAÑOL-ITALIANO',
        NACIONALIDAD: 'ITALIANA',
        PROYECTOSRECIENTES: [
          'Nadie nos va a Extrañar/Lalo/Dir.Samuel Kishi/Dir.Catalina Aguilar/2023',
          'Silvia Frente a Ti/Luis Felipe/2019',
          'Bio Serie Silvia Pinal/Hijo Silvia Pinal/Televisa/2017/18',
          'Adalelshow/Hijo de Adal/Televisa/2016',
          'Un día normal/Protagónico/Henry Bedwell/2019',
          'La Boda de mi mejor Amigo/Esteban/Celso Garcia/2018'
        ],
        instagram: 'https://www.instagram.com/emo1042/',
        tiktok: 'https://www.tiktok.com/@emo104202?lang=es',
        image: './Actors/6.png',
      },
      {
        name: 'ALDO PATRICIO DE LEÓN JARAMILLO',
        FECHADENACIMIENTO: '12 DE DICIEMBRE DEL 2013',
        RANGODEEDAD: '8-12 AÑOS',
        ALTURA: '1.42 m',
        IDIOMAS: 'INGLÉS (30%) - ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'Clases de Canto',
          'Clases de actuación',
          'Talleres de Actuación - Miss Mercedes Vaughan'
        ],
        instagram: 'https://www.instagram.com/aldo_switches/',
        tiktok: '',
        image: './Actors/7.png',
      },
      {
        name: 'ALEXIS GUADNER',
        FECHADENACIMIENTO: '17 DE JUNIO DE 1993',
        RANGODEEDAD: '27-30 AÑOS',
        ALTURA: '1.70 m',
        IDIOMAS: 'INGLÉS-ESPAÑOL',
        NACIONALIDAD: 'MEXICANA Y ESPAÑOLA',
        PROYECTOSRECIENTES: [
          'They came at night (Y llegaron de noche)/Stuart/3pas Studios y Visceral/2023',
          'The return of Brian Willing/Policía/Prod. Catherine Parish/2020',
          'Shattered/Víctima de asesinato/Discovery ID/2019',
          'Help Desk/Marcus/Wendy A.Wright/LR Productions/2020',
          'My Superhero Roberto Clemente/Julio/Manuel Morán/Teatro SEA/2016-2019'
        ],
        instagram: 'https://www.instagram.com/alexisguadner/',
        tiktok: 'https://www.tiktok.com/search?q=alexis%20guadner&t=1698520719018',
        image: './Actors/8.png',
      },
      {
        name: 'ALFONSO CARDONA',
        FECHADENACIMIENTO: '9 DE ABRIL DE 1999',
        RANGODEEDAD: '20-26 AÑOS',
        ALTURA: '1.78 m',
        IDIOMAS: 'ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'RESILIENCIA / Barush / Alexis Masariegos / 2019',
          'JAQUE MATE / Samuel / Alexis Masariegos / Construyendo Actores / 2019'
        ],
        instagram: 'https://www.instagram.com/alfonso_cardmot/',
        tiktok: '',
        image: './Actors/9.png',
      }, {
        name: 'ALEXIS JAUREGUI',
        FECHADENACIMIENTO: '9 DE AGOSTO DEL 2003',
        RANGODEEDAD: '17-22 AÑOS',
        ALTURA: '1.70 m',
        IDIOMAS: 'ESPAÑOL-INGLÉS',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'El maestro llega cuando el alumno está preparado / Marcos / Televisa / 2023',
          'Mal tercio / Rodo / Daña Michelle y Diego de Jesús / 2023',
          'Metanoia / Sergio / Dir. Raquel Jiménez / 2023'
        ],
        image: './Actors/10.png',
        instagram: 'https://www.instagram.com/soyalexisjauregui/',
        tiktok: 'https://www.tiktok.com/@soyalexisjauregui?lang=es',
      },
      {
        name: 'ALEX CERVANTES',
        FECHADENACIMIENTO: '14 DE AGOSTO 1997',
        RANGODEEDAD: '23-27 AÑOS',
        ALTURA: '1.73 m',
        IDIOMAS: '',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'El Tiempo Eres Tú / Antagónico / Martha Luna / Quetzal Producciones / 2019',
          'A Que No Me Dejas / Antagónico / Televisa / 2015',
          'Mi pecado / Antagónico / Televisa / 2009'
        ],
        image: './Actors/11.png',
        instagram: 'https://www.instagram.com/alexcervantesoficial/',
        tiktok: 'https://www.tiktok.com/@alexcervdj',
      },
      {
        name: 'DAVID ZORRILLA',
        FECHADENACIMIENTO: '6 DE JULIO DE 1977',
        RANGODEEDAD: '43-49 AÑOS',
        ALTURA: '1.78 m',
        IDIOMAS: 'INGLÉS-ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'El Señor De Los Cielos / Rubén Osorio / Telemundo / 2024',
          'Señorita 89 / Luis Alberto / Amazon Prime / 2024',
          'Travesuras De La Niña Mala / Empresario / VIX / 2023'
        ],
        image: './Actors/12.png',
        instagram: 'https://www.instagram.com/davidzorrilla22/',
        tiktok: 'https://www.tiktok.com/@davidzorrilla22',
      },
      {
        name: 'CIRILO SANTIAGO',
        FECHADENACIMIENTO: '18 DE MARZO DE 1960',
        RANGODEEDAD: '58-63 AÑOS',
        ALTURA: '1.79 m',
        IDIOMAS: 'ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'Vecinos / Cobrador / Televisa / 2023',
          'Lotería del crimen / Portero / Azteca / 2022',
          'La Caída / Vigilante / Lucía Puenzo / 2021'
        ],
        image: './Actors/13.png',
        instagram: 'https://www.instagram.com/cirilosantiagoperez/',
        tiktok: '',
      },
      {
        name: 'DIEGO GARZA',
        FECHADENACIMIENTO: '7 DE ABRIL DE 1988',
        RANGODEEDAD: '30-35 AÑOS',
        ALTURA: '1.87 m',
        IDIOMAS: 'ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'Yankee / Falcón / Netflix / 2019',
          'Vuelve Temprano / Dr. Pablo / Imagen TV / 2017',
          'Forgiveness / Machete / Alex Kahuam / 2018'
        ],
        image: './Actors/14.png',
        instagram: 'https://www.instagram.com/diegogarzaactor/',
      },    {
        name: 'PAUL TRUJILLO',
        FECHADENACIMIENTO: '31 DE AGOSTO 2002',
        RANGODEEDAD: '20-24 AÑOS',
        ALTURA: '1.81 m',
        IDIOMAS: 'ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'Fuego Ardiente/ Miguel/ Televisa/ 2022',
          'Bronco “La Serie” /Tommy Teen /TNT/2019',
          'La Jaula/ Santiago/ Juan Pablo Blanco / 2018'
        ],
        instagram: 'https://www.instagram.com/paultrujilloc/',
        tiktok: '',
        image: './Actors/15.png',
      },
      {
        name: 'ELLIOT ALVA',
        FECHADENACIMIENTO: '6 DE ENERO DEL 2001',
        RANGODEEDAD: '19-25 AÑOS',
        ALTURA: '1.67 m',
        IDIOMAS: 'ESPAÑOL - INGLÉS',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'Especial Leyendas Venga la alegría/Tv Azteca /2019',
          'La Academia Promocionales /Académico /Tv Azteca /2022',
          'Cuento de ciudad/ Oscar Martínez / Francisco Angiellin /2022',
          'Un panorama desde el puente/ Eddie Carbone/ Sebastián Quintanilla/ Azteca producciones /2020'
        ],
        instagram: 'https://www.instagram.com/elliotalvaa/',
        tiktok: '',
        image: './Actors/16.png',
      },
      {
        name: 'ISAAC KARRA',
        FECHADENACIMIENTO: '23 Junio 1981',
        RANGODEEDAD: '38-43 AÑOS',
        ALTURA: '1.73 m',
        IDIOMAS: 'ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'La madrastra /Guardia de seguridad/ Televisa /2023',
          'Lo que callamos las mujeres /Perito/ TV Azteca /2023',
          'Vecinos /Pollero/ Televisa /2022',
          'Oscuro deseo /Detective/ Argos /2020',
          'Hasta no verte muerte mía /Personajes diversos/ Itzamatul Kramer/ Devachan /2020'
        ],
        instagram: 'https://www.instagram.com/isaac_karra/',
        tiktok: 'https://www.tiktok.com/@isaac_karra',
        image: './Actors/17.png',
      },
      {
        name: 'ENRIQUE ROJAS',
        FECHADENACIMIENTO: '8 DE JUNIO DEL 2000',
        RANGODEEDAD: '17-21 AÑOS',
        ALTURA: '1.65 m',
        IDIOMAS: 'ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'ArtSpot Doblaje (2017-2019) Locucion y Doblaje',
          'Estudios de Actuación /Construyendo Actores 2022-2023'
        ],
        instagram: 'http://nstagram.com/soy_enriquerojas/',
        tiktok: 'https://www.tiktok.com/@enrique_rojasss?lang=es',
        image: './Actors/18.png',
      },
      {
        name: 'FABIO LEVY',
        FECHADENACIMIENTO: '30 DE ABRIL DE 1990',
        RANGODEEDAD: '30-35 AÑOS',
        ALTURA: '1.85 m',
        IDIOMAS: 'INGLÉS - ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'EL AMOR INVENCIBLE /Octavio/ Televisa 2023',
          'MINI MOCKS /Terry/ Comedy Central 2022',
          'EL ETERNO RETORNO /Alex/ Director: Ivan Cuevas 2021',
          'EL PASAJE SECRETO /Hernan/ Director: Miguel Angel Gabriel 2022'
        ],
        instagram: 'https://www.instagram.com/fabioolevy/',
        tiktok: 'https://www.tiktok.com/@estupidingus?lang=es',
        image: './Actors/19.png',
      },
      {
        name: 'EMILIANO CHINCOYA',
        FECHADENACIMIENTO: '20 DE NOVIEMBRE DEL 2004',
        RANGODEEDAD: '16-19 AÑOS',
        ALTURA: '1.78 m',
        IDIOMAS: 'INGLÉS - ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'No Fue Mi Culpa / Julio / Star+ / 2020',
          'Esta Historia Me Suena / Armando / Televisa / 2020',
          'Amor Chiquito / Paco / Martín Hardy / 2016',
          'El Viaje De Una Pelota / Emiliano / Pablo Zuack / 2020'
        ],
        instagram: 'https://www.instagram.com/emilianochincoya_oficial/',
        tiktok: 'https://www.tiktok.com/@emilianochincoya?lang=es',
        image: './Actors/20.png',
      },
      {
        name: 'NICOLÁS CHUNGA',
        FECHADENACIMIENTO: '13 DE JUNIO 2005',
        RANGODEEDAD: '16-20 AÑOS',
        ALTURA: '1.78 m',
        IDIOMAS: 'INGLÉS - ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'No Fue Mi Culpa / Julio / Star+ / 2020',
          'Esta Historia Me Suena / Armando / Televisa / 2020',
          'Amor Chiquito / Paco / Martín Hardy / 2016',
          'El Viaje De Una Pelota / Emiliano / Pablo Zuack / 2020'
        ],
        instagram: 'https://www.instagram.com/nicolaschunga_t/',
        tiktok: 'https://www.tiktok.com/@emilianochincoya?lang=es',
        image: './Actors/21.png',
      },
      {
        name: 'JORGE ORTIN',
        FECHADENACIMIENTO: '24 DE DICIEMBRE DE 1962',
        RANGODEEDAD: '55-60 AÑOS',
        ALTURA: '1.80 m',
        IDIOMAS: 'ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'Se rentan cuartos /El Chofer/ Comedy Central/ 2019-2020',
          'Por Amar Sin Ley /Licenciado MP/ Televisa /2018',
          'Más de 35 Obras de Teatro'
        ],
        instagram: 'https://www.instagram.com/jorgeortin.actor/',
        tiktok: 'https://www.tiktok.com/@jorgeortin.actor?lang=es',
        image: './Actors/22.png',
      },
      {
        name: 'KEVIN Z. PALMER',
        FECHADENACIMIENTO: '12 DE ENERO 2000',
        RANGODEEDAD: '18-23 AÑOS',
        ALTURA: '1.75 m',
        IDIOMAS: 'INGLÉS - ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'NARCOS MÉXICO S3 /Soldado /Netflix /2021',
          'ARCHIVO MUERTO /Mario/ Unicable Televisa /2021',
          'FALSA IDENTIDAD /Joven Cautivo/ Telemundo/ Netflix /2020',
          'TE LO DIJE /Hijo /Luis Mandoki /2018'
        ],
        instagram: 'https://www.instagram.com/kevinzpalmer/',
        tiktok: 'https://www.tiktok.com/@kevinz.palmer?lang=es',
        image: './Actors/23.png',
      },
      {
        name: 'EMILIO HOMS',
        FECHADENACIMIENTO: '12 DE DICIEMBRE DEL 2002',
        RANGODEEDAD: '18-23 AÑOS',
        ALTURA: '1.92 m',
        IDIOMAS: '50% INGLÉS - ESPAÑOL',
        NACIONALIDAD: 'MEXICANA',
        PROYECTOSRECIENTES: [
          'Bruno el niño pirata /Bruno/ producción independiente /2013',
          'En mi soledad te encontré /protagonista/ Valeria Grijalva/ 2023',
          'Tratamiento de dante /Narcizo/ Steve Ilchis /2024'
        ],
        instagram: 'https://www.instagram.com/emilioshoms/',
        tiktok: '',
        image: './Actors/24.png',
      }, 
        {
          name: 'Fede Porras',
          FECHADENACIMIENTO: '30 de diciembre de 2005',
          RANGODEEDAD: '18-23 años',
          ALTURA: '1.77m',
          IDIOMAS: 'Inglés-Español',
          NACIONALIDAD: 'Mexicana',
          PROYECTOSRECIENTES: [
            'Vencer la ausencia/ Adair/ Televisa/ 2022',
            'Simplemente María/ Juan Pablo niño/ Televisa/ 2016',
            'A que no me dejas/ René niño/ Televisa/ 2015',
            'Deseo deseo/ Lucas/ Eduardo M. Clorio/ 2015',
            'Km. 31 - 2/ / Rigoberto Castañeda/ 2013'
          ],
          instagram: 'https://www.instagram.com/fedeporrasjr/',
        tiktok: 'https://www.tiktok.com/@fedeporrasjr',
        image: './Actors/25.png',
        },
        {
          name: 'Raury Rolander',
          FECHADENACIMIENTO: '24 de octubre de 1988',
          RANGODEEDAD: 'N/A',
          ALTURA: '1.82m',
          IDIOMAS: 'Inglés-Español',
          NACIONALIDAD: 'Mexicana-Americana',
          PROYECTOSRECIENTES: [
            'Silvana Sin Lana/ Poncho/ Telemundo/ 2016',
            '4/20/ Manny/ Director Noah Applebaum & Teri Fruichantie/ 2020',
            'Habitacion #067/ Javier/ Micro Theater Miami'
          ],
          instagram: 'https://www.instagram.com/ivanraday/',
          tiktok: 'https://www.tiktok.com/@ivanraday?lang=es',
          image: './Actors/26.png'
        },
        {
          name: 'Lander Erasti',
          FECHADENACIMIENTO: '17 de diciembre 2016',
          RANGODEEDAD: '5-7 años',
          ALTURA: '1.10m',
          IDIOMAS: 'Español',
          NACIONALIDAD: 'Mexicana',
          PROYECTOSRECIENTES: [
            'Lorenza bebe a bordo T1/ Emiliano/ Televisa/ 2018',
            'Lorenza bebe a bordo T2/ Emiliano/ Televisa/ 2021'
          ],
          instagram: 'https://www.instagram.com/landererrastimx/',
          tiktok: '',
          image: './Actors/27.png'
        },
        {
          name: 'Paco García',
          FECHADENACIMIENTO: '29 de julio del 2001',
          RANGODEEDAD: '18-24 años',
          ALTURA: '1.70m',
          IDIOMAS: 'Español',
          NACIONALIDAD: 'Mexicana',
          PROYECTOSRECIENTES: [
            'Como dice el dicho. Cap 117/ Javier/ Televisa/ 2023',
            'Rutas de la vida/ Nacho/ Tv Azteca/ 2022',
            'No vayas a clase mañana/ Emilio/ Diego Barragan/ 2020',
            'Mi chica purpura/ Mateo/ Francisco Cristoforo/ 2024'
          ],
          instagram: 'https://www.instagram.com/pacogarci.a/',
          tiktok: 'https://www.tiktok.com/@pacogarci.a?lang=es',
          image: './Actors/28.png'
        },
        {
          name: 'Ricardo Uscanga',
          FECHADENACIMIENTO: '24 de abril de 2012',
          RANGODEEDAD: '9-11 años',
          ALTURA: '1.28m',
          IDIOMAS: 'Español',
          NACIONALIDAD: 'Mexicana',
          PROYECTOSRECIENTES: [
            'Apatzingan/ Personaje: Ramiro/ Director: Rodrigo Quintero/ 2019',
            'La cabeza de Joaquin Murrieta/ Personaje: Quino/ Director: David Pablos/ 2020',
            'Lluvia/ Personaje: Niño/ Director: Rodrigo Garcia Sainz/ 2021'
          ],
          instagram: 'https://www.instagram.com/ricardouscangadelaluz/',
          tiktok: '',
          image: './Actors/29.png'
        },
        {
          name: 'Marco More',
          FECHADENACIMIENTO: '9 de enero de 1987',
          RANGODEEDAD: '30-36 años',
          ALTURA: '1.71m',
          IDIOMAS: 'Inglés-Español',
          NACIONALIDAD: 'Mexicana',
          PROYECTOSRECIENTES: [
            'Yo soyYo 2/ Mauro/ Canal 11/ 2018',
            'Entre Chavos/ Conductor/ TV Azteca',
            'Wicked/ 2014',
            'Despertando en Primavera/ 2012'
          ],
          instagram: 'https://www.instagram.com/marcomoreoficial/',
          tiktok: 'https://www.tiktok.com/@marcomoreoficial',
          image: './Actors/30.png'
        },
        {
          name: 'Mariano Linares',
          FECHADENACIMIENTO: '28 de diciembre de 1988',
          RANGODEEDAD: '30-36 años',
          ALTURA: '1.77m',
          IDIOMAS: 'Inglés-Español',
          NACIONALIDAD: 'Mexicana',
          PROYECTOSRECIENTES: [
            'Mousetrap/ Paravicini/ Juan Carlos Turell, Jorge Romero y Raul Casillas',
            'Don Juan Tenorio/ Butarelli/ Jorge Romeeo',
            'Geschichte einer Tigerin/ Asistente de Dirección/ Homan Wesa'
          ],
          instagram: 'https://www.instagram.com/marianolinaresr/',
          tiktok: '',
          image: './Actors/31.png'
        },
        {
          name: 'Mariano Zabalza',
          FECHADENACIMIENTO: '3 de octubre de 1994',
          RANGODEEDAD: '25-29 años',
          ALTURA: '1.70m',
          IDIOMAS: 'Español',
          NACIONALIDAD: 'Argentina',
          PROYECTOSRECIENTES: [
            'O11CE/ Camilo Montero/ Disney/ 2017 y 2018 (primera y segunda temporada)',
            'Kallys Mashup/ Pablo Vanbrincken/ Nickelodeon/ 2018 y 2019 (primera y segunda temporada)'
          ],
          instagram: 'https://www.instagram.com/marianozabalza/',
          tiktok: 'https://www.tiktok.com/@marianozabalza',
          image: './Actors/32.png'
        },
        {
          name: 'Moisés Araiza',
          FECHADENACIMIENTO: '26 de abril de 1990',
          RANGODEEDAD: '30-35 años',
          ALTURA: '1.88m',
          IDIOMAS: 'Español-Inglés',
          NACIONALIDAD: 'Mexicana',
          PROYECTOSRECIENTES: [
            'El show de terror de Rocky/ Brad/ Dirección Rafa Maza, Producción Jaime Calpe y Rafa Maza/ 2022',
            'Grinder el musical/ Alex/ Dirección Salvador Núñez, Producción Iván Urcid y Jaime Calpe/ 2022',
            'Viajedegeneración/ Gansito/ Dirección Alejandro Gamboa, Producción Pablo Martínez Velazco, Jorge Levy, Videocine/ 2012',
            'Esta historia me suena/ Genoveva Martínez/ Televisa/ 2018/2021'
          ],
          instagram: 'https://www.instagram.com/moyaraiza/',
          tiktok: 'https://www.tiktok.com/@moyaraiza',
          image: './Actors/33.png'
        },
        {
          name: 'Omar Yubeili',
          FECHADENACIMIENTO: '2 de abril 1996',
          RANGODEEDAD: '20-26 años',
          ALTURA: '1.72m',
          IDIOMAS: 'Inglés-Español',
          NACIONALIDAD: 'Mexicana',
          PROYECTOSRECIENTES: [
            'De que manera Te Olvido/ Ulises/ Dir. Chava Cartas/ 2023',
            'Madre solo hay 2, 2da y 3era temporada/ Netflix/ 2021-2022',
            'Las hijas de la Luna/ Sebastian/ Televisa/ 2018',
            'El Bien amado/ Vladimir/ Televisa/ 2017'
          ],
          instagram: 'https://www.instagram.com/omaryubeili/',
          tiktok: 'https://www.tiktok.com/@omaryubeili',
          image: './Actors/34.png'
        },
        {
          name: 'Ramón Valdéz',
          FECHADENACIMIENTO: '19 de diciembre del 1980',
          RANGODEEDAD: '40-45 años',
          ALTURA: '1.70m',
          IDIOMAS: 'Español',
          NACIONALIDAD: 'Mexicana',
          PROYECTOSRECIENTES: [
            'La Doble Moral/ El Danzon/ Raquel Rico/ Serie A2D3/ Canal 62 USA/ Bandido Latino',
            'La Ruta Blanca/ Cadena Tres/ J. Enriquez'
          ],
          instagram: 'https://www.instagram.com/ramonvaldez19/',
          tiktok: 'https://www.tiktok.com/@ramonvaldez1980?lang=es',
          image: './Actors/35.png'
        },
        {
          name: 'Ricardo Gomez',
          FECHADENACIMIENTO: '27 de octubre del 2002',
          RANGODEEDAD: '19-23 años',
          ALTURA: '1.74m',
          IDIOMAS: '',
          NACIONALIDAD: 'Mexicana',
          PROYECTOSRECIENTES: [
            'Vencer el pasado/ Marco/ Televisa/ 2021',
            'Falsa Identidad/ Abel/ Telemundo/ Netflix/ 2021',
            'Mujeres Asesinas/ Memo/ Telemundo/ Vix/ 2022'
          ],
          instagram: 'https://www.instagram.com/ricardomanuelgr/',
          tiktok: 'https://www.tiktok.com/@ricardomanuelgr',
          image: './Actors/36.png'
        },
        {
          name: 'Luis Jamez',
          FECHADENACIMIENTO: '18 de octubre 1988',
          RANGODEEDAD: '30-36 años',
          ALTURA: '1.70m',
          IDIOMAS: 'Inglés-Español',
          NACIONALIDAD: 'Mexicana',
          PROYECTOSRECIENTES: [
            'Flamable/ Antagónico principal/ Pablo Grillone/ 2012',
            'Espectáculos en la Riviera Maya/ Actor, bailarín y acróbata aéreo/ 2013-2015',
            'Animal...es/ Stage Manager/ Beto Castillo/ El muro/ 2011/2012'
          ],
          instagram: 'https://www.instagram.com/luisjamezpdc/',
          tiktok: 'https://www.tiktok.com/@luisjamez?lang=es',
          image: './Actors/37.png'
        }
    ];
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % actors.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + actors.length) % actors.length);
    };
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 5000); // Change every 5 seconds
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  
    return (
      <div className='w-full md:h-screen max-md:h-[150vh] relative max-md:flex max-md:flex-col' id='Actors'>
        <h1 className='text-[3em] text-red-600 absolute top-[80px] left-1/2 transform -translate-x-1/2'>
          Actors
        </h1>
        <div className='w-[40%] h-[100%] absolute items-start top-1/2 left-0 transform -translate-y-1/2 transition-transform duration-3000 ease-in-out max-md:relative max-md:w-full max-md:h-[60%]'>
          <img
            className='w-[100%] h-[100%]  object-top object-cover max-md:w-full max-md:h-full'
            src={actors[currentIndex].image}
            alt={actors[currentIndex].name}
          />
        </div>
  
        {/* Actor Info */}
        <div
          className='w-[60%] h-[90%] absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col md:justify-center items-start transition-opacity duration-1500 ease-in-out p-10 max-md:relative max-md:w-full max-md:h-[50%] max-md:p-4'
          style={{ opacity: 1 }}
        >
          <h2 className='text-[2em] uppercase text-red-600 max-md:text-[2em]'>{actors[currentIndex].name}</h2>
          <p>Fecha de nacimiento: {actors[currentIndex].FECHADENACIMIENTO}</p>
          <p>Rango de edad: {actors[currentIndex].RANGODEEDAD}</p>
          <p>Altura: {actors[currentIndex].ALTURA}</p>
          <p>Idiomas: {actors[currentIndex].IDIOMAS}</p>
          <p>Nacionalidad: {actors[currentIndex].NACIONALIDAD}</p>
          <p>Proyectos recientes:</p>
          <ul>
            {actors[currentIndex].PROYECTOSRECIENTES.map((proyecto, i) => (
              <li key={i}>{proyecto}</li>
            ))}
          </ul>
  
         <div className='flex items-center justify-evenly m-3'>
          {actors[currentIndex].instagram && (
            <a href={actors[currentIndex].instagram} target='_blank' rel='noopener noreferrer'>
              <Icon className='text-[1.5em] mr-3' icon="skill-icons:instagram" />
            </a>
          )}
          {actors[currentIndex].tiktok && (
            <a href={actors[currentIndex].tiktok} target='_blank' rel='noopener noreferrer'>
              <Icon className='text-[1.5em] ml-3' icon="logos:tiktok-icon" />
            </a>
          )}
        </div>
        </div>
  
        {/* Navigation Buttons */}
        <button
          className='absolute  md:top-1/2  md:-translate-y-1/2 max-md:left-0 bg-red-600 text-white px-2 py-2 max-md:top-[40%] rounded-tr-full rounded-br-full md:text-[1.1em]'
          onClick={prevSlide}
          
        >
          Prev
        </button>
        <button
          className='absolute md:top-1/2  md:-translate-y-1/2  transform  right-0 bg-red-600 text-white px-2 py-2 max-md:top-[40%] rounded-tl-full rounded-bl-full md:text-[1.1em]'
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default ActorSlider;