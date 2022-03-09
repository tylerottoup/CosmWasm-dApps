import { AppConfig, getAppConfig, NetworkConfigs } from "@cosmicdapp/logic";

const local: AppConfig = {
  chainId: "hello",
  chainName: "Hello",
  addressPrefix: "cosmos",
  rpcUrl: "http://localhost:26657",
  httpUrl: "http://localhost:1317",
  faucetUrl: "http://localhost:4500",
  feeToken: "stake",
  stakingToken: "stake",
  coinMap: {
    stake: { denom: "STAKE", fractionalDigits: 0 },
    token: { denom: "TOKEN", fractionalDigits: 0 },
  },
  gasPrice: 0.025,
};

const uninet: AppConfig = {
  chainId: "uni",
  chainName: "Uni",
  addressPrefix: "juno",
  rpcUrl: "https://rpc.uni.juno.deuslabs.fi",
  httpUrl: "https://lcd.uni.juno.deuslabs.fi",
  faucetUrl: "https://faucet.uni.juno.deuslabs.fi",
  feeToken: "ujunox",
  stakingToken: "ujunox",
  coinMap: {
    ujunox: { denom: "JUNOX", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const pebblenet: AppConfig = {
  chainId: "pebblenet-1",
  chainName: "Pebblenet",
  addressPrefix: "wasm",
  rpcUrl: "https://rpc.pebblenet.cosmwasm.com",
  httpUrl: "https://lcd.pebblenet.cosmwasm.com",
  faucetUrl: "https://faucet.pebblenet.cosmwasm.com",
  feeToken: "upebble",
  stakingToken: "urock",
  coinMap: {
    urock: { denom: "ROCK", fractionalDigits: 6 },
    upebble: { denom: "PEBBLE", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const configs: NetworkConfigs = { local, uninet, pebblenet };
export const config = getAppConfig(configs);
