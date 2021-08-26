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

    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 600px">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="gestor" label="COMO GESTOR" />
            <q-tab name="member" label="COMO MEMBRO" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="gestor">
              <div class="text-h6">Mails</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="member">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

export default {
  components: {
    Title,
  },
  setup() {
    return {
      tab: ref("gestor"),
    };
  },
};
</script>
<style>
.image-home {
  max-width: 80%;
  display: flex;
  margin: 0 auto;
}
</style>
