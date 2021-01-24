<script lang="typescript">
  import InfoMenu from './InfoMenu.svelte';
  import Question from './Question.svelte';
  import NewAnswer from './NewAnswer.svelte';
</script>
  
<div class="columns">
  <div class="column">
    <div class="content">
      <Question></Question>
      <NewAnswer></NewAnswer>
    </div>
  </div>
  <div class="column is-one-fifth">
    <InfoMenu></InfoMenu>
  </div>
</div>
