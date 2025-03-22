export interface PlateSize {
  key:string;
  width:number;
  height:number;
  price?:number,
}

export interface GelColors{
  image?:string,
  name:string,
  botton:number,
  top:number
}

export interface Material {
  type: string;
  thickness: number | null;
}

export interface Border {
  name: string;
  type: string | null;
  material: Material | null;
}

export interface Plate {
  letters: number;
  name: string;
  material: Material;
  gelColors?: GelColors[];
  frontImage?:string,
  depthImage?:string,
  sideImage?:string,
  frontPlate: {
    sizes: PlateSize[];
  };
  rearPlate: {
    sizes: PlateSize[];
  };
  borders: Border[];
  preview: boolean;
}
  
const plateStyles: Plate[] = [
  {
    letters: 7,
    name: '4D Acrylic 3mm ',
    material: { type: '4D Acrylic', thickness: 3 },
    frontImage:"/4D_3MM/4D 3MM (front view).png",
    sideImage:"/4D_3MM/4D 3MM (Side View).png",
    depthImage:"/4D_3MM/4D 3MM Depth.png",
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5,price:12 },
        { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
        // { key: 'hex', width: 20.5, height: 4.5,price:12 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5,price:12 },
        { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
        // { key: 'hex', width: 20.5, height: 4.5,price:12 },
        { key: 'square', width: 11, height: 8,price:12 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: true
  },
  {
    letters: 7,
    name: '4D Acrylic 5mm ',
    frontImage:"/4D 5MM/4D 5MM (front View).png",
    sideImage:"/4D 5MM/4D 5MM (Side View).png",
    depthImage:"/4D 5MM/4D 5MM Depth.png",
    material: { type: '4D Acrylic', thickness: 5 },
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5,price:16 },
        { key: 'standard', width: 20.5, height: 4.5,price:14 },
        // { key: 'hex', width: 20.5, height: 4.5,price:16 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5,price:16 },
        { key: 'standard', width: 20.5, height: 4.5,price:14 },
        // { key: 'hex', width: 20.5, height: 4.5,price:16 },
        { key: 'square', width: 11, height: 8,price:16 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: true
  },
  {
    letters: 7,
    name: '3D Gel',
    frontImage:"/3D Gel/3D Gel (front View).png",
    sideImage:"/3D Gel/3D Gel (Side View).png",
    depthImage:"/3D Gel/3D Gel Depth.png",
    material: { type: 'Gel', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5,price:14.50 },
        { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
        // // { key: 'hex', width: 20.5, height: 4.5,price:14.50 },
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5,price:14.50 },
        { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
        // // { key: 'hex', width: 20.5, height: 4.5,price:14.50 },
        { key: 'square', width: 20.5, height: 4.5,price:14.50 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: false
  },
  // {
  //   letters: 7,
  //   name: '4D 3mm Acrylic and Gel',
  //   frontImage:"/4D Gel/4D Gel (front View).png",
  //   sideImage:"/4D Gel/4D Gel (Side View).png",
  //   depthImage:"/4D Gel/4D Gel Depth.png",
  //   material: { type: '4D Acrylic and Gel', thickness: 3 },
  //   frontPlate: {
  //     sizes: [
  //       { key: '18"', width: 18, height: 4.5,price:12 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
  //       // { key: 'hex', width: 20.5, height: 4.5,price:12 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '18"', width: 18, height: 4.5,price:12 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
  //       // // { key: 'hex', width: 20.5, height: 4.5,price:12 },
  //       { key: 'square', width: 20.5, height: 4.5,price:12 }
  //     ]
  //   },
  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: true
  // },
  // {
  //   letters: 7,
  //   name: '4D 5mm Acrylic and Gel',
  //   frontImage:"/4D Gel/4D Gel (front View).png",
  //   sideImage:"/4D Gel/4D Gel (Side View).png",
  //   depthImage:"/4D Gel/4D Gel Depth.png",
  //   material: { type: '4D Acrylic and Gel', thickness: 5 },
  //   frontPlate: {
  //     sizes: [
  //       { key: '18"', width: 18, height: 4.5,price:16 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:14 },
  //       // { key: 'hex', width: 20.5, height: 4.5,price:16 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '18"', width: 18, height: 4.5,price:16 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:14 },
  //       // { key: 'hex', width: 20.5, height: 4.5,price:16 },
  //       { key: 'square', width: 20.5, height: 4.5,price:16 }
  //     ]
  //   },
  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: false
  // },
  {
    letters: 7,
    name: '4D Acrylic Gel',
    frontImage:"/plateImages/4D-Gel-5mm-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: 'Gel', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5,price:16 },
        { key: 'standard', width: 20.5, height: 4.5,price:14 },
        // { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5,price:16 },
        { key: 'standard', width: 20.5, height: 4.5,price:14 },
        // { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 20.5, height: 4.5,price:16 }
      ]
    },
    borders: [{ name: '4D 5mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 3 } }],
    preview: true
  },
  // {
  //   letters: 7,
  //   name: '4D Gel 5mm',
  //   frontImage:"/plateImages/4D-Gel-5mm-Main-Image-Pair-Web-v2-white-640x360.webp",
  //   material: { type: 'Gel', thickness: 5 },
  //   frontPlate: {
  //     sizes: [
  //       { key: '18"', width: 18, height: 4.5,price:17 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:15 },
  //       // { key: 'hex', width: 20.5, height: 4.5 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '18"', width: 18, height: 4.5,price:17 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:15 },
  //       // { key: 'hex', width: 20.5, height: 4.5 },
  //       { key: 'square', width: 20.5, height: 4.5,price:17 }
  //     ]
  //   },
  //   borders: [{ name: '4D 5mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 5 } }],
  //   preview: true
  // },
  {
    letters: 7,
    name: 'Printed',
    frontImage:"/Printed/Printed (front view).png",
    sideImage:"/Printed/Printed (Side View).png",
    material: { type: 'Printed', thickness: 1 },
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5,price:12 },
        { key: 'standard', width: 20.5, height: 4.5,price:10 },
        // { key: 'hex', width: 20.5, height: 4.5,price:12 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5,price:12 },
        { key: 'standard', width: 20.5, height: 4.5,price:10 },
        // { key: 'hex', width: 20.5, height: 4.5,price:12 },
        { key: 'square', width: 11, height: 8,price:12 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: true
  },
  {
    letters: 7,
    name: '4D Neon Gel 3mm',
    material: { type: 'Neon Gel 3mm', thickness: 3 },
    frontImage:"/Neon 4D/Neon 4D.png",
    sideImage:"/Neon 4D/Neon 4D (Side View).png",
    gelColors:[
      {name:"Black on Red",botton:0xFF0000,top:0x000000, image:"/Neon 4D/NEON Red 4D/Neon 4D Red (Side View).png",},
      {name:"Black on Blue",botton:0x0000FF,top:0x000000, image:"/Neon 4D/NEON - Blue 4D/Blue Neon 4D Depth.png",},
      {name:"Black on Green",botton:0x008000,top:0x000000, image:"/Neon 4D/NEON Green 4D/Geen 4D (Side View).png",},
    ],
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5,price:16 },
        { key: 'standard', width: 20.5, height: 4.5,price:14 },
        // { key: 'hex', width: 20.5, height: 4.5,price:16 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5,price:16 },
        { key: 'standard', width: 20.5, height: 4.5,price:14 },
        // { key: 'hex', width: 20.5, height: 4.5,price:16 },
        { key: 'square', width: 11, height: 8 ,price:16}
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: true
  },
  // {
  //   letters: 7,
  //   name: '4D Neon Gel 5mm',
  //   material: { type: 'Neon Gel 5mm', thickness: 5 },
  //   frontImage:"/Neon 4D/Neon 4D.png",
  //   sideImage:"/Neon 4D/Neon 4D (Side View).png",
  //   gelColors:[
  //     {name:"Black on Red",botton:0xFF0000,top:0x000000, image:"/Neon 4D/NEON Red 4D/Neon 4D Red (Side View).png",},
  //     {name:"Black on Blue",botton:0x0000FF,top:0x000000, image:"/Neon 4D/NEON - Blue 4D/Blue Neon 4D Depth.png",},
  //     {name:"Black on Green",botton:0x008000,top:0x000000, image:"/Neon 4D/NEON Green 4D/Geen 4D (Side View).png",},
  //   ],
  //   frontPlate: {
  //     sizes: [
  //       { key: '18"', width: 18, height: 4.5,price:17 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:15 },
  //       // { key: 'hex', width: 20.5, height: 4.5,price:17 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '18"', width: 18, height: 4.5,price:17 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:15 },
  //       // { key: 'hex', width: 20.5, height: 4.5,price:17 },
  //       { key: 'square', width: 11, height: 8,price:17 }
  //     ]
  //   },
  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: true
  // },
  {
    letters: 7,
    name: '4D Neon Acrylic',
    material: { type: 'Neon Gel 5mm', thickness: 3 },
    frontImage:"/Neon 4D/Neon 4D.png",
    sideImage:"/Neon 4D/Neon 4D (Side View).png",
    gelColors:[
      {name:"Black on Red",botton:0xFF0000,top:0x000000, image:"/Neon 4D/NEON Red 4D/Neon 4D Red (Side View).png",},
      {name:"Black on Blue",botton:0x0000FF,top:0x000000, image:"/Neon 4D/NEON - Blue 4D/Blue Neon 4D Depth.png",},
      {name:"Black on Green",botton:0x008000,top:0x000000, image:"/Neon 4D/NEON Green 4D/Geen 4D (Side View).png",},
    ],
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5,price:17 },
        { key: 'standard', width: 20.5, height: 4.5,price:15 },
        // { key: 'hex', width: 20.5, height: 4.5,price:17 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5,price:17 },
        { key: 'standard', width: 20.5, height: 4.5,price:15 },
        // { key: 'hex', width: 20.5, height: 4.5,price:17 },
        { key: 'square', width: 11, height: 8,price:17 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: true
  },
  // {
  //   letters: 7,
  //   name: '4D Neon Acrylic and Gel Red',
  //   material: { type: '4D Neon Acrylic and Gel ', thickness: 3 },
  //   frontImage:"/Neon 4D/NEON Red 4D/Neon 4D Red Depth.png",
  //   gelColors:[
  //     {name:"Black on Red",botton:0xFF0000,top:0x000000,image:"/plateImages/Red-4D-Krystal-white-640x360.jpg"},
  //   ],
  //   frontPlate: {
  //     sizes: [
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 },
  //       { key: 'square', width: 11, height: 8 }
  //     ]
  //   },

  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: true
  // },
  // {
  //   letters: 7,
  //   name: '4D Neon Acrylic and Gel Blue ',
  //   material: { type: '4D Neon Acrylic and Gel ', thickness: 3 },
  //   frontImage:"/Neon 4D/NEON - Blue 4D/Blue Neon 4D Depth.png",
  //   gelColors:[
  //     {name:"Black on Blue",botton:0x0000ff,top:0x000000,image:"/plateImages/Red-4D-Krystal-white-640x360.jpg"},
  //   ],
  //   frontPlate: {
  //     sizes: [
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 },
  //       { key: 'square', width: 11, height: 8 }
  //     ]
  //   },

  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: true
  // },
  // {
  //   letters: 7,
  //   name: '4D Neon Acrylic and Gel Green ',
  //   material: { type: '4D Neon Acrylic and Gel ', thickness: 3 },
  //   frontImage:"/Neon 4D/NEON Green 4D/Green 4D Depth.png",
  //   gelColors:[
  //     {name:"Black on Green",botton:0x008000,top:0x000000,image:"/plateImages/Red-4D-Krystal-white-640x360.jpg"},
  //   ],
  //   frontPlate: {
  //     sizes: [
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 },
  //       { key: 'square', width: 11, height: 8 }
  //     ]
  //   },

  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: true
  // },
  {
    letters: 7,
    name: 'Bubble',
    material: { type: 'Bubble', thickness: 3 },
    frontImage:"/Bubble Plates/P18 GUY Bubble (Side View).png",
    gelColors:[
      {name:"Red on blue",botton:0xFF0000,top:0x0000ff},
    ],
    frontPlate: {
      sizes: [
        { key: 'standard', width: 20.5, height: 4.5,price:20 },
        // { key: 'hex', width: 20.5, height: 4.5,price:20 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'standard', width: 20.5, height: 4.5,price:20 },
        // { key: 'hex', width: 20.5, height: 4.5,price:20 },
        { key: 'square', width: 11, height: 8,price:20 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: false
  },
  {
    letters: 7,
    name: 'Motorbike Plates Printed',
    material: { type: 'Motorbike Plates Printed', thickness: 1 },
    frontImage:"/Jeep/Printed/Jeep Printed (front View).png",
    frontPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7,price:12 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7,price:0 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: false
  },
  {
    letters: 7,
    name: 'Motorbike Plates 4D Acrylic',
    material: { type: 'Motorbike Plates 4D Acrylic', thickness: 2 },
    frontImage:"/Bike/Bike 4D/Bike 4D (Side View).png",
    frontPlate: {
      sizes: [
        // { key: 'standard', width: 9, height: 7,price:20 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7,price:0 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: false
  },

  // 6 letters

  {
    letters: 6,
    name: '4D Acrylic 3mm ',
    frontImage:"/4D_3MM/4D 3MM (front view).png",
    sideImage:"/4D_3MM/4D 3MM (Side View).png",
    depthImage:"/4D_3MM/4D 3MM Depth.png",
    material: { type: '4D Acrylic', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5,price:12 },
        { key: '18"', width: 18, height: 4.5,price:12 },
        { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
        // { key: 'hex', width: 20.5, height: 4.5,price:12 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5,price:12 },
        { key: '18"', width: 18, height: 4.5,price:12 },
        { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
        // { key: 'hex', width: 20.5, height: 4.5,price:12 },
        { key: 'square', width: 11, height: 8,price:12 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: true
  },
  {
    letters: 6,
    name: '4D Acrylic 5mm ',
    frontImage:"/4D 5MM/4D 5MM (front View).png",
    sideImage:"/4D 5MM/4D 5MM (Side View).png",
    depthImage:"/4D 5MM/4D 5MM Depth.png",
    material: { type: '4D Acrylic', thickness: 5 },
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5,price:16 },
        { key: '18"', width: 18, height: 4.5,price:16 },
        { key: 'standard', width: 20.5, height: 4.5,price:14 },
        // { key: 'hex', width: 20.5, height: 4.5,price:16 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5,price:16 },
        { key: '18"', width: 18, height: 4.5,price:16 },
        { key: 'standard', width: 20.5, height: 4.5,price:14 },
        // { key: 'hex', width: 20.5, height: 4.5,price:16 },
        { key: 'square', width: 11, height: 8,price:16 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: true
  },
  {
    letters: 6,
    name: '3D Gel',
    frontImage:"/3D Gel/3D Gel (front View).png",
    sideImage:"/3D Gel/3D Gel (Side View).png",
    depthImage:"/3D Gel/3D Gel Depth.png",
    material: { type: 'Gel', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5,price:14.50 },
        { key: '18"', width: 18, height: 4.5,price:14.50 },
        { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
        // // { key: 'hex', width: 20.5, height: 4.5,price:14.50 },
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5,price:14.50 },
        { key: '18"', width: 18, height: 4.5,price:14.50 },
        { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
        // // { key: 'hex', width: 20.5, height: 4.5,price:14.50 },
        { key: 'square', width: 20.5, height: 4.5,price:14.50 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: false
  },
  // {
  //   letters: 6,
  //   name: '4D 3mm Acrylic and Gel',
  //   frontImage:"/4D Gel/4D Gel (front View).png",
  //   sideImage:"/4D Gel/4D Gel (Side View).png",
  //   depthImage:"/4D Gel/4D Gel Depth.png",
  //   material: { type: '4D Acrylic and Gel', thickness: 3 },
  //   frontPlate: {
  //     sizes: [
  //       { key: '16"', width: 16, height: 4.5,price:12 },
  //       { key: '18"', width: 18, height: 4.5,price:12 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
  //       // { key: 'hex', width: 20.5, height: 4.5,price:12 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '16"', width: 16, height: 4.5,price:12 },
  //       { key: '18"', width: 18, height: 4.5,price:12 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
  //       // { key: 'hex', width: 20.5, height: 4.5,price:12 },
  //       { key: 'square', width: 20.5, height: 4.5,price:12 }
  //     ]
  //   },
  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: true
  // },
  // {
  //   letters: 6,
  //   name: '4D 5mm Acrylic and Gel',
  //   frontImage:"/4D Gel/4D Gel (front View).png",
  //   sideImage:"/4D Gel/4D Gel (Side View).png",
  //   depthImage:"/4D Gel/4D Gel Depth.png",
  //   material: { type: '4D Acrylic and Gel', thickness: 5 },
  //   frontPlate: {
  //     sizes: [
  //       { key: '16"', width: 16, height: 4.5,price:12 },
  //       { key: '18"', width: 18, height: 4.5,price:12 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
  //       // { key: 'hex', width: 20.5, height: 4.5,price:12 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '16"', width: 16, height: 4.5,price:12 },
  //       { key: '18"', width: 18, height: 4.5,price:12 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
  //       // { key: 'hex', width: 20.5, height: 4.5,price:12 },
  //       { key: 'square', width: 20.5, height: 4.5,price:12 }
  //     ]
  //   },
  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: false
  // },
  {
    letters: 6,
    name: '4D Acrylic Gel',
    frontImage:"/plateImages/4D-Gel-5mm-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: 'Gel', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5,price:16 },
        { key: '18"', width: 18, height: 4.5,price:16 },
        { key: 'standard', width: 20.5, height: 4.5,price:14 },
        // { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5,price:16 },
        { key: '18"', width: 18, height: 4.5,price:16 },
        { key: 'standard', width: 20.5, height: 4.5,price:14 },
        // { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 20.5, height: 4.5,price:16 }
      ]
    },
    borders: [{ name: '4D 5mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 3 } }],
    preview: true
  },
  // {
  //   letters: 6,
  //   name: '4D Gel 5mm',
  //   frontImage:"/plateImages/4D-Gel-5mm-Main-Image-Pair-Web-v2-white-640x360.webp",
  //   material: { type: 'Gel', thickness: 5 },
  //   frontPlate: {
  //     sizes: [
  //       { key: '16"', width: 16, height: 4.5,price:17 },
  //       { key: '18"', width: 18, height: 4.5,price:17 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:15 },
  //       // { key: 'hex', width: 20.5, height: 4.5 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '16"', width: 16, height: 4.5,price:17 },
  //       { key: '18"', width: 18, height: 4.5 ,price:17},
  //       { key: 'standard', width: 20.5, height: 4.5,price:15 },
  //       // { key: 'hex', width: 20.5, height: 4.5 },
  //       { key: 'square', width: 20.5, height: 4.5,price:17 }
  //     ]
  //   },
  //   borders: [{ name: '4D 5mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 5 } }],
  //   preview: true
  // },
  {
    letters: 6,
    name: 'Printed',
    frontImage:"/Printed/Printed (front view).png",
    sideImage:"/Printed/Printed (Side View).png",
    material: { type: 'Printed', thickness: 1 },
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5,price:12 },
        { key: '18"', width: 18, height: 4.5 ,price:12},
        { key: 'standard', width: 20.5, height: 4.5,price:10 },
        // { key: 'hex', width: 20.5, height: 4.5,price:12 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5,price:12 },
        { key: '18"', width: 18, height: 4.5,price:12 },
        { key: 'standard', width: 20.5, height: 4.5,price:10 },
        // { key: 'hex', width: 20.5, height: 4.5,price:12 },
        { key: 'square', width: 11, height: 8,price:12 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: true
  },
  {
    letters: 6,
    name: '4D Neon Gel 3mm',
    material: { type: 'Neon Gel 3mm', thickness: 3 },
    frontImage:"/Neon 4D/Neon 4D.png",
    sideImage:"/Neon 4D/Neon 4D (Side View).png",
    gelColors:[
      {name:"Black on Red",botton:0xFF0000,top:0x000000, image:"/Neon 4D/NEON Red 4D/Neon 4D Red (Side View).png",},
      {name:"Black on Blue",botton:0x0000FF,top:0x000000, image:"/Neon 4D/NEON - Blue 4D/Blue Neon 4D Depth.png",},
      {name:"Black on Green",botton:0x008000,top:0x000000, image:"/Neon 4D/NEON Green 4D/Geen 4D (Side View).png",},
    ],
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5,price:16 },
        { key: '18"', width: 18, height: 4.5,price:16 },
        { key: 'standard', width: 20.5, height: 4.5,price:14 },
        // { key: 'hex', width: 20.5, height: 4.5,price:16 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5,price:16 },
        { key: '18"', width: 18, height: 4.5,price:16 },
        { key: 'standard', width: 20.5, height: 4.5,price:14 },
        // { key: 'hex', width: 20.5, height: 4.5,price:16 },
        { key: 'square', width: 11, height: 8,price:16 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: true
  },
  // {
  //   letters: 6,
  //   name: '4D Neon Gel 5mm',
  //   material: { type: 'Neon Gel 5mm', thickness: 5 },
  //   frontImage:"/Neon 4D/Neon 4D.png",
  //   sideImage:"/Neon 4D/Neon 4D (Side View).png",
  //   gelColors:[
  //     {name:"Black on Red",botton:0xFF0000,top:0x000000, image:"/Neon 4D/NEON Red 4D/Neon 4D Red (Side View).png",},
  //     {name:"Black on Blue",botton:0x0000FF,top:0x000000, image:"/Neon 4D/NEON - Blue 4D/Blue Neon 4D Depth.png",},
  //     {name:"Black on Green",botton:0x008000,top:0x000000, image:"/Neon 4D/NEON Green 4D/Geen 4D (Side View).png",},
  //   ],
  //   frontPlate: {
  //     sizes: [
  //       { key: '16"', width: 16, height: 4.5,price:17 },
  //       { key: '18"', width: 18, height: 4.5,price:17 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:15 },
  //       // { key: 'hex', width: 20.5, height: 4.5,price:17 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '16"', width: 16, height: 4.5,price:17 },
  //       { key: '18"', width: 18, height: 4.5,price:17 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:15 },
  //       // { key: 'hex', width: 20.5, height: 4.5,price:17 },
  //       { key: 'square', width: 11, height: 8,price:17 }
  //     ]
  //   },
  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: true
  // },
  {
    letters: 6,
    name: '4D Neon Acrylic',
    material: { type: 'Neon Gel 5mm', thickness: 3 },
    frontImage:"/Neon 4D/Neon 4D.png",
    sideImage:"/Neon 4D/Neon 4D (Side View).png",
    gelColors:[
      {name:"Black on Red",botton:0xFF0000,top:0x000000, image:"/Neon 4D/NEON Red 4D/Neon 4D Red (Side View).png",},
      {name:"Black on Blue",botton:0x0000FF,top:0x000000, image:"/Neon 4D/NEON - Blue 4D/Blue Neon 4D Depth.png",},
      {name:"Black on Green",botton:0x008000,top:0x000000, image:"/Neon 4D/NEON Green 4D/Geen 4D (Side View).png",},
    ],
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5,price:17 },
        { key: '18"', width: 18, height: 4.5,price:17 },
        { key: 'standard', width: 20.5, height: 4.5,price:15 },
        // { key: 'hex', width: 20.5, height: 4.5,price:17 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5,price:17 },
        { key: '18"', width: 18, height: 4.5,price:17 },
        { key: 'standard', width: 20.5, height: 4.5,price:15 },
        // { key: 'hex', width: 20.5, height: 4.5,price:17 },
        { key: 'square', width: 11, height: 8,price:17 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: true
  },
  // {
  //   letters: 6,
  //   name: '4D Neon Acrylic and Gel Red',
  //   material: { type: '4D Neon Acrylic and Gel ', thickness: 3 },
  //   frontImage:"/Neon 4D/NEON Red 4D/Neon 4D Red Depth.png",
  //   gelColors:[
  //     {name:"Black on Red",top:0x000000,botton:0xFF0000},
  //   ],
  //   frontPlate: {
  //     sizes: [
  //       { key: '16"', width: 16, height: 4.5 },
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '16"', width: 16, height: 4.5 },
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 },
  //       { key: 'square', width: 11, height: 8 }
  //     ]
  //   },
  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: true
  // },
  // {
  //   letters: 6,
  //   name: '4D Neon Acrylic and Gel Blue',
  //   material: { type: '4D Neon Acrylic and Gel ', thickness: 3 },
  //   frontImage:"/Neon 4D/NEON - Blue 4D/Blue Neon 4D Depth.png",
  //   gelColors:[
  //     {name:"Black on Blue",top:0x000000,botton:0x0000ff},
  //   ],
  //   frontPlate: {
  //     sizes: [
  //       { key: '16"', width: 16, height: 4.5 },
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '16"', width: 16, height: 4.5 },
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 },
  //       { key: 'square', width: 11, height: 8 }
  //     ]
  //   },
  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: true
  // },
  // {
  //   letters: 6,
  //   name: '4D Neon Acrylic and Gel Green',
  //   material: { type: '4D Neon Acrylic and Gel ', thickness: 3 },
  //   frontImage:"/Neon 4D/NEON Green 4D/Green 4D Depth.png",
  //   gelColors:[
  //     {name:"Black on Green",top:0x000000,botton:0x008000},
  //   ],
  //   frontPlate: {
  //     sizes: [
  //       { key: '16"', width: 16, height: 4.5 },
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '16"', width: 16, height: 4.5 },
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 },
  //       { key: 'square', width: 11, height: 8 }
  //     ]
  //   },
  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: true
  // },
  {
    letters: 6,
    name: 'Bubble',
    material: { type: 'Bubble', thickness: 3 },
    frontImage:"/Bubble Plates/P18 GUY Bubble (Side View).png",
    frontPlate: {
      sizes: [
        { key: 'Custom', width: 0, height: 0,price:20 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'Custom Square', width: 0, height: 5,price:20 },
        { key: 'Custom Standard', width: 20.5, height: 0,price:20 },
      ]
    },
    borders: [{ name: 'Unavailable ', type: 'Printed', material: { type: 'Printed', thickness: 0 } }],
    preview: false
  },
  {
    letters: 6,
    name: 'Motorbike Plates Printed',
    material: { type: 'Motorbike Plates Printed', thickness: 1 },
    frontImage:"/Jeep/Printed/Jeep Printed (front View).png",
    frontPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7,price:12 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7,price:0 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: false
  },
  {
    letters: 6,
    name: 'Motorbike Plates 4D Acrylic',
    material: { type: 'Motorbike Plates 4D Acrylic', thickness: 2 },
    frontImage:"/Bike/Bike 4D/Bike 4D (Side View).png",
    frontPlate: {
      sizes: [
        // { key: 'standard', width: 9, height: 7,price:20 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7,price:0 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: false
  },

  // 5 letters

  {
    letters: 5,
    name: '4D Acrylic 3mm ',
    frontImage:"/4D_3MM/4D 3MM (front view).png",
    sideImage:"/4D_3MM/4D 3MM (Side View).png",
    depthImage:"/4D_3MM/4D 3MM Depth.png",
    material: { type: '4D Acrylic', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5,price:12 },        
        { key: '16"', width: 16, height: 4.5,price:12 },
        { key: '18"', width: 18, height: 4.5,price:12 },
        { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
        // { key: 'hex', width: 20.5, height: 4.5,price:12 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5,price:12 },
        { key: '16"', width: 16, height: 4.5,price:12 },
        { key: '18"', width: 18, height: 4.5,price:12 },
        { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
        // { key: 'hex', width: 20.5, height: 4.5,price:12 },
        { key: 'square', width: 11, height: 8,price:12 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: true
  },
  {
    letters: 5,
    name: '4D Acrylic 5mm ',
    frontImage:"/4D 5MM/4D 5MM (front View).png",
    sideImage:"/4D 5MM/4D 5MM (Side View).png",
    depthImage:"/4D 5MM/4D 5MM Depth.png",
    material: { type: '4D Acrylic', thickness: 5 },
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5,price:16 },        
        { key: '16"', width: 16, height: 4.5,price:16 },
        { key: '18"', width: 18, height: 4.5,price:16 },
        { key: 'standard', width: 20.5, height: 4.5,price:14 },
        // { key: 'hex', width: 20.5, height: 4.5,price:16 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5,price:16 },        
        { key: '16"', width: 16, height: 4.5,price:16 },
        { key: '18"', width: 18, height: 4.5,price:16 },
        { key: 'standard', width: 20.5, height: 4.5,price:14 },
        // { key: 'hex', width: 20.5, height: 4.5,price:16 },
        { key: 'square', width: 11, height: 8,price:16 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: true
  },
  {
    letters: 5,
    name: '3D Gel',
    frontImage:"/3D Gel/3D Gel (front View).png",
    sideImage:"/3D Gel/3D Gel (Side View).png",
    depthImage:"/3D Gel/3D Gel Depth.png",
    material: { type: 'Gel', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5,price:14.50 },        
        { key: '16"', width: 16, height: 4.5,price:14.50 },
        { key: '18"', width: 18, height: 4.5,price:14.50 },
        { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
        // // { key: 'hex', width: 20.5, height: 4.5,price:14.50 },
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5,price:14.50 },        
        { key: '16"', width: 16, height: 4.5,price:14.50 },
        { key: '18"', width: 18, height: 4.5,price:14.50 },
        { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
        // // { key: 'hex', width: 20.5, height: 4.5,price:14.50 },
        { key: 'square', width: 20.5, height: 4.5,price:14.50 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: false
  },
  // {
  //   letters: 5,
  //   name: '4D 3mm Acrylic and Gel',
  //   frontImage:"/4D Gel/4D Gel (front View).png",
  //   sideImage:"/4D Gel/4D Gel (Side View).png",
  //   depthImage:"/4D Gel/4D Gel Depth.png",
  //   material: { type: '4D Acrylic and Gel', thickness: 3 },
  //   frontPlate: {
  //     sizes: [
  //       { key: '14"', width: 14, height: 4.5,price:12 },        
  //       { key: '16"', width: 16, height: 4.5,price:12 },
  //       { key: '18"', width: 18, height: 4.5,price:12 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
  //       // { key: 'hex', width: 20.5, height: 4.5 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '14"', width: 14, height: 4.5,price:12 },        
  //       { key: '16"', width: 16, height: 4.5,price:12 },
  //       { key: '18"', width: 18, height: 4.5,price:12 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
  //       // { key: 'hex', width: 20.5, height: 4.5 },
  //       { key: 'square', width: 20.5, height: 4.5,price:12 }
  //     ]
  //   },
  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: true
  // },
  // {
  //   letters: 5,
  //   name: '4D 5mm Acrylic and Gel',
  //   frontImage:"/4D Gel/4D Gel (front View).png",
  //   sideImage:"/4D Gel/4D Gel (Side View).png",
  //   depthImage:"/4D Gel/4D Gel Depth.png",
  //   material: { type: '4D Acrylic and Gel', thickness: 5 },
  //   frontPlate: {
  //     sizes: [
  //       { key: '14"', width: 14, height: 4.5,price:12 },        
  //       { key: '16"', width: 16, height: 4.5,price:12 },
  //       { key: '18"', width: 18, height: 4.5,price:12 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
  //       // { key: 'hex', width: 20.5, height: 4.5,price:12 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '14"', width: 14, height: 4.5,price:12 },        
  //       { key: '16"', width: 16, height: 4.5,price:12 },
  //       { key: '18"', width: 18, height: 4.5,price:12 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:12.50 },
  //       // { key: 'hex', width: 20.5, height: 4.5,price:12 },
  //       { key: 'square', width: 20.5, height: 4.5,price:12 }
  //     ]
  //   },
  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: false
  // },
  {
    letters: 5,
    name: '4D Acrylic Gel',
    frontImage:"/plateImages/4D-Gel-5mm-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: 'Gel', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5,price: 16 },        
        { key: '16"', width: 16, height: 4.5,price: 16 },
        { key: '18"', width: 18, height: 4.5,price: 16 },
        { key: 'standard', width: 20.5, height: 4.5,price: 14 },
        // { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5,price: 16 },        
        { key: '16"', width: 16, height: 4.5,price: 16 },
        { key: '18"', width: 18, height: 4.5,price: 16 },
        { key: 'standard', width: 20.5, height: 4.5,price: 14 },
        // { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 20.5, height: 4.5 }
      ]
    },
    borders: [{ name: '4D 5mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 5 } }],
    preview: true
  },
  // {
  //   letters: 5,
  //   name: '4D Gel 5mm',
  //   frontImage:"/plateImages/4D-Gel-5mm-Main-Image-Pair-Web-v2-white-640x360.webp",
  //   material: { type: 'Gel', thickness: 5 },
  //   frontPlate: {
  //     sizes: [
  //       { key: '14"', width: 14, height: 4.5,price: 17 },        
  //       { key: '16"', width: 16, height: 4.5,price: 17 },
  //       { key: '18"', width: 18, height: 4.5,price: 17 },
  //       { key: 'standard', width: 20.5, height: 4.5,price: 15 },
  //       // { key: 'hex', width: 20.5, height: 4.5 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '14"', width: 14, height: 4.5,price: 17 },        
  //       { key: '16"', width: 16, height: 4.5,price: 17 },
  //       { key: '18"', width: 18, height: 4.5 ,price: 17},
  //       { key: 'standard', width: 20.5, height: 4.5 ,price: 15},
  //       // { key: 'hex', width: 20.5, height: 4.5 },
  //       { key: 'square', width: 20.5, height: 4.5,price: 17 }
  //     ]
  //   },
  //   borders: [{ name: '4D 5mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 5 } }],
  //   preview: true
  // },
  {
    letters: 5,
    name: 'Printed',
    frontImage:"/Printed/Printed (front view).png",
    sideImage:"/Printed/Printed (Side View).png",
    material: { type: 'Printed', thickness: 1 },
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5,price:12 },        
        { key: '16"', width: 16, height: 4.5,price:12 },
        { key: '18"', width: 18, height: 4.5,price:12 },
        { key: 'standard', width: 20.5, height: 4.5,price:10 },
        // { key: 'hex', width: 20.5, height: 4.5,price:12 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5,price:12 },        
        { key: '16"', width: 16, height: 4.5,price:12 },
        { key: '18"', width: 18, height: 4.5,price:12 },
        { key: 'standard', width: 20.5, height: 4.5,price:10 },
        // { key: 'hex', width: 20.5, height: 4.5,price:12 },
        { key: 'square', width: 11, height: 8,price:12 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: true
  },
  {
    letters: 5,
    name: '4D Neon Gel 3mm',
    material: { type: '4D Neon Acrylic', thickness: 3 },
    frontImage:"/Neon 4D/Neon 4D.png",
    sideImage:"/Neon 4D/Neon 4D (Side View).png",
    gelColors:[
      {name:"Black on Red",botton:0xFF0000,top:0x000000, image:"/Neon 4D/NEON Red 4D/Neon 4D Red (Side View).png",},
      {name:"Black on Blue",botton:0x0000FF,top:0x000000, image:"/Neon 4D/NEON - Blue 4D/Blue Neon 4D Depth.png",},
      {name:"Black on Green",botton:0x008000,top:0x000000, image:"/Neon 4D/NEON Green 4D/Geen 4D (Side View).png",},
    ],
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5,price:16 },        
        { key: '16"', width: 16, height: 4.5,price:16 },
        { key: '18"', width: 18, height: 4.5,price:16 },
        { key: 'standard', width: 20.5, height: 4.5,price:14 },
        // { key: 'hex', width: 20.5, height: 4.5,price:16 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5,price:16 },        
        { key: '16"', width: 16, height: 4.5 ,price:16},
        { key: '18"', width: 18, height: 4.5 ,price:16},
        { key: 'standard', width: 20.5, height: 4.5 ,price:14},
        // { key: 'hex', width: 20.5, height: 4.5 ,price:16},
        { key: 'square', width: 11, height: 8 ,price:16}
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: true
  },
  // {
  //   letters: 5,
  //   name: '4D Neon Gel 5mm',
  //   material: { type: '4D Neon Acrylic', thickness: 5 },
  //   frontImage:"/Neon 4D/Neon 4D.png",
  //   sideImage:"/Neon 4D/Neon 4D (Side View).png",
  //   gelColors:[
  //     {name:"Black on Red",botton:0xFF0000,top:0x000000, image:"/Neon 4D/NEON Red 4D/Neon 4D Red (Side View).png",},
  //     {name:"Black on Blue",botton:0x0000FF,top:0x000000, image:"/Neon 4D/NEON - Blue 4D/Blue Neon 4D Depth.png",},
  //     {name:"Black on Green",botton:0x008000,top:0x000000, image:"/Neon 4D/NEON Green 4D/Geen 4D (Side View).png",},
  //   ],
  //   frontPlate: {
  //     sizes: [
  //       { key: '14"', width: 14, height: 4.5,price:17 },        
  //       { key: '16"', width: 16, height: 4.5,price:17 },
  //       { key: '18"', width: 18, height: 4.5,price:17 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:15 },
  //       // { key: 'hex', width: 20.5, height: 4.5 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '14"', width: 14, height: 4.5,price:17 },        
  //       { key: '16"', width: 16, height: 4.5,price:17 },
  //       { key: '18"', width: 18, height: 4.5,price:17 },
  //       { key: 'standard', width: 20.5, height: 4.5,price:15 },
  //       // { key: 'hex', width: 20.5, height: 4.5,price:17 },
  //       { key: 'square', width: 11, height: 8,price:17 }
  //     ]
  //   },
  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: true
  // },
  {
    letters: 5,
    name: '4D Neon Acrylic ',
    material: { type: '4D Neon Acrylic', thickness: 3 },
    frontImage:"/Neon 4D/Neon 4D.png",
    sideImage:"/Neon 4D/Neon 4D (Side View).png",
    gelColors:[
      {name:"Black on Red",botton:0xFF0000,top:0x000000, image:"/Neon 4D/NEON Red 4D/Neon 4D Red (Side View).png",},
      {name:"Black on Blue",botton:0x0000FF,top:0x000000, image:"/Neon 4D/NEON - Blue 4D/Blue Neon 4D Depth.png",},
      {name:"Black on Green",botton:0x008000,top:0x000000, image:"/Neon 4D/NEON Green 4D/Geen 4D (Side View).png",},
    ],
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5,price:17 },        
        { key: '16"', width: 16, height: 4.5,price:17 },
        { key: '18"', width: 18, height: 4.5,price:17 },
        { key: 'standard', width: 20.5, height: 4.5,price:15 },
        // { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5,price:17 },        
        { key: '16"', width: 16, height: 4.5,price:17 },
        { key: '18"', width: 18, height: 4.5,price:17 },
        { key: 'standard', width: 20.5, height: 4.5,price:15 },
        // { key: 'hex', width: 20.5, height: 4.5,price:17 },
        { key: 'square', width: 11, height: 8,price:17 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: true
  },
  // {
  //   letters: 5,
  //   name: '4D Neon Acrylic and Gel Red',
  //   material: { type: '4D Neon Acrylic and Gel ', thickness: 3 },
  //   frontImage:"/Neon 4D/NEON Red 4D/Neon 4D Red Depth.png",
  //   gelColors:[
  //     {name:"Black on Red",top:0x000000,botton:0xFF0000},    
  //   ],
  //   frontPlate: {
  //     sizes: [
  //       { key: '14"', width: 14, height: 4.5 },        
  //       { key: '16"', width: 16, height: 4.5 },
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '14"', width: 14, height: 4.5 },        
  //       { key: '16"', width: 16, height: 4.5 },
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 },
  //       { key: 'square', width: 11, height: 8 }
  //     ]
  //   },
  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: true
  // },
  // {
  //   letters: 5,
  //   name: '4D Neon Acrylic and Gel Blue',
  //   material: { type: '4D Neon Acrylic and Gel ', thickness: 3 },
  //   frontImage:"/Neon 4D/NEON - Blue 4D/Blue Neon 4D Depth.png",
  //   gelColors:[
  //     {name:"Black on Blue",top:0x000000,botton:0x0000ff},
  //   ],
  //   frontPlate: {
  //     sizes: [
  //       { key: '14"', width: 14, height: 4.5 },        
  //       { key: '16"', width: 16, height: 4.5 },
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '14"', width: 14, height: 4.5 },        
  //       { key: '16"', width: 16, height: 4.5 },
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 },
  //       { key: 'square', width: 11, height: 8 }
  //     ]
  //   },
  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: true
  // },
  // {
  //   letters: 5,
  //   name: '4D Neon Acrylic and Gel Green',
  //   material: { type: '4D Neon Acrylic and Gel ', thickness: 3 },
  //   frontImage:"/Neon 4D/NEON Green 4D/Green 4D Depth.png",
  //   gelColors:[
  //     {name:"Black on Green",top:0x000000,botton:0x008000},    
  //   ],
  //   frontPlate: {
  //     sizes: [
  //       { key: '14"', width: 14, height: 4.5 },        
  //       { key: '16"', width: 16, height: 4.5 },
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 }
  //     ]
  //   },
  //   rearPlate: {
  //     sizes: [
  //       { key: '14"', width: 14, height: 4.5 },        
  //       { key: '16"', width: 16, height: 4.5 },
  //       { key: '18"', width: 18, height: 4.5 },
  //       { key: 'standard', width: 20.5, height: 4.5 },
  //       // { key: 'hex', width: 20.5, height: 4.5 },
  //       { key: 'square', width: 11, height: 8 }
  //     ]
  //   },
  //   borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
  //   preview: true
  // },
  {
    letters: 5,
    name: 'Bubble',
    material: { type: 'Bubble', thickness: 3 },
    frontImage:"/Bubble Plates/P18 GUY Bubble (Side View).png",
    frontPlate: {
      sizes: [
        { key: 'Custom', width: 0, height: 0,price:20 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'Custom Square', width: 0, height: 0,price:20 },
        { key: 'Custom Standard', width: 20.5, height: 0,price:20 },
      ]
    },
    borders: [{ name: 'Unavailable ', type: 'Printed', material: { type: 'Printed', thickness: 0 } }],
    preview: false
  },
  {
    letters: 5,
    name: 'Motorbike Plates Printed',
    material: { type: 'Motorbike Plates Printed', thickness: 1 },
    frontImage:"/Jeep/Printed/Jeep Printed (front View).png",
    frontPlate: {
      sizes: [
        // { key: 'standard', width: 9, height: 7,price:12 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7,price:0 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: false
  },
  {
    letters: 5,
    name: 'Motorbike Plates 4D Acrylic',
    material: { type: 'Motorbike Plates 4D Acrylic', thickness: 2 },
    frontImage:"/Bike/Bike 4D/Bike 4D (Side View).png",
    frontPlate: {
      sizes: [
        // { key: 'standard', width: 9, height: 7,price:20 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7,price:0 }
      ]
    },
    borders:[ { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },{ name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } }],
    preview: false
  }

];

   
  // Helper function to filter styles by number of letters
  function getStylesByLetterCount(letterCount: number) {
    return plateStyles.filter(style => style.letters==(letterCount));
  }
  
  export { plateStyles, getStylesByLetterCount };