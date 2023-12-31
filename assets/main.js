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
  
  jQuery('.section__filter_contain .col__filter .box__filter_sortby').click(function(e){

    if (e.target !== this)
    	return;
    	
    jQuery(this).find('.custom__selectv2').toggle();
    
  })
  
  jQuery('.box__filter_brands .custom__select li').click(function(){
    
    	let value = jQuery(this).attr('rel')
  
      	jQuery('#collections-filter').val(value).change();
    
  })
  
  jQuery('.box__filter_category .custom__select li').click(function(){
    
    	let value = jQuery(this).attr('rel').toLowerCase();
    
    	value = value.split(' ').join('-');
  
    	if(jQuery('#collections-filter').val() != '')
        {
        	location.href = location.origin+jQuery('#collections-filter').val()+'/'+value;
        }
    	else 
        {
        	location.href = location.origin+'/collections/all/'+value;
        }
      	
    
  })
  
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
  
    	let value = jQuery(this).attr('rel')
    
  		jQuery('[name="sort_by"]').val(value)
		jQuery('#FacetFiltersForm').submit()
    
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
  

  
}

jQuery(document).on('change','.globo-formbuilder .globo-form.boxed-form .globo-form-app.boxed-layout .block-container .globo-form-control input[type=file]', function(e){
  
  	var file = e.target.files[0].name;
  
  	jQuery(this).parents('.globo-form-control').find('.box__upload span').text(file);

})