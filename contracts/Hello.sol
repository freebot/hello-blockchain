pragma solidity ^0.7.1;

contract Hello {
  string greeting;

  constructor() public {
    greeting = "hello";
  }

  function getGreeting(string memory givenGreeting) public {
    greeting = givenGreeting;
  }

  function setGreeting(string memory _greeting) public {
    greeting = _greeting;
  }  
}
