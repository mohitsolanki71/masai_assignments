
function login(e){

    e.preventDefault();

    let form = document.getElementById("login-form");

    let user_data = {
        username: form.username.value,
        password: form.password.value,
    };

    let data_to_send = JSON.stringify(user_data);

    fetch("https://masai-api-mocker.herokuapp.com/auth/login",{

        method: "POST",
        body: data_to_send,

        headers:{
            "content-Type":"application/json",
        },
    })

    .then((res)=>{
        return res.json();

    })

    .then((res)=>{
        console.log(res);

        if(res.token.length > 0){
            alert("successfull login");
        }
    })
    .catch((err)=>{
        console.log(err);
    });
}
