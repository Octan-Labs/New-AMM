// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token20 is ERC20 {
    uint256 private immutable DECIMALS;

    constructor(
        uint256 decimals_,
        string memory name,
        string memory symbol
    ) ERC20(name, symbol) {
        DECIMALS = decimals_;
    }

    function decimals() public view virtual override returns (uint8) {
        return uint8(DECIMALS);
    }

    function mint(address _to, uint256 _amount) external {
        _mint(_to, _amount);
    }
}
