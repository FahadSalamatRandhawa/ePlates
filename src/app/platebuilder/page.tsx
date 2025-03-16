'use client'

import { BORDER, SIZING, Start, STYLE } from "@/components/PlateBuilder/Components";
import ThreeDRectangle from "@/components/PlateBuilder/Plate";
import PlateSummary from "@/components/PlateBuilder/PlateSummary";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { Border, GelColors, getStylesByLetterCount, Plate, PlateSize, plateStyles } from "../../../PlateStyles";
import { useToast } from "@/hooks/use-toast";

export default function PlateBuilder() {
  const { toast } = useToast()

  const [plateNumber, setPlateNumber] = useState("");
  const [roadLegalSpacing, setRoadLegalSpacing] = useState(true);
  const [iWantFrontPlate, setIWantFrontPlate] = useState(true);
  const [iWantBackPlate, setIWantBackPlate] = useState(true);
  const [frontStyle, setFrontStyle] = useState<Plate>(plateStyles[0]);
  const [rearStyle, setRearStyle] = useState<Plate>(plateStyles[0]);
  const [frontPrice, setFrontPrice] = useState(0);
  const [rearPrice, setRearPrice] = useState(0);
  const [frontGelColor, setFrontGelColor] = useState<GelColors | null>(null)
  const [rearGelColor, setRearGelColor] = useState<GelColors | null>(null)

  const [sameAsFront,setSameAsFront]=useState(true)

  const [isValidPlate, setIsValidPlate] = useState(false)

  useEffect(() => {
    const pl = plateNumber.replace(/ /g, "").length
    if (pl > 4 && pl < 8) {
      setIsValidPlate(true)
      if ([5, 6, 7].includes(pl)) {
        const styles = getStylesByLetterCount(pl)
        const style=styles[0]

        // const result: string[] = [];
        // for (const item of styles) {
        //   for (const frontSize of item.frontPlate.sizes) {
        //     for (const rearSize of item.rearPlate.sizes) {
        //       for (const border of [{name:"None",material:{thickness:0,type:"None"},type:"None"},...item.borders]) {
        //         const frontKey = frontSize.key.replace(/"/g, ""); // Remove double quotes
        //         const rearKey = rearSize.key.replace(/"/g, "");   // Remove double quotes

        //         result.push(
        //           `${item.name}_${frontKey}_${border.type}${border.material.thickness}_${frontSize.price || 0}` +
        //           `-${item.name}_${rearKey}_${border.type}${border.material.thickness}_${rearSize.price || 0}`
        //         );
        //       }
        //     }
        //   }
        // }

        // console.log("Plate styles combo")
        // console.log(result.map((r)=>r));
        setFrontStyle(style)
        setRearStyle(style)
      }
    } else {
      setIsValidPlate(false)
    }
  }, [plateNumber])

  const [frontSize, setFrontSize] = useState<PlateSize>(() => {
    const sizes = plateStyles[0]?.frontPlate?.sizes as PlateSize[] | undefined;
    if (sizes && sizes.length > 0) {
      // Find the size with key 'standard'
      const standardSize = sizes.find(size => size.key === 'standard');
      return standardSize || sizes[0]; // fallback to first element if not found
    }
    return { key: 'standard', width: 20.5, height: 4.5, price: 0 }; // Default fallback
  });
  
  const [rearSize, setRearSize] = useState<PlateSize>(() => {
    const sizes = plateStyles[0]?.rearPlate?.sizes as PlateSize[] | undefined;
    if (sizes && sizes.length > 0) {
      const standardSize = sizes.find(size => size.key === 'standard');
      return standardSize || sizes[0];
    }
    return { key: 'standard', width: 20.5, height: 4.5, price: 0 }; // Default fallback
  });
  
  useEffect(() => {
    // When frontStyle or rearStyle changes, update the sizes using the same logic
    const frontSizes = frontStyle.frontPlate.sizes;
    const rearSizes = rearStyle.rearPlate.sizes;
    
    if (frontSizes && frontSizes.length > 0) {
      const standardFront = frontSizes.find(size => size.key === 'standard') || frontSizes[0];
      console.log("Frontsize ",standardFront)

      setFrontSize(standardFront);
    }
    
    if (rearSizes && rearSizes.length > 0) {
      const standardRear = rearSizes.find(size => size.key === 'standard') || rearSizes[0];
      console.log("Rearsize ",standardRear)

      setRearSize(standardRear);
    }


  }, [frontStyle, rearStyle]);
  

  useEffect(() => {
    setRearPrice(rearSize.price)
  }, [rearSize])
  useEffect(() => {
    setFrontPrice(frontSize.price)
  }, [frontSize])

  // Border states - Set dynamically based on frontStyle and rearStyle
  const [frontBorder, setFrontBorder] = useState<Border>(() => ({name:"None",material:{thickness:0,type:"None"},type:"None"}));

  const [rearBorder, setRearBorder] = useState<Border>(() => ({name:"None",material:{thickness:0,type:"None"},type:"None"}));

  useEffect(() => {
    if (!roadLegalSpacing) {
      toast({
        title: "Not legal",
        description: "This plate will not be road legal",
        variant: "destructive"
      })
    }
  }, [roadLegalSpacing])

  const [isRear, setIsRear] = useState(false)

  useEffect(() => {
    const handleMessage = (event) => {
      console.log("📩 Received plate number:", event.data);
      if (event.data.plateNumber) {
        setPlateNumber(event.data.plateNumber);
      }
    };
  
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);


  return (
    <div className="h-full flex justify-center">
      {/* Container for Tabs and PlateSummary */}
      <div className="flex flex-col md:flex-row gap-6 items-start w-full max-w-7xl p-6">
        {/* Tabs Section */}
        <div className="flex-grow rounded-lg shadow-lg p-4 w-full">
          <Tabs defaultValue="start">
            <TabsList className="border-b-yellow border-b-4 flex flex-wrap gap-2">
              <TabsTrigger
                className="w-[140px] text-lg"
                disabled={plateNumber === ""}
                value="start"
              >
                Start
              </TabsTrigger>
              <TabsTrigger
                className="w-[140px] text-lg"
                disabled={!isValidPlate}
                value="style"
              >
                Style
              </TabsTrigger>
              <TabsTrigger
                className="w-[140px] text-lg"
                disabled={!isValidPlate}
                value="sizing"
              >
                Sizing
              </TabsTrigger>
              <TabsTrigger
                className="w-[140px] text-lg"
                disabled={!isValidPlate}
                value="border"
              >
                Border
              </TabsTrigger>
              <TabsTrigger
                className="w-[140px] text-lg"
                disabled={!isValidPlate}
                value="finish"
              >
                Finish
              </TabsTrigger>
            </TabsList>

            {/* Layout for Tabs Content and Plate Displayer */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3 py-5">
              {/* Tabs Content */}
              <TabsContent
                value="start"
                className="bg-yellow py-1 px-3 rounded-sm md:col-span-2 h-[400px]"
              >
                <Start
                  isValidPlate={isValidPlate}
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
              <TabsContent
                value="style"
                className="md:col-span-2 h-[390px]"
              >
                <STYLE 
                  frontGelColor={frontGelColor} 
                  setFrontGelColor={setFrontGelColor} 
                  rearGelColor={rearGelColor} 
                  setRearGelColor={setRearGelColor} 
                  rearStyle={rearStyle} 
                  frontStyle={frontStyle} 
                  plateNumber={plateNumber} 
                  setRearStyle={setRearStyle} 
                  setFrontStyle={setFrontStyle} 
                  sameAsFront={sameAsFront}
                  setSameAsFront={setSameAsFront}
                />
              </TabsContent>
              <TabsContent
                value="sizing"
                className="md:col-span-2 h-[390px]"
              >
                <SIZING 
                  rearStyle={rearStyle} 
                  frontStyle={frontStyle} 
                  rearSize={rearSize} 
                  frontSize={frontSize} 
                  setRearSize={setRearSize} 
                  setFrontSize={setFrontSize} 
                />
              </TabsContent>
              <TabsContent
                value="border"
                className="md:col-span-2  h-[390px]"
              >
                <BORDER 
                  rearStyle={rearStyle} 
                  frontStyle={frontStyle} 
                  setFrontBorder={setFrontBorder} 
                  setRearBorder={setRearBorder} 
                  rearBorder={rearBorder} 
                  frontBorder={frontBorder} 
                />
              </TabsContent>

              {/* Plate Displayer */}
              <div className="md:col-span-4 rounded-sm mt-2 w-full" style={{ minHeight: '300px' }}>
                <div className="grid grid-cols-2 gap-2 py-2 text-black">
                  {iWantFrontPlate && (
                    <Button 
                      className={isRear ? "bg-transparent" : ""}
                      onClick={() => setIsRear(false)}
                    >
                      FRONT PLATE
                    </Button>
                  )}
                  {iWantBackPlate && (
                    <Button 
                      className={!isRear ? "bg-transparent" : ""}
                      onClick={() => setIsRear(true)}
                    >
                      REAR PLATE
                    </Button>
                  )}
                </div>
                {isRear ? (
                  <ThreeDRectangle 
                    roadLegalSpacing={roadLegalSpacing} 
                    gelColor={rearGelColor} 
                    border={rearBorder} 
                    isRear={true} 
                    size={rearSize} 
                    plateNumber={plateNumber} 
                    plateStyle={rearStyle} 
                  />
                ) : (
                  <ThreeDRectangle 
                    roadLegalSpacing={roadLegalSpacing} 
                    gelColor={frontGelColor} 
                    border={frontBorder} 
                    isRear={false} 
                    size={frontSize} 
                    plateNumber={plateNumber} 
                    plateStyle={frontStyle}  
                  />
                )}
              </div>
            </div>
          </Tabs>
        </div>

        {/* Plate Summary */}
        <div className="w-full md:w-[300px] bg-white h-[300px] lg:h-auto rounded-lg shadow-lg">
          <PlateSummary
            plateNumber={plateNumber}
            roadLegalSpacing={roadLegalSpacing}
            frontStyle={frontStyle}
            rearStyle={rearStyle}
            frontPrice={frontPrice}
            rearPrice={rearPrice}
            frontSize={frontSize}
            rearSize={rearSize}
            frontBorder={frontBorder}
            rearBorder={rearBorder}
            frontGel={frontGelColor}
            rearGel={rearGelColor}
          />
        </div>
      </div>
    </div>
  );
}