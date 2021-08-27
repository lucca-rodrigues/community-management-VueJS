<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <router-link to="/">
          <img src="~/assets/logo.svg" alt="Logo multiplicame" class="logo" />
        </router-link>
      </div>
    </div>
    <div class="row q-mt-xl q-mb-lg flex items-center justify-between">
      <div class="col-md-6 col-sm-12">
        <Title :title="`Adicionar Functionalidades`" class="q-mt" />
      </div>      
      <div class="col-md-6 col-sm-12 text-right add-new">
        <router-link class="decoration-none" to="/functionalities">
          Cancelar
        </router-link>
      </div>
    </div>
    <div class="tabs-functionalities">
        <div>
            <q-card>
            <q-tabs v-model="tab">
                <q-tab name="managers" label="COMO GESTOR" class="button-tabs" @click="this.typeFunctionality === 'managers'"/>
                <q-tab name="member" label="COMO MEMBRO" class="button-tabs" @click="this.typeFunctionality === 'members'"/>
            </q-tabs>

            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="managers">
                <div class="row">
                    teste
                </div>
                </q-tab-panel>

                <q-tab-panel name="member">
                <div class="row">
                    teste2
                </div>
                </q-tab-panel>
            </q-tab-panels>
            </q-card>
        </div>
        </div>
  </div>
  <Footer/>
</template>

<script>
import { ref } from "vue";
import Title from "components/Title";
import Footer from "components/Footer";
import Api from "../../services/api";
import './styles.scss';

export default {
  components: {
    Title,
    Footer
  },
    setup() {
    return {
      tab: ref("managers"),
    };
  },
  data() {
    return {
      data: {
          title:"",
          icon: "",
          description: "",
      },
      typeFunctionality: "managers",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

        if(typeFunctionality === "managers"){
            this.createNewManage();
        }
        this.createNewMember();
    },

    createNewManage() {
      const response = Api.post("/managers", data);
      console.log(response.data);
      this.managers = response.data;
    },
    createNewMember() {
      const response = Api.post("/members", data);
      console.log(response.data);
      this.members = response.data;
    },
  },
  mounted() {
    // this.createNewManage();
    // this.createNewMember();
  },
};
</script>
