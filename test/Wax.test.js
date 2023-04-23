const chai = require('chai');
const BN = web3.utils.BN;
const chainBN = require('chai-bn')(BN);
chai.use(chainBN);
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
var wax = artifacts.require("Wax.sol");

contract("Wax", async(accounts) => {
    const [
            owner,
            accountOne
        ] = accounts;
    
    console.log('Deployer: ', owner);

    it("All token should be in first account", async () => {
        let instance = await wax.deployed();
        let totalSupply = await instance.totalSupply();
        expect(await instance.balanceOf(owner)).to.be.bignumber.equal(totalSupply);
    });

    it("Is possible send token", async () => {
        const sendToken = 1000;
        let instance = await wax.deployed();
        let totalSupply = await instance.totalSupply();

        await expect(instance.balanceOf(owner)).to.eventually.be.a.bignumber.equal(totalSupply);
        await expect(instance.transfer(accountOne, sendToken)).to.eventually.be.fulfilled;
        await expect(instance.balanceOf(owner)).to.eventually.be.a.bignumber.equal(totalSupply.sub(new BN(sendToken)));

        // await expect(instance.balanceOf(accountOne)).to.be.bignumber.equal(new BN(sendToken));

        await expect(instance.balanceOf(accountOne)).to.eventually.be.a.bignumber.equal(new BN(sendToken));
    });
});
