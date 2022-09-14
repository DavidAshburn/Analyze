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
  "excessumbrellaauto",
  "excessumbrellahome",
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

        this.autoumb = parseInt(this.auto) + parseInt(this.umb);
        this.homeumb = parseInt(this.home) + parseInt(this.umb);

        this.autoumb = this.totalpropvalueTarget.value - this.autoumb;
        this.homeumb = this.totalpropvalueTarget.value - this.homeumb;

        this.excessumbrellaautoTarget.innerText = `$${this.autoumb}`;
        this.excessumbrellahomeTarget.innerText = `$${this.homeumb}`;

        this.worstcase = (parseInt(this.totalpropvalueTarget.value) + parseInt(this.investmentvalueTarget.value)) - (parseInt(this.lower) + parseInt(this.umb));
        this.totalexcessumbrellaTarget.innerText = `$${this.worstcase}`;
      }

      if(this.life > 0) {
        this.yearsleft = this.life / parseFloat(this.currentannualTarget.value);
        this.yearsincomeTarget.innerText = this.yearsleft;

        this.benefiteachTarget.innerText = `$${this.life / parseFloat(this.dependentsTarget.value)}`
      }

  }


}