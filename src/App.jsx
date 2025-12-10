import { useState } from "react";

const frases = [
  "Nunca es tarde para intentarlo 💪",
  "Hoy puede ser un gran día 🌞",
  "Seguí adelante, lo estás haciendo bien ⭐",
  "Cada paso cuenta 👣",
  "Vos podés, siempre pudiste 🔥",
  "Fallaste hoy, pero aprendiste mañana 📘",
  "Tu puedes, siempre puedes",
  "Recuerda quien eres",
  "Simply lovely",
  
];

export default function App() {
  const [frase, setFrase] = useState("");

  const generarFrase = () => {
    const random = Math.floor(Math.random() * frases.length);
    setFrase(frases[random]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Frases Motivacionales</h1>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
        onClick={generarFrase}
      >
        Generar frase
      </button>

      {frase && <h2 style={{ marginTop: "30px" }}>{frase}</h2>}
    </div>
  );
}