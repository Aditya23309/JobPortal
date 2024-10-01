document.getElementById("hamburger").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("nav-active");
});
document.getElementById("resume-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const position = document.getElementById("position").value;
    const resume = document.getElementById("resume").files[0];

   
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (resume && validTypes.includes(resume.type)) {
       
        document.getElementById("message").textContent = "Your resume has been submitted successfully!";
        document.getElementById("message").style.color = "green";

        document.getElementById("resume-form").reset();
    } else {
        document.getElementById("message").textContent = "Please upload a valid resume (PDF or Word document).";
        document.getElementById("message").style.color = "red";
    }
});
