<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <img src="~/assets/logo.svg" alt="Logo multiplicame" class="logo" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <Title :title="`Functionalidades`" class="q-mt" />
      </div>
    </div>

    <div class="tabs-functionalities">
      <div>
        <q-card>
          <q-tabs
            v-model="tab"
          >
            <q-tab name="managers" label="COMO GESTOR" class="button-tabs"/>
            <q-tab name="member" label="COMO MEMBRO" class="button-tabs"/>
          </q-tabs>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="managers">
              <ul class="q-px-lg " v-for="(item) in managers" :key="item?.id">
                <li :key="item.id">
                  <div class="text-h6">{{item?.title}}</div>
                    <p>
                      {{item?.description}}
                    </p>
                  </li>
              </ul>
            </q-tab-panel>

            <q-tab-panel name="member">
              <ul class="q-px-lg " v-for="(item) in members" :key="item?.id">
                <li :key="item.id">
                  <div class="text-h6">{{item?.title}}</div>
                    <p>
                      {{item?.description}}
                    </p>
                  </li>
              </ul>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Title from "components/Title";
import Api from "../../services/api";

export default {
  components: {
    Title,
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
    }
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
  }
};
</script>
<style>
.image-home {
  max-width: 80%;
  display: flex;
  margin: 0 auto;
}
.tabs-functionalities div{
  box-shadow: none!important;
  background: transparent!important;
}


.q-tabs__content.row.no-wrap.items-center.self-stretch.hide-scrollbar.q-tabs__content--align-center{
  display: flex;
  justify-content: flex-start;
}
.q-tab--active.button-tabs {
    background:#353286!important;
    color: #fff!important;
    border-radius: 5px;
}
.q-tab--inactive.button-tabs {
    background:transparent!important;
    color: #353286!important;
    border-radius: 5px;
}
</style>
