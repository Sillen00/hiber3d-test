import { ButtonSensor, HDKComponent, HNode, InfoPanel, LogicGate, PointLight, Prefab, VisibleOnSignal, render } from "@hiber3d/hdk-react";
import { Ground, Spawnpoint } from "@hiber3d/hdk-react-components";
import Foliage from "./Foliage";
import OrbitingAsteroids from "./OrbitingAsteroids";

const Sign: HDKComponent<{ header: string; body: string; url: string }> = ({ ...props }) => (
  <InfoPanel {...props} openUrlInNewTab>
    <Prefab id="sign_wooden_01_question" rotY={180} />
  </InfoPanel>
);

// Show x and y coordinates = showAxisMarker

const World = () => (
  <HNode>
    <Foliage y={-1.5} />
    <OrbitingAsteroids y={20} />
    <Ground hilly={1} material={"t_sand_01"} />
    <Spawnpoint />

    {/* Rainbox boxes */}
    <HNode y={2} z={5} rotX={90} rotY={20}>
      <Prefab id="cube_01" material="t_rainbow_02" />
      <Prefab id="cube_01" material="t_rainbow_02" x={5} rotX={10} />
      <Prefab id="cube_01" material="t_rainbow_02" x={-5} />
    </HNode>

    {/* Spotlight */}
    <PointLight strength={24} color="#ffff00" radius={10} />

    {/* Click 2 buttons to show urn. */}
    <ButtonSensor output="myButton1" y={1} />
    <ButtonSensor output="myButton2" x={2} y={1} />
    <LogicGate type="AND" output="myOutput" input1={"myButton1"} input2={"myButton2"} />
    <VisibleOnSignal input="myOutput">
      <Prefab id="ancient_urn_01" x={3} />
    </VisibleOnSignal>
  </HNode>
);

/**
 * Render an almost empty world
 */
render(<World />, { environment: "sunrise_01" });
