const fs = require("fs");

// fs.writeFile("example.txt", "File created through NODE", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully");
//     fs.readFile("example.txt",'utf8', (err, file) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(file);
//       }
//     });
//   }
// });

//Rename File
// fs.rename('example.txt','example2.txt',(err)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log('Done');

//     }
// })

//Append File
// fs.appendFile("example2.txt", "New data", err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Done");
//   }
// });

//delete File

fs.unlink('example2.txt',(err)=>{
    if (err) {
                console.log(err);
            }else{
                console.log('Deleted');
                
            }
})
