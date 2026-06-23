"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 450;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 15;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle texture helper (glowing circular particle)
    const createCircleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.2, "rgba(20, 184, 166, 0.8)"); // Teal/Cyan core
      gradient.addColorStop(0.5, "rgba(249, 115, 22, 0.3)"); // Orange glow
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createCircleTexture();

    // Geometry creation
    const particleCount = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const randomSpeeds = new Float32Array(particleCount);

    const colorTeal = new THREE.Color("#0d9488"); // Teal
    const colorOrange = new THREE.Color("#ea580c"); // Dark orange
    const colorPurple = new THREE.Color("#4f46e5"); // Indigo

    // Distribute particles in a sphere shell with some noise
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      // Radius of the sphere
      const r = 5.2 + (Math.random() - 0.5) * 1.5;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      randomSpeeds[i] = 0.5 + Math.random() * 1.5;

      // Interpolate colors based on coordinates to make a nebula gradient
      const mixRatio = (x + y + z) / 10 + 0.5;
      let finalColor;
      if (mixRatio < 0.4) {
        finalColor = colorTeal.clone().lerp(colorPurple, mixRatio * 2.5);
      } else {
        finalColor = colorPurple.clone().lerp(colorOrange, (mixRatio - 0.4) * 1.6);
      }

      colors[i * 3] = finalColor.r;
      colors[i * 3 + 1] = finalColor.g;
      colors[i * 3 + 2] = finalColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Material
    const material = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      alphaTest: 0.01,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    // Points object
    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Mouse movement state
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    
    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      // Normalize coordinate system from -1 to 1
      mouse.targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Clock for time reference
    const clock = new THREE.Clock();

    // Render loop
    let animationFrameId;
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Interpolate mouse coordinates for smooth lag-follow (inertia)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Subtle rotation of the whole sphere
      particleSystem.rotation.y = elapsedTime * 0.08;
      particleSystem.rotation.x = elapsedTime * 0.04;

      // Parallax offset based on mouse position
      particleSystem.position.x = mouse.x * 2.2;
      particleSystem.position.y = mouse.y * 2.2;

      // Morph particle positions dynamically
      const positionAttr = geometry.attributes.position;
      const posArray = positionAttr.array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const speed = randomSpeeds[i];
        
        // Original spherical coordinate
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];

        // Apply a dynamic wave offset using sine/cosine
        const wave = Math.sin(elapsedTime * 1.5 * speed + ox * 0.5) * 0.12;
        const waveY = Math.cos(elapsedTime * 1.2 * speed + oy * 0.5) * 0.12;
        const waveZ = Math.sin(elapsedTime * 1.8 * speed + oz * 0.5) * 0.12;

        // When mouse is active, distort particles slightly towards mouse influence
        const mouseDistanceX = mouse.x * 4.5 - ox;
        const mouseDistanceY = mouse.y * 4.5 - oy;
        const dist = Math.sqrt(mouseDistanceX * mouseDistanceX + mouseDistanceY * mouseDistanceY);
        
        let attraction = 0;
        if (dist < 5.0) {
          attraction = (5.0 - dist) * 0.08;
        }

        posArray[i3] = ox + wave + (mouseDistanceX / (dist + 0.1)) * attraction;
        posArray[i3 + 1] = oy + waveY + (mouseDistanceY / (dist + 0.1)) * attraction;
        posArray[i3 + 2] = oz + waveZ;
      }

      positionAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || 450;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative h-[320px] w-full cursor-grab active:cursor-grabbing md:h-[450px]"
    />
  );
}
