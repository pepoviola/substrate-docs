import React, { useEffect } from 'react';

import useComponentVisible from '../../../hooks/use-component-visible';
import Icon from '../../default/Icon';
import SearchModal from './SearchModal';

function ModalButton() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  useEffect(() => {
    isComponentVisible ? (document.body.style.overflow = `hidden`) : (document.body.style.overflow = `unset`);
  }, [isComponentVisible]);
  return (
    <>
      <div
        onClick={() => setIsComponentVisible(!isComponentVisible)}
        className="flex items-center justify-between p-2 border-b-2 border-substrateGray cursor-text active:outline-none focus:outline-none"
      >
        <p className="mb-0 pr-4 text-sm text-substrateDark dark:text-white text-opacity-25 dark:text-opacity-90">
          Search Documentation
        </p>
        <Icon name="search" className="h-4 w-4 fill-current text-substrateDark dark:text-white" />
      </div>
      {isComponentVisible && <SearchModal id={ref} closeModal={setIsComponentVisible} />}
    </>
  );
}

export default ModalButton;
