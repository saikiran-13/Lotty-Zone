task('deploy', 'Deploy on the blockchain', async (hre, taskArgs) => {
  let lotterycontract = await ethers.getContractFactory('Lottery');
  lotterycontract = await lotterycontract.deploy(
    '0x975C2bc54EA2e560E86845F2559d651E78F9ee41',
  );
  console.log(`Contract deployed at ${lotterycontract.address}`);
});
