'use client'

import { SIZING, Start, STYLE } from "@/components/PlateBuilder/Components";
import ThreeDRectangle from "@/components/PlateBuilder/Plate";
import PlateSummary from "@/components/PlateBuilder/PlateSummary";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {  Plate, PlateSize, plateStyles } from "../../../PlateStyles";

export default function PlateBuilder() {
  const [plateNumber, setPlateNumber] = useState("MD 22");
  const [roadLegalSpacing, setRoadLegalSpacing] = useState(true);
  const [iWantFrontPlate, setIWantFrontPlate] = useState(true);
  const [iWantBackPlate, setIWantBackPlate] = useState(true);
  const [frontStyle, setFrontStyle] = useState<Plate>(plateStyles[0]);
  const [rearStyle, setRearStyle] = useState<Plate>(plateStyles[0]);
  const [frontPrice, setFrontPrice] = useState(23.99);
  const [rearPrice, setRearPrice] = useState(23.99);

  const [frontSize, setFrontSize] = useState<PlateSize>(() => {
    const sizes = plateStyles[0]?.frontPlate?.sizes as PlateSize[] | undefined;
    if (sizes && sizes.length > 0) {
      return sizes[0]; // Select the first size from the array
    }
    return { key: 'standard', width: 18, height: 18 }; // Default fallback
  });
  const [rearSize, setRearSize] = useState<PlateSize>(() => {
    const sizes = plateStyles[0]?.frontPlate?.sizes as PlateSize[] | undefined;
    if (sizes && sizes.length > 0) {
      return sizes[0]; // Select the first size from the array
    }
    return { key: 'standard', width: 18, height: 18 }; // Default fallback
  });
  
  
  

  const [isRear,setIsRear]=useState(false)

  return (
    <div className="h-full flex justify-center">
      {/* Container for Tabs and PlateSummary */}
      <div className="flex gap-6 items-start w-full max-w-7xl p-6">
        {/* Tabs Section */}
        <div className="flex-grow rounded-lg shadow-lg p-4">
          <Tabs defaultValue="start">
            <TabsList className="border-b-yellow border-b-4">
              <TabsTrigger
                className="w-[140px] text-lg"
                disabled={plateNumber === ""}
                value="start"
              >
                Start
              </TabsTrigger>
              <TabsTrigger
                className="w-[140px] text-lg"
                disabled={plateNumber === ""}
                value="style"
              >
                Style
              </TabsTrigger>
              <TabsTrigger
                className="w-[140px] text-lg"
                disabled={plateNumber === ""}
                value="sizing"
              >
                Sizing
              </TabsTrigger>
              <TabsTrigger
                className="w-[140px] text-lg"
                disabled={plateNumber === ""}
                value="border"
              >
                Border
              </TabsTrigger>
              <TabsTrigger
                className="w-[140px] text-lg"
                disabled={plateNumber === ""}
                value="finish"
              >
                Finish
              </TabsTrigger>
            </TabsList>

            {/* Layout for Tabs and Plate */}
            <div className="grid grid-cols-6 gap-3 min-w-[800px] h-[400px] py-5 ">
              {/* Tabs Content */}
              <TabsContent
                value="start"
                className="col-span-2 bg-yellow px-3 rounded-sm"
              >
                <Start
                  plateNumber={plateNumber}
                  setPlateNumber={setPlateNumber}
                  roadLegalSpacing={roadLegalSpacing}
                  setRoadLegalSpacing={setRoadLegalSpacing}
                  iWantFrontPlate={iWantFrontPlate}
                  setIWantFrontPlate={setIWantFrontPlate}
                  iWantBackPlate={iWantBackPlate}
                  setIWantBackPlate={setIWantBackPlate}
                  className="w-full grid gap-3"
                />
              </TabsContent>
              <TabsContent value="style" className="col-span-2 h-[390px]">
                <STYLE rearStyle={rearStyle} frontStyle={frontStyle} setRearStyle={setRearStyle} setFrontStyle={setFrontStyle} />
              </TabsContent>
              <TabsContent value="sizing" className="col-span-2 h-[390px]">
                <SIZING rearStyle={rearStyle} frontStyle={frontStyle} rearSize={rearSize} frontSize={frontSize} setRearSize={setRearSize} setFrontSize={setFrontSize} />
              </TabsContent>
              <TabsContent value="finish" className="col-span-2 h-[390px]">
                <STYLE rearStyle={rearStyle} frontStyle={frontStyle} setRearStyle={setRearStyle} setFrontStyle={setFrontStyle} />
              </TabsContent>

              {/* Plate Displayer */}
              <div
                className="col-span-4 rounded-sm mt-2"
                style={{ height: "300px", width: "100%" }}
              >
                <div className="  grid grid-cols-2 gap-2 py-2 text-black" >
                    <Button className={isRear?" bg-transparent":""} onClick={()=>setIsRear(false)} >FRONT PLATE</Button>
                    <Button className={!isRear?" bg-transparent":""} onClick={()=>setIsRear(true)}>REAR PLATE</Button>
                </div>
                {
                  isRear?
                  <ThreeDRectangle isRear={true} size={rearSize} plateNumber={plateNumber} plateStyle={rearStyle} />
                  :
                  <ThreeDRectangle isRear={false} size={frontSize} plateNumber={plateNumber} plateStyle={frontStyle}  />
                }
              </div>
            </div>
          </Tabs>
        </div>

        {/* Plate Summary */}
        <div className="w-[300px] bg-white rounded-lg shadow-lg">
          <PlateSummary
            plateNumber={plateNumber}
            roadLegalSpacing={roadLegalSpacing}
            frontStyle={frontStyle}
            rearStyle={rearStyle}
            frontPrice={frontPrice}
            rearPrice={rearPrice}
          />
        </div>
      </div>
    </div>
  );
}
