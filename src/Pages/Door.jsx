

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import doorModel from './Resources/sci-fi_door.glb'
import { useEffect } from 'react'
import { atom } from 'jotai'
import { useAtom } from 'jotai'
export const doorAtom = atom(false);
export function Door(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(doorModel)
  const[doorOpen,setDoorOpen]=useAtom(doorAtom);
  const { actions , names} = useAnimations(animations, group)
  useEffect(()=>{
    if(doorOpen){
      actions[names[0]].setDuration(3).play();
    }
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="df9153c1bc474149a6c0b2663fbce1c9fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_7">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_50" position={[0, 280, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials.door} skeleton={nodes.Object_51.skeleton} />
                  </group>
                </group>
                <group name="door01_low001" position={[0, 280, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/sci-fi_door.glb')
