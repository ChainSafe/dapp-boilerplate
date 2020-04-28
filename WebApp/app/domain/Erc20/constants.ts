/*
 *
 * Erc20 constants
 *
 */

enum ActionTypes {
  // Init
  SET_TOKEN_ADDRESS = '@@app/Erc20/SET_TOKEN_ADDRESS',

  REFRESH = '@@app/Erc20/REFRESH',

  // IERC20.sol
  GET_BALANCE_REQUEST = '@@app/Erc20/GET_BALANCE_REQUEST',
  GET_BALANCE_SUCCESS = '@@app/Erc20/GET_BALANCE_SUCCESS',
  GET_BALANCE_FAILURE = '@@app/Erc20/GET_BALANCE_FAILURE',

  GET_TOTAL_SUPPLY_REQUEST = '@@app/Erc20/GET_TOTAL_SUPPLY_REQUEST',
  GET_TOTAL_SUPPLY_SUCCESS = '@@app/Erc20/GET_TOTAL_SUPPLY_SUCCESS',
  GET_TOTAL_SUPPLY_FAILURE = '@@app/Erc20/GET_TOTAL_SUPPLY_FAILURE',

  GET_ALLOWANCE_REQUEST = '@@app/Erc20/GET_ALLOWANCE_REQUEST',
  GET_ALLOWANCE_SUCCESS = '@@app/Erc20/GET_ALLOWANCE_SUCCESS',
  GET_ALLOWANCE_FAILURE = '@@app/Erc20/GET_ALLOWANCE_FAILURE',

  TRANSFER_REQUEST = '@@app/Erc20/TRANSFER_REQUEST',
  TRANSFER_SUCCESS = '@@app/Erc20/TRANSFER_SUCCESS',
  TRANSFER_FAILURE = '@@app/Erc20/TRANSFER_FAILURE',

  TRANSFER_FROM_REQUEST = '@@app/Erc20/TRANSFER_FROM_REQUEST',
  TRANSFER_FROM_SUCCESS = '@@app/Erc20/TRANSFER_FROM_SUCCESS',
  TRANSFER_FROM_FAILURE = '@@app/Erc20/TRANSFER_FROM_FAILURE',

  APPROVE_REQUEST = '@@app/Erc20/APPROVE_REQUEST',
  APPROVE_SUCCESS = '@@app/Erc20/APPROVE_SUCCESS',
  APPROVE_FAILURE = '@@app/Erc20/APPROVE_FAILURE',

  INCREASE_ALLOWANCE_REQUEST = '@@app/Erc20/INCREASE_ALLOWANCE_REQUEST',
  INCREASE_ALLOWANCE_SUCCESS = '@@app/Erc20/INCREASE_ALLOWANCE_SUCCESS',
  INCREASE_ALLOWANCE_FAILURE = '@@app/Erc20/INCREASE_ALLOWANCE_FAILURE',

  DECREASE_ALLOWANCE_REQUEST = '@@app/Erc20/DECREASE_ALLOWANCE_REQUEST',
  DECREASE_ALLOWANCE_SUCCESS = '@@app/Erc20/DECREASE_ALLOWANCE_SUCCESS',
  DECREASE_ALLOWANCE_FAILURE = '@@app/Erc20/DECREASE_ALLOWANCE_FAILURE',

  // ERC20Detailed.sol
  GET_META_REQUEST = '@@app/Erc20/GET_META_REQUEST',
  GET_META_SUCCESS = '@@app/Erc20/GET_META_SUCCESS',
  GET_META_FAILURE = '@@app/Erc20/GET_META_FAILURE',

  // ERC20Mintable.sol
  IS_MINTER_REQUEST = '@@app/Erc20/IS_MINTER_REQUEST',
  IS_MINTER_SUCCESS = '@@app/Erc20/IS_MINTER_SUCCESS',
  IS_MINTER_FAILURE = '@@app/Erc20/IS_MINTER_FAILURE',

