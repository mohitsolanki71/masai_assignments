

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

    user_data = JSON.stringify(user_data);

    fetch("https://masai-api-mocker.herokuapp.com/auth/register",{

        method:"POST",

        body: user_data,

        headers: {
            "content-Type":"application/json",
        },
    })

    .then((res)=>{

        return res.json();
    })

    .then((res)=>{
        console.log(res);
    })

    .catch((err)=>{
        console.log(err);
    });
}
