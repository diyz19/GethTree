var Web3 = require('web3');
var w1_web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8549"));
var w11_web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8511"));
var w12_web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8521"));
// var w2_web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8542"))

//accounts_manage_account
var ama = "0x196424dd2bf7c978228ebd7a17b38b993d650696";
//mobile_account
var macc1 = "0x12d0e4381ef94a70a49252e35b9a65fadd3872b9";
var macc2 = "0x95fcbbba05858b53b829361a052450179d7a62ca";
var macc3 = "0x59cadf05182c56784b60960159c0fb4d16860d10";
var macc4 = "0x4d326e5422c48ca1db8695bb59c9a58005a3fb44";
var macc5 = "0x1daf02e444bec7fc7fdbbac7704c57d001b19648";
var macc6 = "0xf41384cb20cd007daea6b0d7eefa3942ac44a3d1";
var macc7 = "0x8ed2d00a4ee496e51fab00ddc7561f85186e2a9c";
var macc8 = "0xcada164cb319316a133741dbaa1b40fcc8caec52";
var macc9 = "0x4461e120a1bcbdc9e08730f59c7e169bac5de38f";
var macc10 = "0x0b424be2eb61a4fa045161198754613a93845857";

//mobile_account_add
var add_macc1 = '[18 208 228 56 30 249 74 112 164 146 82 227 91 154 101 250 221 56 114 185]';
var add_macc2 = '[149 252 187 186 5 133 139 83 184 41 54 26 5 36 80 23 157 122 98 202]';
var add_macc3 = '[89 202 223 5 24 44 86 120 75 96 150 1 89 192 251 77 22 134 13 16]';
var add_macc4 = '[77 50 110 84 34 196 140 161 219 134 149 187 89 201 165 128 5 163 251 68]';
var add_macc5 = '[29 175 2 228 68 190 199 252 127 219 186 199 112 76 87 208 1 177 150 72]';
var add_macc6 = '[244 19 132 203 32 205 0 125 174 166 176 215 238 250 57 66 172 68 163 209]';
var add_macc7 = '[142 210 208 10 78 228 150 229 31 171 0 221 199 86 31 133 24 110 42 156]';
var add_macc8 = '[202 218 22 76 179 25 49 106 19 55 65 219 170 27 64 252 200 202 236 82]';
var add_macc9 = '[68 97 225 32 161 188 189 201 224 135 48 245 156 126 22 155 172 93 227 143]';
var add_macc10 = '[11 66 75 226 235 97 164 250 4 81 97 25 135 84 97 58 147 132 88 87]';

//w11_account
var accw11 = "0x456c4df0610c7611ae8bcaed32dd1d94e88ceca4";
//w12_account
var accw12 = "0x1dee886dee470f8e725c27061b55ad7e8619d92a";

var starttime,endtime;

var hash_req1,hash_req2,hash_req3,hash_req4,hash_req5,hash_req6,hash_req7,hash_req8,hash_req9,hash_req10;
var hash_out,hash_in;

//1. 第一次移动:移动账户在目标链w12发起位置写入交易Tx_common，没有余额无法写入  value:w3_web3.toWei(1,"ether")
function Tx_common_w12(){
	//移动账户在目标链发送普通交易,余额不足,未成功
w12_web3.eth.sendTransaction({from:macc1,to:accw12,position:"w1201111111111",txtime:1100},function(err,res){
	if(err){
	  //console.log("Error:",err);
	  console.log("!!macc1--insufficient funds for this tx--w12!!")
	}	
});	
sleep(200)

//2. 第一次移动:移动账户在目标链w12发起资产转移请求交易Tx_request
Tx_request_w12();	
}

//2. 移动账户在目标链w12发起资产转移请求交易Tx_request
function Tx_request_w12(){
	//查询余额,这时余额为0
	sleep(2000)
	starttime = Date.now();
	w12_web3.eth.sendTransaction({from:macc1,to:ama,position:"w1211111111111",txtype:1,txtime:2100},function(err,res){
		if(err){
		console.log("Error:",err);
		}else{
		sleep(2000)
		hash_req1 = w12_web3.toHex(res);
		console.log("macc1_hash_req:",hash_req1);
			}
	});
}

//4. ama在目标链发送资产转入交易Tx_in
function send_inchain_tx(inweb3,acc,inbal,txouthash,inpos,outweb3,outpos){
	inweb3.eth.sendTransaction({from:ama,to:acc,value:inbal,position:inpos,txtype:3,txtime:777,exdata:txouthash},function(err,res){
		if(err){
		  console.log("Error:",err);
		}else{
		  sleep(2000)
		  console.log("send_inchain--Result:",res);
		  hash_in = inweb3.toHex(res);
		  console.log("send_inchain--hash_in:",hash_in);
		  sleep(2000)
		var macc1_inbal = inweb3.eth.getBalance(acc)
		console.log("send_inchain--balance:",macc1_inbal)
		  send_result_tx(outweb3,acc,true,hash_in,outpos);
		}
	});

}


