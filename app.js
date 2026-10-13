const L=D.trim().split(/\n\s*\n/).map(b=>b.trim().split("\n").map(r=>r.split("|")));
L.push(H.trim().split("\n").map(r=>r.split("|")));
const NAME=n=>n===10?"Extra · Hiragana":"Nivel "+(n+1);
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
      `<div class="cell ${n===sel?"on":""} ${n===10?"x":""}"><b>${NAME(n)}</b><span>${l.length} ${n===10?"caracteres":"palabras"}${P[n]?" · en "+(P[n]+1):""}</span></div>`).join("")+"</div>";
    return;
  }
  const c=L[lv][i],n=L[lv].length;
  app.innerHTML=`<div class="top"><span>${NAME(lv)}</span><span>${i+1}/${n}</span></div>
  <div class="bar"><i style="width:${(i+1)/n*100}%"></i></div>
  <div class="card"><div class="w" data-b="${rev?84:150}">${c[0]}</div>`+
  (rev?`<div class="k" data-b="64">${c[1]}</div><div class="es">${c[2]}</div>`+(c[3]?`<div class="j">${c[3]}<div class="js">${c[4]}</div></div>`:""):"")+
  `</div><div class="hint">${rev?"← ocultar":"→ pronunciación"} · ↓ siguiente · ↑ anterior</div>`;
  fit();
}
document.addEventListener("keydown",e=>{
  const k=e.key;
  if(view==="menu"){
    if(k==="ArrowDown")sel=sel>=8?10:sel+2;
    else if(k==="ArrowUp")sel=sel===10?8:Math.max(sel-2,0);
    else if(k==="ArrowRight"&&sel%2===0&&sel<10)sel++;
    else if(k==="ArrowLeft"&&sel%2===1)sel--;
    else if(k==="Enter"){lv=sel;i=Math.min(P[lv]||0,L[lv].length-1);rev=false;view="card"}
    else return;
  }else{
    if(k==="ArrowDown"){if(i<L[lv].length-1){i++;rev=false}else{i=0;sel=Math.min(lv+1,L.length-1);view="menu"}}
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
