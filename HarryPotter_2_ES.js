async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

Harry Potter Y La Camara Secreta (Chapter 2)

En una jaula
[En las nubes durante la puesta de sol, vemos el escudo de Warner Bros. Pictures moviéndose hacia la pantalla y gira fuera de la toma. Luego, el título de la película en letras doradas se acerca lentamente a la cámara; es una tranquila tarde de verano en Surrey. Harry Potter está en su habitación mirando el libro de imágenes que Rubeus Hagrid le dio al final de su primer año en Hogwarts; mira la foto de él cuando era un bebé con sus padres, luego pasa la página para ver una foto de él con sus amigos más cercanos, Ron Weasley y Hermione Granger; luego escucha a su lechuza Hedwig gorjeando y ululando en su jaula.]
Harry: No puedo dejarte salir, Hedwig. No puedo usar magia fuera de la escuela. [Hedwig mordisquea su mechón, chillando en voz alta] Además, si el tío Vernon ...
Vernon: [enojado desde abajo] ¡Harry Potter!
Harry: [mira hacia abajo y luego mira a Hedwig antes de cerrar su libro y bajar] Ahora lo has hecho.
[En la cocina, Petunia está preparando un pastel cuando Harry entra.]

Petunia: Está ahí, Vernon.
[Harry entra en la sala, donde el tío Vernon está vistiendo a Dudley.]

Vernon: Te lo advierto. Si no puedes controlar a ese maldito pájaro, tendrá que irse.


Harry: Pero ella está aburrida. Si pudiera dejarla salir por ... una o dos horas.


Vernon: [se ríe] ¿Entonces puedes enviar mensajes secretos a tus pequeños amigos extraños? No señor.
Harry: Pero no he recibido ningún mensaje de ninguno de mis amigos. Ni uno. Todo el verano.
Dudley: ¿Quién querría ser tu amigo? [golpea a Harry con dureza]
Vernon: Creo que estarías un poco más agradecido. Te criamos desde que eras un bebé, te dimos la comida de nuestra mesa, incluso te permitimos tener el segundo dormitorio de Dudley, simplemente por la bondad de nuestro corazón.
Petunia: [a Dudley] Ahora no, patán. Es para cuando lleguen los masones.
Vernon: Lo que debería ser en cualquier momento. [hace un gesto para que su familia pase a la sala de estar] Ahora, repasemos nuestro horario una vez más, ¿de acuerdo? Petunia, cuando lleguen los masones, estarás ...?


Petunia: En el salón, esperando para recibirlos gentilmente en nuestra casa.
Vernon: Bien. Y, Dudley, ¿serás ...?
Dudley: Estaré esperando para abrir la puerta.
Vernon: Excelente. [los tres se vuelven hacia Harry con miradas de desprecio] ¿Y tú ...?
Harry: Estaré en mi habitación, sin hacer ruido y fingiendo que no existo.
Vernon: Demasiado bien. Con suerte, este podría ser el día en que haga el mayor negocio de mi carrera, y no lo arruinarás.
Advertencia de Dobby
[Harry sube las escaleras cuando suena el timbre.]

Vernon: [desde abajo] ¡Sr. y Sra. Mason! ¡Entra!
[Harry escucha a alguien riendo locamente en su habitación. Abre la puerta para encontrar a un elfo doméstico llamado Dobby brincando en su cama.]

Dobby: ¡Harry Potter! ¡Qué honor es! [Harry cierra la puerta.]
Harry: ¿Quién eres?
Dobby: Dobby señor, Dobby el elfo doméstico.
Harry: No quiero ser descortés ni nada, pero este no es un buen momento para tener un elfo doméstico en mi habitación.
Dobby: ¡Oh, sí, señor! ¡Dobby lo entiende! Es solo que, Dobby ha venido a decirle. Es difícil, señor. Dobby se pregunta por dónde empezar.
Harry: ¿Por qué no te sientas?
Dobby: ¿S-siéntate? ¿S-sentarse, sentarse? [pronto comienza a llorar]
Harry: ¡Dobby, ssh! ¡Lo siento! [Dobby llora más fuerte] No quise ofenderte ni nada.


Dobby: [deja de llorar cuando escucha esa palabra] ¿Ofender a Dobby? Dobby ha oído hablar de su grandeza, señor, pero nunca un mago le ha pedido que se siente como un igual.
Harry: Entonces no puedes haber conocido a muchos magos decentes.
Dobby: No, no lo he hecho. Fue horrible decir eso. [luego se golpea la cabeza en el cajón de la cómoda repetidamente] ¡Malo Dobby! ¡Mal Dobby! ¡Mal Dobby!
Harry: ¡Detente, Dobby! Dobby, shh! ¡Dobby, por favor detente!
[Desde abajo, en la sala de estar, los Dursley y los Masons están bebiendo un poco de vino mientras escuchan los golpes desde arriba.]

Vernon: Oh, eso no importa. ¡Es solo el ... gato! [se ríe ligeramente, mientras el Sr. y la Sra. Mason miran, convencidos y preocupados al mismo tiempo.]
Dobby: [aún golpeándose la cabeza con el cajón] ¡Malo Dobby!
Harry: ¡Dobby, detente! Por favor quédate quieto. ¿Estás bien?
Dobby: Dobby tuvo que castigarse a sí mismo, señor. [acerca un taburete a Harry] Dobby casi habla mal de su familia, señor.
Harry: ¿Tu familia?
Dobby: La familia de magos a la que sirve Dobby, señor. [se levanta y se sienta en el taburete] Dobby está destinado a servir a una familia para siempre. Si supieran que Dobby estaba aquí ... [se estremece] Pero Dobby tenía que venir. Dobby tiene que proteger a Harry Potter. Para advertirle. Harry Potter no debe volver al Colegio Hogwarts de Magia y Hechicería este año. [Harry lo mira con sorpresa] Hay un complot, un complot para hacer que sucedan las cosas más terribles.
Harry: ¿Qué cosas terribles? ¿Quién los está tramando?


Dobby: [tratando de resistirse a sí mismo para no decir algo] ¡Oh, él! ¡No puedo decirlo!
Harry: Está bien, lo entiendo. No se puede decir.
Dobby: No me hagas hablar. L-- [Dobby se sube al escritorio, agarra la lámpara y se golpea con ella.] ¡Malo Dobby!
Harry: ¿Dobby? Dobby, baja la lámpara. [sigue golpeándose, en la sala de estar, Vernon todavía está conversando con los masones.]
Vernon: Entonces, cuando llegan al noveno hoyo ... [Se escucha el grito de Dobby, Vernon lo escucha arriba mientras parece sospechoso.]
Harry: [tratando de quitarle la lámpara a Dobby] ¡Dame la lámpara! [Dobby sigue esforzándose hasta que Harry oye a Vernon subir las escaleras] ¡Dobby, detente! [finalmente se lo quita a Dobby, agarra sus harapos, lo esconde en el armario y cierra la puerta] ¡Entra y cállate!
Vernon: [abriendo la puerta, pisando fuerte en la habitación y mirando a Harry] ¡¿Qué diablos estás haciendo aquí ?!


Harry: Solo estaba ... [Dobby abre lentamente la puerta del armario; Harry lo empuja para cerrarlo]
Vernon: Acabas de arruinar el remate de mi chiste de golfista japonés.
Harry: Lo siento. [cierra la puerta del armario de nuevo]
Vernon: [mira hacia la puerta del armario, sin darse cuenta de la presencia de Dobby, luego levanta el dedo y vuelve los ojos a Harry] Un sonido más, y desearás no haber nacido nunca, muchacho. . [ve que la puerta del armario se abre de nuevo] Y arregla esa puerta.
Harry: [cerrando la puerta de nuevo] Sí, señor. [Vernon mira a Harry mientras sale de la habitación, cerrando la puerta; sin Vernon, Harry abre la puerta del armario para dejar salir a Dobby] ¿Ves por qué tengo que volver? [Dobby se quita un calcetín de la oreja] No pertenezco aquí; Pertenezco a tu mundo, a Hogwarts. [Dobby huele el calcetín, lo tira a un lado y se vuelve hacia Harry] Es el único lugar donde tengo amigos.
Rescate de coches
[Petunia y Dudley miran como Vernon perfora rejas en la ventana del dormitorio de Harry.]

Vernon: [después de apretar las rejas, mira a Harry, quien lo mira a través de la ventana] Nunca volverás a esa escuela. Nunca volverás a ver a esos extraños amigos tuyos. ¡Nunca!
[Más tarde esa noche, mientras Harry está dormido en la cama, escucha lo que suena como el motor de un auto afuera. Al despertar y ponerse las gafas, se levanta de la cama y camina hacia la ventana. Mirando por la ventana, ve un objeto extraño moviéndose por el cielo. Mientras mira, el objeto parece ser una estrella fugaz, antes de convertirse en dos rayos de luz. Un automóvil Ford Anglia turquesa vuela hacia la ventana del dormitorio de Harry, luego gira a la derecha mientras Harry y Hedwig observan en silencio. En el Ford Anglia está Ron, acompañado por sus gemelos mayores, Fred y George.]



