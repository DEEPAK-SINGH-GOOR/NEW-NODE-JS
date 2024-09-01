const fs = require('fs');
const prompt = require('prompt-sync')();

console.log("1) Enter For Create File \n 2) Enter For Read File \n 3) Enter For Rename File \n 4) Enter For Update File \n 5) Enter For Delete File \n 0) Enter For Exit File \n");

let choice = prompt();

if (choice === "0") {
    console.log("__________");
    console.log("Exiting...");
    console.log("__________");
    process.exit();
}

switch (choice) {
    case "1":
        console.log("-----------------");
        console.log("Enter File Name :");
        console.log("-----------------");
        let name = prompt();
        console.log("-----------------");
        console.log("Enter Code :");
        console.log("-----------------");
        let Code = prompt();

        fs.writeFile(name, Code, (error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log("-------------------------");
                console.log("File Created Successfully");
                console.log("-------------------------");
            }
        });
        break;
    case "2":
        console.log("-------------------------");
        console.log("Enter File Name For Read :");
        console.log("-------------------------");

        let read = prompt();
        // unicode transformation format
        fs.readFile(read,"utf-8",(error,data) => {
            if(error) {
                console.log(error);
            }
            else{
                console.log("---------------------");
                console.log("File Content : ",data);
                console.log("---------------------");
            }
        });
        break;
        
    case "3":
        console.log("-------------------------");
        console.log("Enter File Name :");
        console.log("-------------------------");
        let rename = prompt();

        console.log("-------------------------");
        console.log("Enter New Name :");
        console.log("-------------------------");
        let newName = prompt();

        fs.rename(rename,newName,(error)=>{
            if(error)
            {
                console.log(error);
            }
            else
            {
                console.log("--------------------------");
                console.log("File Rename Successflyy !!");
                console.log("--------------------------");
            }
        });
        break;

    case "4":
        console.log("-----------------");
        console.log("Enter File Name :");
        console.log("-----------------");
        let update = prompt();

        console.log("------------------");
        console.log("Enter New Content :");
        console.log("------------------");

        let newContent = prompt();
        
        fs.writeFile(update, newContent, (error) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log("-------------------------");
                console.log("File Updated Successfully");
                console.log("-------------------------");
            }
        });
        break;
    case "5":
        console.log("----------------------------");
        console.log("Enter File Name For Delete:");
        console.log("----------------------------");
        let delet = prompt();

    fs.unlink(delet,(error)=>{
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log("-------------------------");
            console.log("File Deleted Successfully");
            console.log("-------------------------");
        }
    })
    break;
    default:
        console.log("------------------------------------------------------");
        console.log("Invalid choice! Please enter a number between 0 and 5.");
        console.log("------------------------------------------------------");

}
