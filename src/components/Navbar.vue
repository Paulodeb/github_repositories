<template>
 <div class='home-container'>
        <div class='nav'>
            <router-link to="/">PO</router-link>
            <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/repos">Repos</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
}
</script>
<style scoped>
    .home-container {
        width: 100%;
    }
    .nav {
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 3rem;
        background-color: #000;
    }

    .nav ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
    }
.nav a{
    color: #fff;
    font-size: 30px;
    font-weight: 500;
    text-decoration: none;
}
    .nav ul li a{
        color: #fff;
        font-size: 15px;
        border: 1px solid #000;
        padding: 0.3rem 1rem;
        margin: 0 0.5rem;
        border-bottom: 3px solid #a00;
    }
    
    .nav ul li a:hover{
        color: #fff;
        background-color: #a00;
        border-radius: 5px;
        transition: 0.4s;
    }
@media screen and (max-width: 468px) {
    .nav ul li a{
        font-size: 10px;
        padding: 0.1rem 0.5rem;
        margin: 0 0.2rem;
    }
}



</style>