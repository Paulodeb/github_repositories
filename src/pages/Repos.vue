
       
         <template>
           <div class='home-container'>
             <Navbar/>
             <img src="https://images.unsplash.com/photo-1621146027714-e8921770f8d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="">
            </div>
              <div class="loader-container" v-if="isLoading">
                <div class="loader"></div>
            </div>
           
            <div class="repo-container" v-else>
              <div class="repo" >
                <img src="https://avatars.githubusercontent.com/u/99755928?v=4" alt="Your Profile Image">
                <FetchItems class="repo-details" url="https://api.github.com/users/paulodeb">
                  <template #context="{ response }">
                    <div>
                      <h1>{{ response.name }}</h1>
                      <p>Repositories: {{ response.public_repos }}</p>
                    </div>
                  </template>
                </FetchItems>
              </div>
            <div class="card-container">
              <div class="card-con">
                <div class="card" v-for="repo in paginatedRepositories" :key="repo.id">
                  <div class="card-details">

                    <h1>{{ repo.name }}</h1>
                      <button @click="$router.push(`/repos/${repo.id}`)">View More</button>
                  </div>
                </div>
              </div>
             
                <div class="pagination">
                  <div class="page">
                    <button @click="currentPage--" :disabled="currentPage === 1">Previous</button>
                    <span>Page {{ currentPage }} of {{ totalPages }}</span>
                    <button @click="currentPage++" :disabled="currentPage === totalPages">Next</button>
                  </div>
                  <div class="number">
                    <button v-for="pageNumber in pageNumbers" :key="pageNumber" @click="currentPage = pageNumber" :disabled="currentPage === pageNumber ">{{ pageNumber }}</button>
                  </div>
                </div>

            </div>

            </div>
        </template>
<script>
import FetchItems from '../components/FetchItems.vue';
import Navbar from '../components/Navbar.vue';
import axios from 'axios';

export default {
    name: 'Repos',
components: {
    FetchItems,
    Navbar,
},
data() {
    return {
      repositories: [],
      profile: [],
      currentPage: 1,
      repositoriesPerPage: 3,
      isLoading: true,
    };
},

computed: {
    paginatedRepositories() {
      const startIndex = (this.currentPage - 1) * this.repositoriesPerPage;
      const endIndex = startIndex + this.repositoriesPerPage;
      return this.repositories.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.repositories.length / this.repositoriesPerPage);
    },
    pageNumbers() {
      const pageNumbers = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    }
  },
  
  created() {
    axios.get('https://api.github.com/users/paulodeb/repos')
      .then(response => {
        this.repositories = response.data;
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.isLoading = false;
      })
  },
}
</script>
<style scoped>


.home-container img{
  width: 100%;
  height: 90vh;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  opacity: 0.7;
}

/* .loader-container {
  max-width: 1200px;
 
  margin: 20px auto;
} */
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
    .repo-container{
        max-width: 1200px;
        height: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .repo{
        width: 20%;
        height: 50%;
        margin-left: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .repo-container img{
        width: 130px;
        height: 130px;
        border-radius: 50%;
    }
    
    .repo-details{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
        justify-content: center;
      }
      .repo-details h1{
        font-size: 1.5rem;
        color: #fff;
        font-weight: 600;
      }
      .repo-details p{
        font-size: 1rem;
        color: #fff;
        font-weight: 500;
      }
      .card-container{
        width: 100%;
        height: 100%;
      }

      .card-con{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
      .card{
        width: 180px;
        height: 20vh;
        background-color: #fff;
        border-radius: 0.5rem;
        box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0.5rem;
        padding: 0.5rem;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .card:hover {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
  transform: translateY(-5px);
}

    .card-details{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
    }
    .card-details h1{
      font-size: 1rem;
      font-weight: 700;
    }

    /* .card-button{
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    } */
    .card-details a{
      text-decoration: none;
      color: #fff;
      background-color: #a00;
      padding: 4px 7px;
      margin: 5px 10px;
      font-size: 0.5rem;
      font-weight: 700;
    }

    .card-details button{
      text-decoration: none;
      color: #fff;
      border: none;
      border-radius: 5px;
      background-color: #a00;
      padding: 4px 7px;
      margin: 5px 10px;
      font-size: 0.5rem;
      font-weight: 700;
      cursor: pointer;
    }

    .card-details button:hover{
      background-color: #000;
      transition: 0.3s;
    }


    .pagination{
      width: 100%;

    }
    .page{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .page button{
      margin: 1rem;
      background: #a00;
      border: none;
      border-radius: 5px;
      color: #fff;
      border: none;
      padding: 0.3rem 0.8rem;
      cursor: pointer;
    }
    .page button:disabled, .number button:disabled{
      background: #ccc;
      color: #000;
    }
    .number{
      padding: 1rem 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .number button{
      margin: 0.5rem;
      background: #a00;
      color: #fff;
      border-radius: 5px;
      border: none;
      padding: 0.3rem 0.8rem;
      cursor: pointer;
    }
    .page span{
      margin: 1rem;
      color: #fff;
    }

    @media screen and ( max-width: 768px) {
      .repo-container{
        height: 380px;
      }
      .repo{
        width: 40%;
        /* height: 100%; */
      }
      .card-con{
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .card{
        /* width: 46%;
        height: 20vh; */
      }
    
    }

    @media screen and (max-width: 589px) {
      .home-container img{
  height: 110vh;
      }
      .repo-container{
        /* width: 100%; */
        height: 100%; 
    
        flex-direction: column;
      }
    .repo{
        width: 100%;
        height: 100%;
        margin-left: 0;
        margin-top: 2rem;
      }
     
    
      .card-con{
        max-width: 80%;
        overflow: auto;
        margin: 0 auto;
        height: 45vh;
        padding-top: 10rem ;
        flex-wrap: nowrap;
        flex-direction: column;      
      }
      /* .card{
        width: 70%;
        height: 30vh;
        margin: 0.5rem;
        padding: 1.5rem;
      } */
    }
</style>