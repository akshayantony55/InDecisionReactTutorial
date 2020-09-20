//arguments object - no longer bound with arrow functions

//arguments is a keyword which return all the parameters passed to a function
const a = (a, b) => {
    console.log(arguments); //not valid
    return a+b
};


// this keyword - no longer bound

const user = {
    name: 'Akshay',
    Cities: ['Ekm', 'Idukki'],
    printplacesLived: function () {
        this.Cities.forEach((city)=> {
            console.log(this.name + ':' + city);
        })
    }
}