var config = require('config');
var veros = require('veros-demo');

veros.connectToEthereumNode("http://127.0.0.1:8545",
    config.get("ownerWallet"),
    config.get("ownerWalletPassword"),
    false,
    function(err,blockNumber) {
        if (!err) {

        }
    });

// b8967c0b78055357bc0804f7379472d3dec1a78f
function deployVerosToken(ownerAddress,ownerPassword) {
    ownerAddress = "0x" + ownerAddress;
    var web3 = veros.getWeb3();

    web3.personal.unlockAccount(ownerAddress,ownerPassword);
    var gasLimit = parseInt(web3.eth.getBlock("latest").gasLimit*0.99)

    var _genesisWalletAddress = "0x778af6e059fb6e7f621cf4b6d86b9f37d7ffea7d";
    var _mainWalletAddress = "0x95f2825bf7904b27a4bc61d67f9537cba407af78";
    var _stakingWalletAddress = "0xcf62dfc079c5d594c257c8fcc0bc2334d17595e1";
    var _stakeholderWalletAddress = "0xcaf34de82530abbe626ddefec8dace7263291343";
    var _investorWalletAddress = "0x4ac10f3cd291bd7b869428c68a8936ea16c807a8";
    var _feeWalletAddress = "0x41e6a8b82dc2fd99aaff2e13b54a57bb6543b8db";


    var verostokenContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_availableSupply","type":"uint256"}],"name":"setAvailableSupply","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"availableSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_children","type":"address"},{"name":"_parent","type":"address"}],"name":"removeChildrenAddress","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"childrens","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_children","type":"address"},{"name":"_parent","type":"address"}],"name":"addChildrenAddress","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_genesisWalletAddress","type":"address"},{"name":"_mainWalletAddress","type":"address"},{"name":"_stakingWalletAddress","type":"address"},{"name":"_stakeholderWalletAddress","type":"address"},{"name":"_investorWalletAddress","type":"address"},{"name":"_feeWalletAddress","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_parent","type":"address"},{"indexed":true,"name":"_children","type":"address"}],"name":"AddChildren","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_parent","type":"address"},{"indexed":true,"name":"_children","type":"address"}],"name":"RemoveChildren","type":"event"}]);
    var verostoken = verostokenContract.new(
        _genesisWalletAddress,
        _mainWalletAddress,
        _stakingWalletAddress,
        _stakeholderWalletAddress,
        _investorWalletAddress,
        _feeWalletAddress,
        {
            from: ownerAddress,
            data: '0x6060604052620186a0600360005055610bb86004600050556305f5e10060056000505560405160c080610f0a833981016040528080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919050505b33600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690836c0100000000000000000000000090810204021790555060036000505460056000505460600202600760005060008873ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190555060036000505460056000505402600760005060008773ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190555060036000505460056000505402600760005060008673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190555060036000505460056000505402600760005060008573ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190555060036000505460056000505402600760005060008473ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508190555060036000505460056000505460640202600060005081905550600360005054600560005054026001600050819055505b505050505050610cda806102306000396000f3606060405236156100c1576000357c010000000000000000000000000000000000000000000000000000000090048063095ea7b3146100c65780631723934d1461010257806318160ddd1461013557806323b872dd1461015d57806327e235e3146101a257806370a08231146101d35780637ecc2b561461020457806383c93da91461022c5780638da5cb5b14610268578063934a0503146102a6578063a9059cbb146102ed578063bc6c3ccc14610329578063dd62ed3e14610365576100c1565b610002565b34610002576100ea600480803590602001909190803590602001909190505061039f565b60405180821515815260200191505060405180910390f35b346100025761011d6004808035906020019091905050610473565b60405180821515815260200191505060405180910390f35b346100025761014760048050506104ed565b6040518082815260200191505060405180910390f35b346100025761018a60048080359060200190919080359060200190919080359060200190919050506104f6565b60405180821515815260200191505060405180910390f35b34610002576101bd600480803590602001909190505061072b565b6040518082815260200191505060405180910390f35b34610002576101ee6004808035906020019091905050610746565b6040518082815260200191505060405180910390f35b34610002576102166004805050610784565b6040518082815260200191505060405180910390f35b3461000257610250600480803590602001909190803590602001909190505061078d565b60405180821515815260200191505060405180910390f35b346100025761027a60048050506108bb565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34610002576102c160048080359060200190919050506108e1565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34610002576103116004808035906020019091908035906020019091905050610919565b60405180821515815260200191505060405180910390f35b346100025761034d6004808035906020019091908035906020019091905050610b44565b60405180821515815260200191505060405180910390f35b34610002576103896004808035906020019091908035906020019091905050610c71565b6040518082815260200191505060405180910390f35b600081600960005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905061046d565b92915050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104d557600090506104e8565b81600160005081905550600190506104e8565b919050565b60006000505481565b60006004600050548201600760005060008673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054101580156105b557503373ffffffffffffffffffffffffffffffffffffffff16600860005060008673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b80156105c15750600082115b1561071a5760046000505460076000506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505401925050819055506004600050548201600760005060008673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054039250508190555081600760005060008573ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905061072456610723565b60009050610724565b5b9392505050565b60076000506020528060005260406000206000915090505481565b6000600760005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054905061077f565b919050565b60016000505481565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107ef57600090506108b5565b6000600860005060008573ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690836c010000000000000000000000009081020402179055508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167ff613578c532c6dc72a482b8b1a44c8e119bfe7da0093d9300e5cc3167af30dbe60405180905060405180910390a35b92915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600860005060205280600052604060002060009150909054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081600760005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050541015801561095a5750600082115b15610b34576004600050548201600760005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054101515610a495760046000505460076000506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505401925050819055506004600050548201600760005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082828250540392505081905550610a86565b81600760005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505403925050819055505b81600760005060008573ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610b3e56610b3d565b60009050610b3e565b5b92915050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ba65760009050610c6b565b81600860005060008573ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690836c010000000000000000000000009081020402179055508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4cb1a99c0ed34af0aaa087395544e36b6f23a64eee7ab1802dc106c294d73b1660405180905060405180910390a35b92915050565b6000600960005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050549050610cd4565b9291505056',
            gas: gasLimit,
            gasPrice: 200000000000
        }, function (e, contract){
            console.log(e, contract);
            if (typeof contract.address !== 'undefined') {
                console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
            }
        })
}

