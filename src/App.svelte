<script lang="typescript">
  import Title from './Title.svelte';
  import NewQuestion from './NewQuestion.svelte';
  import QuestionsHeader from './QuestionsHeader.svelte';
  import Questions from './Questions.svelte';

  import type { QuestionType, AnswerType } from './models';

  let isShowingAnswered: boolean = true;

  let questions: QuestionType[] = [
    {
      date: '12/02/2020',
      question: 'Cual es la pregunta?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ille enim occurrentia nescio quae comminiscebatur; Ad eos igitur converte te, quaeso. Non quam nostram quidem, inquit Pomponius iocans; Sedulo, inquam, faciam. Quamquam id quidem licebit iis existimare, qui legerint. Septem autem illi non suo, sed populorum suffragio omnium nominati sunt.',
      answers: [
        {
          date: '03/04/2020',
          answer: 'Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Mihi quidem Antiochum, quem audis, satis belle videris attendere. Id mihi magnum videtur.'
        }, {
          date: '12/02/2020',
          answer: 'Quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? An haec ab eo non dicuntur? Ita graviter et severe voluptatem secrevit a bono.'
        }, {
          date: '03/02/2040',
          answer: 'Negat esse eam, inquit, propter se expetendam. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere?'
        }, {
          date: '12/02/2021',
          answer: 'Haec quo modo conveniant, non sane intellego. Esse enim quam vellet iniquus iustus poterat inpune. An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia?'
        }
      ]
    }, {
      date: '12/04/2021',
      question: 'Are we here just to eat?',
      description: 'Idemque diviserunt naturam hominis in animum et corpus. Et non ex maxima parte de tota iudicabis? Si mala non sunt, iacet omnis ratio Peripateticorum. Quid, quod res alia tota est? Quae duo sunt, unum fa',
      answers: [
        {
          date: '03/02/2021',
          answer: 'An vero, inquit, quisquam potest probare, quod perceptfum, quod. Idemne, quod iucunde? Ac ne plura complectar-sunt enim innumerabilia-, bene laudata virtus voluptatis ad'
        }, {
          date: '12/04/2021',
          answer: ' Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Haec quo modo conveniant, non sane intellego. Inde sermone vario sex illa a Dipylo stadia confecimus. Ait enim se, si uratur, Quam hoc suave! dicturum. At iam decimum annum in spelunca iacet.'
        }, {
          date: '12/04/2021',
          answer: ' Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Haec quo modo conveniant, non sane intellego. Inde sermone vario sex illa a Dipylo stadia confecimus. Ait enim se, si uratur, Quam hoc suave! dicturum. At iam decimum annum in spelunca iacet.'
        }, {
          date: '12/04/2021',
          answer: ' Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Haec quo modo conveniant, non sane intellego. Inde sermone vario sex illa a Dipylo stadia confecimus. Ait enim se, si uratur, Quam hoc suave! dicturum. At iam decimum annum in spelunca iacet.'
        }, {
          date: '12/04/2021',
          answer: ' Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Haec quo modo conveniant, non sane intellego. Inde sermone vario sex illa a Dipylo stadia confecimus. Ait enim se, si uratur, Quam hoc suave! dicturum. At iam decimum annum in spelunca iacet.'
        }, {
          date: '12/04/2021',
          answer: ' Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Haec quo modo conveniant, non sane intellego. Inde sermone vario sex illa a Dipylo stadia confecimus. Ait enim se, si uratur, Quam hoc suave! dicturum. At iam decimum annum in spelunca iacet.'
        }, {
          date: '12/04/2021',
          answer: ' Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Haec quo modo conveniant, non sane intellego. Inde sermone vario sex illa a Dipylo stadia confecimus. Ait enim se, si uratur, Quam hoc suave! dicturum. At iam decimum annum in spelunca iacet.'
        }, {
          date: '12/04/2021',
          answer: ' Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Haec quo modo conveniant, non sane intellego. Inde sermone vario sex illa a Dipylo stadia confecimus. Ait enim se, si uratur, Quam hoc suave! dicturum. At iam decimum annum in spelunca iacet.'
        }, {
          date: '12/04/2021',
          answer: ' Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Haec quo modo conveniant, non sane intellego. Inde sermone vario sex illa a Dipylo stadia confecimus. Ait enim se, si uratur, Quam hoc suave! dicturum. At iam decimum annum in spelunca iacet.'
        }, {
          date: '12/04/2021',
          answer: ' Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Haec quo modo conveniant, non sane intellego. Inde sermone vario sex illa a Dipylo stadia confecimus. Ait enim se, si uratur, Quam hoc suave! dicturum. At iam decimum annum in spelunca iacet.'
        }, {
          date: '12/04/2021',
          answer: ' Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Haec quo modo conveniant, non sane intellego. Inde sermone vario sex illa a Dipylo stadia confecimus. Ait enim se, si uratur, Quam hoc suave! dicturum. At iam decimum annum in spelunca iacet.'
        }, {
          date: '12/02/2021',
          answer: 'Sed emolumenta communia esse dicuntur, recte autem facta et peccata non habentur communia. Si enim ad populum me vocas, eum. Atque hoc loco similitudines eas, quibus illi uti solent'
        }
      ]
    }, {
      date: '03/04/2021',
      question: 'This questions has answers.',
      description: '',
      answers: [
        {
          date: '12/04/2021',
          answer: ' Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Haec quo modo conveniant, non sane intellego. Inde sermone vario sex illa a Dipylo stadia confecimus. Ait enim se, si uratur, Quam hoc suave! dicturum. At iam decimum annum in spelunca iacet.'
        }, {
          date: '12/04/2021',
          answer: ' Quamquam non negatis nos intellegere quid sit voluptas, sed quid ille dicat. Haec quo modo conveniant, non sane intellego. Inde sermone vario sex illa a Dipylo stadia confecimus. Ait enim se, si uratur, Quam hoc suave! dicturum. At iam decimum annum in spelunca iacet.'
        }, {
          date: '12/02/2021',
          answer: 'Sed emolumenta communia esse dicuntur, recte autem facta et peccata non habentur communia. Si enim ad populum me vocas, eum. Atque hoc loco similitudines eas, quibus illi uti solent'
        }
      ]
    }
  ];
  
  let unquestions: QuestionType[] = [
    {
      date: '12/02/2020',
      question: 'Esta no respondida o si?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ille enim occurrentia nescio quae comminiscebatur; Ad eos igitur converte te, quaeso. Non quam nostram quidem, inquit Pomponius iocans; Sedulo, inquam, faciam. Quamquam id quidem licebit iis existimare, qui legerint. Septem autem illi non suo, sed populorum suffragio omnium nominati sunt.',
    }, {
      date: '12/04/2021',
      question: 'Are we here just to eat no resp?',
      description: 'Idemque diviserunt naturam hominis in animum et corpus. Et non ex maxima parte de tota iudicabis? Si mala non sunt, iacet omnis ratio Peripateticorum. Quid, quod res alia tota est? Quae duo sunt, unum fa',
    }, {
      date: '03/04/2021',
      question: 'This questions has non answers.',
      description: ''
    }
  ];
</script>

<svelte:head>
  <style src="./mystyles.scss"/>
</svelte:head>

<main>
  <Title></Title>
  <section class="section pt-0">
    <div class="container">
      <QuestionsHeader numAns={questions.length} numUnans={unquestions.length} bind:isShowingAnswered={isShowingAnswered}></QuestionsHeader>
      {#if isShowingAnswered}
        <Questions questions={questions}></Questions>
      {:else}
        <Questions questions={unquestions}></Questions>
      {/if}
    </div>
  </section>
</main>
