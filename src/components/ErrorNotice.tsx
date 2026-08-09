interface ErrorNoticeProps {
  message: string;
}

const ErrorNotice = ({ message }: ErrorNoticeProps) => {
  return (
    <div className="mx-auto max-w-md rounded border border-rust bg-surface p-6 text-center">
      <p className="font-catalog text-xs uppercase tracking-widest text-rust">
        Couldn't load that
      </p>
      <p className="mt-2 text-sm text-paper-dim">{message}</p>
    </div>
  );
};

export default ErrorNotice;
