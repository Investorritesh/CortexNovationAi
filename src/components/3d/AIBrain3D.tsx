"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "./AIBrain3D.css";

export interface AIBrain3DProps {
  className?: string;
  showCaption?: boolean;
  interactive?: boolean;
  particleCount?: number;
  imageSrc?: string;
}

export function AIBrain3D({
  className = "",
  showCaption = true,
  interactive = true,
  particleCount = 280,
  imageSrc = "/images/ai-brain-neural.png",
}: AIBrain3DProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // 1. Accessibility Check
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const prefersReducedMotion = motionQuery.matches;

    // 2. WebGL Support Verification
    try {
      const testCanvas = document.createElement("canvas");
      const gl =
        testCanvas.getContext("webgl2") ||
        testCanvas.getContext("webgl") ||
        testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch {
      setWebGLSupported(false);
      return;
    }

    let disposed = false;
    let frameId = 0;
    let isVisible = true;

    // 3. Scene Setup with Deep Dark Navy Background
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#05091b");
    scene.fog = new THREE.FogExp2("#05091b", 0.032);

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.1, 7.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.domElement.className = "ai-brain-canvas";
    renderer.domElement.setAttribute("aria-label", "Interactive Animated 3D Neural AI Brain");
    host.appendChild(renderer.domElement);

    // Root Group for Transformations
    const root = new THREE.Group();
    scene.add(root);

    // 4. Dynamic Lighting System
    const ambientLight = new THREE.AmbientLight("#1e293b", 1.8);
    scene.add(ambientLight);

    // Cyan Key Light (Left Hemisphere)
    const cyanLight = new THREE.PointLight("#00e5ff", 28, 16);
    cyanLight.position.set(-3.2, 1.5, 2.5);
    scene.add(cyanLight);

    // Magenta Fill Light (Right Hemisphere)
    const magentaLight = new THREE.PointLight("#f000ff", 26, 16);
    magentaLight.position.set(3.2, 0.8, 2.5);
    scene.add(magentaLight);

    // Backlit Rim Halo
    const backGlowLight = new THREE.PointLight("#38bdf8", 18, 18);
    backGlowLight.position.set(0, 0.2, -2.5);
    scene.add(backGlowLight);

    // 5. Brain Container Pivot
    const brainContainer = new THREE.Group();
    brainContainer.position.set(0, 0.05, 0);
    root.add(brainContainer);

    // 6. Texture Loader for the User's Transparent Brain Asset
    const textureLoader = new THREE.TextureLoader();
    let loadedTexture: THREE.Texture | null = null;
    let brainMesh: THREE.Mesh | null = null;
    let brainGlowMesh: THREE.Mesh | null = null;

    textureLoader.load(imageSrc, (texture) => {
      if (disposed) return;
      loadedTexture = texture;
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;

      // Aspect ratio of the 1024x693 image
      const aspect = 1024 / 693;
      const height = 3.3;
      const width = height * aspect; // ~4.88

      // Convex 3D curved geometry giving genuine volumetric depth
      const planeGeo = new THREE.PlaneGeometry(width, height, 48, 36);
      const posAttr = planeGeo.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        const x = posAttr.getX(i);
        const y = posAttr.getY(i);
        const distFromCenter = Math.sqrt((x * 0.7) ** 2 + (y * 1.1) ** 2);
        // Convex spherical curvature
        const zDisplacement = Math.max(0, 0.42 * (1 - (distFromCenter / 2.2) ** 2));
        posAttr.setZ(i, zDisplacement);
      }
      planeGeo.computeVertexNormals();

      // Main Brain Material with PBR reactivity
      const brainMat = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.02,
        roughness: 0.25,
        metalness: 0.15,
        side: THREE.DoubleSide,
      });

      brainMesh = new THREE.Mesh(planeGeo, brainMat);
      brainContainer.add(brainMesh);

      // Secondary Luminous Halo Layer with Additive Blending
      const glowMat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      });

      const glowGeo = planeGeo.clone();
      brainGlowMesh = new THREE.Mesh(glowGeo, glowMat);
      brainGlowMesh.scale.setScalar(1.02);
      brainGlowMesh.position.z = -0.04;
      brainContainer.add(brainGlowMesh);
    });

    // 7. Real 3D Orbital Rings Wrapping Around the Brain
    const orbitalGroup = new THREE.Group();
    root.add(orbitalGroup);

    // Ring 1: Primary Equatorial Tilted Ring (Cyan/Blue)
    const ring1Geo = new THREE.TorusGeometry(2.7, 0.012, 16, 160);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: "#00e5ff",
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2.4;
    ring1.rotation.y = 0.18;
    ring1.scale.set(1.0, 0.48, 1.0);
    orbitalGroup.add(ring1);

    // Ring 2: Secondary Polar Inclined Ring (Magenta/Purple)
    const ring2Geo = new THREE.TorusGeometry(2.85, 0.009, 16, 160);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: "#f000ff",
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 2.8;
    ring2.rotation.y = -0.35;
    ring2.rotation.z = 0.25;
    ring2.scale.set(1.05, 0.52, 1.05);
    orbitalGroup.add(ring2);

    // Ring 3: Outer Accent Floating Ring
    const ring3Geo = new THREE.TorusGeometry(3.05, 0.006, 16, 160);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: "#818cf8",
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = Math.PI / 2.2;
    ring3.rotation.y = -0.15;
    ring3.scale.set(1.0, 0.42, 1.0);
    orbitalGroup.add(ring3);

    // Orbiting Satellite Energy Beads
    const satelliteCount = 7;
    const satelliteGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const satMatCyan = new THREE.MeshBasicMaterial({ color: "#22d3ee" });
    const satMatPurple = new THREE.MeshBasicMaterial({ color: "#ff4df8" });
    const satMatWhite = new THREE.MeshBasicMaterial({ color: "#ffffff" });

    const satellites: Array<{
      mesh: THREE.Mesh;
      radius: number;
      speed: number;
      angle: number;
      tiltX: number;
      tiltY: number;
      scaleY: number;
    }> = [];

    for (let i = 0; i < satelliteCount; i++) {
      const mat = i % 3 === 0 ? satMatWhite : i % 2 === 0 ? satMatCyan : satMatPurple;
      const mesh = new THREE.Mesh(satelliteGeo, mat);
      const isRing1 = i % 2 === 0;
      satellites.push({
        mesh,
        radius: isRing1 ? 2.7 : 2.85,
        speed: (0.45 + i * 0.12) * (i % 2 === 0 ? 1 : -1),
        angle: (i / satelliteCount) * Math.PI * 2,
        tiltX: isRing1 ? Math.PI / 2.4 : Math.PI / 2.8,
        tiltY: isRing1 ? 0.18 : -0.35,
        scaleY: isRing1 ? 0.48 : 0.52,
      });
      orbitalGroup.add(mesh);
    }

    // 8. Pulsing Neural Nodes Overlay across the Cerebral Surface
    const nodeCoords = [
      // Left / Frontal Lobe Nodes (Cyan/Blue glow)
      { x: -1.45, y: 0.25, z: 0.28, color: "#22d3ee" },
      { x: -1.25, y: 0.75, z: 0.32, color: "#38bdf8" },
      { x: -0.85, y: 1.15, z: 0.36, color: "#67e8f9" },
      { x: -0.65, y: 0.55, z: 0.42, color: "#22d3ee" },
      { x: -1.15, y: -0.15, z: 0.30, color: "#00f0ff" },
      { x: -0.75, y: -0.35, z: 0.38, color: "#38bdf8" },
      { x: -0.35, y: 0.85, z: 0.44, color: "#e0f2fe" },
      // Central Fissure Bridge Nodes
      { x: -0.08, y: 1.18, z: 0.45, color: "#ffffff" },
      { x: 0.05, y: 0.65, z: 0.46, color: "#a5f3fc" },
      { x: -0.05, y: 0.15, z: 0.44, color: "#ffffff" },
      { x: 0.08, y: -0.35, z: 0.40, color: "#c084fc" },
      // Right / Parietal & Occipital Lobe Nodes (Magenta/Purple glow)
      { x: 0.45, y: 1.05, z: 0.42, color: "#e879f9" },
      { x: 0.85, y: 0.95, z: 0.38, color: "#f43f5e" },
      { x: 1.35, y: 0.55, z: 0.32, color: "#ff3df0" },
      { x: 1.45, y: 0.15, z: 0.28, color: "#d946ef" },
      { x: 0.65, y: 0.45, z: 0.44, color: "#f0abfc" },
      { x: 1.15, y: -0.15, z: 0.34, color: "#ec4899" },
      { x: 0.75, y: -0.45, z: 0.38, color: "#c084fc" }, // Cerebellum
      { x: 0.25, y: -1.05, z: 0.32, color: "#818cf8" }, // Brainstem
    ];

    const nodeGroup = new THREE.Group();
    brainContainer.add(nodeGroup);

    const glowingNodes: Array<{
      mesh: THREE.Mesh;
      baseScale: number;
      pulseSpeed: number;
      pulseOffset: number;
    }> = [];

    const nodeSphereGeo = new THREE.SphereGeometry(0.042, 10, 10);
    nodeCoords.forEach((coord, i) => {
      const nodeMat = new THREE.MeshBasicMaterial({
        color: coord.color,
        transparent: true,
        opacity: 0.92,
      });
      const mesh = new THREE.Mesh(nodeSphereGeo, nodeMat);
      mesh.position.set(coord.x, coord.y, coord.z);
      nodeGroup.add(mesh);

      glowingNodes.push({
        mesh,
        baseScale: 1.0,
        pulseSpeed: 2.2 + (i % 5) * 0.4,
        pulseOffset: i * 0.35,
      });
    });

    // 9. Ambient Deep Space Neural Dust Particles
    const safeCount = Math.max(100, Math.min(particleCount, 800));
    const starPositions = new Float32Array(safeCount * 3);
    const starColors = new Float32Array(safeCount * 3);
    for (let i = 0; i < safeCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 16;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1.5;
      const c = new THREE.Color(Math.random() > 0.5 ? "#22d3ee" : "#c084fc");
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starColors, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.024,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // 10. Subtle Interactive Cursor Parallax (Locked in Ideal Position)
    let pointerX = 0;
    let pointerY = 0;

    const onPointerMove = (event: PointerEvent) => {
      if (!interactive) return;
      const rect = renderer.domElement.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const onPointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
    };

    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerleave", onPointerLeave);

    // 10. Responsive Viewport Handler: Perfect Fit on Desktop, Tablet, and Mobile
    const resize = () => {
      if (!host || disposed) return;
      const width = Math.max(1, host.clientWidth);
      const height = Math.max(1, host.clientHeight);
      camera.aspect = width / height;

      if (width < 640) {
        // Mobile viewport: increase camera distance so wide brain + orbital rings fit within narrow screen
        camera.position.z = 9.4;
        camera.position.y = 0.12;
      } else if (width < 1024) {
        // Tablet viewport
        camera.position.z = 7.9;
        camera.position.y = 0.10;
      } else {
        // Desktop viewport
        camera.position.z = 7.2;
        camera.position.y = 0.10;
      }
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, true);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    // 11. IntersectionObserver & Visibility: Generous margin so it never freezes
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          isVisible = entry.isIntersecting;
          if (entry.isIntersecting) {
            renderer.render(scene, camera);
          }
        }
      },
      { rootMargin: "300px 0px 300px 0px", threshold: 0 }
    );
    visibilityObserver.observe(host);

    const onVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) renderer.render(scene, camera);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // 13. High-Performance Animation Render Loop
    const startTime = performance.now();
    let lastTime = startTime;

    const animate = () => {
      if (disposed) return;
      frameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const now = performance.now();
      const delta = (now - lastTime) * 0.001;
      lastTime = now;
      const t = (now - startTime) * 0.001;

      if (!prefersReducedMotion) {
        // Subtle organic idle breathing and gentle micro-parallax (Locked in ideal hero orientation)
        const targetRotY = pointerX * 0.08 + Math.sin(t * 0.7) * 0.035;
        const targetRotX = -pointerY * 0.06 + Math.sin(t * 0.9) * 0.02;
        brainContainer.rotation.y += (targetRotY - brainContainer.rotation.y) * 0.04;
        brainContainer.rotation.x += (targetRotX - brainContainer.rotation.x) * 0.04;

        // Floating levitation oscillation
        brainContainer.position.y = 0.05 + Math.sin(t * 1.3) * 0.09;

        // Subtle biological cognitive heartbeat scale
        const breathScale = 1.0 + Math.sin(t * 2.0) * 0.012;
        brainContainer.scale.set(breathScale, breathScale, breathScale);

        // Pulsing glow layer opacity
        if (brainGlowMesh) {
          (brainGlowMesh.material as THREE.MeshBasicMaterial).opacity =
            0.35 + Math.sin(t * 2.5) * 0.15;
        }

        // Animate Orbital Rings
        ring1.rotation.z += 0.004;
        ring2.rotation.z -= 0.006;
        ring3.rotation.z += 0.002;

        // Animate Orbiting Satellites along the rings
        satellites.forEach((sat) => {
          sat.angle += sat.speed * delta;
          const cosA = Math.cos(sat.angle) * sat.radius;
          const sinA = Math.sin(sat.angle) * sat.radius * sat.scaleY;

          // Compute 3D position rotated by ring tilts
          const v = new THREE.Vector3(cosA, sinA, 0);
          v.applyAxisAngle(new THREE.Vector3(1, 0, 0), sat.tiltX);
          v.applyAxisAngle(new THREE.Vector3(0, 1, 0), sat.tiltY);
          sat.mesh.position.copy(v);
        });

        // Pulsing Neural Hub Nodes
        glowingNodes.forEach((node) => {
          const s = 1.0 + Math.sin(t * node.pulseSpeed + node.pulseOffset) * 0.35;
          node.mesh.scale.set(s, s, s);
        });

        // Dynamic light pulsing
        cyanLight.intensity = 26 + Math.sin(t * 1.8) * 4;
        magentaLight.intensity = 24 + Math.cos(t * 1.5) * 4;
        backGlowLight.intensity = 16 + Math.sin(t * 2.2) * 3;

        // Stars slow background drift
        stars.rotation.y = t * 0.004;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 14. Teardown & Clean Disposal
    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);

      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerleave", onPointerLeave);

      scene.traverse((obj) => {
        const item = obj as THREE.Mesh;
        if (item.geometry) item.geometry.dispose();
        if (item.material) {
          const mats = Array.isArray(item.material) ? item.material : [item.material];
          mats.forEach((mat) => mat.dispose());
        }
      });

      loadedTexture?.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === host) {
        host.removeChild(renderer.domElement);
      }
    };
  }, [interactive, particleCount, imageSrc]);

  if (!webGLSupported) {
    return (
      <div className={`ai-brain-scene flex items-center justify-center ${className}`}>
        <img
          src={imageSrc}
          alt="CortexNovation AI Neural Brain"
          className="w-4/5 max-w-[420px] object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.5)] animate-pulse"
        />
      </div>
    );
  }

  return (
    <div className={`ai-brain-scene ${className}`} ref={hostRef}>
      {showCaption && (
        <div className="ai-brain-caption">
          <span className="ai-brain-caption__dot" />
          <span>NEURAL NETWORK • ACTIVE</span>
        </div>
      )}
    </div>
  );
}
