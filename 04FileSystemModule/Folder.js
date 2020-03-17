const fs = require("fs");

// fs.mkdir('example',(err)=>{
//     if (err) {
//                 console.log(err);
//             }else{
//                 console.log('Created FOlder');

//             }
// })

// fs.rmdir('Folder',(err)=>{
//     if (err) {
//                 console.log(err);
//             }else{
//                 console.log('Deleted FOlder');

//             }
// })

//readdir
fs.readdir("example", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(files);
    for (let file of files) {
      fs.unlink("./example/" + file, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Deleted Files");
        }
      });
    }
  }
});
