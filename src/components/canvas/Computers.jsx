import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const BASE_AVATAR_POSITION = [3.5, -3.25, 0.5];
const BASE_TARGET_POSITION = [0, -3.25, -1.5];
const BASE_AVATAR_ROTATION_Y = 2.0;
const AVATAR_LOOK_OFFSET = 0.85;
const AVATAR_ROTATION_OFFSET =
  BASE_AVATAR_ROTATION_Y -
  Math.atan2(
    BASE_TARGET_POSITION[0] - BASE_AVATAR_POSITION[0],
    BASE_TARGET_POSITION[2] - BASE_AVATAR_POSITION[2]
  );

const getSceneConfig = (isMobile) => {
  const computerPosition = isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5];
  const avatarPosition = isMobile ? [2, -3.3, 0.5] : [3.5, -3.05, 0.5];

  return {
    computer: {
      position: computerPosition,
      scale: isMobile ? 0.7 : 0.75,
      rotation: [-0.01, -0.2, -0.1],
    },
    avatar: {
      position: avatarPosition,
      scale: (isMobile ? 2.2 : 2.5) * 1.6,
    },
  };
};

const getAvatarRotationY = (avatarPosition, targetPosition) => {
  const dx = targetPosition[0] - avatarPosition[0];
  const dz = targetPosition[2] - avatarPosition[2];

  return Math.atan2(dx, dz) + AVATAR_ROTATION_OFFSET + AVATAR_LOOK_OFFSET;
};

const applyRenderFixes = (root) => {
  if (!root) return;
  root.traverse((child) => {
    if (!child.isMesh) return;
    child.frustumCulled = false;
    const { material } = child;
    if (!material) return;
    if (Array.isArray(material)) {
      material.forEach((mat) => {
        mat.side = THREE.DoubleSide;
        mat.needsUpdate = true;
      });
    } else {
      material.side = THREE.DoubleSide;
      material.needsUpdate = true;
    }
  });
};

const FitCamera = ({ targetRef, controlsRef, fitMargin = 1.05, fitKey }) => {
  const { camera, size, invalidate } = useThree();

  useLayoutEffect(() => {
    if (!targetRef.current) return;
    if (!size.width || !size.height) return;
    const box = new THREE.Box3().setFromObject(targetRef.current);
    if (box.isEmpty()) return;

    const center = box.getCenter(new THREE.Vector3());
    const sphere = new THREE.Sphere();
    box.getBoundingSphere(sphere);
    const radius = Math.max(sphere.radius, 0.01);

    const aspect = size.width / size.height;
    const vFov = THREE.MathUtils.degToRad(camera.fov);
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * Math.max(0.0001, aspect));
    const distance = Math.max(
      radius / Math.sin(vFov / 2),
      radius / Math.sin(hFov / 2)
    ) * fitMargin;

    let direction = camera.position.clone().sub(center).normalize();
    if (!Number.isFinite(direction.lengthSq()) || direction.lengthSq() === 0) {
      direction = new THREE.Vector3(1, 0, 0);
    }

    camera.position.copy(center.clone().add(direction.multiplyScalar(distance)));
    camera.near = Math.max(0.01, distance - radius * 3);
    camera.far = distance + radius * 6;
    camera.updateProjectionMatrix();

    if (controlsRef.current) {
      controlsRef.current.target.copy(center);
      controlsRef.current.update();
    }

    invalidate();
  }, [camera, size.width, size.height, targetRef, controlsRef, fitMargin, invalidate, fitKey]);

  return null;
};

const Computers = ({ sceneConfig, groupRef }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const avatar = useGLTF("./person.glb");

  useEffect(() => {
    applyRenderFixes(computer.scene);
    applyRenderFixes(avatar.scene);
  }, [computer, avatar]);

  const avatarRotationY = useMemo(
    () =>
      getAvatarRotationY(
        sceneConfig.avatar.position,
        sceneConfig.computer.position
      ),
    [sceneConfig]
  );

  return (
    <group ref={groupRef}>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={sceneConfig.computer.scale}
        position={sceneConfig.computer.position}
        rotation={sceneConfig.computer.rotation}
      />

      <ambientLight intensity={0.6} />

      <pointLight position={[2, 0, 2]} intensity={4} distance={10} />

      <primitive
        object={avatar.scene}
        scale={sceneConfig.avatar.scale}
        position={sceneConfig.avatar.position}
        rotation={[0, avatarRotationY, 0]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const controlsRef = useRef();
  const groupRef = useRef();

  const sceneConfig = useMemo(() => getSceneConfig(isMobile), [isMobile]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25, near: 0.05, far: 200 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <FitCamera
          targetRef={groupRef}
          controlsRef={controlsRef}
          fitKey={sceneConfig}
        />
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers sceneConfig={sceneConfig} groupRef={groupRef} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
