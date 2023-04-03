#!/bin/sh
node_dir=../geth_w12_1

geth-tree --identity "MyEth" --rpc --rpcport "8521" --rpccorsdomain "*" --datadir "$node_dir/gethdata" --port "30321" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w12" init "$node_dir/genesisgtrie.json"

geth-tree --identity "MyEth" --rpc --rpcport "8521" --rpccorsdomain "*" --datadir "$node_dir/gethdata" --port "30321" --nodiscover --rpcapi "eth,net,personal,web3,miner" --networkid "w12" --allow-insecure-unlock --dev.period 1 --preload "w12_1_addPeer.js" console