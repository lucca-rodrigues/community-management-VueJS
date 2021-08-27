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
            <q-tab
              name="managers"
              label="COMO GESTOR"
              class="button-tabs"
              @click="typeFunctionality = 'managers'"
            />
            <q-tab
              name="members"
              label="COMO MEMBRO"
              class="button-tabs"
              @click="typeFunctionality = 'members'"
            />
          </q-tabs>
          <q-form @submit="handleSubmit" class="form-add-new">
            <q-label>Titulo</q-label>
            <q-input
              outlined
              v-model="data.title"
              lazy-rules
              class="q-mb-md"
              color="#3D88D6"
            />

            <q-label>Icone(nome)</q-label>
            <q-input
              outlined
              v-model="data.icon"
              lazy-rules
              class="q-mb-md"
              color="#3D88D6"
            />

            <q-label>Descrição</q-label>
            <q-input
              type="textarea"
              outlined
              v-model="data.description"
              lazy-rules
              class="q-mb-md"
              color="#3D88D6"
            />

            <div class="buttons">
              <q-btn
                label="ADICIONAR FUNCIONALIDADE"
                type="submit"
                style="background: #353286; color: white"
              />
            </div>
          </q-form>
        </q-card>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { ref } from "vue";
import Title from "components/Title";
import Footer from "components/Footer";
import Api from "../../services/api";
import "./styles.scss";

export default {
  components: {
    Title,
    Footer,
  },
  setup() {
    return {
      tab: ref("managers"),
    };
  },
  data() {
    return {
      data: {
        title: "",
        icon: "",
        description: "",
      },
      typeFunctionality: "managers",
    };
  },
  methods: {
    createNewManager() {
      const data = this.data;
      Api.post("/managers", data);
      console.log("Created Manager:", data);
    },

    createNewMember() {
      const data = this.data;
      Api.post("/members", data);
      console.log("Created Member:", data);
    },

    handleSubmit() {
      const data = this.data;
      const typeFunctionality = this.typeFunctionality;

      if (typeFunctionality === "managers") {
        this.createNewManager(data);
      } else {
        this.createNewMember(data);
      }
    },
  },
};
</script>
