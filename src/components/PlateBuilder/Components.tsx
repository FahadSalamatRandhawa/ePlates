"use client";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function Start({ 
    plateNumber, 
    setPlateNumber, 
    roadLegalSpacing, 
    setRoadLegalSpacing, 
    iWantFrontPlate, 
    setIWantFrontPlate, 
    iWantBackPlate, 
    setIWantBackPlate,
    className,
    isValidPlate
}: { 
    plateNumber: string; 
    setPlateNumber: (value: string) => void; 
    roadLegalSpacing: boolean; 
    setRoadLegalSpacing: (value: boolean) => void; 
    iWantFrontPlate: boolean; 
    setIWantFrontPlate: (value: boolean) => void; 
    iWantBackPlate: boolean; 
    setIWantBackPlate: (value: boolean) => void;
    className?:string,
    isValidPlate:boolean
}) {

    return (
        <div className={cn("",className)}>
            <h5>Your registration</h5>
            <Input 
                className="bg-white" 
                value={plateNumber} 
                onChange={(e) => setPlateNumber(e.target.value.toLocaleUpperCase())} 
                maxLength={8}
                minLength={6}
            />
            {
              isValidPlate?
              <label className="border bg-white/95 px-2 py-1 rounded-sm">
                  Formatted as <span className="font-bold">{plateNumber}</span>
              </label>
              :
              <label className="border bg-red-400/95 px-2 py-1 rounded-sm">
                  Not road legal
              </label>
            }

            <div className=" grid gap-1">
                <label className=" font-semibold">Character Spacing</label>
                <div className="flex items-center gap-2">
                    <Switch 
                        checked={roadLegalSpacing} 
                        onCheckedChange={(value) => setRoadLegalSpacing(value)} 
                    />
                    <label>Use road legal spacing</label>
                   
                </div>
            </div>

            <div className=" grid gap-1">
                <label className=" font-semibold">FrontPlate</label>
                <div className="flex items-center gap-2">
                    <Switch 
                        checked={iWantFrontPlate} 
                        onCheckedChange={(value) => setIWantFrontPlate(value)} 
                    />
                    <label>I want front plate</label>
                   
                </div>
            </div>
            <div className=" grid gap-1">
                <label className=" font-semibold">Back Plate</label>
                <div className="flex items-center gap-2">
                    <Switch 
                        checked={iWantBackPlate} 
                        onCheckedChange={(value) => setIWantBackPlate(value)} 
                    />
                    <label>I want back plate</label>
                   
                </div>
            </div>
        </div>
    );
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Border, GelColors, getStylesByLetterCount, Plate, PlateSize } from "../../../PlateStyles";
import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";

interface STYLEProps {
  className?: string;
  frontStyle: Plate;
  rearStyle: Plate;
  plateNumber:String,
  frontGelColor:GelColors|null,
  setFrontGelColor:any,
  rearGelColor:GelColors|null,
  setRearGelColor:any,
  setFrontStyle: (style: Plate) => void;
  setRearStyle: (style: Plate) => void;
  sameAsFront:boolean,
  setSameAsFront:(a:boolean)=>void
}

