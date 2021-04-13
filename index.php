<?php 
if(isset($_GET['page'])){
    header("Location: /404", true, 404);
    exit;
}
?>
<!DOCTYPE html>
<html lang="ru">
  <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-128513148-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-128513148-1');
    </script>
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter50968733 = new Ya.Metrika2({
                        id:50968733,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                    });
                } catch(e) { }
            });

            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/tag.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks2");
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/50968733" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Pinsel Studio | Light & Shadow</title>
    <meta description="Разработка сайтов - Сайт созданный нами поможет конвертировать Вам посетителей в клиентов, повысить узнаваемость бренда, закрепить свой имидж в интернете | Дизайн работы - Разрабатываем только уникальные дизайн проекты и не работаем по шаблонам. Всегда стремимся создать что-то новое или же переосмыслить что-то давно забытое | Видео - Создаем видеоролики, что будут отличать Вас от конкурентов. Занимаемся комплексными проектами | Фото - Фотографируем быстро, качественно, красиво с дальнейшей отличной постобработкой.">
    <link rel="icon" href="/dist/img/favicons/favicon.svg" sizes="any">
    <link rel="icon" type="image/png" href="/dist/img/favicons/favicon-16x16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="/dist/img/favicons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/dist/img/favicons/favicon-48x48.png" sizes="48x48">
    <link rel="icon" type="image/png" href="/dist/img/favicons/favicon-64x64.png" sizes="64x64">
    <link rel="apple-touch-icon" sizes="57x57" href="/dist/img/favicons/favicon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/dist/img/favicons/favicon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/dist/img/favicons/favicon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/dist/img/favicons/favicon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/dist/img/favicons/favicon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/dist/img/favicons/favicon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/dist/img/favicons/favicon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/dist/img/favicons/favicon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/dist/img/favicons/favicon-180x180.png">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link rel="stylesheet" href="/dist/css/style.css">
  </head>
  <body id="bdy">
    <div id="preloader" class="preloader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
    <div id="content"></div>
    <script src="/dist/js/build.js"></script>
  </body>
</html>
