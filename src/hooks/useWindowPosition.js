import { useEffect, useState } from 'react';

export default function useWindowPosition(id) {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    function updatePosition() {
      const offetSetHeight = window.document.getElementById(id).offsetHeight;
      if (window.scrollY > offetSetHeight * 0.7) {
        setAnimation(true);
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [id]);
  return animation;
}
