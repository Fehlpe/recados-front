import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/modules/hooks";
import {
  deleteNote,
  getAllUserNotes,
} from "../../../store/modules/notes/NotesSlice";
import Note from "../../../utils/interfaces/Note";
import Modal from "./Modal";

interface NotesProps {
  loggedUser: string;
}

const Notes: React.FC<NotesProps> = ({ loggedUser }) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();

  const userNotes = useAppSelector((state) => state.notes.userNotes);

  return (
    <>
      {userNotes.map((value) => {
        return (
          <div
            id={value.id}
            key={value.id}
            className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4"
          >
            <div>
              <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                {value.title}
              </h4>
              <p className="text-gray-800 dark:text-gray-100 text-sm">
                {value.description}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                <p className="text-sm">March 28, 2020</p>
                <div className="flex items-center justify-between w-24">
                  <button>
                    <div className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-pencil"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                      </svg>
                    </div>
                  </button>

                  <button onClick={() => setShowModal(true)}>
                    <div className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <Modal
              id={value.id!}
              loggedUser={loggedUser}
              isVisible={showModal}
              onClose={() => setShowModal(false)}
            />
          </div>
        );
      })}
    </>
  );
};

export default Notes;
