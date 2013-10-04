// Turn the navigation menu into an ul Menu
	
	var navItems = [{text:'Menu', url:'/' }],
		navSelect, nav = $('nav'), win = $(window),
		index = nav.find('a').filter('.active').index();
	
	index = (index !== -1) ? index + 1 : 0;
	
	win.resize(function(){
		
		if(win.width() < 600){
			
			if(!navSelect){

				navSelect = $('<select>');

				Array.prototype.push.apply(navItems, nav.find('a').map(function(){
					return {text: this.textContent, url: this.href};
				}).get());

				$.each(navItems, function(){
					navSelect.append($('<option>',{text:this.text}));
				});

				navSelect.on('change', function(){
					window.location = navItems[this.selectedIndex].url;
				});
				
				navSelect.prop('selectedIndex', index);
				
				navSelect.appendTo('header');
			}
			
			nav.hide();
			navSelect.show();
			
		}
		else{
			nav.show();
			navSelect && navSelect.hide();
		}
		
		
	}).resize();

// Active The search text field

	var searchIcon = $('.searchIcon');

	searchIcon.click(function(e){
		e.preventDefault();

		if(searchIcon.is('.active') && $(e.target).is(searchIcon)){
			searchIcon.removeClass('active');
		}
		else{
			searchIcon.addClass('active');
			searchIcon.find('input').focus();
		}

	});

	$('body').click(function(e){

		if(	searchIcon.is('.active') &&
			!$(e.target).is('.searchIcon, .searchIcon form, .searchIcon input')){

			searchIcon.removeClass('active');
		}

	});