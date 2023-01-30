// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WFIL is ERC20 {
    constructor() ERC20("Weth FIL", "WFIL") {
        _mint(msg.sender, 1e28);
    }

    
}
