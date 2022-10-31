pragma solidity ^0.8.0;

contract Bank {
  mapping (address => uint256) private _balances;

  function deposit(uint256 amount) payable public {
    _balances[msg.sender] += msg.value;
  }

  function balanceOf(address account) public view returns (uint256){

  }
}