import { useActionState, use } from 'react'
import { OpinionsContext } from '../store/opinions-context'

const useSubmitHook = () => {
   const {addOpinion} = use(OpinionsContext)

   const handleSubmit = async (prevState, formData) => {
      const title = formData.get('title')
      const body = formData.get('body')
      const userName = formData.get('userName')

      let errors = []

      if (title.trim().length < 5) {
         errors.push('Title is too short. It must has at least 5 characteres long')
      }

      if (body.trim().length < 10 || body.trim().length > 300) {
         errors.push('Opinion must be between 10 and 300 charactes long')
      }

      if (!userName.trim()) {
         errors.push('Provide user name')
      }

      if (errors.length > 0) {
         return { errors, values: { title, body, userName } }
      }

      await addOpinion({title, body, userName})
      return { errors: null }
   }

   const [formState, formAction] = useActionState(handleSubmit, { errors: null })

   return {formState, formAction}
}

export default useSubmitHook