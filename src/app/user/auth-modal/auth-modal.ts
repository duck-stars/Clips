import { Component, inject, OnInit} from '@angular/core';
import { Modal } from '../../shared/modal/modal';
import { Register } from '../register/register';
import { Login } from '../login/login';

@Component({
  selector: 'app-auth-modal',
  imports: [Modal, Register, Login],
  templateUrl: './auth-modal.html',
  styleUrl: './auth-modal.css',
})
export class AuthModal {}