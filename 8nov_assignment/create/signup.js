

function signup(e){
    e.preventDefault();

    let form = document.getElementById("signup-form");

    let user_data = {
        name: form.name.value,

        email:form.email.value,

        password: form.password.value,

        username: form.username.value,

        mobile: form.mobile.value,

        description: form.description.value,
    }

    console.log(user_data);
}
