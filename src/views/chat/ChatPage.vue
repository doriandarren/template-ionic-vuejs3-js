<template>
  <ion-page id="main-content">
    <ion-header :translucent="true" class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
        <ion-back-button defaultHref="home" color="primary-fleet" text="Volver"></ion-back-button>
      </ion-buttons>
        <ion-buttons slot="end">
          <ion-menu-button auto-hide="false" color="primary-fleet"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true" class="ion-padding">    
      <div id="container">
        <h1>Chats</h1>
<!--         <ion-toolbar color="primary-fleet">
          <ion-title>Chats</ion-title>
          <ion-buttons slot="end">
            <ion-icon :icon="createOutline" color="light" size="large"></ion-icon>
          </ion-buttons>
        </ion-toolbar> -->
        <ion-list>
          <ion-list-header>
            Usuarios
          </ion-list-header>
          <ion-item>
            <ion-avatar slot="start">
              <img src="../../../public/assets/avatars/office.png">
            </ion-avatar>
            <ion-label>
              <h2>Gestor de tráfico 1</h2>
              <ion-badge color="success">En linea</ion-badge>
              <p>Lorem ipsum dolor sit amet consectetur...</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-avatar slot="start">
              <img src="../../../public/assets/avatars/office.png">
            </ion-avatar>
            <ion-label>
              <h2>Gestor de tráfico 2</h2>
              <ion-badge color="light">Desconectado</ion-badge>
              <p>Lorem ipsum dolor sit amet consectetur...</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-badge slot="end" color="success">1</ion-badge>
            <ion-avatar slot="start">
              <img src="../../../public/assets/avatars/office.png">
            </ion-avatar>
            <ion-label>
              <h2>Geréncia</h2>
              <ion-badge color="light">Desconectado</ion-badge>
              <p>Lorem ipsum dolor sit amet consectetur...</p>
            </ion-label>
          </ion-item>

          <ion-list-header>
            Grupos
          </ion-list-header>

          <ion-item>
            <ion-avatar slot="start">
              <img src="../../../public/assets/avatars/driver.png">
            </ion-avatar>
            <ion-label>
              <h2>GRUPO 1</h2>
              <p>Lorem ipsum dolor sit amet consectetur...</p>
            </ion-label>
          </ion-item>

        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonToolbar , IonMenuButton, IonBackButton, IonButtons, IonListHeader, IonAvatar, IonList, IonBadge, IonLabel, IonItem} from '@ionic/vue';
import { chatbubble, close, closeCircle, documentText, createOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonMenuButton,
    IonBackButton,
    IonButtons,
    IonListHeader,
    IonAvatar,
    IonList,
    IonBadge,
    IonLabel,
    IonItem
  },
  setup(){
    return { chatbubble, close, closeCircle, documentText, createOutline }
  }
});
</script>

<style scoped>

ion-fab {
  margin: 15px!important;
}

#alerts{
  margin-top: 25px;
  text-align: center;
}

ion-chip.wide {
  width: 100%;
  
  justify-content: center;
}

</style>
