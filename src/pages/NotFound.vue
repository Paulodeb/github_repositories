<template>
    <div class="error-container">
    <div class="error">
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1678995225~exp=1678995825~hmac=f6b66f5949d16c252db38a15a08d6e17f5e036cd5795a1a846417215cfe42c6b" alt="">
        </div>
        <div class="error-text">
            <h1 class='head'>Page Not Found</h1>
            <p>
                We couldn't find that page. Try going back
                <router-link to="/">home</router-link>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.error-container{
    width: 100%;
   justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.error-container .error{
    justify-content: center;
    padding-top: 5rem;
    align-items: center;
    width: 40%;
    text-align: center;
    height: 50%;
}

.error img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.error-text{
    width: 80%;
    text-align: center;
    height: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.error-text p{
    font-size: 15px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.error-text p a{
    color: #000;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 0.5rem;
    margin-top: 1rem;
    transition: all 0.3s ease-in-out;
}

.error-text p a:hover{
    background-color: rgba(36, 37, 42, 0.3);
    color: #fff;
    transition: all 0.3s ease-in-out;
}
    .head{
        font-size: 30px;
        font-weight: 700;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
@media screen and  ( max-width: 768px) {
}

@media screen and ( max-width: 425px) {
    .error-container{
        margin-top: 60px;
    }
    .head{
        font-size: 20px;
    }
    .error-text p{
        font-size: 10px;
    }
    .error-text p a{
        /* margin-top: 10px; */
        font-size: 10px;
    }
}

</style>