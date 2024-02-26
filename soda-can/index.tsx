import { HDKComponent, HNode, InfoPanel, Prefab, render } from "@hiber3d/hdk-react";
import { Ground, SegmentedStack, Spawnpoint } from "@hiber3d/hdk-react-components";

const Sign: HDKComponent<{ header: string; body: string; url: string }> = ({ ...props }) => (
  <InfoPanel {...props} openUrlInNewTab>
    <Prefab id="sign_wooden_01_question" rotY={180} />
  </InfoPanel>
);

const World = () => (
  <HNode>
    <Ground />
    <Spawnpoint />
    <HNode y={0} z={5}>
      {/* <HNode>
        <Prefab id="cube_01" material="palette_01_grey" x={6} z={0} y={0} />
        <Prefab id="cube_01" material="palette_01_grey" x={4} z={0} y={0} />
        <Prefab id="cube_01" material="palette_01_grey" x={2} z={0} y={0} />
        <Prefab id="cube_01" material="palette_01_grey" x={0} z={0} y={0} />
        <Prefab id="cube_01" material="palette_01_grey" x={-2} z={0} y={0} />
        <Prefab id="cube_01" material="palette_01_grey" x={-4} z={0} y={0} />
        <Prefab id="cube_01" material="palette_01_grey" x={-6} z={0} y={0} />
        <Prefab id="cube_01" material="palette_01_grey" x={-8} z={0} y={0} />
      </HNode>
      <HNode>
        <Prefab id="cube_01" material="palette_01_grey" x={-10} z={2} y={0} />
        <Prefab id="cube_01" material="palette_01_grey" x={-12} z={2} y={0} />
      </HNode> */}
      <HNode>
        <SegmentedStack
          segments={[
            {
              length: 4,
              direction: "LEFT",
            },
            {
              length: 4,
              direction: "RIGHT",
            },
          ]}
          z={5}
          renderItem={() => <Prefab id="cube_01" material="palette_01_grey" />}
        />
      </HNode>
    </HNode>
  </HNode>
);

/**
 * Render an almost empty world
 */
render(<World />, { environment: "fantasy_clouds_01" });
