
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract FunctionModifierDemo{

   address private owner;

   constructor(address _owner){
      owner=_owner;
   }

   // Only Owner Access Modifiers
   modifier OnlyOnwerAccess{
      require(msg.sender==owner,"Only owner can access the function");
      _;
   }

   // Modifers Parameter
   modifier fee(uint _fee){
      console.log("Sender Value Modifier=>",msg.value);
      if(msg.value!=_fee){
         revert("You must pay a fee to withdraw you ethers");
      }
      else
      {
         _;
      }
   }

   modifier etherAmount(uint _amount){
      if(_amount>0){
         _;
      }
      else
      {
         revert("Amount should be grether than 0");
      }
   }


   // Only Owner Access Demo
   function onlyOwnerAccessDemo() public view OnlyOnwerAccess returns(string memory){
      return "Hello";
   }

   function withdraw(uint _amount) public payable etherAmount(_amount) fee(0.025 ether){
      // Code
      console.log("Sender Value =>",msg.value);
   }

}

