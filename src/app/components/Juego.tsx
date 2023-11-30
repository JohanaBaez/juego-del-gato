'use client'
import React, { useState } from 'react';
import TableroGato from './TableroGato';

const Juego: React.FC = () => {
  const [tablero, setTablero] = useState<string[]>(Array(9).fill(''));
  const [turnoX, setTurnoX] = useState<boolean>(true);
  const ganador = calcularGanador(tablero);

  const manejarClick = (index: number) => {
    if (tablero[index] || ganador) return;

    const nuevoTablero = [...tablero];
    nuevoTablero[index] = turnoX ? 'X' : 'O';

    setTablero(nuevoTablero);
    setTurnoX(!turnoX);
  };

  const obtenerEstado = () => {
    if (ganador) {
      return `¡Ganador: ${ganador}!`;
    } else if (tablero.every((valor) => valor !== '')) {
      return '¡Empate!';
    } else {
      return `Turno de: ${turnoX ? 'X' : 'O'}`;
    }
  };

  const reiniciarJuego = () => {
    setTablero(Array(9).fill(''));
    setTurnoX(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-gray-800">
      <h1 className="text-4xl font-bold mb-4">Juego del Gato</h1>
      <TableroGato tablero={tablero} manejarClick={manejarClick} />
      <p className="text-lg mt-4">{obtenerEstado()}</p>
      {(ganador || obtenerEstado() === '¡Empate!') && (
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-600"
          onClick={reiniciarJuego}
        >
          Reiniciar Juego
        </button>
      )}
    </div>
  );
};

// Función auxiliar para calcular el ganador
const calcularGanador = (cuadros: string[]): string | null => {
  const lineas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const linea of lineas) {
    const [a, b, c] = linea;
    if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
      return cuadros[a];
    }
  }

  return null;
};

export default Juego;
