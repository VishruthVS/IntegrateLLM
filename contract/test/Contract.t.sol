// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/Contract.sol";  // Update path based on your project structure

contract ERC7007Test is Test {
    MockERC7007 public erc7007;
    address owner;
    address addr1;
    address addr2;

    function setUp() public {
        // Deploy contract and set up addresses
        erc7007 = new MockERC7007();
        owner = address(this);
        addr1 = address(0x1);
        addr2 = address(0x2);
    }

    function testAddAigcData() public {
        uint256 tokenId = 1;
        bytes memory prompt = "This is a prompt";
        bytes memory aigcData = "This is AIGC data";
        bytes memory proof = "Proof data";

        // Call addAigcData function
        erc7007.addAigcData(tokenId, prompt, aigcData, proof);

        // Verify the AIGC data is stored correctly using the getter function
        (bytes memory storedPrompt, bytes memory storedAigcData, bytes memory storedProof) = erc7007.getAigcData(tokenId);

        // Use helper functions to compare bytes
        assertTrue(compareBytes(storedPrompt, prompt), "Prompt mismatch");
        assertTrue(compareBytes(storedAigcData, aigcData), "AIGC data mismatch");
        assertTrue(compareBytes(storedProof, proof), "Proof mismatch");
    }

    function testVerify() public {
        bytes memory prompt = "Test prompt";
        bytes memory aigcData = "Test AIGC data";
        bytes memory proof = "Test proof";

        bool result = erc7007.verify(prompt, aigcData, proof);
        assertTrue(result);
    }

    // Helper function to compare two bytes arrays
    function compareBytes(bytes memory a, bytes memory b) internal pure returns (bool) {
        if (a.length != b.length) {
            return false;
        }
        for (uint256 i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }
}
