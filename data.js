// Formato: palabra|lectura|español|frase|frase en español. Niveles separados por línea en blanco.
// Para ampliar: añade más líneas dentro de cada nivel (objetivo: 80 por nivel).
const D=`
私|わたし|yo|私は学生です。|Soy estudiante.
あなた|あなた|tú|あなたは先生です。|Tú eres profesor.
これ|これ|esto|これは本です。|Esto es un libro.
それ|それ|eso|それは何ですか。|¿Qué es eso?
はい|はい|sí|はい、そうです。|Sí, así es.
いいえ|いいえ|no|いいえ、違います。|No, no es así.
ありがとう|ありがとう|gracias|ありがとう、先生。|Gracias, profesor.
すみません|すみません|disculpe|すみません、いくらですか。|Disculpe, ¿cuánto cuesta?
こんにちは|こんにちは|hola|こんにちは、元気ですか。|Hola, ¿cómo estás?
さようなら|さようなら|adiós|さようなら、また明日。|Adiós, hasta mañana.
おはよう|おはよう|buenos días|おはよう、田中さん。|Buenos días, Tanaka.
水|みず|agua|水をください。|Agua, por favor.
今日|きょう|hoy|今日は暑いです。|Hoy hace calor.
明日|あした|mañana|明日は休みです。|Mañana es día libre.
昨日|きのう|ayer|昨日は雨でした。|Ayer llovió.
人|ひと|persona|あの人は誰ですか。|¿Quién es esa persona?
男|おとこ|hombre|男の人が来る。|Viene un hombre.
女|おんな|mujer|女の人が笑う。|Una mujer sonríe.
子供|こども|niño|子供が走る。|El niño corre.
名前|なまえ|nombre|名前は何ですか。|¿Cuál es tu nombre?
一|いち|uno|一番です。|Es el número uno.
二|に|dos|二人で行く。|Vamos los dos.
三|さん|tres|三時に会う。|Nos vemos a las tres.
四|よん|cuatro|四人家族です。|Somos una familia de cuatro.
五|ご|cinco|五分待つ。|Espero cinco minutos.
十|じゅう|diez|十人いる。|Hay diez personas.
百|ひゃく|cien|百円です。|Son cien yenes.
千|せん|mil|千円ください。|Mil yenes, por favor.
円|えん|yen|円で払う。|Pago en yenes.
日|ひ|día|いい日だ。|Es un buen día.
月|つき|luna|月がきれいだ。|La luna es hermosa.
年|とし|año|年を取る。|Envejezco.
時|とき|momento|時が来た。|Llegó el momento.
今|いま|ahora|今、行きます。|Voy ahora.
前|まえ|delante|駅の前にいる。|Estoy frente a la estación.
後|あと|después|後で電話する。|Llamo después.
上|うえ|arriba|机の上にある。|Está sobre la mesa.
下|した|abajo|木の下で待つ。|Espero bajo el árbol.
中|なか|dentro|箱の中を見る。|Miro dentro de la caja.
大きい|おおきい|grande|大きい犬だ。|Es un perro grande.
小さい|ちいさい|pequeño|小さい家です。|Es una casa pequeña.
新しい|あたらしい|nuevo|新しい車だ。|Es un coche nuevo.
古い|ふるい|viejo|古い本を読む。|Leo un libro viejo.
いい|いい|bueno|これはいい本だ。|Este es un buen libro.
悪い|わるい|malo|気分が悪い。|Me siento mal.
高い|たかい|alto/caro|この本は高い。|Este libro es caro.
安い|やすい|barato|安い店に行く。|Voy a una tienda barata.
多い|おおい|mucho|人が多い。|Hay mucha gente.
少ない|すくない|poco|水が少ない。|Hay poca agua.
好き|すき|gustar|犬が好きです。|Me gustan los perros.
帰る|かえる|volver|早く帰る。|Vuelvo temprano.
休む|やすむ|descansar|今日は休む。|Hoy descanso.
入る|はいる|entrar|部屋に入る。|Entro a la habitación.
来る|くる|venir|友達が来る。|Viene un amigo.
見る|みる|ver|映画を見る。|Veo una película.
聞く|きく|escuchar|音楽を聞く。|Escucho música.
話す|はなす|hablar|日本語を話す。|Hablo japonés.
読む|よむ|leer|本を読む。|Leo un libro.
書く|かく|escribir|名前を書く。|Escribo mi nombre.
買う|かう|comprar|水を買う。|Compro agua.
する|する|hacer|勉強をする。|Estudio.
ある|ある|haber (cosas)|机の上に本がある。|Hay un libro sobre la mesa.
いる|いる|estar (seres)|家に犬がいる。|Hay un perro en casa.
言う|いう|decir|何と言いましたか。|¿Qué dijiste?
花|はな|flor|花がきれいだ。|La flor es bonita.
家|いえ|casa|家は駅の近くだ。|Mi casa está cerca de la estación.
学校|がっこう|escuela|学校は九時です。|La escuela empieza a las nueve.
先生|せんせい|profesor|先生に聞く。|Le pregunto al profesor.
学生|がくせい|estudiante|学生が多い。|Hay muchos estudiantes.
空|そら|cielo|空が青い。|El cielo es azul.
犬|いぬ|perro|犬と歩く。|Camino con el perro.
猫|ねこ|gato|猫が寝る。|El gato duerme.
車|くるま|coche|車で行く。|Voy en coche.
お金|おかね|dinero|お金がない。|No tengo dinero.
食べ物|たべもの|comida|食べ物が好きだ。|Me gusta la comida.
お茶|おちゃ|té|お茶をください。|Té, por favor.
ご飯|ごはん|arroz/comida|ご飯を食べる。|Como arroz.
肉|にく|carne|肉が好きです。|Me gusta la carne.
魚|さかな|pescado|魚を買う。|Compro pescado.
山|やま|montaña|山に登る。|Subo a la montaña.

食べる|たべる|comer|パンを食べる。|Como pan.
飲む|のむ|beber|お茶を飲む。|Bebo té.
行く|いく|ir|学校へ行く。|Voy a la escuela.
本|ほん|libro|本を読む。|Leo un libro.
友達|ともだち|amigo|友達と話す。|Hablo con un amigo.
何|なに|qué|何を食べますか。|¿Qué comes?
誰|だれ|quién|誰が来ますか。|¿Quién viene?
どこ|どこ|dónde|トイレはどこですか。|¿Dónde está el baño?
いつ|いつ|cuándo|いつ帰りますか。|¿Cuándo vuelves?
なぜ|なぜ|por qué|なぜ泣くの。|¿Por qué lloras?
ここ|ここ|aquí|ここに座る。|Me siento aquí.
そこ|そこ|ahí|そこに置く。|Lo pongo ahí.
あそこ|あそこ|allá|あそこに店がある。|Allá hay una tienda.
毎日|まいにち|todos los días|毎日歩く。|Camino todos los días.
毎朝|まいあさ|cada mañana|毎朝走る。|Corro cada mañana.
朝|あさ|mañana|朝ご飯を食べる。|Desayuno.
昼|ひる|mediodía|昼に会おう。|Nos vemos al mediodía.
夜|よる|noche|夜は静かだ。|La noche es tranquila.
週|しゅう|semana|一週間待つ。|Espero una semana.
今年|ことし|este año|今年は暑い。|Este año hace calor.
去年|きょねん|año pasado|去年日本に行った。|Fui a Japón el año pasado.
来年|らいねん|año próximo|来年また来る。|Vendré otra vez el próximo año.
今月|こんげつ|este mes|今月は忙しい。|Este mes estoy ocupado.
国|くに|país|国に帰る。|Vuelvo a mi país.
日本|にほん|Japón|日本が好きだ。|Me gusta Japón.
日本語|にほんご|japonés|日本語は面白い。|El japonés es interesante.
外国|がいこく|extranjero|外国に住む。|Vivo en el extranjero.
町|まち|ciudad|町を歩く。|Camino por la ciudad.
店|みせ|tienda|店が開く。|La tienda abre.
部屋|へや|habitación|部屋が広い。|La habitación es amplia.
道|みち|camino|道を聞く。|Pregunto el camino.
手|て|mano|手を洗う。|Me lavo las manos.
目|め|ojo|目が痛い。|Me duelen los ojos.
口|くち|boca|口を開ける。|Abro la boca.
耳|みみ|oreja|耳がいい。|Tiene buen oído.
頭|あたま|cabeza|頭がいい。|Es inteligente.
足|あし|pie/pierna|足が速い。|Es rápido de piernas.
体|からだ|cuerpo|体を動かす。|Muevo el cuerpo.
顔|かお|cara|顔を洗う。|Me lavo la cara.
声|こえ|voz|声が大きい。|Tiene voz fuerte.
雨|あめ|lluvia|雨が降る。|Llueve.
雪|ゆき|nieve|雪が好きだ。|Me gusta la nieve.
風|かぜ|viento|風が強い。|El viento es fuerte.
海|うみ|mar|海で泳ぐ。|Nado en el mar.
川|かわ|río|川を渡る。|Cruzo el río.
木|き|árbol|木に登る。|Subo al árbol.
火|ひ|fuego|火を消す。|Apago el fuego.
色|いろ|color|好きな色は何ですか。|¿Cuál es tu color favorito?
赤い|あかい|rojo|赤い花を買う。|Compro una flor roja.
青い|あおい|azul|青い海が見える。|Se ve el mar azul.
白い|しろい|blanco|白い猫がいる。|Hay un gato blanco.
黒い|くろい|negro|黒い車だ。|Es un coche negro.
長い|ながい|largo|長い道を歩く。|Camino por un camino largo.
短い|みじかい|corto|短い話だ。|Es una historia corta.
早い|はやい|temprano|朝が早い。|Madruga.
遅い|おそい|lento/tarde|電車が遅い。|El tren va lento.
強い|つよい|fuerte|彼は強い。|Él es fuerte.
弱い|よわい|débil|体が弱い。|Tengo el cuerpo débil.
暑い|あつい|caluroso|夏は暑い。|El verano es caluroso.
寒い|さむい|frío|冬は寒い。|El invierno es frío.
難しい|むずかしい|difícil|漢字は難しい。|Los kanji son difíciles.
簡単|かんたん|fácil|簡単な問題だ。|Es un problema fácil.
楽しい|たのしい|divertido|旅行は楽しい。|El viaje es divertido.
忙しい|いそがしい|ocupado|今日は忙しい。|Hoy estoy ocupado.
美味しい|おいしい|delicioso|このご飯は美味しい。|Esta comida está deliciosa.
面白い|おもしろい|interesante|映画が面白い。|La película es interesante.
元気|げんき|ánimo/salud|父は元気だ。|Mi padre está bien.
父|ちち|padre|父は医者だ。|Mi padre es médico.
母|はは|madre|母は料理が上手だ。|Mi madre cocina bien.
兄|あに|hermano mayor|兄は大学生だ。|Mi hermano mayor es universitario.
姉|あね|hermana mayor|姉は歌が上手だ。|Mi hermana mayor canta bien.
弟|おとうと|hermano menor|弟は十歳だ。|Mi hermano menor tiene diez años.
妹|いもうと|hermana menor|妹は絵を描く。|Mi hermana menor dibuja.
立つ|たつ|ponerse de pie|席を立つ。|Me levanto del asiento.
座る|すわる|sentarse|椅子に座る。|Me siento en la silla.
歩く|あるく|caminar|公園を歩く。|Camino por el parque.
走る|はしる|correr|朝、走る。|Corro por la mañana.
待つ|まつ|esperar|少し待つ。|Espero un poco.
使う|つかう|usar|ペンを使う。|Uso un bolígrafo.
作る|つくる|hacer/crear|料理を作る。|Preparo la comida.

時間|じかん|tiempo|時間がない。|No tengo tiempo.
仕事|しごと|trabajo|仕事が忙しい。|Estoy ocupado con el trabajo.
電話|でんわ|teléfono|電話に出る。|Contesto el teléfono.
駅|えき|estación|駅は近いです。|La estación está cerca.
天気|てんき|clima|いい天気ですね。|Qué buen clima.
会社|かいしゃ|empresa|会社で働く。|Trabajo en una empresa.
働く|はたらく|trabajar|毎日働く。|Trabajo todos los días.
会う|あう|encontrarse|友達に会う。|Me encuentro con un amigo.
起きる|おきる|levantarse|六時に起きる。|Me levanto a las seis.
寝る|ねる|dormir|早く寝る。|Me duermo temprano.
着る|きる|vestirse|服を着る。|Me visto.
服|ふく|ropa|新しい服を買う。|Compro ropa nueva.
靴|くつ|zapatos|靴を脱ぐ。|Me quito los zapatos.
傘|かさ|paraguas|傘を持つ。|Llevo un paraguas.
持つ|もつ|llevar|かばんを持つ。|Llevo el bolso.
かばん|かばん|bolso|かばんが重い。|El bolso pesa.
重い|おもい|pesado|荷物が重い。|El equipaje pesa.
軽い|かるい|ligero|この箱は軽い。|Esta caja es ligera.
机|つくえ|escritorio|机を使う。|Uso el escritorio.
椅子|いす|silla|椅子が古い。|La silla es vieja.
窓|まど|ventana|窓を開ける。|Abro la ventana.
開ける|あける|abrir|ドアを開ける。|Abro la puerta.
閉める|しめる|cerrar|店を閉める。|Cierro la tienda.
電車|でんしゃ|tren|電車に乗る。|Subo al tren.
乗る|のる|subirse|バスに乗る。|Subo al autobús.
降りる|おりる|bajar|駅で降りる。|Bajo en la estación.
自転車|じてんしゃ|bicicleta|自転車で行く。|Voy en bicicleta.
空港|くうこう|aeropuerto|空港に着く。|Llego al aeropuerto.
着く|つく|llegar|九時に着く。|Llego a las nueve.
出る|でる|salir|家を出る。|Salgo de casa.
旅行|りょこう|viaje|来月旅行する。|El próximo mes viajo.
写真|しゃしん|foto|写真を撮る。|Tomo una foto.
映画|えいが|película|映画を見に行く。|Voy a ver una película.
音楽|おんがく|música|音楽が好きだ。|Me gusta la música.
歌|うた|canción|歌を歌う。|Canto una canción.
歌う|うたう|cantar|大きな声で歌う。|Canto en voz alta.
絵|え|cuadro|絵を飾る。|Decoro con un cuadro.
新聞|しんぶん|periódico|新聞を読む。|Leo el periódico.
手紙|てがみ|carta|手紙を書く。|Escribo una carta.
質問|しつもん|pregunta|質問がある。|Tengo una pregunta.
答え|こたえ|respuesta|答えが分かる。|Sé la respuesta.
問題|もんだい|problema|問題がない。|No hay problema.
勉強|べんきょう|estudio|日本語を勉強する。|Estudio japonés.
習う|ならう|aprender|ピアノを習う。|Aprendo piano.
教える|おしえる|enseñar|英語を教える。|Enseño inglés.
覚える|おぼえる|memorizar|単語を覚える。|Memorizo vocabulario.
忘れる|わすれる|olvidar|名前を忘れる。|Olvido el nombre.
知る|しる|conocer|彼を知っている。|Lo conozco.
分かる|わかる|entender|よく分かる。|Entiendo bien.
思う|おもう|opinar|そう思う。|Eso pienso.
買い物|かいもの|compras|買い物に行く。|Voy de compras.
売る|うる|vender|車を売る。|Vendo el coche.
払う|はらう|pagar|現金で払う。|Pago en efectivo.
値段|ねだん|precio|値段が高い。|El precio es alto.
料理|りょうり|cocina|料理が好きだ。|Me gusta cocinar.
野菜|やさい|verdura|野菜を食べる。|Como verduras.
果物|くだもの|fruta|果物が安い。|La fruta está barata.
卵|たまご|huevo|卵を焼く。|Frío un huevo.
牛乳|ぎゅうにゅう|leche|牛乳を飲む。|Bebo leche.
塩|しお|sal|塩を入れる。|Echo sal.
入れる|いれる|meter|砂糖を入れる。|Agrego azúcar.
病気|びょうき|enfermedad|病気で休む。|Descanso por enfermedad.
病院|びょういん|hospital|病院に行く。|Voy al hospital.
医者|いしゃ|médico|医者に会う。|Veo al médico.
薬|くすり|medicina|薬を飲む。|Tomo la medicina.
痛い|いたい|doloroso|お腹が痛い。|Me duele el estómago.
公園|こうえん|parque|公園で遊ぶ。|Juego en el parque.
遊ぶ|あそぶ|jugar|子供が遊ぶ。|El niño juega.
泳ぐ|およぐ|nadar|川で泳ぐ。|Nado en el río.
春|はる|primavera|春が来る。|Llega la primavera.
夏|なつ|verano|夏が好きだ。|Me gusta el verano.
秋|あき|otoño|秋は涼しい。|El otoño es fresco.
冬|ふゆ|invierno|冬に雪が降る。|En invierno nieva.
涼しい|すずしい|fresco|今日は涼しい。|Hoy está fresco.
暖かい|あたたかい|cálido|暖かい部屋だ。|Es una habitación cálida.
広い|ひろい|amplio|広い公園だ。|Es un parque amplio.
狭い|せまい|estrecho|狭い道を通る。|Paso por un camino estrecho.
近い|ちかい|cerca|駅から近い。|Está cerca de la estación.
遠い|とおい|lejos|学校は遠い。|La escuela está lejos.
全部|ぜんぶ|todo|全部食べた。|Me lo comí todo.

考える|かんがえる|pensar|よく考える。|Pienso bien.
住む|すむ|vivir|東京に住む。|Vivo en Tokio.
意味|いみ|significado|意味が分かる。|Entiendo el significado.
続ける|つづける|continuar|勉強を続ける。|Sigo estudiando.
準備|じゅんび|preparación|準備ができた。|Ya estoy listo.
気持ち|きもち|sentimiento|気持ちがいい。|Se siente bien.
心|こころ|corazón|心が広い。|Tiene un corazón generoso.
嬉しい|うれしい|contento|合格して嬉しい。|Estoy contento de aprobar.
悲しい|かなしい|triste|悲しい話だ。|Es una historia triste.
怖い|こわい|temible|犬が怖い。|Le tengo miedo a los perros.
恥ずかしい|はずかしい|vergonzoso|少し恥ずかしい。|Me da un poco de vergüenza.
寂しい|さびしい|solitario|一人は寂しい。|Estar solo es triste.
驚く|おどろく|sorprenderse|その話に驚く。|Me sorprende esa noticia.
笑う|わらう|reír|大声で笑う。|Me río a carcajadas.
泣く|なく|llorar|映画で泣く。|Lloro con la película.
怒る|おこる|enojarse|父が怒る。|Mi padre se enoja.
心配|しんぱい|preocupación|心配しないで。|No te preocupes.
安心|あんしん|tranquilidad|安心した。|Me quedé tranquilo.
大切|たいせつ|importante|家族は大切だ。|La familia es importante.
大事|だいじ|valioso|大事な話がある。|Tengo algo importante que decir.
家族|かぞく|familia|家族と住む。|Vivo con mi familia.
両親|りょうしん|padres|両親に電話する。|Llamo a mis padres.
彼|かれ|él|彼は親切だ。|Él es amable.
彼女|かのじょ|ella|彼女は歌手だ。|Ella es cantante.
皆|みんな|todos|皆で行こう。|Vamos todos juntos.
自分|じぶん|uno mismo|自分で作る。|Lo hago yo mismo.
相手|あいて|la otra persona|相手の話を聞く。|Escucho a la otra persona.
お客さん|おきゃくさん|cliente|お客さんが来る。|Llega un cliente.
社長|しゃちょう|presidente|社長に会う。|Veo al presidente.
同じ|おなじ|igual|私も同じです。|Yo también, igual.
違う|ちがう|diferente|考えが違う。|Pensamos distinto.
特別|とくべつ|especial|特別な日だ。|Es un día especial.
普通|ふつう|normal|普通の人だ。|Es una persona normal.
大変|たいへん|duro|仕事は大変だ。|El trabajo es duro.
無理|むり|imposible|それは無理だ。|Eso es imposible.
本当|ほんとう|verdad|本当ですか。|¿De verdad?
嘘|うそ|mentira|嘘をつく。|Digo una mentira.
約束|やくそく|promesa|約束を守る。|Cumplo la promesa.
予定|よてい|plan|予定がある。|Tengo planes.
計画|けいかく|proyecto|計画を立てる。|Hago un plan.
決める|きめる|decidir|行くと決める。|Decido ir.
選ぶ|えらぶ|elegir|好きな色を選ぶ。|Elijo mi color favorito.
探す|さがす|buscar|鍵を探す。|Busco la llave.
見つける|みつける|encontrar|財布を見つける。|Encuentro la cartera.
落とす|おとす|dejar caer|鍵を落とす。|Se me cae la llave.
拾う|ひろう|recoger|ごみを拾う。|Recojo la basura.
送る|おくる|enviar|荷物を送る。|Envío el paquete.
届く|とどく|llegar|手紙が届く。|Llega la carta.
借りる|かりる|pedir prestado|本を借りる。|Pido prestado un libro.
貸す|かす|prestar|傘を貸す。|Presto el paraguas.
返す|かえす|devolver|本を返す。|Devuelvo el libro.
呼ぶ|よぶ|llamar|名前を呼ぶ。|Llamo por el nombre.
頼む|たのむ|pedir|友達に頼む。|Se lo pido a un amigo.
断る|ことわる|rechazar|誘いを断る。|Rechazo la invitación.
誘う|さそう|invitar|友達を誘う。|Invito a un amigo.
招待|しょうたい|invitación|パーティーに招待する。|Invito a la fiesta.
祝う|いわう|celebrar|誕生日を祝う。|Celebro el cumpleaños.
誕生日|たんじょうび|cumpleaños|今日は誕生日だ。|Hoy es mi cumpleaños.
贈り物|おくりもの|regalo|贈り物を選ぶ。|Elijo un regalo.
結婚|けっこん|matrimonio|来年結婚する。|Me caso el año próximo.
生まれる|うまれる|nacer|東京で生まれた。|Nací en Tokio.
育てる|そだてる|criar|花を育てる。|Cultivo flores.
成長|せいちょう|crecimiento|子供が成長する。|El niño crece.
若い|わかい|joven|彼は若い。|Él es joven.
優しい|やさしい|amable|優しい先生だ。|Es un profesor amable.
厳しい|きびしい|estricto|父は厳しい。|Mi padre es estricto.
静か|しずか|tranquilo|静かな町だ。|Es una ciudad tranquila.
賑やか|にぎやか|animado|賑やかな街だ。|Es una calle animada.
有名|ゆうめい|famoso|有名な店だ。|Es una tienda famosa.
便利|べんり|práctico|便利な道具だ。|Es una herramienta práctica.
不便|ふべん|incómodo|電車が不便だ。|El tren es incómodo.
丈夫|じょうぶ|resistente|丈夫な靴だ。|Son zapatos resistentes.
危ない|あぶない|peligroso|危ない道だ。|Es un camino peligroso.
汚い|きたない|sucio|部屋が汚い。|La habitación está sucia.
綺麗|きれい|bonito|綺麗な花だ。|Es una flor bonita.
眠い|ねむい|con sueño|今日は眠い。|Hoy tengo sueño.
お腹|おなか|estómago|お腹が空く。|Tengo hambre.
喉|のど|garganta|喉が渇く。|Tengo sed.
疲れる|つかれる|cansarse|仕事で疲れる。|Me canso del trabajo.
慣れる|なれる|acostumbrarse|日本に慣れる。|Me acostumbro a Japón.

経験|けいけん|experiencia|いい経験でした。|Fue una buena experiencia.
関係|かんけい|relación|関係ありません。|No tiene relación.
変わる|かわる|cambiar|町が変わる。|La ciudad cambia.
必要|ひつよう|necesario|許可が必要だ。|Se necesita permiso.
説明|せつめい|explicación|説明を聞く。|Escucho la explicación.
会議|かいぎ|reunión|会議が始まる。|La reunión empieza.
資料|しりょう|documentos|資料を作る。|Preparo los documentos.
連絡|れんらく|contacto|連絡を待つ。|Espero noticias.
相談|そうだん|consulta|先生に相談する。|Consulto al profesor.
意見|いけん|opinión|意見を言う。|Doy mi opinión.
情報|じょうほう|información|情報を集める。|Reúno información.
集める|あつめる|reunir|切手を集める。|Colecciono sellos.
調べる|しらべる|investigar|辞書で調べる。|Busco en el diccionario.
発表|はっぴょう|presentación|発表を聞く。|Escucho la presentación.
研究|けんきゅう|investigación|大学で研究する。|Investigo en la universidad.
大学|だいがく|universidad|大学に入る。|Entro a la universidad.
試験|しけん|examen|試験に合格する。|Apruebo el examen.
宿題|しゅくだい|tarea|宿題を出す。|Entrego la tarea.
授業|じゅぎょう|clase|授業に出る。|Asisto a clase.
成績|せいせき|calificaciones|成績が上がる。|Suben las calificaciones.
上がる|あがる|subir|値段が上がる。|El precio sube.
下がる|さがる|bajar|気温が下がる。|Baja la temperatura.
増える|ふえる|aumentar|人が増える。|Aumenta la gente.
減る|へる|disminuir|客が減る。|Disminuyen los clientes.
始まる|はじまる|empezar|授業が始まる。|Empieza la clase.
終わる|おわる|terminar|仕事が終わる。|Termina el trabajo.
始める|はじめる|comenzar|勉強を始める。|Empiezo a estudiar.
止まる|とまる|detenerse|電車が止まる。|El tren se detiene.
動く|うごく|moverse|機械が動く。|La máquina funciona.
機械|きかい|máquina|機械を使う。|Uso la máquina.
工場|こうじょう|fábrica|工場で働く。|Trabajo en una fábrica.
経済|けいざい|economía|経済が伸びる。|La economía crece.
政府|せいふ|gobierno|政府が決める。|El gobierno decide.
法律|ほうりつ|ley|法律を守る。|Cumplo la ley.
守る|まもる|proteger|ルールを守る。|Respeto la regla.
規則|きそく|reglamento|規則を読む。|Leo el reglamento.
許可|きょか|permiso|許可をもらう。|Recibo permiso.
禁止|きんし|prohibición|写真は禁止です。|Prohibido tomar fotos.
注意|ちゅうい|atención|注意してください。|Tenga cuidado.
安全|あんぜん|seguridad|安全な場所だ。|Es un lugar seguro.
事故|じこ|accidente|事故が起きる。|Ocurre un accidente.
起こる|おこる|ocurrir|問題が起こる。|Ocurre un problema.
火事|かじ|incendio|火事に注意する。|Cuidado con el incendio.
地震|じしん|terremoto|地震が多い。|Hay muchos terremotos.
台風|たいふう|tifón|台風が来る。|Viene un tifón.
季節|きせつ|estación|好きな季節は春だ。|Mi estación favorita es la primavera.
気温|きおん|temperatura ambiente|気温が高い。|La temperatura es alta.
温度|おんど|temperatura|温度を測る。|Mido la temperatura.
測る|はかる|medir|長さを測る。|Mido la longitud.
数える|かぞえる|contar|お金を数える。|Cuento el dinero.
全体|ぜんたい|conjunto|全体を見る。|Veo el conjunto.
部分|ぶぶん|parte|この部分は難しい。|Esta parte es difícil.
方法|ほうほう|método|いい方法だ。|Es un buen método.
理由|りゆう|razón|理由を聞く。|Pregunto la razón.
原因|げんいん|causa|原因を調べる。|Investigo la causa.
例|れい|ejemplo|例を挙げる。|Doy un ejemplo.
場合|ばあい|caso|場合による。|Depende del caso.
場所|ばしょ|lugar|場所を探す。|Busco un lugar.
以上|いじょう|más de|十人以上いる。|Hay más de diez personas.
以下|いか|menos de|千円以下だ。|Son mil yenes o menos.
以外|いがい|aparte de|私以外は来た。|Vinieron todos menos yo.
続き|つづき|continuación|続きを読む。|Leo la continuación.
最初|さいしょ|primero|最初に着く。|Llego primero.
最後|さいご|último|最後の日だ。|Es el último día.
初めて|はじめて|por primera vez|初めて会う。|Nos conocemos por primera vez.
次|つぎ|siguiente|次は私です。|El siguiente soy yo.
急ぐ|いそぐ|apurarse|急いで帰る。|Vuelvo a toda prisa.
間に合う|まにあう|llegar a tiempo|電車に間に合う。|Llego a tiempo al tren.
遅れる|おくれる|llegar tarde|会議に遅れる。|Llego tarde a la reunión.
まだ|まだ|todavía|まだ寝ている。|Sigue durmiendo.
もう|もう|ya|もう食べた。|Ya comí.
また|また|otra vez|また会おう。|Nos vemos otra vez.
すぐ|すぐ|enseguida|すぐ行く。|Voy enseguida.
たくさん|たくさん|mucho|たくさん食べる。|Como mucho.
少し|すこし|un poco|少し疲れた。|Estoy un poco cansado.
全然|ぜんぜん|para nada|全然分からない。|No entiendo para nada.
特に|とくに|especialmente|特に問題はない。|No hay ningún problema especial.
例えば|たとえば|por ejemplo|例えば、りんごだ。|Por ejemplo, una manzana.
もちろん|もちろん|por supuesto|もちろん行く。|Por supuesto que voy.
きっと|きっと|seguramente|きっと来る。|Seguro que vendrá.

社会|しゃかい|sociedad|社会は変化する。|La sociedad cambia.
結果|けっか|resultado|結果を待つ。|Espero el resultado.
目的|もくてき|objetivo|目的は何ですか。|¿Cuál es el objetivo?
影響|えいきょう|influencia|影響を受ける。|Recibo influencia.
環境|かんきょう|entorno|環境を守る。|Protejo el medio ambiente.
文化|ぶんか|cultura|文化を学ぶ。|Aprendo la cultura.
歴史|れきし|historia|歴史が長い。|Tiene una larga historia.
伝統|でんとう|tradición|伝統を守る。|Preservo la tradición.
習慣|しゅうかん|costumbre|習慣を変える。|Cambio la costumbre.
生活|せいかつ|vida cotidiana|生活が楽になる。|La vida se vuelve más fácil.
楽|らく|cómodo|楽な仕事だ。|Es un trabajo cómodo.
国際|こくさい|internacional|国際会議に出る。|Asisto a una conferencia internacional.
世界|せかい|mundo|世界を旅する。|Viajo por el mundo.
地域|ちいき|región|地域の祭りだ。|Es una fiesta de la región.
都市|とし|gran ciudad|大きな都市に住む。|Vivo en una gran ciudad.
田舎|いなか|campo|田舎に帰る。|Vuelvo al pueblo.
人口|じんこう|población|人口が増える。|Aumenta la población.
産業|さんぎょう|industria|産業が発展する。|La industria se desarrolla.
技術|ぎじゅつ|tecnología|技術が進む。|La tecnología avanza.
進む|すすむ|avanzar|計画が進む。|El plan avanza.
開発|かいはつ|desarrollo|新製品を開発する。|Desarrollo un producto nuevo.
製品|せいひん|producto|製品を売る。|Vendo productos.
商品|しょうひん|mercancía|商品を並べる。|Coloco la mercancía.
並べる|ならべる|ordenar|本を並べる。|Ordeno los libros.
価格|かかく|precio|価格が下がる。|Baja el precio.
利益|りえき|beneficio|利益が出る。|Se obtiene ganancia.
費用|ひよう|costo|費用がかかる。|Hay costos.
予算|よさん|presupuesto|予算を決める。|Fijo el presupuesto.
契約|けいやく|contrato|契約を結ぶ。|Firmo un contrato.
取引|とりひき|transacción|取引を始める。|Inicio una transacción.
景気|けいき|coyuntura económica|景気が悪い。|La economía va mal.
輸出|ゆしゅつ|exportación|車を輸出する。|Exporto coches.
輸入|ゆにゅう|importación|肉を輸入する。|Importo carne.
生産|せいさん|producción|生産が増える。|Aumenta la producción.
消費|しょうひ|consumo|消費が減る。|Disminuye el consumo.
資源|しげん|recursos|資源が少ない。|Hay pocos recursos.
エネルギー|えねるぎー|energía|エネルギーを使う。|Uso energía.
電気|でんき|electricidad|電気をつける。|Enciendo la luz.
通信|つうしん|comunicación|通信が止まる。|Se corta la comunicación.
放送|ほうそう|transmisión|放送が始まる。|Empieza la transmisión.
報告|ほうこく|informe|報告を書く。|Escribo un informe.
記録|きろく|registro|記録を残す。|Dejo un registro.
残す|のこす|dejar|名前を残す。|Dejo mi nombre.
残る|のこる|quedar|時間が残る。|Queda tiempo.
参加|さんか|participación|会議に参加する。|Participo en la reunión.
協力|きょうりょく|cooperación|皆で協力する。|Cooperamos todos.
努力|どりょく|esfuerzo|毎日努力する。|Me esfuerzo cada día.
成功|せいこう|éxito|計画が成功した。|El plan tuvo éxito.
失敗|しっぱい|fracaso|失敗を恐れない。|No temo al fracaso.
責任|せきにん|responsabilidad|責任を取る。|Asumo la responsabilidad.
義務|ぎむ|deber|義務がある。|Hay una obligación.
権利|けんり|derecho|権利を守る。|Protejo el derecho.
自由|じゆう|libertad|自由に使う。|Lo uso libremente.
平和|へいわ|paz|平和を願う。|Deseo la paz.
戦争|せんそう|guerra|戦争が終わる。|La guerra termina.
選挙|せんきょ|elecciones|選挙に行く。|Voy a votar.
議論|ぎろん|debate|議論が続く。|Continúa el debate.
賛成|さんせい|estar de acuerdo|その案に賛成だ。|Estoy de acuerdo con esa propuesta.
反対|はんたい|oposición|計画に反対する。|Me opongo al plan.
提案|ていあん|propuesta|提案を出す。|Presento una propuesta.
決定|けってい|decisión|決定を待つ。|Espero la decisión.
確認|かくにん|confirmación|予約を確認する。|Confirmo la reserva.
予約|よやく|reserva|席を予約する。|Reservo un asiento.
申し込む|もうしこむ|inscribirse|参加を申し込む。|Me inscribo para participar.
受ける|うける|recibir|試験を受ける。|Hago el examen.
与える|あたえる|dar|機会を与える。|Doy una oportunidad.
機会|きかい|oportunidad|いい機会だ。|Es una buena oportunidad.
可能|かのう|posible|可能な方法だ。|Es un método posible.
不可能|ふかのう|imposible|不可能な話だ。|Es algo imposible.
能力|のうりょく|capacidad|能力を伸ばす。|Desarrollo la capacidad.
伸ばす|のばす|alargar|髪を伸ばす。|Me dejo crecer el cabello.
全く|まったく|totalmente|全く違う。|Es totalmente distinto.
非常に|ひじょうに|sumamente|非常に大切だ。|Es sumamente importante.
次第に|しだいに|gradualmente|次第に慣れる。|Poco a poco me acostumbro.
突然|とつぜん|de repente|突然雨が降る。|De repente llueve.
偶然|ぐうぜん|por casualidad|偶然会った。|Nos encontramos por casualidad.
確か|たしか|si no me equivoco|確か、二時です。|Si no me equivoco, son las dos.
結局|けっきょく|al final|結局行かない。|Al final no voy.
実は|じつは|en realidad|実は、疲れている。|En realidad, estoy cansado.
そのため|そのため|por eso|そのため遅れた。|Por eso llegué tarde.

状況|じょうきょう|situación|状況を確認する。|Verifico la situación.
態度|たいど|actitud|態度が悪い。|Tiene mala actitud.
判断|はんだん|juicio|早く判断する。|Juzgo rápido.
維持|いじ|mantenimiento|健康を維持する。|Mantengo la salud.
傾向|けいこう|tendencia|増える傾向にある。|Hay tendencia a aumentar.
条件|じょうけん|condición|条件を決める。|Fijo las condiciones.
基本|きほん|básico|基本を学ぶ。|Aprendo lo básico.
基準|きじゅん|criterio|基準を満たす。|Cumplo el criterio.
満たす|みたす|satisfacer|条件を満たす。|Cumplo la condición.
目標|もくひょう|meta|目標を立てる。|Me fijo una meta.
立てる|たてる|establecer|予定を立てる。|Hago un plan.
方針|ほうしん|directriz|方針を変える。|Cambio la directriz.
手段|しゅだん|medio|手段を選ぶ。|Elijo el medio.
過程|かてい|proceso|過程が大切だ。|El proceso es importante.
段階|だんかい|etapa|次の段階に進む。|Paso a la siguiente etapa.
原則|げんそく|principio|原則として禁止だ。|En principio está prohibido.
一般|いっぱん|general|一般の人が使う。|Lo usa la gente en general.
具体|ぐたい|concreto|具体的に話す。|Hablo de forma concreta.
内容|ないよう|contenido|内容を読む。|Leo el contenido.
項目|こうもく|apartado|項目を選ぶ。|Elijo un apartado.
種類|しゅるい|tipo|種類が多い。|Hay muchos tipos.
程度|ていど|grado|ある程度分かる。|Entiendo hasta cierto punto.
範囲|はんい|alcance|範囲が広い。|El alcance es amplio.
限界|げんかい|límite|限界を知る。|Conozco mi límite.
制限|せいげん|restricción|時間を制限する。|Limito el tiempo.
水準|すいじゅん|nivel|水準が高い。|El nivel es alto.
割合|わりあい|proporción|割合が増える。|Aumenta la proporción.
平均|へいきん|promedio|平均を出す。|Calculo el promedio.
最低|さいてい|mínimo|最低千円だ。|Mínimo mil yenes.
最高|さいこう|lo mejor|最高の天気だ。|Es un clima buenísimo.
増加|ぞうか|aumento|事故が増加する。|Aumentan los accidentes.
減少|げんしょう|disminución|売上が減少する。|Disminuyen las ventas.
売上|うりあげ|ventas|売上が伸びる。|Las ventas crecen.
拡大|かくだい|ampliación|市場が拡大する。|El mercado se amplía.
市場|しじょう|mercado|市場を調べる。|Investigo el mercado.
競争|きょうそう|competencia|競争が激しい。|La competencia es feroz.
激しい|はげしい|intenso|激しい雨が降る。|Cae una lluvia intensa.
正確|せいかく|preciso|正確に答える。|Respondo con precisión.
確実|かくじつ|seguro|確実な方法だ。|Es un método seguro.
明確|めいかく|claro|目的が明確だ。|El objetivo es claro.
状態|じょうたい|estado|状態がいい。|El estado es bueno.
性格|せいかく|carácter|明るい性格だ。|Tiene un carácter alegre.
明るい|あかるい|luminoso|明るい部屋だ。|Es una habitación luminosa.
暗い|くらい|oscuro|暗い道を歩く。|Camino por un camino oscuro.
深い|ふかい|profundo|深い川だ。|Es un río profundo.
浅い|あさい|poco profundo|浅い海で泳ぐ。|Nado en un mar poco profundo.
細かい|こまかい|detallado|細かい説明だ。|Es una explicación detallada.
詳しい|くわしい|versado|歴史に詳しい。|Sabe mucho de historia.
正しい|ただしい|correcto|答えが正しい。|La respuesta es correcta.
間違える|まちがえる|equivocarse|道を間違える。|Me equivoco de camino.
誤解|ごかい|malentendido|誤解を解く。|Aclaro el malentendido.
解決|かいけつ|solución|問題を解決する。|Resuelvo el problema.
対応|たいおう|atender|客に対応する。|Atiendo a los clientes.
処理|しょり|tramitar|仕事を処理する。|Despacho el trabajo.
改善|かいぜん|mejora|生活を改善する。|Mejoro mi vida cotidiana.
進歩|しんぽ|progreso|技術が進歩する。|La tecnología progresa.
変化|へんか|cambio|変化が大きい。|El cambio es grande.
発生|はっせい|ocurrencia|問題が発生する。|Surge un problema.
防ぐ|ふせぐ|prevenir|事故を防ぐ。|Prevengo accidentes.
対策|たいさく|medida|対策を考える。|Pienso en medidas.
被害|ひがい|daño|被害が出る。|Hay daños.
損害|そんがい|pérdida|損害を受ける。|Sufro pérdidas.
危険|きけん|peligro|危険な場所だ。|Es un lugar peligroso.
救う|すくう|salvar|命を救う。|Salvo una vida.
命|いのち|vida|命は大切だ。|La vida es valiosa.
健康|けんこう|salud|健康に気をつける。|Cuido mi salud.
医療|いりょう|atención médica|医療が進む。|Avanza la atención médica.
治療|ちりょう|tratamiento|治療を受ける。|Recibo tratamiento.
治る|なおる|curarse|病気が治る。|La enfermedad se cura.
運動|うんどう|ejercicio|毎朝運動する。|Hago ejercicio cada mañana.
食事|しょくじ|comida|食事の時間だ。|Es hora de comer.
睡眠|すいみん|sueño|睡眠が足りない。|Me falta dormir.
足りる|たりる|bastar|お金が足りる。|Alcanza el dinero.
十分|じゅうぶん|suficiente|十分に寝た。|Dormí lo suficiente.
余裕|よゆう|margen|時間に余裕がある。|Tengo tiempo de sobra.
無駄|むだ|inútil|時間の無駄だ。|Es una pérdida de tiempo.
当然|とうぜん|naturalmente|当然のことだ。|Es algo natural.
恐らく|おそらく|probablemente|恐らく大丈夫だ。|Probablemente esté bien.
大丈夫|だいじょうぶ|está bien|大丈夫ですか。|¿Estás bien?
少なくとも|すくなくとも|al menos|少なくとも三日かかる。|Tarda al menos tres días.

実現|じつげん|realización|夢を実現する。|Hago realidad un sueño.
把握|はあく|comprensión|内容を把握する。|Comprendo el contenido.
課題|かだい|reto|課題が残る。|Quedan retos.
抽象|ちゅうしょう|abstracto|抽象的な話だ。|Es una charla abstracta.
根拠|こんきょ|fundamento|根拠を示す。|Presento fundamentos.
仮説|かせつ|hipótesis|仮説を立てる。|Formulo una hipótesis.
理論|りろん|teoría|理論を学ぶ。|Estudio la teoría.
実験|じっけん|experimento|実験が成功する。|El experimento tiene éxito.
分析|ぶんせき|análisis|データを分析する。|Analizo los datos.
評価|ひょうか|evaluación|高く評価する。|Valoro mucho.
比較|ひかく|comparación|二つを比較する。|Comparo los dos.
検討|けんとう|examen|案を検討する。|Examino la propuesta.
検査|けんさ|inspección|血液を検査する。|Examino la sangre.
調査|ちょうさ|encuesta|調査を行う。|Realizo una encuesta.
行う|おこなう|realizar|会議を行う。|Realizo una reunión.
実施|じっし|ejecución|計画を実施する。|Ejecuto el plan.
達成|たっせい|logro|目標を達成する。|Alcanzo la meta.
実行|じっこう|llevar a cabo|約束を実行する。|Cumplo lo prometido.
努める|つとめる|esforzarse|改善に努める。|Me esfuerzo por mejorar.
目指す|めざす|apuntar a|優勝を目指す。|Apunto a ganar.
優勝|ゆうしょう|campeonato|チームが優勝する。|El equipo gana el campeonato.
勝つ|かつ|ganar|試合に勝つ。|Gano el partido.
負ける|まける|perder|試合に負ける。|Pierdo el partido.
試合|しあい|partido|試合を見る。|Veo el partido.
挑戦|ちょうせん|desafío|新しい挑戦だ。|Es un nuevo desafío.
積極的|せっきょくてき|proactivo|積極的に参加する。|Participo activamente.
消極的|しょうきょくてき|pasivo|消極的な態度だ。|Es una actitud pasiva.
独立|どくりつ|independencia|親から独立する。|Me independizo de mis padres.
責める|せめる|culpar|自分を責める。|Me culpo a mí mismo.
認める|みとめる|reconocer|間違いを認める。|Reconozco el error.
否定|ひてい|negación|意見を否定する。|Niego la opinión.
肯定|こうてい|afirmación|事実を肯定する。|Afirmo el hecho.
事実|じじつ|hecho|事実を伝える。|Comunico los hechos.
現実|げんじつ|realidad|現実を見る。|Miro la realidad.
理想|りそう|ideal|理想が高い。|Tiene ideales altos.
価値|かち|valor|価値がある。|Tiene valor.
意義|いぎ|sentido|意義を感じる。|Siento que tiene sentido.
役割|やくわり|papel|役割を果たす。|Cumplo mi papel.
果たす|はたす|cumplir|責任を果たす。|Cumplo con mi responsabilidad.
貢献|こうけん|contribución|社会に貢献する。|Contribuyo a la sociedad.
支える|ささえる|sostener|家族を支える。|Sostengo a mi familia.
支援|しえん|apoyo|支援を求める。|Pido apoyo.
求める|もとめる|solicitar|助けを求める。|Pido ayuda.
助ける|たすける|ayudar|友達を助ける。|Ayudo a un amigo.
尊重|そんちょう|respeto|意見を尊重する。|Respeto la opinión.
信頼|しんらい|confianza|信頼を得る。|Gano confianza.
信じる|しんじる|creer|彼を信じる。|Creo en él.
疑う|うたがう|dudar|結果を疑う。|Dudo del resultado.
疑問|ぎもん|duda|疑問が残る。|Queda una duda.
興味|きょうみ|interés|音楽に興味がある。|Me interesa la música.
関心|かんしん|atención|政治に関心がある。|Me interesa la política.
政治|せいじ|política|政治を学ぶ。|Estudio política.
国民|こくみん|ciudadanos|国民の声を聞く。|Escucho la voz del pueblo.
市民|しみん|ciudadano|市民が集まる。|Los ciudadanos se reúnen.
制度|せいど|sistema|制度を変える。|Cambio el sistema.
改革|かいかく|reforma|改革を進める。|Impulso la reforma.
組織|そしき|organización|組織を作る。|Creo una organización.
団体|だんたい|grupo|団体で旅行する。|Viajo en grupo.
代表|だいひょう|representante|国の代表だ。|Es representante del país.
責任者|せきにんしゃ|encargado|責任者に会う。|Veo al encargado.
担当|たんとう|estar a cargo|私が担当する。|Yo me encargo.
管理|かんり|gestión|時間を管理する。|Gestiono el tiempo.
運営|うんえい|administración|店を運営する。|Administro la tienda.
経営|けいえい|dirección|会社を経営する。|Dirijo una empresa.
設立|せつりつ|fundación|学校を設立する。|Fundo una escuela.
建設|けんせつ|construcción|橋を建設する。|Construyo un puente.
橋|はし|puente|橋を渡る。|Cruzo el puente.
設備|せつび|instalaciones|設備が新しい。|Las instalaciones son nuevas.
装置|そうち|dispositivo|装置を使う。|Uso el dispositivo.
操作|そうさ|manejo|機械を操作する。|Manejo la máquina.
故障|こしょう|avería|車が故障する。|El coche se avería.
修理|しゅうり|reparación|車を修理する。|Reparo el coche.
交換|こうかん|cambio|部品を交換する。|Cambio una pieza.
部品|ぶひん|pieza|部品を探す。|Busco una pieza.
保存|ほぞん|guardar|ファイルを保存する。|Guardo el archivo.
削除|さくじょ|eliminar|ファイルを削除する。|Elimino el archivo.
設定|せってい|configuración|設定を変える。|Cambio la configuración.
接続|せつぞく|conexión|ネットに接続する。|Me conecto a internet.
画面|がめん|pantalla|画面が暗い。|La pantalla está oscura.
画像|がぞう|imagen|画像を送る。|Envío la imagen.

概念|がいねん|concepto|新しい概念だ。|Es un concepto nuevo.
妥協|だきょう|concesión|妥協したくない。|No quiero ceder.
依存|いぞん|dependencia|携帯に依存する。|Dependo del móvil.
排除|はいじょ|excluir|問題を排除する。|Elimino el problema.
懸念|けねん|preocupación|懸念を示す。|Expreso preocupación.
概要|がいよう|resumen|概要を説明する。|Explico el resumen.
要点|ようてん|punto clave|要点をまとめる。|Resumo los puntos clave.
要素|ようそ|elemento|重要な要素だ。|Es un elemento importante.
重要|じゅうよう|importante|重要な問題だ。|Es un problema importante.
重視|じゅうし|dar importancia|安全を重視する。|Doy importancia a la seguridad.
優先|ゆうせん|prioridad|仕事を優先する。|Priorizo el trabajo.
本質|ほんしつ|esencia|本質を見抜く。|Capto la esencia.
特徴|とくちょう|característica|特徴を説明する。|Explico la característica.
特色|とくしょく|rasgo distintivo|地域の特色だ。|Es un rasgo de la región.
差|さ|diferencia|差が大きい。|La diferencia es grande.
格差|かくさ|desigualdad|格差が広がる。|Se amplía la desigualdad.
広がる|ひろがる|extenderse|噂が広がる。|Se extiende el rumor.
噂|うわさ|rumor|噂を聞く。|Oigo un rumor.
印象|いんしょう|impresión|いい印象を受ける。|Me llevo una buena impresión.
感覚|かんかく|sensación|感覚が鈍る。|Se embota la sensación.
鈍い|にぶい|torpe|動きが鈍い。|Se mueve con torpeza.
敏感|びんかん|sensible|音に敏感だ。|Es sensible al ruido.
感情|かんじょう|emoción|感情を抑える。|Contengo la emoción.
抑える|おさえる|contener|怒りを抑える。|Contengo la ira.
欲求|よっきゅう|deseo|欲求が強い。|El deseo es fuerte.
願望|がんぼう|anhelo|願望を語る。|Hablo de mis anhelos.
希望|きぼう|esperanza|希望を持つ。|Mantengo la esperanza.
期待|きたい|expectativa|期待が高い。|Las expectativas son altas.
不安|ふあん|inquietud|将来が不安だ。|El futuro me inquieta.
将来|しょうらい|futuro|将来の夢を話す。|Hablo de mi sueño futuro.
未来|みらい|porvenir|明るい未来だ。|Es un futuro brillante.
過去|かこ|pasado|過去を忘れる。|Olvido el pasado.
現在|げんざい|presente|現在、準備中だ。|Actualmente está en preparación.
当時|とうじ|en aquel entonces|当時は若かった。|En aquel entonces era joven.
最近|さいきん|últimamente|最近、忙しい。|Últimamente estoy ocupado.
近年|きんねん|en los últimos años|近年、増えている。|En los últimos años ha aumentado.
以前|いぜん|antes|以前はここに住んでいた。|Antes vivía aquí.
今後|こんご|de ahora en adelante|今後も続ける。|Seguiré de ahora en adelante.
同時|どうじ|simultáneo|同時に始める。|Empezamos a la vez.
順番|じゅんばん|turno|順番を待つ。|Espero mi turno.
順序|じゅんじょ|secuencia|順序を守る。|Respeto la secuencia.
手順|てじゅん|procedimiento|手順を確認する。|Confirmo el procedimiento.
方向|ほうこう|dirección|方向を変える。|Cambio de dirección.
位置|いち|posición|位置を確かめる。|Verifico la posición.
確かめる|たしかめる|comprobar|事実を確かめる。|Compruebo el hecho.
距離|きょり|distancia|距離が近い。|La distancia es corta.
周囲|しゅうい|alrededores|周囲を見る。|Miro alrededor.
周辺|しゅうへん|zona circundante|駅の周辺だ。|Es la zona de la estación.
中心|ちゅうしん|centro|町の中心にある。|Está en el centro de la ciudad.
全国|ぜんこく|todo el país|全国に広がる。|Se extiende por todo el país.
各地|かくち|distintos lugares|各地を旅する。|Viajo por distintos lugares.
海外|かいがい|extranjero|海外で働く。|Trabajo en el extranjero.
国内|こくない|dentro del país|国内を旅行する。|Viajo por el país.
交流|こうりゅう|intercambio|文化の交流だ。|Es un intercambio cultural.
関わる|かかわる|involucrarse|仕事に関わる。|Estoy involucrado en el trabajo.
含む|ふくむ|incluir|税金を含む。|Incluye impuestos.
税金|ぜいきん|impuestos|税金を払う。|Pago impuestos.
除く|のぞく|excluir|私を除く。|Excepto yo.
加える|くわえる|agregar|説明を加える。|Agrego una explicación.
補う|おぎなう|compensar|不足を補う。|Compenso la falta.
不足|ふそく|escasez|人手が不足する。|Falta personal.
過剰|かじょう|exceso|過剰な反応だ。|Es una reacción excesiva.
適切|てきせつ|adecuado|適切な方法だ。|Es un método adecuado.
適当|てきとう|apropiado|適当な時間だ。|Es un momento apropiado.
妥当|だとう|razonable|妥当な価格だ。|Es un precio razonable.
公平|こうへい|justo|公平に分ける。|Reparto con equidad.
分ける|わける|dividir|三つに分ける。|Divido en tres.
共通|きょうつう|común|共通の趣味だ。|Es un pasatiempo en común.
趣味|しゅみ|pasatiempo|趣味は読書だ。|Mi pasatiempo es leer.
独特|どくとく|singular|独特の味だ。|Tiene un sabor singular.
自然|しぜん|naturaleza|自然を守る。|Protejo la naturaleza.
動物|どうぶつ|animal|動物が好きだ。|Me gustan los animales.
植物|しょくぶつ|planta|植物を育てる。|Cultivo plantas.
実際|じっさい|en realidad|実際に行ってみる。|Voy a comprobarlo en persona.
要するに|ようするに|en resumen|要するに無理だ。|En resumen, es imposible.
つまり|つまり|es decir|つまり、反対だ。|Es decir, me opongo.
むしろ|むしろ|más bien|むしろ楽しい。|Más bien es divertido.
あくまで|あくまで|solamente|あくまで私の意見だ。|Es solo mi opinión.
ほとんど|ほとんど|casi todo|ほとんど終わった。|Casi todo terminó.
かなり|かなり|bastante|かなり難しい。|Es bastante difícil.

矛盾|むじゅん|contradicción|話が矛盾する。|La historia se contradice.
顕著|けんちょ|notable|顕著な違いだ。|Es una diferencia notable.
踏まえる|ふまえる|tener en cuenta|現状を踏まえる。|Tengo en cuenta la situación.
慎重|しんちょう|cauteloso|慎重に選ぶ。|Elijo con cautela.
概して|がいして|en general|概して良好だ。|En general es bueno.
曖昧|あいまい|ambiguo|曖昧な答えだ。|Es una respuesta ambigua.
微妙|びみょう|sutil|微妙な違いだ。|Es una diferencia sutil.
繊細|せんさい|delicado|繊細な心だ。|Tiene un corazón delicado.
巧妙|こうみょう|ingenioso|巧妙な方法だ。|Es un método ingenioso.
厳格|げんかく|riguroso|厳格な規則だ。|Es un reglamento riguroso.
柔軟|じゅうなん|flexible|柔軟に対応する。|Respondo con flexibilidad.
複雑|ふくざつ|complejo|複雑な問題だ。|Es un problema complejo.
単純|たんじゅん|simple|単純な話だ。|Es una historia simple.
純粋|じゅんすい|puro|純粋な気持ちだ。|Es un sentimiento puro.
率直|そっちょく|franco|率直に言う。|Hablo con franqueza.
謙虚|けんきょ|humilde|謙虚な態度だ。|Es una actitud humilde.
誠実|せいじつ|honesto|誠実な人だ。|Es una persona honesta.
勤勉|きんべん|diligente|勤勉に働く。|Trabajo con diligencia.
怠ける|なまける|holgazanear|仕事を怠ける。|Holgazaneo en el trabajo.
我慢|がまん|aguantar|痛みを我慢する。|Aguanto el dolor.
忍耐|にんたい|paciencia|忍耐が必要だ。|Se necesita paciencia.
覚悟|かくご|determinación|覚悟を決める。|Me armo de determinación.
決意|けつい|resolución|決意を固める。|Afirmo mi resolución.
固い|かたい|duro|固い意志だ。|Es una voluntad firme.
柔らかい|やわらかい|blando|柔らかいパンだ。|Es un pan blando.
鋭い|するどい|agudo|鋭い質問だ。|Es una pregunta aguda.
厚い|あつい|grueso|厚い本だ。|Es un libro grueso.
薄い|うすい|fino|薄い紙だ。|Es un papel fino.
濃い|こい|intenso|濃いお茶だ。|Es un té fuerte.
豊か|ゆたか|abundante|豊かな自然だ。|Es una naturaleza rica.
貧しい|まずしい|pobre|貧しい家に育つ。|Crezco en un hogar pobre.
裕福|ゆうふく|acomodado|裕福な家庭だ。|Es una familia acomodada.
贅沢|ぜいたく|lujo|贅沢な食事だ。|Es una comida lujosa.
倹約|けんやく|ahorro|倹約して暮らす。|Vivo ahorrando.
暮らす|くらす|vivir|静かに暮らす。|Vivo tranquilamente.
営む|いとなむ|regentar|店を営む。|Regento una tienda.
携わる|たずさわる|dedicarse a|教育に携わる。|Me dedico a la educación.
教育|きょういく|educación|教育を受ける。|Recibo educación.
養う|やしなう|mantener|家族を養う。|Mantengo a mi familia.
培う|つちかう|cultivar|経験を培う。|Cultivo la experiencia.
磨く|みがく|pulir|技術を磨く。|Perfecciono la técnica.
鍛える|きたえる|entrenar|体を鍛える。|Entreno el cuerpo.
励ます|はげます|animar|友達を励ます。|Animo a un amigo.
慰める|なぐさめる|consolar|泣く子を慰める。|Consuelo al niño que llora.
感謝|かんしゃ|gratitud|感謝を伝える。|Expreso gratitud.
謝る|あやまる|disculparse|遅れて謝る。|Me disculpo por llegar tarde.
許す|ゆるす|perdonar|過ちを許す。|Perdono el error.
過ち|あやまち|error|過ちを犯す。|Cometo un error.
犯す|おかす|cometer|罪を犯す。|Cometo un delito.
罪|つみ|delito|罪を認める。|Admito el delito.
罰|ばつ|castigo|罰を受ける。|Recibo un castigo.
裁判|さいばん|juicio|裁判が始まる。|Empieza el juicio.
証拠|しょうこ|prueba|証拠を示す。|Presento pruebas.
証明|しょうめい|demostración|無実を証明する。|Demuestro mi inocencia.
主張|しゅちょう|afirmación|意見を主張する。|Sostengo mi opinión.
強調|きょうちょう|enfatizar|重要性を強調する。|Enfatizo la importancia.
指摘|してき|señalar|誤りを指摘する。|Señalo un error.
誤り|あやまり|equivocación|誤りを直す。|Corrijo el error.
直す|なおす|corregir|宿題を直す。|Corrijo la tarea.
批判|ひはん|crítica|政府を批判する。|Critico al gobierno.
反論|はんろん|refutación|意見に反論する。|Refuto la opinión.
同意|どうい|consentimiento|提案に同意する。|Doy mi consentimiento a la propuesta.
承知|しょうち|entender|承知しました。|Entendido.
了解|りょうかい|comprendido|了解です。|Recibido.
拝見|はいけん|ver (humilde)|資料を拝見する。|Veo el material (forma humilde).
恐縮|きょうしゅく|agradecido|恐縮です。|Me siento muy agradecido.
失礼|しつれい|descortesía|失礼します。|Con su permiso.
敬語|けいご|lenguaje honorífico|敬語を使う。|Uso lenguaje honorífico.
丁寧|ていねい|cortés|丁寧に話す。|Hablo con cortesía.
礼儀|れいぎ|etiqueta|礼儀を守る。|Respeto la etiqueta.
挨拶|あいさつ|saludo|挨拶をする。|Saludo.
世間|せけん|mundo|世間は狭い。|El mundo es pequeño.
常識|じょうしき|sentido común|常識がない。|No tiene sentido común.
偏見|へんけん|prejuicio|偏見を捨てる。|Dejo los prejuicios.
捨てる|すてる|tirar|ごみを捨てる。|Tiro la basura.
模範|もはん|modelo|模範を示す。|Doy ejemplo.
尊敬|そんけい|admiración|先生を尊敬する。|Admiro a mi profesor.
憧れる|あこがれる|admirar|歌手に憧れる。|Admiro a un cantante.
偉大|いだい|grandioso|偉大な人物だ。|Es una persona grandiosa.
言うまでもなく|いうまでもなく|ni que decir tiene|言うまでもなく大切だ。|Ni que decir tiene que es importante.
`;

