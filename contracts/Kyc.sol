// contracts/Kyc.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Kyc is Ownable {
    mapping(address => bool) allowed;

    function setKyc(address _address) public {
        allowed[_address] = true;
    }

    function removeKyc(address _address) public {
        allowed[_address] = false;
    }

    function kycCompleted(address _address) public view returns(bool){
        return allowed[_address];
    }
}
