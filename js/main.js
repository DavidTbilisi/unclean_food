Vue.component('clean',{

    template:`
<div>
    <div class="box " :clean="clean"
        v-for="food in all" 
        v-show="food.show"
        v-if="isClean(clean, food)"
        >
        <div >
            <a :href="food.link" target="_blank" title="გადასვლა ბმულზე">
                <p>{{food.name}} - {{food.eng}} - {{food.rus}}</p>
            </a>
            <p>{{food.shortdesc}}</p>
        </div>
        <a v-if="screenW > 1000" :href="food.img" target="_blank" title="სურათის გახსნა">
            <div v-if="screenW > 1000" class="image" :style="{ backgroundImage:'url('+food.img+')'}"></div>
        </a>
    </div>
</div>
    `,

    props:['allfood','clean'],
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
        console.log(this.windowSize());
        window.addEventListener('resize', this.windowSize);
    },
});
// ქართული თვზების სახელები 3 ენაზე http://club-monadire.ge/topic/1367-%E1%83%A1%E1%83%90%E1%83%A5%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%94%E1%83%9A%E1%83%9D%E1%83%A1-%E1%83%97%E1%83%94%E1%83%95%E1%83%96%E1%83%94%E1%83%91%E1%83%98%E1%83%99%E1%83%90%E1%83%A2%E1%83%90%E1%83%9A%E1%83%9D%E1%83%92%E1%83%98/
new Vue({
    el:'#app',
    data:{
        cleanCount:{
            clean:0,
            unclean:0,
        },
        screenW: 1001,
        search:'',
        send:null,
        all:[
            {

                "name": "გრძელფარფლიანი თინუსი",

                "eng": "longfin tuna",

                "rus": "Длиннопёрый тунец",

                "img": "https://upload.wikimedia.org/wikipedia/commons/9/96/Thunnus_alalunga.png",

                "longdesc": "Albacore",

                "shortdesc": "Albacore",

                "link": "https://ru.wikipedia.org/wiki/%D0%94%D0%BB%D0%B8%D0%BD%D0%BD%D0%BE%D0%BF%D1%91%D1%80%D1%8B%D0%B9_%D1%82%D1%83%D0%BD%D0%B5%D1%86",

                "clean": true,

                "show": true

              },

              {

                "name": "ღორი",

                "eng": "Pig",

                "rus": "свинья",

                "img": "http://plus.kvira.ge/wp-content/uploads/2015/03/11073210_1574183416163468_988430915893157063_o.jpg",

                "longdesc": "Pig",

                "shortdesc": "Pig",

                "link": "https://ka.wikipedia.org/wiki/ღორი",

                "clean": false,

                "show": true

              },

              {

                "name": "აქლემი",

                "eng": "Camel",

                "rus": "Верблюд",

                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Camelus_dromedarius_at_Tierpark_Berlin_%281%29.JPG/413px-Camelus_dromedarius_at_Tierpark_Berlin_%281%29.JPG",

                "longdesc": "Camel",

                "shortdesc": "Camel",

                "link": "https://ka.wikipedia.org/wiki/აქლემი",

                "clean": false,

                "show": true

              },

              {

                "name": "ცხენი",

                "eng": "Horse",

                "rus": "лошадь",

                "img": "https://zooclub.ambebi.ge/images/stories/cxenebi/sheriff%20dancer.jpg",

                "longdesc": "Horse",

                "shortdesc": "Horse",

                "link": "https://ka.wikipedia.org/wiki/შინაური_ცხენი",

                "clean": false,

                "show": true

              },

              {

                "name": "ბეღურა",

                "eng": "sparrow",

                "rus": "воробей",

                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Tree_Sparrow_August_2007_Osaka_Japan.jpg/1200px-Tree_Sparrow_August_2007_Osaka_Japan.jpg",

                "longdesc": "sparrow",

                "shortdesc": "sparrow",

                "link": "https://ka.wikipedia.org/wiki/ბეღურა",

                "clean": true,

                "show": true

              },

            {

                name:'ანჩოუსი',

                eng:'Engraulis',

                rus:'Анчоусы',

                img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Engraulis_japonicus_01.JPG/405px-Engraulis_japonicus_01.JPG',

                shortdesc:'Engraulis',

                link:'https://ka.wikipedia.org/wiki/ანჩოუსი',

                longdesc:'lorem50',

                clean:true,

                show:true,



            },

            {

                name:'ხონთქარა',

                eng:'Mullus',

                rus:'барабулька',

                img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Mullus_surmuletus.jpg/1280px-Mullus_surmuletus.jpg',

                link:'https://ka.wikipedia.org/wiki/ხონთქარა',

                shortdesc:'Mullus',

                longdesc:'lorem50',

                clean:true,

                show:true,



            },

            {

                name:'გოლეტები',

                eng:'Arctic char',

                rus:'голец',

                img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Japansk_r%C3%B6ding.jpg/1280px-Japansk_r%C3%B6ding.jpg',

                link:'https://ru.wikipedia.org/wiki/Гольцы_(род)',

                shortdesc:'Arctic char',

                longdesc:'lorem50',

                clean:true,

                show:true,



            },

            {

                name:'ღურკანა',

                eng:'Pink salmon',

                rus:'горбуша',

                img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Pink_salmon_FWS.jpg/1920px-Pink_salmon_FWS.jpg',

                link:'https://ka.wikipedia.org/wiki/ღურკანა',

                shortdesc:'Arctic char',

                longdesc:'lorem50',

                clean:true,

                show:true,



            },

            {

                name:'ზვიგენები',

                eng:'Shark',

                rus:'Акулы',

                img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/TDpGUipa.jpg/800px-TDpGUipa.jpg',

                link:'https://ka.wikipedia.org/wiki/ზვიგენები',

                shortdesc:'Shark',

                longdesc:'lorem50',

                clean:false,

                show:true,



            },

            {

                name:'კბილანასებრნი',

                eng:'Northern wolffish',

                rus:'Зубатковые',

                img:'https://upload.wikimedia.org/wikipedia/commons/3/3d/Seewolf.JPG',

                link:'https://ka.wikipedia.org/wiki/კბილანასებრნი',

                shortdesc:'wolffish',

                longdesc:'lorem50',

                clean:false,

                show:true,



            },

            {

                name:'',

                eng:'Ruffe',

                rus:'ёрш',

                img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Gymnocephalus_cernuus_P%C3%A4rnu_River_Estonia_2010-01-06.jpg/1920px-Gymnocephalus_cernuus_P%C3%A4rnu_River_Estonia_2010-01-06.jpg',

                link:'https://en.wikipedia.org/wiki/Ruffe',

                shortdesc:'Ruffe',

                longdesc:'lorem50',

                clean:true,

                show:true,



            },

            {

                name:'',

                eng:'Diplodus puntazzo',

                rus:'зубарик',

                img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Diplodus_puntazzo_Italy.jpg/401px-Diplodus_puntazzo_Italy.jpg',

                link:'https://ru.wikipedia.org/wiki/Обычный_зубарик',

                shortdesc:'Diplodus puntazzo',

                longdesc:'Diplodus puntazzo',

                clean:true,

                show:true,



            },

            {

                name:'ხიზილალა წითელი',

                eng:'Red caviar',

                rus:'икра красная',

                img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ikura_temaki_zushi_by_Adonis_Chen_in_Taipei.jpg/401px-Ikura_temaki_zushi_by_Adonis_Chen_in_Taipei.jpg',

                link:'https://en.wikipedia.org/wiki/Red_caviar',

                shortdesc:'Red caviar',

                longdesc:'lorem50',

                clean:true,

                show:true,





            },

            {

                name:'',

                eng:'Carassius',

                rus:'карась',

                img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Carassius_gibelio_2008_G1.jpg/413px-Carassius_gibelio_2008_G1.jpg',

                link:'https://en.wikipedia.org/wiki/Carassius',

                shortdesc:'Carassius',

                longdesc:'lorem50',

                clean:true,

                show:true,





            },

            {

                name:'კეტა',

                eng:'Chum salmon',

                rus:'Кета',

                img:'https://cdn2.webdamdb.com/1280_QEv0X3WibW12.png',

                link:'https://ka.wikipedia.org/wiki/კეტა',

                shortdesc:'Chum salmon',

                longdesc:'lorem50',

                clean:true,

                show:true,





            },
            {

                name:'ხეკი, მერლუზა',

                eng:'Merluccius',

                rus:'хек',

                img:'http://alphasouthsarl.com/fish/merluccius-merluccius/merluccius-merluccius.jpg',

                link:'https://ka.wikipedia.org/wiki/მერლუზა',

                shortdesc:'Merluccius',

                longdesc:'Merluccius',

                clean:true,

                show:true,


            },
            {

                name:'სკუმბრია',

                eng:'mackerel',

                rus:'скумбрия',

                img:'https://thecornishfishmonger.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/a/mackerel.jpg',

                link:'https://ka.wikipedia.org/wiki/%E1%83%A1%E1%83%99%E1%83%A3%E1%83%9B%E1%83%91%E1%83%A0%E1%83%98%E1%83%90',

                shortdesc:'mackerel',

                longdesc:'mackerel',

                clean:true,

                show:true,


            },
            {

                name:'ხიზილალა შავი',

                eng:'Beluga caviar',

                rus:'икра черная',

                img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Caviar_and_spoon.jpg/318px-Caviar_and_spoon.jpg',

                link:'https://ru.wikipedia.org/wiki/%D0%A7%D1%91%D1%80%D0%BD%D0%B0%D1%8F_%D0%B8%D0%BA%D1%80%D0%B0',

                shortdesc:'caviar',

                longdesc:'caviar',

                clean:false,

                show:true,


            },
            {

                name:'კალმახი',

                eng:'Trout',

                rus:'Форель',

                img:'https://afn.com.au/wp-content/uploads/2016/02/Rainbow-Trout-WEB-1.jpg',

                link:'https://ka.wikipedia.org/wiki/%E1%83%99%E1%83%90%E1%83%9A%E1%83%9B%E1%83%90%E1%83%AE%E1%83%94%E1%83%91%E1%83%98',

                shortdesc:'Trout',

                longdesc:'Trout',

                clean:true,

                show:true,


            },

            ]
    },
// http://bible-facts.ru/1727-rybu-kotoruyu-ne-stoit-est-spisok.html
    methods:{
        searching:function () {
            this.send = null;
            this.all.forEach((val, index) => {
                let search = new RegExp(this.search, 'i');
                let cond1 = search.test(val.name);
                let cond2 = search.test(val.eng);
                let cond3 = search.test(val.rus);
                // debugger;
                if (cond1 || cond2 || cond3){
                    this.all[index].show = true;
                    this.send=false;
                    // console.log(this.send,"show")
                } else {
                    this.all[index].show = false;
                    if (this.send===null) {
                        this.send=true;
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
                url: 'http://getsite.ge/food/email.php',
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
                if(element.clean){this.cleanCount.clean+=1}else{this.cleanCount.unclean+=1};
            });
        }

    },
    
    mounted(){
        this.countCleanUnclean();
    },
});

