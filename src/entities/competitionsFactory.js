export default class CompetitionFactory {
    static emptyCompetitionData(){
        return {
            'punteo':0,
            'logros':{
                "escribe":0,
                "comparte":0,
                "invita":0,
                "compite":0
            }   
        }
    }

    static Questions(edad,idcompetition){
        let data = [];
        switch(idcompetition){
            case "sexting":{
                data = CompetitionFactory.sexting(0);
                break;
            }
            case "juegos":{
                data = CompetitionFactory.juegos(0);
                break;
            }
            case "publicidad":{
                data = CompetitionFactory.publicidad(0);
                break;
            }
            case "desnudos":{
                data = CompetitionFactory.desnudos(0);
                break;
            }
            case "sexual":{
                data = CompetitionFactory.sexual(0);
                break;
            }
            case "exhibicionismo":{
                data = CompetitionFactory.exhibicionismo(0);
                break;
            }
            case "top5apps":{
                data = CompetitionFactory.top5apps(0);
                break;
            }
            case "temolesta":{
                data = CompetitionFactory.temolesta(0);
                break;
            }

            default:{
                data = [];
                break;
            }
        }
        return data;
    }

    static sexting(edad){
        let indice = 0;
        if(edad>12){
            indice = 1;
        }
        const preguntas = [
            [
                {
                    "texto":"¿Si una persona extraña me escribe en mis redes sociales y pide mucha información mía, sin conocerme, puede ser un posible agreso",
                    "ops":[
                        {label:"Si"},
                        {label:"No"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Si alguien que estoy empezando a conocer por redes sociales y para conquistarme me pide mentirle a mi familia, ¿podría estar en peligro",
                    "ops":[
                        {label:"Si"},
                        {label:"No"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Si yo envío por redes sociales fotografías mías con poca ropa o sin ropa, es peligroso",
                    "ops":[
                        {label:"Si"},
                        {label:"No"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Cuándo yo comparto una fotografía en redes sociales y después la borro, nadie más la podrá volver a verla",
                    "ops":[
                        {label:"Sí, la pueden volver a ver, pudieron tomarle captura de pantalla"},
                        {label:"No, si yo la borro nadie la puede volver ver"},
                        {label:"Sí, aunque yo la borre se vuelve a publicar automáticamente en mis redes"}
                    ],
                    "valid":[1]
                },
                {
                    "texto":"Hay en las redes sociales personas que fingen ser amigables y quieren ganarse mi confianza para hacerme daño",
                    "ops":[
                        {label:"Verdadero"},
                        {label:"Falso"}
                    ],
                    "valid":[0]
                }
            ] 
        ]
        return preguntas[indice];
    }

    static juegos(edad){
        let indice = 0;
        if(edad>12){
            indice = 1;
        }
        const preguntas = [
            [
                {
                    "texto":"Conversar con extraños cuando juego en línea es peligroso para mí",
                    "ops":[
                        {label:"Si"},
                        {label:"No"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Si una persona extraña con que juego en línea me pide mis datos personales, es buena idea dárselos",
                    "ops":[
                        {label:"Si"},
                        {label:"No, porque puede ser peligroso"}
                    ],
                    "valid":[1]
                },
                {
                    "texto":"Si un jugador en línea me pide fotografías personales, es bueno compartirlas",
                    "ops":[
                        {label:"Si"},
                        {label:"No"}
                    ],
                    "valid":[1]
                },
                {
                    "texto":"Es importante contarle a mis padres o a un adulto de mi confianza, cuando un extraño con quien juego en línea me pide mis datos personales",
                    "ops":[
                        {label:"Sí, para que me protejan"},
                        {label:"No, es mejor ocultarlo"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Es peligroso compartir con extraños",
                    "ops":[
                        {label:"Verdadero, porque podrían utilizarla para lastimarme"},
                        {label:"Falso, porque si la comparto tendré más amigos con quien jugar"}
                    ],
                    "valid":[0]
                }
            ]
        ]
        return preguntas[indice];
    }

    static publicidad(edad){
        let indice = 0;
        if(edad>12){
            indice = 1;
        }
        const preguntas = [
            [
                {
                    "texto":"Debo aprender que dentro del mundo virtual debo actuar con responsabilidad",
                    "ops":[
                        {label:"Falso"},
                        {label:"Verdadero"}
                    ],
                    "valid":[1]
                },
                {
                    "texto":"Cómo se llaman las aplicaciones que me puede proteger del acceso a cierta información peligrosa o para adultos, como páginas web, imágenes, videos, etc.",
                    "ops":[
                        {label:"Control parental"},
                        {label:"Anti-peligros"},
                        {label:"Cuidados virtuales"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"El control parental solo se puede colocar en los celulares",
                    "ops":[
                        {label:"Falso, también en computadoras, tabletas y otros dispositivos"},
                        {label:"Verdadero, solo funciona en los celulares"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Existen configuraciones de privacidad para los perfiles en las redes sociales ¿Para qué sirven?",
                    "ops":[
                        {label:"Para escoger cuidadosamente a las personas que pueden ver mi perfil"},
                        {label:"Para conseguir dinero y hacer amigos"},
                        {label:"Para perder amigos"}

                    ],
                    "valid":[0]
                },
                {
                    "texto":"Para que mis publicaciones estén un poco más seguras en las redes sociales ¿Qué puedo hacer",
                    "ops":[
                        {label:"Agregar a cualquier persona como amigo"},
                        {label:"Seguir a cualquier persona en mis redes"},
                        {label:"Agregar o seguir a personas conocidas y de confianza en mis redes"}
                    ],
                    "valid":[0]
                }
            ] 
        ]
        return preguntas[indice];
    }

    static desnudos(edad){
      return [
            {
                "texto":"Si alguien me acosa en mis redes sociales puedo denunciar",
                "ops":[
                    {label:"Si"},
                    {label:"No"}
                ],
                "valid":[0]
            },
            {
                "texto":"Si alguien me acosa en mis redes sociales debo tomar capturas de pantalla",
                "ops":[
                    {label:"Sí, para que me sirva de prueba"},
                    {label:"No, no me servirá para nada"},
                    {label:"No, mejor borro las conversaciones"}
                ],
                "valid":[0]
            }
            , 
            {
                "texto":"A quién debo llamar para denunciar el acoso en mis redes sociales",
                "ops":[
                    {label:"Al Ministerio Público"},
                    {label:"A la Policía Nacional Civil"},
                    {label:"Ambas son correctas"}
                ],
                "valid":[2]
            },  
            {
                "texto":"Cuál es el número de denuncia de la Policía Nacional Civil",
                "ops":[
                    {label:"110"},
                    {label:"115"},
                    {label:"911"}
                ],
                "valid":[1]
            },
            {
                "texto":"Cuándo haga una denuncia por acoso debo llevar mi dispositivo electrónico y responder las preguntas que me hagan las autoridades para investigar",
                "ops":[
                    {label:"Verdadero"},
                    {label:"Falso"}
                ],
                "valid":[1]
            }   
        ];

    }

    static sexual(edad){
        let indice = 0;
        if(edad>12){
            indice = 1;
        }
        const preguntas = [
            [
                {
                    "texto":"Alguien en internet te ha solicitado que le compartas fotos o videos tuyos",
                    "ops":[
                        {label:"Si"},
                        {label:"No"},
                        {label:"A veces"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Sientes que alguien que te habla por internet quiere hacerte daño",
                    "ops":[
                        {label:"Si"},
                        {label:"No"},
                        {label:"A veces"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Sabías que puedes pedir ayuda si alguien te transmite miedo cuando te conectas a la red de internet",
                    "ops":[
                        {label:"Si"},
                        {label:"No"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Podrías contarle a tus papás o algún adulto cuando alguien te pida que le envíes fotografías sin ropa",
                    "ops":[
                        {label:"Si"},
                        {label:"No"},
                        {label:"Me da miedo hablar"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Sabías que si te piden fotografías o videos sin ropa es un delito y lo puedes denunciar",
                    "ops":[
                        {label:"Si"},
                        {label:"No"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Sabías que un adulto puede acompañarte y ayudarte cuando necesites denunciar",
                    "ops":[
                        {label:"Si"},
                        {label:"No"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Te vas asegurar de no conversar con desconocidos por internet",
                    "ops":[
                        {label:"Si"},
                        {label:"No"}
                    ],
                    "valid":[0]
                }
            ],
            [
            {
                "texto":"Alguna persona con quien te comunicas por las redes te ha solicitado que le compartas fotos, videos tuyos ",
                "ops":[
                    {label:"Si"},
                    {label:"No"},
                    {label:"A veces"}
                ],
                "valid":[0]
            },
            {
                "texto":"Te sientes acosado o que alguien atenta contra tu seguridad y dignidad",
                "ops":[
                    {label:"Si"},
                    {label:"No"},
                    {label:"A veces"}
                ],
                "valid":[0]
            }
            , 
            {
                "texto":"Sabías que puedes denunciar ante las autoridades a las personas que te acosan cuando te conectas a la red ",
                "ops":[
                    {label:"Si"},
                    {label:"No"}
                ],
                "valid":[1]
            },  
            {
                "texto":"Quiénes deben cuidar que no se de este fenómeno",
                "ops":[
                    {label:"Padres de familia"},
                    {label:"Autoridades de gobierno"},
                    {label:"Docentes académicos"},
                    {label:"Periódico"}
                ],
                "valid":[0]
            },
            {
                "texto":"Podrías contarle a tus papás o algún adulto cuando algún amigo te pida fotografías sin ropa para que ellos sepan cómo ayudarte",
                "ops":[
                    {label:"Si"},
                    {label:"No"},
                    {label:"Me da miedo hablar"}
                ],
                "valid":[0]
            },  
            {
                "texto":"Sabías que un adulto puede acompañarte a las oficinas de las autoridades para denunciar a quien te pide información personal ",
                "ops":[
                    {label:"Si"},
                    {label:"No"}
                ],
                "valid":[0]
            },
            {
                "texto":"Te vas asegurar de que tus cuentas estén privadas para evitar comunicarte con desconocidos ",
                "ops":[
                    {label:"Si"},
                    {label:"No"}
                ],
                "valid":[0]
            },  
            {
                "texto":"Vas hablar con un adulto, a llamar a la policía o asistir a las oficinas del Ministerio Público si alguien te presiona para que le compartas fotografías y video sin ropa ",
                "ops":[
                    {label:"Buscaré ayuda con un adulto"},
                    {label:" Buscaré ayuda de la policía"},
                    {label:"Buscaré ayuda con el Ministerio Público"},
                    {label:"Me da miedo denunciar"}
                ],
                "valid":[0]
            }   
            ]
        ]
        return preguntas[indice];
    }

    static exhibicionismo(edad){
        return [
            {
                "texto":"Cuál de las siguientes palabras es la definición más correcta de sexting",
                "ops":[
                    {label:"Pornografía"},
                    {label:"Violencia"},
                    {label:"Acoso Sexual"},
                    {label:"Auto denigración"}
                ],
                "valid":[1]
            },
            {
                "texto":"Qué factores considera usted que promueve más el sexting y bullying",
                "ops":[
                    {label:"Antivalores"},
                    {label:"Medios de comunicación"},
                    {label:"Globalización"},
                    {label:"Falta de comunicación familiar"}
                ],
                "valid":[1]
            }
            , 
            {
                "texto":"Por qué medio de comunicación cree usted que se difunda más el sexting y bullying",
                "ops":[
                    {label:"Teléfono"},
                    {label:"Internet"},
                    {label:"Radio"},
                    {label:"Periódico"}
                ],
                "valid":[1]
            },  
            {
                "texto":"Quiénes deben cuidar que no se de este fenómeno",
                "ops":[
                    {label:"Padres de familia"},
                    {label:"Autoridades de gobierno"},
                    {label:"Docentes académicos"},
                    {label:"Periódico"}
                ],
                "valid":[1]
            },
            {
                "texto":"Cómo cree que se manifiesta el sexting",
                "ops":[
                    {label:"Por agresiones físicas"},
                    {label:"Acoso sexual"},
                    {label:"Imágenes pornográficas"},
                    {label:"Por agresiones orales"}
                ],
                "valid":[1]
            },  
            {
                "texto":"Cómo podría usted combatir con este problema en la sociedad",
                "ops":[
                    {label:"Apoyo humanitario"},
                    {label:"Dialogando"},
                    {label:"Matando gente"}        
                ],
                "valid":[1]
            }   
        ]
    }

    static top5apps(edad){
        let indice = 0;
        if(edad>12){
            indice = 1;
        }
        const preguntas = [
            [
                {
                    "texto":"Crees tú  que si aprendemos a utilizar bien las redes sociales  con precaución y responsabilidad traerá grandes beneficios",
                    "ops":[
                        {label:"Si"},
                        {label:"No"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Su icono es un fantasma blanco con fondo amarillo, las fotografías que subo duran pocos segundos y desaparecen en 24 horas, sin embargo, alguien puede tomar capturas de pantallas para hacerme daño",
                    "ops":[
                        {label:"Snapchat"},
                        {label:"Facebook"},
                        {label:"Instagram"},
                        {label:"Twitter"},
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Cómo se le llama a la acción que hacen las personas malas al crear perfiles falsos para ganarse la confianza de alguien",
                    "ops":[
                        {label:"Seducción en linea (grooming)"},
                        {label:"Engaño virtual"},
                        {label:"Red de maldad"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Si comparto una imagen en internet, se quedará para siempre en la web aunque la elimine.",
                    "ops":[
                        {label:"Si"},
                        {label:"No"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Cuál sería un buen consejo para el uso de las redes sociales",
                    "ops":[
                        {label:"Evitar agregar a personas desconocidas"},
                        {label:"Abrir perfiles falsos"},
                        {label:"Burlarme de las personas en las redes sociales"}
                    ],
                    "valid":[0]
                }
            ]
        ]
        return preguntas[indice];
    }

    static temolesta(edad){
        let indice = 0;
        if(edad>12){
            indice = 1;
        }
        const preguntas = [
            [
                {
                    "texto":"Es seguro aceptar en mis redes sociales a desconocidos o a personas que no estoy seguro de conocer",
                    "ops":[
                        {label:"No, no es seguro"},
                        {label:"Sí, si es seguro"},
                    ],
                    "valid":[0]
                },
                {
                    "texto":"A quiénes es recomendable que les cuente o que les pida ayuda si alguien me acosa o me molesta en mis redes sociales",
                    "ops":[
                        {label:"A mis padres y amigos"},
                        {label:"Mejor me quedo en silencio"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Qué debo hacer para protegerme de alguien que me molesta en mis redes o aplicaciones",
                    "ops":[
                        {label:"Reportarlo y bloquearlo"},
                        {label:"Llorar y no decir nada"},
                        {label:"Asustarme y seguirle hablando"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Sabías que existen riesgos al navegar en el internet sin precaución",
                    "ops":[
                        {label:"Sí, lo sé"},
                        {label:"No, no lo sé"}
                    ],
                    "valid":[0]
                },
                {
                    "texto":"Crees que es importante hablar y pedir ayuda a un adulto cuando te sientas en riesgo navegando en el internet",
                    "ops":[
                        {label:"Si"},
                        {label:"No"},
                        {label:"Nunca"},
                    ],
                    "valid":[0]
                }
            ]
        ]
        return preguntas[indice];
    }



}