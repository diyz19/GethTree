//添加w1
admin.addPeer("enode://9382213a74dec4c63180a6869d6fae9006726ea26da84680b8eb223d9a08da6f8e674226a9b04ad7d602f882db442b495b415bfc7174b7323dbe11b8b8c04eb0@127.0.0.1:30309?discport=0")

sleep(10000)

if (eth.getBranchBlockByRegion("w12") === null) {
    eth.setBranchBlock({from:eth.accounts[0],branchid:"w12",settime:20})
}

eth.getBranchBlockByRegion("w1")  // // 据说不加上这句话有概率令w11连接不到w1

sleep(10000)

//账户解锁
personal.unlockAccount(eth.accounts[0],"123",3000)
//personal.unlockAccount(eth.accounts[1],"123",3000)
//personal.unlockAccount(eth.accounts[2],"123",3000)
//personal.unlockAccount(eth.accounts[3],"123",3000)

admin.addPeer("enode://9382213a74dec4c63180a6869d6fae9006726ea26da84680b8eb223d9a08da6f8e674226a9b04ad7d602f882db442b495b415bfc7174b7323dbe11b8b8c04eb0@127.0.0.1:30309?discport=0")

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
