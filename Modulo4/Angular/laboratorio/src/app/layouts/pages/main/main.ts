import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [Header, Footer, RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
