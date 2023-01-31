import { ethers } from "hardhat";

async function main() {
  

  // Deploying WFIL
  console.log("***********Deploying WFIL*************")
  const WFIL = await ethers.getContractFactory("WFIL");
  const wFIL = await WFIL.deploy();
  await wFIL.deployed();
  console.log(`WFIL has been deployed to ${wFIL.address}`);

  // Deploying FooswapFactory 
  const feesetterAddress = "0x85f20a6924A61904AB44243C7e2c771B3bE46734"
  console.log("***********Deploying FoowapFactory*************")
  const FooswapFactory = await ethers.getContractFactory("FooswapFactory");
  const fooswapFactory = await FooswapFactory.deploy(feesetterAddress);
  await fooswapFactory.deployed();
  console.log(`FosowapFactory has been deployed to ${fooswapFactory.address}`);

  // Deploying FoowswapRouter1
  console.log("***********Deploying FooswapRouter01*************")
  const FooswapRouter01 = await ethers.getContractFactory("FooswapRouter01")
  const fooswapRouter01 = await FooswapRouter01.deploy(fooswapFactory.address, wFIL.address)
  await fooswapRouter01.deployed()
  console.log(`FooswapRouter01 has been deployed to ${fooswapRouter01.address}`)

  // Deploying FoowswapRouter2
  console.log("***********Deploying FooswapRouter02*************")
  const FooswapRouter02 = await ethers.getContractFactory("FooswapRouter02")
  const fooswapRouter02 = await FooswapRouter02.deploy(fooswapFactory.address, wFIL.address)
  await fooswapRouter02.deployed()
  console.log(`fooswapRouter02 has been deployed to ${fooswapRouter02.address}`)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
