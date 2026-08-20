"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      52,
      parent.clientWidth / parent.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(parent.clientWidth, parent.clientHeight);

    const group = new THREE.Group();
    scene.add(group);

    // Dynamic colors for dark & light theme
    const getThemeColors = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      return {
        accent: isLight ? new THREE.Color(0x0e7c72) : new THREE.Color(0x4fd1c5),
        accent2: isLight ? new THREE.Color(0xc85a28) : new THREE.Color(0xff8a5b),
        edgeOpacity: isLight ? 0.22 : 0.16,
        dustOpacity: isLight ? 0.4 : 0.5,
      };
    };

    let colors = getThemeColors();

    // Hub nodes
    const HUB_COUNT = 18;
    const hubs = [];
    for (let i = 0; i < HUB_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / HUB_COUNT);
      const theta = Math.sqrt(HUB_COUNT * Math.PI) * phi;
      const radius = 4.2 + Math.random() * 0.7;
      const pos = new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      );
      hubs.push(pos);
    }

    const nodeGeo = new THREE.SphereGeometry(0.065, 12, 12);
    const nodeMeshes = [];
    hubs.forEach((pos, i) => {
      const isAlt = i % 4 === 0;
      const mat = new THREE.MeshBasicMaterial({
        color: isAlt ? colors.accent2 : colors.accent,
        transparent: true,
        opacity: 0.9,
      });
      const mesh = new THREE.Mesh(nodeGeo, mat);
      mesh.position.copy(pos);
      mesh.userData = { isAlt };
      nodeMeshes.push(mesh);
      group.add(mesh);
    });

    // Edges
    const edgePositions = [];
    hubs.forEach((a, i) => {
      const dists = hubs
        .map((b, j) => ({ j, d: a.distanceTo(b) }))
        .filter((o) => o.j !== i)
        .sort((x, y) => x.d - y.d);
      for (let k = 0; k < 2; k++) {
        const b = hubs[dists[k].j];
        edgePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
      }
    });

    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(edgePositions, 3)
    );
    const edgeMat = new THREE.LineBasicMaterial({
      color: colors.accent,
      transparent: true,
      opacity: colors.edgeOpacity,
    });
    const edges = new THREE.LineSegments(edgeGeo, edgeMat);
    group.add(edges);

    // Orbiting Satellite Ring of Skill Badges
    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);

    const skills = [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "GraphQL",
      "TypeScript",
      "Gemini AI",
    ];

    const orbitRadius = 4.8;
    const badgeMeshes = [];

    skills.forEach((skill, idx) => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 72;
      const ctx = canvas.getContext("2d");
      
      // Draw badge pill
      ctx.fillStyle = "rgba(18, 24, 31, 0.75)";
      ctx.strokeStyle = "rgba(79, 209, 197, 0.4)";
      ctx.lineWidth = 2;
      ctx.roundRect(4, 4, 248, 64, 32);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#4FD1C5";
      ctx.font = "bold 26px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(skill, 128, 36);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.9,
      });

      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(1.4, 0.4, 1);
      
      const angle = (idx / skills.length) * Math.PI * 2;
      sprite.position.set(
        Math.cos(angle) * orbitRadius,
        Math.sin(angle) * 0.6,
        Math.sin(angle) * orbitRadius
      );

      orbitGroup.add(sprite);
      badgeMeshes.push({ sprite, angle, texture, canvas, skill });
    });

    // Ambient dust particles
    const DUST = 220;
    const dustPositions = new Float32Array(DUST * 3);
    for (let d = 0; d < DUST; d++) {
      dustPositions[d * 3] = (Math.random() - 0.5) * 16;
      dustPositions[d * 3 + 1] = (Math.random() - 0.5) * 16;
      dustPositions[d * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(dustPositions, 3)
    );
    const dustMat = new THREE.PointsMaterial({
      color: colors.accent,
      size: 0.035,
      transparent: true,
      opacity: colors.dustOpacity,
      sizeAttenuation: true,
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);

    let mouseX = 0,
      mouseY = 0,
      targetRotX = 0,
      targetRotY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Listen to theme changes to cross-fade 3D colors
    const observer = new MutationObserver(() => {
      colors = getThemeColors();
      nodeMeshes.forEach((mesh) => {
        mesh.material.color.copy(mesh.userData.isAlt ? colors.accent2 : colors.accent);
      });
      edgeMat.color.copy(colors.accent);
      edgeMat.opacity = colors.edgeOpacity;
      dustMat.color.copy(colors.accent);
      dustMat.opacity = colors.dustOpacity;
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const handleResize = () => {
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      targetRotY += (mouseX * 0.6 - targetRotY) * 0.03;
      targetRotX += (mouseY * 0.35 - targetRotX) * 0.03;
      group.rotation.y = t * 0.05 + targetRotY;
      group.rotation.x = targetRotX;
      dust.rotation.y = t * 0.015;

      // Orbiting satellites rotation & positions
      const orbitSpeed = t * 0.15;
      badgeMeshes.forEach((item) => {
        const curAngle = item.angle + orbitSpeed;
        item.sprite.position.x = Math.cos(curAngle) * orbitRadius;
        item.sprite.position.z = Math.sin(curAngle) * orbitRadius;
        item.sprite.position.y = Math.sin(curAngle * 2) * 0.5;
      });

      renderer.render(scene, camera);
    };

    handleResize();

    if (reduceMotion) {
      renderer.render(scene, camera);
    } else {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      nodeGeo.dispose();
      edgeGeo.dispose();
      edgeMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
      badgeMeshes.forEach((item) => {
        item.texture.dispose();
        item.sprite.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-90 transition-opacity duration-1000"
    />
  );
}
