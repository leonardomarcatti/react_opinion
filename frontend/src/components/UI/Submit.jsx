/*
* Esse hook deve ser usado em componentes filho.
*/

import { useFormStatus } from 'react-dom'

const Submit = () => {
   const { pending } = useFormStatus()
   return <p className="actions">
      <button type="submit" disabled={pending}>{pending ? 'Sending data...' : 'Submit'}</button>
   </p>
}

export default Submit