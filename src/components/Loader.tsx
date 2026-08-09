interface LoaderProps {
  label?: string;
}

const Loader = ({ label = "Loading catalog..." }: LoaderProps) => {
  return (
    <div className="flex flex-col items-center gap-3 py-24 text-paper-dim">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-border border-t-amber" />
      <p className="font-catalog text-xs uppercase tracking-widest">{label}</p>
    </div>
  );
};

export default Loader;
