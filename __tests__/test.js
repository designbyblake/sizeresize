jest.unmock('../_build/_js/index');

const sizeResize = require('../_build/_js/index');
const test2 = function(){};

describe('getCurrent Xlarge', () =>{
	it('Compares Width',() =>{
		expect(sizeResize.getCurrent(1400)).toBe('xlarge');
	});
});

describe('getCurrent xlarge', () =>{
	it('Compares Width',() =>{
		expect(sizeResize.getCurrent(1201)).toBe('xlarge');
	});
});

describe('getCurrent large', () =>{
	it('Compares Width',() =>{
		expect(sizeResize.getCurrent(1025)).toBe('large');
	});
});

describe('getCurrent medium', () =>{
	it('Compares Width',() =>{
		expect(sizeResize.getCurrent(768)).toBe('medium');
	});
});

describe('getCurrent small', () =>{
	it('Compares Width',() =>{
		expect(sizeResize.getCurrent(640)).toBe('small');
	});
});

describe('getCurrent small', () =>{
	it('Compares Width',() =>{
		expect(sizeResize.getCurrent(300)).toBe('small');
	});
});

describe('addAny', () =>{
	it('Compares Width',() =>{
		sizeResize.addAny(test,['Dan', 'test']);
		sizeResize.addAny(test2,[]);
		expect(sizeResize.any.length).toBe(2);
	});
});

describe('addXlarge', () =>{
	it('Compares Width',() =>{
		sizeResize.addXlarge(test,['Dan', 'test']);
		expect(sizeResize.xlarge.length).toBe(1);
	});
});

describe('addLarge', () =>{
	it('Compares Width',() =>{
		sizeResize.addLarge(test,['Dan', 'test']);
		expect(sizeResize.large.length).toBe(1);
	});
});

describe('addMedium', () =>{
	it('Compares Width',() =>{
		sizeResize.addMedium(test,['Dan', 'test']);
		sizeResize.addMedium(test2,[]);
		expect(sizeResize.medium.length).toBe(2);
	});
});

describe('addSmall', () =>{
	it('Compares Width',() =>{
		sizeResize.addSmall(test,['Dan', 'test']);
		sizeResize.addSmall(test2,[]);
		expect(sizeResize.small.length).toBe(2);
	});
});