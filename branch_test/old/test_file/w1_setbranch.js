if (eth.getBranchBlockByRegion("w1") === null) {
    eth.setBranchBlock({ from: eth.accounts[0], branchid: "w1", settime: 10 })
} else {
    eth.getBranchBlockByRegion("w11")
    eth.getBranchBlockByRegion("w12")
}