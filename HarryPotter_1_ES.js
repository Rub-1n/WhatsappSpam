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

Harry Potter Y La Piedra Flosofal (Chapter 1)

Entrega en la puerta
[Es de noche en Surrey, vemos dos búhos en el letrero de la calle "PRIVET DRIVE" y la cámara se enfoca en la calle con casas de ladrillos marrones de aspecto muy idéntico. Una de las lechuzas vuela para revelar a un anciano con túnica carmesí, y la larga barba blanca plateada llamada Albus Dumbledore camina por un bosque cerca de la calle. Saca su delimitador y lo activa. Dumbledore apaga toda la luz de las farolas. Guarda el dispositivo y un gato maúlla. Dumbledore mira al gato, que es un gato atigrado y está sentado en una repisa de ladrillos.]

Dumbledore: Debería haber sabido que usted estaría aquí ... Profesora McGonagall.
[El gato maúlla, olfatea y la cámara gira hacia la pared. Vemos que la sombra del gato se transforma en una mujer con sombrero de copa. Hay pasos y Minerva McGongall se revela.]



McGonagall: Buenas noches, profesor Dumbledore. ¿Son ciertos los rumores, Albus?
Dumbledore: Me temo que sí, profesor. El bueno y el malo.
McGonagall: ¿Y el chico?
Dumbledore: Hagrid lo traerá.
McGonagall: ¿Crees que es prudente confiarle a Hagrid algo tan importante como esto?
Dumbledore: Ah, profesor, confiaría mi vida a Hagrid.
[Hay un sonido de motor, y los dos profesores miran hacia arriba para ver una motocicleta volando bajando del aire. Patina en la calle y se detiene. Un hombre grande con cabello negro hasta los hombros y barba llamado Rubeus Hagrid, se quita las gafas.]

Hagrid: Profesor Dumbledore, señor. Profesora McGonagall.
Dumbledore: ¿No hay problemas, confío, Hagrid?
Hagrid: No, señor. El pequeño se quedó dormido justo cuando volamos sobre Bristol. Je. Trate de no despertarlo. Ahí tienes.
[Hagrid le entrega un bebé envuelto en un paquete a Dumbledore.]



McGonagall: Albus, ¿de verdad crees que es seguro dejarlo con esta gente? Los he observado todo el día. Son el peor tipo de muggles imaginables. Realmente son ...
Dumbledore: La única familia que tiene.
[Se detienen frente a una casa que está en el número 4 de Privet Drive.]

McGonagall: Este chico será famoso. No habrá un niño en nuestro mundo que no sepa su nombre.
Dumbledore: Exactamente. Es mejor que crezca lejos de todo eso. Hasta que esté listo.
[Dumbledore coloca al bebé en el suelo lentamente. Hagrid solloza, está sollozando un poco. Se aclara la garganta.]



Dumbledore: Ahí, ahí, Hagrid. No es realmente un adiós, después de todo.
[Hagrid asiente. Dumbledore toma una carta y se la coloca al bebé, que ahora está al pie de la puerta.]

Dumbledore: Buena suerte ... Harry Potter.
[El bebé tiene una cicatriz en forma de rayo en la frente. La cámara hace zoom lentamente hacia la cicatriz que brilla intensamente e inmediatamente parpadea, pasando a un cielo nuboso tormentoso. El título de la película en oro metálico se aleja alrededor de la cámara y los relámpagos parpadean para iluminarla. Luego, los relámpagos envuelven la pantalla, transformándola en el tiempo presente.]

The Vanishing Glass
[El resplandor de la cicatriz se apaga inmediatamente y la cámara gira para ver a Harry, que ahora tiene 10 años, todavía durmiendo. Entonces, la luz se enciende fuera del armario de su dormitorio debajo de las escaleras]
Petunia: Arriba. Levántate. [Ella llama a la puerta de su armario repetidamente] ¡Ahora! [Golpea la puerta del armario y entra a la sala de estar]


[Harry se despierta, enciende la luz de su dormitorio y se pone las gafas con cinta adhesiva en el puente, lo que indica que estaba parcialmente dañado. Un niño grande y rechoncho, Dudley Dursley, de repente baja corriendo las escaleras sobre el armario. Se detiene a mitad de camino y regresa, saltando por las escaleras.]

Dudley: ¡Despierta, primo! ¡Vamos al zoológico!
[Harry mira hacia los trabajos de unión de las escaleras con pequeñas cantidades de polvo subiendo. Dudley se ríe, baja las escaleras y corre hacia la cocina. Harry intenta salir del armario, pero Dudley lo empuja hacia adentro. Petunia está en la cocina, adonde ha ido Dudley.]

Petunia: ¡Ah, ahí viene, el cumpleañero!
Vernon: Feliz cumpleaños, hijo.
[Petunia y Dudley se ríen juntos. Harry entra en la cocina, vestido con ropas pequeñas.]

Petunia: [a Harry, desagradable] ¿Por qué no cocinas el desayuno y tratas de no quemar nada?
Harry: Sí, tía Petunia.
[Harry luego se pone a cocinar el tocino]

Petunia: Quiero que todo sea perfecto para el día especial de mi Dudley.
Vernon: [a Harry, que se está tomando su tiempo para colocar el tocino en los platos] ¡Apúrate! ¡Trae mi café, muchacho!
Harry: Sí, tío Vernon.
[Petunia lleva a Dudley a la sala familiar, donde hay una gran cantidad de regalos. Dudley mira fijamente.]

Petunia: ¿No son maravillosos, cariño?
Dudley: ¿Cuántos hay?
Vernon: Treinta y seis. Los conté yo mismo.
Dudley: ¿Treinta y seis? ¡¡Pero el año pasado el año pasado tuve treinta y siete !!
Vernon: Eh, sí, bueno, algunos de ellos son un poco más grandes que el año pasado.
Dudley: ¡No me importa lo grandes que sean!
Petunia: [tranquilizándolo] Oh, ahora, ahora, ahora. Esto es lo que vamos a hacer, es que cuando salgamos, ¡os vamos a comprar dos regalos nuevos! ¿Qué te parece, calabaza?
[Fuera de la casa por la mañana. La familia feliz se dirige al auto.]



Petunia: Este será un hermoso día en el zoológico. Tengo muchas ganas de hacerlo.
[Harry luego va a entrar en el auto, pero Vernon lo detiene, apuntándole con las llaves.]

Vernon: Te lo advierto ahora, muchacho. Cualquier asunto divertido, cualquiera, y no comerás durante una semana. Sube.
[En el Zoológico de Londres. La familia está en la casa de los reptiles, mirando un gran constructor de Boa.]
Dudley: Haz que se mueva.
[Vernon golpea el cristal de la jaula.]

Vernon: ¡Muévete!
[Dudley golpea el vaso con más fuerza y ​​Vernon hace una mueca de dolor.]
Dudley: ¡MOVERSE!
Harry: ¡Está dormido!
Dudley: Es aburrido.
[Dudley y sus padres se dirigen a otro recinto. Harry se queda con la serpiente.]

Harry: Lo siento por él. Él no entiende lo que es estar ahí tirado día tras día, teniendo gente presionando sus caras feas sobre ti. [La serpiente mira hacia arriba y parpadea.] ¿Puedes ... oírme? [La serpiente asiente] Es solo que ... Nunca antes había hablado con una serpiente. ¿Tú ... quiero decir ... hablas con la gente a menudo? [La serpiente sacude la cabeza] Eres de Birmania, ¿no? ¿Estuvo bien allí, extrañas a tu familia? [La serpiente gira la cabeza en dirección a un cartel que dice: Criado en cautiverio] Ya veo. Ese soy yo también. Tampoco conocí a mis padres.


[La serpiente ahora despierta ha atraído la atención de Dudley. Se acerca al vaso y tira a Harry al suelo.]

Dudley: ¡Mamá, papá, ven aquí! ¡No creerás lo que está haciendo esta serpiente!
[Dudley pone sus manos en la pared de vidrio. Con su espalda vuelta, Harry lo mira. De repente, el cristal desaparece, lo que hace que Dudley se incline hacia adelante, perdiendo el equilibrio.]

Dudley: ¡Vaya! ¡Ahh! Ahh !!
[Dudley cae dentro del recinto de la serpiente, chisporroteando en un charco de agua. Harry se ríe de lo que vio. La serpiente sale de la exhibición, deteniéndose frente a Harry.]

Snake: Gracias.
Harry: Cuando quieras.
[La serpiente se lanza hacia la salida.]

Hombre: ¡SERPIENTE!
[Hay muchos gritos mientras la serpiente se dirige hacia la libertad. Dudley se levanta para salir, pero el cristal ahora está de vuelta sobre el recinto. Al ver que ahora está atrapado, golpea el vaso en pánico.]

Dudley: ¡Mamá, mamá!
Petunia: [lo ve en la exhibición] ¡AHH!
Dudley: ¡Mamá, ayuda! ¡Ayuadame!
Petunia: ¡Mi querido muchacho! ¡¿Cómo entraste ahí ?! ¿Cómo entraste ahí? ¡Dursley, oh, Dursley!
[Harry sonríe y se ríe, Vernon se da cuenta de esto y lo mira. La sonrisa de Harry desaparece, sabiendo que tiene problemas con Vernon.]

Cartas de nadie
[De vuelta en casa de los Dursley. Entran Petunia y un Dudley abrigado.]

Petunia: [asegurando a un Dudley angustiado] Está bien. Todo está bien.
[Entran en la sala de estar. Entran Harry y Vernon. Vernon golpea la puerta y empuja a Harry contra la pared, tomándolo del pelo.]

Harry: ¡Ay!
Vernon: ¡¿Qué pasó ?!
Harry: ¡Te juro que no lo sé! [Vernon gruñe] ¡Un minuto, el vaso estaba allí y luego desapareció! ¡Fue como magia!
[Vernon se burla de esto, empuja a Harry en el armario debajo de las escaleras y cierra la puerta]



Vernon: ¡No existe la magia! [apaga la rejilla de ventilación de la puerta]
[Un búho vuela a la vista y se posa en una antena de TV en el techo de una de las casas]

(Versión extendida)

[La cámara gira lentamente para revelar a Dudley con su uniforme escolar más elegante, posando y sonriendo grandiosamente.]

Petunia: Awww, sonríe. [Le toma una fotografía. Ella jadea de alegría.] Vernon, solo míralo. No puedo creerlo En solo una semana te irás a Smeltings.
Vernon: Advertencia Smeltona. El momento más orgulloso de mi vida.
Harry: ¿Tendré que usar eso también?
[Llaman su atención hacia Harry]

Petunia: ¿Qué, tú? ¿Ir a Fundiciones? [Harry asiente, cuestionable]
Vernon: ¡Ja!
[Se ríen divertidas]

Petunia: Oh, no seas tan estúpido, vas a ir a la escuela pública a la que perteneces. [Va a la cocina y saca una camisa gris en una caldera.] Y esto es lo que te pondrás cuando termine de teñirlo.
Harry: Pero ese es el viejo uniforme de Dudley. Me quedará como pedazos de piel de elefante viejo.
Petunia: Te quedará bastante bien. Ve a buscar la publicación. [Harry luego se dirige al pasillo] ¡Vamos!
(Versión normal)

[Harry sale de la sala de estar hacia el pasillo y toma algunas cartas, una de las cuales tenía su nombre con la dirección de donde dormía. El tío Vernon y Dudley se sientan a la mesa mientras la tía Petunia está ocupada preparando el desayuno. Harry entra con el correo y se lo da al tío Vernon, luego camina hacia su asiento con su carta.]

Vernon: [después de leer una postal] ¡Oh, Marge está enferma! Comió un buccino divertido.


[Dudley de repente se da cuenta de la carta de Harry y corre a cogerla y dársela a su padre.]

Dudley: ¡Papá! ¡Mira! ¡Harry tiene una carta!
Harry: ¡Oye, devuélvemelo! ¡Es mio!
Vernon: ¿Tuyo? ¿Quién te estaría escribiendo?
[La familia se reúne para mirar la dirección. Hay un sello roto en la carta. La familia mira hacia arriba y Harry traga saliva. Mucho más tarde, otro búho pasa volando con una carta y la deja. En el interior, Vernon agarra un puñado de cartas y las rompe. En el armario, Harry escucha un zumbido. Mira a Vernon perforando madera sobre la abertura del buzón.]

Vernon: No más correo a través de este buzón.
[Harry cierra silenciosamente la puerta del armario. Al día siguiente, Vernon y Petunia están afuera de la puerta. Vernon está a punto de irse a trabajar. Petunia besa su mejilla.]

Petunia: Que tengas un hermoso día en la oficina, querida.
[Se detiene, mira y ve un montón de búhos.]

Vernon: ¡Shoo! ¡Seguir!
[Se da cuenta de algo y le da una palmada a Vernon en el hombro para llamar su atención, y lo que ven son más cartas dirigidas a Harry.]

(Versión extendida)

[Más tarde, Petunia está rompiendo un huevo en un tazón, y lo que en su lugar sale es un carta doblada. Rompe otra, pero también sale otra. Luego rompe otro, pero vuelve a suceder lo mismo. Mira fijamente la carta y luego oye a los búhos chillar. Llama su atención hacia el exterior de la ventana y lo que ve son cuatro búhos sentados en unas sillas de jardín. Petunia luego grita y sale corriendo.]

(Versión normal)

[Mucho más tarde, Vernon arroja cartas a la chimenea. Harry llega a la esquina. Vernon sonríe con maldad y lanza más. La escena se desvanece al día siguiente, la familia está sentada, Harry está sirviendo galletas.]

Vernon: Buen día domingo. En mi opinión, el mejor día de la semana. ¿Por qué es eso, Dudley?
Harry: [cuando Dudley se encoge de hombros y no responde, mientras Harry le entrega una galleta a Vernon] ¿Porque no hay publicación el domingo?
Vernon: Ah, tienes razón, Harry. No hay publicación el domingo. ¡Decir ah! Hoy no hay malditas cartas. No señor. Ni una maldita carta, ni una. [Harry ve una sombra fuera de la ventana. Afuera, hay millones de búhos posados.] No, señor, ni uno maldito, miserable ...
[Mientras Vernon estaba hablando, una carta sale disparada de la chimenea y cruza la cara de Vernon, interrumpiéndolo. Se oye un estruendo y luego millones de cartas salen disparadas de la chimenea. La familia grita de horror mientras Harry mira con asombro.]

Dudley: ¡AHH! ¡Hazlo parar! ¡Por favor haz que pare! [Salta sobre el regazo de Petunia mientras ella y Vernon continúan gritando]
Vernon: ¡Vete, ahh!
Dudley: ¿Qué es? ¡Dime qué está pasando!
[Harry salta a la mesa de café para tomar una carta. Obtiene uno y comienza a huir. Vernon también se levanta de un salto.]

Vernon: ¡Dame eso! ¡Dame esa carta!
[Persigue a Harry y lo agarra antes de que Harry entre en su armario.]

Harry: ¡Bájate! ¡Ahh!
[Vernon refrena a Harry mientras varias letras comienzan a dispararse por todos lados de la casa.]

Vernon: ¡Ahh!
Harry: ¡Son mis cartas! ¡Suéltame!
[La tabla de madera clavada frente al buzón finalmente se rompe por el exceso de presión de las letras que atraviesan la carta.]

Vernon: ¡Eso es! ¡Nos vamos! ¡Muy lejos! ¡Donde no puedan encontrarnos!
Dudley: Papi se ha vuelto loco, ¿no?
[Petunia mira con una mirada horrorizada en su rostro, sabiendo que Dudley puede tener razón.]

Guardián de las Llaves
[Esa noche de tormenta, una casa alta, en una isla rocosa en algún lugar del mar. Los Dursley, incluido Harry, se han mudado allí debido al caos con las letras. La familia está durmiendo, con Harry en el frío suelo de tierra y Dudley durmiendo en un sofá. Harry ha dibujado un pastel de cumpleaños que dice: Feliz cumpleaños, Harry. Harry mira el reloj de Dudley, que emite un pitido a las 12:00.]

Harry: [para sí mismo] Pide un deseo, Harry. [sopla las "velas" en el pastel de cumpleaños dibujado]
[De repente, la puerta golpea, en sincronía con el trueno. Harry salta. La puerta vuelve a golpear y Dudley y Harry saltan y se alejan. Harry se esconde detrás de una pared y Dudley se esconde en el alféizar de una ventana. Aparecen Petunia y Vernon, con Vernon sosteniendo una pistola de doble cañón.]

Vernon: ¿Quién está ahí? ¡Ahh!
[La puerta vuelve a golpear y luego se cae, y aparece un hombre gigante. Cuando entra en la luz clara, se revela que es Hagrid.]

