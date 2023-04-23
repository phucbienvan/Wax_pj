const Wax = artifacts.require("Wax");

module.exports = function (deployer) {
  deployer.deploy(Wax, 1000000000);
};
