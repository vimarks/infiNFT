//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Greeter {
    string private greeting;
    //uint256 public price;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting, /*price*/);
        greeting = _greeting;
        //price = _price;
    }

    function greet() public view returns (string memory) {
        console.log("the current greeting is : ", greeting);
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
ß
