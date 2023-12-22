const date = new Date();
const hour = date.getHours();
// console.log(hour);

if (hour < 9 || hour > 17) {
    console.log("Office is closed")
} else{
    console.log("Office is open")
}