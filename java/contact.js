function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        };
const serviceID ="service_nrb06se";
const templateID ="template_2i7al98";

emailjs
.send(serviceID, templateID, params)
.then((res)=>{
    document.getElementById("name").value ="",
    document.getElementById("email").value="",
    document.getElementById("message").value="",
    console.log(res);
    alert("your message sent successfully");
})
.catch((err) => console.log(err));
}