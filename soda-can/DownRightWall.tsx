import { HDKComponent, HNode, Prefab } from "@hiber3d/hdk-react";
import { SegmentedStack } from "@hiber3d/hdk-react-components";

const Foliage: HDKComponent = (props) => {
  {
    /* Höger nere sidan */
  }
  return (
    <HNode>
      <SegmentedStack
        segments={[
          {
            length: 4,
            direction: "UP",
          },
        ]}
        renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-9} z={-23} />}
      />
      <SegmentedStack
        segments={[
          {
            length: 4,
            direction: "UP",
          },
        ]}
        renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-11} z={-23} />}
      />
      <SegmentedStack
        segments={[
          {
            length: 4,
            direction: "UP",
          },
        ]}
        renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-13} z={-21} />}
      />
      <SegmentedStack
        segments={[
          {
            length: 4,
            direction: "UP",
          },
        ]}
        renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-15} z={-21} />}
      />
      <SegmentedStack
        segments={[
          {
            length: 4,
            direction: "UP",
          },
        ]}
        renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-17} z={-19} />}
      />
      <SegmentedStack
        segments={[
          {
            length: 4,
            direction: "UP",
          },
        ]}
        renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-19} z={-17} />}
      />
      <SegmentedStack
        segments={[
          {
            length: 4,
            direction: "UP",
          },
        ]}
        renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-21} z={-15} />}
      />
      <SegmentedStack
        segments={[
          {
            length: 4,
            direction: "UP",
          },
        ]}
        renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-21} z={-13} />}
      />
      <SegmentedStack
        segments={[
          {
            length: 4,
            direction: "UP",
          },
        ]}
        renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-23} z={-11} />}
      />
      <SegmentedStack
        segments={[
          {
            length: 4,
            direction: "UP",
          },
        ]}
        renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-23} z={-9} />}
      />
    </HNode>
  );
};

export default Foliage;