export function STYLE({ className, frontStyle, rearStyle,plateNumber, setFrontStyle, setRearStyle, rearGelColor,setRearGelColor,frontGelColor,setFrontGelColor,sameAsFront,setSameAsFront }: STYLEProps) {
  const [plateStyles,setPlateSetyles] = useState<Plate[]>(getStylesByLetterCount(7)); // Assuming getStylesByLetterCount is a function that returns plate styles

  useEffect(()=>{
    
  },[plateStyles])


  useEffect(()=>{
    const styles=getStylesByLetterCount(plateNumber.replace(/ /g, "").length)
   
    setPlateSetyles(styles)
  },[plateNumber])

  useEffect(()=>{
    if(sameAsFront){
      setRearStyle(frontStyle)
      setRearGelColor(frontGelColor)
    }
  },[frontGelColor,sameAsFront])
  

  const handleFrontStyleClick = (style: Plate) => {
    setFrontStyle(style); // This will update the state in the parent component

    if(style.name.includes("Neon")){
      toast({
        title: "Not legal",
        description: "This plate will not be road legal",
        variant: "destructive"
      })
    }
  };

  const handleRearStyleClick = (style: Plate) => {
    setRearStyle(style); // This will update the state in the parent component

    if(style.name.includes("Neon")){
      toast({
        title: "Not legal",
        description: "This plate will not be road legal",
        variant: "destructive"
      })
    }
  };

  useEffect(()=>{
    if(frontStyle.gelColors){
      setFrontGelColor(frontStyle.gelColors[0])
    }else{
      setFrontGelColor(null)
    }
    if(sameAsFront){
      setRearStyle(frontStyle)
      setRearGelColor(frontGelColor)
    }
  },[frontStyle])

  useEffect(()=>{
    if(rearStyle.gelColors){
      setRearGelColor(rearStyle.gelColors[0])
    }else{
      setRearGelColor(null)
    } 
  },[rearStyle])


  return (
    <Tabs defaultValue="front" className={`flex flex-col overflow-y-scroll items-stretch bg-yellow rounded-sm h-full ${className}`}>
      <TabsList className="grid grid-cols-2 gap-2">
        <TabsTrigger className="text-lg" value="front">
          STYLE 
        </TabsTrigger>
        {/* <TabsTrigger className="text-lg" value="back">
          BACK <span className="ml-2 font-extralight mt-2 text-base">STYLE</span>
        </TabsTrigger> */}
      </TabsList>

      {/* Front Style Tab */}
      <TabsContent value="front" className="flex flex-col gap-3 col-span-2 px-2 rounded-sm">
        {plateStyles.map((p: Plate,index) =>{
          if(p.frontPlate.sizes.length>1){
            return (
              <div
                className={` pb-2 rounded-sm  pt-[2px] px-[2px] ${frontStyle.name === p.name ? "bg-black text-white" : "bg-white"}`}
                key={index}
                onClick={() => handleFrontStyleClick(p)} // Trigger state change for front style
              >
                <div className=" relative h-[140px]"><Image src={p.frontImage?p.frontImage:"/178348.jpg"} alt="img" className=" rounded-t-sm" fill priority /></div>
                <p className=" h-[60px] px-2 py-2">{p.gelColors&&p.gelColors.length==1?p.name+" "+p.gelColors[0].name:p.name}</p>
                  {
                    p.gelColors&&p.gelColors.length>1&&
                    <div className="px-2 flex flex-wrap gap-2">
                      {
                        p.gelColors&&p.gelColors.map((color)=>(
                          <Button
                            onClick={() => setFrontGelColor(color)}
                            className={`text-black bg-white p-1 ${frontGelColor === color ? " bg-yellow border-black " : ""}`}
                            key={color.name}
                          >
                            {color.name.split(" on ").map((word, index) => (
                              <span
                                key={index}
                                style={{ color: `#${color[index === 0 ? "top" : "botton"].toString(16).padStart(6, "0")}` }}
                              >
                                {word} {index === 0 ? "on " : ""}
                              </span>
                            ))}
                          </Button>
                        ))
                      }
                  </div>
                  }
              </div>
            )
          }

          return null
          })}
      </TabsContent>

    </Tabs>
  );
}

// export function STYLE({ className, frontStyle, rearStyle,plateNumber, setFrontStyle, setRearStyle, rearGelColor,setRearGelColor,frontGelColor,setFrontGelColor,sameAsFront,setSameAsFront }: STYLEProps) {
//   const [plateStyles,setPlateSetyles] = useState<Plate[]>(getStylesByLetterCount(7)); // Assuming getStylesByLetterCount is a function that returns plate styles

//   useEffect(()=>{
    
//   },[plateStyles])


//   useEffect(()=>{
//     const styles=getStylesByLetterCount(plateNumber.replace(/ /g, "").length)
   
//     setPlateSetyles(styles)
//   },[plateNumber])

//   useEffect(()=>{
//     if(sameAsFront){
//       setRearStyle(frontStyle)
//       setRearGelColor(frontGelColor)
//     }
//   },[frontGelColor,sameAsFront])
  

//   const handleFrontStyleClick = (style: Plate) => {
//     setFrontStyle(style); // This will update the state in the parent component

//     if(style.name.includes("Neon")){
//       toast({
//         title: "Not legal",
//         description: "This plate will not be road legal",
//         variant: "destructive"
//       })
//     }
//   };

//   const handleRearStyleClick = (style: Plate) => {
//     setRearStyle(style); // This will update the state in the parent component

//     if(style.name.includes("Neon")){
//       toast({
//         title: "Not legal",
//         description: "This plate will not be road legal",
//         variant: "destructive"
//       })
//     }
//   };

//   useEffect(()=>{
//     if(frontStyle.gelColors){
//       setFrontGelColor(frontStyle.gelColors[0])
//     }else{
//       setFrontGelColor(null)
//     }
//     if(sameAsFront){
//       setRearStyle(frontStyle)
//       setRearGelColor(frontGelColor)
//     }
//   },[frontStyle])

