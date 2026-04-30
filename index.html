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
  font-family: system-ui, -apple-system, sans-serif;
}

/* Header */
header{
  text-align:center;
  padding:16px;
  background:rgba(15,23,42,0.8);
  backdrop-filter: blur(10px);
  position:sticky;
  top:0;
}

/* Layout */
.container{
  padding:16px;
  max-width:700px;
  margin:auto;
}

/* Button */
button{
  width:100%;
  padding:12px;
  margin-top:8px;
  border:none;
  border-radius:12px;
  background:#1f2937;
  color:white;
}

/* Compass */
.compass{
  width:150px;
  height:150px;
  border-radius:50%;
  margin:20px auto;
  border:2px solid #374151;
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

/* Station Popup */
.popup{
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  background:#111827;
  padding:20px;
  border-radius:20px 20px 0 0;
  box-shadow:0 -5px 30px rgba(0,0,0,0.6);
  animation:slideUp 0.3s ease;
}

@keyframes slideUp{
  from{transform:translateY(100%);}
  to{transform:translateY(0);}
}

.small{
  color:#9ca3af;
  font-size:13px;
}
</style>
</head>

<body>

<header>
Augen Auf Compass
</header>

<div class="container">

<button onclick="start()">Start</button>

<div class="compass">
  <div class="arrow" id="arrow"></div>
</div>

<div style="text-align:center;margin-bottom:10px">
Lösungswort: <b id="word"></b>
</div>

<div id="status"></div>

</div>

<div id="popup"></div>

<script>
let userPos=null;
let heading=0;
let solution="";
let currentStation=null;

/* Fortschritt speichern */
let saved = JSON.parse(localStorage.getItem("progress") || "[]");

const points=[
{lat:51.3753,lng:7.7025,q:"Mahnmal am Poth?",a:"B",l:"D",opt:{A:"Händler",B:"NS-Opfer",C:"Stadt"}},
{lat:51.3760,lng:7.7032,q:"Luftschutzstollen?",a:"B",l:"E",opt:{A:"Lager",B:"Schutzräume",C:"Treffpunkte"}},
{lat:51.3765,lng:7.7040,q:"Stolpersteine?",a:"B",l:"M",opt:{A:"Kunst",B:"Gedenktafeln",C:"Steine"}},
{lat:51.3770,lng:7.7050,q:"Jüdische Geschäfte?",a:"A",l:"O",opt:{A:"Zerstört",B:"Gefördert",C:"Unverändert"}},
{lat:51.3775,lng:7.7060,q:"Verfolgung?",a:"A",l:"K",opt:{A:"Religion",B:"Beruf",C:"Kleidung"}},
{lat:51.3780,lng:7.7070,q:"Gedenktafeln?",a:"C",l:"R",opt:{A:"Künstler",B:"Sport",C:"Verfolgung"}},
{lat:51.3785,lng:7.7080,q:"Stolpersteine zeigen?",a:"B",l:"A",opt:{A:"Städte",B:"Schicksale",C:"Gebäude"}},
{lat:51.3790,lng:7.7090,q:"Synagogen?",a:"B",l:"T",opt:{A:"Erweitert",B:"Zerstört",C:"Museen"}},
{lat:51.3795,lng:7.7100,q:"Erinnerung?",a:"A",l:"I",opt:{A:"Greifbar",B:"Sammeln",C:"Füllen"}},
{lat:51.3800,lng:7.7110,q:"Lehre?",a:"B",l:"E",opt:{A:"Vergessen",B:"Demokratie schützen",C:"Vergangenheit"}}
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

/* iPhone fix */
async function start(){
if(typeof DeviceOrientationEvent!=="undefined" &&
typeof DeviceOrientationEvent.requestPermission==="function"){
await DeviceOrientationEvent.requestPermission();
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

function updateCompass(){
let next = getNext();
if(!userPos||!next)return;
let rot=angle(userPos,next)-heading;
document.getElementById("arrow").style.transform=`rotate(${rot}deg)`;
}

function getNext(){
return points.find((p,i)=>!saved.includes(i));
}

function update(){
let next=getNext();

if(userPos && next){
let d=distance(userPos,next);

document.getElementById("status").innerHTML =
"<div class='small'>Nächste Station: "+d+" m entfernt</div>";

if(d<60 && currentStation===null){
currentStation=next;
showPopup(next);
}
}

solution = saved.map(i=>points[i].l).join("");
document.getElementById("word").innerText=solution;

updateCompass();
}

function showPopup(p){
let i = points.indexOf(p);

let html = `
<div class="popup">
<h3>Station ${i+1}</h3>
<p>${p.q}</p>
`;

for(let k in p.opt){
html += `<button onclick="answer(${i},'${k}')">${k}) ${p.opt[k]}</button>`;
}

html += `</div>`;

document.getElementById("popup").innerHTML = html;
}

function answer(i,val){
if(points[i].a===val){
saved.push(i);
localStorage.setItem("progress", JSON.stringify(saved));

document.getElementById("popup").innerHTML="";
currentStation=null;
update();
}else{
alert("Falsch");
}
}

update();
</script>

</body>
</html>
