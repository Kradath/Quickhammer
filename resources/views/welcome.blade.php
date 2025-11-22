<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">



    <link type="Image/x-icon" href="/favicon.ico" rel="icon">


    <title>Quickhammer</title>

    <!-- Fonts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <!-- Yandex.Metrika counter -->
    <!-- <script type="text/javascript">
        (function(m, e, t, r, i, k, a) {
            m[i] = m[i] || function() {
                (m[i].a = m[i].a || []).push(arguments)
            };
            m[i].l = 1 * new Date();
            for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) {
                    return;
                }
            }
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=104741634', 'ym');

        ym(104741634, 'init', {
            ssr: true,
            webvisor: true,
            clickmap: true,
            ecommerce: "dataLayer",
            accurateTrackBounce: true,
            trackLinks: true
        });
    </script> -->
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/104741634" style="position:absolute; left:-9999px;" alt="" /></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->
</head>

<body>
    <div id="app"></div>

    <script type="module" src="{{ Vite::asset('resources/js/app.js') }}"></script>
</body>

</html>