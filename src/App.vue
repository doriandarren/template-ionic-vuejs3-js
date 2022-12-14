<template>

  <ion-app>

    <!-- Menu -->
    <ion-menu content-id="main-content" type="overlay" side="end">
        
      <ion-content>

          <ion-toolbar color="primary-fleet">
            <ion-list-header class="menu-header">
              <!-- <img alt="logo" id="header_logo" height="40" src="../../public/assets/images/fleet-logo.svg"> -->
              <ion-img alt="logo" class="logo" src="../../assets/images/fleet-logo.svg"></ion-img>
              <ion-title class="menu-header-letter">{{ $t("brand") }}</ion-title>
            </ion-list-header>

            <ion-menu-toggle>
              <ion-list lines="full">
                <ion-item>
                  <ion-icon :icon="rocketOutline" slot="end"></ion-icon>
                  <ion-label>{{ $t("trip") }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-icon :icon="documentTextOutline" slot="end"></ion-icon>
                  <ion-label>{{ $t("documents") }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-icon :icon="alertOutline" slot="end"></ion-icon>
                  <ion-label>{{ $t("incidences") }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-icon :icon="carOutline" slot="end"></ion-icon>
                  <ion-label>{{ $t("vehicles") }}</ion-label>
                </ion-item>
                <ion-item color="danger" slot="end">
                  <ion-icon :icon="powerOutline" slot="end"></ion-icon>
                  <ion-label @click="logout">{{ $t("logout.title") }}</ion-label>
                </ion-item>
              </ion-list>
            </ion-menu-toggle>
          </ion-toolbar>

      </ion-content>

    </ion-menu>
    <!-- Menu -->


    <!-- Render -->
    <ion-router-outlet id="main-content" />
    <!-- Render -->

  </ion-app>

</template>

<script>

import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { IonApp, IonRouterOutlet, IonMenu, IonMenuToggle, IonImg, IonList, IonItem, IonTitle, IonIcon, IonToolbar, IonLabel, IonContent, IonListHeader } from '@ionic/vue';
import { closeCircle, documentText, powerOutline, documentTextOutline, alertOutline, carOutline, rocketOutline } from 'ionicons/icons';
import { useAuthenticationStore } from '@/stores/auth/authentications.js';


export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonMenu, 
    IonMenuToggle, 
    IonImg, 
    IonList, 
    IonItem, 
    IonTitle, 
    IonIcon,
    IonToolbar,
    IonLabel,
    IonContent,
    IonListHeader
  },
  setup(){

    const useAuthentication = useAuthenticationStore();
    const router = useRouter();


    // Logout
    const logout = async() => {
      await useAuthentication.logout();
      router.push("/login");
    }

    return {
      closeCircle, 
      documentText, 
      powerOutline, 
      documentTextOutline, 
      alertOutline, 
      carOutline, 
      rocketOutline,
      logout,
    }
  }
});
</script>

<style scoped>
.logo{
  width: 60px; 
  height: 60px;
}
.menu-header{
  padding: 10px;
}

.menu-header-letter{
  color: #fff;
}

</style>