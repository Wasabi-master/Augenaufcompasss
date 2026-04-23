<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<title>Augen Auf Compass</title>

<style>
body{
  margin:0;
  background:#0b1220;
  color:#e5e7eb;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
}

header{
  text-align:center;
  padding:16px;
  font-size:18px;
  background:rgba(15,23,42,0.8);
  backdrop-filter: blur(10px);
  position:sticky;
  top:0;
}

.debug{
  text-align:center;
  font-size:12px;
  color:#f87171;
  margin-top:5px;
}

.container{
  padding:18px;
  max-width:720px;
  margin:auto;
}

button{
  width:100%;
  padding:12px;
  margin-top:10px;
  border:none;
  border-radius:12px;
  background:#1f2937;
  color:white;
}

button:hover{
  background:#374151;
}

.card{
  background:#111827;
  padding:14px;
  margin:12px 0;
  border-radius:14px;
  border:1px solid rgba(255,255,255,0.05);
}

.card.done{
  border-left:3px solid #34d399;
}

.compass{
  width:150px;
  height:150px;
  border-radius:50%;
  margin:20px auto;
  background:radial-gradient(circle, #1f2937, #0b1220);
  border:1px solid #374151;
  display:flex;
  justify-content:center;
  align-items:center;
}

.arrow{
  width:3px;
  height:60px;
  background:#ef4444;
  transform-origin:bottom;
  transition:transform 0.1s linear;
}
</style>
</head>

<body>

<header>
Augen Auf Compass
<div class="debug">VERSION 2.0 – DESIGN UPDATE AKTIV</div>
</header>

<div class="container">

<button onclick="start()">Start GPS & Kompass</button>

<div class="compass">
  <div class="arrow" id="arrow"></div>
</div>

<div style="text-align:center;margin-bottom:10px">
Lösungswort: <b id="word"></b>
</div>

<div id="list"></div>

</div>

<script>

let userPos=null;
let heading=0;
let solution="";
let lastVib=0;

const points=[
{lat:51.3753,lng:7.7025,q:"Mahnmal am Poth?",a:"B",l:"D",done:false,opt:{A:"Händler",B:"NS-Opfer",C:"Stadt"}},
{lat:51.3760,lng:7.7032,q:"Luftschutzstollen?",a:"B",l:"E",done:false,opt:{A:"Lager",B:"Schutzräume",C:"Treff"}},
{lat:51.3765,lng:7.7040,q:"Stolpersteine?",a:"B",l:"M",done:false,opt:{A:"Kunst",B:"Gedenktafeln",C:"Steine"}},
{lat:51.3770,lng:7.7050,q:"Jüdische Geschäfte?",a:"A",l:"O",done:false,opt:{A:"Zerstört",B:"Gefördert",C:"Unverändert"}},
{lat:51.3775,lng:7.7060,q:"Verfolgung?",a:"A",l:"K",done:false,opt:{A:"Religion",B:"Beruf",C:"Kleidung"}},
{lat:51.3780,lng:7.7070,q:"Gedenktafeln?",a:"C",l:"R",done:false,opt:{A:"Künstler",B:"Sport",C:"Verfolgung"}},
{lat:51.3785,lng:7.7080,q:"Stolpersteine zeigen?",a:"B",l:"A",done:false,opt:{A:"Städte",B:"Schicksale",C:"Gebäude"}},
{lat:51.3790,lng:7.7090,q:"Synagogen?",a:"B",l:"T",done:false,opt:{A:"Erweitert",B:"Zerstört",C:"Museen"}},
{lat:51.3795,lng:7.7100,q:"Erinnerung?",a:"A",l:"I",done:false,opt:{A:"Greifbar",B:"Sammeln",C:"Füllen"}},
{lat:51.3800,lng:7.7110,q:"Lehre?",a:"B",l:"E",done:false,opt:{A:"Vergessen",B:"Demokratie",C:"Vergangenheit"}}
];

function distance(a,b){
const R=6371000;
const dLat=(b.lat-a.lat)*Math.PI/180;
const dLng=(b.lng-a.lng)*Math.PI/180;
const x=Math.sin(dLat/2)**2+
Math.cos(a.lat*Math.PI/180)*
Math.cos(b.lat*Math.PI/180)*
Math.sin(dLng/2)**2;
return Math.round(R*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x)));
}

function angle(a,b){
const y=Math.sin((b.lng-a.lng)*Math.PI/180)*Math.cos(b.lat*Math.PI/180);
const x=Math.cos(a.lat*Math.PI/180)*Math.sin(b.lat*Math.PI/180)-
Math.sin(a.lat*Math.PI/180)*Math.cos(b.lat*Math.PI/180)*
Math.cos((b.lng-a.lng)*Math.PI/180);
return (Math.atan2(y,x)*180/Math.PI+360)%360;
}

async function start(){

if(typeof DeviceOrientationEvent!=="undefined" &&
typeof DeviceOrientationEvent.requestPermission==="function"){
const res=await DeviceOrientationEvent.requestPermission();
if(res!=="granted")return;
}

navigator.geolocation.watchPosition(p=>{
userPos={lat:p.coords.latitude,lng:p.coords.longitude};
update();
});

window.addEventListener("deviceorientation",e=>{
if(e.alpha!==null){
heading=e.webkitCompassHeading||e.alpha;
updateCompass();
}
});
}

function vibrate(d){
if(!navigator.vibrate)return;
if(d<50 && Date.now()-lastVib>2500){
navigator.vibrate(80);
lastVib=Date.now();
}
}

function answer(i,v){
if(points[i].a===v){
points[i].done=true;
}
solution=points.filter(p=>p.done).map(p=>p.l).join("");
update();
}

function updateCompass(){
const next=points.find(p=>!p.done);
if(!userPos||!next)return;
const rot=angle(userPos,next)-heading;
document.getElementById("arrow").style.transform=`rotate(${rot}deg)`;
}

function update(){

let next=points.find(p=>!p.done);
if(userPos&&next){
vibrate(distance(userPos,next));
}

document.getElementById("word").innerText=solution;

let html="";

points.forEach((p,i)=>{
let d=userPos?distance(userPos,p):null;
let near=d&&d<80;

html+=`<div class="card ${p.done?'done':''}">
<strong>Station ${i+1}</strong><br>`;

html+=d?`<small>${d} m entfernt</small><br>`:"";

if(near&&!p.done){
html+=`<p>${p.q}</p>`;
for(let k in p.opt){
html+=`<button onclick="answer(${i},'${k}')">${k}) ${p.opt[k]}</button>`;
}
}

if(p.done){
html+=`<small>gelöst: ${p.l}</small>`;
}

html+=`</div>`;
});

document.getElementById("list").innerHTML=html;

updateCompass();
}

update();

</script>

</body>
</html>