// Nivel extra: Hiragana. Formato: carácter|romaji|grupo|ejemplo|romaji = español
const H=`
あ|a|Vocales|あめ|ame = lluvia
い|i|Vocales|いぬ|inu = perro
う|u|Vocales|うみ|umi = mar
え|e|Vocales|えき|eki = estación
お|o|Vocales|おちゃ|ocha = té
か|ka|Fila K|かさ|kasa = paraguas
き|ki|Fila K|き|ki = árbol
く|ku|Fila K|くち|kuchi = boca
け|ke|Fila K|けさ|kesa = esta mañana
こ|ko|Fila K|こえ|koe = voz
さ|sa|Fila S|さかな|sakana = pescado
し|shi|Fila S|しお|shio = sal
す|su|Fila S|すし|sushi = sushi
せ|se|Fila S|せかい|sekai = mundo
そ|so|Fila S|そら|sora = cielo
た|ta|Fila T|たまご|tamago = huevo
ち|chi|Fila T|ちず|chizu = mapa
つ|tsu|Fila T|つくえ|tsukue = escritorio
て|te|Fila T|てがみ|tegami = carta
と|to|Fila T|とり|tori = ave
な|na|Fila N|なつ|natsu = verano
に|ni|Fila N|にく|niku = carne
ぬ|nu|Fila N|ぬの|nuno = tela
ね|ne|Fila N|ねこ|neko = gato
の|no|Fila N|のり|nori = alga
は|ha|Fila H|はな|hana = flor
ひ|hi|Fila H|ひと|hito = persona
ふ|fu|Fila H|ふゆ|fuyu = invierno
へ|he|Fila H|へや|heya = habitación
ほ|ho|Fila H|ほし|hoshi = estrella
ま|ma|Fila M|まど|mado = ventana
み|mi|Fila M|みず|mizu = agua
む|mu|Fila M|むし|mushi = insecto
め|me|Fila M|めがね|megane = gafas
も|mo|Fila M|もも|momo = durazno
や|ya|Fila Y|やま|yama = montaña
ゆ|yu|Fila Y|ゆき|yuki = nieve
よ|yo|Fila Y|よる|yoru = noche
ら|ra|Fila R|らいねん|rainen = año próximo
り|ri|Fila R|りんご|ringo = manzana
る|ru|Fila R|くるま|kuruma = coche
れ|re|Fila R|れきし|rekishi = historia
ろ|ro|Fila R|ろうそく|rousoku = vela
わ|wa|Fila W y N|わたし|watashi = yo
を|o|Fila W y N|みずを飲む|mizu o nomu = bebo agua
ん|n|Fila W y N|ほん|hon = libro
が|ga|Dakuten G|がっこう|gakkou = escuela
ぎ|gi|Dakuten G|ぎんこう|ginkou = banco
ぐ|gu|Dakuten G|ぐうぜん|guuzen = casualidad
げ|ge|Dakuten G|げんき|genki = ánimo
ご|go|Dakuten G|ごはん|gohan = arroz
ざ|za|Dakuten Z|ざっし|zasshi = revista
じ|ji|Dakuten Z|じかん|jikan = tiempo
ず|zu|Dakuten Z|ずっと|zutto = siempre
ぜ|ze|Dakuten Z|ぜんぶ|zenbu = todo
ぞ|zo|Dakuten Z|ぞう|zou = elefante
だ|da|Dakuten D|だいがく|daigaku = universidad
ぢ|ji|Dakuten D|はなぢ|hanaji = sangrado nasal
づ|zu|Dakuten D|つづく|tsuzuku = continuar
で|de|Dakuten D|でんしゃ|densha = tren
ど|do|Dakuten D|どうぶつ|doubutsu = animal
ば|ba|Dakuten B|ばしょ|basho = lugar
び|bi|Dakuten B|びょういん|byouin = hospital
ぶ|bu|Dakuten B|ぶひん|buhin = pieza
べ|be|Dakuten B|べんり|benri = práctico
ぼ|bo|Dakuten B|ぼうし|boushi = sombrero
ぱ|pa|Handakuten P|かんぱい|kanpai = brindis
ぴ|pi|Handakuten P|えんぴつ|enpitsu = lápiz
ぷ|pu|Handakuten P|てんぷら|tenpura = tempura
ぺ|pe|Handakuten P|ぺらぺら|perapera = con fluidez
ぽ|po|Handakuten P|さんぽ|sanpo = paseo
きゃ|kya|Combinadas K|きゃく|kyaku = cliente
きゅ|kyu|Combinadas K|きゅう|kyuu = nueve
きょ|kyo|Combinadas K|きょう|kyou = hoy
しゃ|sha|Combinadas S|しゃしん|shashin = foto
しゅ|shu|Combinadas S|しゅみ|shumi = pasatiempo
しょ|sho|Combinadas S|しょくじ|shokuji = comida
ちゃ|cha|Combinadas T|おちゃ|ocha = té
ちゅ|chu|Combinadas T|ちゅうい|chuui = atención
ちょ|cho|Combinadas T|ちょきん|chokin = ahorro
にゃ|nya|Combinadas N|こんにゃく|konnyaku = konjac
にゅ|nyu|Combinadas N|ぎゅうにゅう|gyuunyuu = leche
にょ|nyo|Combinadas N||
ひゃ|hya|Combinadas H|ひゃく|hyaku = cien
ひゅ|hyu|Combinadas H||
ひょ|hyo|Combinadas H|ひょう|hyou = tabla
みゃ|mya|Combinadas M|みゃく|myaku = pulso
みゅ|myu|Combinadas M||
みょ|myo|Combinadas M|みょうじ|myouji = apellido
りゃ|rya|Combinadas R|りゃくご|ryakugo = abreviatura
りゅ|ryu|Combinadas R|りゅうがく|ryuugaku = estudiar en el extranjero
りょ|ryo|Combinadas R|りょこう|ryokou = viaje
ぎゃ|gya|Combinadas G|ぎゃく|gyaku = lo contrario
ぎゅ|gyu|Combinadas G|ぎゅうにく|gyuuniku = carne de res
ぎょ|gyo|Combinadas G|ぎょうざ|gyouza = gyoza
じゃ|ja|Combinadas J|じゃがいも|jagaimo = papa
じゅ|ju|Combinadas J|じゅぎょう|jugyou = clase
じょ|jo|Combinadas J|じょうず|jouzu = hábil
びゃ|bya|Combinadas B|さんびゃく|sanbyaku = trescientos
びゅ|byu|Combinadas B||
びょ|byo|Combinadas B|びょうき|byouki = enfermedad
ぴゃ|pya|Combinadas P|ろっぴゃく|roppyaku = seiscientos
ぴゅ|pyu|Combinadas P||
ぴょ|pyo|Combinadas P|ぴょんぴょん|pyonpyon = a saltitos
`;