Hagrid: Lo siento por eso. [Vuelve a abrir la puerta]
Vernon: [apuntándole con el arma] ¡Le exijo que se vaya de inmediato, señor! ¡Estás entrando y entrando!
[Mientras Petunia jadea silenciosamente de miedo, Hagrid agarra el arma y la dobla hacia arriba.]

Hagrid: Sécate, Dursley, eres un gran tonto. [El arma dispara hacia arriba, haciendo un agujero en el techo, haciendo que los dos griten de miedo. Hagrid se da cuenta de Dudley.] Chico, no te he visto desde que eras un bebé, Harry, pero estás un poco más avanzado de lo que esperaba. ¡Particularmente alrededor del medio!
Dudley: Yo-yo no soy Harry.
[Harry se revela]

Harry: Lo soy.
Hagrid: ¡Oh, bueno, por supuesto que sí! Tengo algo para ti. ¡Me temo que podría haberme sentado en él en algún momento! Imagino que sabrá bien de todos modos. Ahh. Lo horneé yo mismo. [Le entrega el pastel a Harry] Palabras y todo. Je.
[Harry abre el pastel, que dice "Happee Birdae Harry" con glaseado verde.]

Harry: ¡Gracias!
Hagrid: No todos los días tu joven cumple once años, ¿verdad?
[Hagrid se sienta en el sofá, saca un paraguas y lo apunta al fuego vacío. Se apagan dos chispas y comienza el fuego. La familia jadea.]

Harry: [deja el pastel] Disculpe, ¿quién es usted?
Hagrid: Rubeus Hagrid. Guardián de llaves y terrenos en Hogwarts. Por supuesto, lo sabrás todo sobre Hogwarts.
Harry: Lo siento, no.
Hagrid: ¿No? Caray, Harry, ¿nunca te preguntaste dónde lo aprendieron todo tu mamá y tu papá?
Harry: ¿Aprendiste qué?
Hagrid: Eres un mago, Harry.
[Harry parece confundido]

Harry: ¿Soy un qué?
Hagrid: un mago. Y apuesto a que es bueno. Una vez que entrenes un poco.
Harry: No, cometiste un error. No puedo ser ... un mago. Quiero decir, solo soy ... Harry. Solo Harry.
Hagrid: Bueno, solo Harry. ¿Alguna vez hiciste que sucediera algo? ¿Algo que no pudiste explicar cuando estabas enojado o asustado? [Harry suaviza su expresión] Ah.
[Dudley gime. Hagrid le entrega a Harry la misma carta que le han enviado en el pasado. Harry lo abre.]

Harry: Estimado Sr. Potter. Nos complace informarle que ha sido aceptado en la Escuela de Magia y Hechicería de Hogwarts.
Vernon: [a Hagrid] ¡No irá! ¡Juramos cuando lo acogimos, pondríamos fin a esta basura!
Harry: ¿Lo sabías? ¿Lo supiste todo el tiempo y nunca me lo dijiste?
Petunia: Por supuesto que lo sabíamos. ¿Cómo no podrías serlo? Mi hermana perfecta siendo quien era. Oh, mi madre y mi padre estaban muy orgullosos el día que recibió su carta. Tenemos una bruja en la familia. ¿No es maravilloso? Fui el único que la vio por lo que era. ¡Un monstruo! Y luego conoció a ese Potter, y luego te tuvo a ti, y supe que serías igual, igual de extraño, igual de ... anormal. Y luego, por favor, fue y se hizo volar. Y aterrizamos contigo.
Harry: [a Petunia, enojado] ¿Explotado? ¡Me dijiste que mis padres murieron en un accidente automovilístico!
Hagrid: ¿Un accidente automovilístico? ¿Un accidente automovilístico mató a James y Lily Potter?
Petunia: Teníamos que decirle algo.
Hagrid: ¡Es un ultraje! ¡Es un escándalo!
[Mientras los Dursley discuten con Hagrid, nadie, incluido Harry, se da cuenta de que Dudley se lleva el pastel de Harry]

Vernon: ¡No irá!
Hagrid: Oh, y supongo que un gran muggle como tú lo detendrá, ¿verdad?
Harry: ¿Muggle?
Hagrid: [a Harry, con calma] Gente no mágica. [inmediatamente llama su atención de nuevo a Vernon y Petunia enojado] ¡Este niño ha tenido su nombre desde que nació! [Mientras Hagrid hablaba, Dudley masticaba el pastel de Harry.] Va a la mejor escuela de hechicería y hechicería del mundo, y estará con el mejor director que Hogwarts haya visto: Albus Dumbledore.
[Harry sonríe al escuchar el nombre de Dumbledore]

Vernon: ¡No pagaré por un viejo tonto para que le enseñe trucos de magia!
[Hagrid saca su paraguas y apunta a Vernon, amenazadoramente.]

