export type Person = {
  name: string;
  image: string;
  title: string;
  location: string;
  about: string;
};

export type ModalProps = {
  activePerson: Person | null;
  closeModal: () => void;
};

export interface SummaryCardProps {
  variant?: 'green' | 'yellow' | 'blue' | 'red';
}