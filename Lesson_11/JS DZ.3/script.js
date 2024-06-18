

const adressBook = {

contacts: [ 
{
    "name": "John",
    "phone": "+380667777777",
    "email": "John@gmail.com"
},
{
    "name": "Vince",
    "phone": "+38066888888",
    "email": "Vince@gmail.com"
},
{
    "name": "Mike",
    "phone": "+380669999999",
    "email": "Mike@gmail.com"
} 

]
,
  addNewUser(name, phone, email){
    const newUser = {
    name: name,
    phone: phone,
    email: email
    };
    this.contacts.push(newUser);
    return this.contacts;
}
,
  findUser(name) {
   return this.contacts.filter(item => item.name === name);
  }

}
adressBook.addNewUser("Dmytro","0661111111","dmytro@gmail.com")
adressBook.findUser("Vince")