function createAccount(password) {
    console.log("Address = " + veros.createAccount(password));
}

function checkAccount(address,password) {
    address = "0x" + address;
    console.log("Unlock account = " + veros.checkAccount(address,password));
}
//acb0c84dbca1d25fe97d5513456b926abd758dbe
function getVerosBalance(address) {
    address = "0x" + address;
    console.log("VEROS Balance (" + address + ") = " + veros.getVerosBalance(address).toString());
}

function getETHBalance(address) {
    address = "0x" + address;
    console.log("ETH Balance (" + address + ") = " + veros.getETHBalance(address));
}
// node index.js sendEther 95f2825bf7904b27a4bc61d67f9537cba407af78 be331ee4-135c-4a9f-a9e3-315a36defc51 cf62dfc079c5d594c257c8fcc0bc2334d17595e1 2
function sendEther(from,password,to,amount) {
    from = "0x" + from;
    to = "0x" + to;

    veros.sendEther(from,password,to,amount,function(err,tx) {
        console.log(err);
        console.log(tx);
    });
}

// node index.js sendVeros 95f2825bf7904b27a4bc61d67f9537cba407af78 be331ee4-135c-4a9f-a9e3-315a36defc51 57838d8ec2bd0e85f4bb21c836d71a440fc9927d 4864900000
function sendVeros(senderAddress, senderPassword,destinationAddress,amount) {
    senderAddress = "0x" + senderAddress;
    destinationAddress = "0x" + destinationAddress;
    veros.transfer(senderAddress,senderPassword,destinationAddress,amount,function(err,tx) {
        console.log(err);
        console.log(tx);
    });
}

function sendVerosFromAddress(fromAccount,fromAccountPassword,fromAddress,recipientAddress,amount) {

    fromAccount = "0x" + fromAccount;
    fromAddress = "0x" + fromAddress;
    recipientAddress = "0x" + recipientAddress;

    veros.transferFrom(fromAccount,fromAccountPassword,fromAddress,recipientAddress,amount,function(err,tx) {
        console.log(err);
        console.log(tx);
    });
}

function getChildrens(parentAddress) {
    veros.getChildren(parentAddress,function(err,tx) {
        console.log(err);
        console.log(tx);
    });
}

function getChildrenEvents() {
    veros.getChildrenEvents(function(err,events) {
        console.log(err);
        console.log(events);
    });
}

function addChildWallet(password) {
    var address = veros.addChildrenAddress(
        config.get("ownerWallet"),
        config.get("ownerWalletPassword"),
        config.get("webWallet"),
        password,
        function(err,tx,childAddress) {
            console.log(err);
            console.log(tx);
            console.log(childAddress);
        }
    );
}

// node index.js addChildWalletPredefined 9e56da51bc011c15ceadb0d6c8e85154b9b5f0d7
function addChildWalletPredefined(address) {
    address = "0x" + address;
    veros.addPredefinedChildrenAddress(
        config.get("ownerWallet"),
        config.get("ownerWalletPassword"),
        config.get("webWallet"),
        address,
        function(err,tx,childAddress) {
            console.log(err);
            console.log(tx);
            console.log(childAddress);
        }
    );
}

module.exports = {
    deployVerosToken: deployVerosToken,
    checkAccount: checkAccount,
    createAccount: createAccount,

    getETHBalance: getETHBalance,
    sendEther: sendEther,

    getVerosBalance: getVerosBalance,

    sendVeros:sendVeros,
    sendVerosFromAddress:sendVerosFromAddress,

    getChildrens:getChildrens,
    getChildrenEvents:getChildrenEvents,

    addChildWallet:addChildWallet,
    addChildWalletPredefined:addChildWalletPredefined
}

require('make-runnable');