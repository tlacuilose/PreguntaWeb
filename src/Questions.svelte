<script>
  import Question from './Question.svelte';

  export let questions;
</script>
  
<div class="content">
  {#each questions as question}
    <Question question={question}></Question>
  {/each}
</div>
