type ContactListProps = {
  children: React.ReactNode;
};

export default function ContactList({ children }: ContactListProps) {
  return <ul className="w-[50vw] p-8 rounded-xl bg-white/10">{children}</ul>;
}
