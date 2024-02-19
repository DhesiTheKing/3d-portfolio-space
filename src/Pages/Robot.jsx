

import React, { useEffect, useRef } from 'react'
import { useAtom } from 'jotai'
import { useGLTF, useAnimations } from '@react-three/drei'
import robotModel from './Resources/robot.glb'
import { doorAtom } from './Door'
export function Robot(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(robotModel)
  const { actions,names } = useAnimations(animations, group)
  const[doorOpen,setDoorOpen]=useAtom(doorAtom);
  useEffect(()=>{
    if(doorOpen){
      actions[names[0]].setDuration(2).play();
    }
    
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="ee94a29d37a0437080aa8a3c2990bfdbfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Mano-Der" position={[-289.33, 924.547, 379.685]} rotation={[2.115, 0, -Math.PI / 2]} scale={[1, 0.951, 1]}>
                  <mesh name="Mano-Der_palette001_0" geometry={nodes['Mano-Der_palette001_0'].geometry} material={materials['palette.001']} />
                </group>
                <group name="Mano-Izq" position={[286.674, 931.263, 400.85]} rotation={[2.114, 0, Math.PI / 2]} scale={[1, 0.951, 1]}>
                  <mesh name="Mano-Izq_palette001_0" geometry={nodes['Mano-Izq_palette001_0'].geometry} material={materials['palette.001']} />
                </group>
                <group name="Brazo-Izq" position={[292.756, 1147.427, 188.406]} rotation={[0.897, -Math.PI / 2, 0]}>
                  <mesh name="Brazo-Izq_palette001_0" geometry={nodes['Brazo-Izq_palette001_0'].geometry} material={materials['palette.001']} />
                </group>
                <group name="Brazo-Der" position={[-295.215, 1142.852, 179.99]} rotation={[0.93, Math.PI / 2, 0]}>
                  <mesh name="Brazo-Der_palette001_0" geometry={nodes['Brazo-Der_palette001_0'].geometry} material={materials['palette.001']} />
                </group>
                <group name="Cabeza" position={[-0.285, 1497.943, 157.885]} rotation={[1.876, 0, 0]}>
                  <group name="Cube" position={[0.285, 160.174, 10.131]} rotation={[-1.555, 0, 0]}>
                    <mesh name="Cube_Cristal_0" geometry={nodes.Cube_Cristal_0.geometry} material={materials.Cristal} />
                  </group>
                  <mesh name="Cabeza_palette002_0" geometry={nodes.Cabeza_palette002_0.geometry} material={materials['palette.002']} />
                  <mesh name="Cabeza_Material001_0" geometry={nodes.Cabeza_Material001_0.geometry} material={materials['Material.001']} />
                </group>
                <group name="Torso" position={[1.611, 1027.041, 81.146]} rotation={[1.709, 0, 0]}>
                  <mesh name="Torso_palette001_0" geometry={nodes.Torso_palette001_0.geometry} material={materials['palette.001']} />
                </group>
                <group name="Pierna-Der" position={[-148.698, 603.6, 66.816]} rotation={[1.476, 0, 0]}>
                  <mesh name="Pierna-Der_palette001_0" geometry={nodes['Pierna-Der_palette001_0'].geometry} material={materials['palette.001']} />
                </group>
                <group name="Pierna-Izq" position={[149.983, 603.79, 66.234]} rotation={[1.476, 0, 0]}>
                  <mesh name="Pierna-Izq_palette001_0" geometry={nodes['Pierna-Izq_palette001_0'].geometry} material={materials['palette.001']} />
                </group>
                <group name="Pie-Der" position={[-149.431, 200.739, 77.134]} rotation={[1.653, 0, 0]}>
                  <mesh name="Pie-Der_palette001_0" geometry={nodes['Pie-Der_palette001_0'].geometry} material={materials['palette.001']} />
                </group>
                <group name="Pie-Izq" position={[148.487, 197.712, 77.836]} rotation={[1.653, 0, 0]}>
                  <mesh name="Pie-Izq_palette001_0" geometry={nodes['Pie-Izq_palette001_0'].geometry} material={materials['palette.001']} />
                </group>
                <group name="Teclado-Piano" position={[0, 0, 698.375]} rotation={[Math.PI / 2, 0, 0]} scale={1.902}>
                  <mesh name="Teclado-Piano_palette003_0" geometry={nodes['Teclado-Piano_palette003_0'].geometry} material={materials['palette.003']} />
                  <mesh name="Teclado-Piano_Material002_0" geometry={nodes['Teclado-Piano_Material002_0'].geometry} material={materials['Material.002']} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/robot.glb')
