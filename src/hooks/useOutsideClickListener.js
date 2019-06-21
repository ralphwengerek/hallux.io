import { useEffect, useState } from 'react';

const useOutsideClickListener = (ref) => {
  const [isOutside, setIsOutside] = useState(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOutside(true);
    } else setIsOutside(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return [isOutside];
};

export default useOutsideClickListener;
