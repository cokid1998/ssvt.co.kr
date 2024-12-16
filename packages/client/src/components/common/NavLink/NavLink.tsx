import React, { useRef } from 'react';
import { GatsbyLinkProps, Link } from 'gatsby';
import useMounted from '@client/src/hooks/common/useMounted';

type LinkProps<LState> = Omit<
  GatsbyLinkProps<LState>,
  'children' | 'ref' | 'getProps'
>;

type ChildrenWithNavigationProps = (props: {
  isCurrent: boolean;
  isPartiallyCurrent: boolean;
}) => React.ReactNode;

interface NavLinkProps<
  T extends ChildrenWithNavigationProps | React.ReactNode,
  LState,
> extends LinkProps<LState> {
  children: T extends ChildrenWithNavigationProps
    ? ChildrenWithNavigationProps
    : React.ReactNode;
}

const NavLink = <LState,>({
  children,
  ...rest
}: NavLinkProps<ChildrenWithNavigationProps | React.ReactNode, LState>) => {
  const isCurrentRef = useRef(false);
  const isPartiallyCurrentRef = useRef(false);
  // 최초 마운트 시 ref 값과 함께 렌더링 시키기 위함
  useMounted();

  return (
    <Link
      getProps={({ isCurrent, isPartiallyCurrent }) => {
        isCurrentRef.current = isCurrent;
        isPartiallyCurrentRef.current = isPartiallyCurrent;
        return {};
      }}
      {...rest}
    >
      {typeof children === 'function'
        ? children({
            isCurrent: isCurrentRef.current,
            isPartiallyCurrent: isPartiallyCurrentRef.current,
          })
        : children}
    </Link>
  );
};

export default NavLink;
