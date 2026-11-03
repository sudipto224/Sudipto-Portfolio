import { Lenis } from '@studio-freight/react-lenis';

const ease = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export function LenisWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Lenis
      root
      autoRaf
      options={{
        duration: 1.2,
        easing: ease,
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
      }}
      className="lenis-wrapper"
    >
      {children as any}
    </Lenis>
  );
}
