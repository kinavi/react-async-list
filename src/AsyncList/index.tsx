import React, { useCallback, useEffect, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import { AsyncListContainer, AsyncListBody } from './styled';
import { AsyncListPropsType } from './types';
import { Loader } from '../Loader';

export const AsyncList = (props: AsyncListPropsType) => {
  const {
    children,
    className,
    isReverse = false,
    innerRef,
    onScroll,
    isHiddenScroll,
    fetchDown,
    fetchUp,
    isDisableFetchUp = false,
    isDisableFetchDown = false,
    CustomLoader = Loader,
    asyncListMix,
  } = props;

  const [isLoadingUp, setIsLoadingUp] = useState(false);
  const [isLoadingDown, setIsLoadingDown] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handle = useCallback(
    debounce(() => {
      if (!ref.current) {
        return;
      }
      const { scrollHeight, scrollTop, clientHeight } = ref.current;
      if (isReverse) {
        switch (true) {
          case scrollHeight + scrollTop - clientHeight <= 700: {
            if (fetchUp && !(isLoadingUp || isDisableFetchUp)) {
              setIsLoadingUp(true);
              fetchUp().then(() => {
                setIsLoadingUp(false);
              });
            }
            break;
          }
          case scrollTop >= -700: {
            if (fetchDown && !(isLoadingDown || isDisableFetchDown)) {
              setIsLoadingDown(true);
              fetchDown().then(() => {
                setIsLoadingDown(false);
              });
            }
            break;
          }
          default:
            break;
        }
      } else {
        switch (true) {
          case scrollHeight - scrollTop - clientHeight <= 700: {
            if (fetchDown && !(isLoadingDown || isDisableFetchDown)) {
              setIsLoadingDown(true);
              fetchDown().then(() => {
                setIsLoadingDown(false);
              });
            }
            break;
          }
          case scrollTop <= 700: {
            if (fetchUp && !(isLoadingUp || isDisableFetchUp)) {
              setIsLoadingUp(true);
              fetchUp().then(() => {
                setIsLoadingUp(false);
              });
            }
            break;
          }
          default:
            break;
        }
      }

      if (onScroll) {
        onScroll((-scrollTop / clientHeight) * 100 >= 5);
      }
    }, 100),
    [
      ref.current,
      fetchUp,
      onScroll,
      fetchDown,
      isLoadingUp,
      isLoadingDown,
      isDisableFetchUp,
      isDisableFetchDown,
    ]
  );

  useEffect(() => {
    if (ref.current) {
      const { scrollHeight, clientHeight } = ref.current;
      if (scrollHeight - clientHeight <= 200) {
        handle();
      }
      ref.current.addEventListener('scroll', handle);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handle);
      }
    };
  }, [ref.current, handle]);

  return (
    <AsyncListBody
      ref={innerRef}
      className={className}
    >
      <AsyncListContainer
        isHiddenScroll={isHiddenScroll}
        ref={ref}
        isReverse={isReverse}
        className={asyncListMix}
      >
        <div>
          {!isDisableFetchUp && fetchUp && (
            <CustomLoader className="async-list__loader_show" />
          )}
          {children}
          {!isDisableFetchDown && fetchDown && (
            <CustomLoader className="async-list__loader_show" />
          )}
        </div>
      </AsyncListContainer>
    </AsyncListBody>
  );
};
