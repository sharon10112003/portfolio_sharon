import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Layers, RotateCw, Eye, EyeOff, Sparkles, Sliders } from 'lucide-react';

interface ThreeSceneProps {
  isHeroBackground?: boolean;
}

export function ThreeScene({ isHeroBackground = false }: ThreeSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTheme, setActiveTheme] = useState<'emerald' | 'cyan' | 'gold'>('emerald');
  const [rotationSpeed, setRotationSpeed] = useState<number>(1);
  const [isExploded, setIsExploded] = useState<boolean>(false);

  // Mutable refs for render loop
  const sceneStateRef = useRef({
    rotationSpeed: 1,
    explodedFactor: 0,
    targetExploded: 0,
    accentColor: new THREE.Color(0x10b981),
  });

  useEffect(() => {
    sceneStateRef.current.rotationSpeed = rotationSpeed;
  }, [rotationSpeed]);

  useEffect(() => {
    sceneStateRef.current.targetExploded = isExploded ? 1 : 0;
  }, [isExploded]);

  useEffect(() => {
    const colors = {
      emerald: 0x10b981,
      cyan: 0x06b6d4,
      gold: 0xf59e0b,
    };
    sceneStateRef.current.accentColor.setHex(colors[activeTheme]);
  }, [activeTheme]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Software WebGL Guard
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    // 2. Renderer setup
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 450;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 3. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090a0f, 0.04);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 5.5);
    camera.lookAt(0, 0.3, 0);

    // 4. Studio Environment Reflection via RoomEnvironment
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 5. Lighting Setup
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 6, 4);
    keyLight.castShadow = !isSoftwareGl;
    if (keyLight.castShadow) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    const hemiLight = new THREE.HemisphereLight(0x06b6d4, 0x090a0f, 1.2);
    scene.add(hemiLight);

    const rimLight = new THREE.PointLight(0x10b981, 3, 10);
    rimLight.position.set(-4, 2, -3);
    scene.add(rimLight);

    // 6. Assemble Composite 8-Part Procedural Model (THREE.Group)
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Part 1: Ground Pedestal Base (Plinth)
    const baseGeo = new THREE.CylinderGeometry(1.6, 1.8, 0.18, 32);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.3,
      metalness: 0.85,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -0.8;
    baseMesh.receiveShadow = !isSoftwareGl;
    rootGroup.add(baseMesh);

    // Part 2: Radial Contact Shadow Disc
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const ctx = shadowCanvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(64, 64, 10, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
    gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(3.6, 3.6);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
      opacity: 0.65,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -0.89;
    rootGroup.add(shadowMesh);

    // Part 3: Inner Quantum Computing Node (Central Octahedron)
    const coreGeo = new THREE.OctahedronGeometry(0.55, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.15,
      metalness: 0.9,
      emissive: 0x064e3b,
      emissiveIntensity: 0.6,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.y = 0.2;
    rootGroup.add(coreMesh);

    // Part 4: Inner Core Wireframe Cage
    const cageGeo = new THREE.IcosahedronGeometry(0.75, 1);
    const cageMat = new THREE.MeshStandardMaterial({
      color: 0x5eead4,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    cageMesh.position.y = 0.2;
    rootGroup.add(cageMesh);

    // Part 5: Outer Gyroscopic Orbital Rings (Dual Lathe Rings)
    const ringGeo = new THREE.TorusGeometry(1.25, 0.035, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x71717a,
      roughness: 0.2,
      metalness: 0.95,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    ring1.position.y = 0.2;
    rootGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.y = Math.PI / 3;
    ring2.position.y = 0.2;
    rootGroup.add(ring2);

    // Part 6: Modular Database Reactor Cylinders (4 corner pillars)
    const pillarGroup = new THREE.Group();
    const pillarGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.7, 16);
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x27272a,
      roughness: 0.25,
      metalness: 0.8,
    });

    const pillarCoords = [
      [-0.9, -0.9],
      [0.9, -0.9],
      [-0.9, 0.9],
      [0.9, 0.9],
    ];

    pillarCoords.forEach(([x, z]) => {
      const p = new THREE.Mesh(pillarGeo, pillarMat);
      p.position.set(x, -0.4, z);
      pillarGroup.add(p);
    });
    rootGroup.add(pillarGroup);

    // Part 7: Holographic Data Glyphs (Floating planes)
    const holoCanvas = document.createElement('canvas');
    holoCanvas.width = 256;
    holoCanvas.height = 128;
    const hctx = holoCanvas.getContext('2d')!;
    hctx.fillStyle = '#090a0f';
    hctx.fillRect(0, 0, 256, 128);
    hctx.font = 'bold 20px monospace';
    hctx.fillStyle = '#10b981';
    hctx.fillText('REACT · MERN', 20, 45);
    hctx.font = '16px monospace';
    hctx.fillStyle = '#94a3b8';
    hctx.fillText('SHARON K G // MCA', 20, 85);

    const holoTex = new THREE.CanvasTexture(holoCanvas);
    holoTex.colorSpace = THREE.SRGBColorSpace;
    const holoGeo = new THREE.PlaneGeometry(1.2, 0.6);
    const holoMat = new THREE.MeshBasicMaterial({
      map: holoTex,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });
    const holoMesh = new THREE.Mesh(holoGeo, holoMat);
    holoMesh.position.set(0, 1.2, 0);
    rootGroup.add(holoMesh);

    // 7. Interactive Mouse Parallax (Damped)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });

    // 8. Animation Loop with Exponential Damping
    let frameId = 0;
    const clock = new THREE.Clock();

    function tick() {
      const delta = clock.getDelta();
      const state = sceneStateRef.current;

      // Exponential damping for mouse parallax
      targetX += (mouseX - targetX) * (1 - Math.exp(-4 * delta));
      targetY += (mouseY - targetY) * (1 - Math.exp(-4 * delta));

      camera.position.x = targetX * 0.8;
      camera.position.y = 2.2 + targetY * 0.4;
      camera.lookAt(0, 0.2, 0);

      // Core rotation
      const rot = delta * 0.8 * state.rotationSpeed;
      coreMesh.rotation.y += rot * 1.5;
      coreMesh.rotation.x += rot * 0.8;
      cageMesh.rotation.y -= rot * 0.6;
      ring1.rotation.z += rot * 1.1;
      ring2.rotation.x += rot * 0.9;
      holoMesh.rotation.y += rot * 0.5;

      // Exploded View kinematics
      state.explodedFactor += (state.targetExploded - state.explodedFactor) * (1 - Math.exp(-5 * delta));
      const exp = state.explodedFactor;

      holoMesh.position.y = 1.2 + exp * 0.8;
      ring1.scale.setScalar(1 + exp * 0.4);
      ring2.scale.setScalar(1 + exp * 0.4);
      pillarGroup.position.y = -exp * 0.4;
      baseMesh.position.y = -0.8 - exp * 0.3;

      // Dynamic color update
      coreMat.color.lerp(state.accentColor, 0.1);
      rimLight.color.lerp(state.accentColor, 0.1);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', onResize);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      baseGeo.dispose();
      baseMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      pillarGeo.dispose();
      pillarMat.dispose();
      holoGeo.dispose();
      holoMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800">
      {/* Three.js Canvas Container (Mount Ref outside React UI) */}
      <div ref={mountRef} className="w-full h-full min-h-[420px] cursor-grab active:cursor-grabbing" />

      {/* Viewport Top Left: Minimal Spec Badge */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Interactive 3D MERN Architecture</span>
        </div>
      </div>

      {/* Viewport Bottom Center: Unified Collapsible Control Dock (Three.js Directive <= 15% viewport) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-[94%] max-w-lg">
        {/* Collapse / Expand Toggle Button */}
        <div className="flex justify-center mb-1">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            type="button"
            className="px-3 py-1 rounded-t-lg bg-zinc-900 text-zinc-400 hover:text-white border-t border-x border-zinc-800 text-[11px] font-medium flex items-center gap-1 shadow-md cursor-pointer"
          >
            {isCollapsed ? <Eye className="w-3 h-3 text-emerald-400" /> : <EyeOff className="w-3 h-3" />}
            <span>{isCollapsed ? 'Show 3D Controls' : 'Hide Controls'}</span>
          </button>
        </div>

        {/* Control Dock Panel */}
        {!isCollapsed && (
          <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Exploded View Toggle */}
            <button
              onClick={() => setIsExploded(!isExploded)}
              type="button"
              className={`px-3 py-1.5 rounded-xl font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                isExploded
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-750'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isExploded ? 'Collapse Stack' : 'Explode Architecture'}</span>
            </button>

            {/* Color Swatches */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-zinc-500 mr-1">Finish:</span>
              <button
                onClick={() => setActiveTheme('emerald')}
                type="button"
                className={`w-5 h-5 rounded-full bg-emerald-500 border-2 cursor-pointer transition-transform ${
                  activeTheme === 'emerald' ? 'border-white scale-110' : 'border-transparent'
                }`}
                title="Emerald Theme"
              />
              <button
                onClick={() => setActiveTheme('cyan')}
                type="button"
                className={`w-5 h-5 rounded-full bg-cyan-500 border-2 cursor-pointer transition-transform ${
                  activeTheme === 'cyan' ? 'border-white scale-110' : 'border-transparent'
                }`}
                title="Cyber Cyan Theme"
              />
              <button
                onClick={() => setActiveTheme('gold')}
                type="button"
                className={`w-5 h-5 rounded-full bg-amber-500 border-2 cursor-pointer transition-transform ${
                  activeTheme === 'gold' ? 'border-white scale-110' : 'border-transparent'
                }`}
                title="Gold / Titanium Theme"
              />
            </div>

            {/* Rotation Speed toggle */}
            <button
              onClick={() => setRotationSpeed(rotationSpeed === 1 ? 2 : rotationSpeed === 2 ? 0.5 : 1)}
              type="button"
              className="px-2.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-300 text-[11px] font-mono flex items-center gap-1 cursor-pointer"
              title="Toggle Rotation Speed"
            >
              <RotateCw className="w-3 h-3 text-emerald-400" />
              <span>{rotationSpeed}x Speed</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