  ADD_MINTER_REQUEST = '@@app/Erc20/ADD_MINTER_REQUEST',
  ADD_MINTER_SUCCESS = '@@app/Erc20/ADD_MINTER_SUCCESS',
  ADD_MINTER_FAILURE = '@@app/Erc20/ADD_MINTER_FAILURE',

  RENOUNCE_MINTER_REQUEST = '@@app/Erc20/RENOUNCE_MINTER_REQUEST',
  RENOUNCE_MINTER_SUCCESS = '@@app/Erc20/RENOUNCE_MINTER_SUCCESS',
  RENOUNCE_MINTER_FAILURE = '@@app/Erc20/RENOUNCE_MINTER_FAILURE',

  MINT_REQUEST = '@@app/Erc20/MINT_REQUEST',
  MINT_SUCCESS = '@@app/Erc20/MINT_SUCCESS',
  MINT_FAILURE = '@@app/Erc20/MINT_FAILURE',

  // ERC20Burnable.sol
  BURN_REQUEST = '@@app/Erc20/BURN_REQUEST',
  BURN_SUCCESS = '@@app/Erc20/BURN_SUCCESS',
  BURN_FAILURE = '@@app/Erc20/BURN_FAILURE',

  BURN_FROM_REQUEST = '@@app/Erc20/BURN_FROM_REQUEST',
  BURN_FROM_SUCCESS = '@@app/Erc20/BURN_FROM_SUCCESS',
  BURN_FROM_FAILURE = '@@app/Erc20/BURN_FROM_FAILURE',

  // ERC20Pausable.sol
  IS_PAUSER_REQUEST = '@@app/Erc20/IS_PAUSER_REQUEST',
  IS_PAUSER_SUCCESS = '@@app/Erc20/IS_PAUSER_SUCCESS',
  IS_PAUSER_FAILURE = '@@app/Erc20/IS_PAUSER_FAILURE',

  ADD_PAUSER_REQUEST = '@@app/Erc20/ADD_PAUSER_REQUEST',
  ADD_PAUSER_SUCCESS = '@@app/Erc20/ADD_PAUSER_SUCCESS',
  ADD_PAUSER_FAILURE = '@@app/Erc20/ADD_PAUSER_FAILURE',

  RENOUNCE_PAUSER_REQUEST = '@@app/Erc20/RENOUNCE_PAUSER_REQUEST',
  RENOUNCE_PAUSER_SUCCESS = '@@app/Erc20/RENOUNCE_PAUSER_SUCCESS',
  RENOUNCE_PAUSER_FAILURE = '@@app/Erc20/RENOUNCE_PAUSER_FAILURE',

  IS_PAUSED_REQUEST = '@@app/Erc20/IS_PAUSED_REQUEST',
  IS_PAUSED_SUCCESS = '@@app/Erc20/IS_PAUSED_SUCCESS',
  IS_PAUSED_FAILURE = '@@app/Erc20/IS_PAUSED_FAILURE',

  PAUSE_REQUEST = '@@app/Erc20/PAUSE_REQUEST',
  PAUSE_SUCCESS = '@@app/Erc20/PAUSE_SUCCESS',
  PAUSE_FAILURE = '@@app/Erc20/PAUSE_FAILURE',

  UNPAUSE_REQUEST = '@@app/Erc20/UNPAUSE_REQUEST',
  UNPAUSE_SUCCESS = '@@app/Erc20/UNPAUSE_SUCCESS',
  UNPAUSE_FAILURE = '@@app/Erc20/UNPAUSE_FAILURE',

  // ERC20Capped.sol
  GET_CAP_REQUEST = '@@app/Erc20/GET_CAP_REQUEST',
  GET_CAP_SUCCESS = '@@app/Erc20/GET_CAP_SUCCESS',
  GET_CAP_FAILURE = '@@app/Erc20/GET_CAP_FAILURE',
}

export default ActionTypes;