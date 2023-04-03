var Web3 = require('web3');
var w3_web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8521"));

//accounts_manage_account
var ama = "0x196424dd2bf7c978228ebd7a17b38b993d650696";//w2_0 w3_0
//mobile_account
var macc1 = "0x12d0e4381ef94a70a49252e35b9a65fadd3872b9";//w2_1 w3_1
//w2_account 
var accw2_2 = "0x456c4df0610c7611ae8bcaed32dd1d94e88ceca4";//w2_2
var accw2_3 = "0xdedee68f2020c0d3f98d2a8c23b6563f7b97e559";//w2_3
//w3_account
var accw3_2 = "0x1dee886dee470f8e725c27061b55ad7e8619d92a";//w3_2
var accw3_3 = "0x643c5a7be983732465eb04668f7fe207542295a7";//w3_3

function sleep(delay) {
    for(var t = Date.now(); Date.now() - t <= delay;);
}

// var _value = w3_web3.toWei(10,"ether");
var _value = w3_web3.utils.toWei("10", "ether");
var _position = "";
var _txtime=100;

var spos1 = "w3111111111111"
    spos1 = spos1.toString();
var sj,subpos,st;
//普通转账交易-------------
function w3_commontx(){
	st = Date.now();
	for(j=0;j<20;j++){
		sj = j.toString();
		subpos=spos1.substr(0,14-sj.length);
		_position = subpos+sj;
		w3_web3.eth.sendTransaction({from:accw3_2,to:accw3_3, value: _value,position:_position,txtime:_txtime});
		//console.log("_txtime1:", _txtime)
		_txtime =_txtime+500;
		sleep(500);
	}
}

//发送交易
w3_commontx();


