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
  isRear:boolean,
  size:PlateSize,
  border:Border,
  frontGelColor:GelColors|null,
  rearGelColor:GelColors|null,
}

const ThreeDRectangle = ({ plateNumber="YOUR PLATE", isRear,plateStyle,size,border,frontGelColor,rearGelColor }: PlateProps) => {
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
    camera.position.set(0, 0, 11); // Camera positioned to view the plate and text

    const renderer = new THREE.WebGLRenderer({ antialias: true });  // Enable antialiasing
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x202020); // Dark background color
    
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
    height: plateStyle.material.thickness==null?0:plateStyle.material.thickness/20, // This controls the extrusion depth (Z-axis thickness)
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
              depth: border.material.thickness / 20, // Depth of the border
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
      fontLoader.load("/fonts/Charles-WrightBold.json", (font) => {
        if (!font) {
          console.error("Font loading failed");
          return;
        }

        let isMotorbike=false;

        // Check if the plateStyle name contains "MotorBike"
        if (plateStyle.name.toLowerCase().includes("motorbike")) {
          // Split the text on space, or in half if there's no space

          isMotorbike=true;
          const words = plateNumber.split(" ");
          let firstLine, secondLine;

          if (words.length > 1) {
            // Use the first two words if there are multiple
            firstLine = words.slice(0, words.length - 1).join(" ");
            secondLine = words[words.length - 1];
          } else {
            // Split the single word into two halves
            const midPoint = Math.ceil(plateNumber.length / 2);
            firstLine = plateNumber.slice(0, midPoint);
            secondLine = plateNumber.slice(midPoint);
          }

          // Combine the text with a newline character for vertical alignment
          plateNumber = `${firstLine}\n${secondLine}`;

        }


        // Create the base colored text geometry
        const textGeometry = new TextGeometry(plateNumber==''?"AB12 XYZ":plateNumber, {
          font,
          size: 2.6,
          depth: plateStyle.material.thickness ? plateStyle.material.thickness / 20 : 0,
          curveSegments: 16,
          bevelEnabled: true,
          bevelSize: 0.05,
          bevelThickness:0.05,
        });

        // Create the thin black layer geometry
        const blackLayerGeometry = new TextGeometry(plateNumber==''?"AB12 XYZ":plateNumber, {
          font,
          size: 2.6,
          depth: 0.1, // Very thin layer
          curveSegments: 16,
          bevelEnabled: true,
          bevelSize: 0.05,
          bevelThickness:0.05,
        });

        // Check if the plate style is GEL
        const isGelPlate = /GEL/i.test(plateStyle.name);
        // Handle Acrylic plates with a black layer
        const isAcrylicPlate = /ACRYLIC/i.test(plateStyle.name);
        const isNeonPlate = /NEON/i.test(plateStyle.name);

        // Assign material for GEL or default plates
        const textMaterial = isGelPlate
        ? new THREE.MeshPhysicalMaterial({
            color: frontGelColor?frontGelColor.botton:0x000000, // Black base color
            emissive: frontGelColor?frontGelColor.botton:0x000000, // Subtle white glow
            emissiveIntensity: 0.3, // Moderate glow
            roughness: 0.05, // Extremely smooth surface
            metalness: 0.95, // Highly reflective
            clearcoat: 1, // Full gloss
            clearcoatRoughness: 0.05, // Almost no roughness for the clearcoat
            reflectivity: 1, // Maximum reflectivity for a polished look
          })
        : new THREE.MeshBasicMaterial({ color: frontGelColor?frontGelColor.botton:0x000000,reflectivity: 1, });      

        let blackLayerMesh: THREE.Mesh | null = null;

        // Show only the black layer if both isGel and isAcrylic are true
        if ((isGelPlate && isAcrylicPlate) || (isAcrylicPlate&&isNeonPlate)) {
          // Only show the text geometry and the black text layer
          textMesh.geometry = textGeometry; // Ensure the correct geometry is set
          textMesh.material = textMaterial; // Apply material as per gel plate

          // Show the black layer mesh as well if needed
          blackLayerMesh = new THREE.Mesh(
            blackLayerGeometry,
            new THREE.MeshStandardMaterial({
              color: frontGelColor?frontGelColor.top:0x000000, // Apply color if available otherwise bkacj
              metalness: 0.9, // High reflectivity
              roughness: 0.1, // Smooth surface for reflection
              emissive: frontGelColor?frontGelColor.top:0x000000, // No glow, keeps it dark
              clearcoat: 1, // Glossy finish
              clearcoatRoughness: 0.05, // Slight roughness for realistic highlights
            })
          );
            // blackLayerMesh.position.set(0, 0, plateStyle.material.thickness ? plateStyle.material.thickness / 20 + 0.1 : 0.1);
          blackLayerMesh.name = "blackLayerMesh";
        } else if (isAcrylicPlate) {
          // If only Acrylic plate is true, show only the text geometry (no black layer)
          textMesh.geometry = textGeometry; // Set geometry for acrylic plate
          textMesh.material = textMaterial; // Apply the material for acrylic plate
        }

        // Centering and scaling logic
        textGeometry.computeBoundingBox();
        if (textGeometry.boundingBox) {
          const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x || 0;
          const textHeight = textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y || 0;


          // Plate dimensions
          const plateWidth = size.width * 0.7; // Adjust the multiplier for tighter margins
          const plateHeight = size.height * 0.7;

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
          const offsetY = isMotorbike?(textHeight * scaleFactor) / 5.0:-(textHeight * scaleFactor) / 2.2; // Adjust for vertical alignment
          textMesh.position.set(offsetX, offsetY, 0.2);
          if (blackLayerMesh) {
            blackLayerMesh.position.set(offsetX, offsetY, plateStyle.material.thickness ? plateStyle.material.thickness / 20 + 0.24 : 0.24);
            scene.add(blackLayerMesh); // Add black layer to the scene
          }
        } else {
          console.warn("Bounding box calculation failed for text geometry.");
        }

      });
    };
    
  }, [scene, size, plateNumber, plateStyle, textMesh, border, isRear,frontGelColor,rearGelColor]); // Add isRear to dependency array
  

  return <div ref={mountRef} style={{ backgroundColor:'white',width: "100%", height: "100%" }} />;
};

export default ThreeDRectangle;
