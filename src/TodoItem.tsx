import clsx from 'clsx';

type ToDoType = {
  label: string;
  status: string,
  id: string
};

interface ToDoItemProps {
  status: string,
  label: string,
  onChecked: (numStatus: string) => void
}

export type {ToDoType};
export const TodoItem = ({status, label, onChecked}: ToDoItemProps): JSX.Element => {
  return (
    <div
      className={clsx('p-4 flex items-center', {
        'bg-gray-200': status === 'archived',
      })}
    >
      <span
        className={clsx('w-full block', { 'line-through': status !== 'open' })}
      >
        {label}
      </span>
      <input
        checked={status !== 'open'}
        disabled={status === 'archived'}
        type="checkbox"
        className="rounded text-pink-500 ml-8 cursor-pointer disabled:cursor-not-allowed disabled:bg-black disabled:hover:bg-black"
        onChange={(): void => onChecked(status === 'open' ? 'done' : 'open')}
      />
    </div>
  );
};
