<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <img src="~/assets/logo.svg" alt="Logo multiplicame" class="logo" />
      </div>
    </div>
    <div class="row q-mt-xl q-mb-lg">
      <div class="col-12">
        <Title :title="`Functionalidades`" class="q-mt" />
      </div>
    </div>
    <div class="tabs-functionalities">
      <div>
        <q-card>
          <q-tabs v-model="tab">
            <q-tab name="managers" label="COMO GESTOR" class="button-tabs" />
            <q-tab name="member" label="COMO MEMBRO" class="button-tabs" />
          </q-tabs>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="managers">
              <div class="row">
                <div class="col-6 col-md-6 col-sm-12 list-item" v-for="item in managers" :key="item?.id">
                  <div class="text-h6 item-title"><img src="~/assets/person-icon.svg"/>{{ item?.title }}</div>
                  <p>
                    {{ item?.description }}
                  </p>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="member">
              <div class="row">
                <div class="col-6 col-md-6 col-sm-12 list-item" v-for="item in members" :key="item?.id">
                  <div class="text-h6 item-title"><img src="~/assets/person-icon.svg"/>{{ item?.title }}</div>
                  <p>
                    {{ item?.description }}
                  </p>
                </div>
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
<style>
.image-home {
  max-width: 80%;
  display: flex;
  margin: 0 auto;
}
.tabs-functionalities div {
  box-shadow: none !important;
  background: transparent !important;
}

.q-tabs__content.row.no-wrap.items-center.self-stretch.hide-scrollbar.q-tabs__content--align-center {
  display: flex;
  justify-content: flex-start;
}
.q-tab--active.button-tabs {
  background: #353286 !important;
  color: #fff !important;
  border-radius: 5px;
  min-width: 200px;
}
.q-tabs__content > div:first-child {
  margin-right: 20px;
}
.q-tab--inactive.button-tabs {
  background: transparent !important;
  color: #353286 !important;
  border-radius: 5px;
  min-width: 200px;
  border: solid;

}
.item-title{
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: #0C0B39
}
.item-title img{
  max-width: 20px;
  margin-right: 10px;
}

.list-item {
    min-height: 170px;
    line-height: 30px;
}
@media(min-width:500px) {
  .list-item p {
    max-width: 80%;
    font-size: 16px;
    color: #6C6C80;
  }
  .q-tab-panel {
    padding-top: 100px;
}
}
</style>
