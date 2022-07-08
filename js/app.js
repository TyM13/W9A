let userage = 18;
let is_subscribed = "false";
if (userage >= 18 && is_subscribed === "true") {
    console.log("user over 18 and subscribed");
}  else if (userage <= 17 && is_subscribed === "false") {
    console.log("user under 18 and not subscribed");
} else if (userage <= 17 && is_subscribed === "true") {
    console.log("user under 18 and subscribed");
} else if (userage >= 18 && is_subscribed === "false") {
    console.log("user over 18 and not subscribed");
}else{
    console.log("error");
}
