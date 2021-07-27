export default class Car {

  //Object de-structuring in which ONLY get these properties

  /**
   *
   * @param {*} Car representation
   */
  constructor({make, model, year, price, description , imgUrl, id}){
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
    this.description = description || 'no description';
    this.id = id,
    this.imgUrl = imgUrl || '//placebeard.it/300x300'
  }

   /**
   * @param {String} make
   * @param {String} model
   * @param {Number} year
   */
  // This is constructor(data)
  // constructor(make, model, year, price, description ='no description', imgURL){
  //   this.make = make;
  //   this.model = model;
  //   this.year = year;
  //   this.price = price;
  //   this.description = description;
  //   this.imgURl = imgURL;
  // }

  getTemplate(){
    let template = `
    <div class=" col-md-3 col-sm-2">
      <div class="car bg-light shadow">
        <img src="//placebeard.it/200x200" class = w-100 alt="${this.make} ${this.model}">
        <div class = "p-3">
          <p><b>${this.year} - ${this.make} - ${this.model}</b></p>
          <p>${this.description}</p>
          <p><i>${this.price}</i></p>
          <button class="btn btn-info btn-block" onclick="app.carsController.bidCar('${this.id}')"> bid </button>
          <button class="btn btn-warning btn-block" onclick="app.carsController.deleteCar('${this.id}')"> delete </button>
        </div>
      </div>
    </div>
    `
    return template
  }

}
