import { HDKComponent, HNode, InfoPanel, Prefab, render } from "@hiber3d/hdk-react";
import { Grid, Ground, SegmentedStack, Spawnpoint } from "@hiber3d/hdk-react-components";
import DownRightWall from "./DownRightWall";

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
              direction: "UP",
            },
          ]}
          renderItem={() => <Prefab id="cube_01" material="palette_01_grey" />}
        />
      </HNode>

      <HNode z={10}>
        <Grid rows={8} columns={26} itemSpacing={2} renderItem={<Prefab id="cube_01" material="palette_01_grey" />} />
        <Grid rows={26} columns={8} itemSpacing={2} renderItem={<Prefab id="cube_01" material="palette_01_grey" />} />

        <DownRightWall />

        {/* Vänster nere sidan */}
        <HNode>
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={9} z={-23} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={11} z={-23} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={13} z={-21} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={15} z={-21} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={17} z={-19} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={19} z={-17} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={21} z={-15} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={21} z={-13} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={23} z={-11} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={23} z={-9} />}
          />
        </HNode>

        {/* Vänster uppe sidan */}
        <HNode>
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={9} z={23} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={11} z={23} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={13} z={21} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={15} z={21} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={17} z={19} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={19} z={17} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={21} z={15} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={21} z={13} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={23} z={11} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={23} z={9} />}
          />
        </HNode>

        {/* Höger uppe sidan */}
        <HNode>
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-9} z={23} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-11} z={23} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-13} z={21} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-15} z={21} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-17} z={19} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-19} z={17} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-21} z={15} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-21} z={13} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-23} z={11} />}
          />
          <SegmentedStack
            segments={[
              {
                length: 4,
                direction: "UP",
              },
            ]}
            renderItem={() => <Prefab id="cube_01" material="palette_01_grey" y={0} x={-23} z={9} />}
          />
        </HNode>
      </HNode>
    </HNode>
  </HNode>
);

/**
 * Render an almost empty world
 */
render(<World />, { environment: "fantasy_clouds_01" });
