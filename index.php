<html>

<head>

<meta charset="UTF-8">

<meta name="viewport"

        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

<meta http-equiv="X-UA-Compatible" content="ie=edge">
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.9/vue.js"></script>
<script src="https://unpkg.com/vue-lazyload/vue-lazyload.js"></script>
<link rel="stylesheet" href="//cdn.web-fonts.ge/fonts/alk-rex-bold/css/alk-rex-bold.min.css">

<!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.6.16/dist/css/uikit.min.css" />

<!-- UIkit JS -->
<script src="https://cdn.jsdelivr.net/npm/uikit@3.6.16/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.6.16/dist/js/uikit-icons.min.js"></script>



<link rel="stylesheet" href="css/main.css">

<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

<link rel="icon" href="favicon.png" type="image/x-icon">


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-110958779-3"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-110958779-3');
</script>


<!-- Yandex.Metrika counter -->

<script type="text/javascript" >

(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};

m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})

(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");



ym(52818583, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
});

</script>

<noscript><div><img src="https://mc.yandex.ru/watch/52818583" style="position:absolute; left:-9999px;" alt="" /></div></noscript>

<!-- /Yandex.Metrika counter -->

<?php function isMobile() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}
echo "<script>let mobile = ".isMobile()." </script>";

?>

<title>წმიდა და უწმიდური საკვები</title>

</head>

<body>

<div id="app">
    <div class="uk-container uk-section">
    <nav class="uk-navbar-container uk-margin " uk-navbar>
        <div class="uk-navbar-left">

            <div class="uk-navbar-item">
                <div class="uk-search uk-search-navbar">
                    <span uk-search-icon></span>
                    <input v-model="search" @input="searching($event)" class="uk-search-input"  placeholder="ძიება...">
                </div>
            </div>

        </div>
    </nav>
        <div uk-filter="target: .js-filter">

            <!-- Filter controls -->
            <ul class="uk-subnav uk-subnav-pill">
                <li class="uk-active " uk-filter-control><a href="#">ყველა</a></li>
                <li><a href="#"  uk-filter-control="filter: .tag-good">წმიდა</a></li>
                <li><a href="#"  uk-filter-control="filter: .tag-bed">უწმიდური</a></li>
            </ul>

            <!-- Layout items -->
            <ul class="js-filter uk-child-width-1-3@l uk-child-width-1-2@s" uk-grid>
                <li v-for="(item,key) in all" 
                :key="key" 
                :class="[item.clean == true ? 'tag-good' : 'tag-bed']"
                v-if="item.show"
                > 
 

                <div :class="[item.clean == true ? 'uk-card-default' : 'uk-card-secondary','uk-card uk-width-1-1@m']">
                    <div class="uk-card-header">
                        <div class="uk-grid-small uk-flex-middle" uk-grid>
                            <div class="uk-width-auto">
                                <img class="uk-border-circle" width="40" height="40" :src="item.clean == true? 'yes.png': 'not.png'">
                            </div>
                            <div class="uk-width-expand">
                                <h3 class="uk-card-title uk-margin-remove-bottom">{{item.name}}</h3>
                                <p class="uk-text-meta uk-margin-remove-top">{{item.clean == true ? 'წმიდა' : 'უწმიდური'}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="uk-card-body">
                        <p>{{item.name}} - {{item.eng}} - {{item.rus}}</p>
                        <img width="100%" height="200px" :src="item.img" :alt="'image of '+item.eng">
                    </div>
                    <div class="uk-card-footer">
                        <a :href="item.link" target="_blank" class="uk-button uk-button-text">მეტის წაკითხვა</a>
                    </div>
                </div>


                
                </li>
            </ul>

        </div>
        <hr>
        <h3 class="uk-text-lead uk-text-center">დამატებითი რესურსები</h3>
        <hr>
        <ul class="uk-list uk-link-text">
            <li><a target="_blank" href="https://en.wikibooks.org/wiki/Hebrew_Roots/Unclean_foods/Unclean_Animal_Food_List">Hebrew Roots</a></li>
            <li><a target="_blank" href="http://www.bible.com.ua/answers/r/17/306138">Bible.com.ua</a></li>
        </ul>

    </div>



</div>
<script src="js/main.js"></script>
<style>
.uk-card-secondary{
    background-color:rgb(144, 59, 78);
}

.uk-card-default{
    background-color:rgba(255, 245, 201, 0.6);
}
</style>
</body>
</html>