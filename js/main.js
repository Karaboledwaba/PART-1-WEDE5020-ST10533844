// Only run form logic if enquiryForm exists (on enquiry.html page)
if (document.forms["enquiryForm"]) {
    let form = document.forms["enquiryForm"];
    let customerName = form["fullName"].value;
}
