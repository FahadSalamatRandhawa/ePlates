import React from "react";
import { Border, GelColors, PlateSize, PlateStyleOption } from "../../../PlateStyles";

interface PlateSummaryProps {
  plateNumber: string;
  roadLegalSpacing: boolean;
  frontStyle: PlateStyleOption;
  rearStyle: PlateStyleOption;
  frontPrice: number;
  rearPrice: number;
  frontSize:PlateSize;
  rearSize:PlateSize;
  frontBorder:Border;
  rearBorder:Border;
  frontGel:GelColors,
  rearGel:GelColors,
}

const PlateSummary: React.FC<PlateSummaryProps> = ({
  plateNumber,
  roadLegalSpacing,
  frontStyle,
  rearStyle,
  frontPrice,
  rearPrice,
  frontSize,
  rearSize,
  rearBorder,
  frontBorder,
  frontGel,
  rearGel,
}) => {

  function addToBasket() {
    const message = {
      front_style: {
        name: frontStyle.name,
        size: frontSize.key,
        border: {
          type: frontBorder.type,
          thickness: frontBorder.material.thickness
        },
        price:frontPrice,
        gel:frontGel,
      },
      rear_style: {
        name: rearStyle.name,
        size: rearSize.key,
        border: {
          type: rearBorder.type,
          thickness: rearBorder.material.thickness
        },
        price:rearPrice,
        gel:rearGel,
      },
      plateNumber: plateNumber
    };
    window.parent.postMessage(message, "https://plateguy.co.uk");
    console.log("Plate number sent to PlateGuy");
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-sm mx-auto border border-gray-300">
      {/* Header */}
      <h2 className="text-xl font-bold mb-4 text-gray-800">Your Plates</h2>

      {/* Plate Number and Spacing */}
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <p className="text-sm font-medium text-gray-600">Registration</p>
          <p className="text-base font-bold text-gray-800">{plateNumber}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-600">Spacing</p>
          <p className="text-base font-bold text-gray-800">
            {roadLegalSpacing ? "Road legal" : "Not road legal"}
          </p>
        </div>
      </div>

      {/* Front Plate */}
      <div className="border-t border-gray-300 pt-4 mb-4">
        <h3 className="text-base font-bold text-gray-800 mb-2">Front Plate</h3>
        <div className="flex justify-between text-sm mb-1">
          <p>Style</p>
          <p className="font-bold">{frontStyle.name}</p>
        </div>
        <div className="flex justify-between text-sm mb-1">
          <p>Size</p>
          <p className="font-bold">Included</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Price</p>
          <p className="font-bold">£{frontPrice}</p>
        </div>
      </div>

      {/* Rear Plate */}
      <div className="border-t border-gray-300 pt-4 mb-4">
        <h3 className="text-base font-bold text-gray-800 mb-2">Rear Plate</h3>
        <div className="flex justify-between text-sm mb-1">
          <p>Style</p>
          <p className="font-bold">{rearStyle.name}</p>
        </div>
        <div className="flex justify-between text-sm mb-1">
          <p>Size</p>
          <p className="font-bold">Included</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Price</p>
          <p className="font-bold">£{rearPrice}</p>
        </div>
      </div>

      {/* Total */}
      <div className="border-t border-gray-300 pt-4 mb-4">
        <div className="flex justify-between text-lg font-bold text-gray-800">
          <p>Total</p>
          <p>£{(frontPrice + rearPrice)}</p>
        </div>
      </div>

      {/* Add to Basket Button */}
      <button onClick={addToBasket} className="w-full bg-yellow text-black font-bold py-3 rounded hover:bg-yellow/80 transition">
        ADD TO BASKET
      </button>
    </div>
  );
};

export default PlateSummary;