Hagrid: Nunca, insultes a Albus Dumbledore, frente a mí.
[Hagrid finalmente ve a Dudley comiendo el pastel de Harry y apunta su paraguas hacia su trasero. Le dispara una chispa mágica,

Dudley: ¡Ahh!
[Los Dursley chillan de miedo y horror, mientras se pierden de vista. Harry se ríe de esto, y Hagrid también.]

Hagrid: Oh, eh, agradecería que no le dijeras a nadie en Hogwarts sobre eso. Estrictamente hablando, no tengo permitido hacer magia.
Harry: [Asiente] Está bien.
Hagrid: [mira su reloj de bolsillo] Ooh, estamos un poco retrasados. Será mejor que te vayas. [va hacia la puerta y la baja de nuevo, antes de salir. Se vuelve hacia Harry] A menos que prefieras quedarte, por supuesto. ¿Hmm?
[Sale. Harry sonríe, mira hacia atrás en la dirección donde se han ido los Dursley y vuelve a sonreír antes de agarrar su chaqueta y unirse a Hagrid en su viaje a Londres.]

Callejón Diagon
[Al día siguiente, en las calles de Londres]

(Versión Extendida)

[Harry y Hagrid están en el metro.]

Harry: [leyendo la lista] Los estudiantes de primer año necesitarán: tres juegos de túnicas de trabajo, una varita. [Se vuelve hacia Hagrid]
Hagrid: Equipo esencial, Harry.
Harry: Un par de guantes de piel de dragón. [se vuelve hacia Hagrid de nuevo] Hagrid, ¿se refieren a un dragón de verdad?
Hagrid: Bueno, no significan para un pingüino, ¿verdad? Je. Crikey, pero no un dragón.
Harry: ¿Pero te gusta un dragón?
Hagrid: Bestias rápidas e incomprendidas, Harry. Rápido e incomprendido. [De repente mira a una mujer y luego asiente. La mujer vuelve a leer su periódico.]
(Versión normal)

[La siguiente escena, Hagrid y Harry están caminando por las calles.]

Harry: Todos los estudiantes deben estar equipados con ... un caldero de dos peltre de tamaño estándar y pueden traer si lo desean un búho, un gato o un sapo. ¿Podríamos encontrar todo esto en Londres?
Hagrid: Si sabes a dónde ir.
[Ellos caminan hacia una tienda de la esquina y mientras se acercan, el letrero de arriba tiene "El Caldero Chorreante" apareciendo mágicamente. Entran en el Caldero Chorreante. Había música y varios clientes hablando entre ellos.]

Tom: ¡Ah, Hagrid! ¿Lo de siempre, supongo?
Hagrid: No gracias, Tom. Hoy estoy en asuntos oficiales de Hogwarts. Solo ayudaba al joven Harry a comprar sus útiles escolares.
Tom: Bendice mi alma. Es Harry Potter.
[El pub se queda en silencio inmediatamente y todos se dan cuenta. Un hombre se acerca y estrecha la mano de Harry.]

Hombre: Bienvenido de nuevo, Sr. Potter, bienvenido de regreso.
[Una bruja se acerca y también estrecha la mano de Harry.]

Bruja: Doris Crockford, Sr. Potter. No puedo creer que te encuentre por fin.
[Aparece un hombre con túnica y turbante en la cabeza. Es el profesor Quirrell.]

Quirrell: Harry P-potter. No puedo decirte lo contento que estoy de conocerte.
Hagrid: Hola, profesor. No te vi allí. Harry, este es el profesor Quirrell. Será tu profesor de Defensa Contra las Artes Oscuras en Hogwarts.
Harry: Oh, encantado de conocerte. [extiende su mano, ofreciendo un apretón de manos con Quirrell. Pero mira la cabeza de Harry y vacilante se niega]
Quirrell: F-tema terriblemente fascinante. N-no es que lo necesites, ¿e-eh, Potter? Jejeje.
Hagrid: Sí, bueno, debo irme ahora. Mucho para comprar. Je.
Harry: Adiós.
[Los dos se van a una bodega en la trastienda frente a una pared de ladrillos.]

Hagrid: ¡Mira, Harry, eres famoso!
Harry: ¿Pero por qué soy famoso, Hagrid? Toda esa gente allá atrás, ¿cómo es que saben quién soy?
Hagrid: No estoy exactamente seguro de ser la persona adecuada para decirte eso, Harry. [Golpea la pared de ladrillos en el sentido de las agujas del reloj con su paraguas. Luego, los bloques se mueven mágicamente y se abren para revelar una calle concurrida y oculta llamada Callejón Diagon.] Bienvenido, Harry, al Callejón Diagon. [Harry sonríe ampliamente mientras salen a la calle y la recorren. Un búho chilla.] Aquí es donde obtendrás tus plumas y tinta, y allí todos tus bits y bobs para hacer tu hechicería.
[Harry está asombrado cuando pasan por tiendas, búhos y murciélagos. La cámara se enfoca en una tienda de escobas, donde un grupo de niños está apiñado alrededor de una escoba brillante.]

Chico: Es una escoba de carreras de clase mundial. ¡Míralo, es la nueva Nimbus 2000! Es el modelo más rápido hasta ahora. [la cámara gira para ver el nombre del modelo de la escoba en el mango]
Gringotts
[Harry y Hagrid continúan caminando por el Callejón Diagon]

Harry: Pero, Hagrid, ¿cómo voy a pagar por todo esto? No tengo dinero.
Hagrid: Bueno, ahí está tu dinero, Harry. [Señala un edificio alto, blanco, de mármol, Gringotts Bank] Gringotts, el Wizard Bank. No hay lugar más seguro, excepto quizás Hogwarts.
[Dentro del banco, caminan por el pasillo brillante, pasando al lado de pequeñas criaturas que trabajan en sus escritorios].
Harry: Uh, Hagrid, ¿qué son exactamente estas cosas?
Hagrid: Son goblins, Harry. Inteligentes como son los goblins, pero no son las bestias más amigables. Mejor quédate cerca de mí. [Harry se pega a él. Hagrid se aclara la garganta cuando se acercan a un mostrador con un duende, con gafas y chaleco adentro.] El Sr. Harry Potter desea retirarse.
[El duende mira hacia arriba.]

Goblin: ¿Y el Sr. Harry Potter tiene su llave?
Hagrid: Oh. Espera un minuto. Lo tengo aquí en alguna parte. Ja. Ahí está el pequeño diablo. [Susurros] Ah, y también hay algo más. [Saca una carta envuelta en una cuerda.] El profesor Dumbledore me dio esto. [Hagrid le entrega la carta al Goblin.] Se trata de tú-sabes-qué en la bóveda tú-sabes-cuál.
Goblin: Muy bien.
[Más tarde, corren por las cavernas profundas en una estructura similar a un carro. El carro se detiene, un goblin llamado Griphook sale trepando.]

Griphook: Refugio 687. Lámpara, por favor. [Hagrid le entrega la lámpara y camina hacia la bóveda] Llave, por favor.
[Hagrid le entrega la llave y Griphook abre la bóveda. La habitación está llena casi de arriba a abajo con monedas. Harry está asombrado.]

Hagrid: No pensaste que tu mamá y tu papá te dejarían sin nada ahora, ¿verdad?
[Continúan a través de la caverna.]

Griphook: Refugio 713.
Harry: ¿Qué hay ahí, Hagrid?
Hagrid: No puedo decirte, Harry. Es asunto de Hogwarts. Muy secreto.
Griphook: Retrocede. [Desliza el dedo por la puerta. La bóveda se abre para revelar un pequeño paquete de piedra blanca. Hagrid entra en la bóveda y la recoge. La luz espeluznante con la que brillaba desaparece.]
Hagrid: Mejor no se lo menciones a nadie, Harry.
[Harry asiente con la cabeza]

Ollivanders
[Afuera, en el Callejón Diagon, Harry y Hagrid están caminando por la calle. Harry ha comprado la mayor parte de su equipo y está leyendo su lista.]

Harry: Todavía necesito ... una varita.
Hagrid: ¿Una varita? Bueno, querrás Ollivanders. [señala la tienda] No hay lugar mejor. Corre por allí, pero espera. Solo tengo una cosa más que hacer. No tardará mucho.
[Harry entra en la tienda, en silencio. Mira a su alrededor. Hay estantes de varitas en cajas, pero no personas.]

Harry: [Suavemente] ¿Hola? ¿Hola?
[Entonces, una nariz salió de la parte de atrás, y un hombre apareció en una escalera y miró a Harry. El hombre es Ollivander y sonríe.]

Ollivander: Me preguntaba cuándo lo vería, Sr. Potter. Parece que fue ayer que tu madre y tu padre estaban aquí comprando sus primeras varitas. [Coge una varita] Ah. Aquí estamos. [Harry lo sostiene, pero no hace nada] Bueno, agítalo. [Harry duda, pero saluda. Esto hace que la mayoría de las cajas salgan volando y se caigan. Harry salta y rápidamente pone la varita en el mostrador. ] Aparentemente no. [Saca otra varita de una caja.] Quizás esto. [Harry señala un jarrón, que se rompe, sobresaltando a Harry.] ¡No, no, definitivamente no! No importa ... [saca una varita de una caja, pero se detiene y se pone pensativo] Me pregunto. [Ollivander le entrega la varita a Harry. Tan pronto como lo tocó, Harry repentinamente brilla debajo de él, volando su cabello y varios papeles en el fondo. Ollivander parecía un poco sorprendido y absorto en sus pensamientos.
Harry: Lo siento, pero ¿qué es curioso?
Ollivander: [examinando la varita que le dio a Harry] Recuerdo todas las varitas que he vendido, Sr. Potter. Da la casualidad de que el fénix, cuya pluma de la cola reside en tu varita, dio otra pluma, solo una. Es curioso que estés destinado a esta varita cuando su hermano te dio esa cicatriz. [Señala la cicatriz del rayo de luz en la frente de
Harry ] Harry: Y ... ¿quién tenía esa varita?
Ollivander: Oh, no decimos su nombre. La varita elige al mago, Sr. Potter. No siempre está claro por qué, pero creo que está claro que podemos esperar grandes cosas de usted. Después de todo, El-que-no-debe-ser-nombrado hizo grandes cosas ... terrible, sí, pero genial. [Le devuelve la varita a Harry.]
[Harry entonces oye un golpe en la ventana.]

Hagrid: ¡Harry! ¡Harry! ¡Feliz cumpleaños! [Tiene un búho nival en una jaula, que ulula, su nombre es Hedwig.]
Harry: [asombrado] Wow.
El niño que vivió
[Más tarde, en el Caldero Chorreante, Hagrid y Harry están en una mesa larga, comiendo sopa. Todo está demasiado tranquilo, Hagrid pronto se da cuenta de esto.]

Hagrid: ¿Estás bien, Harry? Pareces muy callado.
Harry: Mató a mis padres, ¿no? El que me dio esto. Sabes, Hagrid, sé que lo haces.
Hagrid: [suspira y empuja su cuenco] Primero, y entiende esto, Harry, porque es muy importante. No todos los magos son buenos. Algunos se estropean. Hace unos años, hubo un mago que salió tan mal como puedas. Y su nombre era V -... su nombre era V -...
Harry: ¿Quizás si lo escribieras?
Hagrid: No, no puedo deletrearlo. Todo bien. [en voz baja] Voldemort.
Harry: ¿Voldemort?
Hagrid: ¡¡Shh !!
[Harry mira a su alrededor para ver si alguien lo escuchó]

Hagrid: Fueron tiempos oscuros, Harry, tiempos oscuros. [Pasamos a un flashback de la noche en el hueco de Godric, que consiste en un hombre encapuchado caminando hacia una casa, irrumpiendo con su varita y procediendo a aterrorizar. Hagrid narra.] Voldemort comenzó a reunir algunos seguidores, los llevó al lado oscuro. Cualquiera que se le opusiera terminaba muerto. Tus padres lucharon contra él, pero nadie vivió una vez que decidió matarlos. [La madre de Harry, Lily, grita de dolor cuando es asesinada por la varita de Voldemort. Se ven destellos verdes desde las ventanas fuera de la casa. Luego, vemos a Voldemort apuntando con su varita a la cabeza de un bebé Harry Potter.] Nadie ... ni uno. Salvo tú.
[Volvemos al presente.]

Harry: ¿Yo? Voldemort intentó matar ... ¿a mí?
Hagrid: Sí. Ese no es un corte ordinario en tu frente, Harry. Una marca como esa solo proviene de ser tocado por una maldición ... y una maldición maligna en eso.
Harry: ¿Qué le pasó a ... a Quien-tú-sabes?
Hagrid: Bueno, algunos dicen que murió. Codswallop en mi opinión. No, creo que está ahí fuera, todavía, demasiado cansado para continuar. Pero una cosa es absolutamente segura. Algo en ti lo dejó perplejo esa noche. Por eso eres famoso. Por eso todo el mundo sabe tu nombre. Eres el chico que vivió.
Andén 9¾
[Estación de King's Cross. En un puente de cruce, Harry, con su carrito de equipaje, equipo y Hedwig, camina junto a Hagrid. Una pareja mira a Hagrid con sospecha.]

Hagrid: ¿Qué estás mirando? [Luego mira el reloj] Vaya, ¿es esa la hora? Lo siento, Harry, voy a tener que dejarte. Dumbledore querrá su… bueno, querrá verme. Ahora, eh, su tren sale en 10 minutos. Aquí tienes tu boleto. [le entrega el billete de tren] Cíñete, Harry, eso es muy importante. Cíñete a tu boleto.
[Harry mira su boleto.]

Harry: ¿Andén 9¾? Pero, Hagrid, debe haber un error. Esto dice Plataforma 9¾. No existe tal cosa ... ¿verdad? [Harry mira hacia arriba, pero ahora vemos que Hagrid ha desaparecido y Harry está solo con su carrito.]
[Harry camina por el carril entre trenes. Un hombre pasa corriendo.]

Hombre: Lo siento.
[Harry ve a un guardia.]

Harry: Disculpe, disculpe.
Guardia: Justo a su izquierda, señora.
Harry: Disculpe, señor. ¿Puede decirme dónde puedo encontrar la plataforma 9¾?
Guardia: [incrédulo] 9¾? Crees que estás siendo gracioso, ¿verdad? [se va]
[Harry se da cuenta de que una mujer, una hija y cuatro niños pasan empujando carritos]

Sra. Weasley: Es lo mismo año tras año. Siempre lleno de muggles, por supuesto.
Harry: ¿Muggles?
Sra. Weasley: Vamos. ¡Plataforma 9¾ de esta manera! Está bien, Percy, tú primero.
[Un chico alto de pelo rojo, llamado Percy, se adelanta y corre hacia una pared de ladrillos. Sorprendentemente, desaparece directamente en él. Harry está asombrado.]

Sra. Weasley: Fred, tú eres el siguiente.
George: ¡Él no es Fred, yo soy!
Fred: Sinceramente, mujer, te llamas nuestra madre.
Sra. Weasley: Oh, lo siento, George.
[Fred se acerca a la pared]

Fred: Solo estoy bromeando. Yo soy Fred. [Corre a través de la pared, y es seguido por su hermano gemelo. Harry sacude la cabeza con incredulidad.]
Harry: ¡Disculpe! P-podría decirme cómo-
Sra. Weasley: ¿Cómo subir a la plataforma? Sí, no te preocupes, querida. También es la primera vez que Ron va a Hogwarts. [panorámica a un chico pelirrojo, llamado Ron, que sonríe] Ahora, todo lo que tienes que hacer es caminar directamente hacia la pared entre las plataformas 9 y 10. Lo mejor es hacerlo rápido si estás nervioso.
Ginny: Buena suerte.
[Harry toma aire y corre hacia la pared. Cierra los ojos y emerge al otro lado de una magnífica estación en el Andén 9¾ con un tren rojo, que es el Hogwarts Express, y un montón de gente. Suena un silbato y Harry suspira aliviado.]

Ron y Hermione
[Más tarde, el Expreso de Hogwarts viaja por el campo. Harry está sentado solo en un compartimiento de tren, y Ron aparece en la puerta.]

Ron: Disculpe, ¿le importa? Todo el resto está lleno.
Harry: No, en absoluto.
Ron: [se sienta frente a Harry] Soy Ron, por cierto. Ron Weasley.
Harry: Soy Harry. Harry Potter.
[Ron se queda boquiabierto.]

Ron: ¿Entonces es verdad? Quiero decir, realmente tienes el ... el ...
Harry: ¿El qué?
Ron: [susurra] ¿Scar ...?
Harry: Oh [levanta el flequillo de su cabello para revelarlo]
Ron: Malvado.
[Un carrito pasa por el compartimiento, lleno de dulces.]

Mujer: ¿Algo del carrito, queridos?
Ron: [Levanta sus sándwiches triturados] No, gracias, estoy listo. [chasquea los labios.]
Harry: ¡Nos llevaremos el lote! [saca monedas]
Ron: ¡Vaya!
[Un poco más tarde, Harry y Ron no están sentados juntos comiendo paquetes de dulces. La rata de Ron, Scabbers, está posada sobre la rodilla de Ron, con una caja sobre su cabeza.]

Harry: ¿Frijoles de todos los sabores de Bertie Bott?
Ron: ¡Se refieren a todos los sabores! Hay chocolate y menta, y también espinacas, hígado y callos. ¡George juró que una vez consiguió uno con sabor a fantasma!
[Harry rápidamente saca el frijol que estaba masticando de su boca.]

Harry: [toma un paquete azul y dorado] Estas no son ranas de chocolate de verdad, ¿verdad?
Ron: Es solo un hechizo. Además, son las cartas que quieres. Cada manada tiene una bruja o un mago famoso. Yo mismo tengo unos 500. [Harry abre el paquete, y una rana de chocolate salta a la ventana y sube.] ¡Míralo! [La rana llega al hueco abierto en la ventana y salta.] Oh, qué mala suerte. Para empezar, solo tienen un buen salto.
Harry: [viendo la imagen de Dumbledore en la tarjeta] ¡Tengo a Dumbledore!
Ron: Tengo alrededor de 6 de él.
[Harry mira la tarjeta de nuevo, pero Dumbledore ha desaparecido.]

Harry: ¡Oye, se ha ido!
Ron: Bueno, no puedes esperar que se quede todo el día, ¿verdad? [Scabbers chilla] Este es Scabbers, por cierto, patético, ¿no?
Harry: Un poco.
Ron: Fred me dio un hechizo para ponerlo amarillo.
Harry: ¡Sí!
Ron: [se aclara la garganta] Ejem. Sun-
[Una chica llamada Hermione Granger, con cabello castaño espeso, vestida con una túnica, aparece en la puerta.]

Hermione: ¿Alguien ha visto un sapo? Un chico llamado Neville perdió uno.
Ron: No.
Hermione: Oh, ¿estás haciendo magia? Veamos entonces.
Ron: [se aclara la garganta de nuevo] ¡Sol, margaritas, mantequilla suave, convierte esta estúpida rata gorda en amarilla!
[Ataca a Scabbers, pero no pasa nada. Ron se encoge de hombros.]

Hermione: ¿Estás segura de que es un hechizo real? Bueno, no es muy bueno, ¿verdad? Por supuesto, solo he probado algunos hechizos sencillos y todos me han funcionado. Por ejemplo ... [Hermione se acerca y se sienta frente a Harry. Él apunta su varita hacia sus lentes y Harry tensa] Oculus Reparo. [La cinta de la banda de la nariz desaparece, reparándole las gafas como si estuvieran como nuevas. Harry se los quita, asombrado.] Está mejor, ¿no? Santo Grillo, eres Harry Potter. Soy Hermione Granger ... ¿y tú eres ...?
Ron: [con la boca llena] Yo soy ... Ron Weasley.
Hermione: Placer. Será mejor que se pongan la túnica. Espero que lleguemos pronto. [Se levanta y se va, luego regresa y mira a Ron.] Por cierto, tienes suciedad en la nariz, ¿lo sabías? Justo aquí. [Señala la marca de suciedad en la nariz de Ron. Ron se rasca la nariz, avergonzado.]
Bienvenido a Hogwarts
[Es de noche en la estación de Hogsmeade, el tren hace sonar su silbato y se detiene fuera de la estación. Hagrid camina por el pasillo lateral con una linterna. La gente, con sus túnicas, comienza a salir del tren.]

Hagrid: ¡Bien, entonces! ¡Primeros años! ¡Por aqui por favor! ¡Vamos, no seas tímido! ¡Vamos, date prisa!
[Harry y Ron, ahora con sus túnicas, caminan hacia Hagrid.]

Hagrid: Hola, Harry.
Harry: Hola, Hagrid.
Ron: ¡Vaya!
Hagrid: Entonces. ¡Por aquí a los barcos! Vamos, sígueme.
[Más tarde, una gran cantidad de botes atraviesan un vasto lago, donde más adelante se puede ver un enorme castillo, conocido como el Castillo de Hogwarts. La gente está asombrada.]

Ron: Malvado.
[Continúan más hacia el castillo. Más tarde, los estudiantes de primer año caminan por el castillo y suben las escaleras. A medida que la cámara se desplaza, vemos que en un nivel superior, la profesora McGonagall está esperando. Da golpecitos con los dedos en una barandilla de piedra y luego sube a lo alto de las escaleras para saludar a los recién llegados.]

McGonagall: Bienvenida a Hogwarts. Ahora, en unos momentos, pasarás por estas puertas y te unirás a tus compañeros. Pero antes de que puedan tomar asiento, deben clasificarse en sus casas. Son Gryffindor, Hufflepuff, Ravenclaw y Slytherin. Ahora, mientras estés aquí, tu casa será como tu familia. Tus triunfos te harán ganar puntos para la casa. Cualquier regla que rompa y perderá puntos. Al final del año, la casa con más puntos recibe la copa de la casa.
[Un niño de aspecto asustado llamado Neville Longbottom, ve a su sapo sentado cerca de McGonagall. Salta hacia adelante.]

Neville: ¡Trevor! [atrapa su sapo; McGonagall lo mira mientras algunos de los estudiantes se ríen] Lo siento. [Retrocede, avergonzado.]
McGonagall: La ceremonia de clasificación comenzará momentáneamente. [se va para ir al Gran Comedor]
[Un joven de aspecto malvado, con cabello rubio corto, llamado Draco Malfoy, habla.]

Draco: Es cierto entonces, lo que están diciendo en el tren. Harry Potter ha llegado a Hogwarts. [Se oye a algunos de los estudiantes susurrar: "¿Harry Potter?" Draco presenta a sus dos amigos.] Estos son Crabbe y Goyle. Y yo soy Malfoy ... Draco Malfoy. [Ron se ríe de su nombre] ¿Crees que mi nombre es gracioso, verdad? No es necesario que preguntes el tuyo. ¿Cabello rojo y una túnica heredada? Debes ser un Weasley. Bueno, pronto descubrirás que algunas familias mágicas son mejores que otras, Potter. No quiero ir a hacer amigos con el tipo equivocado. Te puedo ayudar allí. [extiende su mano a Harry.]
Harry: [sin aceptar la arrogancia de Draco] Creo que puedo decir quién es el tipo equivocado para mí, gracias.
[Draco lo fulmina con la mirada. McGonagall regresa y golpea a Draco en el hombro con un papel. Deja a Harry con una última mirada.]

McGonagall: Estamos listos para ti ahora. Sígueme.
El Sombrero Seleccionador
[Conduce a todos a través de dos puertas grandes y al Gran Salón, donde hay cuatro mesas largas con miles de estudiantes, así como velas flotantes. El techo parece ser el cielo.]

Hermione: No es real, el techo. Está embrujado para parecerse al cielo nocturno. Lo leí en Hogwarts: A History.
[McGonagall lleva a los de primer año al frente donde el Sombrero Seleccionador yace en el taburete.]

McGonagall: ¿Podrías esperar aquí, por favor? Ahora, antes de comenzar, al profesor Dumbledore le gustaría decir algunas palabras.
[Dumbledore se levanta de la mesa principal.]

Dumbledore: Tengo algunos avisos de inicio de trimestre que deseo anunciar. Los primeros años deben tener en cuenta que el bosque oscuro está estrictamente prohibido para todos los estudiantes. Además, nuestro cuidador, el Sr. Filch [muestra a un anciano andrajoso, llamado Sr. Argus Filch, con su gato de ojos rojos, llamado Sra. Norris.] Me ha pedido que le recuerde que el corredor del tercer piso en el lado derecho está fuera de los límites de todo aquel que no desee sufrir la muerte más dolorosa. Gracias. [Se vuelve a
sentar ] McGonagall: Cuando te llame por tu nombre, saldrás, pondré el sombrero seleccionador en tu cabeza y te clasificarán en tus casas. Hermione Granger.
Hermione: [para sí misma] Oh, no. Está bien, relájate. [Ella sube]
Ron: Mental, te lo digo.
[Harry asiente con la cabeza. Hermione se sienta en el taburete y McGonagall coloca el sombrero seleccionador en su cabeza]

Sombrero seleccionador: Ah, en ese momento ... hmm ... cierto. De acuerdo ... ¡¡Gryffindor !!
[Los estudiantes vitorean; Hermione salta con una sonrisa.]

McGonagall: Draco Malfoy.
[Draco se acerca con orgullo. El sombrero hecho jirones casi se asusta antes de tocar la cabeza de Draco.]

Sombrero Seleccionador: ¡SLYTHERIN!
[Los estudiantes vitorean, no tan fuerte]

Ron: No hay una bruja o un mago que haya salido mal que no estuviera en Slytherin.
McGonagall: Susan Bones.
[Se acerca una pequeña pelirroja. Harry mira a su alrededor y se da cuenta de un hombre pálido, de cabello grasiento y negro, llamado Severus Snape, dándole miradas siniestras. Le duele la cicatriz.]

Harry: ¡Ahh! [se lleva la mano a la frente con dolor]
Ron: [preocupado] Harry, ¿qué es?
Harry: Nada ... nada, estoy bien.
Sombrero Seleccionador: Veamos ... lo sé ... ¡Hufflepuff!
McGonagall: Ronald Weasley.
[Ron traga saliva y se acerca. Se sienta y se pone el sombrero.]

Sombrero Seleccionador: ¡Ja! Otro Weasley. Sé qué hacer contigo ... ¡¡Gryffindor !!
[Los estudiantes vitorean cuando Ron suspira de alivio.]

McGonagall: Harry Potter.
[Todo se queda en silencio. Harry se acerca y se sienta en el taburete. El Sombrero Seleccionador se coloca en su cabeza.]

Sombrero Seleccionador: Hmm ... difícil, muy difícil. Veo mucho valor, no una mala mente tampoco. Hay talento, oh sí, y sed de demostrar tu valía. ¿Pero dónde ponerte?
Harry: [susurrando al sombrero] No Slytherin. No Slytherin.
Sombrero Seleccionador: No es Slytherin, ¿eh? ¿Estás seguro? Podrías ser genial, lo sabes. Todo está aquí en tu cabeza. ¡Y Slytherin te ayudará en tu camino hacia la grandeza! No hay duda de eso. ¿No?
Harry [todavía susurrando] No Slytherin ... cualquier cosa menos Slytherin.
Sombrero Seleccionador: Bueno, si estás seguro ... será mejor que ... ¡¡GRYFFINDOR !!
[Hay un inmenso aplauso y Harry se dirige a la mesa de Gryffindor.]

Fred y George: ¡Tenemos a Potter! ¡Tenemos a Potter!
[Harry se sienta a la mesa. Mira a Dumbledore, quien levanta su copa y la agita levemente, como si estuviera deseando felicitaciones.]

Nick y otros residentes
[Más tarde, todos los de primer año se clasifican en sus casas, todos los estudiantes estaban hablando entre ellos . McGonagall golpea una taza.]

McGonagall: Atención, por favor.
Dumbledore: [levantándose de su silla] Que el banquete ... comience.
[Desde la vista aérea del Gran Salón, la comida aparece mágicamente en todas las mesas, y el salón se llena de asombro y charla.]

Harry: Wow.
[Draco mira toda la comida, levanta las cejas y profundiza. Ron se tapa la cara.]

Seamus: Soy mitad y mitad. Mi papá es muggle. Mamá es una bruja. Fue una sorpresa algo desagradable para él cuando se enteró.
[Neville se ríe. Harry está sentado junto a Percy. Se inclina.]

Harry: Oye, Percy, ¿quién es ese profesor que habla con el profesor Quirrell?
Percy: Oh, ese es el profesor Snape, jefe de la casa de Slytherin.
Harry: ¿Qué enseña?
Percy: Pociones. Pero todo el mundo sabe que le gustan las Artes Oscuras. Ha estado detrás del trabajo de Quirrell durante años.
[Ron, que acaba de terminar un ala de pollo, busca más en el cuenco y aparece un fantasma, llamado Sir Nicolas.]

Ron: ¡Ahh!
Nick: ¡Hola! ¿Cómo estás? Bienvenidos a Gryffindor.
[Numerosos fantasmas salen de las paredes, navegando.]

Barón Sangriento: ¡Whoo-hoo-hoo!
Chica: ¡Mira, es el Bloody Baron!
Percy: Hola, Sir Nicholas. ¿Que tengas un lindo verano?
Nick: Triste. Una vez más, mi solicitud para unirme a la caza sin cabeza ha sido denegada. [Empieza a irse]
Ron: ¡Te conozco! ¡Eres Nick Casi Decapitado!
Nick: Prefiero a Sir Nicholas si no le importa.
Hermione: ¿Casi decapitado? ¿Cómo puedes estar casi sin cabeza?
Nick: Así. [Agarra la cabeza y la tira hacia un lado. Su cabeza está colgando de un hilo.]
Ron: ¡Ahh!
[Hermione gime de disgusto; Harry simplemente pone los ojos en blanco. Nick vuelve a unir la cabeza a su cuerpo. Más tarde, Percy está llevando a los Gryffindors a la torre de la escalera.]

Percy: Gryffindors, síganme, por favor. Mantenga. Gracias.
Chico: Ravenclaws, sígueme. De esta manera.
Percy: Este es el camino más directo a los dormitorios. Ah, y vigila las escaleras ... les gusta cambiarse.
[La cámara toma una panorámica y vemos una gran cantidad de escaleras, gente caminando sobre ellas y algunos lugares que cambian de lugar.]

Percy: Sigue, por favor, y sígueme. Rápido ahora, vamos. Venga.
[Empiezan a subir las escaleras, varios de los retratos empezaron a saludarlos]

Neville: ¡Seamus, esa imagen se está moviendo!
Ron: ¡Mira ese, Harry!
Harry: Creo que le gustas.
Chica: ¡Oh, mira! ¡Mira! ¿Quien es esa chica?
Hombre en una pintura: Bienvenido a Hogwarts.
Chica: ¿Quién es ese?
[Un poco más tarde, en el séptimo piso, están en el pasillo que conduce a la Torre de Gryffindor. Se acercan a un gran cuadro de una mujer corpulenta con un vestido rosa. Se la conoce como "La Dama Gorda".]

La Dama Gorda: ¿Contraseña?
Percy: Caput Draconis. [La Dama Gorda sonríe y asiente en confirmación. La pintura se abre para revelar una entrada en la pared que conduce a la Torre de Gryffindor.] Seguidme, todo el mundo. Sigan, rápido, vamos.
Chica: Oh, vaya.
Percy: [Dentro de la sala común] Reúnanse por aquí. Bienvenido a la Sala Común de Gryffindor. Dormitorios de chicos, arriba y abajo a tu izquierda. Chicas, lo mismo a tu derecha. Verá que sus pertenencias ya han sido recogidas.
[Más tarde a la medianoche. Harry está sentado junto a una ventana en su pijama, con Hedwig. Acaricia a la lechuza y mira por la ventana, suspirando contento, sabiendo que le encantará estar aquí en Hogwarts.]

Pociones y paquetes
[Es de mañana en Hogwarts, Harry y Ron corren por los pasillos, porque llegan tarde a la Transformación. clase. En la clase, un gato atigrado está sentado en un escritorio. Harry y Ron se apresuran a entrar; Hermione pone los ojos en blanco con molestia porque llegan tarde a clase.]

Ron: Vaya, lo logramos. ¿Te imaginas la expresión de McGonagall si llegáramos tarde?
[El gato salta del escritorio y se transforma en la profesora McGonagall, en la pantalla por primera vez. Los dos chicos están asombrados.]

Ron: Eso fue genial.
McGonagall: Gracias por esa evaluación, Sr. Weasley. Quizás si transfigurara al Sr. Potter ya usted mismo en un reloj de bolsillo, de esa manera uno de ustedes podría llegar a tiempo.
Harry: Nos perdimos.
McGonagall: Entonces, ¿quizás un mapa? Confío en que no necesita uno para encontrar sus asientos.
[Más tarde, dentro del salón de pociones de Snape, los estudiantes están charlando, sentados cerca de calderos humeantes. La puerta se abre de golpe y Snape entra corriendo.]

Snape: No habrá tontos agitando varitas ni conjuros tontos en esta clase. Como tal, no espero que muchos de ustedes aprecien la ciencia sutil y el arte exacto que es la elaboración de pociones. Sin embargo, para esos pocos elegidos ... [mira a Draco, que sonríe] que poseen la predisposición, puedo enseñarles cómo hechizar la mente y atrapar los sentidos. Puedo decirte cómo embotellar la fama, preparar la gloria e incluso poner un tapón ... [Draco mira] en la muerte. [Draco levanta las cejas. Snape ve a Harry, escribiendo lo que Snape dijo en su conferencia, en su punto de vista, sin prestar atención.] Por otra parte, tal vez algunos de ustedes han venido a Hogwarts en posesión de habilidades tan formidables que se sienten lo suficientemente confiados como para no ... presta atención. [Hermione le da un codazo a Harry, finalmente haciéndolo mirar al profesor. Snape luego camina hacia donde puede hablar con Harry más apropiadamente. ] Sr. Potter. Nuestra ... nueva ... celebridad. Dime, ¿qué obtendría si agregara raíz de asfódelo en polvo a una infusión de ajenjo? [Hermione levanta la mano. Harry se encoge de hombros.] ¿No lo sabes? Bueno, intentemos de nuevo. ¿Dónde, Sr. Potter, buscaría si le pidiera que me buscara un bezoar? [La mano de Hermione se levanta de nuevo.]
Harry: No lo sé, señor.
Snape: ¿Y cuál es la diferencia entre acónito y lobo?
Harry: No lo sé, señor.
Snape: Lástima. Claramente, la fama no lo es todo ... [Draco tiene una sonrisa en su rostro] ¿verdad, Sr. Potter?
(Versión extendida)

Harry: Claramente, Hermione lo sabe. Ya que es una lástima no preguntarle.
[Hermione parece un poco sorprendida mientras todos se ríen]

Snape: Silencio. [se vuelve hacia Harry, luciendo un poco insultado; Harry aparentemente traga saliva. Snape luego camina hacia su escritorio. A Hermione, que todavía tiene la mano levantada.] Y baja la mano, niña tonta. [Se sienta frente a Harry y se inclina hacia él.] Para tu información, Potter ... el asfódelo y el ajenjo hacen una poción para dormir tan poderosa que se la conoce como el Borrador de la Muerte Viviente. Un bezoar es una piedra que se extrae del estómago de una cabra y te salvará de la mayoría de los venenos. En cuanto al acónito y al lobo, son la misma planta, que también se conoce con el nombre de acónito. [todo está en silencio] ¿Y bien? [a los estudiantes] ¿Por qué no están todos copiando esto? [Los estudiantes obedecen a Snape y comienzan a escribir lo que dijo Snape. Snape regresa a su escritorio y moja su pluma en un poco de tinta.] Y Gryffindors, tenga en cuenta que cinco puntos, será sacado de tu casa ... para la mejilla de tu compañero. [Snape entonces comienza a escribir; Hermione mira a Harry y luego comienza a escribir. Harry mira a Snape, quien se vuelve un poco y luego sigue escribiendo]
(Versión normal)

[Harry mira a Snape, sabiendo que muestra disgusto por el chico. En el gran salón, alrededor del mediodía. Todos los estudiantes están haciendo su tarea. Seamus está probando un hechizo en una taza.]

Seamus: Ojo de conejo, zumbido de cuerda de arpa. Convierta esta agua en ron. [Mira en la taza y sacude la cabeza.] Ojo de conejo, zumbido de cuerda de arpa ...
Harry: ¿Qué intenta hacer Seamus con ese vaso de agua?
Ron: Conviértelo en ron. En realidad, ayer tomé un té débil, antes de ...
[Ron se interrumpió cuando se produjo un destello poderoso. Ahora vemos que la taza explotó y Seamus quedó carbonizado. Varios estudiantes se ríen de esto mientras Hermione aleja el humo con la mano. De repente, una bandada de búhos comienza a llegar al pasillo desde las vigas de arriba.]

Ron: Ah. ¡El correo está aquí!
[Las lechuzas pasan volando y arrojan paquetes a los estudiantes. Harry no obtiene nada. Ve el periódico que Ron ha dejado.]

Harry: ¿Puedo pedir prestado esto? [Ron asiente] Gracias.
[Neville está desenvolviendo un regalo. Es una bola de cristal transparente con un estandarte dorado alrededor.]

Seamus: ¡Oye, mira! ¡Neville tiene un Remembrall!
Hermione: He leído sobre eso. Cuando el humo se vuelve rojo, [el humo se vuelve rojo] significa que has olvidado algo.
Neville: El único problema es que no puedo recordar lo que he olvidado.
Harry: Oye, Ron, alguien irrumpió en Gringotts, escucha. [lee el artículo] Se cree que es obra de brujas oscuras o magos desconocidos, los trasgos de Gringotts, aunque reconocen la infracción, insisten en que no se llevaron nada. La bóveda en cuestión, la número 713, de hecho se había vaciado ese mismo día. Eso es extraño. Esa es la bóveda a la que fuimos Hagrid y yo.
New Seeker
[Esa tarde, fuera del castillo, los estudiantes, Gryffindor y Slytherin, están alineados en dos filas con escobas a los lados. La maestra, Madame Hooch, viene por la línea. Tiene el pelo corto y ojos color amarillo halcón.]

Hooch: Buenas tardes, clase.
Clase: Buenas tardes, señora Hooch.
Hooch: Buenas tardes, Amanda, buenas tardes. [a la clase] Bienvenidos a su primera lección de vuelo. Bueno, ¿qué estás esperando? Todos se colocan al lado izquierdo de su escoba. Vamos, date prisa. Pon tu mano derecha sobre la escoba y di ¡arriba!
Clase: ¡Arriba!
[Después de que Harry dijo "¡Arriba!", La escoba vuela inmediatamente hacia su mano.]

Harry: [asombrado] Wow.
[Hermione lo mira mientras la clase continúa.]

Draco: ¡Arriba! [El palo de escoba vuela y Draco sonríe con aire de suficiencia.]
Hooch: ¡Con sentimiento!
Hermione: [mientras su escoba se levanta lentamente] Arriba. Arriba. Arriba. Arriba.
Ron: ¡¡Arriba !! [Su escoba inmediatamente se disparó y lo golpeó en la nariz] ¡Ooh! [Harry se ríe] Cállate, Harry . [Ron aparentemente comienza a reír después de recuperarse]
Hooch: Ahora, una vez que hayas agarrado tu escoba, quiero que la montes. Y agárrelo con fuerza, no querrá resbalar por el extremo. [la clase se monta en sus escobas] Cuando haga sonar mi silbato, quiero que cada uno de ustedes comience desde el suelo, con fuerza. Mantenga su escoba firme, flote por un momento, y luego inclínese ligeramente hacia adelante y toque hacia abajo. En mi silbato ... 3 ... 2 ...
[Hace sonar el silbato. Sin embargo, el palo de escoba de Neville lo levanta del suelo. Neville inmediatamente despega. Parece bastante asustado.]

Neville: Oh ...
Hooch: Sr. Longbottom.
Chica: Neville, ¿qué estás haciendo?
Estudiantes: Neville ... Neville ...
Chico: No se supone que despeguemos, todavía.
Hooch: [Neville comienza a alejarse incontrolablemente] MM-Mr. Longbottom! Sr. Longbottom!
Neville: ¡AHH!
Hooch: ¡Sr. Longbottom!
Neville: ¡Abajo! ¡Abajo! ¡Ahhhh!
Harry: ¡Neville!
Neville: ¡¡¡Ayuda !!!
[inmediatamente se dispara hacia el cielo]

Hooch: ¡Vuelve abajo en este instante!
Neville: ¡AHH!
[Vuela incontrolablemente en el aire y golpea una pared, choca contra ella y luego se lanza en picado. Todo el tiempo, está gritando. Comienza a acercarse al grupo de estudiantes. Hooch rápidamente extiende su varita para detenerlo.]

Neville: ¡Ayuda!
Hooch: Sr. Longbottom-! [Sin embargo, los estudiantes rápidamente retroceden mientras Hooch se aparta del camino, permitiendo que Neville pase volando. Neville atraviesa la dispersión y sube a una torre.]
Neville: ¡Ahhhh! ¡Guau! ¡Ahhh! [Se acerca a una estatua de un hombre con una lanza afilada. La capa de Neville se engancha. Se le quita la escoba y se cuelga allí.] Oh. ¡Ah ... ayuda! [Vacila, luego el manto rasga la lanza y cae. Pero su capa se prende una antorcha, haciendo que Neville se salga de su capa un segundo después y caiga al suelo.] ¡Ahh!
Hooch: ¡Todos fuera del camino! [Corre a través del grupo y se dispersan.] Vamos, levántate.
Chica: ¿Está bien?
[Hooch está ayudando a Neville a levantarse; se rompió la muñeca después de caer.]

Neville: Owowowow.
Hooch: Oh, oh, oh, oh cielos. Es una muñeca rota. Tch, tch, tch. Buen chico, vamos, arriba. [Draco se agacha y agarra el Remembrall de Neville, que se le ha caído. Hooch comienza a llevarse a Neville con ella.] Todos deben mantener los pies firmemente en el suelo mientras llevo al Sr. Longbottom a la enfermería. ¿Entender? Si veo una sola escoba en el aire, el que la monte se encontrará fuera de Hogwarts antes de que pueda decir, Quidditch. [se va a la enfermería]
Draco: [se ríe] ¿Viste su cara? Tal vez si el bulto de grasa le hubiera dado un apretón, se habría acordado de caer sobre su culo gordo. [Él y sus matones se ríen; Harry se acerca a él.]
Harry: Dámelo, Malfoy.
Draco: No. Creo que lo dejaré en algún lugar para que Longbottom lo encuentre. [se sube a su escoba y vuela alrededor del grupo, luego a través.] ¿Qué tal en el techo? [se eleva y flota a varios pies sobre el suelo.] ¿Qué pasa, Potter? ¿Un poco más allá de tu alcance?
[Finalmente, teniendo suficiente, Harry se sube a su escoba, Hermione lo detiene.]

Hermione: ¡Harry, de ninguna manera! ¡Escuchaste lo que dijo Madam Hooch! Además, ni siquiera sabes volar. [Harry vuela hacia Draco, ignorándola.] Qué idiota.
[Harry está ahora en el aire, frente a Draco.]

Harry: ¡Dámelo aquí, Malfoy, o te derribaré de la escoba!
Draco: ¿Es así? [Harry corre hacia él, pero Draco gira alrededor de su escoba en un 360.] ¡Hazlo a tu manera, entonces!
[Draco lanza el Remembrall al aire, como una pelota de béisbol. Harry se acerca a la pelota, acelerando hacia una torre. Justo cuando está a punto de golpear una ventana, desde la que está trabajando McGonagall, la atrapa. McGonagall se da cuenta de esto y se ve sorprendida cuando Harry comienza a volar de regreso a los jardines. Todos los estudiantes aplauden cuando Harry aterriza en el suelo a gusto. Corren a verlo.]

Chico: ¡Buen trabajo, Harry!
Niño 2: Oh, eso estuvo mal, Harry.
[McGonagall aparece en los jardines.]

McGonagall: ¿Harry Potter? [Harry se da cuenta de ella] Sígueme. [Harry la sigue hoscamente. Draco y sus matones se ríen encantados.]
[McGonagall y Harry llegan fuera del salón de clases del profesor Quirrell. Está adentro, enseñando, sosteniendo una iguana.]

Quirrell: Una iguana como esta es ...
McGonagall: Espera aquí.
Quirrell: ... un ingrediente esencial.
McGonagall: Profesora Quirrell, discúlpeme, discúlpeme. ¿Podría prestarme Wood por un momento, por favor?
Quirrell: Oh. S-sí, por supuesto. [Un niño llamado Oliver Wood, se levanta para irse y Quirrell continúa.] Y el vampiro b-bat ... [cuando Wood sale del salón, se escucha un rugido espeluznante.]
McGonagall: Potter, este es Oliver Wood. Wood, ¡te he encontrado un Buscador!
[Harry y Ron están caminando por pasillos llenos de gente. Sir Nicholas y una dama fantasma pasan flotando.]

Nick: ¿Has oído? Harry Potter es el nuevo buscador de Gryffindor. Siempre supe que lo haría bien.
Ron: ¿Buscador? ¡Pero los de primer año nunca llegan a formar parte de los equipos de su casa! Debes ser el jugador de Quidditch más joven en ...
Harry: Un siglo, según McGonagall.
[Fred y George se acercan y caminan con Ron y Harry.]

Fred: Oye, bien hecho, Harry, ¡Wood nos acaba de decir!
Ron: Fred y George también están en el equipo. Batidores.
George: Nuestro trabajo es asegurarnos de que no te ensucies demasiado. No puedo hacer ninguna promesa, por supuesto. Juego rudo, Quidditch.
Fred: Brutal. Pero nadie murió en años. Alguien desaparecerá de vez en cuando ... [Se separan de Harry y Ron, que cruzan un patio.]
George: ¡Pero aparecerán en uno o dos meses!
Ron: Oh, sigue, Harry, el Quidditch es genial. ¡El mejor juego que existe! ¡Y tú también estarás genial!
[Hermione, sabiendo de lo que habla Harry, salta de su trabajo y se une a ellos.]

Harry: Pero nunca he jugado Quidditch.
Hermione: No harás el ridículo. Está en tu sangre.
[Más tarde, los tres se acercan a una vitrina de trofeos. Hermione señala una placa de jugadores de Quidditch. Uno enumera al padre de Harry como un Buscador.]

Ron: Vaya. Harry, nunca me dijiste que tu padre también era un Buscador.
Harry: No lo sabía.
Centinela de tres cabezas
[Los tres están subiendo una escalera en la torre de la Gran Escalera. Una barandilla se detiene, Hermione mira, pero sigue caminando.]

Ron: Te lo digo, es espeluznante. Ella sabe más de ti que tú.
Harry: ¿Quién no?
[La escalera se estremece y comienza a moverse. Los tres se agarran a las barandillas.]

Ron: ¡Ahh!
[Hermione jadea]

Harry: ¿Qué está pasando?
Hermione: Las escaleras cambian, ¿recuerdas? [La escalera se detiene y conduce a un pasillo.]
Harry: [toca a Ron] Vayamos por aquí.
Ron: Antes de que la escalera se mueva de nuevo.
[Todos abren una puerta y caminan hacia un corredor tenebroso, oscuro y desierto.]

Harry: ¿Alguien siente que ... no deberíamos estar aquí?
Hermione: No se supone que estemos aquí. Este es el tercer piso. Está prohibido.
[De repente, una llama se enciende en un alto soporte de piedra. En ese momento, el gato de Filch, la Sra. Norris, entra corriendo y maúlla. El grupo salta.]

Harry: Vamos.
[Señora. Norris maúlla]

Ron: ¡Es el gato de Filch!
Harry: ¡Corre!
[El trío corre por el pasillo, las llamas se encienden en los soportes de piedra, una a una, a medida que pasan. Llegan al final del pasillo, a una puerta.]

Harry: ¡Rápido! ¡Escondámonos por esa puerta!
[Harry agarra la manija, pero está cerrada.]

Harry: ¡Está cerrada!
Ron: ¡Eso es todo, hemos terminado!
Hermione: ¡Oh, muévete! [empuja y saca su varita, apuntando a la cerradura] Alohomora. [La cerradura de la puerta se levanta mágicamente y se abre.] Entra. [Entran apresuradamente]
Ron: ¿Alohomora?
Hermione: Libro estándar de hechizos, Capítulo 7.
[Filch llega al comienzo del pasillo con una luz. La Sra. Norris lo mira.]

Filch: ¿Hay alguien aquí, cariño? [Señora. Norris maúlla] Vamos. [salen del pasillo.]
Hermione: Filch se ha ido.
Ron: Probablemente piensa que esta puerta está cerrada.
Hermione: Estaba bloqueado.
Harry: Y por una buena razón. [Ron y Hermione se vuelven para pararse con Harry. Hay un enorme perro de tres cabezas durmiendo frente a ellos. El perro comienza a despertar. Gruñe, bosteza y gruñe más ... notando a los intrusos.]
Todos: ¡AHHHHHHH! [Los tres saltan corriendo por la puerta. Se vuelven rápidamente para cerrar la puerta y luchar contra el perro. Cierran la puerta y corren.]
[Regresan a la Sala Común de Gryffindor. Están sin aliento.]

Ron: ¿Qué creen que están haciendo? Mantener una cosa así encerrada en una escuela.
Hermione: No usas tus ojos, ¿verdad? ¿No viste sobre qué estaba parado?
Ron: ¡No estaba mirando sus pies! Estaba un poco preocupado por sus cabezas. O tal vez no te diste cuenta, ¡eran tres! [comienzan a subir las escaleras hacia los dormitorios.]
Hermione: Estaba parado en una trampilla. Lo que significa que no estuvo allí por accidente. Está guardando algo.
Harry: ¿Protegiendo algo?
Hermione: Eso es correcto. Ahora, si a ustedes dos no les importa, me iré a la cama antes de que alguno de ustedes tenga otra idea inteligente para hacernos matar ... o peor aún, ¡expulsarnos! [se da vuelta y se va, cerrando la puerta de su dormitorio.]
Ron: ¡Necesita ordenar sus prioridades!
[Harry asiente con la cabeza]

Hechos y plumas
[Afuera en el patio, durante el día. Aparecen Oliver y Harry con un baúl. Lo dejaron.]

Oliver: Quidditch es bastante fácil de entender. Cada vez tiene siete jugadores, 3 cazadores, 2 batidores, 1 portero y un buscador. Ese eres tú. Hay tres tipos de bolas. [coge uno rojo] Este se llama Quaffle. Ahora, los cazadores manejan la Quaffle e intentan pasarla por uno de esos tres aros. [Señala los aros en el campo de Quidditch en la distancia.] El portero, ese soy yo, defiende los aros. [lanza la pelota a Harry.] ¿Conmigo hasta ahora?
Harry: [retrocede] Creo que sí. ¿Que son esos? [señala dos bolas encadenadas que se retuercen.]
Oliver: Será mejor que tomes esto. [le da a Harry un pequeño bate. Se inclina y suelta una bola. Con un gruñido enojado, vuela por el aire. Los dos muchachos lo miran.] Cuidado ahora, está regresando. [Las bolas bajan zumbando y Harry la golpea con el bate. La bola vuela a través de una estatua, sorprendentemente sin dañarla.] Eh, no está mal, Potter, harías un buen golpe ... Uh-oh. [La pelota se acerca y Oliver la agarra, retorciéndose para volver a meterla en la caja. Lo logra y se queda sin aliento.]
Harry: ¿Qué es eso?
Oliver: Bludger. Pequeños cabrones desagradables. Pero tú eres el buscador, y lo único que quiero que te preocupes es esto ... la Snitch Dorada. [le da a Harry una bola dorada del tamaño de una nuez.]
Harry: Me gusta esta bola.
Oliver: Ah, te gusta ahora. Espera. Es increíblemente rápido y casi imposible de ver.
Harry: ¿Qué hago con eso?
Oliver: Lo agarras ... antes que el buscador del otro equipo. Entiendes esto, el juego se acabó. Atrapa esto, Potter, y ganamos.
[La pelota agita dos alas delicadas y salta en el aire. Harry lo vigila.]

Harry: Vaya.
[En la clase del profesor Flitwick. Filtwick es muy bajo y está parado sobre un montón de libros para compensar su estatura y ver a su clase.]

Flitwick: Una de las habilidades más rudimentarias de un mago es la levitación, la habilidad de hacer volar objetos. Uh, ¿todos tienen sus plumas? [Hermione levanta el suyo.] Bien. Ahora, eh, no olvides el bonito movimiento de muñeca que hemos estado practicando, ¿eh? El swish y flick. Todo el mundo.
Todos (incluido Flitwick): el chasquido y el movimiento rápido.
Flitwick: Bien. Y enunciar. Wingardium Leviosa. Entonces te vas.
[La clase comienza a enunciar y hacer los movimientos sobre sus plumas]

Draco: Wingardium Levio-saaa.
Ron: ¡Wingardrium Leviosar! [agita su varita muy rápido varias veces. Hermione lo detiene.]
Hermione: Detente, detente, detente. Vas a sacarle un ojo a alguien. Además, lo estás diciendo mal. Es Levi-o-sa, no Leviosar.
Ron: Hazlo entonces si eres tan inteligente. Adelante, adelante.
[Hermione se endereza y agita su varita.]

Hermione: Wingardium Leviosa. [La pluma brilla y se eleva.]
Flitwick: ¡Oh, bien hecho! ¡Miren aquí todos! ¡La Sra. Granger lo hizo! ¡Oh, espléndido!
[Ron pone su cabeza en sus libros abatido. Seamus comienza a agitar su pluma.]

Seamus: Wingard Levosa.
Flitwick: Bien hecho, querido.
[Destella una explosión todopoderosa. Flitwick jadea, mientras Ron y Hermione se vuelven hacia la fuente de la explosión]

Flitwick: ¡Whooaaa! Oh.
[Vemos que Seamus está carbonizado de nuevo con su pluma, ahora ardiendo a cenizas.]

Harry: Creo que vamos a necesitar otra pluma aquí, profesor.
[Neville, Harry, Ron y Seamus están caminando por un patio con otros estudiantes alrededor.]

Ron: [imitando a Hermione] Es Levioooosa, no Leviosaaaar. [voz normal] Ella es una pesadilla, honestamente. ¡No es de extrañar que no tenga amigos!
[Hermione pasa corriendo junto a Ron, abrazando sus libros y sollozando en lágrimas.]

Harry: Creo que te escuchó.
[Hermione desaparece entre la multitud, profundamente herida por las palabras de Ron.]

Mountain Troll
[Esa noche de Halloween, el gran salón tiene Jack O'Lanterns flotantes en lugar de las velas. Harry nota un espacio vacío en el banco.]

Harry: ¿Dónde está Hermione?
Neville: Parvati Patil dijo que no saldría del baño de chicas. Dijo que había estado allí toda la tarde ... llorando.
[Harry mira a Ron con una mirada de desaprobación en su rostro; Ron se encoge de hombros. De repente, el profesor Quirrell llega corriendo al Gran Comedor presa del pánico.]

Quirrell: ¡TROLL! EN EL MAZMORRO! T-TROOLLL EN EL MAZMORRO !! [Dumbledore se levanta de su asiento preocupado. Todos miran a Quirrell y él se detiene y hay un silencio total.] Pensé que debería saberlo.
[Se desmaya. La habitación está en silencio, y luego todos se asustan, gritan y corren.]

Dumbledore: ¡SILLLLLEEENNNNCEEEEE! [Todo el mundo se detiene y se calma.] Todo el mundo estará complacido, no entre en pánico. Ahora, los prefectos llevarán sus casas de regreso a los dormitorios. Los profesores me seguirán a las mazmorras.
Chica: ¡Hufflepuff, por aquí!
Chico: ¡Quédense juntos!
[Snape se ve horrorizado y sale por una puerta. Un poco más tarde, Percy conduce la casa por un pasillo.]

Percy: Gryffindors, sigan el ritmo, por favor. ¡Y mantente alerta!
Harry: ¿Cómo pudo entrar un troll?
Ron: No solo. Los trolls son realmente estúpidos. Probablemente gente haciendo bromas. [De repente, Harry se detiene y lleva a Ron a un lado.] ¿Qué?
Harry: ¡Hermione! ¡Ella no lo sabe!
[Los dos se separan de la multitud. Corren por los pasillos. Empiezan a correr por un pasillo cuando se detienen, porque hay un gruñido y una gran sombra en la pared.]

Ron: ¡Creo que el troll ha abandonado la mazmorra!
[Harry empuja a Ron hacia una puerta, se asoman para ver a un troll grande y feo que entra en una habitación.]

Harry: ¡Va al baño de chicas!
[En el baño, Hermione sale de un cubículo, secándose los ojos. Se detiene cuando ve algo. El troll está parado allí. Hermione retrocede, en el establo justo cuando el troll levanta su garrote y rompe la parte superior del establo. Grita Hermione. Harry y Ron entran irrumpiendo.]

Harry: ¡Hermione, muévete!
[El troll destroza los puestos restantes.]

Hermione: ¡Ayuda! ¡Ayuda! [Los chicos empiezan a tirarle pedazos de madera al troll.]
Ron: ¡Oye, cerebro de guisante! [Ron lanza leña y golpea al troll en la cabeza. Hermione escapa de los puestos para debajo de un fregadero, pero el troll la ve y va a aplastarla. Rompe el fregadero y apenas extraña a Hermione. Harry se encoge.]
Hermione: ¡Ahhh! ¡Ayuda!
[Harry saca su varita. Corre hacia adelante y agarra el garrote del troll, y se levanta.]

Harry: ¡Vaya! ¡Whoa Whoa! [Aterriza sobre la cabeza del troll y es lanzado hacia adelante, luego hacia atrás, y su varita se dispara por la nariz del troll.]
Ron: Ew.
[Ron y Hermione estaban disgustados por la arena de Harry en la nariz del troll. El troll bufó y se dio la vuelta.]

Harry: ¡Vaya, vaya, vaya!
[El troll saca a Harry de su cabeza y lo sostiene por una pierna, boca abajo.]

Harry: ¡Haz algo!
[Prepara su garrote y golpea a Harry. Se levanta y luego se baja. El troll golpea de nuevo.]

Ron: ¿Qué? [el troll golpea a Harry repetidamente]
Harry: ¡Lo que sea! ¡Darse prisa!
[Ron agarra su varita. Debajo del fregadero, Hermione agita su mano.]

Hermione: ¡Swish and flick!
Ron: [puntuando correctamente las palabras] ¡Wingardium Leviosa! [Película. El garrote se levanta de la mano del troll y se cierne sobre su cabeza. El troll mira hacia arriba, confundido, justo cuando el club se derrumba de nuevo.] Genial. [Golpea la cabeza del troll con tanta fuerza y ​​el troll vacila, luego deja caer a Harry, que se aleja arrastrándose y lentamente se derrumba, dejándolo inconsciente. Hermione se acerca con cuidado.]
Hermione: ¿Está ... muerto?
Harry: No lo creo. Simplemente noqueado. [Agarra su varita ... que está cubierta de moco.] Ew. Troll bogies.
[Harry limpia su varita en su túnica. De repente, McGonagall, Snape y Quirrell entran corriendo. Todos jadean ante el troll noqueado.]

McGonagall: ¡Oh! ¡Oh Dios mío! ¡Explíquense los dos!
Ron y Harry: Bueno, qué es ...
Hermione: Es mi culpa, Profesora McGonagall. [Los profesores, Ron y Harry la miran.]
McGonagall: ¿Señorita Granger?
Hermione: Fui a buscar al troll. Leí sobre ellos y pensé que podría manejarlo. Pero estaba equivocado. Si Harry y Ron no hubieran venido a buscarme ... probablemente estaría muerto.
McGonagall: Sea como sea ... fue algo extremadamente tonto. [Harry se da cuenta de la pierna de Snape, que tiene la pierna del pantalón rota y un gran corte en ella. Snape se da cuenta y lo cubre, mirando a Harry.] Hubiera esperado un comportamiento más racional de su parte, señorita Granger. Se quitarán cinco puntos de Gryffindor por su grave falta de juicio. [se vuelve hacia Harry y Ron] En cuanto a ustedes dos, caballeros, sólo espero que se den cuenta de lo afortunados que son. No muchos estudiantes podrían enfrentarse a un troll de montaña completamente desarrollado y vivir para contarlo. Se otorgarán cinco puntos ... a cada uno de ustedes. [Harry y Ron se sonríen el uno al otro] Por pura suerte.
[Snape y McGonagall salen del baño]

Quirrell: Quizás deberías irte ... M-tal vez despiertes ... eh. [Harry, Ron y Hermione salen del baño. Quirrell mira al troll inconsciente. El troll gruñe, aparentemente va a despertar.] ¡Ahh! Jeje ...
(Escena ampliada)

[Harry, Ron y Hermione están caminando de regreso a la Sala Común de Gryffindor por el pasillo.]

Harry: [a Hermione] Bien por sacarnos de este problema.
Ron: Eso sí, quiero decir, le salvamos la vida.
Harry: Eso sí, no necesitaba salvarla si no la hubieras insultado.
[Hermione mira a Ron.]

Ron: ¿Para qué son los amigos?
[Ambos se sonríen el uno al otro mientras avanzan por el pasillo.]

Quidditch
[A la mañana siguiente, en el gran salón. La pandilla está sentada, comiendo. Harry hace girar su comida en un tenedor.]
Ron: Toma un poco de tostada, amigo, continúa.
Hermione: Ron tiene razón, Harry. Vas a necesitar tu fuerza hoy.
Harry: No tengo hambre.
[Snape aparece en la mesa.]

Snape: Buena suerte hoy, Potter. Por otra parte, ahora que te has probado a ti mismo contra un troll, un pequeño juego de Quidditch debería ser un trabajo fácil para ti ... incluso si es contra Slytherin. [Snape se aleja cojeando. Harry se da cuenta de esto.]
Harry: Eso explica la sangre.
Hermione: ¿Sangre?
Harry: Escucha, anoche, supongo que Snape dejó entrar al troll como una distracción para poder intentar pasar a ese perro de 3 cabezas. Pero él mismo se mordió, por eso cojea.
Hermione: ¿Pero por qué alguien se acercaría a ese perro?
Harry: El día que estuve en Gringotts, Hagrid sacó algo de una de las bóvedas. Dijo que era asunto de Hogwarts, muy secreto.
Hermione: Entonces estás diciendo ...
Harry: Eso es lo que está protegiendo el perro. Eso es lo que quiere Snape.
[Hedwig chilla mientras entra al Gran Comedor. Lleva un paquete muy grande y largo. Lo deja en la mesa.]
Hermione: Un poco temprano para el correo, ¿no?
Harry: Pero yo nunca recibo correo.
Ron: Abrámoslo.
[La abren para revelar un palo de escoba.]

Harry: ¡Es un palo de escoba!
Ron: No es una escoba cualquiera, Harry. [reconociendo el modelo] ¡Es una Nimbus 2000!
Harry: ¿Pero quién ...?
[Se da cuenta de que la profesora McGonagall está sentada en la mesa principal, acariciando a Hedwig. Ella sonríe y Harry asiente.] [Más tarde, dentro de una torre de Quidditch. El equipo de Gryffindor marcha hacia la puerta de salida. Lo alcanzan y se detienen, detrás de una puerta doble cerrada.]

Oliver: ¿Asustado, Harry?
Harry: Un poco.
Oliver: Está bien. Sentí lo mismo antes de mi primer juego.
Harry: ¿Qué pasó?
Oliver: Er, realmente no lo recuerdo. Recibí una bludger en la cabeza 2 minutos después. Me desperté en el hospital una semana después.
[Harry traga saliva y mira al frente mientras se abren las puertas. Montan sus escobas y se alejan al enorme campo. Hay vítores. Lee Jordan, el comentarista de Quidditch está anunciando desde una torre.]

Lee: ¡Hola y bienvenido al primer juego de Quidditch de la temporada de Hogwarts! ¡¡¡El juego de hoy Slytherin contra Gryffindor !!!
[Aplausos. Primer plano de los estudiantes de Gryffindor. Están animando.]

Neville: ¡Gryffindor!
[Los jugadores toman sus posiciones en el aire en círculo. Harry teje, el más alto entre. Él mira hacia abajo.]

Lee: Los jugadores toman sus posiciones mientras Madam Hooch sale al campo para comenzar el juego.
Hooch: Ahora, quiero un buen juego limpio ... de todos ustedes. [mira a Slytherin. Ella patea el tronco y las bludgers se alejan.]
Lee: Las bludgers están listas ... seguidas por la Snitch Dorada. Recuerde, la snitch vale 150 puntos. El buscador que atrapa la Snitch termina el juego.
[La snitch gira alrededor de la cabeza de cada Buscador y luego desaparece. Hooch agarra la Quaffle.]

Lee: Se lanza la Quaffle ... ¡y comienza el juego!
[Gryffindor toma posesión de la pelota y una cazadora, Angelia Johnson, pasa a los Slytherins hacia su meta, lanza la pelota y anota! Hay un ding.]

Lee: ¡Angelina Johnson anota! ¡10 puntos para Gryffindor! [Presiona un botón y aparece un 10 junto a una placa con el nombre de Gryffindor.]
[Harry, en el aire, aplaude.]

Harry: ¡Sí! [una bludger de repente se acerca a él.] ¡Guau!
[En las gradas, Gryffindor aplaude.]

Hagrid: ¡Bien hecho!
Lee: Slytherin toma posesión de la Quaffle. Bletchley pasa al Capitán Marcus Flint.
[Flint esquiva a la gente y se lanza a los aros de Gryffindor. Oliver aparece y golpea la pelota con su escoba. Le sonríe a Flint, quien lo fulmina con la mirada. Johnson y Katie Bell pasan la Quaffle de un lado a otro mientras diseñan estrategias para anotar. Johnson lo toma, lanza y una vez más anota!]

Ron y Seamus: ¡Yay!
Harry: ¡Sí!
Lee: ¡Otros 10 puntos para Gryffindor! [agrega otros 10 al puntaje con un ding.]
Gryffindors: ¡Yay!
[Los Slytherin deciden ensuciarse. Esquivan, patean e intentan anotar. Una vez más, Oliver bloquea.]

Flint: ¡Dame eso! [agarra un bate de batidor de uno y golpea con una bludger directamente a Oliver. Golpea a Oliver directamente en el estómago y cae en picado al suelo, noqueado.]
[Esto hace que toda la audiencia abuchee; Harry está visiblemente molesto cuando los Slytherin se ríen. Los miembros de Slytherin se van. Uno salta sobre George (o Fred) y anota. Lee agrega 10 puntos en la placa con el nombre de Slytherin. Harry está molesto de nuevo. Slytherin aplaude.]

Flint: [a sus compañeros de equipo] ¡Tomen ese lado!
[Encerraron a Johnson y la enviaron a los cabos que cubrían una de las torres. Ella cae y sale. La multitud abuchea. Slytherin anota una vez más.

Interferencia superada
[De repente, Harry ve la Snitch. Empieza a ir tras él y luego, de repente, su escoba comienza a moverse y girar.]
Harry: ¡Vaya! ¡Whooa!
Hagrid: ¿Qué está pasando con la escoba de Harry?
[Hermione mira a Harry con binoculares, luego a Snape, quien está murmurando visiblemente.]

Hermione: ¡Es Snape! ¡Está maldiciendo la escoba!
Ron: ¿Maldiciendo la escoba? qué hacemos?
Hermione: Déjamelo a mí. [Le da a Ron sus binoculares y abandona las gradas.]
[Harry es golpeado y arrojado, luego cae, colgando de un brazo de la escoba.]

Ron: [preocupado] ¡Vamos, Hermione!
[Hermione se apresura en las estructuras de la torre. Aparece debajo de Snape y toca su capa con su varita.]

Hermione: [en voz baja] Lacarnum Inflamarae.
[Se enciende una chispa y la capa de Snape se prende fuego. Hermione se marcha rápidamente.]

Hombre: ¡Fuego! ¡Estás que ardes!
Snape: ¿Qué? Oh! [golpea al hombre hacia atrás, quien cae sobre Quirrell, quien luego también cae. Snape apaga el fuego y actúa como si nada hubiera pasado. La escoba deja de moverse y Harry vuelve a subir. El buscador de Slytherin está detrás de la Snitch. Harry despega.]
Ron: ¡Vete!
Hagrid: ¡Ve, ve, ve!
[Harry golpea al Buscador de Slytherin, luego es golpeado. Regresa, aplastando al Buscador de nuevo mientras la Snitch se zambulle. Los chicos los siguen, pero se acercan al suelo rápidamente. El Buscador de Slytherin retrocede, y Harry levanta su escoba mientras sigue a la Snitch, pies por encima del suelo. Harry se pone de pie y da un paso adelante, tratando de agarrar la pelota. Va demasiado lejos y cae de la escoba con un grito, cayendo al suelo. Se levanta y se tambalea. La multitud jadea. Hermione aparece junto a una torre para ver.]

Hagrid: ¡Parece que se pondrá enfermo!
[Harry se tambalea y la Snitch sale de su boca. Aterriza en sus manos.]

Lee: ¡Tiene la Snitch! ¡Harry Potter recibe 150 puntos por atrapar la Snitch!
Hooch: [Hace sonar su silbato mientras viaja en su escoba] ¡Gryffindor gana!
[La multitud vitorea con alegría, incluido Gryffindor]

Draco: [consternado] ¡No!
Hagrid: ¡Sí!
Hermione: ¡Whoo-hoo!
[McGonagall se ríe alegremente. Harry levanta la Snitch en el aire y la multitud, y su equipo, aplauden.]

Multitud: ¡Vete, Gryffindor! ¡Ve, ve Gryffindor! ¡Ve, ve Gryffindor! ¡Ve, ve Gryffindor!
Regalo de Navidad
[Harry, Hermione y Ron están caminando por un sendero con Hagrid, hablando.]

Hagrid: ¡Tonterías! ¿Por qué Snape pondría una maldición sobre la escoba de Harry?
Harry: ¿Quién sabe? ¿Por qué estaba tratando de pasar a ese perro de tres cabezas en Halloween?
Hagrid: [se vuelve hacia ellos, con sospecha] ¿Quién les dijo sobre Fluffy?
Ron: ¿Mullido?
Hermione: ¿Esa cosa tiene nombre?
Hagrid: Bueno, por supuesto que tiene un nombre. El es mio. Se lo compré a un tipo irlandés que conocí en el pub el año pasado. Luego se lo presté a Dumbledore para que protegiera el ...
Harry: ¿Sí?
Hagrid: No debería haber dicho eso. ¡No mas preguntas! No hagas más preguntas. Eso es alto secreto, eso es.
Harry: Pero, Hagrid, lo que sea que esté protegiendo Fluffy, Snape está tratando de robarlo.
Hagrid: Codswallop. El profesor Snape es un profesor de Hogwarts.
Hermione: Maestra de Hogwarts o no, reconozco un hechizo cuando veo uno. He leído todo sobre ellos. Tienes que mantener el contacto visual y Snape no estaba parpadeando.
Harry: Exactamente.
Hagrid: [Suspira] Ahora, escúchenme los tres. Te estás entrometiendo en cosas en las que no debes entrometerte. Es peligroso. Lo que ese perro está protegiendo es estrictamente entre Dumbledore y Nicholas Flamel.
Harry: [Curioso y se vuelve hacia Ron y luego vuelve a Hagrid] ¿Nicholas Flamel?
Hagrid: [Murmura para sí mismo] No debería decir eso. No debería haber dicho eso.
[Luego se va, murmurando para sí mismo "No debería haber dicho eso"]

Harry: Nicholas Flamel. [Se vuelve hacia Hermione] ¿Quién es Nicholas Flamel?
Hermione: No lo sé. [Niega con la cabeza]
[Ahora es Navidad en Hogwarts, con nieve cayendo. Hagrid está arrastrando un enorme árbol de Navidad al castillo.] [Hermione camina hacia la entrada del Gran Comedor con su equipaje y con una bufanda mientras los fantasmas cantan canciones navideñas.]

Fantasmas: Feliz Navidad. Feliz Navidad. Toca la campana de Hogwart. Feliz Navidad. Feliz Navidad ...
[Hermione mira desde el enorme árbol de Navidad mientras Flitwick usa su varita para poner otro adorno en el árbol para Harry y Ron mientras juegan al ajedrez y camina hacia ellos.]
Harry: Caballero a E5. [El Caballero se mueve hacia su destino. Hermione camina detrás de Harry.]
Ron: [con cara engreída] Reina a E5.
[Hermione observa como la reina de Ron se acerca al caballero de Harry y golpea al caballero con su silla. Ron sonríe.]

Hermione: [con cara de asombro] ¡Eso es totalmente bárbaro!
Ron: Eso es ajedrez de mago. [Mira a Hermione] Veo que has empacado.
Hermione: Ves que no lo has hecho.
Ron: Cambio de planes, mis padres decidieron ir a Rumania a visitar a mi hermano Charlie. Está estudiando dragones allí.
Hermione: Bien, entonces puedes ayudar a Harry. Va a buscar en la biblioteca información sobre Nicholas Flamel.
Ron: Lo hemos mirado cientos de veces.
Hermione: [Se inclina sobre la mesa más cerca de Ron y Harry] No en la sección restringida. Feliz Navidad. [Hermione deja a Ron y Harry]
Ron: [Mira a Harry] Creo que hemos tenido una mala influencia sobre ella.
[Ahora es la mañana de Navidad. Ron está despertando a Harry]

Ron: [Desde abajo] ¡Harry despierta! ¡Vamos Harry, despierta!
[Harry se pone las gafas y sale corriendo de la cama. Luego mira a Ron]
Ron: [Mirando a Harry] Feliz Navidad, Harry.
Harry: Feliz Navidad, Ron. [Harry se da cuenta del suéter de Ron] ¿Qué llevas puesto?
Ron: [Mira el suéter] Oh. Mi mamá lo hizo. [Volviendo a mirar a Harry] Parece que tú también tienes uno.
Harry: ¿Tengo regalos?
Ron: [Asintiendo] ¡Sí!
[Harry baja corriendo las escaleras para ver sus regalos]

Ron: Ahí están.
[Harry ve una nota sobre el presente y la abre, leyéndola]

Harry: Tu padre dejó esto en mi poder antes de morir. Es hora de que te lo devuelvan. Úsalo bien. [Harry mira a Ron, quien se encoge de hombros]
[Harry luego procede a abrir el resto de su regalo. Saca un objeto parecido a una manta]

Ron: ¿Qué es?
Harry: [Mirando el objeto] Es una especie de capa.
Ron: Bueno, veamos entonces, póntelo.
[Harry luego envuelve la capa alrededor de sus hombros, haciendo que su cuerpo sea invisible]

Ron: ¡Vaya!
Harry: [Mira su cuerpo invisible] ¡Mi cuerpo se ha ido!
Ron: Sé lo que es eso. Esa es una capa de invisibilidad.
Harry: ¿Soy invisible? [Harry se gira, mirándose a sí mismo]
Ron: Son realmente raros. [Ron mira la nota] Me pregunto quién te la dio.
Harry: [Ahora también mirando la nota] No había nombre. Solo dijo que lo utilices bien.
Envuelto en la oscuridad
[Tarde en la noche. Aparecen una linterna y una mano, pero nada más. El conjunto camina por la biblioteca oscura y entra en la sección restringida. Se apaga la lámpara y se quita la capa, revelando que es Harry quien busca en las estanterías.]

Harry: Famosos devoradores de fuego ... Demonios del siglo XV ... Flamel ... Nicholas Flamel ... ¿dónde estás?
[Harry toma un libro y lo abre. De entre las páginas aparece el rostro de un hombre, que grita loca y fuerte. Harry inmediatamente cierra el libro y lo vuelve a

colocar .] Filch: ¡¿Quién está ahí ?! [Harry se da la vuelta y rápidamente agarra su capa, haciendo que la lámpara caiga y se rompa.] Sé que estás ahí. No puedes esconderte. [Harry se pone su capa y se arrastra alrededor de Filch.] ¿Quién es? ¡Muéstrate!
[Harry sale corriendo de la habitación, respirando con dificultad. Sale al pasillo, donde la Sra. Norris, quien maulla y comienza a seguirlo. Harry corre alrededor de una esquina, justo cuando aparecen Snape y Quirrell. Snape empuja a Quirrell contra la pared.]

Quirrell: Severus ...
Yo-yo pensé ... Snape: No me quieres como tu enemigo, Quirrell.
Quirrell: ¿Q-qué quieres decir?
Snape: Sabes perfectamente a qué me refiero. [Snape siente algo que hace que Harry deje de respirar. Snape se acerca para agarrar algo, pero no lo hace. Mueve su dedo hacia atrás frente al rostro de Quirrell.] Tendremos otra charla pronto ... cuando hayas tenido tiempo de decidir dónde están tus lealtades.
[Llega Filch, llevando la linterna rota.]

Filch: Oh, profesores. Encontré esto, en la sección restringida. Todavía hace calor. Eso significa que hay un estudiante fuera de la cama.
[Al escuchar esto, Snape y Quirrell se alejan]

El Espejo de Erised
[Una puerta se abre y se cierra. Al otro lado, hay una gran habitación vacía que tiene un gran espejo en el centro, conocido como el Espejo de Erised. Harry aparece y se acerca al espejo. En el reflejo, ve aparecer a dos personas que son los difuntos padres de Harry, James y Lily Potter.]

Harry: ¿Mamá? [Lily asiente y sonríe] ¿Papá? [James asiente y sonríe. Harry extiende la mano para tocarlos, pero solo alcanza el espejo. Entonces, su madre le pone la mano en el hombro. Él pone su propia mano sobre sus propios hombros, como si tratara de sentirla allí.]
[De vuelta en el dormitorio de los chicos en la torre de Gryffindor, Harry entra de golpe, invisible.]

Harry: ¡Ron! ¡Realmente tienes que ver esto! ¡Ron! ¡Tienes que ver esto! [retira las cubiertas. Ron se despierta.] Ron, Ron, vamos. ¡Levantarse de la cama!
Ron: [cansado] ¿Por qué?
Harry: Hay algo que tienes que ver. ¡Ahora ven!
[De vuelta a la habitación. Harry y Ron aparecen como por arte de magia y Harry corre hacia el espejo.]

Harry: Vamos. Ven. ¡Ven a mirar, son mis padres!
Ron: Solo me veo a mí.
Harry: [se mueve] Mira bien. Seguir. Quédate ahí. Ahí. Los ves, ¿no?
Ese es mi papá Ron: ¡Ese soy yo! Solo que soy el jefe ... ¡y estoy sosteniendo la copa de Quidditch! ¡Y maldita sea, yo también soy Capitán de Quidditch! Luzco bien. Harry,
Harry: ¿Cómo puede ser? Mis dos padres están muertos. [Harry sonríe con tristeza.]
(Versión extendida)

[Un día, en el Gran Comedor donde la mayoría de los estudiantes, particularmente los Weasley están comiendo, Harry se sienta frente a la chimenea.]

George: ¿Te gusta el tuyo, Ron? [Ron se vuelve hacia Harry, quien todavía está sentado frente a la chimenea y está muy callado.] ¿Ron?
Ron: Vuelvo enseguida. [Deja la mesa y se acerca a Harry.] ¿Quieres jugar al ajedrez?
Harry: No.
Ron: ¿Vamos a visitar a Hagrid?
Harry: No.
Ron: Harry, sé lo que estás pensando, pero no lo hagas. Hay algo que no está del todo bien en ese espejo.
[Harry asiente y Ron se va para volver a la mesa mientras Harry continúa mirando la chimenea.]

(Versión original)

[La noche siguiente, Harry está de regreso en la habitación donde está el espejo, mirando con nostalgia el reflejo donde están sus padres. Dumbledore aparece muy atrás de él]

Dumbledore: ¿De regreso, Harry? [Harry se da la vuelta y se pone de pie.] Veo que tú, como muchos antes que tú, has descubierto las delicias del Espejo de Erised. Confío en que ahora se dé cuenta de lo que hace. Déjame darte una pista. El hombre más feliz de la tierra se miraría en el espejo y se vería solo a sí mismo, exactamente como es.
Harry: Entonces, ¿nos muestra lo que queremos? ¿Lo que queramos?
Dumbledore: [mientras se mira al espejo] Sí ... y no. Nos muestra nada más ni menos que los deseos más profundos y desesperados de nuestro corazón. Ahora usted, que nunca ha conocido a su familia, los ve de pie a su lado. Pero recuerda esto, Harry. Este espejo no nos da ni conocimiento ni verdad. Los hombres se han consumido frente a él, incluso se han vuelto locos. Por eso mañana lo trasladarán a una nueva vivienda, y debo pedirte que no vuelvas a buscarlo. No conviene insistir en los sueños, Harry, y olvidarse de vivir. [Harry se mira al espejo, sabiendo que Dumbledore tiene razón.]
Norbert
[Está nevando durante el día, Harry está en el patio principal, abrigado, con Hedwig del brazo. Él se detiene y ella despega, elevándose hacia el cielo. Como pasó el tiempo cuando ella regresa, ahora es primavera.]

(Versión extendida)

Harry: Hola, Hedwig. [Hedwig acaba de volar hacia la mesa donde Harry, Ron y Hermoine están estudiando]
Hermione: Mírate jugando con tus cartas. ¡Patético! Pronto tendremos los exámenes finales.
Ron: ¡Estoy listo! Pregúntame cualquier cosa.
Hermione: Muy bien, ¿cuáles son los tres ingredientes más cruciales en una poción de olvido?
Ron: ... lo olvidé.
Hermione: ¿Y qué, puedo preguntar, planeas hacer si esto surge en el examen final?
Ron: ¿Copiarte?
Hermione: ¡No, no lo harás! Además, según la profesora McGonagall, se nos van a dar unas púas especiales embrujadas con un hechizo anti-trampas.
Ron: ¡Eso es un insulto! ¡Es como si no confiaran en nosotros! [revisa una tarjeta, irritado] ¡Dumbledore otra vez!
[Justo en ese momento, Neville Longbottom entra de un salto al Gran Comedor con las piernas juntas mientras los otros estudiantes se ríen de él.]

Ron: ¿Maldición de piernas?
Harry: Malfoy. [Neville se les acerca en medio de las risas de los otros estudiantes]
Ron: Tienes que empezar a enfrentarte a la gente, Neville.
Neville: [tambaleándose incontrolablemente] ¿Cómo? ¡Apenas puedo estar de pie!
Seamus: [saltando, varita lista] ¡Haré la contra maldición!
Neville Longbottom: No, eso es todo lo que necesito ... ¡que prenda fuego a mis rótulas ensangrentadas!
Seamus: [golpeando su varita con enojo] No aprecio la insinuación, Longbottom. Además, si alguien se preocupa por notarlo, ¡mis cejas han vuelto a crecer por completo! [Luego se aleja enojado, mostrando un gran mechón de cabello que le falta en la parte posterior de la cabeza.]
Harry: ¡Lo encontré! [le entrega a Ron una tarjeta de la rana de chocolate de Dumbledore]
Ron: 'Dumbledore es particularmente famoso por su derrota del Mago Oscuro Grindelwald en 1945 -'
Harry: Adelante.
Ron: '-por su descubrimiento de los 12 usos de la Sangre de Dragón, y su trabajo de alquimia con su socio Nicolas Flamel! '
Harry: Sabía que el nombre sonaba familiar. Lo leí en el tren ese día.
Hermione: [sonriendo emocionada] ¡Sígueme!
[El Trío sale del Gran Comedor, dejando al pobre Neville todavía agitado]
Neville Longbottom: Oye, espera, ¿a dónde vas? ¿Qué pasa con la contra maldición? [antes de que pueda decir otra palabra, se cae al revés, los otros estudiantes comienzan a reír.]
(Versión original)

[En la biblioteca, Harry y Ron están sentados, leyendo hasta que Hermione llega con un libro enorme y lo golpea en la mesa haciendo Harry saltó.]

Hermione: ¡Te tenía mirando en la sección equivocada! ¿Cómo pude ser tan estúpido? Revisé esto hace unas semanas para una lectura ligera.
Ron: ¿Esto es luz?
Hermione: ¡Por supuesto! ¡Aquí está! [mientras lee la descripción en la página] "¡Nicholas Flamel es el único fabricante conocido de la Piedra Filosofal!"
Ron y Harry: ¿El qué?
Hermione: Honestamente, ¿no leen ustedes dos? "La Piedra Filosofal es una sustancia legendaria con poderes asombrosos. Convierte cualquier metal en oro puro y produce el Elixir de la Vida, que hará inmortal al bebedor".
Ron: ¿Inmortal?
Hermione: Significa que nunca morirás.
Ron: ¡Sé lo que significa!
Harry: ¡Shh!
Hermione: "¡La única piedra que existe actualmente pertenece al Sr. Nicholas Flamel, el renombrado alquimista, que el año pasado celebró su 665 cumpleaños!" Eso es lo que vigila Fluffy en el tercer piso. Eso es lo que hay debajo de la trampilla ... ¡la Piedra Filosofal!
[Todos se miran preocupados. Es de noche en los terrenos del castillo, Hermione, Ron y Harry corren hacia la cabaña de Hagrid. Llaman a la puerta y Hagrid, que lleva un delantal y guantes de cocina, la abre por dentro.]

Harry: ¡Hagrid!
Hagrid: Oh, hola. Lo siento, no quiero ser grosero, pero no estoy en condiciones de recibir invitados hoy.
[Empieza a cerrar la puerta]

Los tres: ¡Sabemos de la Piedra Filosofal!
[Hagrid abre la puerta de nuevo]

Hagrid: Oh.
[Todos entran en la cabaña de Hagrid.]

Harry: Creemos que Snape está tratando de robarlo.
Hagrid: ¿Snape? Caray, Harry, todavía no estás hablando de él, ¿verdad?
Harry: Hagrid, sabemos que está detrás de la Piedra. Simplemente no sabemos por qué.
Hagrid: ¡Snape es uno de los maestros que protegen la Piedra! ¡No está dispuesto a robarlo!
Harry: ¿Qué?
Hagrid: Escuchaste. Correcto. Vamos, ahora estoy un poco preocupado.
Harry: Espera un minuto. [Ron pronto ve al jabalí Fang de Hagrid, quien lo olfatea.] ¿Uno de los profesores?
Hermione: [sentada en una silla grande] ¡Por supuesto! Hay otras cosas que defienden la Piedra, ¿no? Hechizos, encantamientos.
Hagrid: Eso es correcto. Pérdida de maldito tiempo, si me preguntas. [Hermione mira a Ron, a quien Fang todavía está olfateando en la cara. Finalmente Ron se aleja arrastrando los pies.] Nadie va a pasar por delante de Fluffy. Jeje, ni un alma sabe cómo. Excepto por mí y Dumbledore. No debería haberte dicho eso. No debería haberte dicho eso. [Un caldero sobre el fuego comienza a vibrar.] ¡Oh! [Hagrid se apresura y agarra algo] ¡Ooh! ¡Oh! ¡Oh! ¡Oh! [Lo coloca sobre la mesa. Fue un huevo. El grupo se agolpa alrededor.]
Harry: Uh, Hagrid, ¿qué es exactamente eso?
Hagrid: ¿Eso? Es un ... es um ...
Ron: ¡Sé lo que es! Pero Hagrid, ¿cómo conseguiste uno?
Hagrid: Lo gané. De un extraño que conocí en un pub. De hecho, parecía bastante contento de haberme librado de él.
[El huevo traquetea y se abren grietas mientras los pedazos salen volando; emerge un pequeño bebé dragón. Chirría y se desliza sobre un trozo de huevo.]

Hermione: ¿Eso es ... un dragón?
Ron: Eso no es solo un dragón. ¡Eso es un Ridgeback noruego! Mi hermano Charlie trabaja con estos en Rumania.
Hagrid: ¿No es hermoso? Oh. Bendito sea, mira. Conoce a su mamá. Jeje. Hola, Norbert.
[Norbert chilla mientras mira a Hagrid.]

Harry: ¿Norbert?
Hagrid: Sí, bueno, tiene que tener un nombre, ¿no? [Ron se ríe] ¿No es así, Norbert? [levanta los dedos de un lado a otro por la barbilla de Norbert] Dededede.
[Norbert retrocede, hasta que tiene hipo y lanza una pequeña bola de fuego a la barba de Hagrid.]

Hagrid: ¡Ohh! [rápidamente se quita los ardor de la barba] ​​Oooh, ooh, ooh, bueno ... tendrá que entrenarse un poco, por supuesto. [Hipo de Norbert. Hagrid ve a alguien mirando por la ventana.] ¿Quién es ese? [Resulta ser Draco Malfoy, que se aleja corriendo.]
Harry: Malfoy.
Hagrid: Oh, querido.
[Harry, Ron y Hermione están caminando de regreso por un pasillo mientras un búho chilla.]

Harry: Hagrid siempre quiso un dragón. Me lo dijo la primera vez que lo conocí.
Ron: Es una locura. Y peor, Malfoy lo sabe.
Harry: No lo entiendo. ¿Es tan malo?
Ron: Está mal.
[Se detienen cuando McGonagall, en camisón, aparece severamente.]

McGonagall: Buenas noches.
[Entonces, Malfoy aparece con aire de suficiencia a su lado. Dentro del salón de clases de McGonagall, los tres están ahora parados frente al escritorio de McGonagall, mientras que Malfoy está a unos metros de distancia, sonriendo.]

McGonagall: [severamente] Nada, repito, nada le da a un estudiante el derecho de caminar por la escuela por la noche. Por lo tanto, como castigo por sus acciones, se tomarán 50 puntos.
Harry: ¡¿50 ?!
McGonagall: Cada uno. [Harry jadea] Y para asegurarse de que no vuelva a suceder, los cuatro serán detenidos.
[Malfoy asiente, luego su sonrisa se desvanece con gran preocupación.]

Draco: Disculpe, profesor. Quizás te escuché mal. Pensé que habías dicho ... "nosotros cuatro".
McGonagall: No, me escuchó correctamente, Sr. Malfoy. Verá, por muy honorables que fueran sus intenciones, usted también estaba fuera de la cama después de horas. Cumplirá la detención con sus compañeros de clase.
[Harry, Ron y Hermione sonríen mientras Draco se hunde, sabiendo que las tornas han cambiado.]

El Bosque Prohibido
[La noche siguiente, Harry, Ron, Hermione y Draco serán llevados a la cabaña de Hagrid por el Sr. Filch.]

Filch: Lástima que dejen morir los viejos castigos. Hubo un tiempo en que la detención te encontraba colgado de los pulgares en las mazmorras. Dios, extraño los gritos. [Draco traga saliva y Hermione pasa corriendo.] Esta noche cumplirás la detención con Hagrid. Tiene un pequeño trabajo que hacer dentro del bosque oscuro. [Hagrid aparece con una ballesta. Él solloza.] Lo siento mucho, Hagrid. Dios mío, hombre, todavía no estás hablando de ese maldito dragón, ¿verdad?
Hagrid: [olfatea y suspira] Norbert se ha ido. Dumbledore lo envió a Rumania a vivir en una colonia.
Hermione: Bueno, eso es bueno, ¿no? Estará con los de su propia especie.
Hagrid: Sí, pero ¿y si no le gusta Rumania? {Filch pone los ojos en blanco.} ¿Y si los otros dragones son malos con él? Después de todo, es solo un bebé.
Filch: Oh, por el amor de Dios, cálmate, hombre. Vas a ir al bosque, después de todo. Tienes que tener tu ingenio sobre ti.
Draco: ¿El bosque? ¡Pensé que era una broma! No podemos entrar ahí. No se permiten estudiantes. Y hay ... [un aullido] ... ¡hombres lobo!
Filch: Hay más que hombres lobo en esos árboles, muchacho. Puede estar seguro de eso. [Draco parece asustado.] Buenas noches. [Se va para volver al castillo]
Hagrid: Correcto. Vamonos.
[En el Bosque Prohibido, el grupo camina por un sendero hacia un árbol. Hagrid se detiene, se inclina y sumerge los dedos en un charco plateado. Saca los dedos y los frota. Un rastro plateado mancha con sus dedos.]

Harry: Hagrid, ¿qué es eso?
Hagrid: Para qué estamos aquí. ¿Mira eso? Eso es sangre de unicornio, eso es. Encontré a uno muerto hace unas semanas. Este ha sido herido gravemente por algo. [Harry de repente ve una gran figura encapuchada caminando entre los árboles. Mira a Hagrid.] Entonces, es nuestro trabajo encontrar a la pobre bestia. Ron, Hermione, vendrás conmigo.
Ron: De acuerdo.
Hagrid: Y Harry, irás con Malfoy. [Draco hace una mueca y Harry asiente.]
Draco: Está bien. ¡Entonces obtengo Fang!
Hagrid: Bien. Para que lo sepas, es un maldito cobarde. [Fang gime.]
[Harry y Draco están caminando por una parte del bosque, con Fang a la cabeza. Draco tiene la lámpara en la mano.]

Draco: Espera hasta que mi padre se entere de esto. Esto es cosa de sirvientes.
Harry: Si no lo supiera mejor, Draco, yo '
Draco: ¡¿Asustado, Potter ?! [Se burla, pero de repente oye un aullido] ¿Escuchaste eso? Vamos, Fang. Asustado.
[Harry y Draco se acercan a un terreno llano con raíces nudosas por todas partes. Fang se detiene, luego gruñe.]

Harry: ¿Qué pasa, Fang?
[Más adelante hay una figura envuelta en una capa que está agachada sobre un unicornio muerto, bebiendo la sangre de su herida. La figura levanta la cabeza, sangre plateada gotea de su boca. Harry jadea y se agarra la cicatriz, que le duele. Draco grita de puro miedo y huye con Fang.]

Draco: ¡¡¡¡AYUDA !!!!!
[Harry queda solo a merced de la figura que se desliza sobre el unicornio y se levanta erguido. Avanza hacia Harry, quien retrocede, pero tropieza. Se arrastra hacia atrás. De repente, se oye el sonido de cascos. Una figura salta sobre Harry y aterriza cerca de la figura encapuchada. Es un centauro de plata llamado Firenze. Se levanta, y la figura encapuchada se retira, volando.]

Firenze: Harry Potter, debes irte. Muchas criaturas te conocen aquí. El bosque no es seguro en este momento. Especialmente para usted.
Harry: ¿Pero de qué me salvaste?
Firenze: una criatura monstruosa. Es un crimen terrible matar a un unicornio. Beber la sangre de un unicornio te mantendrá vivo incluso si estás a una pulgada de la muerte. Pero a un precio terrible. Has matado algo tan puro que en el momento en que la sangre toque tus labios, tendrás una vida media. Una vida maldita.
Harry: ¿Pero quién elegiría una vida así?
Firenze: ¿No puedes pensar en nadie?
Harry: ¿Quieres decir ... que esa cosa que mató al unicornio ... que estaba bebiendo su sangre ... que era Voldemort?
Firenze: ¿Sabes qué se esconde en la escuela en este mismo momento?
Harry: [dándose cuenta] La piedra filosofal.
[Fang de repente ladra y Harry mira hacia arriba para ver aparecer a Hagrid, Hermione, Ron y Draco. Hagrid tiene su ballesta lista, pero la baja cuando ve a Firenze.]

Hermione: ¡Harry!
Hagrid: Hola, Firenze. Veo que ha conocido a nuestro joven Sr. Potter. ¿Estás bien, Harry? [Harry asiente]
Firenze: Harry Potter, aquí es donde te dejo. Estás a salvo ahora. Buena suerte.
[Se va mientras el grupo mira al unicornio muerto.]

Hasta algo
Hermione: [ella, Harry y Ron se encuentran en la sala común] ¿Te refieres a Quien-Tú-Sabes que está ahí afuera, ahora mismo, en el bosque?
Harry: Pero es débil. Vive de los unicornios. No ves ¡Lo hicimos mal! Snape no quiere la Piedra para él; quiere la Piedra para Voldemort. Con el Elixir de la vida, Voldemort volverá a ser fuerte. Él ... regresará.
Ron: Pero, si vuelve, no crees que intentará ... matarte, ¿verdad?
Harry: Creo que si hubiera tenido la oportunidad, podría haber intentado matarme esta noche.
Ron: [traga saliva] Y pensar que me he estado preocupando por mi final de pociones.
Hermione: Espera un minuto. [Harry y Ron la miran] Nos estamos olvidando de una cosa. ¿Quién es el único mago al que Voldemort siempre temió? Dumbledore. Mientras Dumbledore esté cerca, Harry, estás a salvo. Mientras Dumbledore esté cerca, no te pueden tocar. [le da una sonrisa tranquilizadora; asiente]
A través del sacrificio de
ajedrez del mago de la
trampilla Juega al
hombre con dos caras
[Harry baja las escaleras lentamente. A mitad de camino, hace una mueca, siente su cicatriz ardiendo, y ve al profesor Quirrell de pie ante el Espejo de Erised.]

Harry: ¿Tú? [Quirrell se vuelve hacia él] No. No, no puede ser. Snape,
Quirrell: Sí. Parece el tipo, ¿no? Junto a él, ¿quién sospecharía del pobre y tartamudo profesor Quirrell?
Harry: Pero-pero ese día, durante el partido de Quidditch, Snape trató de matarme.
Quirrell: [sonriendo maliciosamente] No, querido muchacho. Traté de matarte. [Harry lo mira con incredulidad y confusión] Y créeme, si la capa de Snape no se hubiera incendiado y roto mi contacto visual, habría tenido éxito, incluso con Snape murmurando su pequeña contra maldición.
Harry: ¿Snape estaba tratando de salvarme?
Quirrell: Sabía que eras un peligro para mí desde el principio. Especialmente después de Halloween.
Harry: Entonces, entonces dejas entrar al troll.
Quirrell: Muy bien, Potter, sí. Snape, desafortunadamente, no se dejó engañar. Mientras todos los demás corrían por la mazmorra, él fue al tercer piso para detenerme. Él, por supuesto, nunca volvió a confiar en mí. [se vuelve de nuevo hacia el espejo; Harry hace una mueca cuando su cicatriz vuelve a arder] Rara vez me dejaba solo. Pero no lo entiende. Nunca estoy solo, nunca. [mirando en el espejo] Ahora, ¿qué hace este espejo? Veo lo que deseo. Me veo sosteniendo la piedra. ¿Pero cómo lo consigo?
Voz inhumana invisible: Usa al chico. [Harry mira a su alrededor, preguntándose de dónde viene la voz]
Quirrell: [se vuelve hacia Harry] Ven aquí, Potter. ¡Ahora! [Harry baja lentamente las escaleras, hacia Quirrell y el espejo] Dime ... ¿qué ves? [Harry se mira en el espejo, y por unos segundos, lo ve de pie junto a Quirrell, luego su reflejo se mete la mano en el bolsillo y saca un rubí rojo brillante, la Piedra Filosofal; Harry mira con asombro mientras su reflejo sonríe y guiña un ojo, luego vuelve a guardar la piedra en su bolsillo; Harry palpa su bolsillo y se da cuenta de que la Piedra realmente está en su bolsillo, luego mira hacia arriba de nuevo] ¿Qué es? [mira a Harry mientras habla] ¿Qué ves?
Harry: [mira a Quirrell, luego de nuevo al espejo, decidido a no dejar que Quirrell sepa que tiene la Piedra] E-le estoy dando la mano a Dumbledore. Gané la Copa de la Casa.
Voz Inhumana Invisible: Miente.
Quirrell: [gritando enojado] ¡Dime la verdad! ¡¿Que ves?!
Voz inhumana invisible: Déjame hablar con él.
Quirrell: [mientras Harry retrocede] Maestro, no eres lo suficientemente fuerte.
Voz Inhumana Invisible: Tengo la fuerza suficiente para esto.
[Quirrell se acerca y comienza a desenvolverse el turbante mientras se vuelve de espaldas al espejo. Harry se vuelve hacia las escaleras de la habitación, preguntándose si debería intentar escapar, luego se vuelve hacia Quirrell nuevamente. Casi ha terminado de desenvolverse el turbante, salvo por un trozo que le cubre la nuca. Finalmente, se quita el turbante, revelando una cara blanca como la tiza de aspecto aterrador, Voldemort. Se gira y abre los ojos.]

Voldemort: Harry Potter, nos volvemos a encontrar.
Harry: [dándose cuenta de su identidad] Voldemort.
Voldemort: Sí. ¿Ves en lo que me he convertido? ¿Ves lo que debo hacer para sobrevivir? Vive de otro, un mero parásito. La sangre de unicornio puede sostenerme, pero no puede darme un cuerpo propio. Pero hay algo que puede, algo que, convenientemente, se encuentra en su bolsillo. [dándose cuenta de que Voldemort se está refiriendo a la Piedra Filosofal, Harry se da vuelta y sube corriendo las escaleras]
Magic Touch
Voldemort: Deténlo. [Quirrell chasquea los dedos, instantáneamente causando que los muros de fuego bloqueen todas las salidas, atrapando a Harry en la habitación] ¡No seas tonto! ¿Por qué sufrir una muerte horrible cuando puedes unirte a mí y vivir?
Harry: [niega con la cabeza] ¡Nunca!
Voldemort: Jaja. Valentía. Tus padres también lo tenían. Dime, Harry, ¿te gustaría volver a ver a tu madre y a tu padre? Juntos, podemos traerlos de vuelta. [En el espejo, los padres de Harry aparecen en el reflejo.] Todo lo que pido es algo a cambio. [Harry saca la Piedra de su bolsillo.] Eso es, Harry. No hay bien ni mal. Solo hay poder, y aquellos que son demasiado débiles para buscarlo. Juntos haremos cosas extraordinarias. ¡Solo dame la piedra! [James y Lily Potter se desvanecen del reflejo]
Harry: ¡Mentiroso!
Voldemort: ¡Mátalo!
[Bajo órdenes, Quirrell se eleva en el aire y agarra a Harry con una mano en su garganta. Caen a los escalones, haciendo que la Piedra caiga fuera del alcance de Harry cuando Quirrell lo estrangula. Harry se esfuerza y ​​chilla. De repente, Harry pone su mano sobre la mano de Quirrell en un intento por sacarlo. El humo sale de debajo de su mano cuando Quirrell hace una mueca.]

Quirrell: ¡Ahh! ¡Ahh! [Se aleja de Harry. Su mano se está convirtiendo en cenizas y polvo.] ¿Qué es esta magia? [Su mano se desintegra]
Voldemort: ¡Tonto! ¡Consigue la piedra!
[Quirrell camina hacia Harry, quien luego le toca la cara con las manos, lo que hace que Quirrell grite de dolor, y especialmente Voldemort haga una mueca de dolor. Harry mira horrorizado cuando Quirrell retrocede con su rostro horrendamente quemado. Quirrell se derrumba mientras camina hacia adelante, girando su cuerpo completamente en cenizas y polvo, y cae al suelo, dejando solo su ropa. Harry jadea, mientras mira sus propias manos y se apresura hacia la piedra. Lo levanta y suspira. Sin embargo, desde atrás, se forman nubes de polvo del cadáver de Quirrell, lo que hace que Harry se dé la vuelta mientras las nubes de polvo con la cara de Voldemort se apresuran hacia adelante gritando y atraviesan a Harry, que también grita. Voldemort se va volando, mientras Harry cae al suelo, inconsciente. Sostiene la Piedra con la mano extendida.]

Marca de amor
[En la enfermería al día siguiente, Harry está acostado en la cama con el brazo vendado. Se despierta, se pone las gafas y se sienta. Hay tarjetas y dulces por todas partes. Dumbledore se acerca a él.]

Dumbledore: Buenas tardes, Harry. ¡Ah! ¿Fichas de tus admiradores?
Harry: ¿Admiradores?
Dumbledore: Lo que sucedió en las mazmorras entre usted y el profesor Quirrell es un completo secreto, así que, naturalmente, toda la escuela lo sabe. [Ambos sonríen.] Ah, veo que tu amigo Ronald te ha ahorrado la molestia de abrir tus ranas de chocolate.
Harry: ¿Ron estuvo aquí? ¿Él está bien? ¿Y Hermione?
Dumbledore: Bien. Ambos están bien.
Harry: Pero, ¿qué pasó con la Piedra?
Dumbledore: Relájate, querido muchacho. La piedra ha sido destruida. Mi amigo Nicholas y yo tuvimos una pequeña charla y estuvimos de acuerdo en que era mejor para todos.
Harry: Pero Flamel, morirá, ¿no?
Dumbledore: [se sienta en la cama.] Tiene suficiente Elixir para poner sus asuntos en orden. Pero sí, morirá.
Harry: ¿Cómo conseguí la Piedra, señor? Un minuto estaba mirándome en el espejo y al siguiente ...
Dumbledore: Ah. Verá, solo una persona que quisiera encontrar la Piedra, encontrarla, pero no usarla, podría obtenerla. Esa es una de mis ideas más brillantes. Y entre tú y yo eso está diciendo algo.
Harry: ¿Eso significa que, sin la Piedra, quiero decir, que Voldemort nunca podrá regresar?
Dumbledore: Ah, me temo que hay formas en las que puede regresar. Harry, ¿sabes por qué el profesor Quirrell no podía soportar que lo tocases? [Harry niega con la cabeza.] Fue por tu madre. Ella se sacrificó por ti, y ese tipo de acto deja una marca. [Harry se toca la cicatriz.] No, no, este tipo de marca no se puede ver. Vive en tu propia piel.
Harry: ¿Qué es?
Dumbledore: Con amor, Harry, con amor. [Acaricia suavemente la cabeza de Harry y se pone de pie.] Ah. Frijoles de todos los sabores de Bertie Bott. Fui muy desafortunado en mi juventud al encontrarme con uno con sabor a vómito, y desde entonces he perdido mi gusto por ellos. Pero creo que podría estar seguro con un buen caramelo ... [toma un frijol marrón y se lo come] Mm. Pobre de mí. Cerumen.
[Harry con el brazo aún vendado entra a un pasillo donde en el balcón de una escalera, Hermione y Ron están hablando. Se detienen cuando ven a Harry y se inclinan sobre la barandilla.]

Harry: ¿Estás bien, Ron?
Ron: ¿Está bien? ¿Tú?
Harry: [mientras se encoge de hombros] Está bien. Hermione?
Hermione: [sonriendo] Nunca mejor.
Ganador de la Copa de la Casa
[Vemos el Gran Salón, lleno de estudiantes comiendo y hablando entre ellos. Hay estandartes verdes y plateados con el símbolo de Slytherin sobre sus cabezas, que ya indican la casa con más puntos. Dumbledore asiente levemente a la profesora McGonagall, quien luego hace sonar su cuchara contra su vaso, para llamar la atención de los estudiantes. La multitud se queda en silencio. Dumbledore se pone de pie y habla con su voz magnificada mágicamente.]

Dumbledore: ¡Otro año, se fue! Y ahora, según tengo entendido, la copa de la casa debe otorgarse y los puntos siguen así. En cuarto lugar: Gryffindor, ¡con 312 puntos! [Hay un aplauso medio de la multitud.] En tercer lugar: ¡Hufflepuff, con 352 puntos! [El aplauso para Hufflepuff es un poco más fuerte que el aplauso para Gryffindor.] Segundo: Ravenclaw, ¡con 426 puntos! [Aplausos de nuevo, esta vez con un ligero aplauso de algunos alumnos.] Y en primer lugar, con 472 puntos: ¡Casa Slytherin! [Un fuerte rugido se eleva desde la mesa de Slytherin, mientras los estudiantes se ponen de pie y aplauden por sí mismos. Malfoy mira mal la mesa de Gryffindor, donde Harry, Ron y Hermione lucen ligeramente deprimidos.] Sí, bien hecho Slytherin, bien hecho Slytherin. Sin embargo, hay que tener en cuenta los acontecimientos recientes y tengo algunos puntos de última hora que conceder. [Algunas caras en la mesa de Gryffindor se levantan esperanzadas.] Primero, a la señorita Hermione Granger, por el uso sereno del intelecto, mientras que otras estaban en grave peligro: ¡cincuenta puntos! [Hermione se ve sorprendida, mientras los otros estudiantes de Gryffindor la aplauden. A Malfoy, Crabbe y Goyle no les gusta lo que está pasando. Hermione mira a Hagrid, quien la mira con una sonrisa orgullosa.] Segundo, al Sr. Ronald Weasley, por el mejor juego de ajedrez que Hogwarts ha visto en estos años: ¡cincuenta puntos! [Ron parece aún más sorprendido que Hermione y la mesa de Gryffindor aplaude aún más fuerte.] Y tercero, al señor Harry Potter, por amor puro y valor excepcional, le otorgo la casa de Gryffindor: ¡sesenta puntos! [Hermione se ve sorprendida, mientras los otros estudiantes de Gryffindor la aplauden. A Malfoy, Crabbe y Goyle no les gusta lo que está pasando. Hermione mira a Hagrid, quien la mira con una sonrisa orgullosa.] Segundo, al Sr. Ronald Weasley, por el mejor juego de ajedrez que Hogwarts ha visto en estos años: ¡cincuenta puntos! [Ron parece aún más sorprendido que Hermione y la mesa de Gryffindor aplaude aún más fuerte.] Y tercero, al señor Harry Potter, por amor puro y valor excepcional, le otorgo la casa de Gryffindor: ¡sesenta puntos! [Hermione se ve sorprendida, mientras los otros estudiantes de Gryffindor la aplauden. A Malfoy, Crabbe y Goyle no les gusta lo que está pasando. Hermione mira a Hagrid, quien la mira con una sonrisa orgullosa.] Segundo, al Sr. Ronald Weasley, por el mejor juego de ajedrez que Hogwarts ha visto en estos años: ¡cincuenta puntos! [Ron parece aún más sorprendido que Hermione y la mesa de Gryffindor aplaude aún más fuerte.] Y tercero, al señor Harry Potter, por amor puro y valor excepcional, le otorgo la casa de Gryffindor: ¡sesenta puntos!
[Los Gryffindors vuelven a vitorear, esta vez más fuerte que antes. Malfoy tiene una expresión de vergüenza en su rostro, mientras que Harry ve a una orgullosa y sonriente profesora McGonagall en la mesa del maestro. Hermione, que ha hecho algunos cálculos rápidos, les susurra a sus compañeros de estudios.]

Hermione: ¡Estamos atados con Slytherin!
[Ahora, los Gryffindor se ven realmente esperanzados, ya que Dumbledore aún no ha terminado de hablar].

Dumbledore: Y finalmente: se necesita mucha valentía para enfrentarse a tus enemigos, pero mucho más para enfrentarte a tus amigos. ¡Le otorgo diez puntos a Neville Longbottom! [Neville no puede creer lo que acaba de escuchar y los Gryffindors que escucharon el susurro de Hermione son los que están vitoreando más fuerte. Malfoy parece bastante inseguro ahora.] Suponiendo que mis cálculos sean correctos, ¡creo que es necesario un cambio de decoración! [Hace un gesto con las manos hacia los estandartes de Slytherin, donde se agitan pesadamente, hasta que los estandartes han cambiado completamente a rojo y dorado con el símbolo de Gryffindor] ¡Gryffindor gana la Copa de la Casa!
[El Gran Comedor estalló con rugidos y aplausos, no solo de los Gryffindors, sino también de los Ravenclaws y los Hufflepuffs, porque están contentos de que, por primera vez en siete años, alguien más que Slytherin haya ganado la Copa de la Casa. Hagrid no puede evitar animar también, y todos los estudiantes, excepto los Slytherin, arrojan sus sombreros al aire, mientras Malfoy, enojado, arroja el suyo sobre la mesa en derrota. Los Gryffindors alrededor de Harry lo felicitan y Harry le sonríe a Hagrid, quien le devuelve la sonrisa.]

Realmente no voy a casa, estoy en ella
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)