export type ChildrenType = Omit<NavLinkItem, 'children'>;

export interface NavLinkItem {
  label: string;
  to: string;
  children?: ChildrenType[];
}
