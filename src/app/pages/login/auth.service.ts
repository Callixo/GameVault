import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  // Exibe um carregando (loading spinner)
  async showLoading(message: string) {
    const loading = await this.loadingCtrl.create({ message, duration: 2000 });
    await loading.present();
  }

  // Exibe mensagens de erro
  async showToast(message: string, color: string = 'danger') {
    const toast = await this.toastCtrl.create({
      message,
      color,
      duration: 2000,
    });
    toast.present();
  }

  // Login com email e senha
  async login(email: string, password: string) {
    try {
      await this.showLoading('Autenticando...');
      const userCredential = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return userCredential;
    } catch (error) {
      await this.showToast('Erro ao fazer login. Verifique suas credenciais.');
      throw error;
    }
  }

  // Cadastro de novo usuário
  async register(email: string, password: string) {
    try {
      await this.showLoading('Criando conta...');
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return userCredential;
    } catch (error) {
      await this.showToast('Erro ao cadastrar. Tente novamente.');
      throw error;
    }
  }

  // Logout do usuário
  async logout() {
    try {
      await this.afAuth.signOut();
      await this.showToast('Você saiu com sucesso!', 'success');
    } catch (error) {
      await this.showToast('Erro ao sair.');
      throw error;
    }
  }

  // Verifica se o usuário está autenticado
  async isAuthenticated(): Promise<boolean> {
    const user = await this.afAuth.currentUser;
    return !!user;
  }
}