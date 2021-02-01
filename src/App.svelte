<script>
  import Title from './Title.svelte';
  import QuestionsHeader from './QuestionsHeader.svelte';
  import Questions from './Questions.svelte';
  import InfoMenu from './InfoMenu.svelte';

  import { isShowingAnswered } from './stores';
  import { fs } from './firebase';

  let ansRef = fs.collection('questions').where('times_ans', '>', 0);
  let unansRef = fs.collection('questions').where('times_ans', '==', 0);

  let answered = [];
  let sizeAns = 0;
  let extra_ans = [];

  let unanswered = [];
  let sizeUnans = 0;
  let extra_unans = [];

  fs.collection('niches').doc('estudia-en-casa').onSnapshot(docSnapshot => {
    let niche = docSnapshot.data();
    sizeAns = niche.answered;
    sizeUnans = niche.unanswered;
  });

  ansRef.onSnapshot(querySnapshot => {
    let docs = [];
    querySnapshot.forEach(doc => {
      docs.push({...doc.data(), id: doc.id});
    });

    answered = [...docs];
  });


  unansRef.onSnapshot(querySnapshot => {
    let docs = [];
    querySnapshot.forEach(doc => {
      docs.push({...doc.data(), id: doc.id});
    });

    unanswered = [...docs];
  });

  function showExtra() {
  }
</script>

<svelte:head>
  <style src="./mystyles.scss"/>
</svelte:head>

<main>
  <Title></Title>
  <section class="section pt-0">
    <div class="container">
      <QuestionsHeader numAns={sizeAns} numUnans={sizeUnans}></QuestionsHeader>
      <div class="columns">
        <div class="column">
          {#if $isShowingAnswered}
            <Questions questions={answered}></Questions>
            <Questions questions={extra_ans}></Questions>
            {#if sizeAns > 10}
            <button class="button is-fullwidth" on:click={showExtra}>Mostrar m&aacute;s preguntas</button>
            {/if}
          {:else}
            <Questions questions={unanswered}></Questions>
            <Questions questions={extra_unans}></Questions>
            {#if sizeUnans > 10}
            <button class="button is-fullwidth" on:click={showExtra}>Mostrar m&aacute;s preguntas</button>
            {/if}
          {/if}
        </div>
        <div class="column is-one-fifth">
          <InfoMenu></InfoMenu>
        </div>
      </div>
    </div>
  </section>
</main>
