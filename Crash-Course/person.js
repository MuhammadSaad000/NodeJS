
class Person
{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    };

    sayHello = () =>
    {
        console.log("Hello, meet my son " + this.name + " he is " + this.age );
    }

}



module.exports = Person;