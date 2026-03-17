import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddToDo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const addTOdoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <form onSubmit={addTOdoHandler} className="flex justify-center items-center gap-4 mt-16 px-4">
      <input
        type="text"
        // Key changes: rounded-sm for precision, richer gray border/bg, subtle emerald focus halo
        className="w-full max-w-lg bg-zinc-950/70 text-zinc-100 rounded-sm border border-zinc-700/60 focus:border-emerald-700/80 focus:ring-1 focus:ring-emerald-900 focus:outline-none py-2.5 px-4 text-sm leading-relaxed tracking-wide placeholder:text-zinc-600 transition duration-300"
        placeholder="Enter new project deliverable..." // More formal terminology
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        // Key changes: rounded-sm, sophisticated rich emerald green, high-end subtle "aura" glow
        className="text-white bg-emerald-700 hover:bg-emerald-600 rounded-sm py-2.5 px-7 text-xs font-bold uppercase tracking-widest transition duration-300 shadow-[0_0_12px_rgba(16,185,129,0.3)] hover:shadow-[0_0_18px_rgba(16,185,129,0.5)] active:scale-[0.98]"
      >
        Record Milestone
      </button>
    </form>
  );
}

export default AddToDo;