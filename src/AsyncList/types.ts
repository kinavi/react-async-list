export type AsyncListPropsType = {
  fetchUp?: () => Promise<void>;
  fetchDown?: () => Promise<void>;
  className?: string;
  isReverse?: boolean;
  isDisableFetchUp?: boolean;
  isDisableFetchDown?: boolean;
  asyncListMix?: string;
  innerRef?: any;
  onScroll?(isScrolling: boolean): void;
  isHiddenScroll?: boolean;
  CustomLoader?: (props: any) => JSX.Element;
  children: JSX.Element | JSX.Element[] | number | string;
};
