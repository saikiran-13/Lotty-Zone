require('@nomiclabs/hardhat-etherscan');

task('verifyContract', 'Verify a contract on Etherscan')
  .addParam('contractaddress', 'The address of the contract to verify')
  .setAction(async (taskArgs) => {
    await hre.run('compile');
    await hre.run('verify:verify', {
      address: taskArgs.contractaddress,
      constructorArguments: ['0x975C2bc54EA2e560E86845F2559d651E78F9ee41'],
    });
  });
