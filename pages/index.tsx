import Featured from '@/components/Featured';
import Hero from '@/components/Hero';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [btnScrollDown, setBtnScrollDown] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (btnScrollDown) {
      scrollRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [btnScrollDown]);
  return (
    <>
      <Hero setBtnScrollDown={setBtnScrollDown} />
      <div ref={scrollRef}>
        <Featured />
      </div>
    </>
  );
}
