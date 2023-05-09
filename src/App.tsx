import { useState } from "react";

import Cell from "@/components/Cell";
import NumberIndicator from "@/components/NumberIndicator";

import { getInitialState } from "@/common/utils/game";

function App() {
  const [boardState, setBoardState] = useState(getInitialState());

  console.log({ boardState });

  return (
    <main className="grid place-content-center min-h-screen bg-neutral-800 text-white">
      <section className="border p-2">
        <header className="flex gap-3 justify-between items-center">
          <NumberIndicator number={"000"} />
          <button className="text-xl bg-blue-500 hover:bg-blue-600 transition-colors rounded-lg px-4 py-2">
            Start
          </button>
          <NumberIndicator number={"000"} />
        </header>

        <div className="grid grid-cols-9 grid-rows-[repeat(9,1fr)] text-center mt-3">
          {boardState.map((row, rowIndex) =>
            row.map((col, colIndex) => <Cell key={`${rowIndex}-${colIndex}`}>{col.value}</Cell>)
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
