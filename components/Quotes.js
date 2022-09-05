const quotes = Vue.component('quotes',{
    props: [ 'title', 'year', 'quote'],
    template: `
    <div class="quotes">
        <p>"{{ quote }}</p>
        <p>~ {{ title }}, {{ year }}</p>
    </div>
    `
});

Vue.use(quotes);