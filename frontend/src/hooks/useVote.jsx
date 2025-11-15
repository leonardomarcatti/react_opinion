import { use, useActionState, useOptimistic } from "react";
import {OpinionsContext} from '../store/opinions-context'

const useVote = (id, votes) => {
   const { downvoteOpinion, upvoteOpinion } = use(OpinionsContext)

   const [optimisticVotes, setVotes] = useOptimistic(votes, (prevState, mode) => mode == 'up'? prevState++ : prevState--)

   const upvoteAction = async () => {
      setVotes('up')
      await upvoteOpinion(id);
   }

   const downvoteAction = async () => {
      setVotes('down')
      await downvoteOpinion(id);
   }

   const [upState, upVoteAction, upPending] = useActionState(upvoteAction)
   const [downState, downVoteAction, downPending] = useActionState(downvoteAction)

   return {upVoteAction, downVoteAction, upPending, downPending, optimisticVotes}
}

export default useVote