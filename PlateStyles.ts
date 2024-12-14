export interface PlateSize {
  key:string;
  width:number;
  height:number;
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
  image?:string,
  frontPlate: {
    sizes: PlateSize[];
  };
  rearPlate: {
    sizes: PlateSize[];
  };
  border: Border;
  preview: boolean;
}
  
const plateStyles: Plate[] = [
  {
    letters: 7,
    name: '4D 3mm Acrylic',
    material: { type: '4D Acrylic', thickness: 3 },
    image:"/plateImages/4D-3mm-Main-Image-Pair-Web-v2-white-640x360.jpg",
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: '4D 3mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 3 } },
    preview: true
  },
  {
    letters: 7,
    name: '4D 5mm Acrylic',
    image:"/plateImages/4D-5mm-Main-Image-Pair-Web-v2-white-640x360.jpg",
    material: { type: '4D Acrylic', thickness: 5 },
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: '4D 5mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 5 } },
    preview: true
  },
  {
    letters: 7,
    name: '3D Gel',
    image:"/plateImages/3D-Gel-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: 'Gel', thickness: 1 },
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 20.5, height: 4.5 }
      ]
    },
    border: { name: '4D 3mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 3 } },
    preview: false
  },
  {
    letters: 7,
    name: '4D 3mm Acrylic and Gel',
    image:"/plateImages/4D-Gel-3mm-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: '4D Acrylic and Gel', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 20.5, height: 4.5 }
      ]
    },
    border: { name: '4D 3mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 3 } },
    preview: true
  },
  {
    letters: 7,
    name: '4D 5mm Acrylic and Gel',
    material: { type: '4D Acrylic and Gel', thickness: 5 },
    image:"/plateImages/4D-Gel-5mm-Main-Image-Pair-Web-v2-white-640x360.webp",
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 20.5, height: 4.5 }
      ]
    },
    border: { name: '4D 3mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 3 } },
    preview: false
  },
  {
    letters: 7,
    name: '4D 5mm Gel',
    image:"/plateImages/4D-Gel-5mm-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: 'Gel', thickness: 5 },
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 20.5, height: 4.5 }
      ]
    },
    border: { name: '4D 5mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 5 } },
    preview: true
  },
  {
    letters: 7,
    name: 'Printed',
    image:"/plateImages/2D-Printed-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: 'Printed', thickness: 1 },
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } },
    preview: true
  },
  {
    letters: 7,
    name: '4D Neon Acrylic',
    material: { type: '4D Neon Acrylic', thickness: 3 },
    gelColors:[
      {name:"Red on blue",botton:0x0000ff,top:0xFF0000, image:"/plateImages/Blue-Neon-Gel-white-640x360.jpg",},
    ],
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 3 } },
    preview: true
  },
  {
    letters: 7,
    name: '4D Neon Acrylic and Gel ',
    material: { type: '4D Neon Acrylic and Gel ', thickness: 3 },
    gelColors:[
      {name:"Red on blue",botton:0x0000ff,top:0xFF0000,image:"/plateImages/Red-4D-Krystal-white-640x360.jpg"},
    ],
    frontPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },
    preview: true
  },
  {
    letters: 7,
    name: 'Bubble',
    material: { type: 'Bubble', thickness: 3 },
    gelColors:[
      {name:"Red on blue",botton:0xFF0000,top:0x0000ff},
    ],
    frontPlate: {
      sizes: [
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },
    preview: false
  },
  {
    letters: 7,
    name: 'Motorbike Plates Printed',
    material: { type: 'Motorbike Plates Printed', thickness: 1 },
    frontPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7 }
      ]
    },
    border: { name: 'Border Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } },
    preview: false
  },
  {
    letters: 7,
    name: 'Motorbike Plates 4D Acrylic',
    material: { type: 'Motorbike Plates 4D Acrylic', thickness: 2 },
    frontPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7 }
      ]
    },
    border: { name: 'Motorbike Plates 4D Acrylic', type: 'Printed', material: { type: 'Printed', thickness: 1 } },
    preview: false
  },

  // 6 letters

  {
    letters: 6,
    name: '4D 3mm Acrylic',
    image:"/plateImages/4D-3mm-Main-Image-Pair-Web-v2-white-640x360.jpg",
    material: { type: '4D Acrylic', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: '4D 3mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 3 } },
    preview: true
  },
  {
    letters: 6,
    name: '4D 5mm Acrylic',
    image:"/plateImages/4D-5mm-Main-Image-Pair-Web-v2-white-640x360.jpg",
    material: { type: '4D Acrylic', thickness: 5 },
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: '4D 5mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 5 } },
    preview: true
  },
  {
    letters: 6,
    name: '3D Gel',
    image:"/plateImages/3D-Gel-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: 'Gel', thickness: 1 },
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 20.5, height: 4.5 }
      ]
    },
    border: { name: '4D 3mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 3 } },
    preview: false
  },
  {
    letters: 6,
    name: '4D 3mm Acrylic and Gel',
    image:"/plateImages/4D-Gel-3mm-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: '4D Acrylic and Gel', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 20.5, height: 4.5 }
      ]
    },
    border: { name: '4D 3mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 3 } },
    preview: true
  },
  {
    letters: 6,
    name: '4D 5mm Acrylic and Gel',
    image:"/plateImages/4D-Gel-5mm-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: '4D Acrylic and Gel', thickness: 5 },
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 20.5, height: 4.5 }
      ]
    },
    border: { name: '4D 3mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 3 } },
    preview: false
  },
  {
    letters: 6,
    name: '4D 5mm Gel',
    image:"/plateImages/4D-Gel-5mm-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: 'Gel', thickness: 5 },
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 20.5, height: 4.5 }
      ]
    },
    border: { name: '4D 5mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 5 } },
    preview: true
  },
  {
    letters: 6,
    name: 'Printed',
    image:"/plateImages/2D-Printed-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: 'Printed', thickness: 1 },
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } },
    preview: true
  },
  {
    letters: 6,
    name: '4D Neon Acrylic',
    material: { type: '4D Neon Acrylic', thickness: 3 },
    gelColors:[
      {name:"Black on Red",top:0x000000,botton:0xFF0000},
      {name:"Black on Blue",top:0x000000,botton:0x0000ff},
      {name:"Black on Green",top:0x000000,botton:0x008000},
    ],
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 3 } },
    preview: true
  },
  {
    letters: 6,
    name: '4D Neon Acrylic and Gel ',
    material: { type: '4D Neon Acrylic and Gel ', thickness: 3 },
    gelColors:[
      {name:"Black on Red",top:0x000000,botton:0xFF0000},
      {name:"Black on Blue",top:0x000000,botton:0x0000ff},
      {name:"Black on Green",top:0x000000,botton:0x008000},
    ],
    frontPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },
    preview: true
  },
  {
    letters: 6,
    name: 'Bubble',
    material: { type: 'Bubble', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: 'Custom', width: 0, height: 0 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'Custom Square', width: 0, height: 0 },
        { key: 'Custom Standard', width: 20.5, height: 0 },
      ]
    },
    border: { name: 'Unavailable ', type: 'Printed', material: { type: 'Printed', thickness: 0 } },
    preview: false
  },
  {
    letters: 6,
    name: 'Motorbike Plates Printed',
    material: { type: 'Motorbike Plates Printed', thickness: 1 },
    frontPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7 }
      ]
    },
    border: { name: 'Border Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } },
    preview: false
  },
  {
    letters: 6,
    name: 'Motorbike Plates 4D Acrylic',
    material: { type: 'Motorbike Plates 4D Acrylic', thickness: 2 },
    frontPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7 }
      ]
    },
    border: { name: 'Motorbike Plates 4D Acrylic', type: 'Printed', material: { type: 'Printed', thickness: 1 } },
    preview: false
  },

  // 5 letters

  {
    letters: 5,
    name: '4D 3mm Acrylic',
    image:"/plateImages/4D-3mm-Main-Image-Pair-Web-v2-white-640x360.jpg",
    material: { type: '4D Acrylic', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: '4D 3mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 3 } },
    preview: true
  },
  {
    letters: 5,
    name: '4D 5mm Acrylic',
    image:"/plateImages/4D-5mm-Main-Image-Pair-Web-v2-white-640x360.jpg",
    material: { type: '4D Acrylic', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: '4D 5mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 5 } },
    preview: true
  },
  {
    letters: 5,
    name: '3D Gel',
    image:"/plateImages/3D-Gel-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: 'Gel', thickness: 1 },
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 20.5, height: 4.5 }
      ]
    },
    border: { name: '4D 3mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 3 } },
    preview: false
  },
  {
    letters: 5,
    name: '4D 3mm Acrylic and Gel',
    image:"/plateImages/4D-Gel-3mm-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: '4D Acrylic and Gel', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 20.5, height: 4.5 }
      ]
    },
    border: { name: '4D 3mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 3 } },
    preview: true
  },
  {
    letters: 5,
    name: '4D 5mm Acrylic and Gel',
    image:"/plateImages/4D-Gel-5mm-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: '4D Acrylic and Gel', thickness: 5 },
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 20.5, height: 4.5 }
      ]
    },
    border: { name: '4D 3mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 3 } },
    preview: false
  },
  {
    letters: 5,
    name: '4D 5mm Gel',
    image:"/plateImages/4D-Gel-5mm-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: 'Gel', thickness: 5 },
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 18, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 20.5, height: 4.5 }
      ]
    },
    border: { name: '4D 5mm Acrylic', type: 'Printed', material: { type: '4D Acrylic', thickness: 5 } },
    preview: true
  },
  {
    letters: 5,
    name: 'Printed',
    image:"/plateImages/2D-Printed-Main-Image-Pair-Web-v2-white-640x360.webp",
    material: { type: 'Printed', thickness: 1 },
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } },
    preview: true
  },
  {
    letters: 5,
    name: '4D Neon Acrylic',
    material: { type: '4D Neon Acrylic', thickness: 3 },
    gelColors:[
      {name:"Black on Red",top:0x000000,botton:0xFF0000},
      {name:"Black on Blue",top:0x000000,botton:0x0000ff},
      {name:"Black on Green",top:0x000000,botton:0x008000},
    ],
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: 'Printed', type: 'Printed', material: { type: 'Printed', thickness: 3 } },
    preview: true
  },
  {
    letters: 5,
    name: '4D Neon Acrylic and Gel ',
    material: { type: '4D Neon Acrylic and Gel ', thickness: 3 },
    gelColors:[
      {name:"Black on Red",top:0x000000,botton:0xFF0000},
      {name:"Black on Blue",top:0x000000,botton:0x0000ff},
      {name:"Black on Green",top:0x000000,botton:0x008000},    
    ],
    frontPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: '14"', width: 14, height: 4.5 },        
        { key: '16"', width: 16, height: 4.5 },
        { key: '18"', width: 18, height: 4.5 },
        { key: 'standard', width: 20.5, height: 4.5 },
        { key: 'hex', width: 20.5, height: 4.5 },
        { key: 'square', width: 11, height: 8 }
      ]
    },
    border: { name: '4D 3mm Acrylic ', type: 'Printed', material: { type: 'Printed', thickness: 3 } },
    preview: true
  },
  {
    letters: 5,
    name: 'Bubble',
    material: { type: 'Bubble', thickness: 3 },
    frontPlate: {
      sizes: [
        { key: 'Custom', width: 0, height: 0 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'Custom Square', width: 0, height: 0 },
        { key: 'Custom Standard', width: 20.5, height: 0 },
      ]
    },
    border: { name: 'Unavailable ', type: 'Printed', material: { type: 'Printed', thickness: 0 } },
    preview: false
  },
  {
    letters: 5,
    name: 'Motorbike Plates Printed',
    material: { type: 'Motorbike Plates Printed', thickness: 1 },
    frontPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7 }
      ]
    },
    border: { name: 'Border Printed', type: 'Printed', material: { type: 'Printed', thickness: 1 } },
    preview: false
  },
  {
    letters: 5,
    name: 'Motorbike Plates 4D Acrylic',
    material: { type: 'Motorbike Plates 4D Acrylic', thickness: 2 },
    frontPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7 }
      ]
    },
    rearPlate: {
      sizes: [
        { key: 'standard', width: 9, height: 7 }
      ]
    },
    border: { name: 'Motorbike Plates 4D Acrylic', type: 'Printed', material: { type: 'Printed', thickness: 1 } },
    preview: false
  }

];

   
  // Helper function to filter styles by number of letters
  function getStylesByLetterCount(letterCount: number) {
    return plateStyles.filter(style => style.letters==(letterCount));
  }
  
  export { plateStyles, getStylesByLetterCount };