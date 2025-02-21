class User {
  constructor(name) {
    this.name = name;
  }

  static goToHomePage(){
    cy.visit("https://www.demoblaze.com/");
  }
}

export default User;