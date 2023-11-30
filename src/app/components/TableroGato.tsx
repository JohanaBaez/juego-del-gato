
import React from 'react';

interface TableroGatoProps {
  tablero: string[];
  manejarClick: (index: number) => void;
}

const TableroGato: React.FC<TableroGatoProps> = ({ tablero, manejarClick }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {tablero.map((valor, index) => (
        <button
          key={index}
          className={`cuadro text-4xl w-16 h-16 border border-gray-100 cursor-pointer flex items-center justify-center bg-${
            valor === 'X' ? 'blue' : 'red'
          }-500 hover:bg-${valor === 'X' ? 'blue' : 'red'}-600 focus:outline-none transition duration-300 ease-in-out`}
          onClick={() => manejarClick(index)}
        >
          {valor}
        </button>
      ))}
    </div>
  );
};

export default TableroGato;
