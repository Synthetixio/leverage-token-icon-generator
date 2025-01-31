interface AssetData {
  color: string;
  secondaryColor?: string;
}

const ASSET_DATA: Record<string, AssetData> = {
  TRUMP: {
    color: "#f4de92",
  },
  WIF: {
    color: "#a19484",
  },
  PNUT: {
    color: "#68a2d3",
  },
  BONK: {
    color: "#FDDE03",
  },
  FARTCOIN: {
    color: "#1C1C1C",
  },
  "1INCH": {
    color: "#1C324F",
  },
  AAVE: {
    color: "#32B7C5",
    secondaryColor: "#B6509E",
  },
  ADA: {
    color: "#0D1E30",
  },
  ALGO: {
    color: "#000",
  },
  APE: {
    color: "#0249C3",
  },
  APT: {
    color: "#000",
  },
  ARB: {
    color: "#28A0F0",
  },
  ATOM: {
    color: "#2F3148",
  },
  AUD: {
    color: "#06061B",
  },
  AVAX: {
    color: "#E84142",
  },
  AXS: {
    color: "#0055D5",
  },
  BAL: {
    color: "#1E1E1E",
  },
  BCH: {
    color: "#8CC451",
  },
  BLUR: {
    color: "#FF8300",
  },
  BNB: {
    color: "#F3BA2F",
  },
  BTC: {
    color: "#F7931A",
  },
  CELO: {
    color: "#FDFF52",
  },
  COMP: {
    color: "#05D396",
  },
  CRV: {
    color: "#17F9E3",
    secondaryColor: "#CFFF25",
  },
  DOGE: {
    color: "#BA9F32",
  },
  DOT: {
    color: "#E6007A",
  },
  DYDX: {
    color: "#0F052F",
  },
  ENJ: {
    color: "#7866D5",
  },
  EOS: {
    color: "#000",
  },
  ETC: {
    color: "#328333",
  },
  ETH: {
    color: "#627EEA",
  },
  ETHBTC: {
    color: "#627EEA",
    secondaryColor: "#F7931A",
  },
  EUR: {
    color: "#06061B",
  },
  FIL: {
    color: "#0090FF",
  },
  FLOKI: {
    color: "#F5F5FF",
  },
  FLOW: {
    color: "#01EF8B",
  },
  FTM: {
    color: "#11B5EC",
  },
  FXS: {
    color: "#000",
  },
  GBP: {
    color: "#06061B",
  },
  GMX: {
    color: "#4B10F6",
    secondaryColor: "#04CBD1",
  },
  ICP: {
    color: "#FFF",
  },
  INJ: {
    color: "#0283FA",
    secondaryColor: "#07EEFE",
  },
  KNC: {
    color: "#30CB9E",
  },
  LDO: {
    color: "#F7C783",
    secondaryColor: "#F89791",
  },
  LINK: {
    color: "#2A5ADA",
  },
  LTC: {
    color: "#BFBBBB",
  },
  MATIC: {
    color: "#982FCD",
    secondaryColor: "#7B3FE4",
  },
  MAV: {
    color: "#6401FF",
  },
  MKR: {
    color: "#1ABC9C",
  },
  NEAR: {
    color: "#DBDBDB",
  },
  ONE: {
    color: "#0BB5E5",
    secondaryColor: "#5EF2C2",
  },
  OP: {
    color: "#FF0421",
  },
  PEPE: {
    color: "#609542",
  },
  PERP: {
    color: "#3DEAAA",
  },
  RNDR: {
    color: "#CF1111",
  },
  RPL: {
    color: "#FFD590",
  },
  RUNE: {
    color: "#0F1821",
  },
  SEI: {
    color: "#8E0508",
  },
  SHIB: {
    color: "#1C2951",
  },
  SOL: {
    color: "#904BF7",
    secondaryColor: "#75F8A4",
  },
  STETH: {
    color: "#00A3FF",
    secondaryColor: "#5EC1F9",
  },
  SUI: {
    color: "#4CA3FF",
  },
  SUSHI: {
    color: "#FA53A0",
    secondaryColor: "#0EB4FB",
  },
  TRX: {
    color: "#000",
  },
  UMA: {
    color: "#FF4A4A",
  },
  UNI: {
    color: "#FF007A",
  },
  USDT: {
    color: "#4FAF95",
  },
  WLD: {
    color: "#1E1E1C",
  },
  XAG: {
    color: "#B1BFBF",
    secondaryColor: "#C4D3D7",
  },
  XAU: {
    color: "#FA9B3D",
    secondaryColor: "#FFDB59",
  },
  XLM: {
    color: "#000",
  },
  XMR: {
    color: "#F60",
  },
  XRP: {
    color: "#F5F5FF",
  },
  XTZ: {
    color: "#A6E004",
  },
  YFI: {
    color: "#006AE3",
  },
  ZEC: {
    color: "#F4B627",
  },
  ZIL: {
    color: "#4AC1BF",
  },
  ZRX: {
    color: "#000",
  },
};

export default ASSET_DATA;

export const ASSETS = Object.keys(ASSET_DATA);
