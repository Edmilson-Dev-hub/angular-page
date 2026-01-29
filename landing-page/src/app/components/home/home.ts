import { Component } from '@angular/core';
import { Header } from '../header/header';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { BtnPrimary } from "../btn-primary/btn-primary";
import {Description } from '../description/description';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, NgOptimizedImage, BtnPrimary, Description, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  heroShoeImage: string = '/assets/NIKE+AIR+MAX+95+BIG+BUBBLE+SE.png';

  dots = [
    { src: '/assets/NIKE+AIR+MAX+95+BIG+BUBBLE+SE.png', active: true },
    { src: '/assets/BigBuble2.png', active: false },
    { src: '/assets/BigBuble3.png', active: false }
  ];

  changeImage(selectedDot: any) {
    this.heroShoeImage = selectedDot.src;
    this.dots.forEach(dot => {
      dot.active = (dot === selectedDot);
    });
  }
}

