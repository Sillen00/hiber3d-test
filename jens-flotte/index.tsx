import { Environment, HNode, Prefab, render } from "@hiber3d/hdk-react";
import { AnimateAlongPath, Grid, Spawnpoint } from "@hiber3d/hdk-react-components";
import { Data, XBlock } from "./datocms";
const VERSION = 1;
var DATA;

Data("jensflotte", (data: any) => {
  DATA = data;
  console.log(data.flotten.src);

  const flotten3d = data.flotten.src;
  render(
    <HNode z={0} y={0}>
      <Prefab id="rock_01_t1" x={10} />
      <XBlock src={flotten3d} z={17} />

      {/* <Prefab id="en_m_wooden_platform_01" /> */}
      {/* <Prefab id="en_m_wooden_platform_01_ceiling" /> */}

      <AnimateAlongPath
        close
        easing="EASE_IN_OUT_QUAD"
        duration={15}
        numberOfItems={10}
        points={[
          [0, 0, 0],
          [0, 0, 1],
          [0, 0, 2],
        ]}
      >
        <Prefab x={-6.7} z={2} y={-0.9} scale={1.3} id="rowboat_01" />
      </AnimateAlongPath>

      <HNode>
        <Prefab x={-3} z={3} y={-0.3} id="rope_04" />
        <Prefab x={0} z={4} y={-0.3} id="rope_railing_01" />
        <Prefab x={2} z={4} y={-0.3} id="rope_railing_01" />
        <Prefab rotY={45} x={3.8} z={3.5} y={-0.3} id="rope_railing_01" />
        <Prefab rotY={90} x={4.3} z={1.7} y={-0.3} id="rope_railing_01" />
        <Prefab rotY={90} x={4.3} z={-0.3} y={-0.3} id="rope_railing_01" />
      </HNode>

      {/* Wooden start platform */}
      <Grid y={-1} rows={4} columns={4} itemSpacing={2} renderItem={<Prefab id="en_m_wooden_platform_01_ceiling" />} />
      {/* Water */}
      <Grid y={-3} rows={26} columns={26} itemSpacing={2} renderItem={<Prefab id="water_plane_01" />} />

      <Spawnpoint />

      <Environment id="env" extendEnvironment="midday_01" />
    </HNode>,

    { environment: "env" }
  );
});
