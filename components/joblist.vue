
<template>
    <div id="show-jobs">
    
        <h1>İş İlanı Ara</h1>
        <input @input="checkExist($event)" class="searchInput" type="text" v-model="search" placeholder="İş Ara">
        <div v-on:click="searchClick" class="btn btn-success">Ara</div>
    
    
        <div id="single-jobC" v-if="seen">
    
            <div class="single-job" v-for="(job,index) in filteredJobs" :key="index">
                <router-link :to="{ name: 'job', params: { jobId: job.jobId }}" class="sjLnk">
                    <!--  JobID karşılığı job.result.items[0].jobId şeklinde index de ekleyebiliriz ama detayla ilişkilendirirken sorun olacaktır -->
                    <h2>{{ job.positionName | to-uppercase }}</h2>
                    <article>
                        <img class="img" :src="job.imageUrl" alt=""> {{ job.companyName }} <br> {{ job.cityName }} <br> {{ job.townName }} <br> Mesafesi {{ job.distance }} <br><br> İlan {{ job.durationDay }} gündür yayında <br> {{ job.durationDayText }} <br>
                    </article>
                </router-link>
    
            </div>
        </div>
    
    </div>
</template>

<script>
import json2 from './joblist.json';
export default {
    name: 'joblist',
    data() {
        return {
            input: "",
            seen: false,
            jobs: json2,
            search: ''
        }
    },
    props: {

    },
    methods: {
        checkExist(event) {
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
        /*   this.$http.get('xxx').then(function(data){
            this.jobs = data.body.slice(0,10);
          }) */
    },
    computed: {

        filteredJobs: function() {
            return this.jobs[0].result.items.filter((job) => {
                let lsearch = this.search.toLowerCase();
                return job.positionName.toLowerCase().match(lsearch) || job.cityName.toLowerCase().match(lsearch) || job.townName.toLowerCase().match(lsearch);
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

.sjLnk {
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

