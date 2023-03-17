<template>
    <div class="single-container">
        <img src="https://images.unsplash.com/photo-1621146027714-e8921770f8d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="">
        <div v-if="isLoading">
            <div class="loader"></div>
        </div>
        <div class="single-repo" v-else>
            <div class="single-card">

                <h1>{{ repos.name }}</h1>
                <p>{{ repos.description }}</p>
                <p>Stars: {{ repos.stargazers_count }}</p>
                <p>Forks: {{ repos.forks_count }}</p>
                <a :href="repos.html_url" target="_blank" rel="noopener noreferrer">View on Github</a>
                <router-link to="/repos">Go back</router-link>
            </div>
              

          </div>
    </div>
</template>
<script>

export default {
    name: 'Repos',
  
data() {
    return {
        isLoading: true,
        repos: [],
    };
},

methods: { 
    
    fetchRepos() {
        const { id } = this.$route.params;
    fetch(`https://api.github.com/repositories/${id}`)
    .then((response) => response.json())
    .then((data) => (this.repos = data))
    .catch((error) => console.log(error))
    .finally(() => (this.isLoading = false));
    }
},
mounted() {
    this.fetchRepos();
},
}
</script>
<style scoped>

.loader{
  width: 100px;
  height: 100px;
  border: 10px solid #f3f3f3;
  border-top: 10px solid #04253b;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 30vh auto;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.single-container{
    background-color: black;
    opacity: 0.8;

}

.single-container img{
  width: 100%;
  height: 90vh;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  opacity: 0.7;
}
    .single-repo{
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }



    .single-card{
        width: 40vh;
        height: 40vh;
        display: flex;
        background-color: #fff;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.3);
    }
    .single-card:hover{
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
  transform: translateY(-5px);
    }

    .single-card a{
        text-decoration: none;
      color: #fff;
      background-color: #a00;
      padding: 4px 7px;
      margin: 5px 10px;
      font-size: 0.5rem;
      font-weight: 700;
      border-radius: 5px;
      cursor: pointer;
    }
    .single-card a:hover{
        background-color: #000000;
    }

</style>