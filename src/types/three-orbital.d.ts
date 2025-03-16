// src/types/three-orbitcontrols.d.ts
declare module 'three/examples/jsm/controls/OrbitControls' {
    import { Camera, EventDispatcher, Object3D } from 'three';
  
    export class OrbitControls extends EventDispatcher {
      constructor(object: Camera, domElement: HTMLElement);
      object: Camera;
      domElement: HTMLElement;
      enabled: boolean;
      target: { x: number; y: number; z: number };
      update(): void;
      dispose(): void;
    }
  }
  

  declare module "three/examples/jsm/loaders/FontLoader" {
    import { Loader } from "three";
  
    export class FontLoader extends Loader {
      load(
        url: string,
        onLoad?: (responseFont: any) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): any;
    }
  }
  