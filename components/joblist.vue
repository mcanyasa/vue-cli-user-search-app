
<template>
    <div id="show-jobs">
    
        <h1>İş İlanı Ara</h1>
        <input @input="checkExist($event)" class="searchInput" type="text" v-model="search" placeholder="İş Ara">
        <div v-on:click="searchClick" class="btn btn-success">Ara</div>
    
    
        <div id="single-jobC" v-if="seen">
        
            <div class="single-job" v-for="(job,index) in filteredJobs" :key="index">
              <router-link :to="{ name: 'job', params: { jobId: job.result.items[0].jobId }}" class="sjLnk">
               <!--  <div>{{index}}</div> -->
                <h2>{{ job.result.items[0].positionName | to-uppercase }}</h2>
                <article>
                    <img class="img" :src="job.result.items[0].imageUrl" alt=""> {{ job.result.items[0].companyName }} <br> {{ job.result.items[0].cityName }} <br> {{ job.result.items[0].townName }} <br> Mesafesi {{ job.result.items[0].distance }} <br><br>                İlan {{ job.result.items[0].durationDay }} gündür yayında <br> {{ job.result.items[0].durationDayText }} <br>
                </article>

              </router-link>
               
            </div>
        </div>
        
    </div>
</template>

<script>



export default {
    name: 'joblist',
    data() {
        return {
            input: "",
            seen: false,
            jobs: [{
                    "version": "1.0",
                    "statusCode": 200,
                    "result": {
                        "items": [{
                            "jobId": "C71CD1954BA149BCAF42B25F775EA4FB0",
                            "positionName": "gerber operatörü",
                            "companyName": "Testoğlu Lahmacun Pide Ve Kebap",
                            "durationDay": 1,
                            "durationDayText": "Taze çıktı!",
                            "imageUrl": "https://vuejs.org/images/logo.png",
                            "distance": "8,53 km yakınında",
                            "latitude": 41.050968170166023,
                            "longitude": 29.062856674194339,
                            "cityName": "İstanbul",
                            "townName": "Çengelköy Mahallesi"
                        }],
                        "total": 1
                    }
                },
                {
                    "version": "2.0",
                    "statusCode": 200,
                    "result": {
                        "items": [{
                            "jobId": "C71CD1954BA149BCAF42B25F775EA4FB1",
                            "positionName": "yazılım mühendisi",
                            "companyName": "Soft AŞ.",
                            "durationDay": 2,
                            "durationDayText": "Taze çıktı!",
                            "imageUrl": "https://vuejs.org/images/logo.png",
                            "distance": "4,53 km yakınında",
                            "latitude": 41.050968170166023,
                            "longitude": 29.062856674194339,
                            "cityName": "İstanbul",
                            "townName": "Acıbadem Mahallesi"
                        }],
                        "total": 1
                    }
                },
                {
                    "version": "3.0",
                    "statusCode": 200,
                    "result": {
                        "items": [{
                            "jobId": "BCAF42B25F775EA4FB2",
                            "positionName": "insan kaynakları",
                            "companyName": "Hardware AŞ.",
                            "durationDay": 3,
                            "durationDayText": "Taze çıktı!",
                            "imageUrl": "https://vuejs.org/images/logo.png",
                            "distance": "6,53 km yakınında",
                            "latitude": 41.050968170166023,
                            "longitude": 29.062856674194339,
                            "cityName": "İstanbul",
                            "townName": "Bostancı Mahallesi"
                        }],
                        "total": 1
                    }
                }

            ],
            search: ''
        }
    },
    methods: {
        checkExist(event) {
            console.log(this.input = event.target.value);
            this.input = event.target.value;
            if (this.input.length > 0) {
                this.seen = false;
            } else {
                this.seen = false;

            }

        },

        searchClick(evnt) {
            this.seen = true;
            this.filteredJobs;
        }
    },

    created() {
        this.$router.push("/joblist").catch(() => {});

        /*   this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.jobs = data.body.slice(0,10);
          }) */
    },
    computed: {

        filteredJobs: function() {
            return this.jobs.filter((job) => {
                var $positionName = JSON.parse(JSON.stringify(job.result.items))[0];
                return JSON.stringify(job.result.items[0]).match(this.search);
            });
        }

    }

};
</script>


<style>
h1 {
    color: black;
    margin-top: 0px;
}

.searchInput {
    width: 86%;
    max-width: 850px;
    padding: 5px;
    margin: 5px;
    margin-left: 5px;
}

#show-jobs {
    max-width: 800px;
    margin: 0 auto;
    color: white;
    border-radius: 5px;
    padding: 10px;
    background-color: lightskyblue;
}

.single-job {
    max-width: 800px;
    margin: 0 auto;
    border: 1px solid black;
    background-color: lightgrey;
    color: white;
    border-radius: 10px;
    margin: 5px;
    padding: 10px;
}

.img {
    width: 40px;
    height: 40px;
}

.sjLnk{
  text-decoration: none !important;
}

@media screen and (max-width:600px) {
    .btn {
        margin: 0 auto;
        display: block;
        width: 100%;
    }
    .searchInput {
        width: 100%;
        margin-left: 0px;
    }
}
</style>

