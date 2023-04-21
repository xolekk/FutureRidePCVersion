pragma solidity ^0.8.19;

contract Payment {
    address payable public driver;
    address payable public customer;
    uint public price;
    bool public serviceComplete;
    
    constructor(address payable _driver, address payable _customer, uint _price) {
        driver = _driver;
        customer = _customer;
        price = _price;
        serviceComplete = false;
    }
    
    function completeService() public {
        require(msg.sender == customer, "Only customer can call this function");
        serviceComplete = true;
        if (serviceComplete) {
            driver.transfer(price);
        }
    }
}