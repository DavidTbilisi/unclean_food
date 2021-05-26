

Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: 'https://media.giphy.com/media/MtWKB3pR7vQeQ/giphy.gif',
    attempt: 1
  })

Vue.component('clean',{

    template:`
<div>
    <div class="box " :clean="clean"
        v-for="food in allfood" 
        v-show="food.show"
        v-if="isClean(clean, food)"
        >
        <div >
            <a :href="food.link" target="_blank" title="გადასვლა ბმულზე">
                <p>{{food.name}} - {{food.eng}} - {{food.rus}}</p>
            </a>
            <p>{{food.shortdesc}}</p>
        </div>
        <div v-lazy-container="{ selector: 'div' }">
            <a v-if="screenW > 1000 && show_img" :href="food.img" target="_blank" title="სურათის გახსნა">
                <div v-if="screenW > 1000" class="image" :style="{ backgroundImage:'url('+food.img+')'}"></div>
            </a>
        </div>
    </div>
</div>
    `,

    props:['allfood','clean', 'show_img'],
    data:function () {
        return {
            all:this.allfood,
            screenW: this.screenW,
        }
    },
    methods: {
        windowSize:function () {
            this.screenW =  window.innerWidth;
        },
        isClean:function (clean, food) {
            if (clean == true){
               return food.clean;
            } else {
                return !food.clean;
            }
        }
    },
    mounted(){
        this.windowSize();
        window.addEventListener('resize', this.windowSize);
    },
});

let vue = new Vue({
    el:'#app',
    data:{
        show_img:!mobile,
        cleanCount:{ clean:0, unclean:0 },
        screenW: 1001,
        search:'',
        send: null,
        all:[],
    sheets: 0
    },
// http://bible-facts.ru/1727-rybu-kotoruyu-ne-stoit-est-spisok.html
    methods:{
        searching:function () {
            console.log('searching...')
            this.send = null;
            this.all.forEach((val, index) => {
                
                let search = new RegExp(this.search, 'i');
                let cond1 = search.test(val.name);
                let cond2 = search.test(val.eng);
                let cond3 = search.test(val.rus);
                // debugger;
                if (cond1 || cond2 || cond3 || this.search == ""){
                    this.all[index].show = true;
                    this.send = false;
                    // console.log(this.send,"show")
                } else {
                    this.all[index].show = false;
                    if (this.send === null) {
                        this.send = true;
                    }
                    // console.log(this.send,"hide")
                }
            });
        },
        requestFood: function () {
            
            let fd = new FormData();    
            
            fd.set("search", this.search,);
            
            console.log(this.search);
            this.send = null;

            axios({
                method: 'post',
                url: 'http://davidexist.byethost11.com/food/email.php',
                data: fd,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
                })
                .then(function (response) {
                    alert(response.data);
                })
                .catch(function (error) {
                    alert(error);
                });        
        },
        countCleanUnclean:function(){
            this.all.forEach(element => {
                if(element.clean){ this.cleanCount.clean += 1}else{ this.cleanCount.unclean += 1} ;
            });
        },
        getFood:function(){
            axios({
                method: "GET",
                url: "https://spreadsheets.google.com/feeds/cells/18WUK-XC6nU9ePnujgJcgOrqkgZl1ZSqsDsht3aY5mu8/1/public/full?alt=json",
            }).then((response)=> {
                // console.log(response.data);
                let titles = ['timestemp','name','eng','rus','img','longdesc','shortdesc','link','clean','show', 'type'];
                let data = [];
                let d = response.data.feed.entry
                this.sheets = d;
                // vue.$data.sheets[42].content['$t']
                for (let i = titles.length; i <= d.length; i += titles.length) {
                    
                    if (d[i+9]!=undefined) {
                        data.push({
                        'Timestemp':  d[i+0].content['$t'],
                        'name':       d[i+1].content['$t'],
                        'eng':        d[i+2].content['$t'],
                        'rus':        d[i+3].content['$t'],
                        'img':        d[i+4].content['$t'],
                        'longdesc':   d[i+5].content['$t'],
                        'shortdesc':  d[i+6].content['$t'],
                        'link':       d[i+7].content['$t'],
                        'clean':      d[i+8].content['$t'] == "TRUE"? true: false,
                        'show':       d[i+9].content['$t'] == "TRUE"? true: false,
                        'type':       d[i+10].content['$t'],
                        }) 
                    } else {
                        console.log(d);
                    }
                }


                this.all = data;
                // debugger;
            }).catch((err) => {
                console.log(err);
            })
        },
    },

    
    mounted(){
        this.getFood();
        setTimeout(()=>{
            this.countCleanUnclean();
        },900)
    },
});

