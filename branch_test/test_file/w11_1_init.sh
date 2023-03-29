#!/bin/sh

node_dir=../geth_w11_1

geth-tree --identity "MyEth" --rpc --rpcport "8511" --rpccorsdomain "*" \
    --datadir "$node_dir/gethdata" --port "30311" --nodiscover \
    --rpcapi "eth,net,personal,web3,miner" --networkid "w11" \
    init "$node_dir/genesisgtrie.json"

geth-tree --identity "MyEth" --rpc --rpcport "8511" --rpccorsdomain "*" \
    --datadir "$node_dir/gethdata" --port "30311" --nodiscover \
    --rpcapi "eth,net,personal,web3,miner" --networkid "w11" --allow-insecure-unlock \
    --dev.period 1 --preload "w11_1_addPeer.js" console