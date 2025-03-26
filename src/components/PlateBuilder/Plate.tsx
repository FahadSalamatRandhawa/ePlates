"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Border, GelColors, Plate, PlateSize } from "../../../PlateStyles";

// Create a rounded rectangle shape
const createRoundedRectShape = (width: number, height: number, radius: number) => {
  const shape = new THREE.Shape();
  const x = -width / 2; // Center the shape horizontally
  const y = -height / 2; // Center the shape vertically

  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return shape;
};

// Create the hollow border shape
const createHollowBorderShape = (width: number, height: number, radius: number, borderThickness: number) => {
  const shape = new THREE.Shape();
  const x = -width / 2;
  const y = -height / 2;

  // Outer border shape
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);

  // Inner cut-out shape (matches plate size exactly)
  const innerShape = new THREE.Shape();
  const innerX = x + borderThickness; // Offset for the border
  const innerY = y + borderThickness;

  innerShape.moveTo(innerX + radius, innerY);
  innerShape.lineTo(innerX + width - 2 * borderThickness - radius, innerY);
  innerShape.quadraticCurveTo(innerX + width - 2 * borderThickness, innerY, innerX + width - 2 * borderThickness, innerY + radius);
  innerShape.lineTo(innerX + width - 2 * borderThickness, innerY + height - 2 * borderThickness - radius);
  innerShape.quadraticCurveTo(innerX + width - 2 * borderThickness, innerY + height - 2 * borderThickness, innerX + width - 2 * borderThickness - radius, innerY + height - 2 * borderThickness);
  innerShape.lineTo(innerX + radius, innerY + height - 2 * borderThickness);
  innerShape.quadraticCurveTo(innerX, innerY + height - 2 * borderThickness, innerX, innerY + height - 2 * borderThickness - radius);
  innerShape.lineTo(innerX, innerY + radius);
  innerShape.quadraticCurveTo(innerX, innerY, innerX + radius, innerY);

  // Subtract inner shape to create hollow effect
  shape.holes.push(innerShape);

  return shape;
};


// Function to create and add a spotlight to the scene
const addSpotlight = (scene: THREE.Scene, position: { x: number, y: number, z: number }, targetPosition: { x: number, y: number, z: number }, color: number = 0xffffff, intensity: number = 1) => {
  // Create the spotlight
  const spotlight = new THREE.SpotLight(color, intensity);

  // Set the spotlight position
  spotlight.position.set(position.x, position.y, position.z);

  // Make the spotlight target the specified position (can be the plate or any other object)
  spotlight.target.position.set(targetPosition.x, targetPosition.y, targetPosition.z);

  // Enable shadows for the spotlight (optional)
  spotlight.castShadow = true;

  // Add the spotlight to the scene
  scene.add(spotlight);

  // Optionally add a helper to visualize the spotlight in the scene (for debugging)
  const spotLightHelper = new THREE.SpotLightHelper(spotlight);
  scene.add(spotLightHelper);
};


interface PlateProps{
  plateStyle: Plate;
  plateNumber:string,
  roadLegalSpacing:boolean,
  isRear:boolean,
  size:PlateSize,
  border:Border,
  gelColor:GelColors|null,
}

