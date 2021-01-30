<script>
  import InfoMenu from './InfoMenu.svelte';
  import Question from './Question.svelte';

  export let questions;
</script>
  
<div class="columns">
  <div class="column">
    <div class="content">
      {#each questions as question}
        <Question question={question}></Question>
      {/each}
    </div>
  </div>
  <div class="column is-one-fifth">
    <InfoMenu></InfoMenu>
  </div>
</div>