//   useEffect(()=>{
//     if(rearStyle.gelColors){
//       setRearGelColor(rearStyle.gelColors[0])
//     }else{
//       setRearGelColor(null)
//     } 
//   },[rearStyle])


//   return (
//     <Tabs defaultValue="front" className={`flex flex-col overflow-y-scroll items-stretch bg-yellow rounded-sm h-full ${className}`}>
//       <TabsList className="grid grid-cols-2 gap-2">
//         <TabsTrigger className="text-lg" value="front">
//           FRONT <span className="ml-2 font-extralight mt-2 text-base">STYLE</span>
//         </TabsTrigger>
//         <TabsTrigger className="text-lg" value="back">
//           BACK <span className="ml-2 font-extralight mt-2 text-base">STYLE</span>
//         </TabsTrigger>
//       </TabsList>

//       {/* Front Style Tab */}
//       <TabsContent value="front" className="flex flex-col gap-3 col-span-2 px-2 rounded-sm">
//         {plateStyles.map((p: Plate,index) =>{
//           if(p.frontPlate.sizes.length>1){
//             return (
//               <div
//                 className={` pb-2 rounded-sm  pt-[2px] px-[2px] ${frontStyle.name === p.name ? "bg-black text-white" : "bg-white"}`}
//                 key={index}
//                 onClick={() => handleFrontStyleClick(p)} // Trigger state change for front style
//               >
//                 <div className=" relative h-[140px]"><Image src={p.frontImage?p.frontImage:"/178348.jpg"} alt="img" className=" rounded-t-sm" fill priority /></div>
//                 <p className=" h-[60px] px-2 py-2">{p.gelColors&&p.gelColors.length==1?p.name+" "+p.gelColors[0].name:p.name}</p>
//                   {
//                     p.gelColors&&p.gelColors.length>1&&
//                     <div className="px-2 flex flex-wrap gap-2">
//                       {
//                         p.gelColors&&p.gelColors.map((color)=>(
//                           <Button
//                             onClick={() => setFrontGelColor(color)}
//                             className={`text-black bg-white p-1 ${frontGelColor === color ? " bg-yellow border-black " : ""}`}
//                             key={color.name}
//                           >
//                             {color.name.split(" on ").map((word, index) => (
//                               <span
//                                 key={index}
//                                 style={{ color: `#${color[index === 0 ? "top" : "botton"].toString(16).padStart(6, "0")}` }}
//                               >
//                                 {word} {index === 0 ? "on " : ""}
//                               </span>
//                             ))}
//                           </Button>
//                         ))
//                       }
//                   </div>
//                   }
//               </div>
//             )
//           }

//           return null
//           })}
//       </TabsContent>

//       {/* Rear Style Tab */}
//       <TabsContent value="back" className="flex flex-col gap-3 col-span-2 h-[390px] px-2 rounded-sm">
//         <div className="mt-2">
//           <Switch className="mr-3" checked={sameAsFront} onCheckedChange={(e) => {/*setSameAsFront(e)*/}} />
//           <label>Same as front</label>
//         </div>

//         {/* Conditionally render rear style options based on sameAsFront */}
//         {!sameAsFront && (
//           <div className="flex flex-col gap-3 bg-yellow">
//             {plateStyles.map((p: Plate) => (
//               <div
//                 className={`min-h-[200px] pt-[2px] pb-3 rounded-sm px-[2px] ${rearStyle.name === p.name ? "bg-black text-white" : "bg-white"}`}
//                 key={p.name}
//                 onClick={() => handleRearStyleClick(p)} // Trigger state change for rear style
//               >
//                 <div className=" relative h-[140px]"><Image src={p.frontImage?p.frontImage:"/178348.jpg"} className=" rounded-t-sm" alt="img" fill priority /></div>
//                 <p className="h-[60px]  px-2 py-2">{p.name}</p>

//                 <div className="px-2 flex flex-wrap gap-2 text-black">
//                   {
//                     p.gelColors&&p.gelColors.map((color)=>(
//                       <Button
//                         onClick={() => setFrontGelColor(color)}
//                         className={`text-black bg-white p-1 ${frontGelColor === color ? " bg-yellow border-black " : ""}`}
//                         key={color.name}
//                       >
//                         {color.name.split(" on ").map((word, index) => (
//                           <span
//                             key={index}
//                             style={{ color: `#${color[index === 0 ? "top" : "botton"].toString(16).padStart(6, "0")}` }}
//                           >
//                             {word} {index === 0 ? "on " : ""}
//                           </span>
//                         ))}
//                       </Button>
//                     ))
//                   }
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </TabsContent>
//     </Tabs>
//   );
// }

