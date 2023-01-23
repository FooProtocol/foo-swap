pragma solidity =0.5.16;

import '../FooswapERC20.sol';

contract ERC20 is FooswapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
