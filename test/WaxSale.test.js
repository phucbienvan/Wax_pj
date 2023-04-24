const BN = web3.utils.BN;

var waxSale = artifacts.require("WaxSale.sol");
var wax = artifacts.require("Wax.sol");

const chai = require("./setup_chai.js");
const expect = chai.expect;

contract("WaxSale", async(accounts) => {
    const [
            owner,
            accountOne
        ] = accounts;

    it("All token should be empty in first account", async () => {
        let instance = await wax.deployed();

        expect(await instance.balanceOf(owner)).to.be.a.bignumber.equal(new BN(0));
    });
});
