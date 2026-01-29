import React, { useRef } from "react";
import { Float, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const FloatingText = () => {
    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <Text
                fontSize={0.5}
                color="#915EFF"
                position-y={3.5}
                maxWidth={200}
                lineHeight={1}
                letterSpacing={0.02}
                textAlign="center"
                anchorX="center"
                anchorY="middle"
            >
                I'm Divyansh
                <meshStandardMaterial color="#915EFF" emissive="#915eff" />
            </Text>
        </Float>
    );
};

export default FloatingText;
