const userDetails = {
    firstName: 'Nik',
    lastName: 'Brown',
    
    get something() {
    return this.firstName + ' ' + this.lastName
    },
    
    set age(value) {
    if(isNaN(value)) throw Error('Age should be a number')
    this._age = Number(value)
    },
    get age() {
    return this._age
    }
    }
    
    console.log(userDetails.something)
    userDetails.firstName = 'Bobby'
    console.log(userDetails.something)
    userDetails.age = ''
    console.log(userDetails.age)
    userDetails.age = '21'
    console.log(userDetails.age)

