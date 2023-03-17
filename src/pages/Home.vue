<template>
    <div class='home'>
        <Navbar />
        <img src="https://img.freepik.com/free-photo/tree-grows-coin-glass-jar-with-copy-space_35913-2508.jpg?w=1060&t=st=1679047038~exp=1679047638~hmac=a498dd34a354157a81fd2aa34702a616a0ae15cad5e22013d38263ca766896c2" alt="">
        <div class="">
            <div class="text-container">
                <h1>Hello!</h1>
                <h1><span>I'm</span> Paul Oyediran</h1>
                <p>I'm a frontend developer with a passion for website development. I always try my ultimate best to provide the best experience.</p>
                <router-link to="/repos">Repositories</router-link>         </div>
        </div>
    </div>
</template>
<script>
import FetchItems from '../components/FetchItems.vue';
import Navbar from '../components/Navbar.vue';
export default {
name: 'Home',
components: {
    FetchItems,
    Navbar,
},
data() {
    return {
        
    }
},
    
}
</script>
<style scoped>
  .home{
      width: 100%;
      /* background-image: url(https://img.freepik.com/free-photo/tree-grows-coin-glass-jar-with-copy-space_35913-2508.jpg?w=1060&t=st=1679047038~exp=1679047638~hmac=a498dd34a354157a81fd2aa34702a616a0ae15cad5e22013d38263ca766896c2);
        background-size: cover;
        background-repeat: no-repeat; */
        height: 90vh;
  }
  .home img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      z-index: -1;
  }


  .text-container{
      width: 50%;
      height: 100%;
      display: flex;
      margin-left: 3rem;
      margin-top: 5rem;
      flex-direction: column;
  animation-name: slide-in;
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  }
  @keyframes slide-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
  .text-container h1{
      font-size: 50px;
      font-weight: 500;
      color: #000;
  }
    .text-container h1 span{
        color: #a00;
    }

    .text-container p{
        font-size: 15px;
        font-weight: 500;
        color: #000;
        margin-top: 1rem;
    }

  
    
     .text-container a{
        width: 150px;
        height: 40px;
        background-color: #a00;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 5px;
        margin-top: 1rem;
        cursor: pointer;
    }
    .text-container a:hover{
        background-color: #000;
    }
 
   @media screen and (max-width: 768px){
       .text-container{
           width: 80%;
           /* margin-left: 0; */
       }
       .text-container h1{
           font-size: 30px;
       }
         .text-container p{
              font-size: 12px;
         }
         .text-container a{
             width: 100px;
             height: 30px;
         }
   }
    
</style>