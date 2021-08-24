// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello',function () {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return a string called "Hello Jane" when called', function () {
        expect(sayHello('Jane')).toBe('Hello Jane')
    });
    it('should never return "undefined" when called', function () {
        expect(sayHello()).not.toBe(undefined);
    });
    it('should return a string called "Hello Alex" when called' , function () {
        expect(sayHello('Alex')).toBe('Hello Alex')
    });
    it('should return a string called "Hello Pat" when called', function () {
        expect(sayHello('Pat')).toBe('Hello Pat')
    });
    it('should return true when a string called "Hello World" is called', function () {
        expect(sayHello(true)).toBe('Hello World')
    });
    it('should return false when a string called "Hello World" is called', function () {
        expect(sayHello(false)).toBe('Hello World')
    });
});
describe('isFive', function () {
    it('should return the value of 5', function () {
        expect(isFive()).toBe(5);
    });
});
describe('isEven', function(){
    it('should return a number that is even', function () {
        expect(isEven()).toBe()
    });
})

describe('isVowel', function () {
    it('should return a string that is a vowel', function () {
        expect(isVowel()).toBe()
    });
});
describe('add', function() {
    it('should return a number sum', function () {
        expect(add()).toBe()
    });
});