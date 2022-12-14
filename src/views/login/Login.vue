<template>
    <ion-page>
        <ion-content>
            <div id="container">
                <form @submit.prevent="handleSubmit">
                    <ion-item fill="solid" ref="item">
                        <ion-label position="floating">{{ $t("login.token_placeholder") }}</ion-label>
                        <ion-input type="text" v-model="input_token"></ion-input>
                        <!-- <ion-note slot="helper">Enter a valid email</ion-note>-->
                        <!-- <ion-note slot="error">AAA</ion-note>  -->
                    </ion-item>

                    <ion-button 
                            type="submit" 
                            color="primary"
                            expand="full" 
                        >
                            {{ $t("login.btn_login") }}
                    </ion-button>
                    
                </form>

            </div>
        </ion-content>
    </ion-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { IonPage, IonContent, IonLabel, IonInput, IonItem, IonButton, loadingController} from '@ionic/vue';
import { useAuthenticationStore } from '@/stores/auth/authentications.js';
import { useRouter } from 'vue-router';
//import { useIonRouter } from '@ionic/vue';


export default defineComponent({
    name: 'login-custom',
    components: {
        IonPage,
        IonContent,
        IonLabel,
        IonInput,
        IonItem,
        IonButton
    },
    setup(){

        const useAuthentication = useAuthenticationStore();
        const router = useRouter();

        const input_token = ref('');
        const error = ref(null);


        const handleSubmit = async() => {

            if(input_token.value === ''){
                return;
            }


            const loading = await loadingController.create({
                //message: '<ion-img src="/public/assets/images/fleet-logo.svg" alt="loading..."></ion-img>',
                spinner: 'circles'
            });

            
            loading.present();
            await useAuthentication.login(input_token.value);

            if(useAuthentication.user){
                loading.dismiss();
                router.push('/home');
            }else{
                loading.dismiss();
                error.value = useAuthentication.errors.error;
            }
            
        }

        
        return {
            handleSubmit,
            input_token,
        }
    }
});

</script>


<style scoped>

#container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80%;
}

</style>