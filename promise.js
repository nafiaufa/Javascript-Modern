const serverPermintaan = new Promise((resolve, reject) => {
    let responDariServer = true;
      
    if(responDariServer) {
      resolve("Data di dapat");
    } else {  
      reject("Data tidak di terima");
    }
  });
  serverPermintaan.then(result => {
    console.log(result)
  })
  serverPermintaan.catch(error => {
    console.log(error);
  });
  