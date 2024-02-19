
import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import spaceModel from './Resources/space.glb'
export function Space(props) {
  const { nodes, materials } = useGLTF(spaceModel)
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="5dd040ad759e483c8caab1b1648f4ca4fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode">
              <group name="body" rotation={[-Math.PI / 2, 0, 0]} scale={50}>
                <mesh name="body_Material001_0" geometry={nodes.body_Material001_0.geometry} material={materials['Material.001']} />
                <mesh name="body_Material002_0" geometry={nodes.body_Material002_0.geometry} material={materials['Material.002']} />
              </group>
              <group name="waves2" position={[52.464, 15.529, 2.112]} rotation={[-Math.PI / 2, 0, 0]} scale={[50, 50, 1.891]}>
                <mesh name="waves2_Material002_0" geometry={nodes.waves2_Material002_0.geometry} material={materials['Material.002']} />
              </group>
              <group name="particles" position={[889.69, 293.811, 3955.293]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={40.408}>
                  <mesh name="particles_Material002_0" geometry={nodes.particles_Material002_0.geometry} material={materials['Material.002']} />
              </group>
              <group name="Sphere" position={[975.469, 427.948, -500]} rotation={[-Math.PI / 2, 0, 0]} scale={62.402}>
                <mesh name="Sphere_Material001_0" geometry={nodes.Sphere_Material001_0.geometry} material={materials['Material.001']} />
              </group>
              <group name="Sphere001" position={[975.469, 427.948, -500]} rotation={[-Math.PI / 2, 0, 0]} scale={60.324}>
                <mesh name="Sphere001_Material002_0" geometry={nodes.Sphere001_Material002_0.geometry} material={materials['Material.002']} />
              </group>
              <group name="Sphere004" position={[975.469, 427.948, -500]} rotation={[-0.688, 0, 0]} scale={[104.129, 81.609, 0]}>
                <mesh name="Sphere004_Material002_0" geometry={nodes.Sphere004_Material002_0.geometry} material={materials['Material.002']} />
              </group>
              <group name="Sphere005" position={[-941.988, 960.196, -117.028]} rotation={[-Math.PI / 2, 0, 0]} scale={62.402}>
                <mesh name="Sphere005_Material001_0" geometry={nodes.Sphere005_Material001_0.geometry} material={materials['Material.001']} />
              </group>
              <group name="Sphere006" position={[-941.988, 960.196, -117.028]} rotation={[-Math.PI / 2, 0, 0]} scale={60.324}>
                <mesh name="Sphere006_Material002_0" geometry={nodes.Sphere006_Material002_0.geometry} material={materials['Material.002']} />
              </group>
              <group name="Sphere009" position={[607.522, 867.594, -714.475]} rotation={[-Math.PI / 2, 0, 0]} scale={16.881}>
                <mesh name="Sphere009_Material002_0" geometry={nodes.Sphere009_Material002_0.geometry} material={materials['Material.002']} />
              </group>
              <group name="Sphere010" position={[-387.442, 585.792, 211.857]} rotation={[-Math.PI / 2, 0, 0]} scale={16.881}>
                <mesh name="Sphere010_Material002_0" geometry={nodes.Sphere010_Material002_0.geometry} material={materials['Material.002']} />
              </group>
              <group name="Sphere011" position={[-253.462, 531.074, -479.067]} rotation={[-Math.PI / 2, 0, 0]} scale={11.437}>
                <mesh name="Sphere011_Material002_0" geometry={nodes.Sphere011_Material002_0.geometry} material={materials['Material.002']} />
              </group>
              <group name="Cube" position={[0, -101.673, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[1120.013, 1120.013, 100]}>
                <mesh name="Cube_Material001_0" geometry={nodes.Cube_Material001_0.geometry} material={materials['Material.001']} />
              </group>
              <group name="Sphere002" position={[-857.404, 392.646, -200]} rotation={[-Math.PI / 2, 0, 0]} scale={39.706}>
                <mesh name="Sphere002_Material001_0" geometry={nodes.Sphere002_Material001_0.geometry} material={materials['Material.001']} />
                <mesh name="Sphere002_Material002_0" geometry={nodes.Sphere002_Material002_0.geometry} material={materials['Material.002']} />
              </group>
              <group name="Sphere003" position={[-857.404, 392.646, -200]} rotation={[-Math.PI / 2, 0, 0]} scale={41.075}>
                <mesh name="Sphere003_Material002_0" geometry={nodes.Sphere003_Material002_0.geometry} material={materials['Material.002']} />
              </group>
              <group name="Sphere007" position={[199.634, 966.883, -921.001]} rotation={[-Math.PI / 2, 0, 0]} scale={39.706}>
                <mesh name="Sphere007_Material001_0" geometry={nodes.Sphere007_Material001_0.geometry} material={materials['Material.001']} />
                <mesh name="Sphere007_Material002_0" geometry={nodes.Sphere007_Material002_0.geometry} material={materials['Material.002']} />
              </group>
              <group name="Sphere008" position={[199.634, 966.883, -921.001]} rotation={[-Math.PI / 2, 0, 0]} scale={41.075}>
                <mesh name="Sphere008_Material002_0" geometry={nodes.Sphere008_Material002_0.geometry} material={materials['Material.002']} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/space.glb')
