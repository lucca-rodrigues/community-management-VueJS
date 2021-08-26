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
      managers: [],
      members: [],
    };
  },
  methods: {
    async getAllManagers() {
      const response = await Api.get("/managers");
      console.log(response.data);
      this.managers = response.data;
    },
    async getAllMembers() {
      const response = await Api.get("/members");
      console.log(response.data);
      this.members = response.data;
    },
  },
  mounted() {
    this.getAllManagers();
    this.getAllMembers();
  },
};
</script>
