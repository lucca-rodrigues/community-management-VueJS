<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <div class="col-6 col-md-6 col-sm-12">
        <img src="~/assets/logo.svg" alt="" />
        <Title
          :title="'Faça a Gestão da sua comunidade de uma forma simples e completa'"
          class="q-mt"
        />
        <Text
          :text="'Multiplicame é uma plataforma que possui tudo o que você precisa para trabalhar senso de pertencimento e produtividade de membros.'"
        />
        TODAS AS FUNCIONALIDADES
      </div>
      <div class="col-6 col-md-6 col-sm-12">
        <img src="~/assets/image-home.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "src/components/Title";
import Text from "src/components/Text";

export default {
  components: {
    Title,
    Text,
  },
};
</script>
