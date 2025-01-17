import { ConsoleData, TestResults } from "@/lib/useRace"
import { useEffect, useState } from "react"

function ChallengeConsole({
  consoleData,
  syntaxError,
}: {
  consoleData: ConsoleData | null
  syntaxError: string | null
}) {
  const [testResults, setTestResults] = useState<Array<TestResults> | null>(
    null,
  )
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    if (consoleData) setTestResults(consoleData?.testResults)
    if (syntaxError) setError(syntaxError)
  }, [consoleData, syntaxError])

  return (
    <div>
      <h1>Test Results:</h1>
      {error ? <h3>{error}</h3> : null}
      {testResults
        ? testResults.map((test, index) => {
            return (
              <div>
                <h3
                  className={test.passed ? "text-green-500" : "text-red-500"}
                  key={index}
                >
                  {test.name} {test.passed ? `successfully passed` : `failed: `}
                </h3>
                <h3 className="text-red-500">
                  {`Expected ${JSON.stringify(test.expected)}, got ${JSON.stringify(test.result)} with input ${JSON.stringify(test.input)}`}
                </h3>
              </div>
            )
          })
        : null}
    </div>
  )
}
export default ChallengeConsole
