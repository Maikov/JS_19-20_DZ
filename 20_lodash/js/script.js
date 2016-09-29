$.getJSON('https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json',
	function(data){
	console.log('Array_1(skills)',_.uniq(_.flattenDeep(_.map(data,'skills'))).sort());
	console.log('Array_2(name)',_.map(_.sortBy(data, function (obj){ 
		return obj.friends.length;
	}), 'name'));
	console.log('Array_3(friends)',_.uniq(_.map(_.flattenDeep(_.map(data,'friends')),'name')));
});