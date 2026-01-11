import { Component } from '@angular/core';
import { Header } from '../header/header';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimary } from "../btn-primary/btn-primary";
import {Description } from '../description/description';


@Component({
  selector: 'app-home',
  imports: [Header, NgOptimizedImage, BtnPrimary, Description],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
