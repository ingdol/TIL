import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import {
  arrayMove,
  verticalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableItem } from "./SortableItem";

function App() {
  const [languages, setLanguages] = useState([
    "JavaScript",
    "Python",
    "TypeScript",
  ]);

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Container className="p-3" align="center">
        <h3>Drag and Drop</h3>
        <SortableContext
          items={languages}
          strategy={verticalListSortingStrategy}
        >
          {/* We need components that use the useSortable hook */}
          {languages.map(language => (
            <SortableItem key={language} id={language} />
          ))}
        </SortableContext>
      </Container>
    </DndContext>
  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;
    console.log("ACTIVE :" + active.id);
    console.log("OVER :" + over.id);

    if (active.id !== over.id) {
      setLanguages(items => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
}

export default App;
