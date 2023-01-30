import { ethers } from "hardhat";

async function main() {
  
  // Deploying FooswapFactory 
  const feesetterAddress = "0x85f20a6924A61904AB44243C7e2c771B3bE46734"
  console.log("***********Deploying FoowapFactory*************")
  const FooswapFactory = await ethers.getContractFactory("FooswapFactory");
  const fooswapFactory = await FooswapFactory.deploy(feesetterAddress);
  await fooswapFactory.deployed();
  console.log(`FosowapFactory has been deployed to ${fooswapFactory.address}`);

  // Deploying FoowswapRouter1
  const WETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
  console.log("***********Deploying FooswapRouter01*************")
  const FooswapRouter01 = await ethers.getContractFactory("FooswapRouter01")
  const fooswapRouter01 = await FooswapRouter01.deploy(fooswapFactory.address, WETHAddress)
  await fooswapRouter01.deployed()
  console.log(`FoowsapFactory has been deployed to ${fooswapRouter01.address}`)

  // Deploying FoowswapRouter2
  console.log("***********Deploying FooswapRouter02*************")
  const FooswapRouter02 = await ethers.getContractFactory("FooswapRouter02")
  const fooswapRouter02 = await FooswapRouter02.deploy(fooswapFactory.address, WETHAddress)
  await fooswapRouter01.deployed()
  console.log(`FoowsapFactory has been deployed to ${fooswapRouter02.address}`)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
