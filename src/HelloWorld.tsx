import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

export const HelloWorld: React.FC<{title: string}> = ({title}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#1c1c1c',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{color: '#c9a24b', fontFamily: 'sans-serif', fontSize: 120, opacity}}>
        {title}
      </h1>
    </AbsoluteFill>
  );
};
