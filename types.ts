type ArrayNLength<TItem, TLength> = [TItem, ...TItem[]] & {
  length: TLength;
};
