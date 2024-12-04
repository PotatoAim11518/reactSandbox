import { useState } from "react";
import ContactList from "./ContactList";
import ContactListItem from "./ContactListItem";

const DEFAULT_CONTACTS = [
  {
    name: "John Doe",
    city: "London",
  },
  {
    name: "Jane Doe",
    city: "London",
  },
  {
    name: "Jack Sparrow",
    city: "N/A",
  },
];

export type Contact = {
  name: string;
  city: string;
};

export default function ContactBook() {
  const [contacts, setContacts] = useState<Contact[]>(DEFAULT_CONTACTS);
  return (
    <>
      <h1>Contact Book</h1>
      <div className="flex justify-center gap-10">
        <AddContactForm contacts={contacts} setContacts={setContacts} />
        <ContactList>
          {contacts.map((contact, i) => (
            <ContactListItem
              key={contact.name + contact.city + i}
              contact={contact}
              contacts={contacts}
              setContacts={setContacts}
            />
          ))}
        </ContactList>
      </div>
    </>
  );
}

type AddContactFormProps = {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
};

function AddContactForm({ contacts, setContacts }: AddContactFormProps) {
  const [contact, setContact] = useState<Contact>({ name: "", city: "" });
  const handleAddContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContacts([...contacts, contact]);
    setContact({ name: "", city: "" });
  };
  // console.log(contacts);
  return (
    <div className="w-[25vw] max-h-[30vh] p-8 rounded-xl bg-white/10">
      <form
        onSubmit={handleAddContact}
        className="flex flex-col justify-start items-start gap-4 "
      >
        <h2>Add a new contact</h2>
        <label htmlFor="name" className="text-left w-full">
          Name:
          <input
            value={contact.name}
            onChange={(event) =>
              setContact({ ...contact, name: event.currentTarget.value })
            }
            id="name"
            className="text-black rounded-md my-2 px-4 py-1 w-full"
          />
        </label>
        <label htmlFor="city" className="text-left w-full">
          City:
          <input
            value={contact.city}
            onChange={(event) =>
              setContact({ ...contact, city: event.currentTarget.value })
            }
            id="city"
            className="text-black rounded-md my-2 px-4 py-1 w-full"
          />
        </label>
        <div className="flex flex-row-reverse w-full">
          <button
            type="submit"
            className="px-4 py-1 rounded-lg border-2 border-slate-500/50 hover:bg-blue-500/50 bg-blue-900 active:scale-105 hover:border-2 transition"
          >
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
}
