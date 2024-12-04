import React, { useState } from "react";
import { Contact } from "./ContactBook";

type ContactListItemProps = {
  contact: Contact;
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
};

export default function ContactListItem({
  contact,
  contacts,
  setContacts,
}: ContactListItemProps) {
  const [editing, setEditing] = useState(false);
  const [activeContact, setActiveContact] = useState(contact);
  const handleDeleteContact = (contact: Contact) => {
    setContacts(
      contacts.filter(
        (entry) => entry.name !== contact.name || entry.city !== contact.city
      )
    );
  };

  const handleEditContact = () => {
    setEditing(!editing);
    setContacts(
      contacts.map((entry) => {
        if (entry.name === contact.name && entry.city === contact.city) {
          return activeContact;
        } else {
          return entry;
        }
      })
    );
  };

  return (
    <li className="px-8 py-4 flex flex-row justify-between items-center my-5 bg-white/10 hover:bg-white/40 rounded-lg transition">
      <div className="flex flex-col">
        {!editing ? (
          <>
            <h2>{contact.name}</h2>
            <p>
              City: <em>{contact.city}</em>
            </p>
          </>
        ) : (
          <>
            <p className="text-left">Name: </p>
            <input
              className="text-black rounded-md my-2 px-4 py-1 w-full"
              value={activeContact.name}
              onChange={(e) =>
                setActiveContact({ ...activeContact, name: e.target.value })
              }
            />
            <p className="text-left">City: </p>
            <input
              className="text-black rounded-md my-2 px-4 py-1 w-full"
              value={activeContact.city}
              onChange={(e) =>
                setActiveContact({ ...activeContact, city: e.target.value })
              }
            />
          </>
        )}
      </div>
      <div className="flex gap-x-4">
        <button className="p-2" onClick={handleEditContact}>
          {!editing ? "📝" : "✔"}
        </button>
        <button className="p-2" onClick={() => handleDeleteContact(contact)}>
          🗑
        </button>
      </div>
    </li>
  );
}