interface SizingProps{
  className?: string;
  frontStyle:Plate;
  rearStyle:Plate,
  frontSize: PlateSize;
  rearSize: PlateSize;
  setFrontSize: (style: PlateSize) => void;
  setRearSize: (style: PlateSize) => void;
}

export function SIZING({ className, frontSize,rearSize,frontStyle,rearStyle,setFrontSize,setRearSize }: SizingProps) {
  const plateStyles = getStylesByLetterCount(7); // Assuming getStylesByLetterCount is a function that returns plate styles
  const [sameAsFront, setSameAsFront] = useState(true);

  useEffect(()=>{
    if(sameAsFront){
      setRearSize(frontSize)
    }
  },[sameAsFront])

  const handleFrontSizeClick = (style: PlateSize) => {
    setFrontSize(style); // This will update the state in the parent component
    
  };

  useEffect(()=>{
    if(sameAsFront){
      setRearSize(frontSize)
    }
  },[frontSize])

  const handleRearSizeClick = (style: PlateSize) => {
    setRearSize(style); // This will update the state in the parent component
  };

  return (
    <Tabs defaultValue="front" className={`flex flex-col overflow-y-scroll items-stretch bg-yellow rounded-sm h-full ${className}`}>
      <TabsList className="grid grid-cols-2 gap-2">
        <TabsTrigger className="text-lg" value="front">
          FRONT <span className="ml-2 font-extralight mt-2 text-base">STYLE</span>
        </TabsTrigger>
        <TabsTrigger className="text-lg" value="back">
          BACK <span className="ml-2 font-extralight mt-2 text-base">STYLE</span>
        </TabsTrigger>
      </TabsList>

      {/* Front Style Tab */}
      <TabsContent value="front" className="flex flex-col gap-3 col-span-2 px-2 rounded-sm">
          <div
            className={` pb-2 rounded-sm  pt-[2px] px-[2px]`}
          >
            <div className=" relative h-[140px]"><Image src={"/178348.jpg"} alt="img" className=" rounded-t-sm" fill priority /></div>
            <p className="px-2 py-2">{frontStyle.name}</p>
            <div className="px-2 flex flex-wrap gap-1">
                  {
                    frontStyle.frontPlate.sizes.map((size)=>(
                      <Button onClick={()=>handleFrontSizeClick(size)} className={`bg-white p-1  border-2 ${frontSize.key==size.key?"border-black ":""}`} key={size.key}>{ size.key+"-"+ size.width +"x"+ size.height}</Button>
                    ))
                  }
                </div>
          </div>
      </TabsContent>

      {/* Rear Style Tab */}
      <TabsContent value="back" className="flex flex-col gap-3 col-span-2 h-[390px] px-2 rounded-sm">
        <div className="mt-2">
          <Switch className="mr-3" checked={sameAsFront} onCheckedChange={(e) => setSameAsFront(e)} />
          <label>Same as front</label>
        </div>

        {/* Conditionally render rear style options based on sameAsFront */}
        {!sameAsFront && (
          <div
          className={` pb-2 rounded-sm  pt-[2px] px-[2px]`}
        >
          <div className=" relative h-[140px]"><Image src={"/178348.jpg"} alt="img" className=" rounded-t-sm" fill priority /></div>
          <p className="px-2 py-2">{rearStyle.name}</p>
          <div className="px-2 flex flex-wrap gap-1">
                {
                  rearStyle.rearPlate.sizes.map((size)=>(
                    <Button onClick={()=>handleRearSizeClick(size)} className={`bg-white p-1  border-2 ${rearSize.key==size.key?"border-black ":""}`}  key={size.key}>{ size.key+"-"+ size.width +"x"+ size.height}</Button>
                  ))
                }
              </div>
        </div>
        )}
      </TabsContent>
    </Tabs>
  );
}

interface BorderProps{
  className?: string;
  frontStyle:Plate;
  rearStyle:Plate,
  frontBorder:Border,
  rearBorder:Border,
  setFrontBorder: (style: Border) => void;
  setRearBorder: (style: Border) => void;
}

