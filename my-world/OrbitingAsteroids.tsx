import { HDKComponent, HNode, Prefab, useRandom } from "@hiber3d/hdk-react";
import { AsteroidSpinning, Distribute, Orbiting } from "@hiber3d/hdk-react-components";

const OrbitingAsteroids: HDKComponent = (props) => {
  return (
    <HNode {...props}>
      <Orbiting duration={64}>
        <Distribute
          gladeRadius={40}
          outerBoundRadius={100}
          itemAreaSizeMin={15}
          itemAreaSizeMax={25}
          renderItem={(item) => {
            const random = useRandom();

            return (
              <AsteroidSpinning y={random.range(-10, 10)} scale={random.range(1, 5)}>
                <Prefab id="rock_01_t1" />
              </AsteroidSpinning>
            );
          }}
        />
      </Orbiting>
    </HNode>
  );
};

export default OrbitingAsteroids;