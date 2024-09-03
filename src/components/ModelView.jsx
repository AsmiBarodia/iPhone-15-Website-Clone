import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei'; 
import { AmbientLight, Light } from 'three';
import Lights from './Lights';
import PhoneModel from './PhoneModel';
import { Suspense } from 'react';
import * as THREE from 'three';

const ModelView = ({ index, groupRef, gsapType, controlRef, 
    setRotationSize, size, item, setRotationState }) => {
  return (
    <View 
        index={index}
        id={gsapType}
        className={`w-full h-full $ {index===2  ?'right-[-100%] : '' }` }
        >
            // Ambient Light
            <AmbientLight intensity={0.3}/>
        
            <PerspectiveCamera makeDefault position={[0,0,4]}/>

            <Lights />

            <OrbitControls 
                makeDefault
                ref = {controlRef}
                enableZoom={false}
                enablePan={false}
                // rotateSpeed={0.4}
                // target={new THREE}
                
            />

            <group ref={groupRef} name={`${index === 1} ? 'small: 'large'`} position={[0,0,0]}>
            <Suspense fallback={<div>Loading</div>}>
              <PhoneModel />
            </Suspense>
            </group>
            
    </View>
  )
}

export default ModelView