export function BORDER({ className, frontBorder,rearBorder,frontStyle,rearStyle,setFrontBorder,setRearBorder }: BorderProps) {
  const plateStyles = getStylesByLetterCount(7); // Assuming getStylesByLetterCount is a function that returns plate styles
  const [sameAsFront, setSameAsFront] = useState(true);

  useEffect(()=>{
    if(sameAsFront){
      setRearBorder(frontBorder)
    }
  },[sameAsFront])

  const handleFrontBorderClick = (style: Border) => {
    setFrontBorder(style); // This will update the state in the parent component
    
  };

  useEffect(()=>{
    if(sameAsFront){
      setRearBorder(frontBorder)
    }
  },[frontBorder])

  const handleRearBorderClick = (style: Border) => {
    setRearBorder(style); // This will update the state in the parent component
  };

  const noBorder:Border={name:"None",material:{thickness:0,type:"None"},type:"None"}

  return (
    <Tabs defaultValue="front" className={`flex flex-col overflow-y-scroll items-stretch bg-yellow rounded-sm h-full ${className}`}>
      <TabsList className="grid grid-cols-2 gap-2">
        <TabsTrigger className="text-lg" value="front">
          FRONT <span className="ml-2 font-extralight mt-2 text-base">STYLE</span>
        </TabsTrigger>
        <TabsTrigger className="text-lg" value="back">
          BACK <span className="ml-2 font-extralight mt-2 text-base">STYLE</span>
        </TabsTrigger>
      </TabsList>

      {/* Front Style Tab */}
      <TabsContent value="front" className="flex flex-col gap-3 col-span-2 px-2 rounded-sm">
          <div
            onClick={()=>handleFrontBorderClick(noBorder)}
            className={` pb-2 rounded-sm  pt-[2px] px-[2px] ${frontBorder.name==noBorder.name?' bg-black':'bg-white'}`}
              >
            <div className=" relative h-[140px]">
            <Image src={"/178348.jpg"} alt="img" className=" rounded-t-sm" fill priority /></div>
            <p className={` px-2 py-2 ${frontBorder.name==noBorder.name?" text-white":"text-black"} `}>No border</p>
          </div>
          {
            frontStyle.borders.map((border)=>(
              <div
              onClick={()=>handleFrontBorderClick(border)}
              className={` pb-2 rounded-sm  pt-[2px] px-[2px] ${frontBorder.name==border.name?' bg-black':'bg-white'}`}
              >
              <div className=" relative h-[140px]">
              <Image src={"/178348.jpg"} alt="img" className=" rounded-t-sm" fill priority /></div>
              <p className={` px-2 py-2 ${frontBorder.name==border.name?" text-white":" text-black"} `}>{border.name}</p>
            </div>
            ))
          }
      </TabsContent>

      {/* Rear Style Tab */}
      <TabsContent value="back" className="flex flex-col gap-3 col-span-2 h-[390px] px-2 rounded-sm">
        <div className="mt-2">
          <Switch className="mr-3" checked={sameAsFront} onCheckedChange={(e) => setSameAsFront(e)} />
          <label>Same as front</label>
        </div>

        {/* Conditionally render rear style options based on sameAsFront */}
        {!sameAsFront && (
          <>
          <div
          onClick={()=>handleRearBorderClick(noBorder)}
          className={` pb-2 rounded-sm  pt-[2px] px-[2px] ${rearBorder.name==noBorder.name?' bg-black':'bg-white'}`}
          >
            <div className=" relative h-[140px]">
            <Image src={"/178348.jpg"} alt="img" className=" rounded-t-sm" fill priority /></div>
            <p className="px-2 py-2">None Border</p>
            {/* <div className="px-2 flex flex-wrap gap-1">
                  {
                    rearStyle.rearPlate.sizes.map((size)=>(
                      <Button onClick={()=>handleRearSizeClick(size)} className={`bg-white p-1  border-2 ${rearSize.key==size.key?"border-black ":""}`}  key={size.key}>{size.width +"x"+ size.height}</Button>
                    ))
                  }
                </div> */}
          </div>
          {
            rearStyle.borders.map((border)=>(
              <div
              onClick={()=>handleRearBorderClick(border)}
              className={` pb-2 rounded-sm  pt-[2px] px-[2px] ${rearBorder.name==border.name?' bg-black':'bg-white'}`}
              >
                <div className=" relative h-[140px] ">
                <Image src={"/178348.jpg"} alt="img" className=" rounded-t-sm" fill priority /></div>
                <p className="px-2 py-2">{border.name}</p>
                {/* <div className="px-2 flex flex-wrap gap-1">
                      {
                        rearStyle.rearPlate.sizes.map((size)=>(
                          <Button onClick={()=>handleRearSizeClick(size)} className={`bg-white p-1  border-2 ${rearSize.key==size.key?"border-black ":""}`}  key={size.key}>{size.width +"x"+ size.height}</Button>
                        ))
                      }
                    </div> */}
              </div>
            ))
          }
          </>
        )}
      </TabsContent>
    </Tabs>
  );
}