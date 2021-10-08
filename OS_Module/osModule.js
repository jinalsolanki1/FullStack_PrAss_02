var os=require('os');
console.log("1.CPU Architecture :"+ os.arch());
console.log("2.Free Memory :"+ os.freemem());
console.log("3.Total Memory :"+ os.totalmem());
console.log("4.OS Platform :"+ os.platform());
console.log("5.Current User Information :");
console.log(os.userInfo());