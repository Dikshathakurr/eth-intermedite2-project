// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21 ;

contract Quickbuy {
    struct Goodie {
        uint noOfItems;
        uint cost;
    }

    mapping(string => Goodie) goodies;

    function addItem(string memory _goodie, uint _noOfItems, uint _cost) public {
        goodies[_goodie] = Goodie(_noOfItems, _cost);
    }

    function buyGoodie(string memory _goodie) public returns (string memory) {
        if (goodies[_goodie].noOfItems > 0) {
            goodies[_goodie].noOfItems--;
            return string(abi.encodePacked("Purchase complete, thank you! No. of items left: ", goodies[_goodie].noOfItems));
        } else {
            return "This goodie is currently unavailable!";
        }
    }

    function checkGoodie(string memory _goodie) public view returns (uint) {
        return goodies[_goodie].noOfItems;
    }

    function checkCost(string memory _goodie) public view returns (uint) {
        return goodies[_goodie].cost;
    }
}
