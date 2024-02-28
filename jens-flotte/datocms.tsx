import { GLB } from "@hiber3d/hdk-react";
import { GraphQLClient } from "graphql-request";

const token = "4a07c24966dce8e69d975240b6032c";
export const BRICKSIZE = 1;

export function Merge(a: any, b: any) {
  return Object.assign(a, b);
}

export function requestData({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}: {
  query: string;
  variables?: any;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
}) {
  const headers: { [key: string]: string } = {
    authorization: `Bearer ${token}`,
  };
  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }
  const client = new GraphQLClient("https://graphql.datocms.com", { headers });
  return client.request(query, variables);
}

export function Data(worldname: string, func: (data: any) => void) {
  requestData({
    query: `query MyQuery {
    hiberContent(filter: {worldName: {eq: "${worldname}"}}) {
      assets {
        media {
          responsiveImage(imgixParams: {q: "40", w: 640, fm:jpg}) {          
            src            
            width
            height
            aspectRatio
          }
          video {            
            mp4: mp4Url(res: medium)
          }
          height
          width
          url          
        }
				texture {
          responsiveImage(imgixParams: {q: "40", w: 640, fm:jpg}) {          
            src            
            width
            height
            aspectRatio
          }
          video {            
            mp4: mp4Url(res: medium)
          }
          height
          width
          url          
        }
        overlay { slug }
        name
        header
        body
        url
        tab
      }
    }
  }`,
  }).then((response: any) => {
    const assetsArray = response.hiberContent.assets as any[];

    let newAssetsObj: { all: any[]; [key: string]: any } = { all: assetsArray };

    for (let i = 0; i < assetsArray.length; i++)
      newAssetsObj[assetsArray[i].name] = {
        src: !assetsArray[i].media
          ? ""
          : assetsArray[i].media.responsiveImage
          ? assetsArray[i].media.responsiveImage.src
          : assetsArray[i].media.video
          ? assetsArray[i].media.video.mp4
          : assetsArray[i].media.url,
        texture: !assetsArray[i].texture
          ? ""
          : assetsArray[i].texture.responsiveImage
          ? assetsArray[i].texture.responsiveImage.src
          : assetsArray[i].texture.video
          ? assetsArray[i].texture.video.mp4
          : assetsArray[i].texture.url,
        header: assetsArray[i].header,
        body: assetsArray[i].body,
        url: assetsArray[i].overlay ? "https://hi.kokokaka.com/overlay/" + assetsArray[i].overlay.slug : assetsArray[i].url,
        ratio: !assetsArray[i].media
          ? 1
          : assetsArray[i].media.aspectRatio
          ? assetsArray[i].media.aspectRatio
          : assetsArray[i].media.width / assetsArray[i].media.height,
        tab: assetsArray[i].tab,
      };
    func(newAssetsObj);
  });
}

export function Pos(x: any, y: any, z: any, o?: any) {
  let p = { x: -x * BRICKSIZE, y: y * BRICKSIZE, z: z * BRICKSIZE };
  return o ? Merge(o, p) : p;
}

export const XBlock = ({ x = 0, y = 0, z = 0, src = "", ...rest }) => {
  let p = Pos(x, y, z);

  return (
    <GLB {...rest} src={src} x={p.x} y={p.y} z={p.z}>
      {rest.children}
    </GLB>
  );
};
