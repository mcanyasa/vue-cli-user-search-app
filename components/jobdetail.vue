<template>
    <div>
        <h1>İlan Detayı</h1>
    
        <div>
            <div :id="id" class="job-details" v-for="(jobdetail,index) in filteredJobdetails" :key="index">
                <p>{{ jobdetail.result.positionName | to-uppercase }}<br>
                    <img class="img" :src="jobdetail.result.imageUrl" alt=""> 
                    {{ jobdetail.result.companyName }} <br> <br> 
                    ilan {{ jobdetail.result.durationDay }} gündür yayında! <br> 
                    {{ jobdetail.result.durationDayText }}<br>
                     Ülke: {{ jobdetail.result.countryCode}} <br> 
                     İl: {{ jobdetail.result.cityName }} <br> 
                    İlçe: {{ jobdetail.result.townName }} <br> 
                    Adres: {{ jobdetail.result.address }} <br> 
                    Açıklama: {{ jobdetail.result.description }} <br> 
                    Tel No: {{ jobdetail.result.contactPhone.countryCallingCode}} {{ jobdetail.result.contactPhone.areaCode }} {{ jobdetail.result.contactPhone.number }} <br>
                </p>
    
            </div>
        </div>
        <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">İş İlanı Aramaya Geri Dön</a>
    </div>
</template>

<script>
import json from './jobdetail.json';
import router from '../router';
import joblist from '../components/joblist';



export default {

    components: {
        joblist
    },
    name: 'jobdetail',
    data() {
        return {
            id: null,
            jobdetails: json,

        }
    },
    created() {
        this.id = this.$route.params.jobId;
    },
    methods: {
        navigate() {
            router.go(-1);
        }
    },
    computed: {
        filteredJobdetails: function() {
            return this.jobdetails.filter((jobdetail) => {

                if (this.$route.params.jobId == jobdetail.result.jobId) {
                    return this.$route.params.jobId
                }

            });
        }
    }
}
</script>

<style>
.job-details {
    border: 1px solid black;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 10px;
}

img {
    float: left;
}
</style>
