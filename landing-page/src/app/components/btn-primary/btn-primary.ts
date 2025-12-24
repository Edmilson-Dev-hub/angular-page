import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output} from '@angular/core';
type BtnVariants = "primary" | "secondary" 

@Component({
  selector: 'app-btn-primary',
  imports: [CommonModule],
  templateUrl: './btn-primary.html',
  styleUrl: './btn-primary.scss',
})
export class BtnPrimary {

}
