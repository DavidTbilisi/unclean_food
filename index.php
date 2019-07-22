<html>

<head>

    <meta charset="UTF-8">

    <meta name="viewport"

          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.9/vue.js"></script>

    <link rel="stylesheet" href="//cdn.web-fonts.ge/fonts/alk-rex-bold/css/alk-rex-bold.min.css">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

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

    

    <title>წმიდა და უწმიდური საკვები</title>

</head>

<body>

<div id="app">

    <div class="container text-center">

        <div class="row">

            <div class="col p-5">

                <input class="from-control w-100 p-2"

                       v-model="search"

                       @input="searching"

                       placeholder="მოძებნე სახელი ქართულად ან რუსულად ან ინგლისურად"

                >

                <div class="search-result ">

                    <p v-if="send" class="p-2 btn btn-primary" @click="requestFood"> შეუკვეთე ინფო ამ საკვებზე </p>

                </div>

            </div>

        </div>

        <div class="row">

            

            <div class="col clean">

                <h1 class="title">წმიდა</h1>

                <clean :allfood="all" :clean="true"></clean>

            </div>



            <div class="col unclean">

                <h1 class="title">უწმიდური</h1>

                <clean :allfood="all" :clean="false"></clean>

            </div>



        </div>

    </div>

<a target="_blank" href="https://en.wikibooks.org/wiki/Hebrew_Roots/Unclean_foods/Unclean_Animal_Food_List">link</a>

</div>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>

<script src="js/main.js"></script>

</body>

</html>