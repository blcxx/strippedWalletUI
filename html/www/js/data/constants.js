if (!NRS) {
    var NRS = {};
    NRS.constants = {};
}

NRS.constants.SERVER = {"transactionSubTypes":{"AliasAssignment":{"isPhasable":true,"subtype":1,"mustHaveRecipient":false,"name":"AliasAssignment","canHaveRecipient":false,"type":1,"isPhasingSafe":false},"ArbitraryMessage":{"isPhasable":true,"subtype":0,"mustHaveRecipient":false,"name":"ArbitraryMessage","canHaveRecipient":true,"type":1,"isPhasingSafe":false},"OrdinaryPayment":{"isPhasable":true,"subtype":0,"mustHaveRecipient":true,"name":"OrdinaryPayment","canHaveRecipient":true,"type":0,"isPhasingSafe":true}},"genesisAccountId":"1739068987193023818","transactionTypes":{"0":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":true,"name":"OrdinaryPayment","canHaveRecipient":true,"type":0,"isPhasingSafe":true}}},"1":{"subtypes":{"0":{"isPhasable":true,"subtype":0,"mustHaveRecipient":false,"name":"ArbitraryMessage","canHaveRecipient":true,"type":1,"isPhasingSafe":false},"1":{"isPhasable":true,"subtype":1,"mustHaveRecipient":false,"name":"AliasAssignment","canHaveRecipient":false,"type":1,"isPhasingSafe":false}}}},"votingModels":{"NQT":1,"CURRENCY":3,"ACCOUNT":0,"ASSET":2,"TRANSACTION":4,"NONE":-1,"HASH":5},"holdingTypes":{"CURRENCY":2,"ASSET":1,"NXT":0},"maxPrunableMessageLength":43008,"shufflingParticipantStates":{"CANCELLED":3,"REGISTERED":0,"PROCESSED":1,"VERIFIED":2},"disabledAPITags":[],"maxBlockPayloadLength":44880,"coinSymbol":"BLCX","maxPhasingDuration":20160,"proxyNotForwardedRequests":["getState","getMyInfo","getBlockchainStatus","getPeer","getPeers","retrievePrunedData","getInboundPeers"],"mintingHashAlgorithms":{"SHA256":2,"SHA3":3,"SCRYPT":5,"Keccak25":25},"maxArbitraryMessageLength":160,"apiTags":{"NETWORK":{"name":"Networking","enabled":true},"FORGING":{"name":"Forging","enabled":true},"AE":{"name":"Asset Exchange","enabled":true},"UTILS":{"name":"Utils","enabled":true},"ACCOUNTS":{"name":"Accounts","enabled":true},"SEARCH":{"name":"Search","enabled":true},"MS":{"name":"Monetary System","enabled":true},"TOKENS":{"name":"Tokens","enabled":true},"INFO":{"name":"Server Info","enabled":true},"TRANSACTIONS":{"name":"Transactions","enabled":true},"DEBUG":{"name":"Debug","enabled":true},"CREATE_TRANSACTION":{"name":"Create Transaction","enabled":true},"DGS":{"name":"Digital Goods Store","enabled":true},"SHUFFLING":{"name":"Shuffling","enabled":true},"PHASING":{"name":"Phasing","enabled":true},"BLOCKS":{"name":"Blocks","enabled":true},"DATA":{"name":"Tagged Data","enabled":true},"ALIASES":{"name":"Aliases","enabled":true},"MESSAGES":{"name":"Messages","enabled":true},"ADDONS":{"name":"Add-ons","enabled":true},"VS":{"name":"Voting System","enabled":true},"ACCOUNT_CONTROL":{"name":"Account Control","enabled":true}},"maxTaggedDataDataLength":43008,"shufflingStages":{"CANCELLED":4,"DONE":5,"PROCESSING":1,"BLAME":3,"REGISTRATION":0,"VERIFICATION":2},"disabledAPIs":[[]],"genesisBlockId":"0","accountPrefix":"BLX","currencyTypes":{"EXCHANGEABLE":1,"CLAIMABLE":8,"MINTABLE":16,"CONTROLLABLE":2,"RESERVABLE":4,"NON_SHUFFLEABLE":32},"peerStates":{"DISCONNECTED":2,"NON_CONNECTED":0,"CONNECTED":1},"epochBeginning":1514808000000,"minBalanceModels":{"NQT":1,"CURRENCY":3,"ASSET":2,"NONE":0},"initialBaseTarget":"153722867","projectName":"BLCX Coin","phasingHashAlgorithms":{"SHA256":2,"RIPEMD160":6,"RIPEMD160_SHA256":62},"hashAlgorithms":{"SHA256":2,"SHA3":3,"SCRYPT":5,"RIPEMD160":6,"Keccak25":25,"RIPEMD160_SHA256":62},"requestTypes":{"getLastExchanges":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"startFundingMonitor":{"allowRequiredBlockParameters":false,"requireFullClient":true,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"getGuaranteedBalance":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getExpectedAskOrders":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"fullHashToId":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":false,"enabled":true},"getAccountPublicKey":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"detectMimeType":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"fileParameter":"file","requirePost":true,"enabled":true},"getAskOrders":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"stopForging":{"allowRequiredBlockParameters":false,"requireFullClient":true,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"getBlocks":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getExchangesByOffer":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAllOpenBidOrders":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAccountExchangeRequests":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"downloadPrunableMessage":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAccountBlockCount":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"deleteAlias":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"clearUnconfirmedTransactions":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":true,"enabled":true},"getPlugins":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":false,"enabled":true},"getHoldingShufflings":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getFundingMonitor":{"allowRequiredBlockParameters":false,"requireFullClient":true,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAccountCurrentBidOrders":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"addPeer":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":true,"enabled":true},"getSharedKey":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"popOff":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":true,"enabled":true},"getBalance":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAccountPhasedTransactions":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAvailableToBuy":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getNextBlockGenerators":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"setLogging":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":true,"enabled":true},"getAliasCount":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getTransactionBytes":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"startForging":{"allowRequiredBlockParameters":false,"requireFullClient":true,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"retrievePrunedTransaction":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"getAllAssets":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getInboundPeers":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"hash":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":false,"enabled":true},"verifyPrunableMessage":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"decodeQRCode":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":true,"enabled":true},"getAllExchanges":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getExpectedOrderCancellations":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getReferencingTransactions":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getForging":{"allowRequiredBlockParameters":false,"requireFullClient":true,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"eventRegister":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"scan":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":true,"enabled":true},"luceneReindex":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":true,"enabled":true},"hexConvert":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":false,"enabled":true},"fullReset":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":true,"enabled":true},"encodeQRCode":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":true,"enabled":true},"getAccountBlockIds":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAvailableToSell":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAllWaitingTransactions":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":false,"enabled":true},"getAccount":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"blacklistAPIProxyPeer":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":true,"enabled":true},"getAccountAssetCount":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getPeer":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAccountCurrentAskOrderIds":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getUnconfirmedTransactionIds":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAccountShufflings":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAliasesLike":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getBidOrder":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getPeers":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAllShufflings":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"placeAskOrder":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"rebroadcastUnconfirmedTransactions":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":true,"enabled":true},"getAllBroadcastedTransactions":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":false,"enabled":true},"setAccountInfo":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"getAskOrderIds":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAskOrder":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getExpectedExchangeRequests":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"placeBidOrder":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"getAccountBlocks":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"requeueUnconfirmedTransactions":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":true,"enabled":true},"setAPIProxyPeer":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":true,"enabled":true},"signTransaction":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":false,"enabled":true},"getExpectedTransactions":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAliases":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"trimDerivedTables":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":true,"enabled":true},"getAccountCurrentBidOrderIds":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAllPhasingOnlyControls":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getLog":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":false,"enabled":true},"searchAccounts":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAccountLedger":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"deleteScheduledTransaction":{"allowRequiredBlockParameters":false,"requireFullClient":true,"requirePassword":true,"requireBlockchain":true,"requirePost":true,"enabled":true},"getAccountLedgerEntry":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAccountAssets":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"deleteAccountProperty":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"getBlockchainTransactions":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"sendMoney":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"getMyInfo":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"publishExchangeOffer":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"getLinkedPhasedTransactions":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAllTrades":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"approveTransaction":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"parseTransaction":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":false,"enabled":true},"getBidOrders":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getStackTraces":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":false,"enabled":true},"rsConvert":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":false,"enabled":true},"getAccountLessors":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getScheduledTransactions":{"allowRequiredBlockParameters":false,"requireFullClient":true,"requirePassword":true,"requireBlockchain":true,"requirePost":false,"enabled":true},"getECBlock":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"leaseBalance":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"getAccountPhasedTransactionCount":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"setAlias":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"getAlias":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"markHost":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":true,"enabled":true},"shutdown":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":true,"enabled":true},"stopFundingMonitor":{"allowRequiredBlockParameters":false,"requireFullClient":true,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"getTime":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":false,"enabled":true},"buyAlias":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"getAccountCurrentAskOrders":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"scheduleCurrencyBuy":{"allowRequiredBlockParameters":false,"requireFullClient":true,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"eventWait":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"getOrderTrades":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getMintingTarget":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"longConvert":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":false,"enabled":true},"getBlockId":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getLastTrades":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getExpectedBidOrders":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getBidOrderIds":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"sellAlias":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"getBlockchainStatus":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getConstants":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":false,"enabled":true},"dumpPeers":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":true,"enabled":true},"getTransaction":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAllOpenAskOrders":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getBlock":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAllPrunableMessages":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getExchangesByExchangeRequest":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getPrunableMessage":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"broadcastTransaction":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"blacklistPeer":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":true,"enabled":true},"retrievePrunedData":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":true,"requirePost":true,"enabled":true},"getUnconfirmedTransactions":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"encryptTo":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"setAccountProperty":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":true,"enabled":true},"getState":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAccountId":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":false,"enabled":true},"getTrades":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getPrunableMessages":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"calculateFullHash":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":false,"requireBlockchain":false,"requirePost":false,"enabled":true},"sendTransaction":{"allowRequiredBlockParameters":false,"requireFullClient":false,"requirePassword":true,"requireBlockchain":false,"requirePost":true,"enabled":true},"getAccountProperties":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getAssignedShufflings":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true},"getExchanges":{"allowRequiredBlockParameters":true,"requireFullClient":false,"requirePassword":false,"requireBlockchain":true,"requirePost":false,"enabled":true}}}

if (isNode) {
    module.exports = NRS.constants.SERVER;
}
