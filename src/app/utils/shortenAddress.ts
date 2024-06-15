export const shortenAddress = (address: string) =>
  `${address.slice(0, 9)}...${address.slice(address.length - 5)}`;

export const shortenAddressShort = (address: string) =>
  `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
