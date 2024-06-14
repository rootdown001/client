export const shortenAddress = (address: string) =>
  `${address.slice(0, 9)}...${address.slice(address.length - 5)}`;
