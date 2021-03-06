var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "My Fifth Post",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
      categories: ["categoria 4"],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "My First Post",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
      categories: ["categoria 1","categoria 2"],
      tags: [],
      id: 1
    });
    
  
    idx.add({
      title: "My Second Post",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
      categories: ["categoria 1","categoria 2"],
      tags: ["content","css","formatting","html","marku"],
      id: 2
    });
    
  
    idx.add({
      title: "My Sixth Post",
      excerpt: "#Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
      categories: ["categoria 3","categoria 4"],
      tags: [],
      id: 3
    });
    
  
    idx.add({
      title: "My Third Article",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
      categories: ["categoria 1","categoria 2"],
      tags: [],
      id: 4
    });
    
  
    idx.add({
      title: "A nova Ordem Mundial",
      excerpt: "#Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
      categories: ["NWO"],
      tags: ["content","iluminatti"],
      id: 5
    });
    
  
    idx.add({
      title: "My Other Sample Tutorial",
      excerpt: "#Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
      categories: ["Markup"],
      tags: ["content","css","formatting","html","marku"],
      id: 6
    });
    
  
    idx.add({
      title: "My Sample Article",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
      categories: ["Markup"],
      tags: ["content","css","formatting","html","marku"],
      id: 7
    });
    
  
    idx.add({
      title: "Aquecimento Global",
      excerpt: "#Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
      categories: [],
      tags: [],
      id: 8
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "My Fifth Post",
        "url": "http://localhost:4000/categoria%204/my-fifth-post/",
        "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "My First Post",
        "url": "http://localhost:4000/categoria%201/categoria%202/my-first-post/",
        "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "My Second Post",
        "url": "http://localhost:4000/categoria%201/categoria%202/my-second-post/",
        "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "My Sixth Post",
        "url": "http://localhost:4000/categoria%203/categoria%204/my-sixth-post/",
        "excerpt": "#Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "My Third Article",
        "url": "http://localhost:4000/categoria%201/categoria%202/my-third-article/",
        "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "A nova Ordem Mundial",
        "url": "http://localhost:4000/nwo/new-world-order/",
        "excerpt": "#Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "My Other Sample Tutorial",
        "url": "http://localhost:4000/markup/my-other-sample-tutorial/",
        "excerpt": "#Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "My Sample Article",
        "url": "http://localhost:4000/markup/my-sample-article/",
        "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Aquecimento Global",
        "url": "http://localhost:4000/global-warming/",
        "excerpt": "#Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis libero egestas, maximus nisl condimentum, porttitor lorem. Phasellus ullamcorper libero...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p>'+result.length+' resultado(s) encontrado(s)</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+ 
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
