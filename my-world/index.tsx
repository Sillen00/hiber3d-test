import { HDKComponent, HNode, Prefab, render, InfoPanel } from '@hiber3d/hdk-react';
import { Ground, Spawnpoint } from '@hiber3d/hdk-react-components';

const Sign: HDKComponent<{ header: string; body: string; url: string }> = ({ ...props }) => (
  <InfoPanel {...props} openUrlInNewTab>
    <Prefab id="sign_wooden_01_question" rotY={180} />
  </InfoPanel>
);

const World = () => (
  <HNode>
    <Ground />
    <Spawnpoint />
    <HNode y={2} z={5} rotX={45} rotY={20}>
      <Prefab id="cube_01" material="t_rainbow_02" />
      <Prefab id="cube_01" material="t_rainbow_02" x={5} />
      <Prefab id="cube_01" material="t_rainbow_02" x={-5} />
    </HNode>
  </HNode>
);

/**
 * Render an almost empty world
 */
render(<World />, { environment: 'midday_01' });
