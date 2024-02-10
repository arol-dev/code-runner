import { codingChallengesList } from "../../server/src/database/codingChallenges"
import { ScrollArea } from "@/components/ui/scroll-area"

function ChallengeDescription() {
  const challenge = codingChallengesList.map((challenge) => challenge)

  return (
    <div>
      <div>
        <h1 className="h-[50px] w-[350px] rounded-md border p-4">
          Challenge Name : {challenge[0].name}
        </h1>
        <ScrollArea className="h-[200px] w-[700px] rounded-md border p-4">
          Description : {challenge[0].description}
        </ScrollArea>
      </div>
    </div>
  )
}

export default ChallengeDescription
