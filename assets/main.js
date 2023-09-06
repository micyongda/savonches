jQuery(document).ready(function(){
  
  
	jQuery('.box__testimonial_slider').slick({
      infinite : true,
      dots : false,
      slidesToShow : 1,
      slidesToScroll : 1,
      responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                      }
                    }
  				  ]
      
    });
  
    
  jQuery('.slider__thumbnail').insertBefore(jQuery('.box__currentimg'))
  
  jQuery('.box__filter_brands select#collections-filter').change(function(){

    if(jQuery(this).val() != '')
    {
    	location.href = jQuery(this).val();
    }
      

  })
  
  jQuery('.box__filter_brands').click(function(e){

    if (e.target !== this)
    	return;
    	
    jQuery(this).find('.custom__select').toggle();
    
  })
  
  jQuery('.box__filter_category, .box__filter_size').click(function(e){

    if (e.target !== this)
    	return;
    	
    jQuery(this).find('.custom__select').toggle();
    
  })
  // TO:DO
  jQuery('.section__filter_contain .col__filter .box__filter_sortby').click(function(e){

    if (e.target !== this)
    	return;
    	
    jQuery(this).find('.custom__selectv2').toggle();
    
  })
  // TO:DO
  jQuery('.box__filter_brands .custom__select li').click(function(){
    
    	let value = jQuery(this).attr('rel')
  
      	jQuery('#collections-filter').val(value).change();
    
  })
  // TO:DO Delete
  // jQuery('.box__filter_category .custom__select li').click(function(){
    
  //   	let value = jQuery(this).attr('rel').toLowerCase();
    
  //   	value = value.split(' ').join('-');
  
  //   	if(jQuery('#collections-filter').val() != '')
  //       {
  //       	location.href = location.origin+jQuery('#collections-filter').val()+'/'+value;
  //       }
  //   	else 
  //       {
  //       	location.href = location.origin+'/collections/all/'+value;
  //       }
      	
    
  // })
  
  jQuery('.box__filter_size .custom__select li').click(function(){
    
    	jQuery(this).parent().hide();
    
    	let value = jQuery(this).attr('rel');
    
        if(value != '')
        {
            let currentshow = jQuery('.section__collection_list #ProductGridContainer .collection.page-width .card__content .card__information .card-information>p[sizerel="'+value+'"]').parents('.grid__item');

            jQuery('.section__collection_list #ProductGridContainer .collection.page-width .card__content .card__information .card-information>p[sizerel]').parents('.grid__item').not(currentshow).hide();
            jQuery(currentshow).show();
        }
        else 
        {
			jQuery('.section__collection_list #ProductGridContainer .collection.page-width .card__content .card__information .card-information>p[sizerel]').parents('.grid__item').show();
        }
    
  })
  
  jQuery('.custom__selectv2 li').click(function(){

    function getParameterValueFromUrl(url, parameterName) {
      var queryString = url.split('?')[1];
      if (queryString) {
          var parameters = queryString.split('&');
          for (var i = 0; i < parameters.length; i++) {
              var parameter = parameters[i].split('=');
              if (parameter[0] === parameterName) {
                  return parameter[1];
              }
          }
      }
      return null; // Parameter not found
    }

    var prev_value = getParameterValueFromUrl(location.href, "sort_by");
    let value = jQuery(this).attr('rel')
    
    jQuery('[name="sort_by"]').val(value)

    if (prev_value == null) {
        if (location.href.includes('?') == false) {
            location.href = location.href+'?sort_by='+value;
        }
        else {
            location.href = location.href+'&sort_by='+value;
        }
    } else {
        console.log("Attempting to update URL. From previous value: "+prev_value+" to new value: "+value)
        location.href = location.href.replace(prev_value, value)
    }

    
  })

  jQuery('.list__collections_exclusivescontain .shop_clothing_link').click(function(){    
    const productTypes = ["Coats+%26+Jackets","Jeans","Light+Jackets","Pants","Shorts","Shirts","Sweaters+%26+Knitwear","Sweatshirts+%26+Hoodies","T-Shirts"]
    const filterString = productTypes.map(type => `filter.p.product_type=${type}`).join('&');

    const clothing_url = "/collections/all?"+filterString+"&sort_by=created-descending";

    jQuery(this).attr('href', clothing_url)
  })

  jQuery('.list__collections_exclusivescontain .shop_bags_link').click(function(){    
    const productTypes = ["Bags"]
    const filterString = productTypes.map(type => `filter.p.product_type=${type}`).join('&');
    
    const clothing_url = "/collections/all?"+filterString+"&sort_by=created-descending";

    jQuery(this).attr('href', clothing_url)
  })

  jQuery('.list__collections_exclusivescontain .shop_shoes_link').click(function(){    
    const productTypes = ["Shoes"]
    const filterString = productTypes.map(type => `filter.p.product_type=${type}`).join('&');
    
    const clothing_url = "/collections/all?"+filterString+"&sort_by=created-descending";

    jQuery(this).attr('href', clothing_url)
  })

  jQuery('.header__menu-item .header__menu-item .list-menu__item .link .link--text .focus-inset .main-menu-new-products').click(function(){    
    const productTypes = ["Shoes"]
    const filterString = productTypes.map(type => `filter.p.product_type=${type}`).join('&');
    
    const clothing_url = "/collections/all?"+filterString+"&sort_by=created-descending";

    jQuery(this).attr('href', clothing_url)
  })
  
  
})