Ron: [mirando a Harry a través de los barrotes de su ventana] Hola, Harry.
Harry: [sorprendido de ver a sus amigos] Ron, Fred, George, ¿qué están haciendo aquí?
Ron: Rescatándote, por supuesto. Ahora ven. ¡Consigue tu baúl!
La madriguera
Fred: [caminando hacia la ventana y abriéndola para abrir la puerta] Vamos. De acuerdo, vamos. ¡Shhh! ¡Shhh! [comprobando que la costa está despejada y luego haciendo señas a los demás para que entren] Está bien, vamos.
Al Callejón Diagon
[Sra. Weasley toma una olla de la repisa de la chimenea.]
Flourish and Blotts
[Una copia de la autobiografía de Gilderoy Lockhart "Magical Me" está en exhibición cuando Harry y Hermione entran a la tienda.]
Volando a Hogwarts
[El Ford Anglia está estacionado en la estación de King's Cross como mucha gente pasa junto a él. En la estación, Harry, Ron, Ginny, Percy, Fred, George, el Sr. y la Sra. Weasley están desesperados por tomar el Expreso de Hogwarts antes de que salga.]

Sr. Weasley: 10:58. ¡Vamos vamos!
Sra. Weasley: ¡Train se marchará en cualquier momento!
Sr. Weasley: Fred, George, Percy, ¡tú primero! [Fred empuja su carrito a través de la barrera hasta la Plataforma 9¾, seguido por Percy y George]


Sra. Weasley: [palmeando a Ginny en la espalda] Está bien. [Ginny empuja su carrito y corre a través de la pared; El Sr. y la Sra. Weasley siguen]
Sr. Weasley: Después de ti, querido. [Señora. Weasley desaparece a través de la pared; El Sr. Weasley entra inmediatamente después de ella]
Sra. Weasley: [encontrándose con Ginny mientras se encuentra junto al Expreso de Hogwarts, que está a punto de comenzar] Vamos, Ginny. Te conseguiremos un asiento. ¡Prisa! [los tres corren hacia el tren; afuera, solo quedan Harry y Ron]
Harry: [volviéndose hacia Ron] Vamos.
[Ron asiente; luego los dos muchachos empujan sus carros directamente hacia la pared. Sin embargo, en lugar de atravesar la pared, Harry inexplicablemente choca contra ella y se cae; Ron pierde el control de su carrito y también se cae. Un agente de la estación, el mismo hombre que Harry vio hace un año, se da cuenta mientras habla con una mujer, y se acerca a Harry y Ron cuando se ponen de pie, gimiendo por sus leves heridas.]

Agente de la estación: ¡Oy! ¿Qué creen ustedes dos que están haciendo?
Harry: Lo siento. Lo-perdido control del carro. [el agente menea la cabeza y se aleja; Harry mira a Ron] ¿Por qué no podemos pasar?
Ron: No lo se. [tocando la pared con la mano, descubriendo que los ladrillos se han solidificado] La puerta de entrada está sellada por alguna razón. [Harry toca la pared para ver que es completamente sólida]
Harry: [escuchando la campana de un reloj, él y Ron miran un reloj cercano que muestra la hora 11:00] El tren sale exactamente a las 11:00. ¡Nos lo perdimos!
Ron: [mirando el reloj con horror, luego volviéndose hacia Harry] Harry ... si no podemos pasar, quizás mamá y papá no puedan regresar.
Harry: [tratando de decidir qué hacer con su dilema] Tal vez deberíamos ir a esperar junto al auto.
Ron: [el sonido de estas palabras de repente le da una idea] El auto ... [Harry lo mira, preguntándose qué es lo que tiene en mente]
Whomping Willow
[Mientras el Ford Anglia vuela junto al Hogwarts Express, enciende sus faros y vuela. Muy pronto, Harry y Ron están volando sobre el lago y han llegado a Hogwarts.]

Ron: [mirando al castillo con una sonrisa mientras se gira para mirar a Harry] Bienvenido a casa. [Harry sonríe, feliz de estar de regreso en Hogwarts después de un verano tan desagradable]
No expulsado ... Hoy
[Harry y Ron entran al vestíbulo con sus pertenencias y mascotas, que dejan con el resto del equipaje de los estudiantes.]

Harry: ¡Nos vemos, Hedwig! [él y Ron suben corriendo los escalones] Entonces aparece un elfo doméstico en mi habitación, no podemos atravesar la barrera de la plataforma 9¾, casi nos mata un árbol ... claramente alguien no me quiere aquí este año. [Al llegar a lo alto de las escaleras, se encuentran cara a cara con el cuidador, Argus Filch y su gata, la Sra. Norris]
Filch: [mirándolos con una sonrisa maliciosa] Bueno, miren bien, muchachos. Esta noche bien podría ser la última que pases en este castillo. [Harry y Ron se miran nerviosamente] Oh, querido, estamos en problemas. [sonríe más diabólicamente; momentos después, Harry y Ron están parados en el salón de clases de Severus Snape]
Snape: [sosteniendo un artículo de periódico sobre su auto volador en la estación de King's Cross] ¡Fuiste visto por no menos de siete muggles! [arroja furiosamente el periódico a un lado y los mira] ¿Tienen idea de lo serio que es esto? Has arriesgado la exposición de nuestro mundo. ¡Sin mencionar el daño que infligiste a un Sauce Cazador que ha estado en estos terrenos desde antes de que nacieras!
Ron: Honestamente, profesor Snape, creo que nos hizo más daño.
Snape: ¡Silencio! [caminando alrededor de su escritorio hacia ellos] Te aseguro ... que si estuvieras en Slytherin y tu destino dependiera de mí, ¡los dos estarían en el tren a casa esta noche! Como están las cosas.
Dumbledore: No lo son. [Harry, Ron, Snape y Filch se vuelven hacia la puerta para ver a Dumbledore parado allí, acompañado por su asociada, la profesora McGonagall. Ambos lucen severos.]
Harry: [mirando a Dumbledore y McGonagall] Profesor Dumbledore, Profesora McGonagall.
Snape: Director, estos muchachos han desobedecido el Decreto para la restricción de la hechicería de menores de edad. Como tal ...
Dumbledore: Estoy al tanto de nuestros estatutos, Severus, habiendo escrito más de unos pocos yo mismo. Sin embargo, como directora de la Casa Gryffindor, corresponde a la profesora McGonagall determinar la acción apropiada.
Ron: Iremos a buscar nuestras cosas.
McGonagall: ¿De qué está hablando, Sr. Weasley?
Ron: Bueno, nos vas a expulsar, ¿no?
McGonagall: Hoy no, Sr. Weasley. Pero debo recalcarles a ambos la seriedad de lo que han hecho. Esta noche les escribiré a sus familias. Y ambos recibirán detención.
[Harry y Ron se vuelven hacia Snape, quien les lanza una mirada de puro veneno]

(Versión Extendida)

Dumbledore: Y ahora sugiero que todos regresemos a la fiesta. Hay una tarta de natillas de aspecto delicioso que estoy ansioso por probar.
[Dumbledore y McGonagall salen de la oficina y Snape los sigue con una expresión facial de desaprobación. Harry y Ron pasan a Filch. Harry se da cuenta de un sobre en el suelo y lo recoge. Está dirigido a Filch y trata sobre los conceptos básicos de la magia.]

Harry: Eh, Sr. Filch, dejó esto.
[Filch mira el sobre antes de agarrarlo y guardarlo en su bolsillo rápidamente mientras parece estupefacto. Harry y Ron siguen caminando.]


Mandrakes; Ron's Howler
[Al día siguiente, los estudiantes de segundo año están en los invernaderos de Herbología cuando entra el profesor Sprout.]
Profesor Sprout: Buenos días a todos. [toca el soporte para llamar la atención de todos] Buenos días a todos.
Estudiantes: Buenos días, profesora Sprout.
Gilderoy Lockhart
[Los alumnos están sentados en el aula de Defensa Contra las Artes Oscuras, decorada con retratos de su dueño: Gilderoy Lockhart; la puerta de la oficina se abre y Lockhart sale.]
Lockhart: Permíteme presentarte a tu nuevo maestro de Defensa Contra las Artes Oscuras: yo, Gilderoy Lockhart.
Sangre sucia y murmullos
[Harry camina por el pasillo con su atuendo de Quidditch, acompañado por el resto del equipo: Oliver Wood, Fred, George, Angelina Johnson, Alicia Spinnet y Katie Bell.]
Oliver: Pasé el verano ideando un programa de Quidditch completamente nuevo. Vamos a entrenar antes, más duro y durante más tiempo. [mirando a su izquierda, el resto del equipo sigue su mirada] ¿Qué ...? No lo creo. [saliendo al patio, se encuentran con el equipo de Quidditch de Slytherin, también vestido para Quidditch, mientras Ron y Hermione están sentados cerca; Oliver dirige su atención al capitán del equipo, Marcus Flint] ¿Adónde crees que vas, Flint?
Marcus: Práctica de quidditch.
Oliver: Reservé el campo para Gryffindor hoy.
Marcus: Tranquilo, Wood. Tengo una nota. [sostiene un pergamino enrollado; Wood lo toma y lo abre]
Ron: Uh-oh. Huelo problemas. [él y Hermione se levantan y caminan hacia los dos equipos]
Oliver: [leyendo el pergamino] Yo, el profesor Severus Snape, por la presente le doy permiso al equipo de Slytherin para practicar hoy, debido a la necesidad de entrenar a su nuevo Buscador. "[Levanta la vista del pergamino] Tienes un nuevo Buscador, ¿quién? [Marcus se hace a un lado, y Draco se acerca a los miembros del equipo de Gryffindor]
Harry: [sorprendido de que su némesis sea ahora miembro del equipo de Quidditch de Slytherin] Malfoy?
Draco: Así es. Y eso no es todo lo nuevo de este año. [pone su escoba a su lado; Harry, Ron, Hermione y el resto del equipo de Quidditch de Gryffindor examinan las escobas que Draco y el resto del equipo de Slytherin están sosteniendo]
Ron: Son Nimbus 2001. ¿Cómo las conseguiste?
Marcus : Un regalo del padre de
Draco . Draco: Verás, Weasley, a diferencia de algunos,mi padre puede pagar lo mejor.
Hermione: Al menos nadie en el equipo de Gryffindor tuvo que comprar su entrada. Se metieron en puro talento.
[Draco la mira molesto mientras da unos pasos y se detiene frente a ella con los brazos

extendidos ] Draco: Nadie te pidió tu opinión, inmundo sangre sucia.
[Hermione lo mira con una mezcla de odio y dolor mientras Draco se burla.]

Ron: ¡Pagarás por eso, Malfoy! [saca su varita y apunta a Draco] ¡Come babosas!
[Desafortunadamente, el hechizo de Ron fracasa, arrojándolo hacia atrás y al suelo. Harry y Hermione inmediatamente corren a su lado.]

Hermione: ¿Estás bien, Ron? ¡Di algo!
[Ron abre la boca como para decir algo, pero en lugar de eso escupe una babosa.]

Colin Creevey: [comienza a tomar fotografías de Ron] ¡Vaya! ¿Puedes darle la vuelta, Harry?
Harry: ¡No, Colin! Muévete del camino. [él y Hermione ayudan a Ron a ponerse de pie] Llevémoslo con Hagrid. [Ron regurgita otra babosa] Sabrá qué hacer.
[Los tres se apresuran a ir a casa de Hagrid mientras los Slytherin se ríen de ellos.]

Escribiendo en la pared
[Harry camina hacia el pasillo cuando de repente oye la voz siniestra de nuevo]

Voz siniestra : sangre. Huelo sangre. Déjame destrozarte ... Déjame matarte. Matar ... matar ... matar!
Hermione: [ella y Ron aparecen de la nada] Harry ...
Harry: ¿Lo escuchaste?
Ron: [preocupado y confundido] ¿Escuchas qué?
Harry: Esa voz.
Hermione: [preocupada también] ¿Voz? Que voz
Harry: Lo escuché primero en la oficina de Lockhart, y luego, de nuevo, solo ... [escucha la voz una vez más]
Voz siniestra: Es hora.
Harry: [poniéndose tenso] Se mueve. Creo que va a matar.
Ron: [mientras Harry pasa corriendo por el pasillo] ¿"Matar"?
Hermione: [ella y Ron corren tras él] ¡Harry, espera! ¡No tan rapido!
[Harry se detiene en medio del pasillo, luego mira hacia abajo para ver que el piso está húmedo antes de caminar hacia la derecha. Ron y Hermione corren para alcanzarlo; se detienen abruptamente cuando ven numerosas arañas que se escabullen por una rendija en la ventana.]

Harry: Extraño ... Nunca he visto a las arañas actuar así.
Ron: No me gustan las arañas. [luego miran otra cosa en el suelo] ¿Qué es eso?
Hermione: [miran un charco de agua, donde pueden ver lo que parece ser una escritura ensangrentada, luego miran hacia la pared para ver palabras premonitorias escritas con sangre que Hermione lee] "La Cámara de los Secretos ha sido abierta. Enemigos de el heredero, tenga cuidado ". Está escrito con sangre.
Harry: [mira a la izquierda] Oh, no. [Hermione sigue la mirada de Harry y jadea cuando ve lo que está viendo; camina hacia una antorcha en la pared, atada a la antorcha está la Sra. Norris, congelada y aparentemente asustada por algo] Es el gato de Filch. Es la Sra. Norris. [detrás de ellos, Percy camina hacia el pasillo, guiando a los otros estudiantes de la casa Gryffindor]
[Muy pronto, el pasillo se llena de estudiantes, que miran la escritura ensangrentada y la Sra. Norris, Madame Pomfrey expresa horror y conmoción; Colin prepara su cámara,

Draco: "Enemigos del heredero, tengan cuidado". [mira a los estudiantes de la casa Gryffindor] Serás el siguiente, sangre sucia. [Ron frunce el ceño y lo mira]
Filch: ¿Qué está pasando aquí? [abriéndose paso entre la multitud] Adelante, abran paso, abran paso. [mira a Harry] Potter ... ¿qué estás ...? [mira más allá de Harry a la forma congelada de su gato y tiembla] ¿Sra. Norris? [mira a Harry de nuevo] Asesinaste a mi gato.
Harry: No. No.
Filch: [mientras Draco, Crabbe y Goyle sonríen] Te mataré. [sonríe maliciosamente a Harry y luego lo agarra de la camisa] ¡Te mataré!
Dumbledore: ¿Argus? [Filch suelta a Harry; los estudiantes se hacen a un lado cuando los profesores Dumbledore, McGonagall y Snape llegan a la escena] Argus, yo ... [mira la escritura en la pared] Todos se dirigirán a sus dormitorios inmediatamente. [los estudiantes se vuelven para irse; Harry, Ron y Hermione los siguen] Todos excepto [Harry, Ron y Hermione paran] ustedes tres. [se vuelven para mirarlo]
Prefecto de Ravenclaw: Ravenclaws, síganme.
Dumbledore: No está muerta, Argus. [Filch tiembla, presumiblemente de alivio y confusión] Está petrificada.
Lockhart: Ah. Pensado así. Qué mala suerte que no estuve allí. Sé exactamente la contra maldición que podría haberla salvado.
Dumbledore: [sonríe y asiente] Pero no puedo decir cómo se ha quedado petrificada.
Filch: [señalando a Harry] Pregúntale. Es él quien lo hizo. Viste lo que escribió en la pared.
Harry: No es cierto, señor. Lo juro. Nunca toqué a la Sra. Norris.
Filch: Basura.
Snape: Si pudiera, director. Quizás Potter y sus amigos simplemente estaban en el lugar equivocado en el momento equivocado. Sin embargo, las circunstancias son sospechosas. Por mi parte, no recuerdo haber visto a Potter en la cena.
Lockhart: Me temo que es obra mía, Severus. Verás, Harry me estaba ayudando a responder a mi correo de fans.
Hermione: Por eso Ron y yo fuimos a buscarlo, profesor. Lo encontramos cuando dijo ... [mira a Harry]
Snape: ¿Sí, señorita Granger?
Harry: Cuando dije que no tenía hambre. [Snape se vuelve hacia él] Estábamos regresando a la sala común cuando encontramos a la Sra. Norris. [Snape se vuelve hacia el profesor Dumbledore]
Dumbledore: Inocente hasta que se demuestre lo contrario, Severus.
Filch: [mientras Snape sonríe levemente] Mi gato está petrificado. ¡Quiero ver un castigo!
Dumbledore: Podremos curarla, Argus. Según tengo entendido, Madame Sprout tiene un crecimiento muy saludable de mandrágoras. Cuando madure, se hará una poción que revivirá a la Sra. Norris. [Filch tiembla] Y mientras tanto, recomiendo encarecidamente precaución ... a todos.
[Harry, Ron y Hermione asienten. Momentos después, están caminando por la Gran Escalera, mientras las numerosas escaleras cambian.]

Hermione: [mientras suben las escaleras] Es un poco extraño, ¿no?
Harry: ¿"Extraño"?
Hermione: [se vuelve hacia él] Escuchas esta voz, una voz que solo tú puedes escuchar, y luego la Sra. Norris aparece petrificada. Es simplemente ... extraño.
Harry: ¿Crees que debería haberles dicho, Dumbledore y los demás, quiero decir?
Ron: ¿Estás enojado?
Hermione: No, Harry. Incluso en el mundo mágico, escuchar voces no es una buena señal. [se da vuelta y camina]
Man in Painting: Tiene razón, ya sabes. [Harry y Ron lo miran, luego caminan]
Acerca de la Cámara
McGonagall: [en la clase de Transformaciones del día siguiente] ¿Podría llamar su atención, por favor? Correcto. Ahora, hoy, estaremos transformando animales en copas de agua. [Draco se encoge de hombros] Así. [se vuelve hacia un pájaro que descansa sobre un poste a su derecha, golpeándolo con su varita mientras habla] Uno, dos, tres, Vera Verto. [un chorro de magia emite de su varita, y el pájaro se convierte en una copa; los otros estudiantes expresan asombro] ¿Ahora es tu turno? ¿A quién le gustaría ir primero? [se acerca a Ron] ¡Ah! Sr. Weasley. Uno, dos, tres, Vera Verto.
Ron: ¡Ejem! [silenciosamente golpea con su varita hacia Scabbers tres veces] Vera Verto. [su varita hace que Scabbers se convierta en una copa peluda con su cola moviéndose mientras chilla; Harry y algunos de los otros estudiantes sonríen y ríen]
McGonagall: [mientras Ron toma la copa de Scabbers] Esa varita necesita ser reemplazada, Sr. Weasley. [Hermione levanta la mano] ¿Sí, Sra. Granger?
Hermione: Profesor, me preguntaba si podría hablarnos sobre la Cámara de los Secretos. [Draco le da a Hermione una mirada de sorpresa]
McGonagall: [mirando alrededor del salón y viendo que los estudiantes lucen algo interesados] Muy bien. Bueno, todos saben, por supuesto, que Hogwarts fue fundado hace más de mil años por las cuatro brujas y magos más grandes de la época: Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw y Salazar Slytherin. Ahora tres de los fundadores convivían de manera bastante armoniosa. Uno no lo hizo.
Ron: [se vuelve hacia Harry] Tres adivina quién.
McGonagall: Salazar Slytherin deseaba ser más selectivo con los estudiantes admitidos en Hogwarts. Creía que el aprendizaje mágico debería mantenerse dentro de las familias totalmente mágicas. En otras palabras, sangre pura. [Hermione y Draco se miran el uno al otro] Incapaz de convencer a los demás, decidió dejar la escuela. Ahora, según la leyenda, Slytherin había construido una cámara oculta en este castillo, conocida como la Cámara de los Secretos. Bueno, poco antes de partir, lo selló, hasta el momento en que su verdadero heredero regresó a la escuela. Solo el Heredero podría abrir la Cámara y desatar el horror en su interior, y al hacerlo, purgaría la escuela de todos aquellos que, en opinión de Slytherin, eran indignos de estudiar magia.
Hermione: Nacidos de muggles. [La profesora McGonagall le apunta con su varita en un gesto afirmativo]
McGonagall: Bueno, naturalmente, la escuela ha sido registrada muchas veces. No se ha encontrado tal cámara. [se da vuelta y regresa a su escritorio]
Hermione: Profesora, [la profesora McGonagall se da la vuelta] ¿Qué nos dice la leyenda que hay dentro de la Cámara?
McGonagall: Bueno, se dice que la Cámara alberga algo que solo el Heredero de Slytherin puede controlar. Se dice que es el hogar de un monstruo. [Hermione siente una sensación de pavor ante estas palabras; un Ron horrorizado se da vuelta para mirar a Draco, quien le sonríe con aire de suficiencia]
Ron: [mientras él, Harry y Hermione caminan por el pasillo] ¿Crees que es verdad? ¿De verdad crees que existe una Cámara de los Secretos?
Hermione: Sí. ¿No pudiste decirlo? McGonagall está preocupada. Todos los profesores lo son.
Harry: [mientras Draco, Crabbe y Goyle caminan por el pasillo detrás de ellos] Pero si realmente hay una Cámara de los Secretos, y realmente se ha abierto, entonces eso significa ...
Hermione: El Heredero de Slytherin ha regresado a Hogwarts. . La pregunta es, ¿quién es?
Ron: [mientras Draco y Goyle pasan junto a ellos, con Crabbe corriendo para mantenerse al día] Pensemos ... [mira a sus adversarios cuando pasan] ¿a quién conocemos que piense que todos los nacidos de muggles son escoria?
Hermione: Si estás hablando de Malfoy ...
Ron: ¡Por supuesto! Lo escuchaste: "Tú serás el próximo, sangre sucia".
Hermione: lo escuché. ¿Pero Malfoy, el heredero de Slytherin?
Harry: Bueno, tal vez Ron tenga razón, Hermione. Quiero decir, mira a su familia, todos han estado en Slytherin durante siglos.
Ron: Crabbe y Goyle deben saberlo. Tal vez podamos engañarlos para que lo cuenten.
Hermione: Incluso ellos no son tan gruesos. Pero podría haber otra forma. Eso sí, sería difícil, sin mencionar que estaríamos rompiendo cincuenta reglas de la escuela y sería peligroso, muy peligroso.
Bludger rebelde
[En la biblioteca, Hermione saca un libro titulado "La mayoría de las pociones potentes" del estante, luego camina unas filas hacia donde están Harry y Ron.]
Hermione: Aquí está, la poción multijugos. [lee del libro] "Preparada correctamente, la poción multijugos permite al bebedor transformarse temporalmente en la forma física de otro".
Ron: ¿Quieres decir que si Harry y yo bebemos esas cosas, nos convertiremos en Crabbe y Goyle?
Hermione: Sí.
Ron: [él y Harry intercambian sonrisas] Malvado. Malfoy nos dirá cualquier cosa.
Hermione: [sonríe levemente ante su motivación] Exactamente, pero es complicado. [volviendo a mirar el libro] Nunca había visto una poción más complicada.
Harry: Bueno, ¿cuánto tardará en hacerlo?
Hermione: [mirando a Harry] Un mes.
Harry: ¿Un mes? Pero, Hermione ... si Malfoy es el heredero de Slytherin, ¡podría atacar a la mitad de los nacidos de muggles en la escuela para entonces!
Hermione: Lo sé, pero es el único plan que tenemos.
Ya no está a salvo
[Ron, Hermione y Hagrid corren hacia Harry mientras Lockhart corre hacia él seguido por otro grupo de estudiantes.]
Harry: [mientras sus amigos lo alcanzan] Gracias.
Hermione: ¿Estás bien?
Harry: No. Creo que mi ... creo que mi brazo está roto.
Lockhart: [arrodillándose junto a Harry] No te preocupes, Harry. Arreglaré ese brazo tuyo de inmediato.
Harry: No. Tú no.
Club de duelo
[Harry se tumba en la cama, sorprendido por lo que acaba de escuchar. Unos días después, en el baño de chicas, les dice a Ron y Hermione lo que escuchó.]
Hermione: "¿Otra vez"? ¿Quiere decir que la Cámara de los Secretos se ha abierto antes?

Un hablante de pársel
[Snape ayuda a Draco a ponerse de pie y lo empuja hacia adelante.]
Lockhart: [mientras Draco levanta su varita] ¡Dije solo desarmar!
Draco: ¡Serpensortia! [agita su varita y dispara una cobra; que luego se desliza por el campo de juego; Harry baja su varita]
Snape: [pasando junto a Draco hacia la serpiente] No te muevas, Potter. Yo me lo quitaré.
Lockhart: Permítame, profesor Snape. [Snape se detiene en seco] ¡Alarte ascendió! [la serpiente se lanza por los aires, luego vuelve a caer, levanta la cabeza y se vuelve hacia Harry con un siseo]
Harry: Sya-hassa-she. (Déjalos en paz.) [La serpiente se vuelve hacia Justin Finch-Fletchey y sisea] Sya-hasi- heth. (Déjelo en paz.) [Snape mira con sospecha] Sya-hasiheth. [la serpiente se vuelve hacia Harry de nuevo]
Nada que contar
[Harry gira en una esquina y descubre a Nick Casi Decapitado, petrificado con la cabeza parcialmente desprendida y flotando en su lugar. En el suelo, a solo unos metros de distancia, está Justin Finch-Fletchey, también petrificado. Harry se arrodilla para examinar su cuerpo rígido. Mientras lo hace, Filch sale por una puerta detrás de él.]
Filch: Atrapado en el acto. [Harry se da vuelta al oír su voz] Te sacaré esta vez, Potter. Marca mis palabras. [sonríe con malicia y se aleja]
Harry: ¡No, Sr. Filch! T-no entiendes ... [se interrumpe cuando algo más llama su atención; mira para ver otro grupo de arañas que se escabullen por la pared y salen por una ventana; mientras camina hacia la ventana, mirando las arañas, Filch regresa, acompañado por la profesora McGonagall; ella jadea en estado de shock al ver a Justin y se acerca a él, luego mira de su cuerpo al profesor Harry. Lo juro, no lo hice.
Profesora McGonagall: Esto está fuera de mis manos, Potter. [ella y Harry luego caminan hacia una abertura que contiene una estatua de grifo, la entrada a la oficina del profesor Dumbledore] El profesor Dumbledore los estará esperando. [hace un gesto hacia la estatua; Harry se acerca a] Sherbet Lemon. [abre las manos a la estatua; la estatua gira en el sentido de las agujas del reloj y se eleva, y una escalera sale del suelo, que también se eleva en el sentido de las agujas del reloj; Harry sube a la escalera, avanzando hacia una puerta cuando la estatua se detiene]
Poción multijugos
[Es Navidad, y los estudiantes que van a casa para las vacaciones son transportados a través del lago helado en trineos tirados por caballos blancos.]
Harry y Ron transformados
[Harry y Ron bajan una escalera hasta un pasillo.]
El diario
[Un trueno ilumina el cielo oscuro afuera.]
Tom Riddle
[Harry se materializa en el vestíbulo de entrada de Hogwarts, que no se ve diferente al presente.] Harry
petrificado
: Era Hagrid. Hagrid abrió la Cámara de los Secretos hace cincuenta años.
Cornelius Fudge
[Harry y Ron, bajo la capa de invisibilidad, se acercan a la cabaña de Hagrid por la noche. Llaman a la puerta; Fang mira hacia arriba, Hagrid tapa su tetera y prepara su ballesta.]
Hagrid: ¿Quién está ahí? [caminando hacia la puerta principal y abriéndola de una patada] ¿Hola? ¿Hola? [Harry y Ron se quitan la capa, Hagrid la baja al verlos]
Harry: ¿Para qué es eso?
Hagrid: Oh, nada, estaba esperando, eh ... no importa. Pasa, acabo de hacer una taza de té. [Sirve té en una taza hasta el borde]
Harry: Hagrid, ¿estás bien?
Hagrid: Estoy bien. Estoy bien. [deja la tetera en la mesa]
Harry: Di-¿Has oído hablar de Hermione?
Hagrid: Oh, sí. Me enteré bien de eso.
Harry: Mira, tenemos que preguntarte algo. ¿Sabes quién abrió la Cámara de los Secretos?
Hagrid: Lo que tienes que entender al respecto es ... [hay otro golpe en la puerta; Harry y Ron se vuelven hacia la puerta mientras Fang ladra] [susurrando] Rápido. Debajo del manto. No digan una palabra, callen los dos. [Harry y Ron van a un rincón, donde Ron arroja la capa sobre ellos; Hagrid empuja la puerta para abrirla, para encontrar a Dumbledore en la puerta, acompañado por otro caballero mayor, Cornelius Fudge] Oh, profesor Dumbledore, señor.
Profesor Dumbledore: [mientras Fudge le da a Hagrid una leve sonrisa de saludo] Buenas noches, Hagrid. Me pregunto, ¿podríamos ...?
Hagrid: Por supuesto. [les hace señas] Pasen, pasen.
Ron: [reconoce a Fudge cuando entra y susurra] Ese es el jefe de papá, Cornelius Fudge, el Ministro de Magia.
Aragog
[Harry y Ron salen de la cabaña y miran a su izquierda a la ventana, para ver las arañas corriendo por la ventana, por el costado de la casa, hacia el Bosque Prohibido.]
Harry: Vamos.
Ron: [con miedo] ¿Qué?
Harry: Escuchaste lo que dijo Hagrid: "Sigue a las arañas".
Ron: ¡Se dirigen al Bosque Oscuro! [Harry camina hacia el bosque, cargando la linterna de Hagrid; Ron lo sigue de mala gana] ¿Por qué arañas? ¿Por qué no podría ser "sigue las mariposas"?
Ataque de araña
[Numerosas arañas descienden de una colmena enorme en lo alto hacia Harry y Ron.]
Harry: [mirando a Aragog de nuevo] Bueno ... gracias. Nosotros solo ... iremos.
Aragog: ¿Ir? [Ron asiente con temor] Creo que no. [más arañas emergen a su alrededor] Mis hijos e hijas no hacen daño a Hagrid cuando yo lo ordeno. Pero no puedo negarles la carne fresca cuando vaga tan voluntariamente entre nosotros. [mientras cientos de arañas más aparecen de los árboles] Adiós, amigo de Hagrid.
Ron: [mirando a Harry con terror] ¿Podemos entrar en pánico ahora? [una gran araña aterriza junto a los niños; Ron le apunta con su varita con miedo, mientras Harry balancea la linterna hacia ella, luego a otra araña antes de arrojar la linterna al suelo y sacar su varita antes de que él y Ron se pongan espalda con espalda mientras las arañas los rodean] Conozca cualquier hechizo ?
Harry: Uno, pero no es lo suficientemente poderoso para todos.
Ron: ¿Dónde está Hermione cuando la necesitas?
[Las arañas se acercan a los niños. Por el momento, se escucha el sonido de un motor de automóvil; Harry y Ron miran en la dirección del ruido, para ver al Ford Anglia entrar en el nido de Aragog, hacia ellos; retroceden hacia Aragog cuando el coche se detiene y luego les abre las puertas.]
Harry: ¡Vamos! [corren hacia el coche; un par de arañas entran para el ataque; Ron gime mientras entra por el lado del conductor, cerrando la puerta sobre la pata de una araña, pero logra liberarse; Harry apunta con su varita a la otra araña mientras llega a la puerta del pasajero] ¡Arania Exumai! [un rayo emite de su varita, disparando a la araña; Harry se sube al auto y cierra la puerta, una araña aterriza encima del auto, mientras que otra aterriza en el capó] ¡Vamos!
[Ron pone el auto en reversa, y retrocede tan rápido como puede, mientras pasan por debajo de la raíz de un árbol, la araña en el techo cae sobre su espalda. El auto luego sale volando hacia atrás sobre una colina.]
Harry y Ron: ¡Vaya! [cuando el coche aterriza en el suelo del bosque, la araña del capó se cae; el auto luego se detiene]
Ron: [agarra el volante, luego se gira para mirar a Harry] Me alegro de que estemos fuera de allí.
[De repente, otra araña se sube al auto y asoma la cabeza por la ventana; Harry salta cuando la araña va por Ron, poniendo sus pinzas alrededor de su cuello; Retirando las manos del volante, Ron intenta quitarse la araña, retorciéndose y gritando. Harry tranquilamente mete la mano en su bolsillo y saca su varita, y apunta a su asustado amigo. Ron, con los ojos y la nariz muy abiertos por el terror, se mueve hacia la izquierda, dándole a Harry un tiro claro a la araña que intenta
devorarlo .] Harry: ¡Arania Exumai! [un rayo de luz blanca emite de la varita de Harry, disparando a la araña lejos de Ron y lejos del auto]
Ron: [mirando por la ventana y volviéndose hacia Harry de nuevo] Gracias por eso.
Harry: [poniendo su varita en su bolsillo] No lo menciones. [mira por el parabrisas mientras se oye un sonido tembloroso y entrecierra los ojos; las arañas aparecen en la cima de la colina y comienzan a moverse hacia el carro; al ver las arañas, Ron gime] Sácanos de aquí. ¡Ahora! [Ron pone el auto en reversa] ¡Vamos! ¡Vamos, muévete más rápido! [los chicos gritan mientras Ron hace un giro brusco] ¡Vamos, vamos! [Ron pone el coche en marcha y pisa el acelerador; mientras conducen a través del bosque, las arañas persiguen al coche, moviéndose casi tan rápido como guepardos]. Pónganos en el aire.
Ron: [empujando el engranaje] ¡El tren volador está atascado! [las arañas se reúnen en la rama de un árbol más adelante, con la intención de interceptar el Ford Anglia]
Harry: Vamos. ¡Halar!
Ron: ¡Lo estoy intentando!
[Mientras se adentran en la manada de arañas, tirándolas a un lado, el auto toma el aire, y una araña logra agarrar el auto antes de caer al suelo. Volando sobre los árboles, el auto desciende y aterriza a unos metros de la casa de Hagrid antes de detenerse por completo frente a la casa; Harry abre la puerta de su auto y deja salir a Fang.]
Ron: [evidentemente furioso porque Hagrid tuvo que ponerlos en tal peligro] "Sigue a las arañas". ¡"Sigue a las arañas"! Si Hagrid alguna vez sale de Azkaban, lo mataré. [el Ford Anglia retrocede cuando Fang vuelve a entrar en la casa de Hagrid, luego pasa junto a Harry y Ron, y regresa al bosque de nuevo] Quiero decir, ¿cuál fue el punto de enviarnos allí? ¿Qué hemos averiguado?
Harry: Sabemos una cosa: Hagrid nunca abrió la Cámara de los Secretos; era inocente.

[Al día siguiente, Harry y Ron vuelven a visitar a Hermione en la enfermería; Harry saca las viejas flores secas del jarrón junto a la cama de Hermione, coloca algunas flores blancas nuevas (probablemente rosas), luego se sienta en la cama.]
Harry: Ojalá estuvieras aquí, Hermione. Te necesitamos. Ahora mas que nunca.
[Hermione se queda ahí con su brillante expresión facial mientras Ron suspira con tristeza. Harry frota la mano izquierda de Hermione; sintiendo algo en él, mira hacia abajo y quita su mano para descubrir un trozo de papel arrugado, una página de un libro de la biblioteca, que cuidadosamente quita y endereza.]
Ron: [mirando la página] ¿Qué es eso?
Harry: [examinando la página] Ron, es por eso que Hermione estaba en la biblioteca el día que fue atacada. [mira la página y luego vuelve a mirar a Ron cuando se levanta] ¡Vamos! [Harry y Ron caminan por el pasillo mientras Harry lee de la página] "De las muchas bestias temibles que deambulan por nuestra tierra, ninguna es más mortal que el basilisco. Capaz de vivir durante cientos de años, la muerte instantánea espera a cualquiera que se encuentre con este gigante. ojo de serpiente. Las arañas huyen ante él ... "[mirando a Ron] Ron, esto es. El monstruo de la Cámara de los Secretos es un basilisco. Por eso puedo oírlo hablar. Es una serpiente.
Ron: [procesando la información que acaban de leer] Pero si mata mirando a la gente a los ojos, ¿por qué no ha muerto nadie?
Harry: [pensando durante unos segundos y luego mirando por la ventana] Porque nadie lo miró a los ojos. No directamente, al menos. [Caminan mientras repasa cómo cada una de las víctimas estaba petrificada] Colin lo vio a través de su cámara. Justin ... Justin debe haber visto al basilisco a través de Nick Casi Decapitado. Nick se divirtió al máximo, pero es un fantasma. No podía volver a morir. Y Hermione ... tenía el espejo. Te apuesto lo que sea a que lo estaba usando para mirar alrededor de las esquinas en caso de que apareciera.
Ron: ¿Y la Sra. Norris? Estoy bastante seguro de que ella no tenía cámara ni espejo, Harry.
Harry: [pensando en cómo la Sra. Norris se petrificó, luego recordó] El agua ... Había agua en el piso esa noche. Ella solo vio el reflejo del basilisco. [Ron asiente; Harry echa otro vistazo a la página, luego camina hacia una antorcha cercana para leer más fácilmente la página, pasando su dedo a lo largo de ella mientras lee] "Las arañas huyen ante ella". Todo encaja.
Ron: ¿Pero cómo se ha estado moviendo el Basilisco? Una gran serpiente sucia, alguien la habría visto.
Harry: [mientras él y Ron miran la parte inferior de la página donde está escrita la palabra "Pipes"] Hermione también respondió eso.
Ron: ¿Pipas? ¡Está usando la plomería!
Harry: ¿Recuerdas lo que dijo Aragog sobre esa chica hace cincuenta años, que murió en un baño? ¿Y si ella nunca se fue?
Ron: Myrtle gimiendo. [Harry asiente]
Profesora McGonagall: [sobre los altavoces] Todos los estudiantes deben regresar a los dormitorios de sus casas de inmediato. [Ron mira a Harry con sorpresa, preguntándose qué podría estar pasando ahora] Todos los maestros al pasillo del segundo piso inmediatamente.
[Harry y Ron se apresuran al pasillo del segundo piso. En la sección donde está el mensaje sangriento, los profesores McGonagall, Snape, Flitwick, Madam Pomfrey y Filch corren hacia la pared, donde la profesora McGonagall dirige su atención a un mensaje recién escrito.]
Profesora McGonagall: Como puede ver, el heredero de Slytherin ha dejado otro mensaje. [Harry y Ron caminan hacia el pasillo detrás de ellos] Nuestro peor miedo se ha hecho realidad, un estudiante ha sido llevado por el monstruo a la Cámara misma. [mira a los demás con tristeza] Los estudiantes deben ser enviados a casa. Me temo que este es el final de Hogwarts.
Lockhart: [caminando alegremente hacia el grupo] Lo siento mucho. Adormecido. ¿Qué me he perdido? [sonríe a Snape y McGonagall]
Snape: El monstruo, Lockhart, ha secuestrado a una chica. Por fin ha llegado tu momento.
Lockhart: [ligeramente aturdido] ¿Mi ... momento?
Snape: ¿No estabas diciendo anoche que sabías desde el principio dónde está la entrada a la Cámara de los Secretos? [Lockhart parece desconcertado]
Profesora McGonagall: Eso está decidido. Te dejamos para que te ocupes del monstruo, Gilderoy. Tus habilidades, después de todo, son una leyenda.
Lockhart: Muy bien. Estaré en mi oficina, preparándome, eh ... preparándome. [se da vuelta y se aleja; Filch lo mira, luego mira a Madame Pomfrey ya la profesora McGonagall]
Señora Pomfrey: ¿Quién es el monstruo que se llevó, Minerva?
Profesora McGonagall: [la mira] Ginny Weasley. [Harry y Ron se enderezan en estado de shock; Ron tiembla levemente]
[La profesora McGonagall se aleja tristemente, junto con el resto del personal; un segundo después, Snape los sigue, revelando el mensaje recién escrito, que dice "Su esqueleto yacerá en la Cámara para siempre".]
Ron: [lee el mensaje con pavor en su voz] "Su esqueleto yacerá en la Cámara para siempre". [Harry mira a Ron mientras se vuelve aún más devastado por el secuestro de su hermana] Ginny ...
Cámara de los secretos
Harry: [mientras él y Ron corren hacia el aula de Defensa Contra las Artes Oscuras y suben las escaleras hacia la oficina de Lockhart] Lockhart puede será inútil, pero intentará entrar en la Cámara. ¡Al menos podemos decirle lo que sabemos! [abriendo la puerta de la oficina y entrando] Profesor, tenemos información para usted. [Lockhart mete algo de ropa en su baúl, que cierra mientras se vuelve hacia ellos; Ron le frunce el ceño] ¿Vas a algún lado?
Lockhart: Um ... bueno, sí. Llamada urgente. Inevitable. Uh, tengo que irme.
Ron: [indignado] ¡¿Qué hay de mi hermana ?!
Lockhart: Uh, bueno, um ... En cuanto a eso, muy desafortunado. Nadie se arrepiente más que yo.
Ron: [incrédulo] Eres el profesor de Defensa Contra las Artes Oscuras. ¡No puedes irte ahora!
Lockhart: [mientras guarda sus cosas en su bolso y luego se mueve alrededor de su escritorio] Bueno, debo decir, cuando acepté el trabajo, no había nada en la descripción del trabajo sobre ...
Harry: [bloqueando su camino] Estás corriendo ¿lejos? ¡¿Después de todas esas cosas que hiciste en tus libros ?!
Lockhart: Los libros pueden ser engañosos.
Harry: ¡Tú los escribiste!
Lockhart: [colocando su bolso en su escritorio] Querido muchacho, ¡usa tu sentido común! ¡Mis libros no se habrían vendido ni la mitad si la gente no hubiera pensado que yo había hecho todas esas cosas!
Harry: [mirando a Lockhart] Eres un fraude. ¡Te has atribuido el mérito de lo que han hecho otros magos!
Ron: [mientras Lockhart dirige su atención hacia él] ¿Hay algo que puedas hacer?
Lockhart: Sí. Ahora lo mencionas. Estoy bastante dotado con los encantos de la memoria. De lo contrario, verás, todos esos magos habrían ido a parlotear y yo nunca habría vendido otro libro. [Harry y Ron se miran mientras Lockhart camina hacia su maleta] De hecho, eh ... yo soy ... [Ron asiente con la cabeza hacia Harry, y ambos alcanzan sus túnicas para sacar sus varitas] yendo a tengo que hacerte lo mismo. [recoge su varita de la maleta, pero Harry y Ron ya tienen sus varitas apuntadas hacia él]
Harry: Ni lo pienses. [señala hacia abajo, haciendo un gesto para que Lockhart deje caer su varita;
[En su baño, Myrtle llorona está flotando llorando mientras Harry, Ron y Lockhart entran.]
Myrtle: ¿Oh? ¿Quién está ahí? [al ver a Harry, le sonríe cálidamente] Oh, hola, Harry. ¿Qué deseas?
Harry: Para preguntarte cómo moriste.
Myrtle: [sonríe levemente] Oh ... [su sonrisa se desvanece] ... fue terrible. Sucedió aquí mismo, en este mismo cubículo. Me había escondido porque Olive Hornby se estaba burlando de mí por mis gafas. Estaba llorando, y luego ... escuché que alguien entraba.
Harry: ¿Quién era, Myrtle?
Myrtle: [ahogada] No lo sé. ¡Estaba angustiado! [flota hacia los tres] Pero dijeron algo gracioso, una especie de lenguaje inventado, y me di cuenta de que era un niño hablando, así que abrí la puerta para decirle que se fuera, y ... morí.
Harry: ¿Solo así? ¿Cómo?
Myrtle: Solo recuerdo haber visto un par de grandes ojos amarillos, allí, junto a ese lavabo. [señala el círculo de lavabos en el centro del baño]
[Mientras Myrtle flota hacia los cubículos, Harry da un paso adelante para examinar los lavabos. Alcanzando la piedra circular sobre los lavabos, mueve su mano hacia el lavabo frente a él; abre el grifo, pero no sale agua. En ese segundo, algo más llama su atención; mirando más de cerca el grifo, ve una serpiente tallada en él.]
Harry: Esto es. [dando un paso atrás] Esto es, Ron. Creo que esta es la entrada a la Cámara de los Secretos. [Lockhart mira el fregadero con sorpresa]
Ron: Di algo. Harry, di algo en pársel.
Harry: [después de unos segundos] Hesha-Hassah. (Abrir.)
[La piedra circular sobre los lavabos se eleva, luego todos los lavabos comienzan a moverse hacia afuera. Harry, Ron y Lockhart retroceden lentamente mientras los lavabos se mueven; el fregadero con la serpiente tallada en su grifo desciende al suelo, luego una rejilla se desliza sobre él. Lockhart da un paso hacia la abertura que ocultaban los lavabos y mira hacia un agujero negro muy ancho]
Lockhart: [inhala y luego se vuelve hacia Harry con una sonrisa] Excelente, Harry. Ah, buen trabajo. Bueno, entonces solo estaré, eh ... no hay necesidad de que me quede. [trata de correr, pero Harry y Ron lo agarran]
Harry: ¡Oh, sí que lo hay! [con todas sus fuerzas, empujan a Lockhart hacia atrás hacia el pasillo antes de sacar sus varitas] Tú primero.
Lockhart: Ahora, muchachos, ¿de qué servirá?
Ron: Mejor tú que nosotros. [Harry asiente]
Lockhart: Um, pero ... obviamente, sí. [nerviosamente se da la vuelta y agarra los lavabos mientras mira hacia el pasillo antes de mirar por encima del hombro a los chicos de nuevo] ¿Seguro que no quieres probarlo primero? [molesto, Ron golpea a Lockhart con su varita, enviándolo al pasillo, gritando mientras desaparece en la oscuridad; un segundo después, se escucha un estruendo cuando Harry y Ron caminan hacia la entrada] Es realmente bastante sucio aquí abajo.
Harry: Está bien. [se vuelve hacia Ron] Vamos. [Ron asiente con la cabeza]
Myrtle: ¿Oh, Harry? [los dos chicos la miran] Si mueres ahí abajo, puedes compartir mi baño. [ella se ríe; inquieto a Ron]
Harry: Uh ... gracias, Myrtle. [le sonríe, luego se vuelve hacia la abertura y salta a ella; Ron inmediatamente salta detrás de él]
[Harry y Ron gritan mientras bajan por un tobogán, que conduce a un pequeño pozo lleno de huesos de animales, probablemente el área de alimentación del basilisco, mientras Lockhart limpia la suciedad de su túnica cuando los niños aterrizan. Inmediatamente se ponen de pie y le apuntan con sus varitas.]
Ron: [mirando la suciedad a su alrededor] Ugh.
Harry: [pisando los huesos] Ahora, recuerda: cualquier signo de movimiento, cierra los ojos de inmediato. [se da vuelta y entra en el pasillo detrás de él]
Ron: Continúa . [Lockhart sigue a Harry a regañadientes hacia el pasillo con Ron justo detrás de él]
Backfire
Harry: [llegando a otro pasadizo a la derecha, hace señas a Ron y Lockhart para que lo sigan] Por aquí. [los tres entran a una habitación similar a una caverna con una enorme y larga piel de serpiente en el suelo]
Ron: [[mientras Harry camina junto a la piel de serpiente] ¿Qué es esto?
Lockhart: [nervioso] Parece una ... serpiente.
Harry: [mientras lo examina] Es una piel de serpiente.
Ron: Maldita sea. Cualquiera que sea el cobertizo, debe tener veinte metros de largo. O más. [Lockhart se desmaya, probablemente por miedo] [sarcásticamente mientras Harry dirige su atención a Lockhart] Corazón de león, este.
Lockhart: [agarrando repentinamente la varita de Ron y poniéndose de pie mientras respira con malicia y apunta con la varita a Harry] La aventura termina aquí, chicos. Pero no se preocupe. El mundo conocerá nuestra historia. Cómo llegué demasiado tarde para salvar a la chica, [señala a Ron con la varita] cómo ustedes dos trágicamente perdieron la cabeza al ver su cuerpo destrozado. Así que ... [vuelve a señalar a Harry con la varita] ... usted primero, Sr. Potter. Dile adiós a tus recuerdos. [agita la varita salvajemente mientras grita] ¡Olvídese!
[La varita emite luz verde, lo que hace que Lockhart vuele hacia atrás, se estrelle contra la pared y luego caiga al suelo. Un par de segundos más tarde, comienza un estruendo, luego comienzan a caer rocas del techo; Harry se pone a cubierto cuando enormes rocas vuelan sobre él mientras Ron retrocede contra la pared mientras las rocas forman una enorme pila.]
Ron: [tosiendo por el polvo producido por las rocas] ¡Harry! [Harry se quita la bata de una de las rocas] ¡Harry!
Harry: [corriendo hacia una abertura en la gran pila de rocas que lo separa de Ron] ¡Ron! Ron, ¿estás bien?
Ron: ¡Estoy bien!
Lockhart: [gime y se sienta] Hola. ¿Quién eres tú?
Ron: Um ... Ron Weasley.
Lockhart: ¿De verdad? Y, eh ... ¿quién-quién soy yo?
Ron: [dándose cuenta de que Lockhart ha borrado su propia memoria por accidente, se vuelve hacia Harry de nuevo] ¡El encantamiento de memoria de Lockhart fracasó! ¡No tiene ni idea de quién es!
Lockhart: [levanta una piedra pequeña mientras Harry mira a través de la abertura] Es un lugar extraño, ¿no? [lanza la piedra que tiene en la mano y luego mira a Ron] ¿Vives aquí?
Ron: [tomando la piedra de Lockhart] No.
Lockhart: ¿De verdad? [Ron golpea a Lockhart en la nuca con la piedra, dejándolo inconsciente; Harry guiña un ojo levemente]
Ron: [mirando a Harry a través de la abertura de nuevo] ¿Qué hago ahora?
Harry: Espera aquí e intenta mover un poco de esta piedra para que podamos volver. Continuaré y encontraré a Ginny.
Ron: [mientras Harry se gira y baja del montón de rocas] Está bien.
[Harry saca su varita mientras vuelve a pisar el suelo y avanza. Más adelante, ve una puerta circular con siete cerraduras en forma de serpiente y da un paso hacia ella.]
Harry: Hesha-Hassah. (Abierto.)
[Una octava serpiente se desliza fuera de la bisagra mecánica de la puerta y se desliza a lo largo del borde de la puerta, haciendo que las otras siete serpientes se retraigan una por una. Cuando la serpiente se desliza hacia la bisagra, la puerta se abre lentamente. Harry da un paso adelante; al otro lado está la Cámara de los Secretos. Harry camina cautelosamente a través de la puerta, hacia la Cámara, hacia la escalera en la entrada.]
Heredero de Slytherin
[Mientras la puerta se cierra lentamente detrás de él, Harry baja la escalera y camina por el pasillo. Mirando hacia adelante, ve a Ginny yaciendo inmóvil al final de la Cámara.]
Harry: Ginny. [corre hacia ella, deja caer su varita y se pone de rodillas] Ginny. No, Ginny. Por favor no estés muerto. Despierta. ¡Despierta! Por favor despierta.
[De repente, Tom Riddle sale por una puerta cercana.]
Riddle: No se despertará.
[Harry reconoce su voz y se vuelve hacia él. Riddle camina hacia él.]
Harry: ¿Tom? ¿Tom Riddle? ¿Qué quieres decir con que no se despertará? Ella no es...?
Riddle: Ella todavía está viva, pero solo por poco.
Harry: ¿Eres un fantasma?
Acertijo: Un recuerdo, conservado en un diario durante cincuenta años.
Harry: [extiende la mano y toca a Ginny] Está tan fría como el hielo. Ginny, por favor no estés muerta. Despierta. [mientras Harry no mira, Riddle se inclina y toma la varita de Harry de donde la dejó] Tienes que ayudarme, Tom. Hay un basilisco.
Acertijo: No vendrá hasta que se llame.
Harry: [mira hacia arriba para ver a Riddle sosteniendo su varita y se pone de pie] Dame mi varita, Tom.
Riddle: No lo necesitarás.
Harry: Escucha, tenemos que irnos. Nosotros'
Riddle: Me temo que no puedo hacer eso, Harry. Verás, a medida que la pobre Ginny se debilita, yo me hago más fuerte. [Harry lo mira, confundido] Sí, Harry. Fue Ginny Weasley quien abrió la Cámara de los Secretos. [Se muestra a Ginny parada frente al lavabo en el baño de Moaning Myrtle mientras se abre]
Harry: No. No podría. Ella no lo haría.
Acertijo: Fue Ginny quien puso el basilisco en los sangre sucia y el gato de Filch, Ginny quien escribió los mensajes amenazantes en las paredes. [Se muestra a Ginny usando sus dedos cubiertos de sangre para escribir en la pared]
Harry: ¿Pero por qué?
Riddle: Porque le dije que lo hiciera. Descubrirás que puedo ser muy persuasivo. No es que ella supiera lo que estaba haciendo. Ella estaba, digamos, en una especie de trance. [mientras se muestra a Ginny corriendo hacia un cubículo y tirando el diario al baño] Aún así, el poder del diario comenzó a asustarla. Y trató de tirarlo en el baño de chicas. Y luego, ¿quién debería encontrarlo sino tú? La misma persona que más ansiaba conocer.
Harry: [se para frente a la estatua de Slytherin] ¿Y por qué querías conocerme?
Riddle: Sabía que tenía que hablar contigo, conocerte si podía. Así que decidí mostrarte mi captura de ese idiota idiota de Hagrid para ganarme tu confianza.
Harry: [enojado] ¡Hagrid es mi amigo! [se calma un poco] Y lo incriminaste, ¿no?
Riddle: Fue mi palabra contra la de Hagrid. Solo Dumbledore parecía pensar que era inocente.
Harry: [le sonríe] Apuesto a que Dumbledore vio a través de ti.
Riddle: Ciertamente, él me vigiló muy de cerca después de eso. [camina alrededor de Harry mientras habla] Sabía que no sería seguro abrir la Cámara de nuevo mientras todavía estaba en la escuela, así que decidí dejar un diario, preservando mi yo de dieciséis años en sus páginas, así que que un día, podría liderar otro, para terminar el noble trabajo de Salazar Slytherin.
Harry: Bueno, no lo has terminado esta vez. En unas horas, el borrador de Mandrake estará listo. Y todos los que estaban petrificados volverán a estar bien.
Riddle: [sonríe maliciosamente] ¿No te lo he dicho? Matar sangre sucia ya no me importa. Desde hace muchos meses, mi nuevo objetivo ha sido usted. [Harry lo mira sorprendido] ¿Cómo es que un bebé sin un talento mágico extraordinario pudo derrotar al mago más grande de todos los tiempos? ¿Cómo escapaste [aparta el cabello de Harry con su varita para ver su cicatriz] sin nada más que una cicatriz mientras los poderes de Lord Voldemort eran destruidos?
Harry: ¿Por qué te importa cómo escapé? Voldemort estaba detrás de tu tiempo.
Riddle: [sonríe con malicia] Voldemort es ... mi pasado, presente y futuro. [se vuelve hacia la estatua y usa la varita de Harry para escribir su nombre completo en letras llameantes; después de escribir la "E", mueve la varita y las letras se reorganizan para decir "YO SOY SEÑOR VOLDEMORT]
Harry: [mientras las letras se desvanecen y Riddle se vuelve hacia él] Tú. Eres el heredero de Slytherin. [Riddle mira con malicia a Harry] Eres Voldemort.
Riddle: Seguramente, ¿no pensaste que iba a mantener el nombre de mi sucio padre Muggle? No. ¡Me hice un nuevo nombre, un nombre que sabía que los magos de todas partes temerían pronunciar algún día cuando me convirtiera en el mayor hechicero del mundo!
Harry: ¡Albus Dumbledore es el mayor hechicero del mundo!
Riddle: ¡Dumbledore ha sido expulsado de este castillo por el mero recuerdo de mí!
Harry: ¡Nunca se irá! ¡No mientras los que quedan le sean leales! [Harry y Riddle se miran el uno al otro; se escucha un sonido musical cerca; Harry y Riddle miran por el pasillo para ver a Fawkes volando hacia ellos, llevando algo] ¿Fawkes? [Fawkes deja caer un objeto envuelto en las manos de Harry mientras vuela sobre ellos y alrededor de ellos, luego regresa por el pasillo; Harry desenrolla el objeto, que resulta ser el Sombrero Seleccionador]
Acertijo: Esto es lo que Dumbledore envía a su gran defensor: un pájaro cantor y un sombrero viejo. [se aleja de Harry mientras continúa examinando el Sombrero Seleccionador, luego camina hacia la estatua de Slytherin y extiende su mano izquierda] Shearhas- Samnathas- ​​Sélithaeine. (Háblame, Slytherin, el más grande de los cuatro de Hogwarts.)
El basilisco
[Harry se vuelve hacia la estatua de Salazar Slytherin cuando comienza un estruendo; Riddle se da la vuelta para mirarlo mientras la boca de la estatua comienza a abrirse.]
Riddle: Combinemos el poder de Lord Voldemort, heredero de Salazar Slytherin, contra el famoso Harry Potter.
[Harry traga saliva y se vuelve hacia la estatua de nuevo mientras escucha un gruñido siniestro que parece provenir del interior de la estatua e hiperventila; Riddle se vuelve hacia la boca de la estatua mientras el basilisco grita "¡Hambriento!" desde dentro de la estatua. La losa de piedra que oculta la boca de la estatua deja de descender; una fracción de segundo después, el basilisco emerge de la oscuridad y comienza a salir a la luz, gruñendo amenazadoramente. Harry arroja el Sombrero Seleccionador al suelo frente a Ginny y corre hacia la puerta de la Cámara cuando la cabeza del Basilisco sale de la boca de la estatua y su cuerpo de serpiente desciende al agua circundante; Riddle, inmune a la mirada letal del basilisco, observa a la criatura.]
Riddle: Sethae- He- ¡Esto! (¡Mátalo!) [Vuelve su atención al Harry que huye] La lengua pársel no te salvará ahora, Potter. [la cola del basilisco cae al agua detrás de él] ¡Solo me obedece!
[El Basilisco se desliza tras Harry con un gruñido feroz; Harry corre por el pasillo lo más rápido que puede mientras el Basilisco lo persigue; desafortunadamente, Harry pierde el equilibrio en el piso resbaladizo y tropieza, permitiendo que el basilisco lo alcance. Sus anteojos caen al suelo frente a él; Inmediatamente se los vuelve a poner antes de darse cuenta de que el basilisco está justo encima de él. Justo cuando el basilisco está a punto de atacar a Harry, Fawkes emite un grito para llamar su atención. Fawkes se abalanza hacia abajo, yendo directamente hacia el basilisco, y ataca a la colosal serpiente, picoteándola, con Harry observando su pelea mirando sus sombras en la pared.]
Riddle: ¡No! Es posible que tu pájaro haya cegado al basilisco, pero aún puede escucharte.
[Harry se da vuelta para ver que los ojos amarillos del Basilisco están ensangrentados. El basilisco se agita furiosamente mientras Fawkes vuela; Harry se pone de pie y da un paso hacia atrás, chocando contra algo viscoso, provocando un sonido de salpicaduras; Harry mira hacia abajo para ver dónde entró. Al mismo tiempo, el basilisco deja de agitarse y mira ciegamente a Harry, quien mira hacia arriba de nuevo y corre hacia un pasillo a su derecha. El basilisco se abalanza sobre Harry, casi atrapándolo. Harry, respirando con dificultad, corre tan rápido como puede, hacia un túnel justo a su izquierda mientras el Basilisco se lanza hacia él nuevamente, rompiendo una estalactita. Harry corre a través del túnel, mirando hacia atrás para ver si el basilisco todavía está detrás de él; gira a la izquierda hacia una alcoba, solo para encontrar su camino bloqueado por una rejilla. Lucha por moverlo pero se da la vuelta al escuchar al basilisco entrar en el túnel. Da un paso atrás contra la rejilla, mientras el basilisco llega a su posición. El basilisco le silba y se acerca a él con la boca abierta. Harry toma una piedra a sus pies y la lanza; el sonido de la roca distrae al basilisco, que se desliza hacia otro pasadizo. Harry corre de regreso a la Cámara donde están Riddle y Ginny.]
Riddle: Sí, Potter. El proceso está casi completo. [Harry vuelve a poner su mano sobre la de Ginny] En unos minutos, Ginny Weasley estará muerta, y dejaré de ser un recuerdo. [Harry lo mira] Lord Voldemort regresará ... muy ... mucho ... vivo.
Harry: [volviendo a mirar a Ginny] Ginny ...
[El basilisco sale del agua que rodea la estatua de Slytherin y se agita; Harry se vuelve hacia el Sombrero Seleccionador, donde aparece mágicamente una espada. Harry, sin dudarlo, toma la espada y la sostiene a la defensiva mientras el basilisco se desliza hacia él. Harry corre hacia la estatua y comienza a treparla; el basilisco sigue ciegamente los movimientos de Harry, usando su lengua para rastrear su ubicación y levanta su cuerpo del piso. El basilisco usa su lengua de nuevo para encontrar la posición actual de Harry directamente frente a él; Harry balancea la espada hacia el basilisco; se lanza directamente hacia él, él lo esquiva y se estrella contra la estatua. Harry sube más alto cuando el Basilisco se lanza hacia él nuevamente, fallando de nuevo; Harry sube a la parte superior de la cabeza de la estatua, el basilisco se abalanza sobre Harry repetidamente mientras agita la espada salvajemente hacia la criatura. Finalmente, el basilisco envía a Harry rodando por el costado de la estatua, lo que le hace perder la espada.]
Harry: [viendo la espada a punto de deslizarse de la parte superior de la cabeza de la estatua] No.
[Harry se apresura a recuperar la espada; el basilisco se lanza directamente hacia Harry una vez más. Harry detiene la espada justo a tiempo y la atraviesa la mandíbula superior del basilisco. El basilisco brama de dolor hasta que Harry saca la espada. Harry grita de dolor cuando uno de los colmillos venenosos del basilisco cae en su brazo; saca el colmillo, desafortunadamente, el veneno ya está en su torrente sanguíneo. El basilisco se agita, rugiendo y aullando de dolor, colapsando bajo su peso y cae de espaldas al suelo, muerto, salpicando agua por todas partes; Riddle mira el cadáver del basilisco con incredulidad.]
Poderes curativos
[Harry pasa cojeando junto al cadáver del Basilisco, y, dejando caer la espada y cayendo de rodillas, se arrastra hacia Ginny una vez más mientras Riddle camina hacia ellos.]
Riddle: Notable, ¿no? Qué tan rápido penetra el veneno del basilisco en el cuerpo. Supongo que te queda poco más de un minuto de vida. Pronto estarás con tu querida madre sangre sucia, Harry. [Harry extiende su mano izquierda a la de Ginny de nuevo] Gracioso ... el daño que puede hacer un pequeño libro tonto ... especialmente en las manos de una niña tonta. [Harry mira el diario en el brazo de Ginny y lo saca con cuidado, colocándolo en el suelo entre ella y el colmillo de basilisco] ¿Qué estás haciendo? [Harry toma el colmillo de basilisco y lo sostiene mientras mira a Riddle, quien inmediatamente se da cuenta de lo que Harry está a punto de hacer] Detente. ¡No!
[Harry apuñala una de las páginas del diario con el colmillo mientras Riddle da un paso adelante para intentar detenerlo; El cuerpo de Riddle se desmorona y emite una descarga de luz amarilla; la tinta comienza a rezumar del diario, Riddle retrocede y gruñe de rabia; Harry saca el colmillo. Riddle intenta atacar, pero Harry apuñala la otra página, paralizando a Riddle y provocando que se desmorone aún más; Harry cierra el diario y apuñala la portada con el colmillo de basilisco; Riddle grita de agonía y se desintegra en partículas amarillas; poco después de la muerte de Riddle, Ginny se despierta hiperventilando y se sienta.]
Harry: Ginny.
Ginny: [volviéndose hacia él] Harry, fui yo. Pero, lo juro, no fue mi intención ... Riddle me hizo. Y ... [nota la herida de Harry] Harry ... estás herido.
Harry: [cubriendo su herida] No te preocupes. Ginny, tienes que salir. Sigue la Cámara y encontrarás a Ron. [Fawkes vuelve a emitir su canción; Harry y Ginny miraron por el pasillo para verlo volar hacia ellos; se abalanza alrededor del cuerpo del basilisco y aterriza entre ellos, luego se acerca a Harry] Estuviste brillante, Fawkes. Simplemente no fui lo suficientemente rápido. [Fawkes emite un suave gruñido, luego baja la cabeza hacia la herida de Harry y llora sobre ella; la herida desaparece milagrosamente; Ginny mira con asombro] ¡Por supuesto! [levantando su brazo curado] Las lágrimas de Fénix tienen poderes curativos. [Fawkes gruñe afirmativamente mientras Harry lo mira] Gracias. [mira a Ginny] Está bien, Ginny. Se acabó. Es solo un recuerdo.
[Fawkes luego saca a Lockhart, Ron, Harry y Ginny de la Cámara de los Secretos.]
Lockhart: ¡Increíble! ¡Esto es como magia!
[Fawkes los lleva a los cuatro hacia la abertura de una cueva ya que la luna se puede ver sobre ellos.]
Fuera del sombrero
[Harry y Ron se paran ante el profesor Dumbledore en su oficina, con Fawkes en su percha, y la espada y Sombrero Seleccionador descansando sobre el escritorio.]
Profesor Dumbledore: Ambos se dan cuenta, por supuesto, que en las últimas horas, tal vez han roto una docena de reglas escolares.
Harry y Ron: Sí, señor.
Profesor Dumbledore: Y hay suficiente evidencia para expulsarlos a ambos.
Harry y Ron: Sí, señor.
Profesor Dumbledore: Por lo tanto, es apropiado ... [Harry y Ron miran hacia arriba] que ambos reciban premios especiales por sus servicios a la escuela. [Harry y Ron se miran con una sonrisa, luego vuelven a mirar a Dumbledore]
Ron: Gracias, señor.
Profesor Dumbledore: [sonríe a los chicos, luego se pone de pie mientras le entrega algunos papeles a Ron] Y ahora, Sr. Weasley, si quiere, haga que una lechuza entregue estos papeles de liberación a Azkaban. Creo que ... queremos a nuestro guardabosques de vuelta. [se vuelve hacia Harry mientras Ron sale de la habitación] Harry ... primero, quiero darte las gracias, Harry. Debes haberme mostrado verdadera lealtad en la Cámara. Nada más que eso podría haberte llamado a Fawkes. Y, segundo ... siento que algo te está preocupando. ¿Estoy en lo cierto, Harry?
Harry: Verá, señor. No pude evitar notar ciertas cosas ... ciertas ... ciertas similitudes entre ... Tom Riddle y yo.
Profesor Dumbledore: Ya veo. Bueno, puedes hablar pársel, Harry. ¿Por qué? Porque Lord Voldemort puede hablar pársel. Si no me equivoco, Harry, te transfirió algunos de sus poderes la noche que te dio esa cicatriz.
Harry: [asombrado] Voldemort transfirió algunos de sus poderes ... ¿a mí?
Profesor Dumbledore: Ajá. No intencionalmente. Pero si.
Harry: [mientras Dumbledore regresa a su asiento detrás del escritorio] Entonces, el Sombrero Seleccionador tenía razón; Debería estar en Slytherin.
Profesor Dumbledore: Es cierto, Harry. Posees muchas de las cualidades que el mismo Voldemort valora: determinación, ingenio y, si puedo, cierto desprecio por las reglas. Entonces, ¿por qué el Sombrero Seleccionador te colocó en Gryffindor?
Harry: [mirando al Sombrero Seleccionador] Porque yo se lo pedí.
Profesor Dumbledore: Exactamente, Harry, exactamente. Lo que te hace diferente de Voldemort. No son nuestras habilidades las que muestran lo que realmente somos, son nuestras elecciones. Si quieres una prueba de por qué perteneces a Gryffindor, te sugiero que mires más de cerca [levanta la espada] en esto. [Harry toma la espada por la hoja con la mano izquierda y la empuñadura con la derecha] Ten cuidado.
Harry: [examina la espada y ve el nombre "Godric Gryffindor" en la hoja cubierta de veneno de basilisco] Godric Gryffindor.
Profesor Dumbledore: Ah. Se necesitaría un verdadero Gryffindor para sacar eso del sombrero. [Harry mira a Dumbledore]
La recompensa de Dobby
[La puerta de la oficina se abre, Dumbledore mira más allá de Harry, quien se da la vuelta; Lucius Malfoy entra a la oficina, parado detrás de él está Dobby.]
Harry: ¡Dobby! Entonces este es tu maestro. La familia a la que sirves son los Malfoy.
Dobby: [mirando nerviosamente a Harry] Mm-hmm. [mira a Lucius con miedo]
Lucius: [con los dientes apretados] Me ocuparé de ti más tarde. [Dobby se encoge de miedo y gime; Lucius saca su bastón y camina hacia el escritorio de Dumbledore, seguido por Dobby; mientras sube las escaleras, usa fríamente el palo para empujar a Harry a un lado] Fuera de mi camino, Potter. Por lo que es verdad. Tu has regresado.
Profesor Dumbledore: Cuando los gobernadores se enteraron de que la hija de Arthur Weasley había sido llevada a la Cámara, consideraron oportuno llamarme de regreso.
Lucius: [enojado] ¡Ridículo!
Bienvenido de nuevo
[Es la fiesta de fin de año; Nick Casi Decapitado, ahora revitalizado, flota a lo largo de la fila entre las mesas de Gryffindor y Hufflepuff en el Gran Comedor.]
Estudiante: ¡Bienvenido de nuevo, Sir Nicholas!
Nick Casi Decapitado: Gracias.
Otra estudiante: Buenas noches, Sir Nicholas.
Nick Casi Decapitado: Buenas noches.
Estudiante masculino: Es bueno verte, Sir Nicholas.
Nick Casi Decapitado: Gracias. [mirando a otro par de estudiantes] Hola. [llegando a las puertas del Gran Comedor, pasa junto a Filch, quien está feliz de tener de regreso a la Sra. Norris, y Hermione entra mientras él se vuelve hacia ella] ¡Hermione! Dar una buena acogida.
Hermione: Gracias, Sir Nicholas. [Nick Casi Decapitado se aleja flotando mientras Hermione mira hacia la mesa de Gryffindor]
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)