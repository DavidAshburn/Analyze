import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
static targets = [
  "value",
  "footage",
  "dwelling",
  "erc",
  "homeliability",
  "excessre",
  "coversqft",
  "autoliability",
  "umbrellalimit",
  "numproperties",
  "totalpropvalue",
  "investmentvalue",
  "autoexcessre",
  "excessumbrella",
  "totalexcessumbrella",
  "worklife",
  "deathbenefit",
  "cashvalue",
  "currentannual",
  "dependents",
  "yearsincome",
  "benefiteach"
]

  connect() {
    
  }

  update() {
      this.home = this.homeliabilityTarget.value;
      this.auto = this.autoliabilityTarget.value;
      this.umb = this.umbrellalimitTarget.value;
      this.life = this.deathbenefitTarget.value;


      if(this.home > 0) {
        this.excesshome = this.valueTarget.value - this.home;
        this.excessreTarget.innerText = `$${this.excesshome}`;
      }

      if(this.footageTarget.value > 0) {
        this.sqftout = (this.dwellingTarget.value * this.ercTarget.value) / this.footageTarget.value ;
        this.coversqftTarget.innerText = `$${this.sqftout}`;
        console.log("sqft")
      }

      if(this.auto > 0) {
        this.autoexcess = this.valueTarget.value - this.auto;
        this.autoexcessreTarget.innerText = `$${this.autoexcess}`;
      }

      if(this.auto > this.home)
        this.lower = this.home;
      else
        this.lower = this.auto;

      if(this.umb > 0) {
        this.worstcase = parseInt(this.lower) + parseInt(this.umb);
        this.worstcase = this.totalpropvalueTarget.value - this.worstcase;
        this.excessumbrellaTarget.innerText = `$${this.worstcase}`;
        this.worstcase += parseInt(this.investmentvalueTarget.value);
        this.totalexcessumbrellaTarget.innerText = `$${this.worstcase}`;
      }

      if(this.life > 0) {
        this.yearsleft = this.life / parseFloat(this.currentannualTarget.value);
        this.yearsincomeTarget.innerText = this.yearsleft;

        this.benefiteachTarget.innerText = `$${this.life / parseFloat(this.dependentsTarget.value)}`
      }

  }


}