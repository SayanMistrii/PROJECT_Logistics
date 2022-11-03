const seller = artifacts.require("Seller");

module.exports = async function (deployer) {
  await deployer.deploy(seller);
};
