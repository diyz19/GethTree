#!/bin/sh

node_dir=../geth_w1

# 正常版本
geth-tree --identity "MyEth" --rpc --rpcport "8549" --rpccorsdomain "*" --datadir "$node_dir/gethdata" --port "30309" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w1" init "$node_dir/genesisgtrie.json"

# 无log
geth-tree --identity "MyEth" --rpc --rpcport "8549" --rpccorsdomain "*" --datadir "$node_dir/gethdata" --port "30309" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w1" --syncmode "branch" --allow-insecure-unlock --dev.period 1 --preload "w1_setbranch.js" console
