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

考える|かんがえる|pensar|よく考える。|Pienso bien.
住む|すむ|vivir|東京に住む。|Vivo en Tokio.
意味|いみ|significado|意味が分かる。|Entiendo el significado.
続ける|つづける|continuar|勉強を続ける。|Sigo estudiando.
準備|じゅんび|preparación|準備ができた。|Ya estoy listo.

経験|けいけん|experiencia|いい経験でした。|Fue una buena experiencia.
関係|かんけい|relación|関係ありません。|No tiene relación.
変わる|かわる|cambiar|町が変わる。|La ciudad cambia.
必要|ひつよう|necesario|許可が必要だ。|Se necesita permiso.
説明|せつめい|explicación|説明を聞く。|Escucho la explicación.

社会|しゃかい|sociedad|社会は変化する。|La sociedad cambia.
結果|けっか|resultado|結果を待つ。|Espero el resultado.
目的|もくてき|objetivo|目的は何ですか。|¿Cuál es el objetivo?
影響|えいきょう|influencia|影響を受ける。|Recibo influencia.
環境|かんきょう|entorno|環境を守る。|Protejo el medio ambiente.

状況|じょうきょう|situación|状況を確認する。|Verifico la situación.
態度|たいど|actitud|態度が悪い。|Tiene mala actitud.
判断|はんだん|juicio|早く判断する。|Juzgo rápido.
維持|いじ|mantenimiento|健康を維持する。|Mantengo la salud.
傾向|けいこう|tendencia|増える傾向にある。|Hay tendencia a aumentar.

実現|じつげん|realización|夢を実現する。|Hago realidad un sueño.
把握|はあく|comprensión|内容を把握する。|Comprendo el contenido.
課題|かだい|reto|課題が残る。|Quedan retos.
抽象|ちゅうしょう|abstracto|抽象的な話だ。|Es una charla abstracta.
根拠|こんきょ|fundamento|根拠を示す。|Presento fundamentos.

概念|がいねん|concepto|新しい概念だ。|Es un concepto nuevo.
妥協|だきょう|concesión|妥協したくない。|No quiero ceder.
依存|いぞん|dependencia|携帯に依存する。|Dependo del móvil.
排除|はいじょ|excluir|問題を排除する。|Elimino el problema.
懸念|けねん|preocupación|懸念を示す。|Expreso preocupación.

矛盾|むじゅん|contradicción|話が矛盾する。|La historia se contradice.
顕著|けんちょ|notable|顕著な違いだ。|Es una diferencia notable.
踏まえる|ふまえる|tener en cuenta|現状を踏まえる。|Tengo en cuenta la situación.
慎重|しんちょう|cauteloso|慎重に選ぶ。|Elijo con cautela.
概して|がいして|en general|概して良好だ。|En general es bueno.
`;
const L=D.trim().split(/\n\s*\n/).map(b=>b.trim().split("\n").map(r=>r.split("|")));
const app=document.getElementById("app");
let view="menu",sel=0,lv=0,i=0,rev=false,P={};
try{P=JSON.parse(localStorage.getItem("jp800")||"{}")}catch(e){}
function save(){P[lv]=i;try{localStorage.setItem("jp800",JSON.stringify(P))}catch(e){}}
function fit(){
  const m=app.clientWidth-48;
  document.querySelectorAll("[data-b]").forEach(e=>{
    let s=+e.dataset.b;e.style.fontSize=s+"px";
    while(e.offsetWidth>m&&s>20){s-=2;e.style.fontSize=s+"px"}
  });
}
function render(){
  if(view==="menu"){
    app.innerHTML='<h1>日本語 800 · Niveles</h1><div class="grid">'+L.map((l,n)=>
      `<div class="cell ${n===sel?"on":""}"><b>Nivel ${n+1}</b><span>${l.length} palabras${P[n]?" · en "+(P[n]+1):""}</span></div>`).join("")+"</div>";
    return;
  }
  const c=L[lv][i],n=L[lv].length;
  app.innerHTML=`<div class="top"><span>Nivel ${lv+1}</span><span>${i+1}/${n}</span></div>
  <div class="bar"><i style="width:${(i+1)/n*100}%"></i></div>
  <div class="card"><div class="w" data-b="${rev?84:150}">${c[0]}</div>`+
  (rev?`<div class="k" data-b="64">${c[1]}</div><div class="es">${c[2]}</div><div class="j">${c[3]}<div class="js">${c[4]}</div></div>`:"")+
  `</div><div class="hint">${rev?"← ocultar":"→ pronunciación"} · ↓ siguiente · ↑ anterior</div>`;
  fit();
}
document.addEventListener("keydown",e=>{
  const k=e.key;
  if(view==="menu"){
    if(k==="ArrowDown")sel=Math.min(sel+2,9);
    else if(k==="ArrowUp")sel=Math.max(sel-2,0);
    else if(k==="ArrowRight"&&sel%2===0)sel++;
    else if(k==="ArrowLeft"&&sel%2===1)sel--;
    else if(k==="Enter"){lv=sel;i=Math.min(P[lv]||0,L[lv].length-1);rev=false;view="card"}
    else return;
  }else{
    if(k==="ArrowDown"){if(i<L[lv].length-1){i++;rev=false}else{i=0;sel=Math.min(lv+1,9);view="menu"}}
    else if(k==="ArrowUp"){i=Math.max(i-1,0);rev=false}
    else if(k==="ArrowRight")rev=true;
    else if(k==="Enter")rev=!rev;
    else if(k==="ArrowLeft"){if(rev)rev=false;else{save();view="menu"}}
    else if(k==="Escape"||k==="Backspace"){save();view="menu"}
    else return;
    save();
  }
  e.preventDefault();render();
});
render();
