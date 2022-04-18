import { Component, OnInit } from "@angular/core"
import { FormControl, Validators } from "@angular/forms"

@Component({
  selector: "mn-place-edit",
  templateUrl: "./place-edit.component.html",
  styleUrls: [ "./place-edit.component.scss" ]
})
export class PlaceEditComponent implements OnInit {

  public rating: FormControl = new FormControl(3, Validators.min(1))

  constructor() {
    console.log(this.rating)
    this.rating.disable();
  }

  ngOnInit(): void {
  }

}