//5. ama在来源链发送Tx_result交易
function send_result_tx(outweb3,acc,result,txinhash,outpos){
	if (result){
		outweb3.eth.sendTransaction({from:ama,to:acc,position:outpos,txtype:4,txtime:888,exdata:txinhash},function(err,res){
			if(err){
			  console.log("Error:",err);
			}else{
			  sleep(2000)
			  console.log("send_result--Tx_result:",res);
			  endtime =  new Date().getTime();
			  console.log("during--",endtime - starttime)
			}
		});
	}
}



function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

exports.init_tx = function(){
	//初始余额为0	
	console.log("balance_init_macc1:",w11_web3.eth.getBalance(macc1))

//转入余额10000
	w11_web3.eth.sendTransaction({from:accw11,to:macc1,position:"w1101111111111",value:10000,txtime:100},function(err,res){
		if(err){
		console.log("macc1_beforetrans_Error:",err)	
		}else{
		sleep(2000)
		// console.log("balance_from_beforetrans:",w2_web3.eth.getBalance(macc1))
		//1. macc1在目标链w3发起位置写入交易Tx_common，没有余额无法写入
		// Tx_common_w3();
		}
	});
	
	//余额为10000	
	console.log("balance_beforetrans_macc1:",w11_web3.eth.getBalance(macc1))

	//1. 移动账户在目标链w12发起位置写入交易Tx_common，没有余额无法写入
	 Tx_common_w12();
}

//3. branchnode收到Tx_request,并获得来源链信息;移动账户在来源链w11发起资产转出交易Tx_out
// module.exports = {get_outchain_info}
exports.get_outchain_info = function(acc,outchain){
	var out_web3,curacc,macc_outbal;
		
		console.log("get_outchain_info--acc:",acc)
		console.log("get_outchain_info--outchain:",outchain)

		switch (acc){
			case add_macc1:
				curacc = macc1;
				hash_req = hash_req1;
				break;
			case add_macc2:
				curacc = macc2;
				hash_req = hash_req2;
				break;
			case add_macc3:
				curacc = macc3;
				hash_req = hash_req3;
				break;
			case add_macc4:
				curacc = macc4;
				hash_req = hash_req4;
				break;
			case add_macc5:
				curacc = macc5;
				hash_req = hash_req5;
				break;
			case add_macc6:
				curacc = macc6;
				hash_req = hash_req6;
				break;
			case add_macc7:
				curacc = macc7;
				hash_req = hash_req7;
				break;
			case add_macc8:
				curacc = macc8;
				hash_req = hash_req8;
				break;
			case add_macc9:
				curacc = macc9;
				hash_req = hash_req9;
				break;
			case add_macc10:
				curacc = macc10;
				hash_req = hash_req10;
				break;
		}


		if (outchain ==='w11'){
			console.log("curacc:",curacc)
			macc_outbal = w11_web3.eth.getBalance(curacc)
			console.log("get_outchain_info--outchain_balance:",macc_outbal)
			w11_web3.eth.sendTransaction({from:curacc,to:ama,value:macc_outbal,position:"w1155111111111",txtype:2,txtime:666,exdata:hash_req},function(err,res){
				if(err){
				  console.log("Error:",err);
				}else{
					sleep(2000);
				  console.log("Result:",res);
				  hash_out = w11_web3.toHex(res);			
				  send_inchain_tx(w12_web3,curacc,macc_outbal,hash_out,"w1266111111111",w11_web3,"w1177111111111");
					}
			});
		}else if (outchain ==='w12') {
			console.log("curacc:",curacc)
			macc_outbal = w12_web3.eth.getBalance(curacc)
			w12_web3.eth.sendTransaction({from:curacc,to:ama,value:macc_outbal,position:"w1255111111111",txtype:2,txtime:666,exdata:hash_req},function(err,res){
				if(err){
				  console.log("Error:",err);
				}else{
					sleep(2000);
				  console.log("Result:",res);
				  hash_out = w12_web3.toHex(res);
				  //console.log("3-w3-hash_out:",hash_out);
				  console.log("3-outchain_balance:",macc_outbal)
				  send_inchain_tx(w11_web3,macc,macc_outbal,hash_out,"w1166111111111",w12_web3,"w1277111111111");
					}
			});
		} 
	}



