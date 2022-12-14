<template>

  <ion-page id="main-content">

    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-menu-button color="primary-fleet"></ion-menu-button>
        </ion-buttons>
        <ion-title>Hola! {{ name }}</ion-title>
      </ion-toolbar>
    </ion-header>

    
    <ion-content :fullscreen="true" class="ion-padding">    
      <div id="container">
        <ion-card>
          <ion-card-header>
            <ion-card-title>{{ $t("trip") }}</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>
          <ion-button fill="clear">Action 1</ion-button>
          <ion-button fill="clear">Action 2</ion-button>
        </ion-card>

        <div id="alerts">
          <ion-chip color="success" class="wide">
            <ion-icon :icon="chatbubble" color="success"></ion-icon>
            <ion-label>Tienes <strong>&nbsp;1&nbsp;</strong> mensaje nuevo!</ion-label>
            <ion-icon :icon="closeCircle" color="success"></ion-icon>
          </ion-chip>
          <ion-chip color="primary" class="wide">
            <ion-icon :icon="documentText" color="primary"></ion-icon>
            <ion-label>Tienes <strong>&nbsp;1&nbsp;</strong> documento nuevo!</ion-label>
            <ion-icon :icon="closeCircle" color="primary"></ion-icon>
          </ion-chip>
        </div>
      </div>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-badge color="success" style="right: -5px; z-index: 3; position: absolute;">1</ion-badge>
        <ion-fab-button color="primary-fleet" href="/chat">
          <ion-icon :icon="chatbubble" color="light"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>



  
</template>

<script>

import { IonPage, IonContent, IonHeader, IonIcon, IonToolbar , IonChip, IonLabel, IonMenuButton, IonButtons, IonButton, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonBadge, IonFab, IonFabButton, IonTitle } from '@ionic/vue';
import { chatbubble, close, closeCircle, documentText } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
import { useAuthenticationStore } from '@/stores/auth/authentications.js';


export default defineComponent({
  name: 'HomePage',
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonChip,
    IonLabel,
    IonMenuButton,
    IonButtons,
    IonButton,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCardContent,
    IonCard,
    IonBadge,
    IonFab, 
    IonFabButton,
    IonTitle,
  },
  setup(){

    const useAuthentication = useAuthenticationStore();

    const name = ref();

    name.value = useAuthentication.user.name;

    
    return { 
      chatbubble, 
      close,
      closeCircle,
      documentText,
      name
    }
  },
  
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
</style>