const ThreeDRectangle = ({ plateNumber="YOUR PLATE", isRear,plateStyle,size,border,gelColor,roadLegalSpacing }: PlateProps) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [textMesh, setTextMesh] = useState<THREE.Mesh | null>(null);


  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    setScene(scene); // Set the scene once

    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.2,
      100
    );
    camera.position.set(0, 0, 15); // Camera positioned to view the plate and text

    const renderer = new THREE.WebGLRenderer({ antialias: true });  // Enable antialiasing
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x101010); // Dark background color
    
    // Optional: Enable performance optimizations
    renderer.shadowMap.enabled = true;  // Enable shadows if needed
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Use soft shadows for smoother appearance
    
    // Add the renderer's DOM element to the mount element
    mountRef.current.appendChild(renderer.domElement);
    

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Softer light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight.position.set(1, 0.5, 5);
    scene.add(directionalLight);
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight2.position.set(-1, -0.4, 5);
    scene.add(directionalLight2);



    // Define the plate geometry
    const roundedRectShape = createRoundedRectShape(size.width, size.height, 0.5); // Width, height, corner radius
    const extrudeSettings = {
      depth: 0.2, // Thickness of the plate
      bevelEnabled: false, // Disable bevel for sharp edges
    };

    const plateGeometry = new THREE.ExtrudeGeometry(roundedRectShape, extrudeSettings);
    const plateMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xFFFFFF, // Pure white color for the plate background
      roughness: 0.9,  // Keep it matte, similar to real license plates
      metalness: 0.5,    // Non-metallic appearance
      emissive: 0xD3D3D3, // Match the white background for uniform brightness
      emissiveIntensity: 0.6, // Subtle glow to avoid overexposure
      clearcoat: 0.2,   // Optional clear coat for a light glossy effect
      clearcoatRoughness: 0.2, // Slight roughness for a realistic look
      envMapIntensity: 1,
      reflectivity: 1,
    });

    
    const plate = new THREE.Mesh(plateGeometry, plateMaterial);
    plate.rotation.y = 0; // Reset any previous Y-axis rotation
    plate.rotation.x = 0; // Ensure no X-axis rotation    
    plate.position.set(0, 0, 0); // Center the plate
    scene.add(plate);

    const fontLoader = new FontLoader();
    fontLoader.load("/fonts/Charles-WrightBold.json", (font) => {
  // Use plate style properties (thickness, height, and fontSize) dynamically
  const textGeometry = new TextGeometry(plateNumber==''?"PLATE NO":plateNumber==''?"PLATE NO":plateNumber, {
    font,
    size: 2.6, // This controls the height of the letters (Y-axis)
    height: plateStyle.material.thickness==null?0:plateStyle.material.thickness/10, // This controls the extrusion depth (Z-axis thickness)
    curveSegments: 128, // Controls curve smoothness
  });

  // Use material settings for text
  const textMaterial = new THREE.MeshStandardMaterial({
    color: 0x000000, // Color for the text
    roughness: 1, // Smoothness
    metalness: 0, // Slight reflection
  });

  // Create the text mesh with the geometry and material
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);

  // Compute the bounding box of the text geometry to center the text properly
  textGeometry.computeBoundingBox(); // Get bounding box to determine size
  const textWidth = textGeometry.boundingBox?.max.x - textGeometry.boundingBox?.min.x || 0;
  const textHeight = textGeometry.boundingBox?.max.y - textGeometry.boundingBox?.min.y || 0;


  // Adjust the position to center the text horizontally and vertically within the plate
  textMesh.position.set(
    -textWidth / 2, // Center horizontally
    -textHeight / 2.2, // Center vertically based on text height
    0.1             // Adjust the depth to place in front of the plate
  );

  // Add textMesh to the scene
  scene.add(textMesh);

  // Set text mesh in state (if necessary for updating or interactions)
  setTextMesh(textMesh);
});


    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.setClearColor(0xffffff); // White background color
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      
      // Dispose of the plate and text meshes if they exist
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    
      setTextMesh(null);
      setScene(null);
    };
    
  
  }, []); // Run only once when the component is mounted

  useEffect(() => {
    if (scene && size) {
      console.log("Updating the shape");
    
      // Create the plate geometry first
      const roundedRectShape = createRoundedRectShape(size.width, size.height, 0.5);
      const extrudeSettings = {
        depth: 0.1,
        bevelEnabled: false, // Optional: Set to true if you want bevels
        curveSegments: 256,
      };
    
      const plateGeometry = new THREE.ExtrudeGeometry(roundedRectShape, extrudeSettings);
    
      // Find the existing plate mesh
      const plateMesh = scene.children.find((child) => child instanceof THREE.Mesh) as THREE.Mesh;
      
      if (plateMesh) {
        plateMesh.geometry.dispose(); // Dispose of the old geometry
        plateMesh.geometry = plateGeometry; // Set the new geometry
         // Dispose of the old material properly
        plateMesh.material.dispose();
    
        // Create a base plate material (default color: white)
        const newPlateMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xFFFFFF, // Default color (white)
          roughness: 0.9,  // Matte finish
          metalness: 0.5,    // Non-metallic appearance
          emissive: 0xD3D3D3, // Default emissive color (light gray)
          emissiveIntensity: 0.6, // Subtle emissive glow
          clearcoat: 0.2,   // Light glossy finish
          clearcoatRoughness: 0.2, // Slight roughness for realistic look
          envMapIntensity: 1,
          reflectivity: 1,
        });
    
        // Only update color and emissive properties if the plate material is changing
        if (isRear) {
          // Set rear plate color and emissive properties
          newPlateMaterial.color.set(0xffcd29); // Yellow for rear plate
          newPlateMaterial.emissive.set(0xffcd29); // Set same color for emissive
        } else {
          // Set front plate color and emissive properties
          newPlateMaterial.color.set(0xFFFFFF); // White for front plate
          newPlateMaterial.emissive.set(0xD3D3D3); // Light gray for emissive
        }
    
        // Apply the new material to the plate mesh
        plateMesh.material = newPlateMaterial;
        
        // Scale the plate for easier viewing
        const scaleFactor = 1; // Adjust this factor as needed
        plateMesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
    
        // Remove the existing border mesh if it exists
        const existingBorderMesh = scene.children.find((child) => child.name === 'borderMesh');
        if (existingBorderMesh) {
          scene.remove(existingBorderMesh); // Remove the old border from the scene
          existingBorderMesh.geometry.dispose(); // Dispose of old geometry
          existingBorderMesh.material.dispose(); // Dispose of old material
        }
    
        // Create and add the border mesh if border material is defined
        if (border.material.thickness) {
          const borderGeometry = new THREE.ExtrudeGeometry(
            createHollowBorderShape((size.width - 0.5) * scaleFactor, (size.height - 0.5) * scaleFactor, 0.5, 0.15), {
              depth: border.material.thickness / 10, // Depth of the border
              bevelEnabled: false,
            }
          );
    
          const borderMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000, // Border color (black)
          });
    
          const borderMesh = new THREE.Mesh(borderGeometry, borderMaterial);
          borderMesh.position.set(0, 0, 0.15); // Position it slightly above the plate
          borderMesh.name = 'borderMesh'; // Set a name to easily find it later
    
          // Add the new border mesh to the scene
          scene.add(borderMesh);
        }
      }
    }
    
  
    if (textMesh && plateStyle && plateNumber) {
    
      // Dispose of the old text mesh geometry and material
      textMesh.geometry.dispose();
      if (textMesh.material) {
        if (Array.isArray(textMesh.material)) {
          textMesh.material.forEach((mat) => mat.dispose());
        } else {
          textMesh.material.dispose();
        }
      }
    
      // Dispose of old black layers
      const blackLayerMeshes = scene.children.filter(child => child.name === "blackLayerMesh");
      blackLayerMeshes.forEach(mesh => {
        mesh.geometry.dispose();
        mesh.material.dispose();
        scene.remove(mesh);
      });
    
      // Load the font and create new geometry
      const fontLoader = new FontLoader();
      // Inside the fontLoader.load callback where the text geometry is created
      fontLoader.load("/fonts/Charles-WrightBold.json", (font) => {
        if (!font) {
          console.error("Font loading failed");
          return;
        }
      
        // Inside your fontLoader.load callback:

// First, clean up any existing text meshes from square plates
const existingTextMeshes = scene.children.filter(child => 
  child.userData && (child.userData.isPlateText === true)
);
existingTextMeshes.forEach(mesh => {
  mesh.geometry.dispose();
  if (Array.isArray(mesh.material)) {
    mesh.material.forEach(mat => mat.dispose());
  } else if (mesh.material) {
    mesh.material.dispose();
  }
  scene.remove(mesh);
});

let isMotorbike = false;
let isSquarePlate = size.key.toLowerCase() === 'square'; // Check if the plate is square
      
let firstLine = '';
let secondLine = '';

// Split the text into two parts if it's a square plate
// Split the text into two parts if it's a square plate
if (isSquarePlate) {
  const words = plateNumber.split(" ");
  if (words.length > 1) {
    firstLine = words.slice(0, words.length - 1).join(" ");
    secondLine = words[words.length - 1];
  } else {
    const midPoint = Math.ceil(plateNumber.length / 2);
    firstLine = plateNumber.slice(0, midPoint);
    secondLine = plateNumber.slice(midPoint);
  }

  // Create separate TextGeometry instances for the colored text layer
  const firstLineGeometry = new TextGeometry(firstLine === '' ? "AB12" : firstLine, {
    font,
    size: 1.8,
    height: plateStyle.material.thickness ? plateStyle.material.thickness / 10 : 0,
    curveSegments: 16,
    bevelEnabled: true,
    bevelSize: 0.06,
    bevelThickness: 0.08,
  });

  const secondLineGeometry = new TextGeometry(secondLine === '' ? "XYZ" : secondLine, {
    font,
    size: 1.8,
    height: plateStyle.material.thickness ? plateStyle.material.thickness / 10 : 0,
    curveSegments: 16,
    bevelEnabled: true,
    bevelSize: 0.06,
    bevelThickness: 0.08,
  });

  // Material creation logic
  const isGelPlate = /GEL/i.test(plateStyle.name);
  const isAcrylicPlate = /ACRYLIC/i.test(plateStyle.name);
  const isNeonPlate = /NEON/i.test(plateStyle.name);
  const isSpecialPlate = isGelPlate || isAcrylicPlate || isNeonPlate;
  const hasGelColor = plateStyle.gelColors;

  const defaultBlackMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000,
    reflectivity: 1
  });

  // Material assignment logic for the colored text layer
  const textMaterial = hasGelColor || isGelPlate
    ? new THREE.MeshPhysicalMaterial({
        color: hasGelColor ? gelColor?.botton : gelColor?.top || 0x000000,
        emissive: hasGelColor ? gelColor?.botton : gelColor?.top || 0x000000,
        emissiveIntensity: 0.3,
        roughness: 0.05,
        metalness: 0.95,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        reflectivity: 1,
        bevelEnabled: true,
        bevelThickness: isGelPlate ? 0.1 : 0,
        bevelSize: isGelPlate ? 0.05 : 0,
        bevelSegments: isGelPlate ? 5 : 0,
      })
    : isSpecialPlate
    ? new THREE.MeshBasicMaterial({
        color: 0x000000,
        reflectivity: 1
      })
    : defaultBlackMaterial;

  // Create colored text meshes for each line
  const firstLineMesh = new THREE.Mesh(firstLineGeometry, textMaterial);
  const secondLineMesh = new THREE.Mesh(secondLineGeometry, textMaterial);

  firstLineMesh.userData.isPlateText = true;
  secondLineMesh.userData.isPlateText = true;

  // Compute bounding boxes for positioning
  firstLineGeometry.computeBoundingBox();
  secondLineGeometry.computeBoundingBox();

  if (firstLineGeometry.boundingBox && secondLineGeometry.boundingBox) {
    const firstLineWidth = firstLineGeometry.boundingBox.max.x - firstLineGeometry.boundingBox.min.x;
    const firstLineHeight = firstLineGeometry.boundingBox.max.y - firstLineGeometry.boundingBox.min.y;
    const secondLineWidth = secondLineGeometry.boundingBox.max.x - secondLineGeometry.boundingBox.min.x;
    const secondLineHeight = secondLineGeometry.boundingBox.max.y - secondLineGeometry.boundingBox.min.y;

    // Calculate plate dimensions
    const plateWidth = size.width * 0.85;
    const plateHeight = size.height * 0.8;

    const firstLineScaleFactor = plateWidth / firstLineWidth;
    const secondLineScaleFactor = plateWidth / secondLineWidth;
    let scaleFactor = Math.min(firstLineScaleFactor, secondLineScaleFactor);

    const spacing = 1.0;
    const totalHeight = (firstLineHeight + secondLineHeight) * scaleFactor + spacing;

    if (totalHeight > plateHeight) {
      scaleFactor = plateHeight / (firstLineHeight + secondLineHeight + spacing);
    }

    // Apply scaling to the colored text meshes
    firstLineMesh.scale.set(scaleFactor, scaleFactor, 1);
    secondLineMesh.scale.set(scaleFactor, scaleFactor, 1);

    // Position the colored text meshes
    firstLineMesh.position.set(
      -firstLineWidth * scaleFactor / 2,
      size.height * 0.1,
      0.2
    );
    secondLineMesh.position.set(
      -secondLineWidth * scaleFactor / 2,
      -size.height * 0.4,
      0.2
    );

    scene.add(firstLineMesh);
    scene.add(secondLineMesh);

    // Hide the original text mesh since we are using the two-line approach
    textMesh.visible = false;

    // --- Create Black Layers Using the Else Logic ---
    // Instead of cloning the existing geometry, we create new TextGeometries with a fixed depth (0.1)
    const firstLineBlackGeometry = new TextGeometry(firstLine === '' ? "AB12" : firstLine, {
      font,
      size: 1.8,
      depth: 0.1, // Fixed depth for the black layer
      curveSegments: 16,
      bevelEnabled: true,
      bevelSize: 0.05,
      bevelThickness: 0.06,
    });

    const secondLineBlackGeometry = new TextGeometry(secondLine === '' ? "XYZ" : secondLine, {
      font,
      size: 1.8,
      depth: 0.1, // Fixed depth for the black layer
      curveSegments: 16,
      bevelEnabled: true,
      bevelSize: 0.05,
      bevelThickness: 0.06,
    });

    const blackLayerMaterial = new THREE.MeshStandardMaterial({
      color: gelColor ? gelColor.top : 0x000000,
      metalness: 0.9,
      roughness: 0.1,
      emissive: gelColor ? gelColor.top : 0x000000,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
    });

    const firstLineBlackMesh = new THREE.Mesh(firstLineBlackGeometry, blackLayerMaterial);
    const secondLineBlackMesh = new THREE.Mesh(secondLineBlackGeometry, blackLayerMaterial);

    // Scale black layers the same as the colored text
    firstLineBlackMesh.scale.copy(firstLineMesh.scale);
    secondLineBlackMesh.scale.copy(secondLineMesh.scale);

    // Position the black layers with a z offset so they appear on top
    const blackZ = plateStyle.material.thickness
      ? plateStyle.material.thickness / 10 + 0.24
      : 0.24;
    firstLineBlackMesh.position.set(
      firstLineMesh.position.x,
      firstLineMesh.position.y,
      blackZ
    );
    secondLineBlackMesh.position.set(
      secondLineMesh.position.x,
      secondLineMesh.position.y,
      blackZ
    );

    firstLineBlackMesh.name = "blackLayerMesh";
    secondLineBlackMesh.name = "blackLayerMesh";

    scene.add(firstLineBlackMesh);
    scene.add(secondLineBlackMesh);
    // --- End Black Layers ---
  }
}
 else {
  // NON-SQUARE PLATE LOGIC - Show the regular text mesh
  // Make sure the text mesh is visible for non-square plates
  textMesh.visible = true;
  
  // Create the base colored text geometry
  const textGeometry = new TextGeometry(plateNumber === '' ? "AB12 XYZ" : plateNumber, {
    font,
    size: 2.6, // Normal font size for regular plates
    height: plateStyle.material.thickness ? plateStyle.material.thickness / 10 : 0,
    curveSegments: 16,
    bevelEnabled: true,
    bevelSize: 0.06,
    bevelThickness: 0.08,
  });

  // Your existing code for regular plate text...
  // Create the thin black layer geometry
  const blackLayerGeometry = new TextGeometry(plateNumber === '' ? "AB12 XYZ" : plateNumber, {
    font,
    size: 2.6,
    depth: 0.1,
    curveSegments: 16,
    bevelEnabled: true,
    bevelSize: 0.05,
    bevelThickness: 0.06,
  });

  // Apply letter spacing
  if (roadLegalSpacing) {
    const letterSpacing = -0.1;
    [textGeometry, blackLayerGeometry].forEach(geometry => {
      geometry.shapes && geometry.shapes.forEach((shape, index) => {
        if (index > 0) {
          const offset = new THREE.Vector3(letterSpacing, 0, 0);
          shape.translate(offset.x, offset.y, offset.z);
        }
      });
    });
  } else {
    const letterSpacing = 0.1;
    [textGeometry, blackLayerGeometry].forEach(geometry => {
      geometry.shapes && geometry.shapes.forEach((shape, index) => {
        if (index > 0) {
          const offset = new THREE.Vector3(letterSpacing, 0, 0);
          shape.translate(offset.x, offset.y, offset.z);
        }
      });
    });
  }

  const isGelPlate = /GEL/i.test(plateStyle.name);
  const isAcrylicPlate = /ACRYLIC/i.test(plateStyle.name);
  const isNeonPlate = /NEON/i.test(plateStyle.name);
  const isSpecialPlate = isGelPlate || isAcrylicPlate || isNeonPlate;
  const hasGelColor = plateStyle.gelColors;

  // Create materials and apply to text mesh
  // Your existing material logic for non-square plates...
  const defaultBlackMaterial = new THREE.MeshBasicMaterial({ 
    color: 0x000000,
    reflectivity: 1 
  });

  const textMaterial = hasGelColor || isGelPlate
    ? new THREE.MeshPhysicalMaterial({
        color: hasGelColor ? gelColor?.botton : gelColor?.top || 0x000000,
        emissive: hasGelColor ? gelColor?.botton : gelColor?.top || 0x000000,
        emissiveIntensity: 0.3,
        roughness: 0.05,
        metalness: 0.95,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        reflectivity: 1,
        bevelEnabled: true,
        bevelThickness: isGelPlate ? 0.1 : 0,
        bevelSize: isGelPlate ? 0.05 : 0,
        bevelSegments: isGelPlate ? 5 : 0,
      })
    : isSpecialPlate
    ? new THREE.MeshBasicMaterial({ 
        color: 0x000000,
        reflectivity: 1 
      })
    : defaultBlackMaterial;

  let blackLayerMesh = null;
  textMesh.geometry = textGeometry;

  // Special plate logic
  if ((isGelPlate && isAcrylicPlate) || (isAcrylicPlate && isNeonPlate) || (isGelPlate && isNeonPlate)) {
    textMesh.material = textMaterial;

    blackLayerMesh = new THREE.Mesh(
      blackLayerGeometry,
      new THREE.MeshStandardMaterial({
        color: gelColor ? gelColor.top : 0x000000,
        metalness: 0.9,
        roughness: 0.1,
        emissive: gelColor ? gelColor.top : 0x000000,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
      })
    );
    blackLayerMesh.name = "blackLayerMesh";
  } else if (isAcrylicPlate) {
    textMesh.geometry = textGeometry;
    textMesh.material = textMaterial;
  }

  if (!isSpecialPlate || !hasGelColor) {
    textMesh.material = textMaterial;
  }

  // Your existing centering and scaling logic
  textGeometry.computeBoundingBox();
  if (textGeometry.boundingBox) {
    const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x || 0;
    const textHeight = textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y || 0;

    // Plate dimensions
    const plateWidth = size.width * 1;
    const plateHeight = size.height * 1;

    let scaleFactor = 1;

    // Scale down text if it exceeds plate width
    if (textWidth > plateWidth) {
      scaleFactor = plateWidth / textWidth;
    }

    // Further scale down if text height exceeds plate height
    if (textHeight * scaleFactor > plateHeight) {
      scaleFactor = plateHeight / textHeight;
    }

    // Apply scaling to text and black layer
    textMesh.scale.set(scaleFactor, scaleFactor, 1);
    if (blackLayerMesh) {
      blackLayerMesh.scale.set(scaleFactor, scaleFactor, 1);
    }

    // Center the text and black layer
    const offsetX = -(textWidth * scaleFactor) / 2;
    const offsetY = -(textHeight * scaleFactor) / 2.2;
    textMesh.position.set(offsetX, offsetY, 0.2);
    if (blackLayerMesh) {
      blackLayerMesh.position.set(offsetX, offsetY, plateStyle.material.thickness ? plateStyle.material.thickness / 10 + 0.24 : 0.24);
      scene.add(blackLayerMesh);
    }
  }
}
      });
    };
    
  }, [scene, size, plateNumber, plateStyle, textMesh, border, isRear,gelColor,roadLegalSpacing]); // Add isRear to dependency array
  

  return <div ref={mountRef} style={{ backgroundColor:'white',width: "100%", height: "100%" }} />;
};

export default ThreeDRectangle;
