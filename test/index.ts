import { expect } from "chai";
import { ethers } from "hardhat";

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });


describe("Modifiers-Example", function () {
  it("#Test1 - onlyOwnerAccessDemo-Success", async function () {
    
    try
    {
      const [owner,add1,add2]=await ethers.getSigners();

      const Contract= await ethers.getContractFactory("FunctionModifierDemo");
      const contract= await Contract.deploy(owner.address);
      await contract.deployed();

      // Assert
      let value:string=await contract.connect(owner).onlyOwnerAccessDemo();
      // Test
      expect(value).to.equal("Hello");
    }
    catch(ex)
    {
      console.log((<Error>ex).message);
      expect(false).to.equal(true);
    }
  });

  it("#Test2 - onlyOwnerAccessDemo-Failed", async function () {
    
    try
    {
      const [owner,add1,add2]=await ethers.getSigners();

      const Contract= await ethers.getContractFactory("FunctionModifierDemo");
      const contract= await Contract.deploy(owner.address);
      await contract.deployed();

      // Assert
      let value:string=await contract.connect(add1).onlyOwnerAccessDemo();
      // Test
      expect(value).to.equal("Hello");
    }
    catch(ex)
    {
      console.log((<Error>ex).message);
      expect(false).to.equal(true);
    }
  });

  it.only("#Test3 - Withdraw", async function () {
    
    try
    {
      const [owner,add1,add2]=await ethers.getSigners();

      const Contract= await ethers.getContractFactory("FunctionModifierDemo");
      const contract= await Contract.deploy(owner.address);
      await contract.deployed();

      // Assert
      let balance=await add1?.getBalance();
      console.log(`Balance => ${balance}`);

      let withdrawAmount=ethers.utils.parseEther("0.0001");

      let tx=await contract.connect(add1).withdraw(withdrawAmount,{
        value:ethers.utils.parseEther("0.025")
      });

      console.log(`tx => ${JSON.stringify(tx)}`);

      // Test
      expect(true).to.equal(true);
    }
    catch(ex)
    {
      console.log((<Error>ex).message);
      expect(false).to.equal(true);
    }
  });




});