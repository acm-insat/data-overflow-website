"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const FluidBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Simplified ThreeJS setup for blue fog/clouds
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x02040a, 0.002);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000,
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create Cloud Particles (Blue/Cyan/Purple)
    const geometry = new THREE.PlaneGeometry(500, 500);
    const textureLoader = new THREE.TextureLoader();
    // Use a smoke texture asset in public/
    const smokeTexture = textureLoader.load(
      "https://raw.githubusercontent.com/marcobiedermann/playground/master/three.js/smoke-particles/images/smoke.png",
    );

    const material = new THREE.MeshLambertMaterial({
      map: smokeTexture,
      transparent: true,
      opacity: 0.6,
      color: 0x22d3ee, // Brand Primary
    });

    const particles: THREE.Mesh[] = [];

    for (let i = 0; i < 25; i++) {
      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(
        Math.random() * 800 - 400,
        Math.random() * 500 - 250,
        Math.random() * 1000 - 100,
      );
      particle.rotation.z = Math.random() * 360;
      scene.add(particle);
      particles.push(particle);
    }

    // Lights for the "Glow"
    const ambient = new THREE.AmbientLight(0x555555);
    scene.add(ambient);
    const directionalLight = new THREE.DirectionalLight(0xff8b5c, 1);
    directionalLight.position.set(0, 0, 1);
    scene.add(directionalLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 50, 450, 1.7);
    blueLight.position.set(200, 300, 100);
    scene.add(blueLight);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.forEach((p) => {
        p.rotation.z -= 0.002;
      });
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Cleanup logic
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-[-1] opacity-60" />;
};
