import { useState } from "react";

function Calculator() {
  const buttons = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", ".", "0", "=", "/"];
  const [display, setDisplay] = useState(""); // Affichage du calcul complet
  const [result, setResult] = useState(null); // Résultat final

  // Fonction pour effectuer le calcul
  const calculateResult = () => {
    try {
      // Utiliser eval pour calculer (Attention : uniquement pour des entrées contrôlées)
      const calculated = eval(display); // Exemple : "1+2*3"
      setResult(calculated); // Stocker le résultat
      setDisplay(calculated.toString()); // Afficher le résultat
    } catch (error) {
      setDisplay("Error");
    }
  };

  // Gérer les clics sur les boutons
  const handleClick = (label) => {
    if (label === "C") {
      // Réinitialiser la calculatrice
      setDisplay("");
      setResult(null);
    } else if (label === "=") {
      // Calculer le résultat
      calculateResult();
    } else {
      // Ajouter le bouton pressé à l'affichage
      setDisplay((prev) => prev + label);
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl text-white mb-8">Calculator</h1>
      <div className="flex ">
            <div className="bg-black text-white rounded-lg w-40 p-4 text-right text-xl mb-4 ">
                {display || "0"}
            </div>
            <button
                onClick={() => handleClick("C")}
                className="bg-white text-black rounded hover:scale-125 hover:bg-pink-600 ease duration-100 p-4 h-16 ml-4 "
            >
                C
          </button>
        </div>
      <div className="grid grid-cols-4 gap-4">
        {buttons.map((label, index) => (
          <button
            key={index}
            onClick={() => handleClick(label)}
            className="bg-white text-black rounded hover:scale-125 hover:bg-pink-600 ease duration-100 p-4"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
