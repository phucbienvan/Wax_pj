const chai = require('chai');
const BN = web3.utils.BN;
const chainBN = require('chai-bn')(BN);
chai.use(chainBN);
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
var wax = artifacts.require("Wax.sol");

contract("Wax", async(account) => {
    it("All token should be in first account", async () => {
        let instance = await wax.deployed();
        let totalSupply = await instance.totalSupply();
        console.log(totalSupply);
        expect(await instance.balanceOf(account[0])).to.be.bignumber.equal(totalSupply);
    })
});
