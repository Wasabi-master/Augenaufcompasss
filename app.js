import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function App() {
  const [points, setPoints] = useState([
    {
      lat: 51.3753, lng: 7.7025, // Mahnmal am Poth (Iserlohn Zentrum)
      question: "Woran erinnert das Mahnmal am Poth?",
      options: { A: "An mittelalterliche Händler", B: "An die Opfer des Nationalsozialismus", C: "An den Wiederaufbau der Stadt" },
      answer: "B", letter: "D", completed: false
    },
    {
      lat: 51.3760, lng: 7.7032, // Luftschutzstollen Altstadt
      question: "Wofür wurden Luftschutzstollen im Zweiten Weltkrieg genutzt?",
      options: { A: "Als Lager für Lebensmittel", B: "Als Schutzräume bei Bombenangriffen", C: "Als geheime Treffpunkte" },
      answer: "B", letter: "E", completed: false
    },
    {
      lat: 51.3765, lng: 7.7040, // Stolpersteine Mosbach
      question: "Was sind Stolpersteine?",
      options: { A: "Kunstwerke in Parks", B: "Kleine Gedenktafeln im Boden", C: "Pflastersteine ohne Bedeutung" },
      answer: "B", letter: "M", completed: false
    },
    {
      lat: 51.3770, lng: 7.7050, // Alter Rathausplatz
      question: "Was geschah mit vielen jüdischen Geschäften in der NS-Zeit?",
      options: { A: "Sie wurden zerstört", B: "Sie wurden gefördert", C: "Sie blieben unverändert" },
      answer: "A", letter: "O", completed: false
    },
    {
      lat: 51.3775, lng: 7.7060, // Stolpersteine Ehrlich
      question: "Warum wurden Familien wie die Ehrlichs verfolgt?",
      options: { A: "Religion und Herkunft", B: "Berufe", C: "Kleidung" },
      answer: "A", letter: "K", completed: false
    },
    {
      lat: 51.3780, lng: 7.7070, // Reformierte Kirche
      question: "Was erinnern viele Gedenktafeln aus dieser Zeit?",
      options: { A: "Künstler", B: "Sport", C: "Verfolgung und Widerstand" },
      answer: "C", letter: "R", completed: false
    },
    {
      lat: 51.3785, lng: 7.7080, // Stolperstein Becker
      question: "Was symbolisieren einzelne Stolpersteine?",
      options: { A: "Städte", B: "Einzelschicksale", C: "Gebäude" },
      answer: "B", letter: "A", completed: false
    },
    {
      lat: 51.3790, lng: 7.7090, // Synagoge Gedenkstein
      question: "Was passierte mit vielen Synagogen im Nationalsozialismus?",
      options: { A: "Erweitert", B: "Zerstört", C: "Museen" },
      answer: "B", letter: "T", completed: false
    },
    {
      lat: 51.3795, lng: 7.7100, // Stolperstein Schlünder
      question: "Warum ist es wichtig, an einzelne Personen zu erinnern?",
      options: { A: "Geschichte greifbar machen", B: "Namen sammeln", C: "Straßen füllen" },
      answer: "A", letter: "I", completed: false
    },
    {
      lat: 51.3800, lng: 7.7110, // JuZ Karnacksweg
      question: "Was ist eine wichtige Lehre aus Zeitzeugenberichten?",
      options: { A: "Vergessen", B: "Demokratie schützen", C: "Vergangenheit leben" },
      answer: "B", letter: "E", completed: false
    }
  ]);

  const [userPos, setUserPos] = useState(null);
  const [heading, setHeading] = useState(0);
  const [solution, setSolution] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    navigator.geolocation.watchPosition((pos) => {
      setUserPos({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }, []);

  useEffect(() => {
    const handleOrientation = (e) => {
      if (e.alpha !== null) setHeading(e.alpha);
    };
    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  const distance = (a, b) => {
    const R = 6371000;
    const dLat = (b.lat - a.lat) * Math.PI / 180;
    const dLng = (b.lng - a.lng) * Math.PI / 180;
    const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  };

  const getAngle = (from, to) => {
    const y = Math.sin((to.lng - from.lng) * Math.PI / 180) * Math.cos(to.lat * Math.PI / 180);
    const x = Math.cos(from.lat * Math.PI / 180) * Math.sin(to.lat * Math.PI / 180) - Math.sin(from.lat * Math.PI / 180) * Math.cos(to.lat * Math.PI / 180) * Math.cos((to.lng - from.lng) * Math.PI / 180);
    return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
  };

  const checkAnswer = (index, value) => {
    const updated = [...points];
    if (updated[index].answer === value) updated[index].completed = true;
    setPoints(updated);

    const word = updated.filter(p => p.completed).map(p => p.letter).join("");
    setSolution(word);
    if (word === "DEMOKRATIE") setFinished(true);
  };

  const nextPoint = points.find(p => !p.completed);
  const angle = userPos && nextPoint ? getAngle(userPos, nextPoint) : 0;
  const rotate = angle - heading;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 grid gap-6">
      <h1 className="text-3xl font-bold text-center">🧭 Augen Auf Compass</h1>

      <div className="flex justify-center">
        <div className="w-40 h-40 rounded-full border-4 border-gray-700 flex items-center justify-center">
          <div className="w-1 h-16 bg-red-500 origin-bottom" style={{ transform: `rotate(${rotate}deg)` }} />
        </div>
      </div>

      <div className="text-center text-xl">Lösungswort: {solution}</div>

      {finished && <div className="text-center text-3xl text-green-400 animate-pulse">🎉 DEMOKRATIE 🎉</div>}

      {points.map((p, i) => {
        const near = userPos && distance(userPos, p) < 60;

        return (
          <Card key={i} className="bg-gray-900 p-4 rounded-2xl">
            <CardContent>
              <div className="font-semibold mb-2">Station {i + 1}</div>

              {!near && <div className="text-gray-400">📍 Geh näher ran (~60m)</div>}

              {near && !p.completed && (
                <div className="grid gap-2">
                  <div>{p.question}</div>
                  {Object.entries(p.options).map(([key, val]) => (
                    <Button key={key} onClick={() => checkAnswer(i, key)}>
                      {key}) {val}
                    </Button>
                  ))}
                </div>
              )}

              {p.completed && <div className="text-green-400">✔ {p.letter}</div>}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
