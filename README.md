Quickhammer - https://quickhammer.ru/

### Описание:
Удобное отображение правил для варгейма Warhammer 30k Horus Heresy

![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=for-the-badge&logo=vuedotjs)
![Composition API](https://img.shields.io/badge/Composition-API-35495E?style=for-the-badge)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel)

### О проекте:
Quickhammer - это веб-приложение для удобного просмотра и навигации по правилам настольной игры Warhammer 30k Horus Heresy. Проект ориентирован на максимальную удобство использования во время игровых сессий.

### Функциональность:
- Адаптивный интерфейс

- Бесконечная прокрутка с Vue 3 Composition API с ленивой подгрузкой в компонентах quickhammer\resources\js\components\RangeWeapon.vue и quickhammer\resources\js\components\MeleeWeapon.vue, фильтрация вынесена в composable функции quickhammer\resources\js\components\composables\LazyLoad.js 

- Фильтрация данных по категориям в компонентах (quickhammer\resources\js\components\) RangeWeapon.vue, MeleeWeapon.vue, Wargear.vue, SpecialRules.vue, UnitTypes.vue, фильтрация вынесена в composable функции (quickhammer\resources\js\components\composables\SortedRules.js)

- Оптимизированная загрузка с Intersection Observer в копонентах quickhammer\resources\js\components\RangeWeapon.vue и quickhammer\resources\js\components\MeleeWeapon.vue

- Подгон правил каждого юнита под необходимый шаблон с помощью props (quickhammer\resources\js\components\TablesTemplates) примеры юнитов в quickhammer\resources\js\components\Factions\LegionesAstartes

- Удобные двухуровневые модальные окна по типу: Оружие юнита -> Правила Оружия (quickhammer\resources\js\components\TablesTemplates) 

- Динамическая генерация якорных ссылок на основе заголовков (quickhammer\resources\js\components\ContentTemplate) файл Content.vue

- Удобные модальные окна с важными правилами в хэдере (quickhammer\resources\js\components\Header.vue)

- Динамический роутинг с условным рендерингом компонентов (quickhammer\resources\js\router\index.js)

- кнопка "назад" возвращает пользователя на уровень ниже по корню сайта (quickhammer\resources\js\components\BackButton.vue) 

- кнопка "вверх" откатывающая страницу вверх (quickhammer\resources\js\components\ScrollToTop.vue) 

- селект с сохранением значения в localStorage (quickhammer\resources\js\components\ContentTemplate\LegionesSelect.vue)

- хранилище правил реализовано в файле quickhammer\resources\stores\Arrays.js, не использовал pinia, т.к. посчитал, что это будет переусложнением, в связи с тем, что данные никак не изменяются

- Всплывающие подсказки (quickhammer\resources\js\components\textModals\Tooltip.vue) использование в (quickhammer\resources\js\components\Header.vue) в модальных окнах с раеакциями

### Технолоджия

### **Frontend**
- **Vue 3** + Composition API
- **Vue Router** для навигации
- **CSS3** с адаптивной версткой
- **Intersection Observer API**

### **Архитектурные решения**
- **Composables Pattern** для переиспользуемой логики
- **Props-based компоненты** для гибкости
- **Локализованное состояние** (отказ от Pinia для статических данных)
- **Компонентный подход** с разделением ответственности

### Основные компоненты (и репозитории)
- Header.vue - кнопки с быстрым доступом к важным правилам
- CoreRules.vue - список основных правил
- IDMPTemplate и VehicleTemplate - отображение таблиц юнитов в зависимости от типа юнита
- Legiones.vue - правила на отдельные фракции
- \OneExemplarTemplates - тут расположены шаблоны под каждый вид правил
- \Factions\LegionesAstartes\Astartes.vue - логика роутинга компонентов для юнитов конкретной фракции


### Планы на будущее:
- Оптимизировать приложение, разбив большие компоненты, на более мелкие составные (CoreRules.vue, Header.vue)
- Навести порядок в расположении компонентов в проекте
- Осуществить кэширование png и svg
- Добавить бэк с регистрацией пользователей
- Добавить "калькулятор армий"
- Добавить сохранение списков юнитов в личном кабинете юзера
- PWA обертка

### Проект находится в активной разработке!




