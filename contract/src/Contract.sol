// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol"; 
import "./IERC7007.sol";

event AigcData(uint256 tokenId, bytes prompt, bytes aigcData, bytes proof);

contract MockERC7007 is IERC721, ERC165, IERC7007 {
    struct AIGCData {
        bytes prompt;
        bytes aigcData;
        bytes proof;
    }

    mapping(uint256 => AIGCData) private _aigcDataMapping;

    function addAigcData(
        uint256 tokenId,
        bytes calldata prompt,
        bytes calldata aigcData,
        bytes calldata proof
    ) external override {
        _aigcDataMapping[tokenId] = AIGCData(prompt, aigcData, proof);
        emit AigcData(tokenId, prompt, aigcData, proof); 
    }

    function verify(
        bytes calldata prompt,
        bytes calldata aigcData,
        bytes calldata proof
    ) external view override returns (bool success) {
        return true; 
    }

    function getAigcData(uint256 tokenId) public view returns (bytes memory prompt, bytes memory aigcData, bytes memory proof) {
        AIGCData storage data = _aigcDataMapping[tokenId];
        return (data.prompt, data.aigcData, data.proof);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
        return
            interfaceId == type(IERC7007).interfaceId || 
            interfaceId == type(IERC721).interfaceId || 
            super.supportsInterface(interfaceId);
    }

    function balanceOf(address owner) external view override returns (uint256) {
        return 0;
    }

    function ownerOf(uint256 tokenId) external view override returns (address) {
        return address(0); 
    }

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) external override {}

    function safeTransferFrom(address from, address to, uint256 tokenId) external override {}

    function transferFrom(address from, address to, uint256 tokenId) external override {}

    function approve(address approved, uint256 tokenId) external override {}

    function setApprovalForAll(address operator, bool approved) external override {}

    function getApproved(uint256 tokenId) external view override returns (address) {
        return address(0);
    }

    function isApprovedForAll(address owner, address operator) external view override returns (bool) {
        return false; 
    }
}
