import { useEffect, useState } from 'react';

const useOutsideClickListener = (ref, exclude) => {
  const [isOutside, setIsOutside] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ((ref.current && ref.current.contains(event.target))
      || event.target.closest(exclude) !== null) {
        setIsOutside(false);
      } else setIsOutside(true);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return isOutside;
};

export default useOutsideClickListener;
