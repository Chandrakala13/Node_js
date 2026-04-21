const fs = require('fs');
//mkdir
//if(!fs.existsSync("docs")) {
  //  fs.mkdir("docs", (err) => {
    //    if (err) {
      //      console.log(err);

        //}



        //else{
        //    console.log("folder created successfully");
        //}
    //});
//}
//writing to a file
//fs.writeFile("docs/blog.txt", "Hello, world", (err) => {
  //  if (err) {
    //    console.log(err);
    //}
   // else {
     //   console.log("File created successfully");
    //}
//});
//reading a file
//if (fs.existsSync("docs/blog.txt")) {
//fs.readFile("docs/blog.txt", (err, data) => {
  //  if (err) {
      // console.log(err);
    //}
    //else {
      //  console.log(data);
    //}
//});
//}

//deleting a file
//if (fs.existsSync("docs/blog.txt")) {
  //  fs.unlink("docs/blog.txt", (err) => {
    //  if (err) {
      //  console.log(err.mesaage);
        //}
        //else {
          //  console.log("File deleted ");
        //}
    //});
//}
// removing a directory
// if (fs.existsSync("docs")) {
    // fs.rmdir("docs", (err) => {
    //    if (err) {
        //    console.log(err.message);
        // }                             
        //  {
        //    console.log("Directory removedsuccessfully");
        // }
    // });
//}