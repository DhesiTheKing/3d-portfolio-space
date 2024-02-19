import React, { useEffect, useRef, useState } from 'react'
import { BoxGeometry, Color } from 'three'
import { CameraControls, Environment, Float, RenderTexture, Text } from '@react-three/drei'
import font from './Resources/font_design.ttf'
import { Robot } from './Robot'
import { atom, useAtom } from 'jotai'
import { currentPageAtom } from './Navi'
import { Door } from './Door'
import { Space } from './Space'
export const textEnable=atom(false);
export const skilEnable=atom(false);
export const projectEnable=atom(false);
export const contactEnable=atom(false);
const bloomColor = new Color('#fff');
bloomColor.multiplyScalar(1.5);
const Home = () => {
    const controls=useRef();
    const [currentPage,setCurrentPage]=useAtom(currentPageAtom);
    const meshFitBoy=useRef();
    const meshFitScreen=useRef();
    const meshFitPlanet1=useRef();
    const meshFitPlanet2=useRef();
    const meshFitPlanet3=useRef();
    const [isEnabled,setIsEnabled]=useAtom(textEnable);
    const[isskilEnable,setIsSkilEnable]=useAtom(skilEnable);
    const[isprojectEnable,setIsProjectEnable]=useAtom(projectEnable);
    const[iscontactEnable,setContactEnable]=useAtom(contactEnable);
    const intro = async () =>{
        controls.current.dolly(-32);
        controls.current.smoothTime = 0.8;
        setTimeout(()=>{
            setCurrentPage("home");
        },1000);
        fitCamera();
    };

    const fitCamera = async() =>{
        if(currentPage === "boy"){
            controls.current.smoothTime=0.5;
            controls.current.fitToBox(meshFitBoy.current,true);
        }
        else if(currentPage==='planet1'){
            controls.current.smoothTime=0.8;
            controls.current.fitToBox(meshFitPlanet1.current,true);
        }
        else if(currentPage==='planet2'){
            controls.current.smoothTime=0.8;
            controls.current.fitToBox(meshFitPlanet2.current,true);
        }
        else if(currentPage==='planet3'){
            controls.current.smoothTime=0.8;
            controls.current.fitToBox(meshFitPlanet3.current,true);
        }
        else{
            controls.current.fitToBox(meshFitScreen.current,true);
        }
    }

    useEffect(()=>{
        intro();
    },[]);

    useEffect(()=>{
        fitCamera();
        window.addEventListener("resize",fitCamera);
        return ()=> window.removeEventListener("resize",fitCamera);
    },[currentPage])
  return (
    <>
    <CameraControls ref={controls}  />
    <mesh ref={meshFitScreen} visible={false}>
            <boxGeometry args={[15,2,2]}/>
            <meshBasicMaterial  color="red" transparent opacity={0.4}/>
    </mesh>
    <Text 
    font={font}
    position-x={.5} 
    position-y={-3} 
    position-z={1.2}
    scale={0.6}
    anchorY={"bottom"}
    >
        WELCOME TO{"\n"} MY WORLD
        <meshBasicMaterial color={bloomColor} toneMapped={false}>
            <RenderTexture attach={'map'}>
                <color attach="background" args={["#fff"]}/>
                <Environment preset='sunset'/>
            </RenderTexture>
        </meshBasicMaterial>
    </Text>

    
    {/* Space  */}

    <group
        position-x={0} 
        position-y={-1.6} 
        position-z={-17.7}
        scale={0.6}
    >
        {/* TEXT  */}
        <group
            position-x={0} 
            position-y={1.5} 
            position-z={3}
        >
            <group    
                scale-x={1}
                position-z={-4}
                position-y={1}
                visible={isEnabled}
            >
            <Text
                font={font}
            >
                I'M DHESIGAN
                <group>
                    <Text
                        scale-x={0.6}
                        position-z={-4}
                        position-y={-2}
                        position-x={-5}
                        font={font}
                    >
                        CYBER SECURITY
                    </Text>
                </group>
                <group>
                    <Text
                        scale-x={0.6}
                        position-z={-4}
                        position-y={-2}
                        position-x={5}
                        font={font}
                    >
                        WEB DEVELOPMENT
                    </Text>
                </group>
            </Text>
            </group>

            <mesh ref={meshFitBoy} visible={false}>
                <boxGeometry args={[2,2,2]}/>
                <meshBasicMaterial  color="red" transparent opacity={0.4}/>
            </mesh>
        </group>
        <group
            position-x={11.8} 
            position-y={4.2} 
            position-z={-3}    
        >
            <group visible={isprojectEnable}>
                <Text font={font} position-x={0.5} position-y={2.2} position-z={-7} >
                    PROJECTS:
                </Text>
                <Text font={font} position-x={1} position-y={-0.5} position-z={-7} scale={0.6} >
                    3D-PORTFOLIO{"\n"}
                    SPY-WARE{"\n"}
                    RPS-GAME{"\n"}
                    QUIZZ-GAME{"\n"}
                </Text>
            </group>
            <mesh ref={meshFitPlanet1} visible={false}>
                <boxGeometry args={[2,2,2]}/>
                <meshBasicMaterial  color="red" transparent opacity={0.4}/>
            </mesh>
        </group>

        <group position-x={0.8} position-y={9.7} position-z={-10}>
            <group position-x={-1} position-y={1.5} position-z={-3} scale={1} visible={isskilEnable}>
                <Text font={font}>
                    SKILS:
                </Text>
                <Text font={font} scale={0.4} position-y={-2.3} >
                    JAVA{"\n"}
                    PROBLEM SOLVING{"\n"}
                    JS{"\n"}
                    HTML & CSS{"\n"}
                    REACT{"\n"}
                    THREE JS{"\n"}
                    BLENDER & 3D-MODELING

                </Text>
            </group>
            <mesh ref={meshFitPlanet2} visible={false}>
                <boxGeometry args={[2,2,2]}/>
                <meshBasicMaterial  color="red" transparent opacity={0.4}/>
            </mesh>
        </group>

        <group position-x={-6.5} position-y={9.7} position-z={1} visible={iscontactEnable}>
            <Text font={font}  scale={1} position-x={1} position-y={1} position-z={-7}>
                CONTACTS:
            </Text>
            <Text font={font} scale={0.5} position-x={2} position-z={-7} position-y={-1}>
                LinkedIn: dhesigan02{"\n"}
                Github: DhesiTheKing{"\n"}
                Email: dhesigan02@gmail.com{"\n"}
                Instagram: wtf_dhesi
            </Text>
            <mesh ref={meshFitPlanet3} visible={false}>
                <boxGeometry args={[2,2,2]}/>
                <meshBasicMaterial  color="red" transparent opacity={0.4}/>
            </mesh>
        </group>
        <Space/>
    </group>

    <group 
        position-x={-3.2} 
        position-y={-2.2} 
        position-z={1.2}
        scale={0.6}
        anchorY={"bottom"}
        rotation-y={1}
    >
        <Robot scale={0.002}/>
    </group>
    
    <group
        position-x={0} 
        position-y={-1.6} 
        position-z={-5.7}
        scale={0.6}
    >
        <Door scale={0.22} scale-y={0.029} scale-x={0.02}/>
    </group>


    <Environment preset='sunset'/>
    </>
  )
}

export default Home