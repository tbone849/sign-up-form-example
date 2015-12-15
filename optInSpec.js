describe('optIn', function(){
	var scope;
	var element;
	var compiled;
	var html;

	beforeEach(module('signUpFormApp'));
	beforeEach(module('optIn.html'));

	beforeEach(inject(function($rootScope, $compile){
		html = '';
		html += '<opt-in>';
		html += '<div id="myDiv" class="logo"></div>';
		html += '</opt-in>';		

		scope = $rootScope.$new();
        compiled = $compile(html)
        element = compiled(scope);
        scope.$digest();
	}));

	it('should render the element correctly', function(){
		expect(element.find('#myDiv').hasClass('logo')).toBe(true);
		expect(element.find('form').length).toBe(1);
		expect(element.find('input').length).toBe(3);
		expect(element.find('button').text()).toContain('infoz');
	});
});