window.onload = function() {
  
  jQuery('.globo-formbuilder .globo-form.boxed-form .globo-form-app.boxed-layout form > p').remove();
  
  jQuery('.globo-formbuilder .globo-form.boxed-form .globo-form-app.boxed-layout .block-container .globo-form-control small.globo-description').each(function(){

    jQuery(this).insertAfter(jQuery(this).parent().find('label'))

  })
  
  
  
  jQuery('.globo-formbuilder .globo-form.boxed-form .globo-form-app.boxed-layout .block-container .globo-form-control input[type=file]').before('<div class="box__upload"><a href="javascript:;">Choose File</a><span>No file chosen</span></div>')
  
  let objlabel = jQuery('.globo-form-id-82612 .globo-form-app .globo-form-control:nth-child(6) label.globo-label').clone();
  
  jQuery(objlabel).find('.label-content').text('Front Photo');
  
  jQuery('.globo-formbuilder .globo-form.boxed-form .globo-form-app.boxed-layout .block-container .globo-form-control:nth-child(6) .box__upload').before(jQuery(objlabel));
  
  jQuery('.globo-formbuilder .globo-form.boxed-form .globo-form-app.boxed-layout .block-container .globo-form-control a').click(function(){
    
    	jQuery(this).parents('.globo-form-control').find('input[type=file]').click()
      //jQuery('.globo-formbuilder .globo-form.boxed-form .globo-form-app.boxed-layout .block-container .globo-form-control input[type=file]').click()
  
  })
  
  jQuery('.box__filter_brands select#collections-filter option').each(function(){

      if(jQuery(this).attr('value') != '')
      {
          let matchdata = location.href.match(jQuery(this).attr('value'))

          if(matchdata != null && matchdata.length == 1)
          {
              jQuery(this).attr('selected','');
            
              jQuery(this).parent().parent().find('ul li[rel="'+jQuery(this).attr('value')+'"]').addClass('selected');
          }
      }
      
  })
  
  jQuery('.box__filter_category select#category-filter option').each(function(){

      if(jQuery(this).attr('value') != '')
      {
          let value = jQuery(this).attr('value').toLowerCase();
        
          value = value.split(' ').join('-');
        
          let matchdata = location.href.match('/'+value);
        	

          if(matchdata != null && matchdata.length == 1 )
          {
              jQuery(this).attr('selected','');
            
              jQuery(this).parent().parent().find('ul li[rel="'+jQuery(this).attr('value')+'"]').addClass('selected');
          }
      }
  })

//   jQuery('.box__filter_sortby select#SortBy option').each(function(){

//     if(jQuery(this).attr('value') != '')
//     {
//         let value = jQuery(this).attr('value').toLowerCase();
      
//         value = value.split(' ').join('-');
      
//         let matchdata = location.href.match(value);
        

//         if(matchdata != null && matchdata.length == 1 )
//         {
//             jQuery(this).attr('selected','');
          
//             jQuery(this).parent().parent().find('ul li[rel="'+jQuery(this).attr('value')+'"]').addClass('selected');
//         }
//     }
// })
  

  
}

jQuery(document).on('change','.globo-formbuilder .globo-form.boxed-form .globo-form-app.boxed-layout .block-container .globo-form-control input[type=file]', function(e){
  
  	var file = e.target.files[0].name;
  
  	jQuery(this).parents('.globo-form-control').find('.box__upload span').text(file);

})