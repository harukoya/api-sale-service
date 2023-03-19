import {FC, useEffect, useRef, ReactNode} from 'react';

type Props = {
  children: ReactNode;
  onClickOutside: any;
}

const OutsideClickHandler: FC<Props> = ({children, onClickOutside}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: {target: any}) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClickOutside]);

  return <div ref={ref}>{children}</div>;
};

export default OutsideClickHandler;

