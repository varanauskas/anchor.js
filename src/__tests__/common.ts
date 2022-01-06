import {
  AddressMap,
  AddressProviderFromJson,
  BAssetAddressProviderImpl,
  bAssetBombay12,
} from '../address-provider';

const contracts: AddressMap = {
  bLunaHub: 'terra1fflas6wv4snv8lsda9knvq2w0cyt493r8puh2e',
  bLunaAirdrop: 'terra1334h20c9ewxguw9p9vdxzmr8994qj4qu77ux6q',
  bLunaValidatorsRegistry: 'terra10wt548y4y3xeqfrqsgqlqh424lll8fqxp6dyed',
  bLunaToken: 'terra1u0t35drzyy0mujj8rkdyzhe264uls4ug3wdp3x',
  bLunaReward: 'terra1ac24j6pdxh53czqyrkr6ygphdeftg7u3958tl2',
  bLunaConverter: '',
  bLunaCustody: 'terra1ltnkx0mv7lf2rca9f8w740ashu93ujughy4s7p',
  bEthToken: 'terra19mkj9nec6e3y5754tlnuz4vem7lzh4n0lc2s3l',
  bEthReward: 'terra1ja3snkedk4t0zp7z3ljd064hcln8dsv5x004na',
  bEthConverter: 'terra1g68g7l3xkpm4hvadrqrfc53vtnfhl4dlnjm45u',
  bEthCustody: 'terra1j6fey5tl70k9fvrv7mea7ahfr8u2yv7l23w5e6',
  bEthWormhole: 'terra1d74gfj8gs6rskcuu80x3deus7gut77udhdajv7',
  bAtomToken: 'terra1n79sleuqpd4a6mj5cvtqz90x6h2uk8vqht2s89',
  bAtomReward: 'terra1s8sec526ewxc4wfywhc80a0e9vrzpfesc0nqau',
  bAtomConverter: 'terra16ytmdkpfw93emkskqjz6mwctgcdsg9qx62td94',
  bAtomCustody: '',
  bAtomWormhole: '',
  bSolToken: 'terra1s3m7wu58ck3xkptmdun8u4qv5ggew7lttw4x67',
  bSolReward: 'terra1uwlxcas745mwjte8wwu2l0fcs483twujnt8j5l',
  bSolConverter: 'terra1xeklftjkhtyv9wdke0yna4vx4qks39kl9kt0qp',
  bSolCustody: '',
  bSolWormhole: '',
  mmInterestModel: 'terra1m25aqupscdw2kw4tnq5ql6hexgr34mr76azh5x',
  mmOracle: 'terra1p4gg3p2ue6qy2qfuxtrmgv2ec3f4jmgqtazum8',
  mmMarket: 'terra15dwd5mj8v59wpj0wvt233mf5efdff808c5tkal',
  mmOverseer: 'terra1qljxd0y3j3gk97025qvl3lgq8ygup4gsksvaxv',
  mmLiquidation: 'terra16vc4v9hhntswzkuunqhncs9yy30mqql3gxlqfe',
  mmLiquidationQueue: 'terra18j0wd0f62afcugw2rx5y8e6j5qjxd7d6qsc87r',
  mmDistributionModel: 'terra1u64cezah94sq3ye8y0ung28x3pxc37tv8fth7h',
  aTerra: 'terra1ajt556dpzvjwl0kl5tzku3fc3p3knkg9mkv8jl',
  bLunaLunaPair: 'terra13e4jmcjnwrauvl2fnjdwex0exuzd8zrh5xk29v',
  bLunaLunaLPToken: 'terra1tj4pavqjqjfm0wh73sh7yy9m4uq3m2cpmgva6n',
  ancUstPair: 'terra1wfvczps2865j0awnurk9m04u7wdmd6qv3fdnvz',
  ancUstLPToken: 'terra1vg0qyq92ky9z9dp0j9fv5rmr2s80sg605dah6f',
  gov: 'terra16ckeuu7c6ggu52a8se005mg5c0kd2kmuun63cu',
  distributor: 'terra1z7nxemcnm8kp7fs33cs7ge4wfuld307v80gypj',
  collector: 'terra1hlctcrrhcl2azxzcsns467le876cfuzam6jty4',
  community: 'terra17g577z0pqt6tejhceh06y3lyeudfs3v90mzduy',
  staking: 'terra19nxz35c8f7t3ghdxrxherym20tux8eccar0c3k',
  ANC: 'terra1747mad58h0w4y589y3sk84r5efqdev9q4r02pc',
  airdrop: 'terra1u5ywhlve3wugzqslqvm8ks2j0nsvrqjx0mgxpk',
  team_vesting: 'terra1pm54pmw3ej0vfwn3gtn6cdmaqxt0x37e9jt0za',
  investor_vesting: 'terra10evq9zxk2m86n3n3xnpw28jpqwp628c6dzuq42',
};

export const addressProvider = new AddressProviderFromJson(contracts);

export const bLUNAAddressProvider = new BAssetAddressProviderImpl(
  bAssetBombay12['bLUNA'],
);

export const bETHAddressProvider = new BAssetAddressProviderImpl(
  bAssetBombay12['bETH'],
);
