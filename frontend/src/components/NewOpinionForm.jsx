import Submit from "./UI/Submit"

const NewOpinionForm = ({ action, formState }) => {   
   return <form action={action}>
      <div className="control-row">
         <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.values?.userName}/>
         </p>

         <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.values?.title} />
         </p>
      </div>
      <p className="control">
         <label htmlFor="body">Your Opinion</label>
         <textarea id="body" name="body" rows={5} defaultValue={formState.values?.body}></textarea>
      </p>

      {
         formState.errors && <ul className="errors">
            {
               formState.errors.map(el => {
                  return <li key={el}>{el}</li>
               })
            }
         </ul>
      }

      <Submit />
   </form>
}

export default NewOpinionForm