// admin.addPeer("enode://0fd47811c6a45e9f216e32a3adef76d19c1d4bdb05c8f32323a17c38e46ea45a2e69af80964b9b994997e686b0c92ac23e22e082e71251e2cdfa1d4ca36db110@127.0.0.1:30309")
admin.addPeer("enode://70cc681204119351b650861ce604347fd5e8f306cd29e5c0e1e1e53c93fd63b7d583a4ab5ccdfe2526900db4344443a20a22f6f7a4387fff095bd38fbaebac38@127.0.0.1:30309?discport=0")


sleep(10000)

if (eth.getBranchBlockByRegion("w11") === null) {
    eth.setBranchBlock({ from: eth.accounts[0], branchid: "w11", settime: 20 })
}

// eth.setBranchBlock({from:eth.accounts[0],branchid:"w11",settime:20})

sleep(10000)
miner.setEtherbase(eth.accounts[2])

//账户解锁
personal.unlockAccount(eth.accounts[0],"123",30000)
personal.unlockAccount(eth.accounts[1],"123",30000)
personal.unlockAccount(eth.accounts[2],"123",30000)
personal.unlockAccount(eth.accounts[3],"123",30000)
personal.unlockAccount(eth.accounts[4],"123",30000)
personal.unlockAccount(eth.accounts[5],"123",30000)
personal.unlockAccount(eth.accounts[6],"123",30000)
personal.unlockAccount(eth.accounts[7],"123",30000)
personal.unlockAccount(eth.accounts[8],"123",30000)
personal.unlockAccount(eth.accounts[9],"123",30000)
personal.unlockAccount(eth.accounts[10],"123",30000)
personal.unlockAccount(eth.accounts[11],"123",30000)
personal.unlockAccount(eth.accounts[12],"123",30000)

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
