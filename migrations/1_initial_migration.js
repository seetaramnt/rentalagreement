var RentalAgreement = artifacts.require("./RentalAgreement.sol");
module.exports = function(deployer) {
  deployer.deploy(RentalAgreement,2000,"Sriniketan");
};
