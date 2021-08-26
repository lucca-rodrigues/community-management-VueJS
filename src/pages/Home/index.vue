<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <img src="~/assets/logo.svg" alt="Logo multiplicame" class="logo" />
      </div>
    </div>
    <div class="row items-center justify-center">
      <div class="col-6 col-md-6 col-sm-12">
        <Title
          :title="`Faça a Gestão da sua comunidade de uma forma simples e completa`"
          class="q-mt"
        />
        <Text
          :text="'Multiplicame é uma plataforma que possui tudo o que você precisa para trabalhar senso de pertencimento e produtividade de membros.'"
        />
        TODAS AS FUNCIONALIDADES
      </div>
      <div class="col-6 col-md-6 col-sm-12">
        <img src="~/assets/image-home.svg" alt="Image Peaples" class="image-home"/>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "components/Title";
import Text from "components/Text";
import './styles.scss';

export default {
  components: {
    Title,
    Text,
  },
};
</script>
