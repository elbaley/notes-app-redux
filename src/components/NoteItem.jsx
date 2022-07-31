const NoteItem = ({ color, text }) => {
  return <article className={`note ${color}`}>{text}</article>;
};

export default NoteItem;
