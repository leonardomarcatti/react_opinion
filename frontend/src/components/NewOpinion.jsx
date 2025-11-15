import NewOpinionForm from "./NewOpinionForm";
import useSubmitHook from '../hooks/useSubmitHook'

const NewOpinion = () => {
   const { formAction, formState } = useSubmitHook()

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
        <NewOpinionForm action={formAction} formState={formState}/>
    </div>
  );
}

export default NewOpinion