import { useEffect, useState, type FC, type FormEvent } from "react";
import SimpldeMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { mdeOptions, selectStyles } from "../../constants";
import ReactSelect from "react-select/creatable";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Check, X } from "lucide-react";
import type { NoteValues } from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/helpers";
import { addNote, updateNote } from "../../redux/noteSlice";
import { toast } from "react-toastify";

const Form: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { notes } = useAppSelector((store) => store.noteReducer);
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // düzenleme modundaysak notun bilgilerini state'e aktar
  useEffect(() => {
    if (id) {
      const found = notes.find((note) => note.id == id);
      setTitle(found!.title);
      setContent(found!.content);
      setSelectedTags(found!.tags);
    } else {
      setTitle("");
      setContent("");
      setSelectedTags([]);
    }
  }, [id, notes]);

  // form gönderilince çalışır:
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // form verisini nesne formatına getirdik
    const values: NoteValues = {
      title,
      content,
      tags: selectedTags,
    };

    // reducer'a haber ver
    if (id) {
      dispatch(updateNote({ id, values }));
      toast.success("Not başarıyla güncellendi");
      navigate(`/note/${id}`);
    } else {
      dispatch(addNote(values));
      toast.success("Not başarıyla oluşturuldu");
      navigate("/");
    }
  };

  // note etiketlerini benzersiz bir dizi formatına çevir
  const createdTags = [...new Set(notes.map((note) => note.tags).flat())];

  return (
    <div>
      {/* Sayfa Başlığı */}
      <div>
        <h1 className="text-2xl font-bold text-text-primary">{id ? "Notu Düzenle" : "Yeni Not Oluştur"}</h1>
        <p className="text-text-secondary">Fikirlerinizi ve notlarınızı kaydedin</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="card p-6 sm:p-8 animate-slide-up mt-6">
        {/* Başlık */}
        <div className="mb-6">
          <label htmlFor="title" className="label">
            Başlık:
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-4 py-2.5 bg-card border border-border rounded-md text-text-primary focus:ring-2 focus:ring-primary/30 transition placeholder:text-text-secondary"
            placeholder="Not başlığını giriniz"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        {/* İçerik */}
        <div className="mb-6">
          <label htmlFor="content" className="label">
            İçerik:
          </label>

          <SimpldeMDE
            id="content"
            options={mdeOptions}
            className="w-full markdown-editor bg-transparent"
            onChange={(value) => setContent(value)}
            value={content}
          />
        </div>

        {/* Etiketler */}
        <div className="mb-6">
          <label htmlFor="tags" className="label">
            Etiketler
          </label>

          <ReactSelect
            styles={selectStyles}
            isMulti
            onChange={(tags) => setSelectedTags(tags.map((tag) => tag.value))}
            value={selectedTags.map((tag) => ({ value: tag, label: tag }))}
            options={createdTags.map((tag) => ({ value: tag, label: tag }))}
            placeholder="Etiket Seçiniz"
          />
        </div>

        {/* Butonlar */}
        <div className="flex flex-col md:flex-row gap-3 pt-4 border-t border-border">
          <Link to="/" className="form-button">
            <X className="size-4 mr-1.5" />
            İptal
          </Link>

          <button type="submit" className="form-button bg-primary hover:bg-primary-hover">
            <Check className="size-4 mr-1.5" />
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
