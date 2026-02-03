import { useState, type FC } from "react";
import { useAppSelector } from "../../utils/helpers";
import Head from "../../components/home/head";
import Filter from "../../components/home/filter";
import List from "../../components/home/list";
import Total from "../../components/home/total";

const Home: FC = () => {
  const { notes } = useAppSelector((store) => store.noteReducer);
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  // seçili title ve etiketlere göre notları filtrele
  const filtredNotes = notes.filter((note) => {
    // başlık filtrelemesi
    const titleFilter = note.title.toLowerCase().includes(title.toLowerCase());

    // etiket filtrelemesi
    const tagsFilter = tags.every((tag) => note.tags.includes(tag));

    return titleFilter && tagsFilter;
  });

  return (
    <>
      <Head />

      <Filter setTitle={setTitle} setTags={setTags} />

      <List notes={filtredNotes} />

      <Total filtredCount={filtredNotes.length} totalCount={notes.length} />
    </>
  );
};

export default Home;
