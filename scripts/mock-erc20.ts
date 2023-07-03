import { ethers } from 'hardhat';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import {
  Token20, Token20__factory,
} from "../typechain-types";

async function main() {
  let Deployer: SignerWithAddress;
  let weth: Token20, usdt: Token20;
  
  [ Deployer ] = await ethers.getSigners();

  console.log("Deployer account:", Deployer.address);
  console.log("Account balance:", (await Deployer.getBalance()).toString());

  //  Deploy Mock Wrapped ETH contract
  console.log('\nDeploy Mock Wrapped ETH Contract .........');
  const Token = await ethers.getContractFactory('Token20', Deployer) as Token20__factory;
  const decimals = 18;

  weth = await Token.deploy(decimals, "Wrapped ETH", "WETH");
  console.log('Tx Hash: %s', weth.deployTransaction.hash);
  await weth.deployed();

  console.log('Mock Wrapped ETH Contract: ', weth.address);

  //  Deploy Mock USDT contract
  console.log('\nDeploy Mock USDT Contract .........');

  usdt = await Token.deploy(decimals, "Tether USD", "USDT");
  console.log('Tx Hash: %s', usdt.deployTransaction.hash);
  await usdt.deployed();

  console.log('Mock USDT Contract: ', usdt.address);

  console.log('\n===== DONE =====')
}
  
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});