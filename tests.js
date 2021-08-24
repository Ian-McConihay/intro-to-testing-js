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
    it('should never return not 5', function () {
        expect(isFive()).toBe(false)
    });
    it('should return the boolean value true', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should never be a string', function () {
        expect(isFive()).not.toBe('')
    });
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function')
    });
    it('should return a number', function () {
        expect(typeof isFive("value")).toBe("number");
    });
});



describe('isEven', function(){
    it('should not be a string', function () {
        expect(isEven()).toBe('')
    });
    it('should pass in the parameters x', function () {
        expect(isEven()).toBe('% === 0')
    });
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function')
    });
    it('should return a number that is even', function () {
        expect(isEven()).toBe()
    });
})



describe('isVowel', function () {
    it('should return the vowels in an array', function () {
        expect(isVowel()).toBe([])
    });
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function')
    });
    it('should return all of the vowels', function () {
        expect(isVowel()).toBe('a','e','i','o','u')
    });
});



describe('add', function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function')
    });
    it('should return a number sum', function () {
        expect(add()).toBe()
    });
});