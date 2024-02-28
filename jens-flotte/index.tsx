import { Environment, GLB, HNode, Prefab, render } from "@hiber3d/hdk-react";
import { Spawnpoint } from "@hiber3d/hdk-react-components";
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
      <GLB z={0} y={10} x={5} src="https://cdn.hibervr.com/external/hdk/en_p_cube_sculpture_01.glb" />
      <XBlock src={flotten3d} x={13} />

      <Prefab x={4} y={1} id="water_plane_01" />
      <Prefab x={4} y={0} id="cube_01" material="t_water_01" />
      <Prefab x={2} y={0} id="cube_01" material="t_water_01" />
      <Prefab x={0} y={0} id="cube_01" material="t_water_01" />

      <Spawnpoint />

      <Environment id="env" extendEnvironment="sunrise_01" />
    </HNode>,

    { environment: "env" }
  );
});
