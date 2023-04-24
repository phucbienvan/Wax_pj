const Wax = artifacts.require("Wax.sol");
const WaxSale = artifacts.require("WaxSale.sol");
const Kyc = artifacts.require("Kyc.sol");

module.exports = async function (deployer) {
  let address = await web3.eth.getAccounts();

  await deployer.deploy(Wax, 1000000000);
  await deployer.deploy(Kyc);
  await deployer.deploy(WaxSale, 1, address[0], Wax.address, Kyc.address);

  let tokenInstance = await Wax.deployed();
  let totalSupply = await tokenInstance.totalSupply();

  await tokenInstance.transfer(WaxSale.address,totalSupply);
};
