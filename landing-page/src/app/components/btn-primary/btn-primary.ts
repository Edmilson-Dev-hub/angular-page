import { Component, Input, EventEmitter, Output} from '@angular/core';
type BtnVariants = "primary" | "secondary" 

@Component({
  selector: 'app-btn-primary',
  imports: [],
  templateUrl: './btn-primary.html',
  styleUrl: './btn-primary.scss',
})
export class BtnPrimary {
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";
  @Output("submit") onSubmit = new EventEmitter();


  submit() {
    this.onSubmit.emit();
  }
}
