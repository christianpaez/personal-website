
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/mediumish-theme-jekyll/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/mediumish-theme-jekyll/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 2,
    "url": "http://localhost:4000/mediumish-theme-jekyll/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           The Hidden Dangers of Energy Drinks                              :               The Hidden Dangers of Energy Drinks:                                                                                                                                                                       Christian Páez                                15 Jan 2024                                                                                                                  "
    }, {
    "id": 3,
    "url": "http://localhost:4000/mediumish-theme-jekyll/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 4,
    "url": "http://localhost:4000/mediumish-theme-jekyll/the-hidden-dangers-of-energy-drinks/",
    "title": "The Hidden Dangers of Energy Drinks",
    "body": "2024/01/15 - The Hidden Dangers of Energy DrinksIntroduction: Energy drinks have become increasingly popular in recent years, especially among young adults and athletes. Marketed as a quick boost to enhance energy and focus, these beverages are often consumed without much thought to their potential risks. In this blog post, we will explore the hidden dangers associated with energy drinks and discuss healthier alternatives to consider. Unknown Ingredients and Excessive Caffeine: One of the concerning aspects of energy drinks is the lack of transparency regarding their ingredients. While the labels provide some information, the exact composition and quantities of certain components remain unknown. This ambiguity raises questions about the potential health risks associated with consuming these beverages. Moreover, energy drinks are notorious for their high caffeine content. Excessive caffeine intake can lead to various health issues, including increased heart rate, elevated blood pressure, and even insomnia. It is essential to be cautious when consuming these drinks, especially for individuals with underlying health conditions or sensitivity to caffeine. Addictive Components and Heart Disease: Another alarming concern related to energy drinks is their addictive nature. These beverages often contain substances such as taurine and guarana, which may contribute to dependency over time. Regular consumption can lead to a cycle of reliance on energy drinks to maintain energy levels, which can be detrimental to overall health and well-being. Additionally, studies have suggested a potential link between energy drink consumption and an increased risk of heart disease. The combination of high caffeine levels and other stimulants present in these drinks can put excessive strain on the cardiovascular system, potentially leading to long-term cardiac complications. Artificial Sweeteners and Sugars: In the quest to provide a sweet taste without the added calories, energy drinks often rely on cheap artificial sweeteners or excessive amounts of sugar substitutes. These ingredients can have negative effects on health, including weight gain, metabolic disorders, and dental problems. Many individuals turn to energy drinks as a quick pick-me-up during the day, unknowingly consuming large amounts of hidden sugars. It is important to be mindful of these added sweeteners and opt for healthier alternatives whenever possible. Healthier Alternatives: If you are looking for a substitute for energy drinks, there are several options that can provide a natural boost without the potential risks. Coffee, for example, is a popular choice for many individuals seeking an energy boost. However, it is important to consume it in moderation and be mindful of the potential side effects of excessive caffeine intake. Another alternative is to incorporate foods rich in B12 vitamins into your diet. B12 plays a vital role in energy production and can be found in sources such as lean meats, fish, dairy products or plain multivitamins. Finally, sparkling water infused with natural flavors can provide a refreshing and hydrating alternative to energy drinks. Personal Takeaway: While energy drinks may seem like a tempting solution for a quick energy boost, it is crucial to consider their potential dangers. The unknown ingredients, excessive caffeine, addictive components, and potential risks to heart health should not be taken lightly. Instead, opting for healthier alternatives like coffee, B12-rich foods, and sparkling water can provide a safer and more sustainable way to maintain energy levels throughout the day. Remember, your health should always be a priority, and making informed choices regarding your beverage consumption is a step towards a healthier lifestyle. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});